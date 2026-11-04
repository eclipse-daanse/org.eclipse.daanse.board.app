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
 * Asking before a draft that is not saved is closed.
 *
 * A data source is edited on a draft, and opening anything else in its place
 * - another item of the tree, another page - drops it. That used to happen
 * without a word. mayLeave() now answers at once where there is nothing to
 * lose, and otherwise opens the question and waits for answer(): keep the
 * draft, throw it away, or stay where one is.
 */

import { computed, ref, type Ref } from 'vue'

export interface Draft {
  readonly unsaved: boolean
  /** Stores the draft. */
  commit(): unknown
}

export type LeavingAnswer = 'save' | 'discard' | 'stay'

export function leavingADraft(draft: Ref<Draft | null | undefined>) {
  const pending = ref<((go: boolean) => void) | null>(null)

  /** Whether to go on; asks first when the draft holds changes. */
  const mayLeave = (): Promise<boolean> => {
    if (!draft.value?.unsaved) return Promise.resolve(true)
    // A second request while one is open shares its answer.
    const asked = pending.value
    return new Promise((resolve) => {
      pending.value = (go) => {
        asked?.(go)
        resolve(go)
      }
    })
  }

  const answer = (choice: LeavingAnswer) => {
    const resolve = pending.value
    if (!resolve) return
    pending.value = null
    if (choice !== 'save') return resolve(choice === 'discard')
    /* Stored also when the source cannot run yet: the draft is not lost either way.
      A save that throws stays where it is, rather than holding the router forever. */
    try {
      draft.value?.commit()
      resolve(true)
    } catch (error) {
      resolve(false)
      throw error
    }
  }

  return {
    /** True while the question is open. */
    asking: computed(() => pending.value !== null),
    mayLeave,
    answer,
  }
}
