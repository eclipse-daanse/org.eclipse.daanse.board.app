<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script lang="ts" setup xmlns="http://www.w3.org/1999/html">

import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{ lines: number }>(), { lines: 3 })
const maxlines = computed(() => {
  return (props.lines * 23) + 'px'
})
const expanded = ref(false)

</script>

<template>
  <div :class="{expanded:expanded}" class="aellipsis">
    <slot></slot>
  </div>
  <VaButton
    :hover-opacity="0.4"
    class="mr-6 mb-2"
    hover-behavior="opacity"
    preset="secondary"
    size="small"
    @click="expanded=!expanded"
  >
    <template v-if="expanded">less</template>
    <template v-else>more</template>
  </VaButton>
</template>

<style lang="scss" scoped>
.aellipsis {
  line-height: 23px;
  max-height: v-bind(maxlines);
  text-overflow: ellipsis;
  overflow: hidden;
  color: #777777;

  &.expanded {
    max-height: 100%;
  }
}
</style>
