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
 * A setting changed in the overlay, followed to the widget on the board.
 *
 * Composed the way EditReport composes it: one widget, the wrapper that
 * draws it on the board, and - once its settings are opened - the overlay
 * with a second wrapper as its preview, both handed the same Widget. The
 * widget is the pivot table with a stored board's settings: a plain object,
 * which is what legacyWorkspace puts into Widget.config.
 *
 * The view chosen there used to reach neither the preview nor the board
 * until the board was remounted.
 */
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref } from 'vue'
import { config as testing, flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { TinyEmitter } from 'tiny-emitter'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { pivotSlice, slicesOf } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import {
  WidgetImpl,
  WorkspaceImpl,
  identifier as WORKSPACE,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { identifier as WIDGETS } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { ComposablesPackage } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { EventsPackage } from '../../../../../lib/api/events/src/gen/EventsPackage'
import { PivotTablePackage } from '../../../../../ui/vue/widget/table/pivot/src/gen/PivotTablePackage'
import PivotTableWidget from '../../../../../ui/vue/widget/table/pivot/src/PivotTableWidget.vue'
import PivotTableWidgetSettings from '../../../../../ui/vue/widget/table/pivot/src/PivotTableWidgetSettings.vue'
import { i18n, metadata, salesCellset } from '../../../../../ui/vue/widget/table/pivot/src/navigation/testing'
import WidgetSettingsOverlay from './WidgetSettingsOverlay.vue'

vi.mock('vue-router', () => ({ useRoute: () => ({ params: {} }), useRouter: () => ({ push() {} }) }))

// As the bundles do on load: the packages the widget's model builds on, then its own.
void EventsPackage.eINSTANCE
void ComposablesPackage.eINSTANCE
void PivotTablePackage.eINSTANCE

testing.global.provide = { ...testing.global.provide, i18n }

const DATASOURCES = Symbol.for('DatasourceRepository')
const VARIABLES = Symbol.for('VariableRepository')

const cellset = salesCellset()
const params = { rows: [{}], columns: [{}], measures: [], properties: [], showRowsProperties: false, showColumnsProperties: false }
const answer = () => ({
  ...pivotSlice(cellset, slicesOf(cellset)[0], params),
  cellset,
  sliceParams: params,
  axisMetadata: metadata,
  tableState: { rowsExpandedMembers: [], columnsExpandedMembers: [] },
})

beforeAll(() => {
  globalThis.ResizeObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as never
})

let mounted: VueWrapper | undefined
afterEach(() => {
  try {
    mounted?.unmount()
  } catch {
    // A test that failed half-way may have left nothing to unmount
  }
  mounted = undefined
  document.body.innerHTML = ''
})

function mountBoard() {
  const widget = new WidgetImpl()
  widget.uid = 'pivot-1'
  widget.type = 'PivotTableWidget'
  // As a stored board arrives: its settings plain, its frame empty.
  widget.config = { datasourceId: 'ds' }
  widget.wrapperConfig = {}

  const registered = {
    PivotTableWidget: {
      type: 'PivotTableWidget',
      name: 'PivotTable',
      component: PivotTableWidget,
      settingsComponent: PivotTableWidgetSettings,
    },
  }
  const datasource = { getData: async () => answer(), subscribe() {}, unsubscribe() {} }

  const open = ref(false)
  const Board = defineComponent({
    setup() {
      // As EditReport holds the widget it edits.
      const editing = useEObject(() => (open.value ? widget : undefined))
      return () => [
        h('div', { class: 'board' }, [h(WidgetWrapper, { widget, editEnabled: false })]),
        open.value && editing.value
          ? h(
              WidgetSettingsOverlay,
              {
                modelValue: editing.value,
                'onUpdate:modelValue': () => {},
                onClose: () => (open.value = false),
              },
              { preview: () => h(WidgetWrapper, { widget: editing.value, editEnabled: false }) },
            )
          : null,
      ]
    },
  })

  mounted = mount(Board, {
    attachTo: document.body,
    global: {
      provide: {
        [WORKSPACE as symbol]: new WorkspaceImpl(),
        [WIDGETS as symbol]: {
          getAllWidgets: () => registered,
          getWidget: (type: string) => registered[type as keyof typeof registered],
          onChange: () => () => {},
        },
        [DATASOURCES as symbol]: { getDatasource: () => datasource },
        [VARIABLES as symbol]: { getVariable: () => null, getVariables: () => [], getAllVariables: () => [] },
        [identifiers.TINY_EMITTER as symbol]: new TinyEmitter(),
      },
    },
  })
  return { open, widget }
}

const selectedMode = (root: Element) =>
  root.querySelector('.navigator__mode[aria-selected="true"]')?.textContent?.trim()

describe('the pivot view chosen in the widget settings', () => {
  it('reaches the preview at once and the board on Done', async () => {
    const { open } = mountBoard()
    await flushPromises()
    const board = document.querySelector('.board')!
    expect(selectedMode(board)).toBe('Standard')

    open.value = true
    await flushPromises()
    const overlay = document.querySelector('.overlay')!
    const preview = overlay.querySelector('.preview')!
    expect(selectedMode(preview)).toBe('Standard')

    // The "View" select of the hand-written settings, as a click would set it.
    const settings = mounted!.findComponent(PivotTableWidgetSettings)
    const view = settings
      .findAllComponents(DSelect)
      .find((select) => select.props('label') === 'Settings.navigation.mode' || select.props('label') === 'View')!
    view.vm.$emit('update:modelValue', 'map')
    await flushPromises()
    expect(selectedMode(preview)).toBe('Map')

    const done = [...overlay.querySelectorAll('.foot button')].at(-1) as HTMLButtonElement
    done.click()
    await flushPromises()

    expect(document.querySelector('.overlay')).toBeNull()
    expect(selectedMode(board)).toBe('Map')
    expect(board.querySelector('.map__table')).not.toBeNull()
  })

  it('is put back on Discard, on the board as in the settings', async () => {
    const { open, widget } = mountBoard()
    await flushPromises()
    open.value = true
    await flushPromises()

    const settings = mounted!.findComponent(PivotTableWidgetSettings)
    const view = settings
      .findAllComponents(DSelect)
      .find((select) => select.props('label') === 'Settings.navigation.mode' || select.props('label') === 'View')!
    view.vm.$emit('update:modelValue', 'compare')
    await flushPromises()

    const discard = [...document.querySelectorAll('.overlay .foot button')].at(-2) as HTMLButtonElement
    discard.click()
    await flushPromises()

    expect((widget.config as { mode?: string }).mode).toBe('standard')
    expect(selectedMode(document.querySelector('.board')!)).toBe('Standard')
  })
})
