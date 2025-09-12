/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from "vite-plugin-dts";

const rootPath = resolve(__dirname, '../../../../../') // ← ggf. anpassen
export default defineConfig({
  resolve: {
    alias: {
      vue: resolve(rootPath, 'node_modules/vue'), // ⬅️ Vue nur aus dem Root laden
      pinia: resolve(rootPath,'node_modules/pinia')
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui.vue.stores.connection',
      fileName: 'ui.vue.stores.connection',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'vue',
        'pinia',
        'org.eclipse.daanse.board.app.lib.core',
        'inversify',
        'reflect-metadata',
      ],
      /*output: {
        globals: {
          vue: 'Vue',
          pinia: 'Pinia',
          'org.eclipse.daanse.board.app.lib.core':
            'org.eclipse.daanse.board.app.lib.core',
          inversify: 'inversify',
          'reflect-metadata': 'reflect-metadata',
        },
      },*/
    },
  },
  plugins: [
    dts({
        insertTypesEntry: true,
        rollupTypes: true,
    })
  ],
});

