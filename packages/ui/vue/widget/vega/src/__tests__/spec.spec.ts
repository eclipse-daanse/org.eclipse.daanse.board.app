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
 * The spec derived from the settings (#1283).
 */
import { describe, expect, it } from 'vitest'
import { compile } from 'vega-lite'
import { specOf } from '../spec'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { VegaWidgetSettingsImpl } from '../gen/VegaWidgetSettingsImpl'

void VegawidgetPackage.eINSTANCE

describe('specOf', () => {
  it('is a valid Vega-Lite spec that Vega-Lite compiles', () => {
    const { spec } = compile(specOf(new VegaWidgetSettingsImpl()))
    expect(spec.marks?.length).toBeGreaterThan(0)
  })

  it('draws the title the settings hold, and none when it is empty', () => {
    const settings = new VegaWidgetSettingsImpl()
    expect(specOf(settings).title).toBeUndefined()
    settings.title = '  Sales  '
    expect(specOf(settings).title).toBe('Sales')
  })

  it('is sized by the frame, not by the spec', () => {
    const spec = specOf(null) as { width?: unknown; height?: unknown }
    expect(spec.width).toBe('container')
    expect(spec.height).toBe('container')
  })

  it('names no URL', () => {
    expect(JSON.stringify(specOf({ title: 'x' }))).not.toMatch(/"url"/)
  })
})

describe('VegaWidgetSettings', () => {
  it('defaults to a canvas with tooltips', () => {
    const settings = new VegaWidgetSettingsImpl()
    expect(settings.renderer).toBe('canvas')
    expect(settings.tooltip).toBe(true)
    expect(settings.title).toBe('')
  })
})
