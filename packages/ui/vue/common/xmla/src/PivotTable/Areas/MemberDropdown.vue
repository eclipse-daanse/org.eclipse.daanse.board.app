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

defineEmits([
  "drilldown",
  "drillup",
  "openMemberProperties",
  "showMemberProperties",
  "hideMemberProperties",
]);
defineProps(["drillupDisabled", "propertiesShown"]);

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

    <button type="button" @click="$emit('drilldown')">
      {{ t('PivotTable.drillDownButton') }}
    </button>
    <button v-if="!drillupDisabled" type="button" @click="$emit('drillup')">
      {{ t('PivotTable.drillUpButton') }}
    </button>
    <button v-if="!drillupDisabled" type="button" @click="$emit('openMemberProperties')">
      {{ t('PivotTable.openButton') }}
    </button>
    <button v-if="propertiesShown" type="button" @click="$emit('hideMemberProperties')">
      {{ t('PivotTable.hideButton') }}
    </button>
    <button v-else type="button" @click="$emit('showMemberProperties')">
      {{ t('PivotTable.showButton') }}
    </button>
  </ContextMenu>
</template>
