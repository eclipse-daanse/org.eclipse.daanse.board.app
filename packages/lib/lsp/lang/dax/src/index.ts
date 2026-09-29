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
import { DAX_EXAMPLES } from './examples.js'
import {
  DAX_FILE_EXTENSIONS,
  DAX_LANGUAGE_ID,
  dax,
} from './dax-stream-language.js'

// The worker is built separately (vite.worker.config.ts) into this package's
// own dist as a self-contained chunk, so it carries Langium and the grammar
// with it and resolves no bare import at runtime.
//
// The entry lives in worker/, NOT beside this file in src/. With it in src/,
// Vite resolves this specifier to the TypeScript source by extension
// resolution and inlines it as a base64 data: URI - the worker then executes
// TypeScript as JavaScript and dies on spawn, silently.
const serverWorkerUrl = new URL('./dax-server.worker.js', import.meta.url).href

export const DAX_LANGUAGE = defineLanguage({
  id: DAX_LANGUAGE_ID,
  label: 'DAX',
  description: 'Data Analysis Expressions: queries (.dax) and formulas (.daxe)',
  extensions: DAX_FILE_EXTENSIONS,
  support: dax,
  serverWorkerUrl,
  examples: DAX_EXAMPLES,
  // DEFINE's measures, columns, tables, variables and parameters, then each
  // EVALUATE - see language/dax-symbols.ts.
  hasOutline: true,
})

/**
 * The whiteboard registration. A bundle that registers appears in every
 * language picker the application offers; one that stops disappears from
 * them, without either side knowing about the other.
 */
@component({
  service: [LANGUAGE_SERVICE_ID],
  properties: { 'language.id': DAX_LANGUAGE_ID },
})
export class DaxLanguageProvider implements LanguageProvider {
  readonly id = DAX_LANGUAGE.id
  readonly label = DAX_LANGUAGE.label
  readonly description = DAX_LANGUAGE.description
  readonly extensions = DAX_LANGUAGE.extensions
  readonly support = DAX_LANGUAGE.support
  readonly examples = DAX_LANGUAGE.examples
  readonly hasOutline = DAX_LANGUAGE.hasOutline
  readonly createServerWorker = DAX_LANGUAGE.createServerWorker
}

export { DAX_EXAMPLES } from './examples.js'
export {
  DAX_FILE_EXTENSIONS,
  DAX_LANGUAGE_ID,
  dax,
  daxStreamLanguage,
} from './dax-stream-language.js'
