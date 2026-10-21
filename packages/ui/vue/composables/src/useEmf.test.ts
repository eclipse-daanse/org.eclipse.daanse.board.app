/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

// @vitest-environment jsdom

/*
 * Replacing a feature's value is a change like any other, and whoever reads
 * that feature has to see it. Opening a widget's settings does exactly
 * that: the stored config is adopted into a modelled instance and written
 * back, so widget.config becomes a different object.
 *
 * Read off the object directly that is invisible to Vue - a plain property
 * read is not something it re-runs - and the settings preview went on
 * handing its widget the instance it had mounted with (#1093).
 */

import { describe, it, expect } from 'vitest'
import { computed, effectScope, nextTick } from 'vue'
import { WidgetImpl } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEObject } from './useEmf'

/*
 * The watch inside useEObject flushes before render, not synchronously, so
 * a reader has to let that happen - which in a component is simply the next
 * render.
 */

/** What a component does: derive from the object and hold on to it. */
function derived<T>(read: () => T) {
  const scope = effectScope()
  const held = scope.run(() => computed(read))!
  return { value: () => held.value, stop: () => scope.stop() }
}

describe('watching an EObject', () => {
  it('sees a feature replaced by a different object', async () => {
    const widget = new WidgetImpl()
    const first = { marker: 'first' }
    const second = { marker: 'second' }
    widget.config = first as never

    const watched = useEObject(() => widget as never)
    const config = derived(() => (watched.value as never as { config: unknown } | undefined)?.config)
    expect(config.value()).toBe(first)

    widget.config = second as never
    await nextTick()

    expect(config.value()).toBe(second)
    config.stop()
  })

  it('sees a feature set for the first time', async () => {
    const widget = new WidgetImpl()
    const watched = useEObject(() => widget as never)
    const type = derived(() => (watched.value as never as { type?: string } | undefined)?.type)
    expect(type.value()).toBeUndefined()

    widget.type = 'TextWidget'
    await nextTick()

    expect(type.value()).toBe('TextWidget')
    type.stop()
  })
})
