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
import { DCheckbox, DIcon, DInput, DSelect } from "org.eclipse.daanse.board.app.ui.vue.controls";
import TreeView from "../TreeView.vue";
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
      <DInput
        v-model="searchValue"
        class="mr-3"
        placeholder="Suchen"
        style="width: 100%"
      />
      <DSelect
        v-model="searchBy"
        label="Suchen in"
        :options="levels"
        value-key="LEVEL_UNIQUE_NAME"
        label-key="LEVEL_CAPTION"
      />
    </div>
    <div class="mt-3 mb-2">
      <DCheckbox v-model="multipleChoise" label="Mehrere wählen" />
    </div>
    <div class="mb-3" style="overflow: auto; height: 100%">
      <template v-if="multipleChoise">
        <DCheckbox
          v-if="emptySelection"
          v-model="treeData.selectAll"
          class="mt-3 ml-2 selectAll"
          label="Alle wählen"
        />
        <DCheckbox
          v-else
          class="mt-3 ml-2 selectAll"
          :model-value="true"
          indeterminate
          label="Alle wählen"
          @click.prevent.stop="treeData.setSelectAll"
        />
      </template>

      <TreeView
        :key="treeData.key"
        class="filter-tree-view"
        :nodes="treeData.nodes"
        :expanded="treeData.expanded"
        text-by="Caption"
        @update:expanded="treeData.onExpanded"
      >
        <template #content="node">
          <div v-if="node.isLoading" class="flex align-center">
            <span class="spinner" aria-label="Wird geladen" />
          </div>
          <div
            v-else
            :class="['member', { 'member--on': !multipleChoise && node.id === singleSelection.id }]"
            @click.stop.prevent="selectFilter(node)"
          >
            <DCheckbox
              v-if="multipleChoise"
              class="mr-2"
              :model-value="node.partiallySelected ? true : node.selected"
              :indeterminate="!!node.partiallySelected"
              @click.stop.prevent="treeData.changeSelection(node)"
            />
            <div style="width: 100%">{{ node.Caption }}</div>
            <DIcon
              v-if="!multipleChoise && node.id === singleSelection.id"
              class="ml-2"
              name="check"
              size="sm"
              tone="color-accent"
            />
          </div>
        </template>
      </TreeView>
    </div>
  </div>
</template>
<style lang="scss">
.filter-tree-view {
  .member {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid transparent;
  }

  /* The one that is picked, when only one may be. */
  .member--on {
    border-bottom-color: var(--color-accent);
  }

  .spinner {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 2px solid var(--color-divider);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: xmla-spin 700ms linear infinite;
  }
}

@keyframes xmla-spin {
  to { transform: rotate(360deg); }
}
</style>
