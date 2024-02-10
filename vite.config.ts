import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), sassDts(), tsconfigPaths()],
  server: { port: 3000 },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      cssModules: { pattern: '[name]_[local]' }
    }
  },
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: (path) =>
          path.split('/').reverse()[
            path.split('/').reverse().indexOf('node_modules') - 1
          ]
      }
    }
  }
})
