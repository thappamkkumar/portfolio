import { Pool } from 'pg';

// Parse the connection string from .env
const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? {
        rejectUnauthorized: false, // For cloud DBs with self-signed certs
      }
    : false, // No SSL in dev
  max: 10, // optional: max connections in pool
  idleTimeoutMillis: 30000, // optional: close idle clients after 30s
  connectionTimeoutMillis: 2000, // optional: timeout if cannot connect
});

export default pool;
