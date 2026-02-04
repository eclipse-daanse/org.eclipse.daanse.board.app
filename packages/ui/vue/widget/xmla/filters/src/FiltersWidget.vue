
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
import { toRefs, watch, ref, onMounted } from 'vue'
import { FiltersModal } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';

const props = defineProps<{ datasourceId: string, config: any }>()
const { datasourceId } = toRefs(props)
const rows = ref<any[]>([]);
const columns = ref<any[]>([]);
const filters = ref<any[]>([]);
const data = ref(null);
const api = ref(null);
const catalog = ref(null);
const filterModal = ref<InstanceType<typeof FiltersModal> | null>(null);

const updateFn = async () => {
  const hierarchies = getHierarchies();

  api.value = await getApi();

  rows.value = hierarchies.rows;
  columns.value = hierarchies.columns;
  filters.value = hierarchies.filters;
}

watch(datasourceId, async (newVal, oldVal) => {
  update(newVal, oldVal);

  const hierarchies = getHierarchies();

  api.value = await getApi();

  rows.value = hierarchies.rows;
  columns.value = hierarchies.columns;
  filters.value = hierarchies.filters;
})

const getApi = async () => {
  const datasource = getDatasourceInstance();
  if (!datasource) {
    console.warn('No datasource instance available');
    return null;
  }
  const connection = datasource.getConnection();
  const api = await connection.getApi();
  catalog.value = connection.catalogName;

  return api;
}

const getHierarchies = () => {
  const datasource = getDatasourceInstance();

  if (!datasource) {
    console.warn('No datasource instance available');
    return {
      rows: [],
      columns: [],
      filters: []
    };
  }

  try {
    const rows = datasource.requestParams.rows.map((row: any) => {
      const filtersCaption = row.filters.enabled ?
        (row.filters.multipleChoise ?
          (
            row.filters.selectAll ?
              `Multiple choice filter, all selected` :
              `Multiple choice filter (${row.filters.selectedItems.length} selected, ${row.filters.deselectedItems.length} deselected)`
          ) :
          `Single choice filter (${row.filters.selectedItem ? row.filters.selectedItem.Caption : 'none selected'})`
        ) :
        'No filter applied';

      return {
        ...row,
        filtersCaption
      }
    });
    const columns = datasource.requestParams.columns.map((col: any) => {
      const filtersCaption = col.filters.enabled ?
        (col.filters.multipleChoise ?
          (
            col.filters.selectAll ?
              `Multiple choice filter, all selected` :
              `Multiple choice filter (${col.filters.selectedItems.length} selected, ${col.filters.deselectedItems.length} deselected)`
          ) :
          `Single choice filter (${col.filters.selectedItem ? col.filters.selectedItem.Caption : 'none selected'})`
        ) :
        'No filter applied';

      return {
        ...col,
        filtersCaption
      }
    });
    const filters = datasource.requestParams.filters.map((filter: any) => {
      const filtersCaption = filter.filters.enabled ?
        (filter.filters.multipleChoise ?
          (
            filter.filters.selectAll ?
              `Multiple choice filter, all selected` :
              `Multiple choice filter (${filter.filters.selectedItems.length} selected, ${filter.filters.deselectedItems.length} deselected)`
          ) :
          `Single choice filter (${filter.filters.selectedItem ? filter.filters.selectedItem.Caption : 'none selected'})`
        ) :
        'No filter applied';

      return {
        ...filter,
        filtersCaption
      }
    });

    return {
      rows,
      columns,
      filters
    };
  } catch (error) {
    console.error('Error retrieving hierarchies:', error);
    return {
      rows: [],
      columns: [],
      filters: []
    };
  }
}

onMounted(async () => {
  const hierarchies = getHierarchies();

  api.value = await getApi();

  rows.value = hierarchies.rows;
  columns.value = hierarchies.columns;
  filters.value = hierarchies.filters;

  props.config.settings.showFilters = props.config.settings.showFilters ?? true
  props.config.settings.showRows = props.config.settings.showRows ?? true
  props.config.settings.showColumns = props.config.settings.showColumns ?? true
});

const { update, getDatasourceInstance, callEvent } = useDatasourceRepository(datasourceId, 'string', data, [ updateFn ]);

const configureFilter = async (type: string, element: any) => {

  if (!filterModal.value) {
    console.warn('Filter modal is not available');
    return;
  }

  const { filters } = await filterModal.value.run({
    element,
    filters: element.filters,
    api,
  }) as any;

  if (!filters) return;

  callEvent('filterChange', {
    area: type,
    id: element.id,
    filters
  })
}
</script>

<template>
  <div class="widget">
    <div class="hierarchies-section" v-if="props.config.settings.showRows && rows.length > 0">
      <h4>Rows:</h4>
      <div v-for="hierarchy in rows" :key="hierarchy.originalItem.HIERARCHY_UNIQUE_NAME" class="hierarchy-item">
        <p class="hierarchy-caption">{{ hierarchy.originalItem.HIERARCHY_NAME }} ({{ hierarchy.originalItem.HIERARCHY_UNIQUE_NAME }})</p>
        <p class="filter-caption">{{ hierarchy.filtersCaption }}</p>
        <va-icon class="filter-icon ml-2" name="filter_list" size="small"
          :style="{
            color: hierarchy.filters.enabled ? 'lime' : '',
          }" @click="configureFilter('rows', hierarchy)" />
      </div>
    </div>
    <div class="hierarchies-section" v-if="props.config.settings.showColumns && columns.length > 0">
      <h4>Columns:</h4>
      <div v-for="hierarchy in columns" :key="hierarchy.originalItem.HIERARCHY_UNIQUE_NAME" class="hierarchy-item">
        <p class="hierarchy-caption">{{ hierarchy.originalItem.HIERARCHY_NAME }} ({{ hierarchy.originalItem.HIERARCHY_UNIQUE_NAME }})</p>
        <p class="filter-caption">{{ hierarchy.filtersCaption }}</p>
        <va-icon class="filter-icon ml-2" name="filter_list" size="small"
          :style="{
            color: hierarchy.filters.enabled ? 'lime' : '',
          }" @click="configureFilter('columns', hierarchy)" />
      </div>
    </div>
    <div class="hierarchies-section" v-if="props.config.settings.showFilters && filters.length > 0">
      <h4>Filters:</h4>
      <div v-for="hierarchy in filters" :key="hierarchy.originalItem.HIERARCHY_UNIQUE_NAME" class="hierarchy-item">
        <p class="hierarchy-caption">{{ hierarchy.originalItem.HIERARCHY_NAME }} ({{ hierarchy.originalItem.HIERARCHY_UNIQUE_NAME }})</p>
        <p class="filter-caption">{{ hierarchy.filtersCaption }}</p>
        <va-icon class="filter-icon ml-2" name="filter_list" size="small"
          :style="{
            color: hierarchy.filters.enabled ? 'lime' : '',
          }" @click="configureFilter('filters', hierarchy)" />
      </div>
    </div>
  </div>
  <template v-if="api && catalog">
    <FiltersModal ref="filterModal" :api="api" :catalog="catalog" />
  </template>
</template>

<style scoped>
.widget {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hierarchies-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hierarchies-section h4 {
  font-weight: 600;
}

.hierarchy-item {
  width: 100%;
  padding: 4px 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  margin-bottom: 4px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
}

.hierarchy-item .filter-caption {
  font-style: italic;
  color: #666;
}

.hierarchy-item .hierarchy-caption {
  flex-grow: 1;
}
</style>
