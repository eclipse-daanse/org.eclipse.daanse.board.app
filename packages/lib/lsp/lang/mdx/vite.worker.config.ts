import { defineConfig } from 'vite'
import { resolve } from 'path'

// The language server worker, built self-contained.
//
// Deliberately the inverse of vite.config.ts: nothing is external, so Langium,
// Chevrotain, the grammar and the validators are all bundled into this one
// chunk. That is the point — the worker must not resolve bare imports at
// runtime, and none of it may reach the consuming application's main bundle.
//
// emptyOutDir is off because the library build runs first and owns dist/.
export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: false,
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'worker/mdx-server.worker.ts'),
      formats: ['es'],
      fileName: () => 'mdx-server.worker.js',
    },
    rollupOptions: {
      external: [],
      output: { inlineDynamicImports: true },
    },
  },
})
