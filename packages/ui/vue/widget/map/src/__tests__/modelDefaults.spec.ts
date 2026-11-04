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
import { PointAndAreaSettingsImpl } from '../gen/PointAndAreaSettingsImpl'
import { MapPropsImpl } from '../gen/MapPropsImpl'
import { LayerImpl } from '../gen/LayerImpl'
import { IconSettingsImpl } from '../gen/IconSettingsImpl'

/*
 * Since #1218 a number or a flag the model gives no default starts as 0 or
 * false, as in EMF - no longer as undefined. The code used to supply its
 * own value for undefined (?? 18, ?? 40, !== undefined ? ... : 0.2), and
 * those never apply to 0. So the values are declared in the model, where a
 * new renderer, a new area style and a new layer take them from.
 *
 * Field initialisers on the generated classes: no EPackage is needed.
 */
describe('what the map model starts with', () => {
  it('scales icons and labels up to zoom 18, and clusters below 14 within 40 pixels', () => {
    const settings = new PointAndAreaSettingsImpl()
    expect(settings.iconFullSizeZoom).toBe(18)
    expect(settings.labelFullSizeZoom).toBe(18)
    expect(settings.clusterBelowZoom).toBe(14)
    expect(settings.clusterRadius).toBe(40)
  })

  /* An area drawn with nothing set was invisible: no stroke, no fill, opacity 0. */
  it('draws an area with a visible outline and a light fill', () => {
    const style = new MapPropsImpl()
    expect(style.stroke).toBe(true)
    expect(style.weight).toBe(3)
    expect(style.opacity).toBe(1)
    expect(style.fill).toBe(true)
    expect(style.fillOpacity).toBe(0.2)
  })

  /* Leaflet drew an overlay without an opacity at full strength; 0 hides it. */
  it('shows an overlay layer at full opacity', () => {
    expect(new LayerImpl().opacity).toBe(1)
  })

  it('draws an icon at a visible size, with the font axes at their own defaults', () => {
    const icon = new IconSettingsImpl()
    expect(icon.iconSize).toBe(48)
    expect(icon.strokeWeight).toBe(400)
    expect(icon.opticSize).toBe(24)
    expect(icon.grade).toBe(0)
  })
})
