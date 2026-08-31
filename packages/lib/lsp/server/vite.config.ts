import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// Two entries, deliberately. `.` is the parse-tree serializer and is
// environment-neutral: the language packages' Node tests import it. `./worker`
// is the browser bootstrap and pulls `vscode-languageserver/browser`, which
// does not resolve under Node. Folding them together would break the tests.
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        worker: resolve(__dirname, 'src/worker.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0'),
    },
  },
  plugins: [dts({ insertTypesEntry: true })],
})
