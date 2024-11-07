import { defineConfig,Plugin, ResolvedConfig } from 'vite';
import path from 'path';


function restart(): Plugin {
  let config: ResolvedConfig;
  return {
    name: 'electron-forge-plugin-vite-restart',
    configResolved(_config) {
      config = _config;
    },
    closeBundle() {
      if (config.mode === 'production') {
        // https://github.com/electron/forge/blob/98b621dcace753c1bd33aeb301c64d03335abfdc/packages/plugin/vite/src/ViteConfig.ts#L36-L41
        return;
      }
      process.stdin.emit('data', 'rs');
    }
  };
}

// https://vitejs.dev/config
export default defineConfig({
  plugins: [restart()],
  resolve: {
    alias: {
      '@main': path.resolve(__dirname, 'src', 'main')
    }
  },
  build: {
    rollupOptions: {
      external: 'pouchdb'
    }
  }
});
