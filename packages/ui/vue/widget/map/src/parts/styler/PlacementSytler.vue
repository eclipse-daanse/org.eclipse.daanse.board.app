<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->
<script lang="ts" setup>

import { ERefType, IDSRenderer, type PlacementI } from './../../api/Renderer'
import { type ModelRef, reactive } from 'vue'

const model: ModelRef<PlacementI> = defineModel<PlacementI>({
  default: () => {
    return reactive({
      placement: ERefType.OberservedArea
    })
  }
})
</script>

<template>
  <label id="input-label-240" aria-hidden="true"
          class="va-input-label va-input-wrapper__label va-input-wrapper__label--outer"
          style="color: var(--va-primary);">render within </label>
  <VaOptionList
    v-model="model.placement"
    :options="[ERefType.Thing,ERefType.OberservedArea]"
    label="render within"
    type="radio"
  />
</template>

<style scoped>

</style>
