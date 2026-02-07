import { defineConfig } from 'drizzle-kit';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const databaseUrl = process.env.DB_FILE_NAME || "file:local.db";

export default defineConfig({
  out: './drizzle/migration',
  schema: './model/db/schema.js',
  dialect: 'sqlite',
  dbCredentials: {
    url: databaseUrl
  }
})

const client = createClient({
  url: databaseUrl
})

export const sqliteConnector = drizzle({ client })
