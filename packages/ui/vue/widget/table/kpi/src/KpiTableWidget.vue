<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script lang="ts" setup>
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { toRefs, ref, watch, computed } from 'vue';
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"

const { wrapParameters } = useVariableRepository();

const props = defineProps<{ datasourceId: string, config: any }>();
const { datasourceId, config } = toRefs(props);
const data = ref(null as any);

watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})

const {
    headerBackground,
    statusVisualType,
    trendVisualType
} = wrapParameters({
    headerBackground: computed(() => config.value.headerBackground || '#f0f0f0'),
    statusVisualType: computed(() => config.value.statusVisualType || 'badge'),
    trendVisualType: computed(() => config.value.trendVisualType || 'badge')
});

const { update } = useDatasourceRepository(datasourceId, 'DataTable', data)
</script>
<template>
    <VaDataTable class="table" :items="data ? data.items : []" sticky-header
        :style="`--va-data-table-thead-background--computed: ${headerBackground};`"
        :columns="[
          { key: 'name' },
          { key: 'caption' },
          { key: 'value' },
          { key: 'goal' },
          { key: 'status' },
          { key: 'trend' }
        ]"
    >
        <template #cell(status)="{ value }">
            <div class="flex items-center gap-2">
                <template v-if="statusVisualType === 'Lights'">
                    <span>
                        {{ value > 0.5 ? '🟢' : '🛑' }}
                    </span>
                </template>
                <template v-else-if="statusVisualType === 'Emoji'">
                    <span>
                        {{ value > 0.5 ? '😊' : '☹️' }}
                    </span>
                </template>
                <template v-else>
                    <VaBadge :color="value > 0.5 ? 'success' : 'danger'" :text="value"></VaBadge>
                </template>
            </div>
        </template>
        <template #cell(trend)="{ value }">
            <template v-if="trendVisualType === 'Chart'">
                <span>
                    {{ value > 0.5 ? '📈' : '📉' }}
                </span>
            </template>
            <template v-else-if="trendVisualType === 'Emoji'">
                <span>
                    {{ value > 0.5 ? '😊' : '☹️' }}
                </span>
            </template>
            <template v-else-if="trendVisualType === 'Arrow'">
                <span>
                    {{ value > 0.5 ? '⬆️' : '⬇️' }}
                </span>
            </template>
            <template v-else>
                <VaBadge :color="value > 0.5 ? 'success' : 'danger'" :text="value"></VaBadge>
            </template>
        </template>
    </VaDataTable>
</template>

<style scoped>
.filters {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    flex-grow: 0;
}

.table_container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.table_container .pagination {
    flex-grow: 0;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: end;
}

.table_container .pagination .page_input {
    justify-self: start;
}

.table_container .table {
    flex-grow: 1;
    flex-shrink: 1;
}

.loading {
    display: flex;
    height: 100%;
}
</style>
