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


/*
 * The bootstrapper replaces the side-effect driven imports in main.ts. What
 * it guarantees is above all what did not hold there: a fixed order, waiting
 * for asynchronous activation, and that a failing required module aborts the
 * start instead of silently carrying on.
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { Container } from 'inversify'
import { BoardServiceRegistry } from './BoardServiceRegistry'
import { ModuleBootstrapper, type ModuleEntry } from './ModuleBootstrapper'

const silentLogger = () => ({
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
})

describe('ModuleBootstrapper', () => {
  let services: BoardServiceRegistry
  let bootstrapper: ModuleBootstrapper

  beforeEach(() => {
    services = new BoardServiceRegistry(new Container())
    bootstrapper = new ModuleBootstrapper(services, silentLogger())
  })

  it('keeps list order where no dependency exists', async () => {
    const order: string[] = []
    const makeModule = (id: string): ModuleEntry => ({
      id,
      load: async () => ({ activate: () => { order.push(id) } }),
    })

    await bootstrapper.activateAll([makeModule('a'), makeModule('b'), makeModule('c')])

    expect(order).toEqual(['a', 'b', 'c'])
  })

  it('awaits asynchronous activation before starting the next module', async () => {
    const order: string[] = []
    const slow: ModuleEntry = {
      id: 'slow',
      load: async () => ({
        activate: async () => {
          await new Promise((r) => setTimeout(r, 20))
          order.push('slow')
        },
      }),
    }
    const fast: ModuleEntry = {
      id: 'fast',
      load: async () => ({ activate: () => { order.push('fast') } }),
    }

    await bootstrapper.activateAll([slow, fast])

    // Without awaiting, 'fast' would win the race
    expect(order).toEqual(['slow', 'fast'])
  })

  it('hands the service access through to the module', async () => {
    services.register('Repository', { entries: [] as string[] })

    await bootstrapper.activateAll([
      {
        id: 'consumer',
        load: async () => ({
          activate: ({ services: s }) => {
            s.getRequired<{ entries: string[] }>('Repository').entries.push('x')
          },
        }),
      },
    ])

    expect(services.getRequired<{ entries: string[] }>('Repository').entries).toEqual(['x'])
  })

  it('aborts when a required module fails', async () => {
    const later: string[] = []

    await expect(
      bootstrapper.activateAll([
        { id: 'broken', load: async () => ({ activate: () => { throw new Error('cause') } }) },
        { id: 'later', load: async () => ({ activate: () => { later.push('ran') } }) },
      ]),
    ).rejects.toThrow(/broken/)

    // No silent continuation with half-initialized state
    expect(later).toEqual([])
  })

  it('carries the original error as cause', async () => {
    const cause = new Error('service missing')

    await expect(
      bootstrapper.activateAll([
        { id: 'broken', load: async () => ({ activate: () => { throw cause } }) },
      ]),
    ).rejects.toMatchObject({ cause })
  })

  it('skips an optional module and carries on', async () => {
    const later: string[] = []

    const result = await bootstrapper.activateAll([
      {
        id: 'optional-broken',
        optional: true,
        load: async () => ({ activate: () => { throw new Error('whatever') } }),
      },
      { id: 'later', load: async () => ({ activate: () => { later.push('ran') } }) },
    ])

    expect(later).toEqual(['ran'])
    expect(result.activated).toEqual(['later'])
    expect(result.failed.map((f) => f.id)).toEqual(['optional-broken'])
  })

  it('rejects a module without an activate export', async () => {
    await expect(
      bootstrapper.activateAll([{ id: 'empty', load: async () => ({}) }]),
    ).rejects.toMatchObject({
      message: expect.stringMatching(/could not be activated/),
      cause: expect.objectContaining({
        message: expect.stringMatching(/does not export an activate function/),
      }),
    })
  })

  it('deactivates in reverse order', async () => {
    const order: string[] = []
    const makeModule = (id: string): ModuleEntry => ({
      id,
      load: async () => ({
        activate: () => {},
        deactivate: () => { order.push(id) },
      }),
    })

    await bootstrapper.activateAll([makeModule('a'), makeModule('b'), makeModule('c')])
    await bootstrapper.deactivateAll()

    expect(order).toEqual(['c', 'b', 'a'])
  })

  it('keeps deactivating when one module fails to deactivate', async () => {
    const order: string[] = []

    await bootstrapper.activateAll([
      {
        id: 'ok',
        load: async () => ({ activate: () => {}, deactivate: () => { order.push('ok') } }),
      },
      {
        id: 'broken',
        load: async () => ({
          activate: () => {},
          deactivate: () => { throw new Error('teardown failed') },
        }),
      },
    ])
    const failed = await bootstrapper.deactivateAll()

    expect(order).toEqual(['ok'])
    expect(failed.map((f) => f.id)).toEqual(['broken'])
  })

  it('does not deactivate modules that never activated', async () => {
    const order: string[] = []

    await bootstrapper.activateAll([
      {
        id: 'ok',
        load: async () => ({ activate: () => {}, deactivate: () => { order.push('ok') } }),
      },
      {
        id: 'optional-broken',
        optional: true,
        load: async () => ({
          activate: () => { throw new Error('whatever') },
          deactivate: () => { order.push('must-not-run') },
        }),
      },
    ])
    await bootstrapper.deactivateAll()

    expect(order).toEqual(['ok'])
  })

  describe('order from declarations', () => {
    const tracking = (
      id: string,
      order: string[],
      rest: Partial<ModuleEntry> = {},
    ): ModuleEntry => ({
      id,
      load: async () => ({ activate: () => { order.push(id) } }),
      ...rest,
    })

    it('activates the provider before its consumer, however the list is sorted', async () => {
      const order: string[] = []

      await bootstrapper.activateAll([
        tracking('widget', order, { requires: ['WidgetRepository'] }),
        tracking('registry', order, { provides: ['WidgetRepository'] }),
      ])

      expect(order).toEqual(['registry', 'widget'])
    })

    it('orders across several levels', async () => {
      const order: string[] = []

      await bootstrapper.activateAll([
        tracking('c', order, { requires: ['B'] }),
        tracking('b', order, { provides: ['B'], requires: ['A'] }),
        tracking('a', order, { provides: ['A'] }),
      ])

      expect(order).toEqual(['a', 'b', 'c'])
    })

    /*
     * The actual proof: if the order follows from the declarations, the list
     * may be in any order. Checked across all permutations so no coincidence
     * slips through.
     */
    it('reaches the same result for every permutation of the list', async () => {
      const permutations = <T,>(xs: T[]): T[][] =>
        xs.length <= 1
          ? [xs]
          : xs.flatMap((x, i) =>
              permutations([...xs.slice(0, i), ...xs.slice(i + 1)]).map((rest) => [x, ...rest]),
            )

      for (const arrangement of permutations(['registry', 'layout', 'widget'])) {
        const order: string[] = []
        const blueprint: Record<string, Partial<ModuleEntry>> = {
          registry: { provides: ['WidgetRepository'] },
          layout: { provides: ['LayoutRepository'], requires: ['WidgetRepository'] },
          widget: { requires: ['WidgetRepository', 'LayoutRepository'] },
        }

        const own = new ModuleBootstrapper(new BoardServiceRegistry(new Container()), silentLogger())
        await own.activateAll(arrangement.map((id) => tracking(id, order, blueprint[id])))

        expect(order, `input: ${arrangement.join(', ')}`).toEqual(['registry', 'layout', 'widget'])
      }
    })

    /*
     * During the migration most services still come from not-yet-migrated
     * packages. Those must not block the sorting - they arrive through the
     * registry's fallback path.
     */
    it('ignores services no module of the list provides', async () => {
      const order: string[] = []

      const { activated } = await bootstrapper.activateAll([
        tracking('a', order, { requires: ['EventRegistry', 'I18next'] }),
        tracking('b', order, { requires: ['DatasourceRepository'] }),
      ])

      expect(activated).toEqual(['a', 'b'])
      expect(order).toEqual(['a', 'b'])
    })

    it('reports a cycle naming the modules involved instead of sorting arbitrarily', async () => {
      const order: string[] = []

      await expect(
        bootstrapper.activateAll([
          tracking('a', order, { provides: ['A'], requires: ['B'] }),
          tracking('b', order, { provides: ['B'], requires: ['A'] }),
        ]),
      ).rejects.toThrow(/Cyclic module dependency/)

      expect(order).toEqual([])
    })

    it('is not bothered by a module resolving its own service', async () => {
      const order: string[] = []

      await bootstrapper.activateAll([
        tracking('self', order, { provides: ['X'], requires: ['X'] }),
      ])

      expect(order).toEqual(['self'])
    })

    it('tears down in reverse activation order, not list order', async () => {
      const order: string[] = []
      const makeModule = (id: string, rest: Partial<ModuleEntry>): ModuleEntry => ({
        id,
        load: async () => ({
          activate: () => {},
          deactivate: () => { order.push(id) },
        }),
        ...rest,
      })

      await bootstrapper.activateAll([
        makeModule('consumer', { requires: ['R'] }),
        makeModule('provider', { provides: ['R'] }),
      ])
      await bootstrapper.deactivateAll()

      expect(order).toEqual(['consumer', 'provider'])
    })
  })
})
