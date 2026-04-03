import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // 1. 빌드 결과물이 CMT(백엔드)의 static 폴더로 가도록 경로 수정
    // CMTF에서 한 단계 위(..)로 가서 CMT 내부로 진입
    outDir: '../CMT/src/main/resources/static', 
    emptyOutDir: true, // 빌드 시 기존 static 폴더 내용 삭제
  },
  server: {
    proxy: {
      // 2. 개발 서버(npm run dev)에서 백엔드 API 포트(45770)로 프록시
      '/api/v1': {
        target: 'http://127.0.0.1:45770', 
        changeOrigin: true,
        secure: false,
      }
    }
  }
})