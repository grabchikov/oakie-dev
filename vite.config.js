import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/oakie-dev/",
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
