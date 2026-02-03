import { defineConfig } from 'drizzle-kit';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

export default defineConfig({
  out: './drizzle/migration',
  schema: './model/db/schema.js',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME
  }
})

const client = createClient({
  url: process.env.DB_FILE_NAME
})

export const sqliteConnector = drizzle({ client })
