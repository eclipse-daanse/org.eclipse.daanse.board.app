import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'org.eclipse.daanse.board.app.ui.vue.common.lsp',
      fileName: 'org.eclipse.daanse.board.app.ui.vue.common.lsp',
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0'),
      output: { globals: { vue: 'Vue' } },
    },
  },
  plugins: [dts({ insertTypesEntry: true }), vue(), libCss()],
})
