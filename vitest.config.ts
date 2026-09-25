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
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

const root = dirname(fileURLToPath(import.meta.url))

/**
 * Workspace-Pakete im Test auf ihre Quellen zeigen lassen.
 *
 * Ohne das laufen Tests gegen die gebauten `dist`-Dateien. Das hat zwei
 * Folgen, die beide beobachtet wurden:
 *
 * 1. Node wählt für Workspace-Pakete den CommonJS-Einstieg. Da die Pakete
 *    zusätzlich ESM ausliefern, existiert der Modul-Singleton aus
 *    `lib.core` - und damit der DI-Container - dann doppelt.
 * 2. Abhängigkeiten, die nur ESM anbieten (`@eclipse-daanse/tsm` deklariert
 *    in `exports` ausschließlich `import`), sind auf dem CJS-Pfad gar nicht
 *    auflösbar.
 *
 * Gegen die Quellen zu testen umgeht beides und macht Tests unabhängig davon,
 * ob gerade gebaut wurde.
 */
function workspaceSourceAliases(): Record<string, string> {
  const aliases: Record<string, string> = {}

  const collect = (verzeichnis: string, tiefe = 0) => {
    if (tiefe > 4) return
    for (const eintrag of readdirSync(verzeichnis, { withFileTypes: true })) {
      if (!eintrag.isDirectory() || eintrag.name === 'node_modules' || eintrag.name === 'dist') {
        continue
      }
      const pfad = join(verzeichnis, eintrag.name)
      const manifest = join(pfad, 'package.json')
      const einstieg = join(pfad, 'src', 'index.ts')

      if (existsSync(manifest) && existsSync(einstieg)) {
        try {
          const { name } = JSON.parse(readFileSync(manifest, 'utf-8'))
          if (name) aliases[name] = einstieg
        } catch {
          // Paket ohne lesbares Manifest wird übersprungen
        }
      }
      collect(pfad, tiefe + 1)
    }
  }

  collect(join(root, 'packages'))
  return aliases
}

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      alias: workspaceSourceAliases(),
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root,
    },
  }),
)
