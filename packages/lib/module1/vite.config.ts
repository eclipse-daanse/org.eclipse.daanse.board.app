import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lib.module1',
      fileName: 'lib.module1',
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [
    dts({
        insertTypesEntry: true
    })
  ],
});