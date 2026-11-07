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
 * Values a free-text field offers while it is typed in (#1285).
 *
 * A ComboboxWidget in a form is a text field that suggests: the field
 * names of a chart's data, say. What it suggests is not in the form - the
 * form cannot know which source a widget reads - so whoever shows the form
 * hands a function over, and every field below the form asks it.
 *
 * A suggestion never restricts the field: what is typed is what is stored,
 * because a source that has not answered yet, or a field computed by a
 * step of the chart itself, is still a field someone means.
 *
 * A SelectWidget asks the same function, and offers its answer as the
 * choices: the data sources of the board, say. There a suggestion may name
 * what is stored and what the reader sees apart - the id of a source and
 * its name.
 */
import { inject, onMounted, ref, watch, type Ref } from 'vue'
import type { EObject } from '@emfts/core'

/** A value to offer, or a value and the words the reader sees for it. */
export type FieldSuggestion = string | { value: string; label?: string }

/** Asked with the object being edited and the name of the feature. */
export type FieldSuggest = (owner: EObject, feature: string) => Promise<FieldSuggestion[]> | FieldSuggestion[]

/** Under this key SettingsForm provides a getter of its `suggest` prop. */
export const FIELD_SUGGESTIONS = Symbol.for('daanse.uimodel.fieldSuggestions')

/**
 * The suggestions of one field, asked when it is shown and again when it
 * gets the focus - by then a step that adds a field may have been written.
 */
export function useSuggestions(
  owner: () => EObject | undefined,
  feature: () => string | undefined,
  enabled: () => boolean,
): { suggestions: Ref<string[]>; labels: Ref<Record<string, string>>; refresh: () => void } {
  const provided = inject<(() => FieldSuggest | undefined) | undefined>(FIELD_SUGGESTIONS, undefined)
  const suggestions = ref<string[]>([])
  const labels = ref<Record<string, string>>({})
  let asked = 0

  const refresh = () => {
    const suggest = provided?.()
    const object = owner()
    const name = feature()
    if (!enabled() || !suggest || !object || !name) return
    const mine = ++asked
    Promise.resolve()
      .then(() => suggest(object, name))
      .then((answer) => {
        if (mine !== asked) return
        const named: Record<string, string> = {}
        const values = (answer ?? []).map((each) => {
          if (each && typeof each === 'object') {
            const value = String(each.value ?? '')
            if (value && each.label) named[value] = String(each.label)
            return value
          }
          return String(each ?? '')
        })
        suggestions.value = [...new Set(values.filter(Boolean))]
        labels.value = named
      })
      .catch(() => {
        // No suggestions is a field to type in, not an error to show
      })
  }

  onMounted(refresh)
  watch([owner, feature], refresh)
  return { suggestions, labels, refresh }
}
