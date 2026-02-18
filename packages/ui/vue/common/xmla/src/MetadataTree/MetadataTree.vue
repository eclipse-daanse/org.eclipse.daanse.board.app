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
import { ref, onMounted } from 'vue';
import { getTreeViewNodes } from './XMLAMetadataTree';
import { TreeItemTypesEnum } from './TreeViewItems';
import XMLAIconVue from './XMLAIcon.vue';
import draggable from 'vuedraggable/src/vuedraggable'

const { metadata } = defineProps(['metadata'])

const treeViewData = ref(null as any);
const treeContainer = ref(null as any);

onMounted(() => {
  treeViewData.value = getTreeViewNodes(metadata.storage);
  // console.log(treeContainer);
  treeContainer.value.addEventListener('dragstart', (event: any) => {
    console.log(event._xmla_context)
    if (!event._xmla_context) {
      return;
    }

    if (event._xmla_context.type === TreeItemTypesEnum.Hierarchy) {
      event.dataTransfer.setData('text/plain', event._xmla_context.originalItem.HIERARCHY_UNIQUE_NAME);
    } else if (event._xmla_context.type === TreeItemTypesEnum.Measure) {
      event.dataTransfer.setData('text/plain', event._xmla_context.originalItem.MEASURE_UNIQUE_NAME);
    }
    // event.dataTransfer.setData('text/plain', 'test');
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
    //   iconDesc.secondaryColor = "#154EC1";
    // } else {
    iconDesc.name = "MeasureFolder";
    iconDesc.secondaryColor = "#154EC1";
    // }
  } else if (treeViewItem.type === TreeItemTypesEnum.Hierarchy) {
    if (treeViewItem.originalItem.PARENT_CHILD) {
      iconDesc.name = "HierarchyParentChild";
      iconDesc.secondaryColor = "#154EC1";
    }
    iconDesc.name = "HierarchyNormal";
    iconDesc.secondaryColor = "#154EC1";
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
  <h1 class="area-header">Cube Explorer</h1>
  <div class="metadata_tree-container" ref="treeContainer">
    <div v-if="treeViewData">
      <div class="tree-container">
        <div class="tree-header mb-2">
          <va-input v-model="filter" placeholder="Filter..." clearable class="filter-input" />
        </div>
        <va-tree-view :nodes="treeViewData" class="tree-view overflow-auto" :filter="filter" :text-by="'caption'">
          <!-- @update:expanded="triggerExpanded" -->
          <template #content="node">
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
            <div v-else class="flex align-center cursor-pointer">
              <XMLAIconVue :icon="getTreeViewItemIcon(node).name"
                :primary-color="getTreeViewItemIcon(node).primaryColor"
                :secondary-color="getTreeViewItemIcon(node).secondaryColor" :height="24" :width="24" class="mr-1">
              </XMLAIconVue>
              {{ node.caption }}
            </div>
          </template>
        </va-tree-view>
      </div>
    </div>
    <div v-else class="progress-circle">
      <va-progress-circle indeterminate size="large" />
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

.tree-container .va-tree-node-content__body svg {
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
}
</style>
