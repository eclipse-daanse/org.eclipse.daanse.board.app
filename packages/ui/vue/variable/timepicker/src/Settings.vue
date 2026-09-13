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
/*
 * A moment in time, asked for once.
 *
 * It used to be three fields for one value: a date picker, a time picker,
 * and the ISO string they wrote, shown read-only underneath. One
 * datetime-local field is the same question, and the browser brings its own
 * calendar and clock to answer it with.
 */
import { computed } from 'vue'
import { DInput } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const variableSettings = defineModel<any>()

/**
 * The stored value is ISO 8601 in UTC; the field speaks local time.
 *
 * A datetime-local input carries "YYYY-MM-DDTHH:mm" with no zone, so this
 * converts in both directions rather than handing the field a UTC string
 * and calling the shift a rounding error.
 */
const moment = computed<string>({
  get() {
    const stored = variableSettings.value?.datetime
    if (!stored) return ''
    const at = new Date(stored)
    if (Number.isNaN(at.getTime())) return ''
    const pad = (n: number) => String(n).padStart(2, '0')
    return (
      `${at.getFullYear()}-${pad(at.getMonth() + 1)}-${pad(at.getDate())}` +
      `T${pad(at.getHours())}:${pad(at.getMinutes())}`
    )
  },
  set(next: string) {
    if (!next) {
      variableSettings.value.datetime = ''
      return
    }
    const at = new Date(next)
    variableSettings.value.datetime = Number.isNaN(at.getTime()) ? '' : at.toISOString()
  },
})
</script>

<template>
  <div class="settings">
    <DInput v-model="variableSettings.name" label="Name" placeholder="Wie es gelesen wird" />
    <DInput v-model="moment" label="Zeitpunkt" type="datetime-local" />
  </div>
</template>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
