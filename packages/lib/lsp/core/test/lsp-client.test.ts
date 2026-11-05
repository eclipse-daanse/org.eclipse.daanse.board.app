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

import { afterEach, describe, expect, test, vi } from 'vitest'
import { startLanguageClient, stopLanguageClients } from '../src/lsp-client.js'
import type { LanguageDescriptor } from 'org.eclipse.daanse.board.app.lib.api.lsp'

/* A worker that never answers; `fail()` is its script not loading. */
function fakeWorker() {
  const target = new EventTarget()
  const worker = Object.assign(target, {
    onmessage: null as ((event: MessageEvent) => void) | null,
    postMessage: vi.fn(),
    terminate: vi.fn(),
    fail(message: string) {
      target.dispatchEvent(Object.assign(new Event('error'), { message }))
    },
  })
  return worker
}

function language(workers: ReturnType<typeof fakeWorker>[]) {
  return {
    id: 'mdx-test',
    label: 'MDX',
    createServerWorker: () => {
      const worker = fakeWorker()
      workers.push(worker)
      return worker as unknown as Worker
    },
  } as unknown as LanguageDescriptor
}

afterEach(() => stopLanguageClients())

describe('startLanguageClient', () => {
  test('says at once that the server did not start, in its own words', async () => {
    const workers: ReturnType<typeof fakeWorker>[] = []
    const starting = startLanguageClient(language(workers))
    workers[0].fail('mdx-server.worker.js 404')

    await expect(starting).rejects.toThrow('the MDX language server did not start: mdx-server.worker.js 404')
    // Was: "Request timed out", three seconds later.
  })

  test('tries again after a start that failed', async () => {
    const workers: ReturnType<typeof fakeWorker>[] = []
    const descriptor = language(workers)
    const first = startLanguageClient(descriptor)
    workers[0].fail('gone')
    await first.catch(() => {})

    const second = startLanguageClient(descriptor)

    // Was: the rejected promise, remembered, handed to every editor after.
    expect(second).not.toBe(first)
    expect(workers).toHaveLength(2)
    expect(workers[0].terminate).toHaveBeenCalled()
  })

  test('shares one start between editors while it is under way', () => {
    const workers: ReturnType<typeof fakeWorker>[] = []
    const descriptor = language(workers)
    expect(startLanguageClient(descriptor)).toBe(startLanguageClient(descriptor))
    expect(workers).toHaveLength(1)
  })
})
