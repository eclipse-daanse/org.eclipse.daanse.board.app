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

// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick, watch } from 'vue'
import { DatasourceImpl, WidgetImpl, WorkspacePackage } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { DatatablesettingsPackage } from '../gen/DatatablesettingsPackage'
import { DataTableSettingsImpl } from '../gen/DataTableSettingsImpl'
import DataTableWidgetSettings from '../DataTableWidgetSettings.vue'

/* What the one source there is answers; any other id answers nothing. */
const ROWS = [{ datum: '2026-01-03', kasse: 'K2', besucher: 99 }]

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as any
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useDatasourceRepository: (id: { value: string }, _type: string, data: { value: unknown }) => {
      const answer = () => {
        data.value = id.value === 'ds-1' ? { headers: Object.keys(ROWS[0]), items: ROWS, rows: [] } : null
      }
      answer()
      watch(id, answer)
      return { data, update: vi.fn(), callEvent: vi.fn() }
    },
  }
})

/* The class literals are built on first access. */
void DatatablesettingsPackage.eINSTANCE
void WorkspacePackage.eINSTANCE

function sourceNamed(uid: string) {
  const source = new DatasourceImpl()
  source.uid = uid
  return source
}

/** One box per column, as text - the control itself is not under test. */
const Box = {
  name: 'DCheckbox',
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
  template: '<label class="box">{{ label }}</label>',
}

function show(widget: WidgetImpl | undefined, settings = new DataTableSettingsImpl()) {
  return mount(DataTableWidgetSettings, {
    props: { modelValue: settings, widget },
    global: { stubs: { DCheckbox: Box } },
  })
}

const boxes = (wrapper: ReturnType<typeof show>) => wrapper.findAll('.box').map((box) => box.text())

describe('DataTableWidgetSettings', () => {
  describe('which source the columns come from', () => {
    /*
     * The picker in the overlay sets the reference on the widget and nothing
     * else; the settings object has no feature for an id. Read off the
     * settings, the section saw no source and offered no column (#1202).
     */
    it('is the reference on the widget: one box per column', async () => {
      const widget = new WidgetImpl()
      widget.datasource = sourceNamed('ds-1')
      widget.config = new DataTableSettingsImpl()

      const wrapper = show(widget, widget.config as DataTableSettingsImpl)
      await flushPromises()

      expect(boxes(wrapper)).toEqual(['datum', 'kasse', 'besucher'])
    })

    it('is the id in the configuration for a board written before the reference', async () => {
      const widget = new WidgetImpl()
      const stored: any = new DataTableSettingsImpl()
      stored.datasourceId = 'ds-1'
      widget.config = stored

      const wrapper = show(widget, stored)
      await flushPromises()

      expect(boxes(wrapper)).toEqual(['datum', 'kasse', 'besucher'])
    })

    it('is the reference first where both are there', async () => {
      const widget = new WidgetImpl()
      widget.datasource = sourceNamed('ds-1')
      const stored: any = new DataTableSettingsImpl()
      stored.datasourceId = 'ds-gone'
      widget.config = stored

      const wrapper = show(widget, stored)
      await flushPromises()

      expect(boxes(wrapper)).toEqual(['datum', 'kasse', 'besucher'])
    })

    it('says so where no source is chosen yet', async () => {
      const widget = new WidgetImpl()
      widget.config = new DataTableSettingsImpl()

      const wrapper = show(widget, widget.config as DataTableSettingsImpl)
      await flushPromises()

      expect(boxes(wrapper)).toEqual([])
      expect(wrapper.text()).toContain('Settings.noSource')
    })

    /* The "Data" tab sets the reference while this section is open. */
    it('follows a source chosen while the settings are open', async () => {
      const widget = new WidgetImpl()
      widget.config = new DataTableSettingsImpl()
      const wrapper = show(widget, widget.config as DataTableSettingsImpl)
      await flushPromises()
      expect(boxes(wrapper)).toEqual([])

      widget.datasource = sourceNamed('ds-1')
      await nextTick()
      await flushPromises()

      expect(boxes(wrapper)).toEqual(['datum', 'kasse', 'besucher'])
    })
  })

  it('writes a column left unticked into the hidden list', async () => {
    const widget = new WidgetImpl()
    widget.datasource = sourceNamed('ds-1')
    const settings = new DataTableSettingsImpl()
    widget.config = settings

    const wrapper = show(widget, settings)
    await flushPromises()

    await wrapper.findAllComponents(Box)[1].vm.$emit('update:modelValue', false)
    expect(settings.hiddenColumns.toArray()).toEqual(['kasse'])
  })
})
