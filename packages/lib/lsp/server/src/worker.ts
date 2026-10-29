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
 * The browser-only half of the server side: starting a Langium server on a
 * worker port.
 *
 * Separate from `org.eclipse.daanse.board.app.lib.lsp.server` because that one is
 * environment-neutral — the language packages' tests import the serializer
 * under Node, and `vscode-languageserver/browser` is not resolvable there.
 */
export { startWorkerLanguageServer } from './language-server.js'
export type { LanguageServerDefinition } from './language-server.js'
