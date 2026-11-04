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
 * The options of a control that offers some - a button group, a choice:
 * the listed ones, then those the widget's source gives, a list found at a
 * path in its answer, each item shown by one field and written by another.
 */
import { computed, ref, watch, type Ref } from 'vue'
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { listOf, textOf } from './useControl'

export interface Option {
  label: string
  value: unknown
  color: string
}

/* A path of field names and indices: rows, data.items, rows[0].values. A leading $value. is allowed. */
export function at(source: unknown, path: string): unknown {
  const parts = path
    .replace(/^\$value\.?/, '')
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean)
  return parts.reduce<any>((found, part) => (found == null ? undefined : found[part]), source)
}

export function useOptions(
  settings: Ref<unknown>,
  held: (key: string) => string,
  datasourceId: Ref<string>,
) {
  const data = ref<unknown>(null)
  const { update } = useDatasourceRepository(datasourceId, 'object', data)
  watch(datasourceId, (now, before) => update(now, before))

  const listed = computed<Option[]>(() =>
    listOf((settings.value as any)?.options).map((each: any) => {
      const value = textOf(each?.value)
      return { label: textOf(each?.label) || value, value, color: textOf(each?.color) }
    }),
  )

  const fromSource = computed<Option[]>(() => {
    if (data.value == null) return []
    const list = at(data.value, held('optionsPath').trim())
    if (!Array.isArray(list)) return []
    const labelField = held('optionLabel').trim()
    const valueField = held('optionValue').trim()
    return list
      .map((item) => {
        const isRecord = item !== null && typeof item === 'object'
        const value = valueField ? at(item, valueField) : isRecord ? undefined : item
        if (value === undefined || value === null) return null
        const shown = labelField ? at(item, labelField) : value
        return { label: textOf(shown) || textOf(value), value, color: '' }
      })
      .filter((each): each is Option => each !== null)
  })

  const options = computed<Option[]>(() => [...listed.value, ...fromSource.value])

  return { options, data }
}
