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

export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'lib.ecore',
      fileName: 'lib.ecore',
    },
    rollupOptions: {
      external: (id) => {
        // Alle node_modules und Workspace-Packages als external
        return !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0')
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true
    })
  ],
});
