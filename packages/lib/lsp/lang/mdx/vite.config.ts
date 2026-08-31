import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// The library half. Everything bare is external, as everywhere else in this
// repo. The worker is NOT built here — see vite.worker.config.ts.
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'org.eclipse.daanse.board.app.lib.lsp.lang.mdx',
      fileName: 'org.eclipse.daanse.board.app.lib.lsp.lang.mdx',
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0'),
    },
  },
  plugins: [dts({ insertTypesEntry: true })],
})
