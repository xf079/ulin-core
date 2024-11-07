import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import electronRenderer from 'vite-plugin-electron-renderer';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react(), svgr(), electronRenderer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/renderer')
    }
  }
});
