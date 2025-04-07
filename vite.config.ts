import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': './src/*'
    }
  },
  build: {
    outDir: 'dist', // 输出目录
    assetsDir: 'assets', // 静态资源目录
    sourcemap: true, // 生成源映射文件
    minify: 'terser', // 使用 Terser 进行压缩
    rollupOptions: {
      input: {
        main: 'index.html' // 主入口文件
        // 可以添加更多入口文件
      },
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js', // 输出 chunk 文件命名
        assetFileNames: 'assets/[name]-[hash][extname]' // 静态资源命名
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 代理目标地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
