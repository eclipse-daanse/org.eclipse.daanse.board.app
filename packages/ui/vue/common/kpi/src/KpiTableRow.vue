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
  <tr :class="{
    'folder-row': isFolder,
    'kpi-row': !isFolder,
    'expandable': hasChildren,
    'expanded': isExpanded,
    'selected': isSelected
  }" @click="toggleExpand">
    <td v-if="showSelection" class="selection-cell" @click.stop>
      <input v-if="!isFolder" type="checkbox" :checked="isSelected" @change="handleSelectionChange" />
    </td>
    <td :style="{ paddingLeft: `${level * 20 + 12}px` }">
      <span v-if="hasChildren" class="expand-icon">{{ isExpanded ? '▼' : '▶' }}</span>
      <span>{{ displayName }}</span>
      <span v-if="hasChildren && !isFolder" class="child-count">({{ children.length }})</span>
    </td>

    <template v-if="isFolder">
      <td :colspan="showSelection ? 4 : 4" class="folder-cell">{{ children.length }} items</td>
    </template>
    <template v-else>
      <KpiValueCell :value="props.item.value" />
      <KpiGoalCell :goal="props.item.goal" />
      <KpiStatusCell :status="props.item.status" />
      <KpiTrendCell :trend="props.item.trend" />
    </template>
  </tr>

  <!-- Children rows -->
  <template v-if="hasChildren && isExpanded">
    <KpiTableRow v-for="(child, index) in children" :key="index" :item="child" :level="level + 1"
      :selected-items="selectedItems" :show-selection="showSelection" @toggle-select="$emit('toggle-select', $event)" />
  </template>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import KpiValueCell from './KpiValueCell.vue'
import KpiGoalCell from './KpiGoalCell.vue'
import KpiStatusCell from './KpiStatusCell.vue'
import KpiTrendCell from './KpiTrendCell.vue'

const props = defineProps<{
  item: any
  level: number
  selectedItems?: string[]
  showSelection?: boolean
}>()

const emit = defineEmits<{
  'toggle-select': [kpiName: string]
}>()

const isExpanded = ref(false)

const isFolder = computed(() => props.item.type === 'Folder')
const hasChildren = computed(() => props.item.children?.length > 0)
const children = computed(() => props.item.children || [])
const displayName = computed(() =>
  isFolder.value ? props.item.name : (props.item.caption || props.item.name || 'Unknown KPI')
)

const toggleExpand = () => {
  if (props.item.children && props.item.children.length > 0)
    isExpanded.value = !isExpanded.value
}

const formatValue = (value: any) => {
  if (value == null) return '-'
  return typeof value === 'number' ? value.toLocaleString() : value.toString()
}

const isSelected = computed(() => {
  const selected = props.selectedItems || []
  return !isFolder.value && selected.includes(props.item.name)
})

const handleSelectionChange = () => {
  if (!isFolder.value) {
    emit('toggle-select', props.item.name)
  }
}
</script>

<style scoped>
.folder-row {
  background-color: #f8f9fa;
  font-weight: 500;
}

.expandable {
  cursor: pointer;
}

.expandable:hover {
  background-color: #f8f9fa;
}

.expanded {
  background-color: #e3f2fd;
}

.expand-icon {
  width: 16px;
  margin-right: 8px;
  font-size: 12px;
}

.folder-cell {
  color: #6c757d;
  text-align: right;
  font-style: italic;
}

.child-count {
  margin-left: 8px;
  font-size: 0.875em;
  color: #6c757d;
}

.selection-cell {
  width: 40px;
  text-align: center;
  padding: 8px 4px;
}

.selected {
  background-color: #e3f2fd;
}
</style>
