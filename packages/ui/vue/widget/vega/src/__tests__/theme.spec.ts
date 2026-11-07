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
 * The board's theme as a Vega config (#1287).
 */
import { describe, expect, it } from 'vitest'
import { compile } from 'vega-lite'
import { compileRecipe } from '../recipe'
import { modelledSettings } from '../settingsModel'
import { pixels, themeConfig } from '../theme'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'

void VegawidgetPackage.eINSTANCE

const tokens = (held: Record<string, string>) => (name: string) => held[name] ?? ''

describe('themeConfig', () => {
  it('takes the colours and type of the board tokens', () => {
    const config = themeConfig(tokens({
      '--color-fg': '#eeeeee', '--color-dim': '#999999', '--color-divider': '#333333',
      '--color-accent': '#ff8800', '--font-sans': 'Inter', '--text-xs': '0.75rem', '--text-sm': '13px',
    }), true) as Record<string, any>
    expect(config.axis).toMatchObject({ labelColor: '#999999', titleColor: '#eeeeee', gridColor: '#333333', labelFont: 'Inter', labelFontSize: 12, titleFontSize: 13 })
    expect(config.title).toMatchObject({ color: '#eeeeee', font: 'Inter' })
    expect(config.legend).toMatchObject({ labelColor: '#999999', titleColor: '#eeeeee' })
    expect(config.mark).toEqual({ color: '#ff8800' })
    expect(config.background).toBe('transparent')
  })

  it('prefers a muted foreground token where the shell has one', () => {
    const config = themeConfig(tokens({ '--color-fg-muted': '#777777', '--color-dim': '#999999' }), true) as Record<string, any>
    expect(config.axis.labelColor).toBe('#777777')
  })

  it('falls back to readable colours for each theme without tokens', () => {
    const dark = themeConfig(tokens({}), true) as Record<string, any>
    const light = themeConfig(tokens({}), false) as Record<string, any>
    expect(dark.axis.titleColor).not.toBe(light.axis.titleColor)
    expect(dark.axis.titleColor).toBe('#cccccc')
  })

  it('gives way to what the chart says of itself', () => {
    const spec = compileRecipe(modelledSettings({ legendPosition: 'bottom' }))
    const { spec: vega } = compile(spec, { config: themeConfig(tokens({ '--color-fg': '#eeeeee' }), true) as never })
    expect(JSON.stringify(vega)).toContain('"orient":"bottom"')
    expect(JSON.stringify(vega)).toContain('#eeeeee')
  })
})

describe('pixels', () => {
  it('reads px, rem and em, and falls back on anything else', () => {
    expect([pixels('12px', 0), pixels('0.75rem', 0), pixels('2em', 0, 10), pixels('', 11), pixels('calc(1px)', 9)]).toEqual([12, 12, 20, 11, 9])
  })
})
