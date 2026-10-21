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
 * The defect this exists to prevent: a widget reads a setting inside a
 * computed, the setting is changed, and the widget goes on showing the old
 * one until it is mounted again. It survived for weeks because no test in
 * the repository read a setting the way a widget does (#1068).
 */

import { describe, it, expect, afterEach } from 'vitest'
import { computed, effectScope } from 'vue'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import { trackWrappers, untrackWrappers } from './wrapperReactivity'

/** What a widget does: read the setting inside a computed and keep it. */
function rendering<T>(read: () => T) {
  const scope = effectScope()
  const held = scope.run(() => computed(read))!
  return { value: () => held.value, stop: () => scope.stop() }
}

describe('a changed setting reaches whoever is showing it', () => {
  afterEach(() => untrackWrappers())

  it('re-reads a value that was set directly', () => {
    trackWrappers()
    const fontSize = new VariableWrapper<number>(12)
    const widget = rendering(() => fontSize.value)
    expect(widget.value()).toBe(12)

    fontSize.value = 22

    expect(widget.value()).toBe(22)
    widget.stop()
  })

  it('re-reads a value that a bound variable pushed in', () => {
    trackWrappers()
    const fontSize = new VariableWrapper<number>(12)
    let push: () => void = () => {}
    fontSize.setTo({
      name: 'size',
      value: 30,
      subscribe: (fn: () => void) => { push = fn },
      unsubscribe: () => {},
    } as never)
    const widget = rendering(() => fontSize.value)
    expect(widget.value()).toBe(30)

    ;(fontSize.reference as unknown as { value: number }).value = 44
    push()

    expect(widget.value()).toBe(44)
    widget.stop()
  })

  /*
   * The negative control. Without the bridge the wrapper still changes and
   * still notifies - nobody is translating that into a Vue dependency, so
   * the computed keeps its first answer. This is exactly what shipped.
   */
  it('keeps showing the old value when nothing is translating', () => {
    untrackWrappers()
    const fontSize = new VariableWrapper<number>(12)
    const widget = rendering(() => fontSize.value)
    expect(widget.value()).toBe(12)

    fontSize.value = 22

    expect(widget.value()).toBe(12)
    widget.stop()
  })
})
