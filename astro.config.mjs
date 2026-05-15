import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  // ─── SSR Mode ─────────────────────────────────────────────────────────────
  output: "server",

  // ─── Node.js Adapter (for Fastify/Cloudways deployment) ──────────────────
  adapter: node({
    mode: "standalone",
  }),

  // ─── Server Config ────────────────────────────────────────────────────────
  server: {
    port: 4321,
    host: true,
  },

  // ─── Vite Config ──────────────────────────────────────────────────────────
  vite: {
    define: {
      "import.meta.env.PUBLIC_API_URL": JSON.stringify(
        process.env.PUBLIC_API_URL || "http://localhost:4000"
      ),
    },
  },
});
