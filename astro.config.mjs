import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

const isVercel = Boolean(process.env.VERCEL || process.env.VERCEL_ENV);

export default defineConfig({
  output: "server",

  // Vercel: serverless adapter · Cloudways/VPS: standalone Node server
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
