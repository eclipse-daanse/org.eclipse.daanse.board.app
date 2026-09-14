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
import type { TinyEmitter } from "tiny-emitter";
import { inject, ref, watch } from "vue";
import { v4 } from "uuid";
import ContextMenu from "./ContextMenu.vue";
// import { useI18n } from 'vue-i18n';

defineEmits(["openCellProperties", "drillthrough"]);

// const { t } = useI18n();
const t = (string: string) => string;
const opened = ref(false);
const eventBus = inject("pivotTableEventBus") as TinyEmitter;
const uid = "id" + v4();

eventBus.on("DropdownOpened", (openedUid: string) => {
  if (uid === openedUid) return;
  opened.value = false;
});

watch(opened, () => {
  if (opened.value) {
    eventBus.emit("DropdownOpened", uid);
  }
});
</script>
<template>
  <ContextMenu v-model="opened">
    <template #anchor>
      <slot />
    </template>

    <button type="button" @click="$emit('openCellProperties')">
      {{ t('PivotTable.openCellPropertiesButton') }}
    </button>
    <button type="button" @click="$emit('drillthrough')">
      {{ t('PivotTable.drillthroughButton') }}
    </button>
  </ContextMenu>
</template>
