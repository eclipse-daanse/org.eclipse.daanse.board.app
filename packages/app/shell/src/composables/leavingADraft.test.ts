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

import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { leavingADraft } from './leavingADraft'

function draftWith(unsaved: boolean) {
  const draft = ref({ unsaved, commit: vi.fn(() => true) })
  return { draft, ...leavingADraft(draft) }
}

describe('leaving a draft', () => {
  it('goes on at once when nothing would be lost', async () => {
    const { mayLeave, asking } = draftWith(false)
    expect(await mayLeave()).toBe(true)
    expect(asking.value).toBe(false)
  })

  it('goes on at once when there is no draft open', async () => {
    const { mayLeave } = leavingADraft(ref(null))
    expect(await mayLeave()).toBe(true)
  })

  it('asks first when the draft holds changes, and stays when told to', async () => {
    const { draft, mayLeave, asking, answer } = draftWith(true)
    const leaving = mayLeave()
    // Was: the other item opened, and the change was gone without a word.
    expect(asking.value).toBe(true)

    answer('stay')
    expect(await leaving).toBe(false)
    expect(asking.value).toBe(false)
    expect(draft.value.commit).not.toHaveBeenCalled()
  })

  it('stores the draft and goes on when Save is the answer', async () => {
    const { draft, mayLeave, answer } = draftWith(true)
    const leaving = mayLeave()
    answer('save')
    expect(await leaving).toBe(true)
    expect(draft.value.commit).toHaveBeenCalledTimes(1)
  })

  it('stays, and lets the next question be asked, when saving throws', async () => {
    const { draft, mayLeave, asking, answer } = draftWith(true)
    draft.value.commit.mockImplementation(() => { throw new Error('no store') })
    const leaving = mayLeave()
    expect(() => answer('save')).toThrow('no store')
    // Was: the promise never settled, and the router waited on it for good.
    expect(await leaving).toBe(false)
    expect(asking.value).toBe(false)
  })

  it('goes on without storing when the draft is discarded', async () => {
    const { draft, mayLeave, answer } = draftWith(true)
    const leaving = mayLeave()
    answer('discard')
    expect(await leaving).toBe(true)
    expect(draft.value.commit).not.toHaveBeenCalled()
  })

  it('gives one answer to two that asked at once', async () => {
    const { mayLeave, answer } = draftWith(true)
    const first = mayLeave()
    const second = mayLeave()
    answer('stay')
    expect(await Promise.all([first, second])).toEqual([false, false])
  })
})
