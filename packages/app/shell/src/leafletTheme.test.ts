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

// @vitest-environment jsdom
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { afterEach, describe, expect, it } from 'vitest'
import L from 'leaflet'

/*
 * The shell's sheet against Leaflet's own, loaded after it as the bundles
 * do - so the theme has to win by specificity, not by order.
 *
 * jsdom does not resolve var(), so what is read is the token itself. And
 * jsdom 28 weighs rules by specificity only on the first computed style
 * read after a sheet was added - every later read goes by order alone,
 * which would let Leaflet's sheet win here and Leaflet's lose anywhere
 * else. So each read below comes after a sheet was added: an empty one.
 */
const require = createRequire(import.meta.url)
const shellSheet = readFileSync(require.resolve('./assets/leaflet.css'), 'utf-8')
const leafletSheet = readFileSync(require.resolve('leaflet/dist/leaflet.css'), 'utf-8')

function addSheet(css: string) {
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
}

let container: HTMLElement | undefined
let map: L.Map | undefined

/* A map with Leaflet's default controls, in the theme the shell has set. */
function mapIn(theme: 'dark' | 'light') {
  document.documentElement.setAttribute('data-theme', theme)
  container = document.createElement('div')
  document.body.appendChild(container)
  map = L.map(container).setView([50.93, 11.6], 12)
  addSheet(shellSheet)
  addSheet(leafletSheet)
}

afterEach(() => {
  map?.remove()
  map = undefined
  container?.remove()
  container = undefined
  document.head.querySelectorAll('style').forEach((style) => style.remove())
  document.documentElement.removeAttribute('data-theme')
})

function computed(element: Element): CSSStyleDeclaration {
  addSheet('')
  return getComputedStyle(element)
}

const zoomIn = () => container!.querySelector<HTMLElement>('.leaflet-control-zoom-in')!

describe("Leaflet's controls in the shell's theme", () => {
  it('the zoom buttons carry the theme colours in the dark theme', () => {
    mapIn('dark')

    const style = computed(zoomIn())
    expect(style.backgroundColor).toBe('var(--color-bg)')
    expect(style.color).toBe('var(--color-fg)')
  })

  it("the light theme keeps Leaflet's own look", () => {
    mapIn('light')

    expect(computed(zoomIn()).backgroundColor).toBe('rgb(255, 255, 255)')
  })
})
