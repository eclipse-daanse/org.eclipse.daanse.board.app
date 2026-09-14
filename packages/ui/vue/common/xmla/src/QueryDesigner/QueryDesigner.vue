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
import { DChip, DIcon } from "org.eclipse.daanse.board.app.ui.vue.controls";
import draggable from 'vuedraggable';
import { ref } from "vue";
import { HierarchyTreeItem, MeasureTreeItem } from '../MetadataTree/TreeViewItems';
import FilterModal from '../Modals/FiltersModal.vue';

interface QueryConfig {
  filters: HierarchyTreeItem[];
  columns: HierarchyTreeItem[];
  rows: HierarchyTreeItem[];
  measures: MeasureTreeItem[];
}

const queryConfig = defineModel<QueryConfig>({ required: true });
const filterModal = ref<any>(null);

const { api, catalog } = defineProps<{ api: any, catalog: any }>();
console.log('QueryDesigner catalog:', catalog);

const addedOperationCache = {
  area: "filters" as "rows" | "columns" | "filters",
  e: null,
  hasCache: false,
  cancelRemoving: false,
};

const changeItems = (area: "rows" | "columns" | "filters", e: any) => {
  const { added, moved, removed } = e;
  if (added) {
    if (area === "filters") {
      if (added.element.type === "Values") {
        addedOperationCache.cancelRemoving = true;
        return;
      }
    }

    const element: HierarchyTreeItem = added.element;
    const newIndex = added.newIndex;
    // const duplicate = this.queryDesignerStore.hierarchyUniqueNames.find(
    //   (e) => e === element.originalItem.HIERARCHY_UNIQUE_NAME
    // );
    const duplicate = false;
    const areaContent = queryConfig.value[area];

    if (duplicate) {
      addedOperationCache.e = e;
      addedOperationCache.area = area;
      addedOperationCache.hasCache = true;
      return;
    }

    const arrayBefore = areaContent.slice(0, newIndex);
    const arrayAfter = areaContent.slice(newIndex + 1);

    const newElement: HierarchyTreeItem = {
      originalItem: element.originalItem,
      id: element.id,
      caption: element.caption,
      children: [],
      type: element.type,
      filters: element.filters || {
        enabled: false,
      },
    };

    queryConfig.value[area] = [
      ...(arrayBefore as HierarchyTreeItem[]),
      newElement,
      ...(arrayAfter as HierarchyTreeItem[]),
    ];
  }
  // Event only occurs when moving item from one area to another
  if (removed) {
    // if (addedOperationCache.cancelRemoving) {
    //   addedOperationCache.cancelRemoving = false;
    //   return;
    // }

    // const areaContent = queryConfig.value[area];
    // const index = areaContent.findIndex((e) => e.id === removed.element.id);
    // areaContent.splice(index, 1);

    // //In "vuedraggable" removing event occurs after adding. We cache adding operation to be performed later, after item is removed from other section.
    // if (addedOperationCache.hasCache) {
    //   addedOperationCache.hasCache = false;
    //   changeItems(
    //     addedOperationCache.area,
    //     addedOperationCache.e
    //   );
    // }
  }
  if (moved) {
    const { element, newIndex, oldIndex } = moved;
    const areaContent = queryConfig.value[area];

    if (newIndex < oldIndex) {
      const arrayBefore = areaContent.slice(0, newIndex);
      const arrayAfter = areaContent.slice(newIndex);
      const index = arrayAfter.findIndex((e) => e.id === element.id);
      arrayAfter.splice(index, 1);

      queryConfig.value[area] = [
        ...arrayBefore,
        element,
        ...arrayAfter,
      ];
    } else {
      const arrayBefore = areaContent.slice(0, newIndex + 1);
      const arrayAfter = areaContent.slice(newIndex + 1);
      const index = arrayBefore.findIndex((e) => e.id === element.id);
      arrayBefore.splice(index, 1);

      queryConfig.value[area] = [
        ...arrayBefore,
        element,
        ...arrayAfter,
      ];
    }
  }
};

const changeMeasures = (e: any) => {
  const { added } = e;

  if (added) {
    const element: MeasureTreeItem = added.element;

    const duplicates = queryConfig.value.measures.filter(
      (e) => e.originalItem.MEASURE_UNIQUE_NAME === element.originalItem.MEASURE_UNIQUE_NAME,
    );

    if (duplicates.length > 1) {
      const areaContent = queryConfig.value['measures'];
      const index = areaContent.findIndex((e) => e.id === element.id);
      areaContent.splice(index, 1);
      return;
    }
  }

  if (queryConfig.value.measures.length > 0) {
    const hasValues = queryConfig.value.columns.some((e: any) => e.type === 'Values') ||
                      queryConfig.value.rows.some((e: any) => e.type === 'Values');
    if (!hasValues) {
      queryConfig.value.columns.push({
        type: "Values",
        id: "Values",
        children: [],
        caption: "Values",
        originalItem: {
          HIERARCHY_UNIQUE_NAME: "Values",
        } as any,
        filters: null as any,
      });
    }
  } else {
    queryConfig.value.columns = queryConfig.value.columns.filter(
      (e) => (e as any).type !== 'Values',
    );
    queryConfig.value.rows = queryConfig.value.rows.filter(
      (e) => (e as any).type !== 'Values',
    );
  }
};

const remove = (
  area: "rows" | "columns" | "filters" | "measures",
  item: any,
  event: any
) => {
  if (!event) {
    const areaContent = queryConfig.value[area];
    const index = areaContent.findIndex((e) => e.id === item.id);

    if (area === "measures") {
      if (areaContent.length === 1) {
        queryConfig.value["rows"] = queryConfig.value[
          "rows"
        ].filter((e) => (e as any).type !== "Values");
        queryConfig.value["columns"] = queryConfig.value[
          "columns"
        ].filter((e) => (e as any).type !== "Values");
      }
    }
    if (index >= 0) {
      areaContent.splice(index, 1);
    }
  }
};

const configureFilter = async (type: string, element: any) => {
  const originalItem = queryConfig.value[type].find(
    (e) => e.id === element.id
  );

  console.log(filterModal.value);
  const { filters } = await filterModal.value.run({
    element,
    filters: element.filters,
    api,
  });

  if (!filters) return;
  if (originalItem) {
    originalItem.filters = filters;
  }
  console.log('configureFilter', originalItem);
};

const t = (text) => text;

</script>
<template>
  <div class="queryDesigner">
    <div class="areas">
      <div class="queryDesignerArea">
        <div class="area-title">{{ t('QueryDesigner.filters') }}</div>
        <div class="queryDesingnerArea_container">
          <draggable class="dragArea list-group" :list="queryConfig.filters" group="hierarchies"
            @change="changeItems('filters', $event)" item-key="id">
            <template #item="{ element }">
              <DChip removable @remove="remove('filters', element, false)">
                <div class="flex items-center chip_caption">
                  <span class="chip_caption_text">
                    {{ element.caption }}
                  </span>
                  <DIcon
                    class="filter-icon ml-2"
                    name="filter_list"
                    size="sm"
                    :tone="element.filters.enabled ? 'color-ok' : 'color-dim'"
                    @click="configureFilter('filters', element)"
                  />
                </div>
              </DChip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="area-title">{{ t('QueryDesigner.columns') }}</div>
        <div class="queryDesingnerArea_container">
          <draggable class="dragArea list-group" :list="queryConfig.columns" group="hierarchies"
            @change="changeItems('columns', $event)" item-key="id">
            <template #item="{ element }">
              <DChip :removable="element.type !== 'Values'" @remove="remove('columns', element, false)">
                <div class="flex items-center chip_caption">
                  <span class="chip_caption_text">
                    {{ element.caption }}
                  </span>
                  <DIcon
                    v-if="element.type !== 'Values'"
                    class="filter-icon ml-2"
                    name="filter_list"
                    size="sm"
                    :tone="element.filters.enabled ? 'color-ok' : 'color-dim'"
                    @click="configureFilter('columns', element)"
                  />
                </div>
              </DChip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="area-title">{{ t('QueryDesigner.rows') }}</div>
        <div class="queryDesingnerArea_container">
          <draggable class="dragArea list-group" :list="queryConfig.rows" group="hierarchies"
            @change="changeItems('rows', $event)" item-key="id">
            <template #item="{ element }">
              <DChip :removable="element.type !== 'Values'" @remove="remove('rows', element, false)">
                <div class="flex items-center chip_caption">
                  <span class="chip_caption_text">
                    {{ element.caption }}
                  </span>
                  <DIcon
                    v-if="element.type !== 'Values'"
                    class="filter-icon ml-2"
                    name="filter_list"
                    size="sm"
                    :tone="element.filters.enabled ? 'color-ok' : 'color-dim'"
                    @click="configureFilter('rows', element)"
                  />
                </div>
              </DChip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="area-title">{{ t('QueryDesigner.data') }}</div>
        <div class="queryDesingnerArea_container">
          <draggable class="dragArea list-group" :list="queryConfig.measures" group="measures"
            @change="changeMeasures($event)" item-key="id">
            <template #item="{ element }">
              <DChip removable @remove="remove('measures', element, false)">
                {{ element.caption }}
              </DChip>
            </template>
          </draggable>
        </div>
      </div>
    </div>
    <FilterModal ref="filterModal" :api="api" :catalog="catalog" />
  </div>
</template>

<style>
</style>

<style scoped>
.queryDesigner {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;

  padding: 1rem;

  .update_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .areas {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .queryDesignerArea {
      display: flex;
      flex-direction: column;
      height: 100%;

      /* Was .va-title, a class the framework defined globally. */
      .area-title {
        font-family: var(--font-sans);
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--color-dim);
      }

      .queryDesingnerArea_container {
        height: 100%;
        width: 100%;

        border: 1px solid var(--color-divider);
        margin: 0.25rem 0 1rem;

        .list-group {
          height: 100%;
          width: 100%;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          align-items: baseline;

          /* What a chip being dragged leaves behind, in the shape of one. */
          div.sortable-ghost {
            padding: 0 0.6rem;
            border: 1px dashed var(--color-outline);
            border-radius: 9999px;
            font-family: var(--font-sans);
            font-size: var(--text-sm);
            color: var(--color-dim);
            background-color: color-mix(in srgb, var(--color-accent) 15%, transparent);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
          }

          .chip_caption {
            width: 100%;
            gap: 4px;

            .chip_caption_text {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .filter-icon {
              cursor: pointer;
              line-height: 14px !important;
            }
          }
        }
      }
    }
  }
}

.split.vertical .queryDesigner {
  .areas {
    flex-direction: row;
    flex-wrap: wrap;

    .queryDesignerArea {
      width: 50%;
      height: 50%;
      padding: 5px;
    }
  }
}
</style>
