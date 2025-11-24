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
    minify: false, // Deaktiviert Minifizierung für besseres Debugging
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lib.events',
      fileName: 'lib.events',
    },
    rollupOptions: {
      external: (id) => {
        // Alle node_modules und Workspace-Packages als external
        // Nur relative und absolute Pfade (eigener Code) werden gebundled
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
