/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

/**
 * The CodeMirror platform bundle: serves the CodeMirror stack as standalone
 * ESM artefacts next to this entry. The import map in the host page points
 * the bare specifiers at those files, so every bundle shares one instance of
 * each by URL identity.
 *
 * CodeMirror is here for the same reason vuedraggable is in platform.vue:
 * @codemirror/state keeps the facet and extension registry in module state.
 * Two copies are two registries - every extension silently fails to apply,
 * with no error and nothing in the console. The editor renders and does
 * nothing.
 */

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Must match the actually bundled versions; checked in index.test.ts. */
const VERSIONS = {
  '@codemirror/state': '6.7.2',
  '@codemirror/view': '6.43.10',
  '@codemirror/language': '6.12.4',
  '@codemirror/commands': '6.9.0',
  '@codemirror/search': '6.5.11',
  '@codemirror/lint': '6.9.7',
  '@codemirror/autocomplete': '6.20.3',
  '@codemirror/lsp-client': '6.2.5',
  '@lezer/highlight': '1.2.3',
} as const

interface SharedLibraryRuntime {
  register(moduleId: string, exports: unknown, version: string, providedBy?: string): void
}

export async function activate({ log }: ActivationContext) {
  const runtime = (globalThis as { __tsm__?: SharedLibraryRuntime }).__tsm__
  if (!runtime) {
    throw new Error('platform.codemirror: tsm runtime is not initialized')
  }

  // Relative imports resolve to the same URLs the import map names, so the
  // registered instances are identical to what bare imports receive.
  const [state, view, language, commands, search, lint, autocomplete, lspClient, highlight] =
    await Promise.all([
      import('./artifacts/codemirror-state'),
      import('./artifacts/codemirror-view'),
      import('./artifacts/codemirror-language'),
      import('./artifacts/codemirror-commands'),
      import('./artifacts/codemirror-search'),
      import('./artifacts/codemirror-lint'),
      import('./artifacts/codemirror-autocomplete'),
      import('./artifacts/codemirror-lsp-client'),
      import('./artifacts/lezer-highlight'),
    ])

  const modules: Array<[keyof typeof VERSIONS, unknown]> = [
    ['@codemirror/state', state],
    ['@codemirror/view', view],
    ['@codemirror/language', language],
    ['@codemirror/commands', commands],
    ['@codemirror/search', search],
    ['@codemirror/lint', lint],
    ['@codemirror/autocomplete', autocomplete],
    ['@codemirror/lsp-client', lspClient],
    ['@lezer/highlight', highlight],
  ]

  for (const [id, exports] of modules) {
    runtime.register(id, exports, VERSIONS[id], 'platform.codemirror')
  }

  log.info(`registered ${modules.length} CodeMirror libraries`)
}
