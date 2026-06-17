import 'dotenv/config';
import { createCorsair } from 'corsair';
import { Pool } from 'pg';
import { gmail } from '@corsair-dev/gmail';
import { googlecalendar } from '@corsair-dev/googlecalendar';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const corsair = createCorsair({
  plugins: [gmail(), googlecalendar()],
  database: pool,
  kek: process.env.CORSAIR_KEK!,
  multiTenancy: true,
});
