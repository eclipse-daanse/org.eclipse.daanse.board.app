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
 * Modelled objects, as something Vue re-renders on.
 *
 * A generated Impl is already a Notifier - its setters call eNotify, and an
 * EList reports every add and remove. What was missing is the last step:
 * turning that into something Vue watches. That is this file, and it is the
 * whole of what the Pinia stores were providing by keeping a second, plain
 * copy of the state beside the real one.
 *
 * An EContentAdapter is what does the listening. Attached to one object it
 * attaches itself to everything contained under it and follows objects that
 * arrive later, so a single adapter at the workspace root hears a rename
 * three levels down.
 *
 * THE RULE, and it is not optional: an EObject never goes into `reactive()`
 * or a deep `ref()`. Vue's deep proxy makes `this` inside the object's own
 * methods the proxy rather than the instance - identity checks like
 * `eContainer() === x` stop holding, eAdapters and eAllContents come apart,
 * and the damage shows up far from the cause. Everything here hands back
 * `shallowRef`/`computed`, values are read through getters and written
 * through setters. Bind THROUGH the object, never AT it.
 */

import {
  computed,
  getCurrentScope,
  onScopeDispose,
  ref,
  shallowRef,
  toValue,
  triggerRef,
  watch,
  type ComputedRef,
  type MaybeRefOrGetter,
  type ShallowRef,
  type WritableComputedRef,
} from 'vue'
import { EContentAdapter, NotificationType, type EObject, type Notification } from '@emfts/core'

/**
 * The two methods that attach an adapter. They live on BasicEObject, which
 * every generated Impl extends, but not on the EObject interface - so the
 * shape is named here rather than the concrete class, and anything that
 * does not carry them is left alone instead of crashing.
 */
interface Adaptable {
  eAdapterAdd(adapter: EContentAdapter): void
  eAdapterRemove(adapter: EContentAdapter): boolean
}

function isAdaptable(object: unknown): object is Adaptable {
  return (
    typeof (object as Adaptable)?.eAdapterAdd === 'function' &&
    typeof (object as Adaptable)?.eAdapterRemove === 'function'
  )
}

/**
 * Counts changes anywhere in an object's containment tree.
 *
 * Everything else here is built on this: read the counter inside a computed
 * and the computed re-runs when the model changes.
 *
 * Two kinds of notification are skipped. A touch reports that a feature was
 * written with the value it already had, and REMOVING_ADAPTER is this
 * adapter being taken off - neither is a change to show.
 */
function useChangeCount(target: () => EObject | undefined) {
  const count = ref(0)

  class CountingAdapter extends EContentAdapter {
    override notifyChanged(notification: Notification): void {
      super.notifyChanged(notification)
      if (notification.isTouch()) return
      if (notification.getEventType() === NotificationType.REMOVING_ADAPTER) return
      count.value += 1
    }
  }

  let adapter: CountingAdapter | undefined
  let attached: Adaptable | undefined

  const detach = () => {
    if (attached && adapter) attached.eAdapterRemove(adapter)
    attached = undefined
    adapter = undefined
  }

  const attach = (object: EObject | undefined) => {
    detach()
    if (!isAdaptable(object)) return
    adapter = new CountingAdapter()
    object.eAdapterAdd(adapter)
    attached = object
  }

  watch(target, attach, { immediate: true })
  if (getCurrentScope()) onScopeDispose(detach)

  return count
}

/**
 * An object, as a ref that re-renders when anything under it changes.
 *
 * Shallow on purpose - the ref holds the instance itself, untouched, and is
 * only re-triggered. Read its features the ordinary way: `held.value?.name`.
 *
 * This is what a computed cannot do for you. A computed that finds an object
 * and returns it hands back the same instance every time, and Vue compares
 * values by identity: nothing downstream re-runs, so a renamed object keeps
 * rendering its old name. Pick the object with a getter and let this watch
 * it instead:
 *
 *     const held = useEObject(() => connections.value.find(byId))
 */
export function useEObject<T extends EObject>(
  source: MaybeRefOrGetter<T | undefined>,
): ShallowRef<T | undefined> {
  const read = () => toValue(source)
  /*
   * Cast: shallowRef's overloads narrow to the argument's own type, and T
   * here is only bounded by EObject, so the inferred ref is not the one the
   * signature promises. The value is exactly what was read.
   */
  const held = shallowRef(read()) as ShallowRef<T | undefined>
  const count = useChangeCount(read)

  watch(
    [count, read],
    ([, object]) => {
      if (held.value === object) triggerRef(held)
      else held.value = object
    },
  )

  return held
}

/**
 * A many-valued feature as a plain array Vue can render.
 *
 * The feature is named by a getter rather than by an EStructuralFeature, so
 * it stays typed and no lookup by string is needed:
 *
 *     const connections = useEList(workspace, (w) => w.connections)
 *
 * The array is a copy. An EList is not an array - `v-for` over it would
 * neither track nor iterate the way a template expects - and it is what the
 * getter hands back, so toArray is what the selector must return. A plain
 * array is deliberately not accepted: the union made the element type
 * unresolvable at every call site.
 */
export function useEList<T extends EObject, E>(
  owner: MaybeRefOrGetter<T | undefined>,
  select: (owner: T) => EListLike<E> | undefined,
): ComputedRef<E[]> {
  const read = () => toValue(owner)
  const count = useChangeCount(read)

  return computed(() => {
    void count.value
    const object = read()
    if (!object) return []
    return select(object)?.toArray() ?? []
  })
}

/** The one method this needs from an EList. */
interface EListLike<E> {
  toArray(): E[]
}

/**
 * One feature, readable and writable - what `v-model` needs.
 *
 * Writing goes through the object's own setter, which is what sends the
 * notification. Nothing here assigns to a proxy or around the instance.
 */
export function useFeature<T extends EObject, K extends keyof T>(
  object: MaybeRefOrGetter<T | undefined>,
  key: K,
): WritableComputedRef<T[K] | undefined> {
  const read = () => toValue(object)
  const count = useChangeCount(read)

  return computed({
    get: () => {
      void count.value
      return read()?.[key]
    },
    set: (value) => {
      const held = read()
      if (held) held[key] = value as T[K]
    },
  })
}
