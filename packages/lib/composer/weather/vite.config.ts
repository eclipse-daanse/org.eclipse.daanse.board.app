import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'


export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WeatherComposer',
      fileName: 'weather',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [
        'org.eclipse.daanse.board.app.lib.core',
        'inversify',
        'reflect-metadata',
      ],
      output: {
        globals: {
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
    })
  ]
})
