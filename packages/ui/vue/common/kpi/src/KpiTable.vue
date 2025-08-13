<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<template>
  <table class="va-table">
    <thead>
      <tr>
        <th v-if="showSelection" class="selection-header">
          <input type="checkbox" :checked="isAllSelected" :indeterminate="isIndeterminate" @change="toggleSelectAll" />
        </th>
        <th>Name</th>
        <th>Value</th>
        <th>Goal</th>
        <th>Status</th>
        <th>Trend</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in tableData" :key="index">
        <KpiTableRow :item="item" :level="0" :selected-items="selectedItems" :show-selection="showSelection"
          @toggle-expand="handleToggleExpand" @toggle-select="handleToggleSelect" />
      </template>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import KpiTableRow from './KpiTableRow.vue'

const props = defineProps<{
  tableData: any[];
  selectedItems?: string[];
  showSelection?: boolean;
}>();

const emit = defineEmits<{
  'update:selectedItems': [selectedItems: string[]]
}>()

const expandedItems = ref(new Set<string>())

const getAllKpiNames = (items: any[]): string[] => {
  console.log('Extracting KPI names from items:', items)
  const kpiNames: string[] = []

  const traverse = (nodes: any[]) => {
    nodes.forEach(node => {
      if (node.type === 'KPI') {
        kpiNames.push(node.name)
      }
      if (node.children?.length > 0) {
        traverse(node.children)
      }
    })
  }

  if (items && items.length > 0) {
    traverse(items)
  }

  return kpiNames
}

const allKpiNames = computed(() => getAllKpiNames(props.tableData))

const isAllSelected = computed(() => {
  const selected = props.selectedItems || []
  return allKpiNames.value.length > 0 &&
    allKpiNames.value.every(name => selected.includes(name))
})

const isIndeterminate = computed(() => {
  console.log('All KPI Names:', allKpiNames.value)
  const selected = props.selectedItems || []
  const selectedCount = allKpiNames.value.filter(name => selected.includes(name)).length
  return selectedCount > 0 && selectedCount < allKpiNames.value.length
})

const handleToggleExpand = (itemKey: string) => {
  if (expandedItems.value.has(itemKey)) {
    expandedItems.value.delete(itemKey)
  } else {
    expandedItems.value.add(itemKey)
  }
}

const handleToggleSelect = (kpiName: string) => {
  const currentSelection = props.selectedItems || []
  const newSelection = [...currentSelection]
  const index = newSelection.indexOf(kpiName)

  if (index === -1) {
    newSelection.push(kpiName)
  } else {
    newSelection.splice(index, 1)
  }

  emit('update:selectedItems', newSelection)
}

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    emit('update:selectedItems', [])
  } else {
    emit('update:selectedItems', [...allKpiNames.value])
  }
}
</script>

<style scoped>
.va-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

.kpi-table th {
  background-color: #f5f5f5;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  font-weight: 600;
}

.kpi-table td {
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}

.kpi-table tr:hover {
  background-color: #f9f9f9;
}

.selection-header {
  width: 40px;
  text-align: center;
}
</style>
