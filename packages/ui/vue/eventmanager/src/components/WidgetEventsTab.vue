<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * The events screen, standing in one widget's settings.
 *
 * The same screen and the same rules - this only says which widget it is
 * about. What the overlay hands a contributed tab is the instance and its
 * kind; what the screen wants is a scope, and the two are a rename apart
 * (#1188).
 */
import { computed } from 'vue'
import EventManagerUI from './EventManagerUI.vue'

const props = defineProps<{ widgetId: string; widgetType: string }>()

const scope = computed(() => ({
  context: 'widget' as const,
  contextId: props.widgetId,
  widgetType: props.widgetType,
}))
</script>

<template>
  <EventManagerUI :key="widgetId" :scope="scope" />
</template>
