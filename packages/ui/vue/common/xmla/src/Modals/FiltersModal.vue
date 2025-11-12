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
  close({ filters: filterConfigured.value });
}

function cancel() {
  close({});
}

function resetSelection() {
  filterTreeView.value?.resetSelection();
}
</script>

<template>
  <va-modal
    :modelValue="isOpened"
    no-padding
    class="filter-modal"
    @ok="ok"
    fixed-layout
  >
    <template #content="{ ok }">
      <va-card-title class="va-h6">Enable any filters:</va-card-title>
      <va-card-content>
        <Suspense>
          <FilterTreeView
            ref="filterTreeView"
            :rootHierarchy="rootHierarchy"
            :api="api"
            :catalog="catalog"
            @set-selection="setSelection"
          ></FilterTreeView>
        </Suspense>
      </va-card-content>
      <va-card-actions class="actions">
        <div class="action-buttons">
          <va-button @click="ok" color="primary">Confirm</va-button>
          <va-button @click="cancel" color="secondary">Cancel</va-button>
        </div>
        <div
          v-if="!multipleChoise && currentlySelected && currentlySelected.id"
        >
          <div>Currently selected: {{ currentlySelected.Caption }}</div>
          <div class="reset-button" @click="resetSelection">
            Reset selection
          </div>
        </div>
      </va-card-actions>
    </template>
  </va-modal>
</template>
<style lang="scss">
.filter-modal {
  .va-modal--fixed-layout .va-modal__inner {
    height: calc(100vh - 2rem);
  }

  .va-modal__container {
    width: 100%;
  }

  .va-modal__dialog {
    margin: auto;
  }

  .va-modal__inner > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .va-card__content {
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .va-card__content > div {
    flex-direction: column;
    overflow: hidden;
    width: 100%;
  }

  .actions {
    display: flex;
    justify-content: space-between !important;
  }

  .reset-button {
    margin-top: 0.25rem;
    color: var(--va-primary);
    text-decoration: underline;
    user-select: none;
    cursor: pointer;
  }
}
</style>
