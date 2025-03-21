import { Pool } from '@neondatabase/serverless';
import * as schema from "@shared/schema";
import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import ws from 'ws';

// Configure WebSocket for Neon
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create SQL connection
const sql = neon(process.env.DATABASE_URL);

// Create Drizzle instance
export const db = drizzle(sql, { schema });