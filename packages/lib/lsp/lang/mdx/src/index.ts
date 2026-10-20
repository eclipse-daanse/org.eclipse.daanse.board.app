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
import { MDX_EXAMPLES } from './examples.js'
import {
  MDX_FILE_EXTENSIONS,
  MDX_LANGUAGE_ID,
  mdx,
} from './mdx-stream-language.js'

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
const serverWorkerUrl = new URL('./mdx-server.worker.js', import.meta.url).href

export const MDX_LANGUAGE = defineLanguage({
  id: MDX_LANGUAGE_ID,
  label: 'MDX',
  description: 'Multidimensional Expressions — queries and cube scripts',
  extensions: MDX_FILE_EXTENSIONS,
  support: mdx,
  serverWorkerUrl,
  examples: MDX_EXAMPLES,
  // `MdxDocumentSymbolProvider` narrows symbols to statements and
  // declarations worth navigating by.
  hasOutline: true,
})

/**
 * The whiteboard registration. A bundle that registers appears in every
 * language picker the application offers; one that stops disappears from
 * them, without either side knowing about the other.
 */
@component({
  service: [LANGUAGE_SERVICE_ID],
  properties: { 'language.id': MDX_LANGUAGE_ID },
})
export class MdxLanguageProvider implements LanguageProvider {
  readonly id = MDX_LANGUAGE.id
  readonly label = MDX_LANGUAGE.label
  readonly description = MDX_LANGUAGE.description
  readonly extensions = MDX_LANGUAGE.extensions
  readonly support = MDX_LANGUAGE.support
  readonly examples = MDX_LANGUAGE.examples
  readonly hasOutline = MDX_LANGUAGE.hasOutline
  readonly createServerWorker = MDX_LANGUAGE.createServerWorker
}

export { MDX_EXAMPLES } from './examples.js'
export {
  MDX_FILE_EXTENSIONS,
  MDX_LANGUAGE_ID,
  mdx,
  mdxStreamLanguage,
} from './mdx-stream-language.js'
export { parseMdxCompletionContext } from './mdx-reference-parser.js'
export type { MdxCompletionContext, WordRange } from './mdx-reference-parser.js'
