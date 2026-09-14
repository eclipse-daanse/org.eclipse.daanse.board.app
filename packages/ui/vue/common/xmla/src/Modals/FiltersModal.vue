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
import { DButton, DModal } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { ref } from "vue";
import { usePromisifiedModal } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import FilterTreeView from "../Filters/FilterTreeView.vue";

type SelectionPayload = {
  enabled: boolean;
  multipleChoise: boolean;
  selectAll: boolean;
  selectedItem: any;
  selectedItems: any[];
  deselectedItems: any[];
  originalItem: any;
};

const filterConfigured = ref<any>({});
const rootHierarchy = ref<any>({});
const multipleChoise = ref<boolean>(false);
const currentlySelected = ref<any>(null);
const filterTreeView = ref<InstanceType<typeof FilterTreeView> | null>(null);
const { api, catalog } = defineProps<{ api: any, catalog: any }>();

const reset = () => {
  filterConfigured.value = {};
};

const opened = ({ element }: { element: any }) => {
  rootHierarchy.value = {
    item: element.originalItem,
    filters: element.filters,
  };

  const initialFilters = element.filters;
  multipleChoise.value = initialFilters.multipleChoise;

  if (initialFilters.multipleChoise) {
    filterConfigured.value = {
      enabled: initialFilters.enabled,
      multipleChoise: initialFilters.multipleChoise,
      selectAll: initialFilters.selectAll,
      selectedItems: initialFilters.selectedItems,
      deselectedItems: initialFilters.deselectedItems,
      originalItem: initialFilters.originalItem,
    };
  } else {
    filterConfigured.value = {
      enabled: initialFilters.enabled,
      multipleChoise: initialFilters.multipleChoise,
      selectedItem: initialFilters.selectedItem,
      originalItem: initialFilters.originalItem,
    };

    currentlySelected.value = initialFilters.selectedItem;
  }
};

const { isOpened, run, close } = usePromisifiedModal(reset, opened);

defineExpose({ run });

const setSelection = ({
  enabled,
  multipleChoise: multi,
  selectedItem,
  selectAll,
  selectedItems,
  deselectedItems,
  originalItem,
}: SelectionPayload) => {
  if (multi) {
    filterConfigured.value = {
      enabled,
      multipleChoise: multi,
      selectAll,
      selectedItems,
      deselectedItems,
      originalItem,
    };
  } else {
    filterConfigured.value = {
      enabled,
      multipleChoise: multi,
      selectedItem,
      originalItem,
    };

    currentlySelected.value = selectedItem;
  }
};

function ok() {
  const composedFilters = filterConfigured.value;

  if (filterConfigured.value.enabled && !filterConfigured.value.multipleChoise && !filterConfigured.value.selectedItem.id) {
    close({
      filters: {
        enabled: false
      }
    })
  }

  close({ filters: filterConfigured.value });
}

function cancel() {
  close({});
}

function resetSelection() {
  const exposed = filterTreeView.value?.$.exposed as any;
  exposed['resetSelection']();
}
</script>

<template>
  <DModal :model-value="isOpened" size="lg" @cancel="cancel">
    <template #header>
      <h2 class="filter-modal__title">Filter setzen</h2>
    </template>

    <Suspense>
      <FilterTreeView
        ref="filterTreeView"
        :rootHierarchy="rootHierarchy"
        :api="api"
        :catalog="catalog"
        @set-selection="setSelection"
      />
    </Suspense>

    <template #actions>
      <div v-if="!multipleChoise && currentlySelected && currentlySelected.id" class="chosen">
        Gewählt: {{ currentlySelected.Caption }}
        <button type="button" class="reset-button" @click="resetSelection">zurücksetzen</button>
      </div>
      <DButton intent="quiet" @click="cancel">Abbrechen</DButton>
      <DButton intent="primary" @click="ok">Übernehmen</DButton>
    </template>
  </DModal>
</template>

<style lang="scss" scoped>
.filter-modal__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: 600;
}

.chosen {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: auto;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.reset-button {
  padding: 0;
  border: 0;
  background: none;
  color: var(--color-accent);
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
}
</style>
