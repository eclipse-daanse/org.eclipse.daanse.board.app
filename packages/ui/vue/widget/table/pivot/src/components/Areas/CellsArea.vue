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
import { storeToRefs } from "pinia";
import type { TinyEmitter } from "tiny-emitter";
import { computed, inject, ref, watch, type Ref } from "vue";
import CellDropdown from "./CellDropdown.vue";
// import CellPropertiesModal from "@/components/Modals/CellPropertiesModal.vue";


const props = defineProps([
  "cells",
  "rowsStyles",
  "colsStyles",
  "totalContentSize",
]);

const emit = defineEmits(["drillthrough"]);

const DEFAULT_COLUMN_WIDTH = 150;
const DEFAULT_ROW_HEIGHT = 30;
const DEFAULT_ROW_HEIGHT_CSS = `${DEFAULT_ROW_HEIGHT}px`;
const eventBus = inject("pivotTableEventBus") as TinyEmitter;

const xScrollPosition = ref(0);
const yScrollPosition = ref(0);
const xTranslate = ref(0);
const yTranslate = ref(0);

const handleScroll = (e: any) => {
  xScrollPosition.value = e.target.scrollLeft;
  yScrollPosition.value = e.target.scrollTop;

  eventBus.emit("scroll", {
    top: e.target.scrollTop,
    left: e.target.scrollLeft,
  });
};

const getCellStyle = (i: number, j: number) => {
  const cellValues = props.cells[j][i];

  const foreColor = parseInt(cellValues.FORE_COLOR).toString(16);
  const backColor = parseInt(cellValues.BACK_COLOR).toString(16);
  const fontStyles = getFontStyles(parseInt(cellValues.FONT_FLAGS));
  const fontSize = `${parseInt(cellValues.FONT_SIZE)}px`;

  return {
    // "text-align": state.value.settings.alignContent as
    //   | "center"
    //   | "right"
    //   | "left",
    "text-align": 'left',
    width: `${props.colsStyles[i] || DEFAULT_COLUMN_WIDTH}px`,
    height: `${props.rowsStyles[j] || DEFAULT_ROW_HEIGHT}px`,
    color: `#${foreColor}`,
    "background-color": `#${backColor}`,
    ...fontStyles,
    "font-size": fontSize,
  };
};

const getCellValue = (cell: any) => {
  if (typeof cell.FmtValue === "string") return cell.FmtValue;
  return cell.Value;
};
const toLocalString = (value: number | string) => {
  try {
    if (typeof value == "string") value = Number(value)
    return value.toLocaleString("de-DE");
  } catch (e) {
    return value
  }

}

const computedContainerStyles = computed(() => {
  return {
    width: `${props.totalContentSize.xAxis.totalWidth || DEFAULT_COLUMN_WIDTH
      }px`,
    height: `${props.totalContentSize.yAxis.totalWidth || DEFAULT_ROW_HEIGHT
      }px`,
  };
});

const getRowStyles = computed(() => {
  return {
    transform: `translate(${xTranslate.value}px, ${yTranslate.value}px)`,
  };
});

const container = ref(null) as unknown as Ref<HTMLElement>;
const currentlyDisplayedValues = computed(() => {
  if (!container.value)
    return {
      data: [],
      xTranslate: xTranslate.value,
      yTranslate: yTranslate.value,
    };

  let xTranslateValue = xTranslate.value;
  let yTranslateValue = yTranslate.value;

  const leftIndex = props.totalContentSize.xAxis.items.findIndex((e: any) => {
    const leftCoord = xScrollPosition.value;
    if (e.start <= leftCoord && e.start + e.width > leftCoord) return true;
    return false;
  });
  let rightIndex = props.totalContentSize.xAxis.items.findIndex((e: any) => {
    const rightCoord = xScrollPosition.value + container.value.clientWidth;

    if (e.start <= rightCoord && e.start + e.width >= rightCoord) return true;
    return false;
  });

  const topIndex = props.totalContentSize.yAxis.items.findIndex((e: any) => {
    if (
      e.start <= yScrollPosition.value &&
      e.start + e.width > yScrollPosition.value
    )
      return true;
    return false;
  });
  let bottomIndex = props.totalContentSize.yAxis.items.findIndex((e: any) => {
    const bottomCoord = yScrollPosition.value + container.value.clientHeight;
    if (e.start <= bottomCoord && e.start + e.width >= bottomCoord) return true;
    return false;
  });

  if (leftIndex >= 0 && rightIndex < 0)
    rightIndex = props.totalContentSize.xAxis.items.length - 1;
  if (topIndex >= 0 && bottomIndex < 0)
    bottomIndex = props.totalContentSize.yAxis.items.length - 1;

  let result = props.cells.map((cellRow: any, j: number) => {
    return cellRow.map((cell: any, i: number) => {
      return {
        ...cell,
        i,
        j,
      };
    });
  });
  if (leftIndex >= 0 && rightIndex > leftIndex) {
    result = result.map((e: any[]) => {
      return e.slice(leftIndex, rightIndex + 1);
    });
    xTranslateValue = props.totalContentSize.xAxis.items[leftIndex].start;
  }
  if (topIndex >= 0 && bottomIndex > topIndex) {
    result = result.slice(topIndex, bottomIndex + 1);
    yTranslateValue = props.totalContentSize.yAxis.items[topIndex].start;
  }

  return {
    data: result,
    xTranslate: xTranslateValue,
    yTranslate: yTranslateValue,
  };
});

watch(
  () => currentlyDisplayedValues.value,
  () => {
    xTranslate.value = currentlyDisplayedValues.value.xTranslate;
    yTranslate.value = currentlyDisplayedValues.value.yTranslate;
  }
);

const cellPropertiesModal = ref(null) as Ref<any>;
const openCellProperties = async (cell: any) => {
  await cellPropertiesModal.value?.run({ cell });
};

const drillthrough = (cell: any) => {
  emit("drillthrough", cell);
};

function getFontStyles(fontStyle: any) {
  const result = {
    "text-decoration": "",
  } as any;

  if (fontStyle && 1) result["font-weight"] = 800;
  if (fontStyle && 2) result["fontStyle"] = "italic";
  if (fontStyle && 4)
    result["text-decoration"] = result["text-decoration"] + " underline";
  if (fontStyle && 8)
    result["text-decoration"] = result["text-decoration"] + " line-through";

  return result;
}
</script>
<template>
  <div class="cells_container" @scroll="handleScroll" ref="container">
    <Teleport to="body">
      <!-- <CellPropertiesModal ref="cellPropertiesModal" /> -->
    </Teleport>
    <div :style="computedContainerStyles" class="virtual-scroll-container">
      <div class="cell_row" v-for="(cellRow, j) in currentlyDisplayedValues.data" :key="j" :style="getRowStyles">
        <CellDropdown v-for="cell in cellRow" :key="`${cell.i}_${cell.j}`" :style="getCellStyle(cell.i, cell.j)"
          class="cell" @openCellProperties="openCellProperties(cell)" @drillthrough="drillthrough(cell)">
          <template v-slot="{ }">
            <div>
              {{ toLocalString(getCellValue(cell)) }}
            </div>
          </template>
        </CellDropdown>
      </div>
    </div>
  </div>
</template>
<style>
.cells_container {
  overflow: auto;
  height: 100%;
  width: 100%;
}

.cell_row {
  display: flex;
}

.cell {
  border: 1px silver solid;
  border-right: 0;
  border-bottom: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-shrink: 0;
  width: 150px;
  height: v-bind(DEFAULT_ROW_HEIGHT_CSS);
  line-height: v-bind(DEFAULT_ROW_HEIGHT_CSS);
  padding: 3px;
}

.cell:last-child {
  border-right: 1px silver solid;
}

.cell_row:last-child>.cell {
  border-bottom: 1px silver solid;
}

.virtual-scroll-container {
  overflow: hidden;
}
</style>
