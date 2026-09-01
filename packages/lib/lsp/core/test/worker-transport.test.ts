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

import { describe, expect, test, vi } from 'vitest'
import { workerTransport } from '../src/worker-transport.js'

function fakeWorker() {
  const posted: unknown[] = []
  const worker = {
    posted,
    onmessage: null as ((event: MessageEvent) => void) | null,
    postMessage(message: unknown) {
      posted.push(message)
    },
    emit(data: unknown) {
      this.onmessage?.({ data } as MessageEvent)
    },
  }
  return worker as typeof worker & Worker
}

describe('workerTransport', () => {
  test('outbound: parses the JSON string the client sends into an object', () => {
    const worker = fakeWorker()
    const transport = workerTransport(worker)

    transport.send('{"jsonrpc":"2.0","id":1,"method":"langium/ast"}')

    // Not the string — `BrowserMessageReader` reads `event.data` as the
    // message itself, so a string would arrive as an unparseable message.
    expect(worker.posted).toEqual([
      { jsonrpc: '2.0', id: 1, method: 'langium/ast' },
    ])
  })

  test('inbound: stringifies the object the server posts back', () => {
    const worker = fakeWorker()
    const transport = workerTransport(worker)
    const received: string[] = []
    transport.subscribe(value => received.push(value))

    worker.emit({ jsonrpc: '2.0', id: 1, result: { parserErrors: 0 } })

    expect(received).toEqual([
      '{"jsonrpc":"2.0","id":1,"result":{"parserErrors":0}}',
    ])
  })

  test('every subscriber sees each message', () => {
    const worker = fakeWorker()
    const transport = workerTransport(worker)
    const first = vi.fn()
    const second = vi.fn()
    transport.subscribe(first)
    transport.subscribe(second)

    worker.emit({ method: 'textDocument/publishDiagnostics' })

    expect(first).toHaveBeenCalledOnce()
    expect(second).toHaveBeenCalledOnce()
  })

  test('unsubscribe stops delivery', () => {
    const worker = fakeWorker()
    const transport = workerTransport(worker)
    const handler = vi.fn()
    transport.subscribe(handler)
    transport.unsubscribe(handler)

    worker.emit({ method: 'window/logMessage' })

    expect(handler).not.toHaveBeenCalled()
  })

  test('a handler may unsubscribe itself while responding', () => {
    // The list is iterated as a copy for exactly this case; mutating the
    // live array mid-iteration would skip the next handler.
    const worker = fakeWorker()
    const transport = workerTransport(worker)
    const second = vi.fn()
    const first = vi.fn(() => transport.unsubscribe(first))
    transport.subscribe(first)
    transport.subscribe(second)

    worker.emit({ method: 'window/logMessage' })

    expect(first).toHaveBeenCalledOnce()
    expect(second).toHaveBeenCalledOnce()
  })
})
