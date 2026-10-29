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
 * A datasource chosen in a widget's settings reaches the widget at once.
 *
 * It did not, for a long while: a freshly placed chart or data table stayed
 * blank after "Done", and so did the preview beside the settings, until the
 * board was left and opened again. Three things had to hold for it to work,
 * and each of them was broken at some point:
 *
 *  - the dialog sets Widget.datasource, a feature of the model, instead of
 *    an id beside the features of a settings object that had just been
 *    swapped for a modelled one and announced nothing;
 *  - the wrapper reads the id through the watched widget, not off its prop,
 *    so a changed feature renders it again;
 *  - the composable reads and subscribes on the first assignment, where it
 *    used to wait for a previous id that a new widget never has.
 *
 * None of that was visible to a test until one mounted a widget. This one
 * mounts the board's widget and the dialog with its preview, the way the
 * editor does, and picks the source through the dialog's own select.
 */

import { describe, it, expect, vi, afterEach } from 'vitest'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { defineComponent, h, nextTick, ref } from 'vue'
import {
  DatasourceImpl,
  WidgetImpl,
  WorkspaceImpl,
  identifier as WORKSPACE,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { identifier as VARIABLE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  DataTableWidget,
  DataTableSettingsImpl,
  DatatablesettingsPackage,
  dataTableSettingsFormXmi,
} from 'org.eclipse.daanse.board.app.ui.vue.widget.table.data'
import WidgetSettingsOverlay from './WidgetSettingsOverlay.vue'

vi.mock('vue-router', () => ({ useRoute: () => ({ params: { pageid: 'page-1' } }) }))

/* The class literals are built on first access; the settings form needs them. */
void DatatablesettingsPackage.eINSTANCE

/**
 * A live store, as the repository hands it out: data on request, and the
 * widgets that listen for more. publish() is the store having new data.
 */
function storeDouble() {
  const listeners = new Set<() => unknown>()
  const store = {
    rows: [{ city: 'Jena' }] as Array<Record<string, string>>,
    getData: vi.fn(async () => ({ items: store.rows })),
    subscribe: (listener: () => unknown) => {
      listeners.add(listener)
    },
    unsubscribe: (listener: () => unknown) => {
      listeners.delete(listener)
    },
    callEvent: vi.fn(),
    publish(rows: Array<Record<string, string>>) {
      store.rows = rows
      listeners.forEach((listener) => listener())
    },
  }
  return store
}

let mounted: VueWrapper | undefined

afterEach(() => {
  mounted?.unmount()
  mounted = undefined
})

/**
 * The editor in miniature: the widget on the board, and - once opened - the
 * dialog with the same widget in its preview. Both are handed the modelled
 * widget itself, as the board and EditReport hand it.
 */
function mountEditor() {
  const store = storeDouble()
  const workspace = new WorkspaceImpl()
  const source = new DatasourceImpl()
  source.uid = 'ds-cities'
  source.name = 'Cities'
  workspace.datasources.push(source)

  /*
   * A widget that has never had a source: no reference, and no id in its
   * configuration either. That is the first assignment - the case the
   * composable once skipped subscribing for, because it waited for a
   * previous id to unsubscribe from.
   */
  const widget = new WidgetImpl()
  widget.uid = 'widget-1'
  widget.type = 'DataTableWidget'
  widget.wrapperConfig = {}
  widget.config = { settings: {} }

  const registration = {
    component: DataTableWidget,
    name: 'DataTable',
    settingsForm: {
      xmi: dataTableSettingsFormXmi,
      uri: '/data-table-settings.ui.xmi',
      ePackage: () => DatatablesettingsPackage.eINSTANCE,
      create: () => new DataTableSettingsImpl(),
    },
  }

  const open = ref(false)
  const Editor = defineComponent({
    setup() {
      const editing = useEObject(() => (open.value ? widget : undefined))
      return () => [
        h('div', { class: 'board' }, [h(WidgetWrapper, { widget, editEnabled: true })]),
        open.value && editing.value
          ? h(
              WidgetSettingsOverlay,
              { modelValue: editing.value, onClose: () => (open.value = false) },
              { preview: () => h(WidgetWrapper, { widget: editing.value, editEnabled: false }) },
            )
          : null,
      ]
    },
  })

  mounted = mount(Editor, {
    attachTo: document.body,
    global: {
      provide: {
        [WORKSPACE as symbol]: workspace,
        [DATASOURCE_REPOSITORY as symbol]: {
          getDatasource: (id: string) => {
            if (id === source.uid) return store
            throw new Error(`Store with id ${id} not found`)
          },
        },
        [WIDGET_REPOSITORY as symbol]: {
          getWidget: () => registration,
          getAllWidgets: () => ({ DataTableWidget: registration }),
          onChange: () => () => {},
        },
        [VARIABLE_REPOSITORY as symbol]: { getVariable: () => undefined },
        [EVENT_ACTIONS_REGISTRY as symbol]: { registerInstance() {}, unregisterInstance() {} },
        [identifiers.TINY_EMITTER as unknown as symbol]: { on() {}, off() {}, emit() {} },
      },
    },
  })

  return { editor: mounted, open, store, source }
}

async function settle() {
  await nextTick()
  await flushPromises()
}

/** Picks the source in the dialog's data tab, through its select. */
async function chooseDatasource(name: string) {
  const dataTab = document.querySelector<HTMLElement>('.tabs [role=tab]')!
  dataTab.click()
  await settle()

  const select = document.querySelector<HTMLSelectElement>('.side select')!
  const option = [...select.options].find((o) => o.textContent?.trim() === name)!
  select.value = option.value
  select.dispatchEvent(new Event('change'))
  await settle()
}

function pressDone() {
  const buttons = document.querySelectorAll<HTMLElement>('.foot button')
  buttons[buttons.length - 1].click()
}

describe('choosing a datasource in the widget settings', () => {
  it('shows the data in the preview while the dialog is open', async () => {
    const { open } = mountEditor()
    await settle()

    open.value = true
    await settle()
    await chooseDatasource('Cities')

    expect(document.querySelector('.preview')?.textContent).toContain('Jena')
  })

  it('shows the data on the board after Done, without leaving the page', async () => {
    const { editor, open, store } = mountEditor()
    await settle()
    expect(editor.find('.board').text()).not.toContain('Jena')

    open.value = true
    await settle()
    await chooseDatasource('Cities')
    pressDone()
    await settle()

    expect(open.value).toBe(false)
    expect(editor.find('.board').text()).toContain('Jena')

    /* And it listens from now on, rather than having read once. */
    store.publish([{ city: 'Weimar' }])
    await settle()
    expect(editor.find('.board').text()).toContain('Weimar')
  })
})
