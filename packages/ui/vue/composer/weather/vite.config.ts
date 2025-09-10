import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WeatherComposerUI',
      fileName: 'weather',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [
        'vue',
        'org.eclipse.daanse.board.app.lib.core',
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
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true
    }),
    //@ts-ignore
    vue(),
    libCss()
  ]
})
