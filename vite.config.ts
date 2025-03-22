import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/download/",
  server: {
    cors: true, // 默认启用并允许任何源
    //反向代理配置，注意rewrite写法
    proxy: {
      "/apim": {
        target: "https://api.manitori.xyz", //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apim/, "api-mobile"),
      },
      "/api": {
        target: "https://api.manitori.xyz", //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "api"),
      },
    },
  },
});
