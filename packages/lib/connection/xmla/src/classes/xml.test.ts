// @vitest-environment node
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

import { describe, expect, it } from 'vitest'
import type { Transport, XmlaHttpRequest } from '@eclipse-daanse/xmla-client'

import { XMLAApi } from './xml'
import { XmlaTimeoutError } from '../client/transport'
import type { SignalledRequest } from '../client/transport'

const envelope = (body: string, header = '') =>
  `<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
<SOAP-ENV:Header>${header}</SOAP-ENV:Header>
<SOAP-ENV:Body>${body}</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

// As eMondrian answers: an inline schema, then the rows.
const LEVELS = envelope(`
<DiscoverResponse xmlns="urn:schemas-microsoft-com:xml-analysis"><return>
<root xmlns="urn:schemas-microsoft-com:xml-analysis:rowset" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="urn:schemas-microsoft-com:xml-analysis:rowset" targetNamespace="urn:schemas-microsoft-com:xml-analysis:rowset" elementFormDefault="qualified">
    <xsd:element name="root"><xsd:complexType><xsd:sequence>
      <xsd:element name="row" type="row" minOccurs="0" maxOccurs="unbounded"/>
    </xsd:sequence></xsd:complexType></xsd:element>
    <xsd:complexType name="row"><xsd:sequence>
      <xsd:element name="LEVEL_UNIQUE_NAME" type="xsd:string"/>
      <xsd:element name="LEVEL_NUMBER" type="xsd:unsignedInt"/>
      <xsd:element name="LEVEL_IS_VISIBLE" type="xsd:boolean" minOccurs="0"/>
      <xsd:element name="LEVEL_DISPLAY_FOLDER" type="xsd:string" minOccurs="0"/>
      <xsd:element name="LEVEL_ORIGIN" type="xsd:unsignedShort" minOccurs="0"/>
    </xsd:sequence></xsd:complexType>
  </xsd:schema>
  <row><LEVEL_UNIQUE_NAME>[Store].[(All)]</LEVEL_UNIQUE_NAME><LEVEL_NUMBER>0</LEVEL_NUMBER><LEVEL_IS_VISIBLE>true</LEVEL_IS_VISIBLE><LEVEL_DISPLAY_FOLDER/></row>
  <row><LEVEL_UNIQUE_NAME>[Store].[Store Country]</LEVEL_UNIQUE_NAME><LEVEL_NUMBER>1</LEVEL_NUMBER><LEVEL_IS_VISIBLE>true</LEVEL_IS_VISIBLE><LEVEL_ORIGIN>0</LEVEL_ORIGIN></row>
</root></return></DiscoverResponse>`)

const CELLSET = envelope(`
<ExecuteResponse xmlns="urn:schemas-microsoft-com:xml-analysis"><return>
<root xmlns="urn:schemas-microsoft-com:xml-analysis:mddataset" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Axes>
    <Axis name="Axis0"><Tuples><Tuple>
      <Member Hierarchy="[Measures]"><UName>[Measures].[Unit Sales]</UName><Caption>Unit Sales</Caption><LNum>0</LNum></Member>
    </Tuple></Tuples></Axis>
    <Axis name="Axis1"><Tuples>
      <Tuple><Member Hierarchy="[Gender]"><UName>[Gender].[F]</UName><Caption>F</Caption><LNum>1</LNum></Member></Tuple>
      <Tuple><Member Hierarchy="[Gender]"><UName>[Gender].[M]</UName><Caption>M</Caption><LNum>1</LNum></Member></Tuple>
    </Tuples></Axis>
  </Axes>
  <CellData>
    <Cell CellOrdinal="0"><Value xsi:type="xsd:double">131558</Value><FmtValue>131,558</FmtValue></Cell>
    <Cell CellOrdinal="1"><Value xsi:type="xsd:double">135215</Value><FmtValue>135,215</FmtValue></Cell>
  </CellData>
</root></return></ExecuteResponse>`)

const SESSION = envelope(
  `<ExecuteResponse xmlns="urn:schemas-microsoft-com:xml-analysis"><return/></ExecuteResponse>`,
  `<Session xmlns="urn:schemas-microsoft-com:xml-analysis" SessionId="s-1"/>`,
)

/** Answers by SOAP action and records what was sent. */
class FakeTransport implements Transport {
  readonly requests: XmlaHttpRequest[] = []
  failNextDiscover = false
  /** The faultstring the next Execute is answered with, as it stands in the XML. */
  faultNextExecute: string | null = null
  /** How long an answer takes; the signal is recorded, never obeyed. */
  delay = 5

  async send(request: XmlaHttpRequest) {
    this.requests.push(request)
    await new Promise(resolve => setTimeout(resolve, this.delay))
    const ok = (body: string) => ({ status: 200, body, headers: {} })

    if (request.headers.SOAPAction.includes('Discover')) {
      if (this.failNextDiscover) {
        this.failNextDiscover = false
        return { status: 503, body: 'unavailable', headers: {} }
      }
      return ok(LEVELS)
    }
    if (request.body.includes('BeginSession')) return ok(SESSION)
    if (this.faultNextExecute !== null) {
      const faultstring = this.faultNextExecute
      this.faultNextExecute = null
      const body = envelope(
        `<SOAP-ENV:Fault><faultcode>SOAP-ENV:Server.00HSBE02</faultcode><faultstring>${faultstring}</faultstring></SOAP-ENV:Fault>`,
      )
      return { status: 500, body, headers: {} }
    }
    return ok(CELLSET)
  }

  signalOf(index: number): AbortSignal | undefined {
    return (this.requests[index] as SignalledRequest).signal
  }

  count(action: 'Discover' | 'Execute') {
    return this.requests.filter(r => r.headers.SOAPAction.includes(action)).length
  }
}

function api(transport = new FakeTransport(), timeoutSeconds = 0) {
  return {
    transport,
    api: new XMLAApi({ url: 'http://xmla.test', catalog: 'FoodMart', transport, timeoutSeconds }),
  }
}

describe('XMLAApi on the EMF client', () => {
  it('reads discover rows with their values as text', async () => {
    const { api: xmla } = api()
    const levels = await xmla.getLevels('FoodMart', 'Sales')

    expect(levels).toEqual([
      { LEVEL_UNIQUE_NAME: '[Store].[(All)]', LEVEL_NUMBER: '0', LEVEL_IS_VISIBLE: 'true', LEVEL_DISPLAY_FOLDER: {} },
      { LEVEL_UNIQUE_NAME: '[Store].[Store Country]', LEVEL_NUMBER: '1', LEVEL_IS_VISIBLE: 'true', LEVEL_ORIGIN: '0' },
    ])
  })

  it('sends a discover once, however often and however concurrently it is asked', async () => {
    const { api: xmla, transport } = api()

    await Promise.all([
      xmla.getLevels('FoodMart', 'Sales'),
      xmla.getLevels('FoodMart', 'Sales'),
    ])
    await xmla.getLevels('FoodMart', 'Sales')
    await xmla.getLevels('FoodMart', 'Warehouse')

    expect(transport.count('Discover')).toBe(2)
  })

  it('hands every caller its own list', async () => {
    const { api: xmla } = api()
    const first = await xmla.getLevels('FoodMart', 'Sales')
    first.reverse()

    const second = await xmla.getLevels('FoodMart', 'Sales')
    expect(second[0].LEVEL_NUMBER).toBe('0')
  })

  it('does not keep a failed discover', async () => {
    const { api: xmla, transport } = api()
    transport.failNextDiscover = true

    await expect(xmla.getLevels('FoodMart', 'Sales')).rejects.toThrow()
    await expect(xmla.getLevels('FoodMart', 'Sales')).resolves.toHaveLength(2)
  })

  it('sends identical statements in flight once, and again once answered', async () => {
    const { api: xmla, transport } = api()
    const mdx = 'SELECT FROM [Sales]'

    const [a, b] = await Promise.all([xmla.getMDX(mdx), xmla.getMDX(mdx)])
    expect(transport.count('Execute')).toBe(1)
    expect(a).not.toBe(b)

    await xmla.getMDX(mdx)
    expect(transport.count('Execute')).toBe(2)
  })

  it('answers an execute in the shape the former SOAP client produced', async () => {
    const { api: xmla } = api()
    const root = (await xmla.getMDX('SELECT ...')).Body.ExecuteResponse.return.root

    expect(root.Axes.Axis[0].__attrs.name).toBe('Axis0')
    expect(root.Axes.Axis[0].Tuples.Tuple.Member).toMatchObject({
      UName: '[Measures].[Unit Sales]',
      LNum: '0',
      __attrs: { Hierarchy: '[Measures]' },
    })
    expect(root.Axes.Axis[1].Tuples.Tuple).toHaveLength(2)
    expect(root.CellData.Cell[1]).toEqual({
      Value: '135215',
      FmtValue: '135,215',
      __attrs: { CellOrdinal: '1' },
    })
  })

  it('runs an execute against the connection catalog unless told otherwise', async () => {
    const { api: xmla, transport } = api()

    await xmla.getMDX('SELECT FROM [Sales]')
    await xmla.getMDX('SELECT FROM [HR]', 'Other')

    const [first, second] = transport.requests.map(r => r.body)
    expect(first).toMatch(/<Catalog>FoodMart<\/Catalog>/)
    expect(second).toMatch(/<Catalog>Other<\/Catalog>/)
  })

  it('carries the session it opened on every later request', async () => {
    const { api: xmla, transport } = api()
    await xmla.startSession()
    await xmla.getLevels('FoodMart', 'Sales')

    expect(xmla.sessionId).toBe('s-1')
    expect(transport.requests[1].body).toMatch(/SessionId="s-1"/)
  })
})

/*
 * A server that forgets the first session it opened: every request naming
 * s-1 gets the fault eMondrian sends, and the next BeginSession opens s-2.
 */
class ForgetfulTransport extends FakeTransport {
  private sessions = 0
  forgotten = false

  async send(request: XmlaHttpRequest) {
    if (request.body.includes('BeginSession')) {
      this.requests.push(request)
      this.sessions++
      const body = SESSION.replace('s-1', `s-${this.sessions}`)
      return { status: 200, body, headers: {} }
    }
    if (this.forgotten && request.body.includes('SessionId="s-1"')) {
      this.requests.push(request)
      const fault = envelope(
        '<SOAP-ENV:Fault><faultcode>SOAP-ENV:Client.00HSBC01</faultcode>' +
          '<faultstring>XMLA SOAP Header processing error: Session with id "s-1" does not exist</faultstring></SOAP-ENV:Fault>',
      )
      return { status: 500, body: fault, headers: {} }
    }
    return super.send(request)
  }
}

describe('XMLAApi when the server forgets its session', () => {
  it('opens a new one and sends the request again', async () => {
    const transport = new ForgetfulTransport()
    const { api: xmla } = api(transport)
    await xmla.startSession()
    transport.forgotten = true

    const answer = await xmla.getMDX('SELECT FROM [Sales]')

    expect(answer).toBeTruthy()
    expect(xmla.sessionId).toBe('s-2')
    expect(transport.requests.at(-1)!.body).toMatch(/SessionId="s-2"/)
  })

  it('renews once for discovers failing together', async () => {
    const transport = new ForgetfulTransport()
    const { api: xmla } = api(transport)
    await xmla.startSession()
    transport.forgotten = true

    await Promise.all([xmla.getLevels('FoodMart', 'Sales'), xmla.getLevels('FoodMart', 'Warehouse')])

    expect(transport.requests.filter(r => r.body.includes('BeginSession'))).toHaveLength(2)
    expect(xmla.sessionId).toBe('s-2')
  })

  it('raises a fault with its character references decoded', async () => {
    const { api: xmla, transport } = api()
    // As eMondrian sends it: the text escaped, then escaped again for the envelope.
    transport.faultNextExecute = 'MDX object &amp;#39;[Measures].[Nope]&amp;#39; not found &amp;#x27;x&amp;#x27;'

    const failure = await xmla.getMDX('SELECT [Measures].[Nope] ON 0 FROM [Sales]').catch(error => error)

    expect(failure).toMatchObject({ name: 'XmlaFaultError' })
    expect(failure.message).toContain("MDX object '[Measures].[Nope]' not found 'x'")
    expect(failure.details).toEqual(["MDX object '[Measures].[Nope]' not found 'x'"])
  })

  it('does not retry other faults', async () => {
    const { api: xmla, transport } = api()
    transport.failNextDiscover = true

    await expect(xmla.getLevels('FoodMart', 'Sales')).rejects.toBeTruthy()
    expect(transport.count('Discover')).toBe(1)
  })
})

describe('XMLAApi giving up on a request', () => {
  it('rejects a caller that aborts, with the reason it aborted with', async () => {
    const { api: xmla, transport } = api()
    transport.delay = 50
    const controller = new AbortController()

    const answer = xmla.getMDX('SELECT FROM [Sales]', undefined, undefined, { signal: controller.signal })
    controller.abort()

    await expect(answer).rejects.toMatchObject({ name: 'AbortError' })
    expect(transport.signalOf(0)?.aborted).toBe(true)
  })

  it('sends nothing for a signal already aborted', async () => {
    const { api: xmla, transport } = api()
    const signal = AbortSignal.abort()

    await expect(xmla.getMDX('SELECT FROM [Sales]', undefined, undefined, { signal })).rejects.toMatchObject({
      name: 'AbortError',
    })
    expect(transport.requests).toHaveLength(0)
  })

  it('keeps a shared statement going for the callers still waiting', async () => {
    const { api: xmla, transport } = api()
    transport.delay = 30
    const leaving = new AbortController()
    const mdx = 'SELECT FROM [Sales]'

    const left = xmla.getMDX(mdx, undefined, undefined, { signal: leaving.signal })
    const stayed = xmla.getMDX(mdx, undefined, undefined, { signal: new AbortController().signal })
    leaving.abort()

    await expect(left).rejects.toMatchObject({ name: 'AbortError' })
    await expect(stayed).resolves.toHaveProperty('Body.ExecuteResponse')
    expect(transport.count('Execute')).toBe(1)
    expect(transport.signalOf(0)?.aborted).toBe(false)
  })

  it('does not let a caller without a signal be abandoned by one with', async () => {
    const { api: xmla, transport } = api()
    transport.delay = 30
    const leaving = new AbortController()
    const mdx = 'SELECT FROM [Sales]'

    const stayed = xmla.getMDX(mdx)
    const left = xmla.getMDX(mdx, undefined, undefined, { signal: leaving.signal })
    leaving.abort()

    await expect(left).rejects.toMatchObject({ name: 'AbortError' })
    await expect(stayed).resolves.toHaveProperty('Body.ExecuteResponse')
  })

  it('aborts a shared statement once its last caller leaves, and sends it anew after', async () => {
    const { api: xmla, transport } = api()
    transport.delay = 30
    const a = new AbortController()
    const b = new AbortController()
    const mdx = 'SELECT FROM [Sales]'

    const first = xmla.getMDX(mdx, undefined, undefined, { signal: a.signal })
    const second = xmla.getMDX(mdx, undefined, undefined, { signal: b.signal })
    a.abort()
    b.abort()
    await Promise.allSettled([first, second])
    expect(transport.signalOf(0)?.aborted).toBe(true)

    transport.delay = 5
    await expect(xmla.getMDX(mdx)).resolves.toHaveProperty('Body.ExecuteResponse')
    expect(transport.count('Execute')).toBe(2)
  })

  it('gives up after the timeout with an error that says so', async () => {
    const { api: xmla, transport } = api(new FakeTransport(), 0.02)
    transport.delay = 200

    const answer = xmla.getMDX('SELECT FROM [Sales]')
    await expect(answer).rejects.toBeInstanceOf(XmlaTimeoutError)
    await expect(answer).rejects.toThrow('did not answer within 0.02 s')
  })

  it('bounds a discover by the timeout as well', async () => {
    const { api: xmla, transport } = api(new FakeTransport(), 0.02)
    transport.delay = 200

    await expect(xmla.getLevels('FoodMart', 'Sales')).rejects.toBeInstanceOf(XmlaTimeoutError)
  })

  it('waits as long as it takes with a timeout of 0', async () => {
    const { api: xmla, transport } = api(new FakeTransport(), 0)
    transport.delay = 50

    await expect(xmla.getMDX('SELECT FROM [Sales]')).resolves.toHaveProperty('Body.ExecuteResponse')
    expect(transport.signalOf(0)).toBeDefined() // the shared request's own controller
  })
})
