import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true
    }),
    libCss(),
    //@ts-ignore
    vue()
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'org.eclipse.daanse.board.app.ui.vue.widget.weather',
      fileName: 'org.eclipse.daanse.board.app.ui.vue.widget.weather',
    },
    rollupOptions: {
      external: [
        'vue',
        'org.eclipse.daanse.board.app.lib.core',
        'org.eclipse.daanse.board.app.ui.vue.composables',
        'inversify',
        'reflect-metadata',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'org.eclipse.daanse.board.app.lib.core':
            'org.eclipse.daanse.board.app.lib.core',
          inversify: 'inversify',
          'reflect-metadata': 'reflect-metadata',
          'org.eclipse.daanse.board.app.ui.vue.composables':
            'org.eclipse.daanse.board.app.ui.vue.composables'
        },
      }
    }
  },
})
