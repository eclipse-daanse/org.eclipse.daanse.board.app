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
 * ********************************************************************/

// @vitest-environment jsdom
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { afterEach, describe, expect, it } from 'vitest'
import L from 'leaflet'
import {
  drawOverlay,
  INVERT_CLASS,
  OVERLAY_PANE,
  overlayTiles,
  type TileLayerFactory,
} from '../roadOverlay'
import { MapSettingsImpl } from '../gen/MapSettingsImpl'
import { RoadOverlay } from '../gen/RoadOverlay'

/*
 * A tile layer that loads nothing. What is checked is which address the
 * overlay asks for and where it is put - never a tile from Stadia or Esri.
 */
const StubTiles = L.Layer.extend({
  initialize(this: any, url: string, options: L.TileLayerOptions) {
    this.url = url
    L.setOptions(this, options)
  },
  onAdd() {},
  onRemove() {},
  getAttribution(this: any) {
    return this.options.attribution
  },
})
const made: { url: string; options: L.TileLayerOptions }[] = []
const stub: TileLayerFactory = (url, options) => {
  made.push({ url, options })
  return new (StubTiles as any)(url, options)
}

let container: HTMLElement | undefined
function newMap(): L.Map {
  container = document.createElement('div')
  document.body.appendChild(container)
  return L.map(container).setView([50.93, 11.6], 12)
}

afterEach(() => {
  made.length = 0
  container?.remove()
  container = undefined
  document.head.querySelectorAll('style').forEach((style) => style.remove())
})

describe('the roads overlay', () => {
  it('draws nothing unless asked: the model starts with none', () => {
    const fresh = new MapSettingsImpl()

    expect(fresh.overlay).toBe(RoadOverlay.none)
    expect(fresh.overlayOpacity).toBe(1)
    expect(overlayTiles(fresh)).toBeUndefined()
  })

  it.each([
    [RoadOverlay.stadiaLines, ['https://tiles.stadiamaps.com/tiles/stamen_toner_lines/{z}/{x}/{y}.png']],
    [
      RoadOverlay.stadiaLinesLabels,
      [
        'https://tiles.stadiamaps.com/tiles/stamen_toner_lines/{z}/{x}/{y}.png',
        'https://tiles.stadiamaps.com/tiles/stamen_toner_labels/{z}/{x}/{y}.png',
      ],
    ],
    [
      RoadOverlay.esriTransportation,
      [
        'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',
      ],
    ],
  ])('%s sets its tile URL', (overlay, urls) => {
    expect(overlayTiles({ overlay })?.urls).toEqual(urls)
  })

  it('a custom overlay draws the address it was given, and nothing without one', () => {
    const own = 'https://tiles.example.test/roads/{z}/{x}/{y}.png'

    expect(overlayTiles({ overlay: RoadOverlay.custom, overlayUrl: own })?.urls).toEqual([own])
    expect(overlayTiles({ overlay: RoadOverlay.custom, overlayUrl: '  ' })).toBeUndefined()
  })

  it('appends the key to Stadia only', () => {
    const key = 'k e/y'
    const stadia = overlayTiles({ overlay: RoadOverlay.stadiaLinesLabels, overlayApiKey: key })!
    const esri = overlayTiles({ overlay: RoadOverlay.esriTransportation, overlayApiKey: key })!
    const custom = overlayTiles({
      overlay: RoadOverlay.custom,
      overlayUrl: 'https://tiles.example.test/{z}/{x}/{y}.png',
      overlayApiKey: key,
    })!

    for (const url of stadia.urls) expect(url).toMatch(/\.png\?api_key=k%20e%2Fy$/)
    for (const url of [...esri.urls, ...custom.urls]) expect(url).not.toContain('api_key')
  })

  it('names the provider of every preset', () => {
    for (const overlay of [RoadOverlay.stadiaLines, RoadOverlay.stadiaLinesLabels]) {
      const credit = overlayTiles({ overlay })!.attribution
      for (const name of ['Stadia Maps', 'Stamen Design', 'OpenMapTiles', 'OpenStreetMap']) {
        expect(credit).toContain(name)
      }
    }
    expect(overlayTiles({ overlay: RoadOverlay.esriTransportation })!.attribution).toContain('Esri')
  })

  it('draws above the base map and below the data', () => {
    const style = document.createElement('style')
    style.textContent = readFileSync(createRequire(import.meta.url).resolve('leaflet/dist/leaflet.css'), 'utf-8')
    document.head.appendChild(style)
    const map = newMap()
    stub('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map)

    const layers = drawOverlay(map, overlayTiles({ overlay: RoadOverlay.stadiaLinesLabels }), stub)

    expect(layers).toHaveLength(2)
    for (const { options } of made.slice(1)) expect(options.pane).toBe(OVERLAY_PANE)
    const z = (pane: string) => Number(getComputedStyle(map.getPane(pane)!).zIndex)
    expect(z(OVERLAY_PANE)).toBeGreaterThan(z('tilePane'))
    expect(z(OVERLAY_PANE)).toBeLessThan(z('overlayPane'))
  })

  it('credits the overlay on the map, once', () => {
    const map = newMap()

    drawOverlay(map, overlayTiles({ overlay: RoadOverlay.stadiaLinesLabels }), stub)

    const credit = map.attributionControl.getContainer()!.innerHTML
    expect(credit).toContain('Stadia Maps')
    expect(credit.split('Stadia Maps').length - 1).toBe(1)
  })

  it('carries its opacity, and marks its pane for the dark theme when asked', () => {
    const map = newMap()

    drawOverlay(
      map,
      overlayTiles({ overlay: RoadOverlay.stadiaLines, overlayOpacity: 0.4, overlayInvertDark: true }),
      stub,
    )
    expect(made[0].options.opacity).toBe(0.4)
    expect(map.getPane(OVERLAY_PANE)!.classList.contains(INVERT_CLASS)).toBe(true)

    drawOverlay(map, overlayTiles({ overlay: RoadOverlay.stadiaLines }), stub)
    expect(map.getPane(OVERLAY_PANE)!.classList.contains(INVERT_CLASS)).toBe(false)
  })
})
