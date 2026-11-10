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
import { parseXml } from '../src/xml'
import { featuresOfGml } from '../src/wfs'

describe('an answer read as XML', () => {
  it('keeps its elements, attributes, namespaces and text in order', () => {
    const doc = parseXml('<a:root xmlns:a="urn:a" id="r"><a:x n="1">one</a:x> and <a:x>two<![CDATA[!]]></a:x></a:root>')
    const root = doc.documentElement!
    expect(root.localName).toBe('root')
    expect(root.namespaceURI).toBe('urn:a')
    expect(root.getAttribute('id')).toBe('r')
    expect(doc.getElementsByTagNameNS('*', 'x').map((x) => x.textContent)).toEqual(['one', 'two!'])
    expect(doc.getElementsByTagNameNS('urn:a', 'x')[0].getAttribute('n')).toBe('1')
    expect(root.textContent).toBe('one and two!')
  })

  it('is empty where it has a document type declaration, so no entity expands', () => {
    const bomb = '<?xml version="1.0"?><!DOCTYPE lolz [<!ENTITY lol "lol"><!ENTITY lol2 "&lol;&lol;">]><lolz>&lol2;</lolz>'
    expect(parseXml(bomb).documentElement).toBeNull()
    expect(featuresOfGml(bomb).features).toEqual([])
  })

  it('is empty where it is no well-formed XML, such as an HTML error page', () => {
    expect(parseXml('<html><body><p>Not found<br></body></html>').documentElement).toBeNull()
  })
})
