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
import { decodeCharacterReferences } from './fault'

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

/** One request on the wire and, once there is one, its answer. */
export interface XmlaExchange {
  readonly id: number
  readonly url: string
  /** The SOAP action - Discover or Execute - or what the body says it is. */
  readonly action: string
  readonly request: string
  /** Epoch milliseconds, when the request left. */
  readonly startedAt: number
  durationMs?: number
  status?: number
  response?: string
  /** Why there is no answer: the network, a timeout, an abort. */
  error?: string
  /**
   * The server's own refusal: a SOAP Fault, which XMLA servers send with
   * HTTP 200 as often as with 500. Its faultstring, or the whole text.
   */
  fault?: string
  /** Stopped on purpose - a newer request, Stop, a timeout - rather than failed. */
  aborted?: boolean
}

/** The faultstring of a SOAP Fault in an answer, if the answer is one. */
export function faultOf(body: string | undefined): string | undefined {
  if (!body || !/<(?:[\w.-]+:)?Fault[\s>]/.test(body)) return undefined
  const text = /<(?:[\w.-]+:)?faultstring[^>]*>([\s\S]*?)<\/(?:[\w.-]+:)?faultstring>/i.exec(body)?.[1]
  /*
   * Twice: once for the envelope, as a parser would, and once more because
   * eMondrian escapes the text before it puts it there - the body reads
   * `&amp;#39;[Measures].[Nope]&amp;#39;`.
   */
  const decoded = text === undefined ? undefined : decodeCharacterReferences(decodeCharacterReferences(text)).trim()
  return decoded || 'SOAP Fault'
}

export type XmlaTrafficListener = (exchange: XmlaExchange) => void

/**
 * Every request the XMLA connections of this page send, as it leaves and as
 * it is answered - what a request log shows. Listeners are called twice per
 * exchange, with the same object: once sent, once settled.
 */
export class XmlaTraffic {
  private listeners = new Set<XmlaTrafficListener>()
  private next = 1

  subscribe(listener: XmlaTrafficListener): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  /** @internal - the transport reports here. */
  sent(url: string, headers: Record<string, string>, request: string): XmlaExchange {
    const exchange: XmlaExchange = {
      id: this.next++,
      url,
      action: actionOf(headers, request),
      request,
      startedAt: Date.now(),
    }
    this.emit(exchange)
    return exchange
  }

  /** @internal */
  settled(exchange: XmlaExchange, outcome: { status?: number; response?: string; error?: string; aborted?: boolean }): void {
    const fault = faultOf(outcome.response)
    Object.assign(exchange, outcome, fault ? { fault } : {}, { durationMs: Date.now() - exchange.startedAt })
    this.emit(exchange)
  }

  private emit(exchange: XmlaExchange): void {
    // A broken log view must not break the request it watches.
    for (const listener of this.listeners) {
      try {
        listener(exchange)
      } catch (error) {
        console.warn('XMLA traffic listener failed', error)
      }
    }
  }
}

function actionOf(headers: Record<string, string>, body: string): string {
  const header = Object.entries(headers).find(([name]) => name.toLowerCase() === 'soapaction')?.[1]
  const named = header?.replace(/"/g, '').split(/[:#/]/).pop()
  if (named) return named
  return /<(?:\w+:)?Execute[\s>]/.test(body) ? 'Execute' : /<(?:\w+:)?Discover[\s>]/.test(body) ? 'Discover' : 'Request'
}

/** The page's one traffic record, which every connection reports to. */
export const xmlaTraffic = new XmlaTraffic()

/** The library's FetchTransport, with the signal passed on to fetch. */
export class AbortableFetchTransport implements Transport {
  constructor(private readonly traffic: XmlaTraffic = xmlaTraffic) {}

  async send(request: SignalledRequest): Promise<XmlaHttpResponse> {
    const exchange = this.traffic.sent(request.url, request.headers ?? {}, request.body)
    try {
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
      this.traffic.settled(exchange, { status: response.status, response: body })
      return { status: response.status, body, headers }
    } catch (error) {
      this.traffic.settled(exchange, { error: describe(error, request.signal), aborted: request.signal?.aborted === true })
      throw error
    }
  }
}

function describe(error: unknown, signal?: AbortSignal): string {
  if (signal?.aborted) {
    const reason = signal.reason
    return reason instanceof Error ? `${reason.name}: ${reason.message}` : 'aborted'
  }
  return error instanceof Error ? `${error.name}: ${error.message}` : String(error)
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
