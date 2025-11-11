import { fileURLToPath, URL } from 'node:url'
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'ui-vendor': ['@radix-ui/react-slot'],
        },
      },
    },
    // Enable source maps for better debugging
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // Additional optimizations
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    // Enable compression
    reportCompressedSize: false, // Disable to avoid build overhead
  },
  // Enable gzip compression
  server: {
    compress: true,
  },
  // Image optimization
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp', '**/*.svg'],
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
  // Build optimizations for better performance
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
