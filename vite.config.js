import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.antoniorice.com",
      routes: ["/", "software-engineer", "photographer", "cv"],
    }),
  ],
});
