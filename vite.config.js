import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
    ],
    optimizeDeps: {
      force: true,
      include: ['react', 'react-dom'],
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'build',
      sourcemap: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          passes: 2,
        },
      },
      rollupOptions: {
        input: 'index.html',
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'routing': ['react-router-dom'],
            'ui-components': ['@dnd-kit/core', '@dnd-kit/sortable', 'react-resizable-panels'],
          },
        },
      },
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL, // Using environment variable
          changeOrigin: true,
          secure: false,
        },
        '/seo-snapshot': {
          target: env.VITE_API_URL, // Using environment variable
          changeOrigin: true,
          secure: false,
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test-setup.ts'],
    },
  };
});
