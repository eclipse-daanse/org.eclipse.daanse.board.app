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

import { LSPClient, languageServerExtensions } from '@codemirror/lsp-client'
import type { LanguageDescriptor } from 'org.eclipse.daanse.board.app.lib.api.lsp'
import { workerTransport } from './worker-transport.js'

const clients = new Map<string, LSPClient>()
const workers = new Map<string, Worker>()
const starting = new Map<string, Promise<LSPClient>>()

export function startLanguageClient(
  language: LanguageDescriptor,
): Promise<LSPClient> {
  const existing = starting.get(language.id)
  if (existing) {
    return existing
  }

  const promise = (async () => {
    const worker = language.createServerWorker()
    workers.set(language.id, worker)

    const client = new LSPClient({
      rootUri: 'file:///workspace',
      extensions: languageServerExtensions(),
    }).connect(workerTransport(worker))
    clients.set(language.id, client)

    // Resolves once `initialize`/`initialized` have been exchanged.
    await client.initializing
    return client
  })()

  starting.set(language.id, promise)
  return promise
}

export function getLanguageClient(languageId: string): LSPClient | undefined {
  return clients.get(languageId)
}

export function isLanguageClientConnected(languageId: string): boolean {
  return clients.get(languageId)?.connected ?? false
}

export function stopLanguageClients(): void {
  for (const client of clients.values()) {
    client.disconnect()
  }
  for (const worker of workers.values()) {
    worker.terminate()
  }
  clients.clear()
  workers.clear()
  starting.clear()
}
