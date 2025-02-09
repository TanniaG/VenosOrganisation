import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  build: {
    cssMinify: true,
    minify: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
