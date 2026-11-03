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
 * ********************************************************************/

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { activate, deactivate } from '../index'

/*
 * What the bundle puts into the registry, and takes out again.
 *
 * A view that is declared but whose component was never registered leaves
 * a tab that resolves to nothing; a component registered and never
 * withdrawn outlives the bundle that brought it. Neither shows up as an
 * error anywhere - the tab is simply empty (#1187).
 */
function registry() {
  const registered = new Map<string, unknown>()
  const types = new Map<string, any>()

  const repository = {
    registerDatasourceType: (name: string, identifiers: any) => types.set(name, identifiers),
    unregisterDatasourceType: (name: string) => types.delete(name),
  }

  const services = {
    register: (id: string, value: unknown) => registered.set(id, value),
    unregister: (id: string) => registered.delete(id),
    getRequired: () => repository,
  }

  return { services, registered, types }
}

describe('the rest source type', () => {
  let held: ReturnType<typeof registry>

  beforeEach(() => {
    held = registry()
    vi.clearAllMocks()
  })

  it('brings a tree and a map, in that order', () => {
    activate({ services: held.services } as never)

    const views = held.types.get('rest')?.Views
    expect(views?.map((view: any) => view.id)).toEqual(['preview', 'map'])
    expect(views?.map((view: any) => view.label)).toEqual([
      'datasourceRest:View.tree',
      'datasourceRest:View.map',
    ])
  })

  it('registers a component for every view it declares', () => {
    activate({ services: held.services } as never)

    for (const view of held.types.get('rest').Views) {
      /* The identifier a view carries is the symbol the component was
        registered under - Symbol.for of the same name. */
      expect(held.registered.has(view.component.description)).toBe(true)
      expect(held.registered.get(view.component.description)).toBeTruthy()
    }
  })

  it('takes every one of them out again', () => {
    activate({ services: held.services } as never)
    expect(held.registered.size).toBeGreaterThan(0)

    deactivate({ services: held.services } as never)

    expect(held.registered.size).toBe(0)
    expect(held.types.has('rest')).toBe(false)
  })

  /* Declared beside the views, and read by whatever offers a widget for
    this source (#1183). */
  it('says which data shapes it answers', () => {
    activate({ services: held.services } as never)

    expect(held.types.get('rest').answers).toEqual(['DataTable', 'object', 'string'])
  })
})
