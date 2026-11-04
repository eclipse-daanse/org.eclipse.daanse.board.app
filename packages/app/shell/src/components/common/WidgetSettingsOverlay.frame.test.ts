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
 * A frame setting changed in the overlay, followed to the preview and to
 * the widget on the board (#1233).
 *
 * Composed the way EditReport composes it: the wrapper on the board, and
 * once the settings are open the overlay with a second wrapper as its
 * preview, both handed the same Widget - whose frame arrives as a stored
 * board leaves it, a plain object. Opening the settings adopts that into a
 * modelled frame, and that replacement is what neither wrapper saw.
 */
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref } from 'vue'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { WidgetImpl, WorkspaceImpl, identifier as WORKSPACE } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { identifier as WIDGETS } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import WidgetSettingsOverlay from './WidgetSettingsOverlay.vue'

vi.mock('vue-router', () => ({ useRoute: () => ({ params: {} }), useRouter: () => ({ push() {} }) }))

const DATASOURCES = Symbol.for('DatasourceRepository')
const VARIABLES = Symbol.for('VariableRepository')

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

const Probe = defineComponent({ setup: () => () => h('span', { class: 'probe' }, 'probe') })

function mountBoard() {
  const widget = new WidgetImpl()
  widget.uid = 'probe-1'
  widget.type = 'Probe'
  widget.config = {}
  widget.wrapperConfig = {}

  const registered = { Probe: { type: 'Probe', name: 'Probe', component: Probe } }

  const open = ref(false)
  const Board = defineComponent({
    setup() {
      const editing = useEObject(() => (open.value ? widget : undefined))
      return () => [
        h('div', { class: 'board' }, [h(WidgetWrapper, { widget, editEnabled: false })]),
        open.value && editing.value
          ? h(
              WidgetSettingsOverlay,
              {
                modelValue: editing.value as never,
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
        [DATASOURCES as symbol]: { getDatasource: () => undefined },
        [VARIABLES as symbol]: { getVariable: () => null, getVariables: () => [], getAllVariables: () => [] },
      },
    },
  })
  return { open, widget }
}

const titleIn = (root: Element) => root.querySelector('.wrapper-container > .font-semibold')?.textContent?.trim()

describe('a frame setting changed in the widget settings', () => {
  it('shows in the preview and on the board at once', async () => {
    const { open } = mountBoard()
    await flushPromises()
    const board = document.querySelector('.board')!
    expect(titleIn(board)).toBeUndefined()

    open.value = true
    await flushPromises()
    const overlay = document.querySelector('.overlay')!
    const preview = overlay.querySelector('.preview')!
    // The preview is the widget in its frame, not the widget alone.
    expect(preview.querySelector('.wrapper-container .probe')).not.toBeNull()

    const frameTab = [...overlay.querySelectorAll('.tabs .tab')].find((tab) =>
      /frame|Rahmen/i.test(tab.textContent ?? ''),
    ) as HTMLButtonElement
    frameTab.click()
    await flushPromises()

    const input = overlay.querySelector('.fields input[type="text"], .fields input:not([type])') as HTMLInputElement
    expect(input).not.toBeNull()
    input.value = 'Sales'
    input.dispatchEvent(new Event('input'))
    await flushPromises()

    expect(titleIn(preview)).toBe('Sales')
    expect(titleIn(board)).toBe('Sales')
  })
})
