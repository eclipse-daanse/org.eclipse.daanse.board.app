// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'org.eclipse.daanse.board.app.ui.vue.widget.sample',
      fileName: 'org.eclipse.daanse.board.app.ui.vue.widget.sample',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    dts({
        insertTypesEntry: true
    }),
    vue()
  ],
});