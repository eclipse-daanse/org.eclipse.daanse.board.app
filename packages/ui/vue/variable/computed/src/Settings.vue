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
import { DInput } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const variableSettings = defineModel<any>()
</script>

<template>
  <div class="settings">
    <DInput v-model="variableSettings.name" label="Name" placeholder="Wie es gelesen wird" />
    <DInput
      v-model="variableSettings.expression"
      label="Ausdruck"
      placeholder="Woraus der Wert gerechnet wird"
    />
  </div>
</template>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
