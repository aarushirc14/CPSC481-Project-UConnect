import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/UConnect/", // Replace "UConnect" with your GitHub repository name
});
