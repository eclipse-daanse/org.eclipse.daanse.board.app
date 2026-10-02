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

/**
 * Third-party packages whose entry declarations break Node-style resolution.
 *
 * They ship only an ESM `module`/file but declare no `main`/`exports`, which
 * the browser path (Vite picks `module`) tolerates and Vitest's SSR
 * resolution does not. The aliases point at the files that actually exist.
 */
const brokenThirdPartyEntries = {
  'monaco-editor': join(root, 'node_modules/monaco-editor/esm/vs/editor/editor.main.js'),
  'vuedraggable-es': join(root, 'node_modules/vuedraggable-es/dist/index.es.js'),
}

/**
 * Exact-match aliases: a bare string alias substitutes as a prefix, which
 * would also rewrite 'pkg/manifest.json' onto the src entry FILE and break
 * every manifest subpath import. The regex anchors leave subpaths to normal
 * node resolution through the workspace symlinks.
 */
function exactAliases(entries: Record<string, string>) {
  return Object.entries(entries).map(([find, replacement]) => ({
    find: new RegExp('^' + find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$'),
    replacement,
  }))
}

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      alias: exactAliases({ ...workspaceSourceAliases(), ...brokenThirdPartyEntries }),
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root,
    },
  }),
)
