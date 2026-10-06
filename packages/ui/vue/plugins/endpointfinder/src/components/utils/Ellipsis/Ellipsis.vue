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
import { DButton } from 'org.eclipse.daanse.board.app.ui.vue.controls'

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
  <DButton intent="quiet" size="sm" @click="expanded = !expanded">
    {{ expanded ? 'Weniger' : 'Mehr' }}
  </DButton>
</template>

<style lang="scss" scoped>
.aellipsis {
  line-height: 23px;
  max-height: v-bind(maxlines);
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--color-dim);

  &.expanded {
    max-height: 100%;
  }
}
</style>
