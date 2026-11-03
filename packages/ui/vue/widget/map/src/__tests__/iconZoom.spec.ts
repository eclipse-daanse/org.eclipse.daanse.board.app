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

import { describe, it, expect } from 'vitest'
import {
  ALWAYS,
  effectiveZoom,
  iconScale,
  isIconVisible,
  isLabelVisible,
  usesZoomSettings,
  zoomFeaturesActive,
  type ZoomRules,
} from '../iconZoom'

/** A renderer that hides its icon below zoom 12. */
const HIDES_BELOW_12: ZoomRules = { renderer: { iconMinZoom: 12 } }

/** One that asks for nothing of the zoom. */
const PLAIN: ZoomRules = { renderer: { iconMinZoom: null } }

describe('what the zoom decides about an icon', () => {
  /*
   * The pair the review asked for, and the reason #1190 mattered: between
   * 8 October and this fix the zoom never reached the layer, so both of
   * these answered the same - visible.
   */
  it('hides an icon below its threshold and shows it above', () => {
    const zoomedOut = effectiveZoom([HIDES_BELOW_12], 10)
    const zoomedIn = effectiveZoom([HIDES_BELOW_12], 18)

    expect(isIconVisible(HIDES_BELOW_12, zoomedOut)).toBe(false)
    expect(isIconVisible(HIDES_BELOW_12, zoomedIn)).toBe(true)
  })

  it('shows an icon exactly at its threshold', () => {
    expect(isIconVisible(HIDES_BELOW_12, effectiveZoom([HIDES_BELOW_12], 12))).toBe(true)
  })

  /*
   * What went wrong. A missing zoom falls back to 99, which is above
   * every threshold anyone would set - so the setting looks ignored
   * rather than broken, and nothing in the interface says otherwise.
   */
  it('shows everything where no zoom arrives, which is what hid the defect', () => {
    expect(effectiveZoom([HIDES_BELOW_12], undefined)).toBe(ALWAYS)
    expect(isIconVisible(HIDES_BELOW_12, effectiveZoom([HIDES_BELOW_12], undefined))).toBe(true)
  })

  it('leaves a renderer that sets no threshold visible throughout', () => {
    expect(isIconVisible(PLAIN, 1)).toBe(true)
    expect(isIconVisible({}, 1)).toBe(true)
  })

  it('decides a label the same way, by its own threshold', () => {
    const renderer: ZoomRules = { renderer: { labelMinZoom: 15 } }

    expect(isLabelVisible(renderer, effectiveZoom([renderer], 10))).toBe(false)
    expect(isLabelVisible(renderer, effectiveZoom([renderer], 16))).toBe(true)
  })
})

describe('how large an icon is drawn', () => {
  const SCALES: ZoomRules = { renderer: { iconScaleWithZoom: true, iconFullSizeZoom: 18 } }

  it('grows towards full size as the map zooms in', () => {
    expect(iconScale(SCALES, 9)).toBeCloseTo(0.5, 3)
    expect(iconScale(SCALES, 18)).toBe(1)
    expect(iconScale(SCALES, 20)).toBe(1)
  })

  it('never shrinks an icon out of sight', () => {
    expect(iconScale(SCALES, 1)).toBe(0.2)
    expect(iconScale(SCALES, 0)).toBe(0.2)
  })

  it('leaves a renderer that did not ask to scale alone', () => {
    expect(iconScale({ renderer: { iconScaleWithZoom: false } }, 2)).toBe(1)
    expect(iconScale({}, 2)).toBe(1)
  })

  /* Full size rather than smallest, where the zoom never arrived. */
  it('draws at full size where no zoom arrives', () => {
    expect(iconScale(SCALES, undefined)).toBe(1)
  })
})

describe('whether the zoom is consulted at all', () => {
  /*
   * Where no renderer asks anything of it, the zoom is held constant so
   * that panning never re-renders what may be hundreds of markers.
   */
  it('holds the zoom constant where nothing depends on it', () => {
    expect(zoomFeaturesActive([PLAIN])).toBe(false)
    expect(effectiveZoom([PLAIN], 3)).toBe(ALWAYS)
  })

  it('consults it as soon as one renderer does', () => {
    expect(zoomFeaturesActive([PLAIN, HIDES_BELOW_12])).toBe(true)
    expect(effectiveZoom([PLAIN, HIDES_BELOW_12], 3)).toBe(3)
  })

  it('looks inside the datastream renderers too', () => {
    const outerPlain: ZoomRules = { renderer: null, ds_renderer: [{ renderer: { iconMinZoom: 12 } }] }

    expect(zoomFeaturesActive([outerPlain])).toBe(true)
  })

  it('counts each of the settings that depend on the zoom', () => {
    expect(usesZoomSettings({ iconMinZoom: 12 })).toBe(true)
    expect(usesZoomSettings({ iconScaleWithZoom: true })).toBe(true)
    expect(usesZoomSettings({ labelMinZoom: 12 })).toBe(true)
    expect(usesZoomSettings({ labelScaleWithZoom: true })).toBe(true)
    expect(usesZoomSettings({ clusterEnabled: true })).toBe(true)
    expect(usesZoomSettings({})).toBe(false)
    expect(usesZoomSettings(null)).toBe(false)
  })
})
