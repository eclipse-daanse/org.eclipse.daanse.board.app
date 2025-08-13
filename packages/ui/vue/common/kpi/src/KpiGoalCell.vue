<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<template>
  <td>
    <span>{{ formattedGoal }}</span>
  </td>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  goal: any
}>()

const formattedGoal = computed(() => {
  if (props.goal == null) return '-'
  return typeof props.goal === 'number' ? props.goal.toLocaleString() : props.goal.toString()
})
</script>
