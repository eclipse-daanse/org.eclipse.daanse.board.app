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
 * A widget reads a setting inside a computed - `config.fontSize.value` -
 * and Vue only re-renders what it watched being read. The wrapper is an
 * EObject, so it announces every change as an EMF notification; what EMF
 * does not do, and cannot, is say that something was read. Those are the
 * two halves joined here:
 *
 *   read      lib.variables says a value was read -> depend on this wrapper
 *   notified  the wrapper's own adapter fires     -> look at it again
 *
 * An adapter is attached the first time a wrapper is read, which is also
 * the first moment anyone could care. Containment does not come into it:
 * EContentAdapter follows containment, but this listens to each wrapper
 * directly, and BasicEObject delivers to its own adapters.
 */
import { shallowRef, type ShallowRef } from 'vue'
import { observeWrappers } from 'org.eclipse.daanse.board.app.lib.variables'
import { AdapterImpl, type Adapter, type Notification } from '@emfts/core'

/** The half of a notifier this needs - see the rule in useEmf.ts. */
interface Adaptable {
  eAdapterAdd(adapter: Adapter): void
}

/** Bumps a counter whenever its wrapper reports a real change. */
class TickOnChange extends AdapterImpl {
  constructor(private readonly tick: ShallowRef<number>) {
    super()
  }

  notifyChanged(notification: Notification): void {
    /*
     * Touch notifications are not changes; everything else means the value,
     * the bound variable or the binding itself moved, and all three are
     * worth re-reading.
     */
    if (notification.isTouch?.()) return
    this.tick.value++
  }
}

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

    /*
     * A plain object that is not an EObject still gets a counter, so a
     * caller that holds one is not a crash - it simply never ticks.
     */
    ;(wrapper as Partial<Adaptable>).eAdapterAdd?.(new TickOnChange(tick))
  }
  return tick
}

/** Starts translating. Calling it twice is harmless - the second replaces the first. */
export function trackWrappers(): void {
  observeWrappers({
    read: (wrapper) => {
      void tickOf(wrapper).value
    },
  })
}

/** Stops translating - for a test that must not leak into the next. */
export function untrackWrappers(): void {
  observeWrappers(undefined)
}
