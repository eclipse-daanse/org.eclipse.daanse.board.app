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
import { computed, nextTick, ref } from "vue";
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { HierarchyTreeItem, MeasureTreeItem, TreeItemTypesEnum } from '../MetadataTree/TreeViewItems';
import FilterModal from '../Modals/FiltersModal.vue';
import { carriesTreeItem, readTreeItem } from './treeItemTransfer';

interface QueryConfig {
  filters: HierarchyTreeItem[];
  columns: HierarchyTreeItem[];
  rows: HierarchyTreeItem[];
  measures: MeasureTreeItem[];
  /** Axis 2 and 3: which slice of the result the table shows. */
  pages?: HierarchyTreeItem[];
  chapters?: HierarchyTreeItem[];
}

type Area = "rows" | "columns" | "filters" | "pages" | "chapters";
const AXES = ["columns", "rows", "pages", "chapters"] as const;

const queryConfig = defineModel<QueryConfig>({ required: true });
const filterModal = ref<any>(null);

/* Boards saved before pages and chapters existed have neither. */
queryConfig.value.pages ??= [];
queryConfig.value.chapters ??= [];

/** Why the last drop was turned away; cleared by the next one. */
const refusal = ref("");

/*
 * Where the item being moved came from. A move between areas removes it
 * from its old area on the way (the lists are vuedraggable's own), so a
 * refused move has to put it back there - else it is simply gone.
 */
let lastRemoved: { area: Area; element: HierarchyTreeItem; index: number } | null = null;

/*
 * MDX numbers its axes without gaps, and the store leaves out what is out
 * of order rather than send it. Said here, so nobody wonders where it went.
 */
const axisGaps = computed(() => {
  const config = queryConfig.value;
  const notes = [] as string[];
  if (config.pages?.length && (!config.rows.length || !config.columns.length)) {
    notes.push(t('QueryDesigner.pagesNeedRowsAndColumns'));
  }
  if (config.chapters?.length && !config.pages?.length) {
    notes.push(t('QueryDesigner.chaptersNeedPages'));
  }
  return notes;
});

/**
 * Checked once the drop is complete: a move from one area to another
 * removes the item from its old area only after adding it to the new one.
 */
const refuseIfInvalid = (area: Area, element: HierarchyTreeItem) => {
  nextTick(() => {
    const config = queryConfig.value as unknown as Record<string, HierarchyTreeItem[] | undefined>;
    let reason = "";
    // The measures pseudo-hierarchy: typed as a tree item, but not one of the enum's kinds.
    const isValues = String(element.type) === "Values";
    if (isValues && area !== "rows" && area !== "columns") {
      reason = t('QueryDesigner.valuesOnlyOnRowsOrColumns');
    } else if ((AXES as readonly string[]).includes(area) && !isValues) {
      const hierarchy = element.originalItem.HIERARCHY_UNIQUE_NAME;
      const onAxes = AXES.flatMap(axis => (config[axis] ?? []) as HierarchyTreeItem[])
        .filter(item => item.originalItem?.HIERARCHY_UNIQUE_NAME === hierarchy);
      // Mondrian: "Hierarchy ... appears in more than one independent axis."
      if (onAxes.length > 1) reason = t('QueryDesigner.hierarchyOnOneAxisOnly');
    }
    if (!reason) return;
    const content = config[area] ?? [];
    // The item just dropped, not an earlier one of the same hierarchy.
    let index = content.indexOf(element);
    if (index < 0) index = content.findLastIndex(item => item.id === element.id);
    if (index >= 0) config[area] = content.filter((_, i) => i !== index);
    const origin = lastRemoved;
    lastRemoved = null;
    if (origin && origin.area !== area && origin.element.id === element.id) {
      const back = config[origin.area] ?? [];
      if (!back.some(item => item.id === element.id)) {
        config[origin.area] = [...back.slice(0, origin.index), origin.element, ...back.slice(origin.index)];
      }
    }
    refusal.value = reason;
  });
};

const { api, catalog } = defineProps<{ api: any, catalog: any }>();
console.log('QueryDesigner catalog:', catalog);

const addedOperationCache = {
  area: "filters" as Area,
  e: null,
  hasCache: false,
  cancelRemoving: false,
};

/*
 * A drop from the cube explorer that vuedraggable did not take: a drag over
 * before SortableJS saw it start (see treeItemTransfer). Checked after the
 * drop has gone all the way through - SortableJS handles it on the document,
 * after this area has heard it - and only then taken as vuedraggable would
 * have handed it over.
 */
let takenDrops = 0;

const allowDrop = (event: DragEvent) => {
  if (carriesTreeItem(event.dataTransfer)) event.preventDefault();
};

const dropFromTree = (area: Area | "measures", event: DragEvent) => {
  const item = readTreeItem(event.dataTransfer);
  if (!item) return;
  const isMeasure = item.type === TreeItemTypesEnum.Measure;
  if (isMeasure !== (area === "measures")) return;
  const before = takenDrops;
  setTimeout(() => {
    if (takenDrops !== before) return;
    const element = { ...item, children: [], filters: { enabled: false } } as any;
    if (area === "measures") {
      queryConfig.value.measures.push(element);
      changeMeasures({ added: { element, newIndex: queryConfig.value.measures.length - 1 } });
      return;
    }
    const list = (queryConfig.value[area] ??= []);
    list.push(element);
    changeItems(area, { added: { element, newIndex: list.length - 1 } });
  });
};

const changeItems = (area: Area, e: any) => {
  const { added, moved, removed } = e;
  if (added) {
    takenDrops += 1;
    refusal.value = "";
    // Values into the filters: refused like anywhere else off rows and columns, and put back.
    if (area === "filters" && added.element.type === "Values") {
      refuseIfInvalid(area, added.element);
      return;
    }

    const element: HierarchyTreeItem = added.element;
    const newIndex = added.newIndex;
    // const duplicate = this.queryDesignerStore.hierarchyUniqueNames.find(
    //   (e) => e === element.originalItem.HIERARCHY_UNIQUE_NAME
    // );
    const duplicate = false;
    const areaContent = queryConfig.value[area] ?? [];

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
    refuseIfInvalid(area, newElement);
  }
  // Event only occurs when moving item from one area to another
  if (removed) {
    lastRemoved = { area, element: removed.element, index: removed.oldIndex };
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
    const areaContent = queryConfig.value[area] ?? [];

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
    takenDrops += 1;
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
        type: "Values" as any,
        id: "Values",
        children: [],
        caption: "Values",
        originalItem: {
          HIERARCHY_UNIQUE_NAME: "Values",
        } as any,
        filters: { enabled: false },
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
  area: Area | "measures",
  item: any,
  event: any
) => {
  if (!event) {
    const areaContent = queryConfig.value[area] ?? [];
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

const configureFilter = async (type: "filters" | "columns" | "rows", element: any) => {
  const originalItem = queryConfig.value[type].find(
    (e: any) => e.id === element.id
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

const { t } = useTranslation('xmla');

</script>
<template>
  <div class="queryDesigner">
    <p v-for="note in [refusal, ...axisGaps].filter(Boolean)" :key="note" class="axis-note" role="status">
      {{ note }}
    </p>
    <!-- vuedraggable puts a dragged item into the list, and so on screen,
      before @change replaces it with one that has filters: an item from the
      tree, or Values, is drawn at least once without them. -->
    <div class="areas">
      <div class="queryDesignerArea">
        <div class="area-title">{{ t('QueryDesigner.filters') }}</div>
        <div class="queryDesingnerArea_container" @dragover="allowDrop" @drop="dropFromTree('filters', $event)">
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
                    :tone="element.filters?.enabled ? 'color-ok' : 'color-dim'"
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
        <div class="queryDesingnerArea_container" @dragover="allowDrop" @drop="dropFromTree('columns', $event)">
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
                    :tone="element.filters?.enabled ? 'color-ok' : 'color-dim'"
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
        <div class="queryDesingnerArea_container" @dragover="allowDrop" @drop="dropFromTree('rows', $event)">
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
                    :tone="element.filters?.enabled ? 'color-ok' : 'color-dim'"
                    @click="configureFilter('rows', element)"
                  />
                </div>
              </DChip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="area-title">{{ t('QueryDesigner.pages') }}</div>
        <div class="queryDesingnerArea_container" @dragover="allowDrop" @drop="dropFromTree('pages', $event)">
          <draggable class="dragArea list-group" :list="queryConfig.pages" group="hierarchies"
            @change="changeItems('pages', $event)" item-key="id">
            <template #item="{ element }">
              <DChip removable @remove="remove('pages', element, false)">
                <div class="flex items-center chip_caption">
                  <span class="chip_caption_text">
                    {{ element.caption }}
                  </span>
                  <DIcon
                    class="filter-icon ml-2"
                    name="filter_list"
                    size="sm"
                    :tone="element.filters?.enabled ? 'color-ok' : 'color-dim'"
                    @click="configureFilter('pages', element)"
                  />
                </div>
              </DChip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="area-title">{{ t('QueryDesigner.chapters') }}</div>
        <div class="queryDesingnerArea_container" @dragover="allowDrop" @drop="dropFromTree('chapters', $event)">
          <draggable class="dragArea list-group" :list="queryConfig.chapters" group="hierarchies"
            @change="changeItems('chapters', $event)" item-key="id">
            <template #item="{ element }">
              <DChip removable @remove="remove('chapters', element, false)">
                <div class="flex items-center chip_caption">
                  <span class="chip_caption_text">
                    {{ element.caption }}
                  </span>
                  <DIcon
                    class="filter-icon ml-2"
                    name="filter_list"
                    size="sm"
                    :tone="element.filters?.enabled ? 'color-ok' : 'color-dim'"
                    @click="configureFilter('chapters', element)"
                  />
                </div>
              </DChip>
            </template>
          </draggable>
        </div>
      </div>
      <div class="queryDesignerArea">
        <div class="area-title">{{ t('QueryDesigner.data') }}</div>
        <div class="queryDesingnerArea_container" @dragover="allowDrop" @drop="dropFromTree('measures', $event)">
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
  width: 100%;

  .axis-note {
    margin: 0 0 0.5rem;
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    color: var(--color-warn, var(--color-dim));
  }

  .update_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Two columns: filters and columns, rows and pages, chapters and data. */
  .areas {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px 12px;

    .queryDesignerArea {
      display: flex;
      flex-direction: column;
      min-width: 0;

      /* Was .va-title, a class the framework defined globally. */
      .area-title {
        font-family: var(--font-sans);
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--color-dim);
      }

      .queryDesingnerArea_container {
        width: 100%;
        min-height: 40px;

        background-color: var(--color-bg);
        border: 1px dashed var(--color-outline);
        border-radius: var(--radius-sm);
        margin: 0.25rem 0 0.5rem;

        .list-group {
          min-height: 38px;
          width: 100%;
          padding: 0.375rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem;
          align-items: center;

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

</style>
