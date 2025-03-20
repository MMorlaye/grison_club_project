import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sql } from "drizzle-orm";
import { insertContactMessageSchema } from "@shared/schema";
import * as pg from "@neondatabase/serverless";
import WebSocket from "ws";

// Create a new PostgreSQL client with WebSocket configuration
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  webSocketConstructor: WebSocket,
  useSecureWebSocket: true,
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