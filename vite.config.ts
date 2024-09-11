import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@routes": path.resolve(__dirname, "routes"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
