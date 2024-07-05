import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/createAddress": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/findContact": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/deleteContact": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/updateAddress": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
