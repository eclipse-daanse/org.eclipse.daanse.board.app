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

const props = defineProps<{ datasourceId: string }>()
const { datasourceId } = toRefs(props)
const data = ref(null as any);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

const { update } = useDatasourceRepository(datasourceId, 'object', data)

</script>

<template>
  <div class="widget" >
    <div v-if="data && data.items" v-for="item in data.items" class="preview-item">
        <div class="preview-item-title">{{ item.title }}</div>
        <div v-html="item.content" class="preview-item-content">
        </div>
    </div>
  </div>
</template>

<style scoped>
.widget {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.preview-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.preview-item {
  border: 1px solid #000;
  border-radius: 8px;
}

.preview-item-title {
  background-color: #f0f0f0;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 8px;
  border-radius: 8px 8px 0 0;
}

.preview-item-content {
  padding: 8px;
}
</style>
