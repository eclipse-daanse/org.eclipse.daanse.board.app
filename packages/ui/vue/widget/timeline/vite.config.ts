import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    }),
    libCss(),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'TimelineWidget',
      formats: ['es', 'umd'],
      fileName: (format) => `org.eclipse.daanse.board.app.ui.vue.widget.timeline.${format === 'es' ? 'js' : 'umd.cjs'}`
    },
    rollupOptions: {
      external: ['vue',
        'org.eclipse.daanse.board.app.lib.core',
        'inversify',
        'reflect-metadata'],
      output: {
        globals: {
          vue:'Vue',
          'org.eclipse.daanse.board.app.lib.core':
            'org.eclipse.daanse.board.app.lib.core',
          inversify: 'inversify',
          'reflect-metadata': 'reflect-metadata',
        }
      }
    }
  }
})


