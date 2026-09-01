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

import { component } from '@eclipse-daanse/tsm'
import {
  LANGUAGE_SERVICE_ID,
  type LanguageProvider,
} from 'org.eclipse.daanse.board.app.lib.api.lsp'
import { defineLanguage } from 'org.eclipse.daanse.board.app.lib.lsp.core'
import { DMV_EXAMPLES } from './examples.js'
import {
  DMV_FILE_EXTENSIONS,
  DMV_LANGUAGE_ID,
  dmv,
} from './dmv-stream-language.js'

// The worker is built separately (vite.worker.config.ts) into this package's
// own dist as a self-contained chunk, so it carries Langium and the grammar
// with it and resolves no bare import at runtime. Resolving it against this
// module's URL keeps the one bundler-specific line inside the language
// package, which is why the descriptor takes a URL and not a Worker.
//
// The entry lives in worker/, NOT beside this file in src/. With it in src/,
// Vite resolves this specifier to the TypeScript source by extension
// resolution and inlines it as a base64 data: URI — the worker then executes
// TypeScript as JavaScript and dies on spawn, silently.
const serverWorkerUrl = new URL('./dmv-server.worker.js', import.meta.url).href

export const DMV_LANGUAGE = defineLanguage({
  id: DMV_LANGUAGE_ID,
  label: 'DMV',
  description: 'Dynamic Management View queries over $System schema rowsets',
  extensions: DMV_FILE_EXTENSIONS,
  support: dmv,
  serverWorkerUrl,
  examples: DMV_EXAMPLES,
  // Langium's default provider would emit one row per `ColumnReference` — a
  // flat list of every column the query names, which is worse than no
  // outline. DMV gets none until it has a provider worth the name.
  hasOutline: false,
})

/**
 * The whiteboard registration. A bundle that registers appears in every
 * language picker the application offers; one that stops disappears from
 * them, without either side knowing about the other.
 */
@component({
  service: [LANGUAGE_SERVICE_ID],
  properties: { 'language.id': DMV_LANGUAGE_ID },
})
export class DmvLanguageProvider implements LanguageProvider {
  readonly id = DMV_LANGUAGE.id
  readonly label = DMV_LANGUAGE.label
  readonly description = DMV_LANGUAGE.description
  readonly extensions = DMV_LANGUAGE.extensions
  readonly support = DMV_LANGUAGE.support
  readonly examples = DMV_LANGUAGE.examples
  readonly hasOutline = DMV_LANGUAGE.hasOutline
  readonly createServerWorker = DMV_LANGUAGE.createServerWorker
}

export { DMV_EXAMPLES } from './examples.js'
export {
  DMV_FILE_EXTENSIONS,
  DMV_LANGUAGE_ID,
  dmv,
  dmvStreamLanguage,
} from './dmv-stream-language.js'
