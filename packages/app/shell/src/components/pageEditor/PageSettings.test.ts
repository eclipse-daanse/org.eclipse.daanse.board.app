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

import { afterEach, describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { DRAW_WEATHER_REGION, WORKSPACE, type Workspace } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { TinyEmitter } from 'tiny-emitter'
import * as workspaceModule from 'org.eclipse.daanse.board.app.lib.model.workspace'
import * as pageModule from 'org.eclipse.daanse.board.app.lib.repository.page'
import {
  PAGE_REPOSITORY,
  identifier as PageIdentifier,
  type PageRegistryI,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import { identifier as LayoutRepositoryIdentifier } from 'org.eclipse.daanse.board.app.lib.api.layout.page'
import { trackUnsavedChanges, type UnsavedChanges } from '../../composables/unsavedChanges'
import PageSettings from './PageSettings.vue'

const BASE = 'org.eclipse.daanse.board.app.ui.vue.layouts.base'

/** A layout without settings of its own - the form is not what is tested. */
const layouts = {
  getAllLayouts: () => [{ id: BASE, name: 'Free layout' }],
  getLayout: (id: string) => (id === BASE ? { id: BASE, name: 'Free layout' } : undefined),
}

let changes: UnsavedChanges | undefined

/*
 * A page as an older state holds it: no layout named, visibility not set.
 * The panel shows defaults for both, which is exactly what must not be
 * written back merely because the panel was opened.
 */
function setUp() {
  const services = new DefaultServiceRegistry()
  const context = { services } as unknown as ActivationContext
  workspaceModule.activate(context)
  pageModule.activate(context)
  const workspace = services.getRequired<Workspace>(WORKSPACE)
  const pages = services.getRequired<PageRegistryI>(PAGE_REPOSITORY)
  const page = pages.registerPage({ id: 'p1', name: 'Overview' } as never)
  page.layoutId = undefined as never
  page.visibleInNavigation = undefined as never
  page.layoutSettings = { columns: 12 }

  changes = trackUnsavedChanges(workspace)
  const bus = new TinyEmitter()
  const wrapper = mount(PageSettings, {
    props: { modelValue: 'p1' },
    global: {
      provide: {
        [PageIdentifier as symbol]: pages,
        [LayoutRepositoryIdentifier as symbol]: layouts,
        [identifiers.TINY_EMITTER as symbol]: bus,
      },
    },
  })
  return { wrapper, page, changes, bus }
}

describe('PageSettings', () => {
  afterEach(() => changes?.dispose())

  it('changes nothing by being opened', async () => {
    const { wrapper, page, changes } = setUp()
    await flushPromises()

    expect(wrapper.find('input').exists()).toBe(true)
    expect(page.layoutId).toBeUndefined()
    expect(page.weather).toBeUndefined()
    expect(changes.dirty).toBe(false)
  })

  it('puts weather on the page with the first edit to it', async () => {
    const { wrapper, page, changes } = setUp()
    await flushPromises()

    await wrapper.find('[data-uim-name="intensity"] input').setValue('70')
    await flushPromises()

    expect(page.weather?.eContainer()).toBe(page)
    expect(Number(page.weather?.intensity?.value)).toBe(70)
    expect(changes.dirty).toBe(true)
  })

  it('offers the region and whether the weather affects the widgets', async () => {
    const { wrapper } = setUp()
    await flushPromises()

    expect(wrapper.find('[data-uim-name="region"]').exists()).toBe(true)
    /* An area is drawn on the page, not typed in */
    expect(wrapper.find('[data-uim-name="regionWidth"]').exists()).toBe(false)
    expect(wrapper.find('[data-uim-name="regionWidget"]').exists()).toBe(true)
    expect(wrapper.find('[data-uim-name="affectsWidgets"]').exists()).toBe(true)
  })

  it('closes and asks for the region to be drawn on the page, changing nothing', async () => {
    const { wrapper, page, changes, bus } = setUp()
    await flushPromises()
    const asked: unknown[] = []
    bus.on(DRAW_WEATHER_REGION, (event: unknown) => asked.push(event))

    await wrapper.find('[data-action="draw-region"]').trigger('click')

    expect(asked).toEqual([{ pageId: 'p1' }])
    expect(wrapper.emitted('close')).toHaveLength(1)
    expect(page.weather).toBeUndefined()
    expect(changes.dirty).toBe(false)
  })

  it('writes an edit through, and that counts as a change', async () => {
    const { wrapper, page, changes } = setUp()
    await flushPromises()

    await wrapper.find('input').setValue('Renamed')
    await flushPromises()

    expect(page.name).toBe('Renamed')
    expect(changes.dirty).toBe(true)
  })
})
