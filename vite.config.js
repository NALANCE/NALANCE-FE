import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "apis", replacement: "/src/apis" },
      { find: "assets", replacement: "/src/assets" },
      { find: "components", replacement: "/src/components" },
      { find: "hooks", replacement: "/src/hooks" },
      { find: "layout", replacement: "/src/layout" },
      { find: "pages", replacement: "/src/pages" },
      { find: "routes", replacement: "/src/routes" },
      { find: "styles", replacement: "/src/styles" },
      { find: "utils", replacement: "/src/utils" },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://54.180.228.18:8080", // 백엔드 서버 주소
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
