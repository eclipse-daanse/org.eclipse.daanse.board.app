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
/*
 * Starter charts (#1292): each one is written into the recipe with
 * columns of the data, and draws - Vega-Lite compiles it without a word,
 * with the sample and with a table of text, numbers and dates.
 */
import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { compile } from 'vega-lite'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import '../referencedPackages'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { compileRecipe } from '../recipe'
import { SAMPLE_VALUES, withDatasets } from '../sample'
import { emptySettings, modelledSettings } from '../settingsModel'
import { applyStarter, columnsOf, STARTERS } from '../starters'
import VegaWidget from '../VegaWidget.vue'

void VegawidgetPackage.eINSTANCE

const TABLE = Array.from({ length: 24 }, (_, i) => ({
  area: `ZW-0${i % 6}`,
  state: i % 3 ? 'dry' : 'moist',
  sensors: String(i % 5),
  moisture: 20 + (i % 7) * 3,
  at: `2026-11-${String((i % 9) + 1).padStart(2, '0')}T10:00:00Z`,
}))

function complaintsOf(spec: object): string[] {
  const said: string[] = []
  const logger = {
    level: () => 0,
    error: (...m: unknown[]) => { said.push(m.join(' ')); return logger },
    warn: (...m: unknown[]) => { said.push(m.join(' ')); return logger },
    info: () => logger,
    debug: () => logger,
  }
  compile(spec as never, { logger: logger as never })
  return said
}

describe('columnsOf', () => {
  it('tells text, numbers - also as text - and dates apart', () => {
    expect(columnsOf(TABLE)).toEqual([
      { name: 'area', kind: 'text' },
      { name: 'state', kind: 'text' },
      { name: 'sensors', kind: 'number' },
      { name: 'moisture', kind: 'number' },
      { name: 'at', kind: 'date' },
    ])
  })
})

describe('the starter charts', () => {
  for (const starter of STARTERS) {
    for (const [name, rows] of [['the sample', SAMPLE_VALUES], ['a table', TABLE]] as const) {
      it(`${starter} draws ${name} and empties the choice`, () => {
        const settings = emptySettings()
        settings.starter = starter
        expect(applyStarter(settings, starter, rows as never)).toBe(true)
        expect(settings.starter).toBe('none')
        expect(settings.layers.size()).toBeGreaterThan(0)
        const spec = withDatasets(compileRecipe(settings), { table: rows as never })
        expect(complaintsOf(spec)).toEqual([])
      })
    }
  }

  it('replaces what the chart had: its layers, selections and small multiples', () => {
    const settings = modelledSettings({ facet: { row: 'x' }, params: [{ name: 'old', kind: 'point' }], layers: [{ mark: 'tick' }, { mark: 'rule' }] })
    applyStarter(settings, 'donut', TABLE as never)
    expect([...settings.layers].map((l) => l.mark)).toEqual(['arc'])
    expect(settings.params.size()).toBe(0)
    expect(settings.facet).toBeFalsy()
    const encodings = [...settings.layers.get(0).encodings].map((e) => [e.channel, e.field])
    expect(encodings).toEqual([['theta', 'sensors'], ['color', 'area']])
  })

  it('uses a date column for the time axis of a line', () => {
    const settings = emptySettings()
    applyStarter(settings, 'line', TABLE as never)
    expect(settings.layers.get(0).encodings.get(0)).toMatchObject({ channel: 'x', field: 'at', type: 'temporal' })
  })

  it('does nothing for none', () => {
    const settings = modelledSettings(undefined)
    expect(applyStarter(settings, 'none', TABLE as never)).toBe(false)
    expect(settings.layers.get(0).mark).toBe('bar')
  })
})

describe('a starter picked in the form', () => {
  it('is drawn by the widget at once', async () => {
    const settings = modelledSettings({ renderer: 'svg' })
    const wrapper = mount(VegaWidget, {
      props: { id: 'w1', configv: settings as any },
      global: { provide: { [identifier as symbol]: { getDatasource: () => { throw new Error('none') } } } },
      attachTo: document.body,
    })
    const settle = async () => {
      for (let i = 0; i < 20; i++) {
        await flushPromises()
        await new Promise((resolve) => setTimeout(resolve, 10))
      }
    }
    await settle()
    settings.starter = 'donut'
    await settle()
    expect(settings.starter).toBe('none')
    expect(wrapper.get('[data-testid="vega-chart"]').element.querySelectorAll('.mark-arc.role-mark path').length).toBe(6)
    wrapper.unmount()
  })
})
