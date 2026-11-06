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


/*
 * The attribution of the map, as a board sets it (#1271).
 *
 * MapLibre's own control always adds what the style's sources say, so a
 * text that replaces the whole attribution needs a control of its own. It
 * looks like MapLibre's - the same classes - and folds behind the same
 * i button when compact.
 */

import type { IControl } from 'maplibre-gl'

/** Elements an attribution keeps; everything else is reduced to its text. */
const KEPT = new Set(['A', 'B', 'STRONG', 'I', 'EM', 'SPAN', 'BR'])
/** Elements whose content is no text to show. */
const DROPPED = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'NOSCRIPT', 'IFRAME', 'OBJECT', 'SVG'])

/**
 * The attribution text as safe DOM: links (http, https, mailto only, opened
 * in a new tab), simple emphasis and line breaks; no scripts, no styles,
 * no handlers.
 */
export function attributionFragment(text: string, doc: Document = document): DocumentFragment {
  const parsed = new DOMParser().parseFromString(`<body>${text}</body>`, 'text/html').body
  const out = doc.createDocumentFragment()
  const copy = (from: Node, to: Node) => {
    for (const child of Array.from(from.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        to.appendChild(doc.createTextNode(child.textContent ?? ''))
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const element = child as Element
        if (DROPPED.has(element.tagName.toUpperCase())) continue
        if (!KEPT.has(element.tagName)) {
          copy(element, to)
          continue
        }
        const made = doc.createElement(element.tagName.toLowerCase())
        if (element.tagName === 'A') {
          const href = element.getAttribute('href') ?? ''
          if (/^(https?:|mailto:)/i.test(href.trim())) {
            made.setAttribute('href', href.trim())
            made.setAttribute('target', '_blank')
            made.setAttribute('rel', 'noopener noreferrer')
          }
        }
        copy(element, made)
        to.appendChild(made)
      }
    }
  }
  copy(parsed, out)
  return out
}

/** A control that shows the attribution a board sets, instead of the sources' own. */
export class TextAttributionControl implements IControl {
  private container?: HTMLElement
  private inner?: HTMLElement

  constructor(
    private text: string,
    private readonly compact: boolean,
    private readonly toggleLabel = 'Attribution',
  ) {}

  onAdd(): HTMLElement {
    // Folded as MapLibre folds its own: a details element with the i button as its summary.
    const container = document.createElement(this.compact ? 'details' : 'div')
    container.className = 'maplibregl-ctrl maplibregl-ctrl-attrib'
    if (this.compact) {
      container.classList.add('maplibregl-compact')
      const button = document.createElement('summary')
      button.className = 'maplibregl-ctrl-attrib-button'
      button.title = this.toggleLabel
      button.setAttribute('aria-label', this.toggleLabel)
      container.appendChild(button)
      container.addEventListener('toggle', () =>
        container.classList.toggle('maplibregl-compact-show', (container as HTMLDetailsElement).open),
      )
    }
    const inner = document.createElement('div')
    inner.className = 'maplibregl-ctrl-attrib-inner'
    container.appendChild(inner)
    this.container = container
    this.inner = inner
    this.setText(this.text)
    return container
  }

  /** Shows another text, in place. */
  setText(text: string): void {
    this.text = text
    if (!this.inner) return
    this.inner.replaceChildren(attributionFragment(text))
  }

  onRemove(): void {
    this.container?.remove()
    this.container = undefined
    this.inner = undefined
  }
}
