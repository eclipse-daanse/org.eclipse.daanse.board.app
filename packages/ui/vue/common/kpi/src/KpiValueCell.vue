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
    <span>{{ formattedValue }}</span>
  </td>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useFormat } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const props = defineProps<{
  value: any
}>()
const format = useFormat()

const formattedValue = computed(() => {
  if (props.value == null) return '-'
  return typeof props.value === 'number' ? format.number(props.value) : props.value.toString()
})
</script>
