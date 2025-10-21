import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/gabriel-scocozza-portfolio/' : '/';
  
  return {
    base,
    plugins: [
      tsconfigPaths(),
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(/%BASE_URL%/g, base);
        },
      },
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
            'mui-core': [
              '@mui/material',
              '@mui/system',
              '@emotion/react',
              '@emotion/styled',
            ],
            'mui-icons': ['@mui/icons-material'],
            redux: ['@reduxjs/toolkit', 'react-redux'],
          },
        },
      },
    },
  };
});
