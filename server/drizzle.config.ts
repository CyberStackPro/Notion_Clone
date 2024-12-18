import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
// import * as dotenv from 'dotenv';

// dotenv.config();

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL is not defined in environment variables');
// }

export default defineConfig({
  out: './drizzle',
  schema: './src/**/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },

  verbose: true,
  strict: true,
  // migrations: {
  //   prefix: 'timestamp',
  //   table: '__drizzle_migrations__',
  //   schema: 'public',
  // },
});
