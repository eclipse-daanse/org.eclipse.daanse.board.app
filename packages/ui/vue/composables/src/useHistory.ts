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
 * Taking a change back.
 *
 * The model says what changed. Every notification carries the object, the
 * feature, the old value and the new one, which is everything needed to
 * put a change back - so nothing here copies the board. What it replaces
 * cloned the whole widget and layout lists before every action and
 * restored them by splicing the clones back in: an undo that cost the size
 * of the board even when a single number had moved, and one that could
 * only ever restore the two lists it knew to copy.
 *
 * A step is one thing a person did. A drag reports every pixel, so a
 * gesture says when it begins and when it ends; changes outside a gesture
 * are gathered per microtask, which puts "x and y and z" from one call in
 * one step.
 */

import {
  computed,
  getCurrentScope,
  onScopeDispose,
  ref,
  shallowRef,
  toValue,
  watch,
  type MaybeRefOrGetter,
  type ShallowRef,
} from 'vue'
import { EContentAdapter, NotificationType, type EObject, type Notification } from '@emfts/core'

/** The two methods that attach an adapter; see useEmf for why this shape. */
interface Adaptable {
  eAdapterAdd(adapter: EContentAdapter): void
  eAdapterRemove(adapter: EContentAdapter): void
}

function adaptable(value: unknown): Adaptable | undefined {
  const held = value as Partial<Adaptable> | undefined
  return typeof held?.eAdapterAdd === 'function' ? (held as Adaptable) : undefined
}

/** One change, as the model reported it. */
interface Change {
  notifier: any
  feature: any
  eventType: number
  oldValue: unknown
  newValue: unknown
  position: number
}

/** What one thing a person did comes to. */
interface Step {
  label: string
  changes: Change[]
}

/** How many steps are kept. Beyond this the oldest is forgotten. */
const DEPTH = 50

/*
 * The history of the board being edited, for whoever is not the board.
 *
 * The buttons sit in the topbar, which is a different bundle from the
 * layout that owns the board - the same split the snap switch lives with.
 * A boolean travels there as an attribute on the root element; a history
 * is more than a boolean, so it travels through this module, which both
 * sides already share. One board is open at a time, so there is one.
 */
const current = shallowRef<History | undefined>()

/** The open board's history, or nothing while no board is being edited. */
export function useCurrentHistory(): Readonly<ShallowRef<History | undefined>> {
  return current
}

export interface History {
  canUndo: Readonly<{ value: boolean }>
  canRedo: Readonly<{ value: boolean }>
  /** The step undo would take back, for a menu or a title. */
  undoLabel: Readonly<{ value: string | undefined }>
  redoLabel: Readonly<{ value: string | undefined }>
  undo(): void
  redo(): void
  /** Opens a step that spans a gesture - a drag, a resize. */
  begin(label: string): void
  /** Closes it. A step that recorded nothing is dropped. */
  end(): void
  /** Runs a change as one step of its own. */
  record<T>(label: string, change: () => T): T
  clear(): void
}

export function useHistory(root: MaybeRefOrGetter<EObject | undefined>): History {
  const undoable = shallowRef<Step[]>([])
  const redoable = shallowRef<Step[]>([])

  /*
   * Off while a step is being put back: the inverse changes report
   * themselves like any other, and recording them would undo the undo.
   */
  let recording = true
  let open: Step | undefined
  let gesture = false
  let flushing = false

  function push(step: Step) {
    if (!step.changes.length) return
    const next = [...undoable.value, step]
    undoable.value = next.length > DEPTH ? next.slice(next.length - DEPTH) : next
    /* A new change is a new future: what was undone cannot be redone. */
    redoable.value = []
  }

  function remember(notification: Notification) {
    if (!recording || notification.isTouch()) return
    if (notification.getEventType() === NotificationType.REMOVING_ADAPTER) return

    const change: Change = {
      notifier: notification.getNotifier(),
      feature: notification.getFeature(),
      eventType: notification.getEventType(),
      oldValue: notification.getOldValue(),
      newValue: notification.getNewValue(),
      position: notification.getPosition(),
    }

    if (!open) {
      open = { label: 'Änderung', changes: [] }
      /*
       * Outside a gesture the step closes by itself at the end of the
       * turn, so a call that sets three features is one step and not
       * three.
       */
      if (!gesture && !flushing) {
        flushing = true
        queueMicrotask(() => {
          flushing = false
          if (!gesture && open) {
            push(open)
            open = undefined
          }
        })
      }
    }
    /*
     * A drag sets x a hundred times. Within one step only the value it
     * started from and the one it ended on matter, so a repeat of the same
     * feature on the same object grows the change that is already there
     * instead of adding another beside it.
     */
    if (change.eventType === NotificationType.SET) {
      const earlier = open.changes.find(
        (held) =>
          held.eventType === NotificationType.SET &&
          held.notifier === change.notifier &&
          held.feature === change.feature,
      )
      if (earlier) {
        earlier.newValue = change.newValue
        return
      }
    }

    open.changes.push(change)
  }

  class Recorder extends EContentAdapter {
    override notifyChanged(notification: Notification): void {
      super.notifyChanged(notification)
      remember(notification)
    }
  }

  const recorder = new Recorder()
  let attachedTo: Adaptable | undefined

  watch(
    () => toValue(root),
    (next) => {
      attachedTo?.eAdapterRemove(recorder)
      attachedTo = adaptable(next)
      attachedTo?.eAdapterAdd(recorder)
      /* Another board is another history. */
      undoable.value = []
      redoable.value = []
      open = undefined
    },
    { immediate: true },
  )

  if (getCurrentScope()) {
    onScopeDispose(() => {
      attachedTo?.eAdapterRemove(recorder)
      if (current.value === api) current.value = undefined
    })
  }

  /** Puts one change back, and reports what would put it back again. */
  function invert(change: Change): Change | undefined {
    const { notifier, feature, eventType, oldValue, newValue, position } = change
    if (!feature) return undefined

    switch (eventType) {
      case NotificationType.SET:
      case NotificationType.UNSET: {
        notifier.eSet(feature, oldValue)
        return { ...change, oldValue: newValue, newValue: oldValue }
      }
      case NotificationType.ADD: {
        const list = notifier.eGet(feature)
        const at = position >= 0 ? position : list.indexOf(newValue)
        if (at >= 0) list.removeAt(at)
        return { ...change, eventType: NotificationType.REMOVE, oldValue: newValue, position: at }
      }
      case NotificationType.REMOVE: {
        const list = notifier.eGet(feature)
        const at = position >= 0 ? Math.min(position, list.size()) : list.size()
        list.addAt(at, oldValue)
        return { ...change, eventType: NotificationType.ADD, newValue: oldValue, position: at }
      }
      case NotificationType.ADD_MANY: {
        const list = notifier.eGet(feature)
        for (const value of (newValue as unknown[]) ?? []) {
          const at = list.indexOf(value)
          if (at >= 0) list.removeAt(at)
        }
        return { ...change, eventType: NotificationType.REMOVE_MANY, oldValue: newValue }
      }
      case NotificationType.REMOVE_MANY: {
        const list = notifier.eGet(feature)
        for (const value of (oldValue as unknown[]) ?? []) list.add(value)
        return { ...change, eventType: NotificationType.ADD_MANY, newValue: oldValue }
      }
      case NotificationType.MOVE: {
        const list = notifier.eGet(feature)
        /* For a move the old value is where it came from. */
        list.move(oldValue as number, position)
        return { ...change, oldValue: position, position: oldValue as number }
      }
      default:
        return undefined
    }
  }

  /**
   * Puts a whole step back, latest change first.
   *
   * What comes out is a step that puts it forward again, and it is
   * collected in the order these were applied rather than in the order
   * they were recorded. Applying that one in reverse then walks the
   * original order, which is what makes undo and redo each other's
   * opposite. Collecting it the other way round is what made a drag
   * redo to the position after its first pixel instead of its last.
   */
  function apply(step: Step): Step {
    recording = false
    const back: Change[] = []
    try {
      for (let i = step.changes.length - 1; i >= 0; i -= 1) {
        const inverse = invert(step.changes[i])
        if (inverse) back.push(inverse)
      }
    } finally {
      recording = true
    }
    return { label: step.label, changes: back }
  }

  function begin(label: string) {
    /* A gesture inside a gesture is the same gesture. */
    if (gesture) return
    gesture = true
    open = { label, changes: [] }
  }

  function end() {
    if (!gesture) return
    gesture = false
    if (open) push(open)
    open = undefined
  }

  const api: History = {
    canUndo: computed(() => undoable.value.length > 0),
    canRedo: computed(() => redoable.value.length > 0),
    undoLabel: computed(() => undoable.value[undoable.value.length - 1]?.label),
    redoLabel: computed(() => redoable.value[redoable.value.length - 1]?.label),

    undo() {
      const step = undoable.value[undoable.value.length - 1]
      if (!step) return
      undoable.value = undoable.value.slice(0, -1)
      redoable.value = [...redoable.value, apply(step)]
    },

    redo() {
      const step = redoable.value[redoable.value.length - 1]
      if (!step) return
      redoable.value = redoable.value.slice(0, -1)
      undoable.value = [...undoable.value, apply(step)]
    },

    begin,
    end,

    /* Free functions, not methods: a caller that pulls `record` out of the
       object still gets a working one. */
    record(label, change) {
      begin(label)
      try {
        return change()
      } finally {
        end()
      }
    },

    clear() {
      undoable.value = []
      redoable.value = []
      open = undefined
      gesture = false
    },
  }

  current.value = api
  return api
}
