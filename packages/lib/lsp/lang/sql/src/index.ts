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
import { SQL_EXAMPLES } from './examples.js'
import {
  SQL_FILE_EXTENSIONS,
  SQL_LANGUAGE_ID,
  sql,
} from './sql-stream-language.js'

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
const serverWorkerUrl = new URL('./sql-server.worker.js', import.meta.url).href

export const SQL_LANGUAGE = defineLanguage({
  id: SQL_LANGUAGE_ID,
  label: 'SQL',
  description:
    'MySQL 8.4 queries and data manipulation over a relational source',
  extensions: SQL_FILE_EXTENSIONS,
  support: sql,
  serverWorkerUrl,
  examples: SQL_EXAMPLES,
  hasOutline: true,
})

/**
 * The whiteboard registration. A bundle that registers appears in every
 * language picker the application offers; one that stops disappears from
 * them, without either side knowing about the other.
 */
@component({
  service: [LANGUAGE_SERVICE_ID],
  properties: { 'language.id': SQL_LANGUAGE_ID },
})
export class SqlLanguageProvider implements LanguageProvider {
  readonly id = SQL_LANGUAGE.id
  readonly label = SQL_LANGUAGE.label
  readonly description = SQL_LANGUAGE.description
  readonly extensions = SQL_LANGUAGE.extensions
  readonly support = SQL_LANGUAGE.support
  readonly examples = SQL_LANGUAGE.examples
  readonly hasOutline = SQL_LANGUAGE.hasOutline
  readonly createServerWorker = SQL_LANGUAGE.createServerWorker
}

export { SQL_EXAMPLES } from './examples.js'
export {
  SQL_FILE_EXTENSIONS,
  SQL_LANGUAGE_ID,
  sql,
  sqlStreamLanguage,
} from './sql-stream-language.js'
