import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // check if it's for deployment or local development
  // base: process.env.NODE_ENV === "production" ? "" : "/",
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
    hmr: false
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
})
