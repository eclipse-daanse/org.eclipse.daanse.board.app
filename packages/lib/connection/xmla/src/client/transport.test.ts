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
import { AbortableFetchTransport, XmlaTraffic, faultOf, type XmlaExchange } from './transport'

const DISCOVER = '<Envelope><Body><Discover><RequestType>DBSCHEMA_CATALOGS</RequestType></Discover></Body></Envelope>'
const EXECUTE = '<soap:Envelope><soap:Body><x:Execute xmlns:x="urn:x"/></soap:Body></soap:Envelope>'

function recorded(traffic: XmlaTraffic) {
  const seen: XmlaExchange[] = []
  traffic.subscribe(exchange => seen.push({ ...exchange }))
  return seen
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('the traffic record', () => {
  test('reports an exchange once sent and once answered', async () => {
    const traffic = new XmlaTraffic()
    const seen = recorded(traffic)
    vi.stubGlobal('fetch', vi.fn(async () => new Response('<answer/>', { status: 200 })))

    await new AbortableFetchTransport(traffic).send({ url: 'http://x/xmla', headers: {}, body: DISCOVER })

    expect(seen).toHaveLength(2)
    expect(seen[0]).toMatchObject({ id: 1, action: 'Discover', request: DISCOVER })
    expect(seen[0].response).toBeUndefined()
    expect(seen[1]).toMatchObject({ id: 1, status: 200, response: '<answer/>' })
    expect(seen[1].durationMs).toBeGreaterThanOrEqual(0)
  })

  test('names the action from the SOAPAction header before the body', async () => {
    const traffic = new XmlaTraffic()
    const seen = recorded(traffic)
    vi.stubGlobal('fetch', vi.fn(async () => new Response('', { status: 200 })))
    const transport = new AbortableFetchTransport(traffic)

    await transport.send({ url: 'u', headers: { SOAPAction: '"urn:schemas-microsoft-com:xml-analysis:Execute"' }, body: DISCOVER })
    await transport.send({ url: 'u', headers: {}, body: EXECUTE })

    expect(seen.filter((_, i) => i % 2 === 0).map(e => e.action)).toEqual(['Execute', 'Execute'])
  })

  test('records why a request has no answer, and still fails it', async () => {
    const traffic = new XmlaTraffic()
    const seen = recorded(traffic)
    vi.stubGlobal('fetch', vi.fn(async () => { throw new TypeError('Failed to fetch') }))

    await expect(
      new AbortableFetchTransport(traffic).send({ url: 'u', headers: {}, body: DISCOVER }),
    ).rejects.toThrow('Failed to fetch')

    expect(seen[1]).toMatchObject({ error: 'TypeError: Failed to fetch' })
    expect(seen[1].status).toBeUndefined()
  })

  test('a failing listener does not fail the request', async () => {
    const traffic = new XmlaTraffic()
    traffic.subscribe(() => { throw new Error('broken view') })
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.stubGlobal('fetch', vi.fn(async () => new Response('ok', { status: 200 })))

    const answer = await new AbortableFetchTransport(traffic).send({ url: 'u', headers: {}, body: DISCOVER })

    expect(answer.body).toBe('ok')
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })

  test('an unsubscribed listener hears nothing more', async () => {
    const traffic = new XmlaTraffic()
    const listener = vi.fn()
    const unsubscribe = traffic.subscribe(listener)
    unsubscribe()
    vi.stubGlobal('fetch', vi.fn(async () => new Response('', { status: 200 })))

    await new AbortableFetchTransport(traffic).send({ url: 'u', headers: {}, body: DISCOVER })

    expect(listener).not.toHaveBeenCalled()
  })

  test('marks a SOAP Fault sent with HTTP 200 as the server\'s refusal', async () => {
    const traffic = new XmlaTraffic()
    const seen = recorded(traffic)
    const fault =
      '<SOAP-ENV:Envelope><SOAP-ENV:Body><SOAP-ENV:Fault><faultcode>SOAP-ENV:Server</faultcode>' +
      "<faultstring>MDX object &apos;[Measures].[Nope]&apos; not found</faultstring></SOAP-ENV:Fault></SOAP-ENV:Body></SOAP-ENV:Envelope>"
    vi.stubGlobal('fetch', vi.fn(async () => new Response(fault, { status: 200 })))

    await new AbortableFetchTransport(traffic).send({ url: 'u', headers: {}, body: EXECUTE })

    expect(seen[1]).toMatchObject({ status: 200, fault: "MDX object '[Measures].[Nope]' not found" })
  })

  test('tells a stopped request from a failed one', async () => {
    const traffic = new XmlaTraffic()
    const seen = recorded(traffic)
    const controller = new AbortController()
    vi.stubGlobal('fetch', vi.fn(async () => {
      controller.abort(new DOMException('aborted', 'AbortError'))
      throw new DOMException('aborted', 'AbortError')
    }))

    await expect(
      new AbortableFetchTransport(traffic).send({ url: 'u', headers: {}, body: EXECUTE, signal: controller.signal } as any),
    ).rejects.toThrow()

    expect(seen[1]).toMatchObject({ aborted: true })
  })
})

describe('faultOf', () => {
  test('reads the faultstring whatever the prefix', () => {
    expect(faultOf('<soap:Fault><faultstring>bad</faultstring></soap:Fault>')).toBe('bad')
    expect(faultOf('<Fault><faultcode>x</faultcode></Fault>')).toBe('SOAP Fault')
  })

  test('decodes the character references in the faultstring', () => {
    const fault = (text: string) => faultOf(`<SOAP-ENV:Fault><faultstring>${text}</faultstring></SOAP-ENV:Fault>`)

    expect(fault('MDX object &#39;[Measures].[Nope]&#39; not found')).toBe("MDX object '[Measures].[Nope]' not found")
    expect(fault('Session with id &#34;s-1&#34; does not exists')).toBe('Session with id "s-1" does not exists')
    expect(fault('&#x27;a&#X27; &#xe4; &lt;b&gt; &quot;c&quot; &apos;d&apos;')).toBe(`'a' ä <b> "c" 'd'`)
    // As eMondrian sends it: escaped, then escaped again for the envelope.
    expect(fault('MDX object &amp;#39;[Measures].[Nope]&amp;#39; not found')).toBe("MDX object '[Measures].[Nope]' not found")
    expect(fault('&nbsp; &#x110000; a & b')).toBe('&nbsp; &#x110000; a & b')
  })

  test('finds nothing in an answer', () => {
    expect(faultOf('<root><row/></root>')).toBeUndefined()
    expect(faultOf(undefined)).toBeUndefined()
  })
})
