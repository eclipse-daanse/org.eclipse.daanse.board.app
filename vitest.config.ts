/*
Copyright (c) 2024 Contributors to the  Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

  SPDX-License-Identifier: EPL-2.0

Contributors:
  Markus Hochstein - inital setup
  Stefan Bischof - inital setup
*/
import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      alias: {
        'vuedraggable/src/vuedraggable': fileURLToPath(new URL('./packages/ui/vue/widget/vuedraggable-stub.ts', import.meta.url)),
        'vuedraggable': fileURLToPath(new URL('./packages/ui/vue/widget/vuedraggable-stub.ts', import.meta.url)),
        'vuedraggable-es': fileURLToPath(new URL('./packages/ui/vue/widget/vuedraggable-stub.ts', import.meta.url))
      }
    },
    test: {
      environment: 'jsdom',
      // live.test.ts files make real network calls and are opt-in only
      // (run them explicitly, e.g. `vitest run **/live.test.ts`) — they
      // must not run as part of the default test/CI gate.
      exclude: [...configDefaults.exclude, 'e2e/**', '**/live.test.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      server: {
        deps: {
          inline: [
            /org\.eclipse\.daanse\.board\.app\.lib\..*/,
            /org\.eclipse\.daanse\.board\.app\.ui\..*/
          ]
        }
      }
    },
    ssr: {
      noExternal: true
    }
  })
)
