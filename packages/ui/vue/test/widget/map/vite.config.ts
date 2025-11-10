/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5180
  },
  optimizeDeps: {
    include: [
      'vue',
      'leaflet',
      '@camptocamp/ogc-client'
    ]
  }
})
