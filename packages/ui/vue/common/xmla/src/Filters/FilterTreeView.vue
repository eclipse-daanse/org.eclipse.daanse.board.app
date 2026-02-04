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
import { useFilterTreeDataSource } from "../Composables/filterTreeDataSource";
import { useSearchResultTreeData } from "../Composables/searchResultTreeData";
import { debounce } from "lodash";
import { computed, onMounted, ref, watch } from "vue";

type RootHierarchy = any;

const props = defineProps<{ rootHierarchy: RootHierarchy, api: any, catalog: any }>();
const emit = defineEmits<{ (e: "set-selection", payload: any): void }>();

const {
  tree,
  triggerExpanded,
  selectAll,
  selectedItems,
  deselectedItems,
  changeSelection,
  setSelectAll,
} = await useFilterTreeDataSource(props.rootHierarchy, props.api, props.catalog);

const {
  filteredTree,
  levels,
  searchBy,
  searchValue,
  triggerExpandedWithSearch,
  expanded,
  search,
  searchSelectAll,
  searchSelectedItems,
  searchDeselectedItems,
  searchSetSelectAll,
  searchChangeSelection,
} = await useSearchResultTreeData(props.rootHierarchy, props.api);

const treeData = ref({
  nodes: tree,
  onExpanded: triggerExpanded,
  setSelectAll: setSelectAll,
  changeSelection: changeSelection,
  selectAll: selectAll,
  key: "Tree",
  expanded: ref<string[]>([]),
});

console.log('tree in <FilterTreeView>', tree);

const onSearch = debounce((val: string) => {
  if (val && val.length > 0) {
    treeData.value = {
      nodes: filteredTree,
      onExpanded: triggerExpandedWithSearch,
      setSelectAll: searchSetSelectAll,
      changeSelection: searchChangeSelection,
      selectAll: searchSelectAll,
      key: "SearchTree",
      expanded: expanded,
    };
    if (val.length > 1) {
      search();
    }
  } else {
    treeData.value = {
      nodes: tree,
      onExpanded: triggerExpanded,
      setSelectAll: setSelectAll,
      changeSelection: changeSelection,
      selectAll: selectAll,
      key: "Tree",
      expanded: ref<string[]>([]),
    };
  }
}, 500);

watch(searchValue, (val) => onSearch(val));

// selection state
const multipleChoise = ref(
  props.rootHierarchy?.filters?.multipleChoise ?? false
);
const singleSelection = ref({ id: null });

// expose resetSelection as function
const resetSelection = () => {
  singleSelection.value = { id: null };
}
defineExpose({ resetSelection });

// emit selection changes to parent (kebab-case: "set-selection")
const emitSelectFunc = () => {
  if (searchValue.value) {
    emit("set-selection", {
      enabled: true,
      multipleChoise: multipleChoise.value,
      selectedItem: singleSelection.value,
      selectAll: searchSelectAll.value,
      deselectedItems: searchDeselectedItems.value,
      selectedItems: searchSelectedItems.value,
      originalItem: props.rootHierarchy.item,
    });
  } else {
    emit("set-selection", {
      enabled: true,
      multipleChoise: multipleChoise.value,
      selectedItem: singleSelection.value,
      selectAll: selectAll.value,
      deselectedItems: deselectedItems.value,
      selectedItems: selectedItems.value,
      originalItem: props.rootHierarchy.item,
    });
  }
};

watch(multipleChoise, emitSelectFunc);
watch(selectAll, emitSelectFunc);
watch(selectedItems, emitSelectFunc);
watch(deselectedItems, emitSelectFunc);
watch(singleSelection, emitSelectFunc);
watch(searchSelectAll, emitSelectFunc);
watch(searchDeselectedItems, emitSelectFunc);
watch(searchSelectedItems, emitSelectFunc);

const emptySelection = computed(() => {
  if (searchValue.value) {
    return (
      !searchSelectedItems.value.length && !searchDeselectedItems.value.length
    );
  } else {
    return !selectedItems.value.length && !deselectedItems.value.length;
  }
});

function selectFilter(e: any) {
  singleSelection.value = e;
}

onMounted(() => {
  if (props.rootHierarchy.filters.enabled && !props.rootHierarchy.filters.multipleChoise && props.rootHierarchy.filters.selectedItem?.id) {
    singleSelection.value = props.rootHierarchy.filters.selectedItem;
  }
})
</script>
<template>
  <div class="flex" style="flex-direction: column; width: 100%">
    <div class="flex">
      <va-input
        v-model="searchValue"
        class="mr-3"
        clearable
        placeholder="Search value"
        style="width: 100%"
      />
      <va-select
        v-model="searchBy"
        label="Search by"
        :options="levels"
        value-by="LEVEL_UNIQUE_NAME"
        text-by="LEVEL_CAPTION"
        prevent-overflow
      />
    </div>
    <div class="mt-3 mb-2">
      <va-checkbox
        v-model="multipleChoise"
        label="Select Multiple Items"
        left-label
      />
    </div>
    <div class="mb-3" style="overflow: auto; height: 100%">
      <template v-if="multipleChoise">
        <template v-if="emptySelection">
          <va-checkbox
            class="mt-3 ml-2 selectAll"
            v-model="treeData.selectAll"
            label="Select all"
          />
        </template>
        <template v-else>
          <va-checkbox
            class="mt-3 ml-2 selectAll"
            :model-value="true"
            label="Select all"
            checked-icon="remove"
            @click.prevent.stop="treeData.setSelectAll"
          />
        </template>
      </template>
      <va-tree-view
        class="filter-tree-view"
        :nodes="treeData.nodes"
        @update:expanded="treeData.onExpanded"
        :expanded="treeData.expanded"
        :key="treeData.key"
      >
        <template #content="node">
          <div v-if="node.isLoading" class="flex align-center">
            <va-progress-circle indeterminate size="small" />
          </div>
          <div
            v-else
            class="flex"
            style="align-items: center"
            :style="
              !multipleChoise && node.id === singleSelection.id
                ? `border-bottom: 1px solid var(--va-primary);`
                : 'border-bottom: 1px solid transparent'
            "
            @click.stop.prevent="selectFilter(node)"
          >
            <template v-if="multipleChoise && !node.partiallySelected">
              <va-checkbox
                class="mr-2"
                :model-value="node.selected"
                @click.stop.prevent="treeData.changeSelection(node)"
              />
            </template>
            <template v-else-if="multipleChoise && node.partiallySelected">
              <va-checkbox
                class="mr-2"
                :model-value="true"
                checked-icon="remove"
                @click.stop.prevent="treeData.changeSelection(node)"
              />
            </template>
            <div style="width: 100%">{{ node.Caption }}</div>
            <va-icon
              v-if="!multipleChoise && node.id === singleSelection.id"
              class="ml-2"
              name="check"
              color="primary"
              size="small"
            />
          </div>
        </template>
      </va-tree-view>
    </div>
  </div>
</template>
<style lang="scss">
.filter-tree-view {
  .va-tree-node-root {
    padding-top: 0;
    padding-bottom: 0;
  }

  .va-tree-node-content__body > div {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}

.selectAll label {
  font-weight: 600;
}
</style>
