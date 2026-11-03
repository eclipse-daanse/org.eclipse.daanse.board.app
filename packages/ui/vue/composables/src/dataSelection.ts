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

import { inject, provide, type InjectionKey, type Ref } from 'vue'
import type { SelectionSpec } from 'org.eclipse.daanse.board.app.lib.utils.helpers'

/**
 * How a widget's data selection (#1216) reaches the composable that hands
 * the widget its data.
 *
 * The wrapper holds the widget and provides its selection; every widget
 * reads its data through useDatasourceRepository, which injects it. So no
 * widget has to know there is a selection, and the board and the settings
 * preview - both render through the wrapper - receive the same part.
 */
export const DATA_SELECTION: InjectionKey<Readonly<Ref<SelectionSpec | null>>> = Symbol.for(
  'org.eclipse.daanse.board.app.ui.vue.composables.dataSelection',
)

/** What a selection looks like to the parts that do not know the model. */
interface ModelledSelection {
  path?: string | null
  pick?: string | null
  index?: number | null
  filters?: { toArray?: () => ModelledFilter[] } | ModelledFilter[] | null
  fields?: { toArray?: () => string[] } | string[] | null
}

interface ModelledFilter {
  field?: string | null
  operator?: string | null
  value?: string | null
}

function listed<T>(list: { toArray?: () => T[] } | T[] | null | undefined): T[] {
  if (!list) return []
  if (Array.isArray(list)) return [...list]
  return list.toArray?.() ?? []
}

/**
 * The selection as plain values, or null where there is none.
 *
 * A fresh object every time. The modelled selection is the same instance
 * on every change inside it, and that is not a change Vue counts (#1093,
 * #1203); a snapshot taken on each notification is.
 */
export function selectionSnapshot(selection: ModelledSelection | null | undefined): SelectionSpec | null {
  if (!selection) return null
  return {
    path: selection.path ?? '',
    pick: selection.pick ?? 'ALL',
    index: selection.index ?? 0,
    filters: listed(selection.filters).map((filter) => ({
      field: filter.field ?? '',
      operator: filter.operator ?? 'EQUALS',
      value: filter.value ?? '',
    })),
    fields: listed(selection.fields),
  }
}

export function provideDataSelection(selection: Readonly<Ref<SelectionSpec | null>>): void {
  provide(DATA_SELECTION, selection)
}

/** The selection of the widget this runs in, or null outside of one. */
export function injectDataSelection(): Readonly<Ref<SelectionSpec | null>> | null {
  return inject(DATA_SELECTION, null)
}
