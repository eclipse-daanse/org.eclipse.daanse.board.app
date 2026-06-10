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
import { toRefs } from 'vue'

const props = defineProps<{
  widgetSettings: any
}>()
const { widgetSettings } = toRefs(props)

const costingOptions = [
  { text: 'Auto', value: 'auto' },
  { text: 'Fahrrad', value: 'bicycle' },
  { text: 'Zu Fuß', value: 'pedestrian' },
  { text: 'LKW', value: 'truck' },
  { text: 'Bus', value: 'bus' },
  { text: 'Roller', value: 'motor_scooter' },
  { text: 'Motorrad', value: 'motorcycle' },
]

if (widgetSettings.value && !widgetSettings.value.defaultCosting) {
  widgetSettings.value.defaultCosting = 'auto'
}
</script>

<template>
  <div v-if="widgetSettings" class="routing-settings">
    <VaSelect
      v-model="widgetSettings.defaultCosting"
      label="Default Verkehrsart"
      :options="costingOptions"
      text-by="text"
      value-by="value"
    />
  </div>
</template>

<style scoped>
.routing-settings {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem;
}
</style>
