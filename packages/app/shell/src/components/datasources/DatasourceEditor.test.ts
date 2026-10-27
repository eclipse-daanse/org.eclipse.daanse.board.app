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
 * A source whose live half cannot be built from its settings - a chart
 * composer without "Compose by" - used to close the editor on an uncaught
 * error. The editor now stays open and says so.
 */

import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import i18next from 'i18next'
import { identifier as DATASOURCES } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifier as WORKSPACE } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import DatasourceEditor from './DatasourceEditor.vue'
import en from '../../i18n/en.json'

async function translator() {
  const i18n = i18next.createInstance()
  await i18n.init({ fallbackLng: 'en', lng: 'en', resources: { en: { shell: en } } })
  return i18n
}

function list<T>(items: T[] = []) {
  return { toArray: () => items }
}

async function editor(saveDatasource: () => void) {
  const model = { uid: 'chart-1', name: 'Chart', type: 'chart', tags: Object.assign([] as string[], { clear() {}, add() {} }), config: {} }
  const repository = {
    registeredDatasources: ['chart'],
    getDatasourceModel: () => model,
    getDatasourceIdentifiers: () => undefined,
    resolveIdentifier: () => null,
    saveDatasource: vi.fn(saveDatasource),
  }
  const workspace = { connections: list(), datasources: list() }
  const view = mount(DatasourceEditor, {
    props: { itemId: 'chart-1' },
    global: { provide: { i18n: await translator(), [DATASOURCES]: repository, [WORKSPACE]: workspace } },
  })
  await flushPromises()
  return { view, repository }
}

function saveButton(view: Awaited<ReturnType<typeof editor>>['view']) {
  /* The primary action, last in the row. */
  return view.findAll('.editor__actions button').at(-1)!
}

describe('the datasource editor', () => {
  it('stays open and says why when the source cannot be built from its settings', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const { view, repository } = await editor(() => {
      throw new Error('Invalid ChartComposer configuration: composeBy not set.')
    })

    await saveButton(view).trigger('click')

    expect(repository.saveDatasource).toHaveBeenCalledOnce()
    expect(view.emitted('close')).toBeUndefined()
    expect(view.find('[role="alert"]').text()).toBe(en.Editor.notLive)
    warn.mockRestore()
  })

  it('closes after a save that builds', async () => {
    const { view } = await editor(() => {})

    await saveButton(view).trigger('click')

    expect(view.emitted('close')).toHaveLength(1)
    expect(view.find('[role="alert"]').exists()).toBe(false)
  })
})
