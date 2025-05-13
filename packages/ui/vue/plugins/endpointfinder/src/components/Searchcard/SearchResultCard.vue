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

import type { QueryResult } from '../../queryBuilder/QueryBuilderAPI'
import Ellipsis from '../utils/Ellipsis/Ellipsis.vue'
import { useFormat } from '../../composeables/FormatComposeable'
import { Formats } from '../../queryBuilder/FilterAPI'

const prop = withDefaults(defineProps<{ result: QueryResult }>(), {})
const color = useFormat().getColorForFormat('<' + prop.result.format.value + '>')
const getName = (name: string) => {
  const result = Object.entries(Formats).filter((val, index) => val[1] == '<' + name + '>')
  if (result && result[0]) return result[0][0]
  return name
}
</script>

<template>
  <VaCard class="card">
    <VaCardTitle>
      <VaChip :color="color" class="pointer" size="small">
        {{ getName(prop.result.format.value) }}
      </VaChip>
      {{ prop.result.title.value }}
    </VaCardTitle>
    <VaCardContent>
      <Ellipsis :lines="3">
        {{ prop.result.description.value }}
      </Ellipsis>
      <br>
      <div class="aflex small light">
        <div class="right">
          {{ prop.result.creator_name ? prop.result.creator_name.value : '' }}
        </div>
        <div class="left">
          {{ prop.result.date ? prop.result.date.value : '' }}
        </div>
      </div>

    </VaCardContent>
  </VaCard>
</template>

<style lang="scss" scoped>

.pointer {
  cursor: pointer;
  align-self: start;
  margin-right: 5px;
}

.card {
  box-shadow: none;
  border-bottom: 1px solid #e1e1e1;
  border-radius: 0;
  cursor: pointer;

  &:hover, &.active {
    background: #f5f8ff !important;
  }

  .va-card-title {
    font-size: 1.25rem;
  }

  .aflex {
    display: flex;
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    /* align-items: flex-start; */
    flex-wrap: nowrap;
  }

  .light {
    color: #6c6a6add;
  }

}
</style>
