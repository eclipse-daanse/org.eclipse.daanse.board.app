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

import type { Transport, XmlaHttpRequest, XmlaHttpResponse } from '@eclipse-daanse/xmla-client'

/*
 * Cancellation the client library does not offer yet: its requests carry no
 * signal and its calls take none. Until they do, a signal reaches the wire by
 * riding on the request object, and a client is built per call to carry it.
 * Once the library takes a signal itself, this file can go.
 */

/** A request with the signal the library does not know about yet. */
export type SignalledRequest = XmlaHttpRequest & { signal?: AbortSignal }

/** The server gave no answer in the time the connection allows. */
export class XmlaTimeoutError extends Error {
  constructor(readonly seconds: number) {
    super(`the XMLA server did not answer within ${seconds} s`)
    this.name = 'XmlaTimeoutError'
  }
}

/** The library's FetchTransport, with the signal passed on to fetch. */
export class AbortableFetchTransport implements Transport {
  async send(request: SignalledRequest): Promise<XmlaHttpResponse> {
    const response = await fetch(request.url, {
      method: 'POST',
      body: request.body,
      headers: { ...request.headers },
      credentials: 'same-origin',
      signal: request.signal,
    })
    const body = await response.text()
    const headers: Record<string, string> = {}
    response.headers.forEach((value, name) => {
      headers[name.toLowerCase()] = value
    })
    return { status: response.status, body, headers }
  }
}

/**
 * A transport that gives up when the signal aborts or the time runs out.
 *
 * The answer is raced against the signal as well as handed the signal, so a
 * transport that ignores it - a test double - gives up all the same.
 */
export function bounded(
  transport: Transport,
  timeoutSeconds: number,
  signal?: AbortSignal,
): Transport {
  return {
    send(request: XmlaHttpRequest): Promise<XmlaHttpResponse> {
      const timeout = timeoutSeconds > 0 ? AbortSignal.timeout(timeoutSeconds * 1000) : undefined
      const signals = [signal, timeout].filter(s => s !== undefined)
      if (!signals.length) return transport.send(request)

      const combined = signals.length === 1 ? signals[0] : AbortSignal.any(signals)
      const reason = () =>
        timeout?.aborted && combined.reason === timeout.reason
          ? new XmlaTimeoutError(timeoutSeconds)
          : combined.reason

      if (combined.aborted) return Promise.reject(reason())
      return new Promise((resolve, reject) => {
        const onAbort = () => reject(reason())
        combined.addEventListener('abort', onAbort, { once: true })
        transport
          .send({ ...request, signal: combined } as SignalledRequest)
          .then(resolve, error => reject(combined.aborted ? reason() : error))
          .finally(() => combined.removeEventListener('abort', onAbort))
      })
    },
  }
}
