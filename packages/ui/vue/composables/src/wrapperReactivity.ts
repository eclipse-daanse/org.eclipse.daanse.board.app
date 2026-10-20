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

/**
 * Makes a settings wrapper's value visible to Vue.
 *
 * A VariableWrapper keeps its value in a plain field, and a widget reads it
 * inside a computed - `config.fontSize.value`. A plain field tracks
 * nothing, so changing colour, size or alignment changed what was stored
 * and nothing re-rendered: the widget caught up only when it was mounted
 * again, which is what reopening the settings does.
 *
 * lib.variables is deliberately free of Vue, so it only says when a value
 * is read or written. The translating happens here.
 */
import { shallowRef, type ShallowRef } from 'vue'
import { observeWrappers } from 'org.eclipse.daanse.board.app.lib.variables'

/*
 * One counter per wrapper, held weakly: a board that is closed takes its
 * wrappers with it, and nothing here should keep them alive.
 */
const ticks = new WeakMap<object, ShallowRef<number>>()

function tickOf(wrapper: object): ShallowRef<number> {
  let tick = ticks.get(wrapper)
  if (!tick) {
    tick = shallowRef(0)
    ticks.set(wrapper, tick)
  }
  return tick
}

/** Starts translating. Calling it twice is harmless - the second replaces the first. */
export function trackWrappers(): void {
  observeWrappers({
    read: (wrapper) => {
      void tickOf(wrapper).value
    },
    written: (wrapper) => {
      tickOf(wrapper).value++
    },
  })
}

/** Stops translating - for a test that must not leak into the next. */
export function untrackWrappers(): void {
  observeWrappers(undefined)
}
