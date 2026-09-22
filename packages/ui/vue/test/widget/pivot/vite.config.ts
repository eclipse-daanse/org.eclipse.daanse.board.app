/**
Copyright (c) 2026 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

// PIVOT_SOURCES=<dir> runs the dockyard against another checkout of the two
// packages under test (a directory holding packages/ui/vue/...), e.g. to
// measure a baseline; by default the workspace sources are used
const root = process.env.PIVOT_SOURCES
  ? fileURLToPath(new URL(`${process.env.PIVOT_SOURCES}/`, `file://${process.cwd()}/`))
  : fileURLToPath(new URL('../../../../../../', import.meta.url))

export default defineConfig({
  plugins: [vue()],
  server: {
    port: Number(process.env.PIVOT_PORT ?? 5181),
  },
  resolve: {
    alias: [
      // both packages are tested from source, not from their last build
      {
        find: /^org\.eclipse\.daanse\.board\.app\.ui\.vue\.common\.xmla$/,
        replacement: `${root}packages/ui/vue/common/xmla/src/index.ts`,
      },
      {
        find: /^org\.eclipse\.daanse\.board\.app\.ui\.vue\.widget\.table\.pivot\/src\//,
        replacement: `${root}packages/ui/vue/widget/table/pivot/src/`,
      },
    ],
  },
})
