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
const data = ref(null);

watch(datasourceId, (oldVal, newVal) => {
  update(oldVal, newVal);
})

const { update } = useDatasourceRepository(datasourceId, 'string', data)

</script>

<template>
  <div class="widget">
    {{ data ?? 'Data do not created' }}
  </div>
</template>

<style scoped>
.widget {
  padding: 12px;
}
</style>
