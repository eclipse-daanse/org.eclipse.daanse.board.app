<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
/**
 * Which columns the table shows.
 *
 * The one question about this table that a form cannot be generated for:
 * the model has no idea what columns an answer carries, and the choice is
 * "which of these" rather than a list typed out by hand. So the columns
 * are read from the source the widget is pointed at, the same way the
 * widget itself reads them, and offered as what they are (#1185).
 *
 * Everything else about the table - the page size, the sorting, the
 * header - renders from model/ui.xmi beside this.
 */
import { computed, ref, watch } from 'vue'
import { useDatasourceRepository, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DCheckbox } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const widgetSettings = defineModel<any>({ required: true })

const { t } = useTranslation('tableData')

const datasourceId = computed<string>(() => widgetSettings.value?.datasourceId ?? '')

const data = ref<any>(null)
useDatasourceRepository(datasourceId, 'DataTable', data)

/** Every column the answer carries, which is what there is to choose from. */
const columns = computed<string[]>(() => {
  const first = data.value?.items?.[0]
  return first ? Object.keys(first) : []
})

/*
 * Held as the columns left out, so an answer that grows a column later
 * shows it rather than hiding it because nobody came back to tick it.
 *
 * Read from both shapes: a settings object built through the factory
 * keeps this as an EList, and one read back from a stored board as a
 * plain array.
 */
const hidden = computed<Set<string>>(() => {
  const held = widgetSettings.value?.hiddenColumns
  if (!held) return new Set()
  return new Set(Array.from(held as Iterable<string>))
})

/** Writes the list back into whichever of the two shapes is there. */
function keepHidden(names: string[]) {
  const held = widgetSettings.value?.hiddenColumns as any
  if (held && typeof held.clear === 'function') {
    held.clear()
    for (const name of names) {
      if (typeof held.add === 'function') held.add(name)
      else if (typeof held.push === 'function') held.push(name)
    }
    return
  }
  widgetSettings.value.hiddenColumns = names
}

function setShown(column: string, shown: boolean) {
  const names = new Set(hidden.value)
  if (shown) names.delete(column)
  else names.add(column)
  keepHidden([...names])
}

/*
 * A column that is no longer in the answer stops being hidden.
 *
 * Left in the list it would sit there invisibly and hide that column
 * again if the source ever answered it once more - a setting nobody can
 * see and nobody made.
 */
watch(columns, (there) => {
  if (!there.length) return
  const known = new Set(there)
  const stale = [...hidden.value].filter((name) => !known.has(name))
  if (stale.length) keepHidden([...hidden.value].filter((name) => known.has(name)))
})
</script>

<template>
  <section class="settings-section" data-section-id="columns" :data-section="t('Settings.columns')">
    <div class="settings_container">
      <p v-if="!datasourceId" class="note">{{ t('Settings.noSource') }}</p>
      <p v-else-if="!columns.length" class="note">{{ t('Settings.noColumns') }}</p>

      <template v-else>
        <p class="note">{{ t('Settings.columnsHint') }}</p>
        <DCheckbox
          v-for="column in columns"
          :key="column"
          :model-value="!hidden.has(column)"
          :label="column"
          @update:model-value="(shown: boolean) => setShown(column, shown)"
        />
      </template>
    </div>
  </section>
</template>

<style scoped>
.settings_container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.note {
  margin: 0 0 4px;
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
