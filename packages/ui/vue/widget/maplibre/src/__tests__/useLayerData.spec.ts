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
 * The points of a model layer are the newest answer of their source (#1299):
 * a read asked before the source had the map's view, and answered after
 * the read of that view, does not overwrite it.
 */
import { describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { useFeatureData } from '../useLayerData'

describe('the points of a model layer', () => {
  it('are the answer of the newest read, also when an older one arrives later', async () => {
    const releases: ((value: unknown) => void)[] = []
    let notify = () => {}
    const store = {
      getData: () => new Promise((resolve) => releases.push(resolve)),
      subscribe: (subscriber: () => void) => {
        notify = subscriber
        return () => {}
      },
    }
    let data!: ReturnType<typeof useFeatureData>
    const view = mount(defineComponent({
      setup() {
        data = useFeatureData({ ids: () => ['wfs'], resolve: () => store as any })
        return () => h('i')
      },
    }))
    await flushPromises()
    // The first read (the fixed box) is still running when the source has news (the view).
    notify()
    await flushPromises()
    expect(releases).toHaveLength(2)
    releases[1]!({ features: ['view'] })
    await flushPromises()
    expect(data.answerOf('wfs')).toEqual({ features: ['view'] })
    releases[0]!({ features: ['box'] })
    await flushPromises()
    expect(data.answerOf('wfs')).toEqual({ features: ['view'] })
    view.unmount()
  })
})
