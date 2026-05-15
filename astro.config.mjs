import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

// Vercel sets VERCEL=1 during builds; VERCEL_ENV is also present in CI.
const isVercel = Boolean(process.env.VERCEL || process.env.VERCEL_ENV);

export default defineConfig({
  output: "server",

  adapter: isVercel
    ? vercel()
    : node({
        mode: "standalone",
      }),

  server: {
    port: 4321,
    host: true,
  },
});
