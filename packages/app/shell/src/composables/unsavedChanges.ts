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
 * Whether the workspace holds changes that were not stored, and the guard
 * that keeps a reload or a closed tab from dropping them silently.
 *
 * The workspace is the model, so a change to it is an EMF notification
 * somewhere in its containment tree. One EContentAdapter at the root hears
 * all of them - the same mechanism useEmf builds reactivity on - and that
 * is the whole of the tracking: no store keeps a second copy to compare.
 *
 * What does not go through the tree is not seen: a value mutated in place
 * inside an EJavaObject attribute (a widget's `config`) notifies nothing,
 * exactly as it re-renders nothing.
 */

import { EContentAdapter, NotificationType, type EObject, type Notification } from '@emfts/core'

export interface UnsavedChanges {
  /** True once the workspace changed after it was last loaded or stored. */
  readonly dirty: boolean
  /** The workspace now matches what is stored - after loading or storing it. */
  markSaved(): void
  /**
   * Runs work that touches the workspace without changing what it holds,
   * such as serializing it, without counting that as a change.
   */
  untracked<T>(work: () => T): T
  /** Takes the adapter off the workspace again. */
  dispose(): void
}

interface Adaptable {
  eAdapterAdd(adapter: EContentAdapter): void
  eAdapterRemove(adapter: EContentAdapter): boolean
}

function isEObject(value: unknown): boolean {
  return typeof (value as { eClass?: unknown } | null)?.eClass === 'function'
}

/**
 * Whether two values of a feature hold the same thing.
 *
 * Modelled objects by identity - a reference to another object is that
 * object. Everything else an attribute can carry (the config bags of an
 * EJavaObject attribute, arrays) by content: a view that writes back a
 * copy of what it read, or the reactive proxy Vue hands out for it, has
 * not changed anything.
 */
function sameValue(before: unknown, after: unknown): boolean {
  if (before === after) return true
  if (before === null || after === null) return false
  if (typeof before !== 'object' || typeof after !== 'object') return false
  if (isEObject(before) || isEObject(after)) return false
  try {
    return JSON.stringify(before) === JSON.stringify(after)
  } catch {
    /* A cycle, or something that will not serialize: it counts as changed. */
    return false
  }
}

/**
 * A value written again unchanged.
 *
 * The generated setters report every write with isTouch() false, also when
 * the value stays the same - a form re-writing what it shows would
 * otherwise mark the workspace changed. So a SET is compared, too.
 */
function isTouch(notification: Notification): boolean {
  if (notification.isTouch()) return true
  return (
    notification.getEventType() === NotificationType.SET &&
    sameValue(notification.getOldValue(), notification.getNewValue())
  )
}

/** Starts clean: what the workspace holds at this point counts as stored. */
export function trackUnsavedChanges(root: EObject): UnsavedChanges {
  let dirty = false
  let paused = 0

  let disposed = false

  class DirtyAdapter extends EContentAdapter {
    override notifyChanged(notification: Notification): void {
      super.notifyChanged(notification)
      if (paused > 0 || disposed) return
      if (notification.getEventType() === NotificationType.REMOVING_ADAPTER) return
      if (isTouch(notification)) return
      dirty = true
    }

    /*
     * Taking the adapter off the root only takes it off the root's direct
     * children - unsetTarget does not descend - so the rest of the tree is
     * walked here.
     */
    detachFrom(object: EObject): void {
      this.removeAdapterFromAllContents(object)
    }
  }

  const adapter = new DirtyAdapter()
  const target = root as unknown as Adaptable
  target.eAdapterAdd(adapter)

  return {
    get dirty() {
      return dirty
    },
    markSaved() {
      dirty = false
    },
    untracked<T>(work: () => T): T {
      paused += 1
      try {
        return work()
      } finally {
        paused -= 1
      }
    },
    dispose() {
      disposed = true
      target.eAdapterRemove(adapter)
      adapter.detachFrom(root)
    },
  }
}

/**
 * Asks the browser to confirm leaving while there are unsaved changes.
 *
 * The browser shows its own text; a custom message has been ignored by
 * every browser for years. Returns the function that removes the guard.
 */
export function guardBeforeUnload(
  changes: Pick<UnsavedChanges, 'dirty'>,
  target: EventTarget = window,
): () => void {
  const onBeforeUnload = (event: Event) => {
    if (!changes.dirty) return
    event.preventDefault()
    /* Older browsers only ask when returnValue is set. */
    ;(event as BeforeUnloadEvent).returnValue = ''
  }
  target.addEventListener('beforeunload', onBeforeUnload)
  return () => target.removeEventListener('beforeunload', onBeforeUnload)
}

/*
 * Module scope: there is one workspace, and storing it happens from views
 * that come and go, so the tracker belongs to the shell's lifetime rather
 * than to a component's.
 */
let current: UnsavedChanges | undefined

/** Begins tracking the workspace; called once the shell has set it up. */
export function startTracking(workspace: EObject): UnsavedChanges {
  current?.dispose()
  current = trackUnsavedChanges(workspace)
  return current
}

export function stopTracking(): void {
  current?.dispose()
  current = undefined
}

/** The shell's tracker, or nothing while the shell is not active. */
export function useUnsavedChanges(): UnsavedChanges | undefined {
  return current
}
