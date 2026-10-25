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
  Everything a server says about one function: each overload's signature,
  description, the remaining MDSCHEMA_FUNCTIONS columns, and its parameters
  with their flags.
-->
<script setup lang="ts">
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { ORIGINS, parametersOf, returnTypeOf, signatureOf, textOf, type FunctionEntry } from './functions'

defineProps<{ entry: FunctionEntry }>()
const { t } = useTranslation('xmla')

const COLUMNS = ['PARAMETER_LIST', 'RETURN_TYPE', 'ORIGIN', 'INTERFACE_NAME', 'LIBRARY_NAME', 'OBJECT', 'CAPTION', 'DLL_NAME', 'HELP_FILE', 'HELP_CONTEXT']
const shown = (row: Record<string, unknown>, column: string) => {
  const value = textOf(row[column])
  if (!value || (column === 'PARAMETER_LIST' && /^\(none\)$/i.test(value))) return null
  if (column === 'RETURN_TYPE') return returnTypeOf(row)
  return column === 'ORIGIN' ? `${value} · ${ORIGINS[value] ?? ''}` : value
}
</script>

<template>
  <div class="function-info">
    <article v-for="(row, index) in entry.overloads" :key="index" class="overload">
      <code class="overload__signature">{{ signatureOf(row) }}</code>
      <p v-if="row.DESCRIPTION" class="overload__description">{{ row.DESCRIPTION }}</p>
      <table class="overload__meta">
        <template v-for="column in COLUMNS" :key="column">
          <tr v-if="shown(row, column)">
            <th>{{ column }}</th>
            <td>{{ shown(row, column) }}</td>
          </tr>
        </template>
      </table>
      <table v-if="parametersOf(row).length" class="overload__params">
        <thead>
          <tr>
            <th>{{ t('Functions.parameter') }}</th>
            <th>{{ t('Functions.description') }}</th>
            <th>{{ t('Functions.optional') }}</th>
            <th>{{ t('Functions.repeatable') }}</th>
            <th>{{ t('Functions.skippable') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="parameter in parametersOf(row)" :key="parameter.name">
            <td><code>{{ parameter.name }}</code></td>
            <td>{{ parameter.description }}</td>
            <td>{{ parameter.optional ? '✓' : '' }}</td>
            <td>{{ parameter.repeatable ? '✓' : '' }}</td>
            <td>{{ parameter.skippable ? '✓' : '' }}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<style scoped>
.function-info {
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: var(--text-sm);
}

.overload {
  padding: 8px 10px;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
}

.overload__signature {
  font-family: var(--font-mono);
  color: var(--color-fn, var(--color-accent));
}

.overload__description {
  margin: 6px 0;
  color: var(--color-fg);
}

.overload table {
  border-collapse: collapse;
  margin-top: 6px;
}

.overload th,
.overload td {
  padding: 2px 8px 2px 0;
  text-align: left;
  vertical-align: top;
}

.overload__meta th {
  color: var(--color-dim);
  font-weight: 500;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

.overload__params thead th {
  color: var(--color-dim);
  font-weight: 600;
  border-bottom: 1px solid var(--color-divider);
}
</style>
