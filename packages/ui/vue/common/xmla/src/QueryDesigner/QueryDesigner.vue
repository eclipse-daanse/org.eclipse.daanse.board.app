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
import draggable from 'vuedraggable/src/vuedraggable';

interface QueryConfig {
  filters: HierarchyTreeItem[];
  columns: HierarchyTreeItem[];
  rows: HierarchyTreeItem[];
  measures: MeasureTreeItem[];
}

const queryConfig = defineModel<QueryConfig>({ required: true });

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

const changeMeasures = (e: any) => { };

const remove = (
  area: "rows" | "columns" | "filters" | "measures",
  item: any,
  event: any
) => {
  if (!event) {
    const areaContent = queryConfig.value[area];
    const index = areaContent.findIndex((e) => e.id === item.id);

    if (area === "measures") {
      if (areaContent.length === 2) {
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

const configureFilter = (type, element) => {
};

const t = (text) => text;

</script>
<template>
  <div class="queryDesigner">
    <div class="areas">
      <div class="queryDesignerArea">
        <div class="va-title">{{ t('QueryDesigner.filters') }}</div>
        <div class="queryDesingnerArea_container">
          <draggable class="dragArea list-group" :list="queryConfig.filters" group="hierarchies"
            @change="changeItems('filters', $event)" item-key="id">
            <template #item="{ element }">
              <va-chip :model-value="true" closeable @update:model-value="remove('filters', element, $event)">
                <div class="flex items-center chip_caption">
                  <span class="chip_caption_text">
                    {{ element.caption }}
                  </span>
                  <va-icon class="filter-icon ml-2" name="filter_list" size="small" :style="{
                    color: element.filters.enabled ? 'lime' : '',
                  }" @click="configureFilter('filters', element)" />
                </div>
              </va-chip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="va-title">{{ t('QueryDesigner.columns') }}</div>
        <div class="queryDesingnerArea_container">
          <draggable class="dragArea list-group" :list="queryConfig.columns" group="hierarchies"
            @change="changeItems('columns', $event)" item-key="id">
            <template #item="{ element }">
              <va-chip :model-value="true" :closeable="element.type !== 'Values'"
                @update:model-value="remove('columns', element, $event)">
                <div class="flex items-center chip_caption">
                  <span class="chip_caption_text">
                    {{ element.caption }}
                  </span>
                  <va-icon v-if="element.type !== 'Values'" class="filter-icon ml-2" name="filter_list" size="small"
                    :style="{
                      color: element.filters.enabled ? 'lime' : '',
                    }" @click="configureFilter('columns', element)" />
                </div>
              </va-chip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="va-title">{{ t('QueryDesigner.rows') }}</div>
        <div class="queryDesingnerArea_container">
          <draggable class="dragArea list-group" :list="queryConfig.rows" group="hierarchies"
            @change="changeItems('rows', $event)" item-key="id">
            <template #item="{ element }">
              <va-chip :model-value="true" :closeable="element.type !== 'Values'"
                @update:model-value="remove('rows', element, $event)">
                <div class="flex items-center chip_caption">
                  <span class="chip_caption_text">
                    {{ element.caption }}
                  </span>
                  <va-icon v-if="element.type !== 'Values'" class="filter-icon ml-2" name="filter_list" size="small"
                    :style="{
                      color: element.filters.enabled ? 'lime' : '',
                    }" @click="configureFilter('rows', element)" />
                </div>
              </va-chip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="va-title">{{ t('QueryDesigner.data') }}</div>
        <div class="queryDesingnerArea_container">
          <draggable class="dragArea list-group" :list="queryConfig.measures" group="measures"
            @change="changeMeasures($event)" item-key="id">
            <template #item="{ element }">
              <va-chip :model-value="true" closeable @update:model-value="remove('measures', element, $event)">
                {{ element.caption }}
              </va-chip>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

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

      .queryDesingnerArea_container {
        height: 100%;
        width: 100%;

        border: 1px solid #9ea3ac;
        margin: 0.25rem 0 1rem;

        .list-group {
          height: 100%;
          width: 100%;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          align-items: baseline;

          --va-chip-content-display: inline;

          .va-chip {
            max-width: 100%;
          }

          .va-chip__content {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          div.sortable-ghost {
            border: var(--va-chip-border, var(--va-control-border));
            position: var(--va-chip-position);
            border-radius: var(--va-chip-border-radius);
            width: var(--va-chip-width);
            height: var(--va-chip-height);
            min-width: var(--va-chip-min-width);
            min-height: var(--va-chip-min-height);
            padding: 0 0.6rem;
            cursor: var(--va-chip-cursor);
            font-size: var(--va-chip-font-size);
            font-family: var(--va-font-family);
            vertical-align: var(--va-chip-vertical-align);
            color: rgb(255, 255, 255);
            background: #4e81e9;
            line-height: var(--va-chip-content-line-height);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
            display: inline;
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
