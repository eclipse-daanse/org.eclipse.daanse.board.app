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
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import GaugeWidget from '../GaugeWidget.vue'
import { GaugeSettingsImpl } from '../gen/GaugeSettingsImpl'
import { GaugeThresholdImpl } from '../gen/GaugeThresholdImpl'
import { GaugewidgetsPackage } from '../gen/GaugewidgetsPackage'

/*
 * Built before the first instance, as the bundle's own entry does it:
 * until the EPackage exists the class literals are null, and an instance
 * cannot say what features it has.
 */
void GaugewidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

/* What the source answered, set per test. */
let answered: unknown = null

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useDatasourceRepository: (_id: unknown, _shape: unknown, target: { value: unknown }) => {
      target.value = answered
      return { update: vi.fn() }
    },
  }
})

function settingsWith(overrides: Record<string, unknown> = {}) {
  const settings: any = new GaugeSettingsImpl()
  settings.value = new VariableWrapper('$value.percent')
  settings.min = new VariableWrapper('0')
  settings.max = new VariableWrapper('100')
  settings.color = new VariableWrapper('#2563eb')
  settings.trackColor = new VariableWrapper('#e5e7eb')
  settings.thickness = new VariableWrapper('14')
  settings.shape = 'threeQuarter'
  for (const [key, value] of Object.entries(overrides)) settings[key] = value
  return settings
}

function thresholdAt(at: number, color: string) {
  const threshold: any = new GaugeThresholdImpl()
  threshold.at = new VariableWrapper(String(at))
  threshold.color = new VariableWrapper(color)
  return threshold
}

async function show(settings: any) {
  const wrapper = mount(GaugeWidget, {
    props: { datasourceId: 'ds1', id: 'w1', configv: settings },
    global: {
      provide: {
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: {
          registerInstance: vi.fn(),
          unregisterInstance: vi.fn(),
        },
      },
    },
  })
  await flushPromises()
  return wrapper
}

/** How much of the arc is drawn, 0 to 1 - the dash against the whole. */
function drawnShare(wrapper: any): number {
  const dash = wrapper.find('.gauge__value').attributes('stroke-dasharray') ?? ''
  const [filled, whole] = dash.split(' ').map(Number)
  return whole ? filled / whole : 0
}

/** The arc's whole length, which is what the shape decides. */
function arcLength(wrapper: any): number {
  const dash = wrapper.find('.gauge__value').attributes('stroke-dasharray') ?? ''
  return Number(dash.split(' ')[1])
}

describe('GaugeWidget', () => {
  beforeEach(() => {
    answered = { percent: 42 }
  })

  it('draws the value as its share of the range', async () => {
    const wrapper = await show(settingsWith())
    expect(drawnShare(wrapper)).toBeCloseTo(0.42, 3)
  })

  it('reads the field the placeholder names, out of what the source answered', async () => {
    answered = { outer: { inner: 75 } }
    const wrapper = await show(settingsWith({ value: new VariableWrapper('$value.outer.inner') }))
    expect(drawnShare(wrapper)).toBeCloseTo(0.75, 3)
  })

  it('counts from the lower bound, not from zero', async () => {
    answered = { percent: 30 }
    const wrapper = await show(
      settingsWith({ min: new VariableWrapper('20'), max: new VariableWrapper('40') }),
    )
    expect(drawnShare(wrapper)).toBeCloseTo(0.5, 3)
  })

  it('keeps a value outside its bounds inside the arc', async () => {
    answered = { percent: 250 }
    expect(drawnShare(await show(settingsWith()))).toBe(1)

    answered = { percent: -80 }
    expect(drawnShare(await show(settingsWith()))).toBe(0)
  })

  /*
   * The shape decides how much of a circle there is to fill, so the same
   * value covers a different length in each - and a full circle has to
   * draw at all, which an arc whose ends meet does not (it is halved for
   * exactly that reason).
   */
  describe('shape', () => {
    it('gives each shape its own share of the circle', async () => {
      const full = arcLength(await show(settingsWith({ shape: 'full' })))
      const threeQuarter = arcLength(await show(settingsWith({ shape: 'threeQuarter' })))
      const half = arcLength(await show(settingsWith({ shape: 'half' })))

      expect(threeQuarter / full).toBeCloseTo(0.75, 3)
      expect(half / full).toBeCloseTo(0.5, 3)
    })

    it('draws a full circle rather than nothing', async () => {
      const wrapper = await show(settingsWith({ shape: 'full' }))
      const path = wrapper.find('.gauge__value').attributes('d') ?? ''

      /* Two arcs: one of 360 degrees ends where it starts and is not drawn. */
      expect(path.match(/A /g) ?? []).toHaveLength(2)
      expect(arcLength(wrapper)).toBeGreaterThan(0)
    })

    it('falls back to the dial shape when the setting says nothing', async () => {
      const unset = arcLength(await show(settingsWith({ shape: undefined })))
      const dial = arcLength(await show(settingsWith({ shape: 'threeQuarter' })))
      expect(unset).toBeCloseTo(dial, 6)
    })
  })

  describe('thresholds', () => {
    it('takes the colour of the highest one the value has passed', async () => {
      answered = { percent: 90 }
      const settings = settingsWith()
      settings.thresholds.add(thresholdAt(60, '#f59e0b'))
      settings.thresholds.add(thresholdAt(85, '#ef4444'))

      const wrapper = await show(settings)
      expect(wrapper.find('.gauge__value').attributes('stroke')).toBe('#ef4444')
    })

    it('keeps its own colour below the first one', async () => {
      answered = { percent: 10 }
      const settings = settingsWith()
      settings.thresholds.add(thresholdAt(60, '#f59e0b'))

      const wrapper = await show(settings)
      expect(wrapper.find('.gauge__value').attributes('stroke')).toBe('#2563eb')
    })

    /*
     * Typed in any order; applied in theirs.
     *
     * The value has to stand above both for this to say anything: with one
     * threshold passed and one not, the colour comes out right whether or
     * not they were sorted, and the test passes while the sorting is gone.
     */
    it('does not depend on the order they were entered in', async () => {
      answered = { percent: 90 }
      const settings = settingsWith()
      settings.thresholds.add(thresholdAt(85, '#ef4444'))
      settings.thresholds.add(thresholdAt(60, '#f59e0b'))

      const wrapper = await show(settings)
      expect(wrapper.find('.gauge__value').attributes('stroke')).toBe('#ef4444')
    })

    it('draws the ranges on the track only where asked', async () => {
      const settings = settingsWith()
      settings.thresholds.add(thresholdAt(60, '#f59e0b'))

      const quiet = await show(settings)
      expect(quiet.findAll('path')).toHaveLength(2)

      const banded = settingsWith({ showBands: true })
      banded.thresholds.add(thresholdAt(60, '#f59e0b'))
      const shown = await show(banded)

      /* One band below the threshold, one above, plus the value. */
      expect(shown.findAll('path')).toHaveLength(3)
    })
  })

  describe('with nothing to show', () => {
    it('draws no arc and writes a dash', async () => {
      answered = null
      const wrapper = await show(settingsWith())

      expect(drawnShare(wrapper)).toBe(0)
      expect(wrapper.find('.gauge__number').text()).toBe('–')
    })

    it('writes a dash where the field is not a number', async () => {
      answered = { percent: 'warm' }
      const wrapper = await show(settingsWith())

      expect(drawnShare(wrapper)).toBe(0)
      expect(wrapper.find('.gauge__number').text()).toBe('–')
    })
  })

  describe('the number', () => {
    it('is written with the decimals asked for, and its unit', async () => {
      answered = { percent: 42.1234 }
      const wrapper = await show(
        settingsWith({ decimals: 2, unit: new VariableWrapper('%') }),
      )
      expect(wrapper.find('.gauge__number').text()).toBe('42.12%')
    })

    it('is left out where it is not wanted', async () => {
      const wrapper = await show(settingsWith({ showValue: false }))
      expect(wrapper.find('.gauge__number').exists()).toBe(false)
    })
  })

  /*
   * Widget.config is an attribute, not a containment: the adapter on the
   * widget never hears a write inside the settings object, and the widget
   * is handed the same instance on every change. A setting changed in the
   * open dialog has to reach the gauge all the same (#1203).
   */
  describe('a setting changed in the open dialog', () => {
    it('reaches the arc: a new shape redraws it', async () => {
      const settings = settingsWith({ shape: 'half' })
      const wrapper = await show(settings)
      const half = arcLength(wrapper)

      settings.shape = 'full'
      await nextTick()

      expect(arcLength(wrapper)).toBeCloseTo(half * 2, 5)
    })

    it('reaches the track: the bands appear when they are switched on', async () => {
      const settings = settingsWith({ showBands: false })
      settings.thresholds.add(thresholdAt(50, '#f59e0b'))
      const wrapper = await show(settings)
      /* The track and the value. */
      expect(wrapper.findAll('path')).toHaveLength(2)

      settings.showBands = true
      await nextTick()

      /* One band below the threshold, one above, plus the value. */
      expect(wrapper.findAll('path')).toHaveLength(3)
    })

    /* A wrapper put in place of another is a set on the settings object. */
    it('reaches the arc: a new lower bound moves the value along it', async () => {
      const settings = settingsWith()
      const wrapper = await show(settings)
      expect(drawnShare(wrapper)).toBeCloseTo(0.42, 5)

      settings.min = new VariableWrapper('40')
      await nextTick()

      /* 42 of 40..100 is 2 of 60. */
      expect(drawnShare(wrapper)).toBeCloseTo(2 / 60, 5)
    })

    it('reaches the arc: a new upper bound does the same', async () => {
      const settings = settingsWith()
      const wrapper = await show(settings)

      settings.max = new VariableWrapper('84')
      await nextTick()

      expect(drawnShare(wrapper)).toBeCloseTo(0.5, 5)
    })

    /* The thresholds are contained, so an adapter on the settings sees
      one added and one changed from the inside. */
    it('reaches the colour: a threshold added below the value takes over', async () => {
      const settings = settingsWith()
      const wrapper = await show(settings)
      expect(wrapper.find('.gauge__value').attributes('stroke')).toBe('#2563eb')

      settings.thresholds.add(thresholdAt(30, '#f59e0b'))
      await nextTick()

      expect(wrapper.find('.gauge__value').attributes('stroke')).toBe('#f59e0b')
    })

    it('reaches the colour: a threshold moved above the value lets go', async () => {
      const settings = settingsWith()
      const threshold = thresholdAt(30, '#f59e0b')
      settings.thresholds.add(threshold)
      const wrapper = await show(settings)
      expect(wrapper.find('.gauge__value').attributes('stroke')).toBe('#f59e0b')

      threshold.at = new VariableWrapper('60')
      await nextTick()

      expect(wrapper.find('.gauge__value').attributes('stroke')).toBe('#2563eb')
    })

    it('reaches the number: the places follow the setting', async () => {
      answered = { percent: 42.123 }
      const settings = settingsWith({ decimals: 0 })
      const wrapper = await show(settings)
      expect(wrapper.find('.gauge__number').text()).toBe('42')

      settings.decimals = 2
      await nextTick()

      expect(wrapper.find('.gauge__number').text()).toBe('42.12')
    })
  })
})
