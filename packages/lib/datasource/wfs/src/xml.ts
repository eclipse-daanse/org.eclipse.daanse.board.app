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
 * A small XML tree, read with saxes instead of DOMParser. saxes does not
 * expand the entities of a document type declaration, and the tree is no
 * DOM, so nothing of an answer reaches the page as markup. The tree offers
 * the few DOM methods the readers of WFS and WMS answers use.
 */

import { SaxesParser, type SaxesAttributeNS } from 'saxes'

export class XmlNode {
  readonly children: XmlNode[] = []
  /** Text in front of the first child. */
  private text = ''
  /** Text after this node and in front of its next sibling; it belongs to the parent. */
  private tail = ''

  constructor(
    /** The qualified name, e.g. gml:Point; empty for the document. */
    readonly name: string,
    /** The name without its prefix. */
    readonly localName: string,
    /** The namespace URI, empty for none. */
    readonly namespaceURI: string,
    private readonly attributes: Record<string, SaxesAttributeNS>,
    readonly parentElement: XmlNode | null,
  ) {}

  /** The root element of a document. */
  get documentElement(): XmlNode | null {
    return this.children[0] ?? null
  }

  get firstElementChild(): XmlNode | null {
    return this.children[0] ?? null
  }

  /** The text of this node and of all nodes inside it, in order. */
  get textContent(): string {
    return this.text + this.children.map((child) => child.textContent + child.tail).join('')
  }

  /** Text in front of the first child goes here, later text to the child in front of it. */
  appendText(text: string) {
    const last = this.children[this.children.length - 1]
    if (last) last.tail += text
    else this.text += text
  }

  /** The value of an attribute by its qualified name, or null. */
  getAttribute(name: string): string | null {
    return this.attributes[name]?.value ?? null
  }

  /** The value of an attribute by namespace and local name, or an empty string. */
  getAttributeNS(namespace: string, localName: string): string {
    return Object.values(this.attributes).find((a) => a.uri === namespace && a.local === localName)?.value ?? ''
  }

  /** The elements inside this node with the local name, in document order; namespace '*' for any. */
  getElementsByTagNameNS(namespace: string, localName: string): XmlNode[] {
    return this.descendants((node) => node.localName === localName && (namespace === '*' || node.namespaceURI === namespace))
  }

  /** The elements inside this node with the qualified name, in document order. */
  getElementsByTagName(name: string): XmlNode[] {
    return this.descendants((node) => node.name === name)
  }

  private descendants(match: (node: XmlNode) => boolean): XmlNode[] {
    const found: XmlNode[] = []
    const visit = (node: XmlNode) => {
      for (const child of node.children) {
        if (match(child)) found.push(child)
        visit(child)
      }
    }
    visit(this)
    return found
  }
}

const emptyDocument = () => new XmlNode('', '', '', {}, null)

/**
 * An answer of a server read as an XML tree. An answer with a document type
 * declaration, or one that is not well-formed XML, is read as an empty
 * document: WFS and WMS answers have none, and an HTML error page is no
 * answer to read features from.
 */
export function parseXml(answer: string): XmlNode {
  if (/<!DOCTYPE/i.test(answer)) return emptyDocument()
  const document = emptyDocument()
  let current = document
  const parser = new SaxesParser({ xmlns: true })
  let failed = false
  parser.on('error', () => {
    failed = true
  })
  parser.on('opentag', (tag) => {
    const node = new XmlNode(tag.name, tag.local, tag.uri, tag.attributes, current)
    current.children.push(node)
    current = node
  })
  parser.on('closetag', () => {
    current = current.parentElement ?? document
  })
  parser.on('text', (text) => current.appendText(text))
  parser.on('cdata', (text) => current.appendText(text))
  try {
    parser.write(answer).close()
  } catch {
    failed = true
  }
  return failed ? emptyDocument() : document
}
