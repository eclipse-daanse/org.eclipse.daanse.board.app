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
 * #1248: a timeline bound to variables threw "Cannot create property 'value'
 * on number '0'" on mount, so the relative time range was never applied and
 * every request of the board used the stored window.
 */

import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifier as VARIABLES } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { TimelinesettingsPackage } from '../gen/TimelinesettingsPackage'
import TimelineWidget from '../TimelineWidget.vue'

vi.mock('vue-router', () => ({ useRoute: () => ({ params: { pageid: 'page' } }) }))

void TimelinesettingsPackage.eINSTANCE

/** A variable as the repository hands it out: value, name, subscriptions. */
function variable(name: string, value: string) {
  const listeners: Array<() => void> = []
  return {
    name,
    value,
    subscribe: (fn: () => void) => { listeners.push(fn) },
    unsubscribe: () => {},
  }
}

describe('a timeline bound to variables', () => {
  it('applies its relative time range on mount', () => {
    const stored = { start: '2026-06-29T00:00:00.000Z', end: '2026-07-04T00:00:00.000Z' }
    const vars = {
      start: variable('start', stored.start),
      end: variable('end', stored.end),
    }
    const config = {
      rangeStart: stored.start,
      rangeEnd: stored.end,
      rangeStartVariable: 'start',
      rangeEndVariable: 'end',
      relativeTime: { enabled: true, offset: 2, unit: 'days' },
    }
    const errors: unknown[] = []

    const before = Date.now()
    mount(TimelineWidget, {
      props: { datasourceId: '', id: 'timeline-1', configv: config as never },
      global: {
        config: { errorHandler: (e: unknown) => { errors.push(e) } },
        provide: {
          [EVENT_ACTIONS_REGISTRY as symbol]: { registerInstance() {}, unregisterInstance() {} },
          [identifiers.TINY_EMITTER as unknown as symbol]: { on() {}, off() {}, emit() {} },
          [VARIABLES as symbol]: { getVariable: (n: 'start' | 'end') => vars[n] },
        },
      },
    })

    expect(errors).toEqual([])
    // The window ends now, and the variables carry it - not the stored days.
    expect(new Date(config.rangeEnd).getTime()).toBeGreaterThanOrEqual(before)
    expect(new Date(vars.end.value).getTime()).toBeGreaterThanOrEqual(before)
    expect(vars.start.value).not.toBe(stored.start)
  })
})
