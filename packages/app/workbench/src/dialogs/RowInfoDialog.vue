<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  Every column of one row: a cube object from MDSCHEMA_*, a table, any
  Discover row. Nested rowsets are shown as their JSON.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { DButton, DModal } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { columnLabel } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { rowColumns } from '../state/rowInfo'

const props = defineProps<{ entry: { title: string; kind: string; row: Record<string, unknown> } | null }>()
const emit = defineEmits<{ (event: 'close'): void; (event: 'insert', text: string): void }>()
// i18n-keys: workbench:Kinds.*
const { t } = useTranslation('workbench')

const open = computed({ get: () => !!props.entry, set: (value: boolean) => !value && emit('close') })
const rows = computed(() => rowColumns(props.entry?.row ?? {}))
const uniqueName = computed(() => {
  const row = props.entry?.row ?? {}
  const name = Object.entries(row).find(([key]) => /_UNIQUE_NAME$/.test(key) && /^(MEMBER|LEVEL|HIERARCHY|DIMENSION|MEASURE)_/.test(key))?.[1]
  return typeof name === 'string' ? name : null
})
</script>

<template>
  <DModal v-model="open" :title="entry ? `${entry.title} — ${t(`Kinds.${entry.kind}`, { defaultValue: entry.kind })}` : ''" size="lg">
    <table class="row-info">
      <tbody>
        <tr v-for="row in rows" :key="row.key">
          <th :title="row.key">{{ columnLabel(row.key) }}</th>
          <td><pre v-if="row.nested">{{ row.value }}</pre><template v-else>{{ row.value }}</template></td>
        </tr>
      </tbody>
    </table>
    <template #actions>
      <DButton v-if="uniqueName" @click="emit('insert', uniqueName); emit('close')">{{ t('RowInfo.insert') }}</DButton>
      <DButton intent="primary" @click="emit('close')">{{ t('RowInfo.close') }}</DButton>
    </template>
  </DModal>
</template>

<style scoped>
.row-info {
  border-collapse: collapse;
  width: 100%;
  font-size: var(--text-sm);
}

.row-info th {
  padding: 3px 12px 3px 0;
  color: var(--color-dim);
  font-weight: 500;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-align: left;
  vertical-align: top;
  white-space: nowrap;
}

.row-info td {
  padding: 3px 0;
  border-bottom: 1px solid var(--color-divider);
  word-break: break-word;
}

.row-info pre {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  white-space: pre-wrap;
}
</style>
