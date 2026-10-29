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

import { describe, expect, it } from 'vitest'
import { defineComponent, h, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { useDatasourceRepository } from './useDatasourceRepository'

interface Options {
  signal: AbortSignal
}

/** A datasource whose answers are released by the test, one by one. */
function datasource() {
  const calls: { options: Options; answer: (value: unknown) => void }[] = []
  return {
    calls,
    getData(_type: string, options: Options): Promise<unknown> {
      return new Promise(resolve => calls.push({ options, answer: resolve }))
    },
    subscribe() {},
    unsubscribe() {},
  }
}

function widget(source: ReturnType<typeof datasource>, shown: unknown = null) {
  const data = ref<unknown>(shown)
  let api!: ReturnType<typeof useDatasourceRepository>
  const Widget = defineComponent({
    setup() {
      api = useDatasourceRepository(ref('ds'), 'DataTable', data)
      return () => h('div')
    },
  })
  const wrapper = mount(Widget, {
    global: { provide: { [identifier as symbol]: { getDatasource: () => source } } },
  })
  return { wrapper, data, api: () => api }
}

describe('useDatasourceRepository giving up on a request', () => {
  it('aborts the request a newer one replaces, and does not show its answer', async () => {
    const source = datasource()
    const { data, api } = widget(source)
    await flushPromises()

    api().update()
    await flushPromises()
    expect(source.calls).toHaveLength(2)
    expect(source.calls[0].options.signal.aborted).toBe(true)
    expect(source.calls[1].options.signal.aborted).toBe(false)

    source.calls[1].answer({ answer: 'newer' })
    await flushPromises()
    source.calls[0].answer({ answer: 'older' })
    await flushPromises()

    expect(data.value).toEqual({ answer: 'newer' })
  })

  it('leaves the data alone when the replaced request fails for being aborted', async () => {
    const source = datasource()
    let first = true
    const failing = {
      ...source,
      getData(type: string, options: Options): Promise<unknown> {
        if (!first) return source.getData(type, options)
        first = false
        // As a datasource that obeys the signal does: it rejects with the reason.
        return new Promise((_, reject) =>
          options.signal.addEventListener('abort', () => reject(options.signal.reason)),
        )
      },
    }
    const { data, api } = widget(failing, { answer: 'shown' })
    await flushPromises()

    api().update()
    await flushPromises()
    // Not cleared by the failure of a request nobody waits for any more.
    expect(data.value).toEqual({ answer: 'shown' })

    source.calls[0].answer({ answer: 'newer' })
    await flushPromises()

    expect(data.value).toEqual({ answer: 'newer' })
  })

  it('aborts the pending request when the widget goes away', async () => {
    const source = datasource()
    const { wrapper } = widget(source)
    await flushPromises()

    wrapper.unmount()
    expect(source.calls[0].options.signal.aborted).toBe(true)
  })
})

describe('useDatasourceRepository saying it waits', () => {
  it('is loading until the answer is there, and through a replaced request', async () => {
    const source = datasource()
    const { api } = widget(source)
    await flushPromises()
    expect(api().loading.value).toBe(true)

    api().update()
    await flushPromises()
    source.calls[0].answer({ answer: 'older' })
    await flushPromises()
    // The replaced one is done; the newer one is still on its way.
    expect(api().loading.value).toBe(true)

    source.calls[1].answer({ answer: 'newer' })
    await flushPromises()
    expect(api().loading.value).toBe(false)
  })
})

describe('useDatasourceRepository telling why there is no data', () => {
  it('keeps the reason a request failed, and forgets it once one succeeds', async () => {
    let fail = true
    const source = {
      async getData() {
        if (fail) throw new Error('Session with id "s-1" does not exist')
        return [{ a: 1 }]
      },
      subscribe() {},
      unsubscribe() {},
    }
    const data = ref<unknown>(null)
    let api!: ReturnType<typeof useDatasourceRepository>
    const Widget = defineComponent({
      setup() {
        api = useDatasourceRepository(ref('ds'), 'DataTable', data)
        return () => h('div')
      },
    })
    mount(Widget, { global: { provide: { [identifier as symbol]: { getDatasource: () => source } } } })
    await flushPromises()
    expect(api.error.value).toBe('Session with id "s-1" does not exist')
    expect(data.value).toBeNull()

    fail = false
    await api.getDataWithOptions()
    expect(api.error.value).toBeNull()
    expect(data.value).toEqual([{ a: 1 }])
  })
})
