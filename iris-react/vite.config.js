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
      // 프록시가 우회시켜주어서 CORS 문제가 발생하지 않음
      // 개발 단계에서만 이런 방법을 쓴다
      // 배포 단계에서는 Spring에서 CORS 설정을 해주어야 한다.
      "/api": "http://localhost:8080",
    },
  },
});
