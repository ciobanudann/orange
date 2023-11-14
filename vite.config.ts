import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {},

      esbuildOptions: {},

      include: "**/*.svg?react",

      exclude: "",
    }),
  ],
  server: {
    host: true,
    port: 8000,
  },
});
