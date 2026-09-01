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
 * The boilerplate every language server in this workspace was repeating.
 *
 * Before this, each language's `main-browser.ts` was 33 lines of which three
 * were language-specific: which services factory to call, which parse-tree
 * strategy to register, and the name. The rest — the reader, the writer, the
 * connection, `EmptyFileSystem`, and the ordering constraint below — was
 * copied, and would have been copied again by the next language.
 *
 * Runs inside a worker. Importing this pulls in Langium, which is why it lives
 * behind `org.eclipse.daanse.board.app.lib.lsp.server` and never behind the
 * client half, `org.eclipse.daanse.board.app.lib.lsp.core`.
 */
import { EmptyFileSystem } from 'langium'
import type {
  DefaultSharedModuleContext,
  LangiumSharedServices,
} from 'langium/lsp'
import { startLanguageServer } from 'langium/lsp'
import {
  BrowserMessageReader,
  BrowserMessageWriter,
  createConnection,
} from 'vscode-languageserver/browser'
import { registerAstRequest } from './ast-tree.js'
import type { AstTreeStrategy } from './ast-tree.js'

export interface LanguageServerDefinition {
  createServices(context: DefaultSharedModuleContext): {
    shared: LangiumSharedServices
  }
  astStrategy?: AstTreeStrategy
}

export function startWorkerLanguageServer(
  port: DedicatedWorkerGlobalScope | MessagePort,
  definition: LanguageServerDefinition,
): void {
  const messageReader = new BrowserMessageReader(port)
  const messageWriter = new BrowserMessageWriter(port)
  const connection = createConnection(messageReader, messageWriter)
  const { shared } = definition.createServices({
    connection,
    ...EmptyFileSystem,
  })

  // Before `startLanguageServer`, which calls `connection.listen()`.
  // Registering a request handler after that races the first message.
  registerAstRequest(connection, shared, definition.astStrategy)

  startLanguageServer(shared)
}
