import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { contactMessages, insertContactMessageSchema } from "@shared/schema";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export function registerRoutes(app: Express): Server {
  // Add contact form endpoint
  app.post("/api/contact", async (req, res) => {
    console.log("Received contact form submission:", req.body);

    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      console.log("Validated data:", validatedData);

      // Insert the message into the database using Drizzle
      const [result] = await db.insert(contactMessages)
        .values({
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message
        })
        .returning();

      console.log("Message inserted into database:", result);

      // Send success response immediately
      res.status(201).json({
        message: "Message envoyé avec succès",
        data: result
      });

      // Send emails asynchronously after response
      try {
        await Promise.all([
          resend.emails.send({
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
          }),
          resend.emails.send({
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
          })
        ]);
        console.log("Confirmation emails sent successfully");
      } catch (emailError) {
        console.error("Error sending emails:", emailError);
      }

    } catch (error: any) {
      console.error("Error processing contact form:", error);

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