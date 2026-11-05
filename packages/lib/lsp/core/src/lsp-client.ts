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

import { LSPClient } from '@codemirror/lsp-client'
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

    /*
     * No editor extensions on the client: each editor installs
     * languageServerSupport() itself. Given here as well, the client put a
     * second set into every editor - two hover requests per hover, every
     * keyword twice in the completion list.
     */
    const client = new LSPClient({ rootUri: 'file:///workspace' }).connect(
      workerTransport(worker),
    )
    clients.set(language.id, client)

    // A worker whose script does not load says so at once; waiting for the
    // initialize request to time out said nothing for three seconds, and
    // then only "timed out".
    const failed = new Promise<never>((_, reject) => {
      worker.addEventListener(
        'error',
        (event) =>
          reject(
            new Error(
              `the ${language.label} language server did not start: ${(event as ErrorEvent).message || 'its script did not load'}`,
            ),
          ),
        { once: true },
      )
    })

    // Resolves once `initialize`/`initialized` have been exchanged.
    await Promise.race([client.initializing, failed])
    return client
  })()

  starting.set(language.id, promise)
  // A start that failed is forgotten, so the next editor tries again; it
  // used to be remembered, and every editor after it failed at once.
  promise.catch(() => {
    if (starting.get(language.id) !== promise) return
    starting.delete(language.id)
    clients.get(language.id)?.disconnect()
    clients.delete(language.id)
    workers.get(language.id)?.terminate()
    workers.delete(language.id)
  })
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
