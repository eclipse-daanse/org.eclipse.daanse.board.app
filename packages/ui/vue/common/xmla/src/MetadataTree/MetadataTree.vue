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
import { DInput } from "org.eclipse.daanse.board.app.ui.vue.controls";
import TreeView from "../TreeView.vue";
import { ref, onMounted } from 'vue';
import { dimensionChildren, findTreeItem, getTreeViewNodes, hierarchyChildren, loadLevelMembers } from './XMLAMetadataTree';
import { TreeItemTypesEnum } from './TreeViewItems';
import XMLAIconVue from './XMLAIcon.vue';
import { writeTreeItem } from '../QueryDesigner/treeItemTransfer';
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables';
const { t } = useTranslation('xmla');
import draggable from 'vuedraggable'

const { metadata } = defineProps(['metadata'])

/*
 * A host that does more than feed a query designer - the MDX workbench -
 * hears which object was clicked and which one was asked to go into the
 * text. Every row with a unique name drags as that name, so it drops into
 * an editor as valid MDX.
 */
const emit = defineEmits<{
  (event: 'inspect', node: any): void
  (event: 'insert', uniqueName: string, node: any): void
}>()

function uniqueNameOf(node: any): string | null {
  const item = node?.originalItem ?? node?.__MDSchemaMember ?? {}
  switch (node?.type) {
    case TreeItemTypesEnum.Dimension:
      return item.DIMENSION_UNIQUE_NAME ?? node.dimension ?? null
    case TreeItemTypesEnum.Hierarchy:
      return item.HIERARCHY_UNIQUE_NAME ?? null
    case TreeItemTypesEnum.Level:
      return item.LEVEL_UNIQUE_NAME ?? null
    case TreeItemTypesEnum.Measure:
      return item.MEASURE_UNIQUE_NAME ?? null
    case TreeItemTypesEnum.Set:
      return item.SET_NAME ? `[${String(item.SET_NAME).replace(/^\[|\]$/g, '')}]` : null
    case TreeItemTypesEnum.Member:
      return item.MEMBER_UNIQUE_NAME ?? item.UName ?? null
    default:
      return null
  }
}

function dragName(event: DragEvent, node: any) {
  const name = uniqueNameOf(node)
  if (!name || !event.dataTransfer) return
  event.dataTransfer.setData('text/plain', name)
  event.dataTransfer.effectAllowed = 'copy'
}

function insert(node: any) {
  const name = uniqueNameOf(node)
  if (name) emit('insert', name, node)
}

/* A dimension node carries its name only; the inspector wants its row. */
function inspect(node: any) {
  if (node?.type === TreeItemTypesEnum.Dimension && !node.originalItem && node.dimension) {
    const row = metadata.storage.dimensions.find((d: any) => d.DIMENSION_UNIQUE_NAME === node.dimension)
    emit('inspect', row ? { ...node, originalItem: row } : node)
    return
  }
  emit('inspect', node)
}

/*
 * One click inspects, two insert. Counted here rather than left to dblclick:
 * the rows wrapped for the query designer's drag (vuedraggable) never get a
 * dblclick from a real mouse. The first click waits for a second one, so a
 * double click does not open the inspector on its way.
 */
const DOUBLE_CLICK_MS = 300
let lastClick: { node: any; at: number; timer: ReturnType<typeof setTimeout> } | null = null

function clicked(node: any) {
  const now = Date.now()
  if (lastClick && lastClick.node === node && now - lastClick.at < DOUBLE_CLICK_MS) {
    clearTimeout(lastClick.timer)
    lastClick = null
    insert(node)
    return
  }
  if (lastClick) clearTimeout(lastClick.timer)
  const timer = setTimeout(() => {
    lastClick = null
    inspect(node)
  }, DOUBLE_CLICK_MS)
  lastClick = { node, at: now, timer }
}

const treeViewData = ref(null as any);
const treeContainer = ref(null as any);

/* The dimensions' own rows come after the tree is drawn: their captions replace the names. */
function refreshCaptions(nodes: any[]) {
  for (const node of nodes ?? []) {
    if (node.type === TreeItemTypesEnum.Dimension && node.dimension) {
      const row = metadata.storage.dimensions.find((d: any) => d.DIMENSION_UNIQUE_NAME === node.dimension);
      if (row?.DIMENSION_CAPTION) node.caption = row.DIMENSION_CAPTION;
    }
    refreshCaptions(node.children);
  }
}

/*
 * A branch filled in when it opens: a dimension with its hierarchies, a
 * hierarchy with its levels, a level with the first page of its members.
 */
async function loadChildren(node: any) {
  if (node.type === TreeItemTypesEnum.Dimension && node.dimension) {
    await metadata.loadHierarchies(node.dimension);
    const row = metadata.storage.dimensions.find((d: any) => d.DIMENSION_UNIQUE_NAME === node.dimension)
      ?? { DIMENSION_UNIQUE_NAME: node.dimension };
    node.children = dimensionChildren(row, metadata.storage);
  } else if (node.type === TreeItemTypesEnum.Hierarchy && metadata.loadHierarchyLevels) {
    const levels = await metadata.loadHierarchyLevels(node.originalItem.HIERARCHY_UNIQUE_NAME);
    node.children = hierarchyChildren(levels);
  } else if (node.type === TreeItemTypesEnum.Level && metadata.loadLevelMembers) {
    await loadLevelMembers(node, (level, start, amount) => metadata.loadLevelMembers(level, start, amount));
  }
}

/* The row behind a level's members while it has more: the next page. */
async function loadMore(row: any) {
  const level = findTreeItem(treeViewData.value, row.parentId) as any;
  if (!level || !metadata.loadLevelMembers) return;
  try {
    await loadLevelMembers(level, (lvl, start, amount) => metadata.loadLevelMembers(lvl, start, amount));
  } catch (error) {
    console.warn('Could not load more members', error);
  }
}

onMounted(() => {
  treeViewData.value = getTreeViewNodes(metadata.storage);
  metadata.dimensionsReady?.().then(() => refreshCaptions(treeViewData.value));
  // console.log(treeContainer);
  treeContainer.value.addEventListener('dragstart', (event: any) => {
    if (!event._xmla_context) {
      return;
    }

    if (event._xmla_context.type === TreeItemTypesEnum.Hierarchy) {
      event.dataTransfer.setData('text/plain', event._xmla_context.originalItem.HIERARCHY_UNIQUE_NAME);
    } else if (event._xmla_context.type === TreeItemTypesEnum.Measure) {
      event.dataTransfer.setData('text/plain', event._xmla_context.originalItem.MEASURE_UNIQUE_NAME);
    }
    // For the query designer, should the drag be over before SortableJS has seen it start.
    writeTreeItem(event.dataTransfer, event._xmla_context);
  });
  /*
   * SortableJS marks the row it drags with its drag class and takes it off a
   * tick later; a drag over before that leaves it on. Taken off here, so the
   * row looks like the others again.
   */
  treeContainer.value.addEventListener('dragend', (event: any) => {
    event.target?.classList?.remove('sortable-drag');
  });
});

const filter = ref("");
const getTreeViewItemIcon = (treeViewItem) => {
  const iconDesc = {
    name: "",
    primaryColor: "",
    secondaryColor: "",
  };
  if (treeViewItem.type === TreeItemTypesEnum.Measure) {
    iconDesc.name = "MeasureIcon";
  } else if (
    treeViewItem.type === TreeItemTypesEnum.SetsFolder ||
    treeViewItem.type === TreeItemTypesEnum.Folder ||
    treeViewItem.type === TreeItemTypesEnum.DimensionFolder
  ) {
    // if (this.expandedNodes.some((e) => e === treeViewItem.id)) {
    iconDesc.name = "folder_open";
    // } else {
    iconDesc.name = "folder";
    // }
  } else if (treeViewItem.type === TreeItemTypesEnum.Set) {
    iconDesc.name = "SetIcon";
  } else if (treeViewItem.type === TreeItemTypesEnum.Dimension) {
    if (treeViewItem.isMeasureDimension) {
      iconDesc.name = "MeasureIcon";
    } else {
      iconDesc.name = "DimesionIcon";
    }
  } else if (treeViewItem.type === TreeItemTypesEnum.MeasureGroup) {
    // if (this.expandedNodes.some((e) => e === treeViewItem.id)) {
    //   iconDesc.name = "MeasureFolderOpened";
    //   iconDesc.secondaryColor = "var(--color-accent)";
    // } else {
    iconDesc.name = "MeasureFolder";
    iconDesc.secondaryColor = "var(--color-accent)";
    // }
  } else if (treeViewItem.type === TreeItemTypesEnum.Hierarchy) {
    if (treeViewItem.originalItem.PARENT_CHILD) {
      iconDesc.name = "HierarchyParentChild";
      iconDesc.secondaryColor = "var(--color-accent)";
    }
    iconDesc.name = "HierarchyNormal";
    iconDesc.secondaryColor = "var(--color-accent)";
  } else if (treeViewItem.type === TreeItemTypesEnum.Level) {
    if (treeViewItem.originalItem.LEVEL_NUMBER === "0") {
      iconDesc.name = "LevelZero";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "1") {
      iconDesc.name = "LevelOne";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "2") {
      iconDesc.name = "LevelTwo";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "3") {
      iconDesc.name = "LevelThree";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "4") {
      iconDesc.name = "LevelFour";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "5") {
      iconDesc.name = "LevelFive";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "6") {
      iconDesc.name = "LevelSix";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "7") {
      iconDesc.name = "LevelSeven";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "8") {
      iconDesc.name = "LevelEight";
    }
    if (treeViewItem.originalItem.LEVEL_NUMBER === "9") {
      iconDesc.name = "LevelNine";
    }
  }
  return iconDesc;
}

const populateDragEvent = (e: any, element: any) => {
  e._xmla_context = element;
}
</script>

<template>
  <h1 class="area-header">{{ t('Metadata.title') }}</h1>
  <div class="metadata_tree-container" ref="treeContainer">
    <div v-if="treeViewData">
      <div class="tree-container">
        <div class="tree-header mb-2">
          <DInput v-model="filter" :placeholder="t('Metadata.filter')" class="filter-input" />
        </div>
        <TreeView :nodes="treeViewData" class="tree-view overflow-auto" :filter="filter" text-by="caption"
          :load-children="loadChildren">
          <!-- @update:expanded="triggerExpanded" -->
          <template #content="node">
            <button v-if="node.type === TreeItemTypesEnum.LoadMore" type="button" class="load-more"
              @click.stop="loadMore(node)">
              {{ t('Metadata.loadMore') }}
            </button>
            <div v-else class="metadata-row" @click="clicked(node)">
            <draggable v-if="node.type === TreeItemTypesEnum.Hierarchy" :modelValue="[node]"
              :group="{ name: 'hierarchies', pull: 'clone', put: false }" item-key="id">
              <template #item="{ element }">
                <div class="flex align-center cursor-pointer" @dragstart="populateDragEvent($event, element)">
                  <XMLAIconVue :icon="getTreeViewItemIcon(node).name"
                    :primary-color="getTreeViewItemIcon(node).primaryColor"
                    :secondary-color="getTreeViewItemIcon(node).secondaryColor" :height="24" :width="24" class="mr-1">
                  </XMLAIconVue>
                  {{ element.caption }}
                </div>
              </template>
            </draggable>
            <draggable v-else-if="node.type === TreeItemTypesEnum.Measure" :modelValue="[node]"
              :group="{ name: 'measures', pull: 'clone', put: false }" item-key="id">
              <template #item="{ element }">
                <div class="flex align-center cursor-pointer" @dragstart="populateDragEvent($event, element)">
                  <XMLAIconVue :icon="getTreeViewItemIcon(node).name"
                    :primary-color="getTreeViewItemIcon(node).primaryColor"
                    :secondary-color="getTreeViewItemIcon(node).secondaryColor" :height="24" :width="24" class="mr-1">
                  </XMLAIconVue>
                  {{ element.caption }}
                </div>
              </template>
            </draggable>
            <div v-else class="flex align-center cursor-pointer" :draggable="!!uniqueNameOf(node)"
              @dragstart="dragName($event, node)">
              <XMLAIconVue :icon="getTreeViewItemIcon(node).name"
                :primary-color="getTreeViewItemIcon(node).primaryColor"
                :secondary-color="getTreeViewItemIcon(node).secondaryColor" :height="24" :width="24" class="mr-1">
              </XMLAIconVue>
              {{ node.caption }}
            </div>
            </div>
          </template>
        </TreeView>
      </div>
    </div>
    <div v-else class="progress-circle">
      <span class="spinner" :aria-label="t('Loading')" />
    </div>
  </div>
</template>

<style scoped>
.area-header {
  font-size: 18px;
  font-weight: 500;
  margin: 0rem 1rem 1rem 1rem;
}

.tree-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.tree-container .tree-view {
  overflow: auto;
}

.tree-container svg {
  vertical-align: baseline;
}

.progress-circle {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-input {
  width: 100%;
  padding: 0 1rem;
}

.metadata_tree-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}
</style>

<style scoped>
.spinner {
  display: inline-block;
  width: 26px;
  height: 26px;
  border: 2px solid var(--color-divider);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: xmla-spin 700ms linear infinite;
}

.load-more {
  padding: 0 4px;
  border: 0;
  background: none;
  color: var(--color-accent);
  font: inherit;
  cursor: pointer;
}
</style>

<style>
@keyframes xmla-spin {
  to { transform: rotate(360deg); }
}
</style>
