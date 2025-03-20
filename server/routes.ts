import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sql } from "drizzle-orm";
import { insertContactMessageSchema } from "@shared/schema";
import * as pg from "@neondatabase/serverless";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Create a new PostgreSQL client
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

// Connect with error handling
(async () => {
  try {
    await client.connect();
    console.log('Successfully connected to database');
  } catch (err) {
    console.error('Failed to connect to database:', err);
  }
})();

export function registerRoutes(app: Express): Server {
  // Add contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);

      // Insert the message into the database
      const result = await client.query(
        `INSERT INTO contact_messages (name, email, subject, message)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [validatedData.name, validatedData.email, validatedData.subject, validatedData.message]
      );

      // Send email notification
      await resend.emails.send({
        from: 'Grison Club <contact@grisonclub.org>',
        to: 'grisonclub@gmail.com',
        subject: `Nouveau message de contact: ${validatedData.subject}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>De:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Sujet:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `
      });

      // Send confirmation email to the sender
      await resend.emails.send({
        from: 'Grison Club <contact@grisonclub.org>',
        to: validatedData.email,
        subject: 'Confirmation de réception de votre message',
        html: `
          <h2>Nous avons bien reçu votre message</h2>
          <p>Cher(e) ${validatedData.name},</p>
          <p>Nous vous remercions d'avoir contacté le Grison Club. Nous avons bien reçu votre message concernant "${validatedData.subject}".</p>
          <p>Notre équipe vous répondra dans les plus brefs délais.</p>
          <p>Cordialement,<br>L'équipe du Grison Club</p>
        `
      });

      res.status(201).json({
        message: "Message envoyé avec succès",
        data: result.rows[0]
      });
    } catch (error: any) {
      console.error("Error in contact form submission:", error);

      if (error.name === "ZodError") {
        return res.status(400).json({
          message: "Données invalides",
          errors: error.errors
        });
      }

      res.status(500).json({
        message: "Une erreur est survenue lors de l'envoi du message"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}