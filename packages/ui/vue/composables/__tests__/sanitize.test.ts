/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { sanitizeHtml, sanitizeSvg, sanitizeStyleBlock } from '../src/sanitize'

/** What `v-html` does: assign to innerHTML and report what survived. */
const render = (html: string) => {
  const host = document.createElement('div')
  host.innerHTML = html
  return host
}

describe('sanitizeHtml', () => {
  it('drops an inline event handler from feed content', () => {
    const feedItem = '<p>Forecast: sunny.</p><img src="x" onerror="stealCookies()">'
    const host = render(sanitizeHtml(feedItem))

    expect(host.querySelector('img')?.getAttribute('onerror')).toBeNull()
    expect(host.querySelector('img')?.onerror).toBeNull()
    expect(host.textContent).toContain('Forecast: sunny.')
  })

  it('drops a script element', () => {
    expect(render(sanitizeHtml('<div>a</div><script>bad()</script>')).querySelector('script'))
      .toBeNull()
  })

  it('also covers entity-escaped markup, which the XML layer decodes once', () => {
    // A well-behaved RSS publisher emits &lt;img …&gt;; rss-parser hands the
    // decoded string on, so escaping at the source is not a mitigation.
    const decodedByXmlLayer = 'Normal text <img src=x onerror=window.pwned=1>'
    expect(render(sanitizeHtml(decodedByXmlLayer)).querySelector('img')?.getAttribute('onerror'))
      .toBeNull()
  })

  it('keeps the formatting rich text relies on', () => {
    const html = sanitizeHtml('<p style="text-align: center"><strong>Heading</strong></p>')
    expect(html).toContain('<strong>')
    expect(html).toContain('text-align')
  })

  it('returns an empty string for anything that is not a string', () => {
    expect(sanitizeHtml(undefined)).toBe('')
    expect(sanitizeHtml(null)).toBe('')
    expect(sanitizeHtml(42)).toBe('')
  })
})

describe('sanitizeSvg', () => {
  it('keeps the drawing', () => {
    const svg = sanitizeSvg('<svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg>')
    expect(render(svg).querySelector('circle')).not.toBeNull()
  })

  it('drops an onload handler on the root element', () => {
    const host = render(sanitizeSvg('<svg onload="pwn()"><rect width="1" height="1"/></svg>'))
    expect(host.querySelector('svg')?.getAttribute('onload')).toBeNull()
  })

  it('drops HTML smuggled into the SVG body', () => {
    // The markup lands in a <div>, so the browser parses it in the HTML
    // namespace and an <img> in there would be a live element.
    const host = render(sanitizeSvg('<svg><img src=x onerror="pwn()"></svg>'))
    expect(host.querySelector('img')).toBeNull()
  })

  it('drops a script inside foreignObject', () => {
    const host = render(
      sanitizeSvg('<svg><foreignObject><script>pwn()</script></foreignObject></svg>'),
    )
    expect(host.querySelector('script')).toBeNull()
  })
})

describe('sanitizeStyleBlock', () => {
  it('keeps a well-formed style block', () => {
    expect(sanitizeStyleBlock('<style>.a { fill: red; }</style>')).toContain('fill')
  })

  it('does not let a board-supplied value break out of the element', () => {
    const fromBoardConfig = '<style>.a { fill: </style><img src=x onerror="pwn()">; }</style>'
    const host = render(sanitizeStyleBlock(fromBoardConfig))
    expect(host.querySelector('img')).toBeNull()
  })
})
