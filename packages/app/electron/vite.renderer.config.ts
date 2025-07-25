/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  outDir: 'out',
  build:{
    assetsDir:'pack/app/default/dist',
    rollupOptions:{
      input:{
        app:'pack/app/default/dist/index.html'
      }
    },
    emptyOutDir: true
  }
});
