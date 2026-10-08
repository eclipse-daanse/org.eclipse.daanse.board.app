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
import { DRadioGroup } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const model: ModelRef<PlacementI> = defineModel<PlacementI>({
  default: () => {
    return reactive({
      placement: ERefType.OberservedArea
    })
  }
})
</script>

<template>
  <div>
    <DRadioGroup
      v-model="model.placement"
      :options="[ERefType.Thing, ERefType.OberservedArea]"
      label="render within"
      stacked
    />
  </div>
  <div></div>
</template>

<style scoped>

</style>
