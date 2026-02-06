<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
import { computed, watch } from 'vue'

const variableSettings = defineModel<any>()

// Parse ISO 8601 datetime string to Date object
const dateValue = computed({
  get: () => {
    if (!variableSettings.value?.datetime) return null
    return new Date(variableSettings.value.datetime)
  },
  set: (value: Date | null) => {
    if (!value) {
      variableSettings.value.datetime = ''
      return
    }
    updateDatetime(value, timeValue.value)
  }
})

const timeValue = computed({
  get: () => {
    if (!variableSettings.value?.datetime) return null
    return new Date(variableSettings.value.datetime)
  },
  set: (value: Date | null) => {
    if (!value) return
    updateDatetime(dateValue.value, value)
  }
})

// Combine date and time into ISO 8601 datetime string with UTC timezone
const updateDatetime = (date: Date | null, time: Date | null) => {
  if (!date) {
    variableSettings.value.datetime = ''
    return
  }

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  const hours = (time?.getHours() || 0).toString().padStart(2, '0')
  const minutes = (time?.getMinutes() || 0).toString().padStart(2, '0')
  const seconds = (time?.getSeconds() || 0).toString().padStart(2, '0')

  variableSettings.value.datetime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <VaInput
      v-model="variableSettings.name"
      label="Variable Name"
      placeholder="Enter variable name"
    />
    <div class="datetime-group">
      <VaDateInput
        v-model="dateValue"
        label="Date"
        placeholder="Select date"
      />
      <VaTimeInput
        v-model="timeValue"
        label="Time"
        placeholder="Select time"
      />
    </div>
    <VaInput
      v-model="variableSettings.datetime"
      label="ISO 8601 DateTime (UTC)"
      placeholder="YYYY-MM-DDTHH:mm:ssZ"
      readonly
    />
  </div>
</template>

<style scoped>
.datetime-group {
  display: flex;
  gap: 1rem;
}
.datetime-group > * {
  flex: 1;
}
</style>
