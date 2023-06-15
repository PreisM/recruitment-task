import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dynamicImport  from 'vite-plugin-dynamic-import'

export default defineConfig({
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@locales': path.resolve(__dirname, './src/locales')
    }
  },
  plugins: [
    vue(),
    dynamicImport()
  ]
})
