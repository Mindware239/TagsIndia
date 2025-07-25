import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

console.log(`Database pool connecting to: ${process.env.DATABASE_URL.substring(0, 50)}...`);
export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('neon') || process.env.DATABASE_URL.includes('aws') ? { rejectUnauthorized: false } : false
});
export const db = drizzle(pool, { schema });