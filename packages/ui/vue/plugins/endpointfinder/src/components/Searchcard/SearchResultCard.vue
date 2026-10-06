<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script lang="ts" setup>
import { DCard, DChip } from 'org.eclipse.daanse.board.app.ui.vue.controls'

import type { QueryResult } from '../../queryBuilder/QueryBuilderAPI'
import Ellipsis from '../utils/Ellipsis/Ellipsis.vue'
import { Formats } from '../../queryBuilder/FilterAPI'

const prop = withDefaults(defineProps<{ result: QueryResult }>(), {})
const getName = (name: string) => {
  const result = Object.entries(Formats).filter((val, index) => val[1] == '<' + name + '>')
  if (result && result[0]) return result[0][0]
  return name
}
</script>

<template>
  <DCard class="card">
    <template #header>
      <h3 class="card__heading">
        <DChip>{{ getName(prop.result.format.value) }}</DChip>
        {{ prop.result.title.value }}
      </h3>
    </template>

    <Ellipsis :lines="3">
      {{ prop.result.description.value }}
    </Ellipsis>

    <div class="aflex small light">
      <div class="right">
        {{ prop.result.creator_name ? prop.result.creator_name.value : '' }}
      </div>
      <div class="left">
        {{ prop.result.date ? prop.result.date.value : '' }}
      </div>
    </div>
  </DCard>
</template>

<style lang="scss" scoped>
.card {
  border: 0;
  border-bottom: 1px solid var(--color-divider);
  border-radius: 0;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: color-mix(in srgb, var(--color-pane) 60%, transparent);
  }
}

.card__heading {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
}

.aflex {
  display: flex;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.light,
.small {
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
