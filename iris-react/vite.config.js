import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 흐름: 브라우저(5173) -> Vite 프록시 -> Spring(8080) -> FastAPI
// /api 요청을 Vite가 대신 Spring으로 전달하므로 CORS 설정이 필요 없다.
// 단, 프록시는 npm run dev 에서만 동작하므로 배포 시에는 Spring에 CORS 설정이 필요하다.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // /api/predict -> http://localhost:8080/api/predict
      "/api": "http://localhost:8080",
    },
  },
});
