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
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { toRefs, watch, ref } from 'vue'

const props = defineProps<{ datasourceId: string, id?: string }>();
const { datasourceId, id: widgetId } = toRefs(props);

import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:SampleWidget:click', {
        type: 'widget:SampleWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:SampleWidget:right_click', {
        type: 'widget:SampleWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};
const data = ref(null);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

const { update } = useDatasourceRepository(datasourceId, 'string', data)

</script>

<template>
  <div class="widget" @click="emitClick" @contextmenu.prevent="emitRightClick">
    {{ data ?? 'Data do not created' }}
  </div>
</template>

<style scoped>
.widget {
  padding: 12px;
}
</style>
