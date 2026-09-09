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
 * The client half of the LSP plumbing. Safe from an application's main
 * bundle: nothing here reaches Langium, the grammars or the parsers, all of
 * which belong in the worker chunk each language bundle ships.
 *
 * The contract itself lives in lib.api.lsp; the wire types are re-exported
 * here so a consumer that already depends on this package need not also
 * depend on the contract bundle to name them.
 */

export type {
  AstRequestParams,
  AstTreeNode,
  AstTreeResult,
  LanguageDescriptor,
  LanguageExample,
} from 'org.eclipse.daanse.board.app.lib.api.lsp'
export { AST_REQUEST } from 'org.eclipse.daanse.board.app.lib.api.lsp'
export { defineLanguage } from './language-descriptor.js'
export {
  getLanguageClient,
  isLanguageClientConnected,
  startLanguageClient,
  stopLanguageClients,
} from './lsp-client.js'
export { workerTransport } from './worker-transport.js'
export { consumeBlockComment, consumeDelimited } from './tokenizer.js'
export type { TokenStream } from './tokenizer.js'
