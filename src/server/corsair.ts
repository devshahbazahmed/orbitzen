import "dotenv/config";
import { createCorsair } from "corsair";
import { Pool } from "pg";
import { gmail } from "@corsair-dev/gmail";
import { googlecalendar } from "@corsair-dev/googlecalendar";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const corsair = createCorsair({
  plugins: [
    gmail({
      authType: "oauth_2",
      redirect_url: process.env.GOOGLE_GMAIL_REDIRECT_URI,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    googlecalendar({
      authType: "oauth_2",
      redirect_url: process.env.GOOGLE_GMAIL_REDIRECT_URI,
    }),
  ],
  database: pool,
  kek: process.env.CORSAIR_KEK!,
  multiTenancy: true,
});
