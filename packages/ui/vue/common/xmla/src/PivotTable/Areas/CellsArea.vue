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
import { computed, inject, ref, watch, type Ref, nextTick } from "vue";
import { useElementSize } from "@vueuse/core";
import CellDropdown from "./CellDropdown.vue";
// import CellPropertiesModal from "@/components/Modals/CellPropertiesModal.vue";


const props = defineProps({
  cells: {
    required: true,
    type: Array,
  },
  rowsStyles: {
    required: true,
    type: Array,
  },
  colsStyles: {
    required: true,
    type: Array,
  },
  totalContentSize: {
    required: true,
    type: Object,
  },
  cellBackgroundColor: {
    required: false,
    type: String,
    default: '#ffffff',
  },
  cellTextColor: {
    required: false,
    type: String,
    default: '#000000',
  },
  borderColor: {
    required: false,
    type: String,
    default: 'silver',
  },
  defaultColumnWidth: {
    required: false,
    type: Number,
    default: 150,
  },
  defaultRowHeight: {
    required: false,
    type: Number,
    default: 30,
  },
  fontSize: {
    required: false,
    type: Number,
    default: 14,
  },
  cellTextAlign: {
    required: false,
    type: String as () => 'left' | 'center' | 'right',
    default: 'left',
  },
  conditionalFormats: {
    required: false,
    type: Array as () => Array<{
      id: string;
      conditionType: string;
      value1: number | string;
      value2?: number | string;
      backgroundColor: string;
      textColor: string;
      fontWeight?: number;
      minColor?: string;
      maxColor?: string;
      priority: number;
    }>,
    default: () => [],
  },
  isEditMode: {
    required: false,
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["drillthrough", "cell-edit"]);

const DEFAULT_COLUMN_WIDTH = computed(() => props.defaultColumnWidth);
const DEFAULT_ROW_HEIGHT = computed(() => props.defaultRowHeight);
const DEFAULT_ROW_HEIGHT_CSS = computed(() => `${props.defaultRowHeight}px`);
const borderColorCSS = computed(() => props.borderColor);
const fontSizeCSS = computed(() => `${props.fontSize}px`);
const eventBus = inject("pivotTableEventBus") as TinyEmitter;

// Compute all numeric values for topN/bottomN and colorScale
const allNumericValues = computed(() => {
  const values: number[] = [];
  if (!props.cells || !Array.isArray(props.cells)) return values;

  for (const row of props.cells) {
    if (!Array.isArray(row)) continue;
    for (const cell of row) {
      const val = parseFloat(cell.Value);
      if (!isNaN(val)) {
        values.push(val);
      }
    }
  }
  return values.sort((a, b) => a - b);
});

const minValue = computed(() => allNumericValues.value.length > 0 ? allNumericValues.value[0] : 0);
const maxValue = computed(() => allNumericValues.value.length > 0 ? allNumericValues.value[allNumericValues.value.length - 1] : 0);

// Helper: Interpolate color between min and max
const interpolateColor = (minColor: string, maxColor: string, ratio: number): string => {
  const parseHex = (hex: string) => {
    const h = hex.replace('#', '');
    return {
      r: parseInt(h.substring(0, 2), 16),
      g: parseInt(h.substring(2, 4), 16),
      b: parseInt(h.substring(4, 6), 16),
    };
  };

  const min = parseHex(minColor);
  const max = parseHex(maxColor);

  const r = Math.round(min.r + (max.r - min.r) * ratio);
  const g = Math.round(min.g + (max.g - min.g) * ratio);
  const b = Math.round(min.b + (max.b - min.b) * ratio);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Evaluate conditional format for a cell value
const evaluateConditionalFormat = (cellValue: any): { backgroundColor?: string; textColor?: string; fontWeight?: number } | null => {
  if (!props.conditionalFormats || props.conditionalFormats.length === 0) {
    return null;
  }

  const numericValue = parseFloat(cellValue);
  const stringValue = String(cellValue);

  // Sort by priority (lower = higher priority)
  const sortedFormats = [...props.conditionalFormats].sort((a, b) => a.priority - b.priority);

  for (const format of sortedFormats) {
    let matches = false;

    switch (format.conditionType) {
      case 'greaterThan':
        if (!isNaN(numericValue) && numericValue > Number(format.value1)) {
          matches = true;
        }
        break;

      case 'lessThan':
        if (!isNaN(numericValue) && numericValue < Number(format.value1)) {
          matches = true;
        }
        break;

      case 'equals':
        if (!isNaN(numericValue) && numericValue === Number(format.value1)) {
          matches = true;
        }
        break;

      case 'notEquals':
        if (!isNaN(numericValue) && numericValue !== Number(format.value1)) {
          matches = true;
        }
        break;

      case 'between':
        if (!isNaN(numericValue) && format.value2 !== undefined) {
          const min = Math.min(Number(format.value1), Number(format.value2));
          const max = Math.max(Number(format.value1), Number(format.value2));
          if (numericValue >= min && numericValue <= max) {
            matches = true;
          }
        }
        break;

      case 'contains':
        if (stringValue.toLowerCase().includes(String(format.value1).toLowerCase())) {
          matches = true;
        }
        break;

      case 'colorScale':
        if (!isNaN(numericValue) && format.minColor && format.maxColor) {
          const range = maxValue.value - minValue.value;
          if (range > 0) {
            const ratio = (numericValue - minValue.value) / range;
            const bgColor = interpolateColor(format.minColor, format.maxColor, ratio);
            return { backgroundColor: bgColor };
          }
        }
        break;

      case 'topN':
        if (!isNaN(numericValue)) {
          const n = Number(format.value1);
          const topValues = [...allNumericValues.value].reverse().slice(0, n);
          if (topValues.includes(numericValue)) {
            matches = true;
          }
        }
        break;

      case 'bottomN':
        if (!isNaN(numericValue)) {
          const n = Number(format.value1);
          const bottomValues = allNumericValues.value.slice(0, n);
          if (bottomValues.includes(numericValue)) {
            matches = true;
          }
        }
        break;
    }

    if (matches) {
      return {
        backgroundColor: format.backgroundColor,
        textColor: format.textColor,
        fontWeight: format.fontWeight,
      };
    }
  }

  return null;
};

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

  // Use cell-specific colors if available, otherwise use props defaults
  let foreColor = props.cellTextColor;
  let backColor = props.cellBackgroundColor;
  let fontWeight: number | undefined = undefined;

  if (cellValues.FORE_COLOR !== undefined && cellValues.FORE_COLOR !== null) {
    const parsedFore = parseInt(cellValues.FORE_COLOR);
    if (!isNaN(parsedFore)) {
      foreColor = `#${parsedFore.toString(16).padStart(6, '0')}`;
    }
  }

  if (cellValues.BACK_COLOR !== undefined && cellValues.BACK_COLOR !== null) {
    const parsedBack = parseInt(cellValues.BACK_COLOR);
    if (!isNaN(parsedBack)) {
      backColor = `#${parsedBack.toString(16).padStart(6, '0')}`;
    }
  }

  // Apply conditional formatting
  const cellValue = cellValues.Value ?? cellValues.FmtValue;
  const conditionalStyle = evaluateConditionalFormat(cellValue);
  if (conditionalStyle) {
    if (conditionalStyle.backgroundColor) {
      backColor = conditionalStyle.backgroundColor;
    }
    if (conditionalStyle.textColor) {
      foreColor = conditionalStyle.textColor;
    }
    if (conditionalStyle.fontWeight) {
      fontWeight = conditionalStyle.fontWeight;
    }
  }

  const fontStyles = getFontStyles(parseInt(cellValues.FONT_FLAGS));
  const fontSize = cellValues.FONT_SIZE ? `${parseInt(cellValues.FONT_SIZE)}px` : `${props.fontSize}px`;

  let textAlign = props.cellTextAlign;
  if (cellValues.Value !== undefined && cellValues.Value !== null && cellValues.Value !== "") {
    const num = Number(cellValues.Value);
    if (!isNaN(num)) {
      textAlign = "right";
    }
  }

  const result: Record<string, any> = {
    "text-align": textAlign,
    width: `${props.colsStyles[i] || DEFAULT_COLUMN_WIDTH.value}px`,
    height: `${props.rowsStyles[j] || DEFAULT_ROW_HEIGHT.value}px`,
    color: foreColor,
    "background-color": backColor,
    ...fontStyles,
    "font-size": fontSize,
  };

  if (fontWeight !== undefined) {
    result["font-weight"] = fontWeight;
  }

  return result;
};

const getCellValue = (cell: any) => {
  if (typeof cell.FmtValue === "string") return cell.FmtValue;
  return cell.Value;
};
const toLocalString = (value: number | string) => {
  try {
    if (typeof value == "string") value = isNaN(Number(value)) ? value : Number(value)
    return value.toLocaleString("de-DE");
  } catch (e) {
    return value
  }

}

const computedContainerStyles = computed(() => {
  return {
    width: `${props.totalContentSize.xAxis.totalWidth || DEFAULT_COLUMN_WIDTH.value
      }px`,
    height: `${props.totalContentSize.yAxis.totalWidth || DEFAULT_ROW_HEIGHT.value
      }px`,
  };
});

const getRowStyles = computed(() => {
  return {
    transform: `translate(${xTranslate.value}px, ${yTranslate.value}px)`,
  };
});

const container = ref(null) as unknown as Ref<HTMLElement>;
const { width: containerWidth, height: containerHeight } = useElementSize(container);
const debouncedContainerWidth = ref(0);
const debouncedContainerHeight = ref(0);
let debounceTimeout: NodeJS.Timeout | null = null;
watch([containerWidth, containerHeight], ([newWidth, newHeight]) => {
  if (debounceTimeout) clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    debouncedContainerWidth.value = newWidth;
    debouncedContainerHeight.value = newHeight;
  }, 100);
}, { immediate: true });

const currentlyDisplayedValues = computed(() => {
  if (!container.value)
    return {
      data: [],
      xTranslate: xTranslate.value,
      yTranslate: yTranslate.value,
    };

  let xTranslateValue = xTranslate.value;
  let yTranslateValue = yTranslate.value;

  const leftIndex = props.totalContentSize.xAxis.items.findIndex((e) => {
    const leftCoord = xScrollPosition.value;
    if (e.start <= leftCoord && e.start + e.width > leftCoord) return true;
    return false;
  });
  let rightIndex = props.totalContentSize.xAxis.items.findIndex((e) => {
    const rightCoord = xScrollPosition.value + debouncedContainerWidth.value;

    if (e.start <= rightCoord && e.start + e.width >= rightCoord) return true;
    return false;
  });

  const topIndex = props.totalContentSize.yAxis.items.findIndex((e) => {
    if (
      e.start <= yScrollPosition.value &&
      e.start + e.width > yScrollPosition.value
    )
      return true;
    return false;
  });
  let bottomIndex = props.totalContentSize.yAxis.items.findIndex((e) => {
    const bottomCoord = yScrollPosition.value + debouncedContainerHeight.value;
    if (e.start <= bottomCoord && e.start + e.width >= bottomCoord) return true;
    return false;
  });

  if (leftIndex >= 0 && rightIndex < 0)
    rightIndex = props.totalContentSize.xAxis.items.length - 1;
  if (topIndex >= 0 && bottomIndex < 0)
    bottomIndex = props.totalContentSize.yAxis.items.length - 1;

  let result = props.cells.map((cellRow, j: number) => {
    return cellRow.map((cell, i: number) => {
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
const openCellProperties = async (cell) => {
  await cellPropertiesModal.value?.run({ cell });
};

const drillthrough = (cell) => {
  emit("drillthrough", cell);
};

const onCellClick = (cell: any) => {
    eventBus.emit("cell_clicked", { i: cell.i, j: cell.j });
};

const onCellRightClick = (e: MouseEvent, cell: any) => {
    eventBus.emit("cell_right_clicked", { i: cell.i, j: cell.j });
};

function getFontStyles(fontStyle) {
  const result = {
    "text-decoration": "",
  };

  if (fontStyle && 1) result["font-weight"] = 800;
  if (fontStyle && 2) result["fontStyle"] = "italic";
  if (fontStyle && 4)
    result["text-decoration"] = result["text-decoration"] + " underline";
  if (fontStyle && 8)
    result["text-decoration"] = result["text-decoration"] + " line-through";

  return result;
}

const isCellEditable = (cell: any) => {
  console.log(cell);
  const val = cell?.UPDATEABLE?.Value ?? cell?.UPDATEABLE ?? cell?.Updateable?.Value ?? cell?.Updateable;
  return Number(val) === 1 || Number(val) === 2;
};

const onCellEdit = (cell: any) => {
  emit("cell-edit", { cell, value: cell.Value });
};

const focusCell = (col: number, row: number) => {
  if (!container.value) return;

  const colItem = (props.totalContentSize.xAxis.items as any[])?.[col];
  const rowItem = (props.totalContentSize.yAxis.items as any[])?.[row];

  if (colItem && rowItem) {
    const margin = 10;
    const left = container.value.scrollLeft;
    const right = left + container.value.clientWidth;
    const top = container.value.scrollTop;
    const bottom = top + container.value.clientHeight;

    let newScrollLeft = left;
    let newScrollTop = top;

    if (colItem.start < left) {
      newScrollLeft = colItem.start - margin;
    } else if (colItem.start + colItem.width > right) {
      newScrollLeft = colItem.start + colItem.width - container.value.clientWidth + margin;
    }

    if (rowItem.start < top) {
      newScrollTop = rowItem.start - margin;
    } else if (rowItem.start + rowItem.width > bottom) {
      newScrollTop = rowItem.start + rowItem.width - container.value.clientHeight + margin;
    }

    if (newScrollLeft !== left || newScrollTop !== top) {
      container.value.scrollLeft = newScrollLeft;
      container.value.scrollTop = newScrollTop;
      xScrollPosition.value = newScrollLeft;
      yScrollPosition.value = newScrollTop;
      eventBus.emit("scroll", {
        top: newScrollTop,
        left: newScrollLeft,
      });

      nextTick(() => {
        const targetInput = container.value?.querySelector(
          `input[data-col="${col}"][data-row="${row}"]`
        ) as HTMLInputElement | null;
        if (targetInput) {
          targetInput.focus();
          targetInput.select();
        }
      });
      return;
    }
  }

  const targetInput = container.value.querySelector(
    `input[data-col="${col}"][data-row="${row}"]`
  ) as HTMLInputElement | null;

  if (targetInput) {
    targetInput.focus();
    targetInput.select();
  }
};

const findNextEditableCell = (
  col: number,
  row: number,
  direction: 'tab' | 'shift-tab' | 'enter' | 'shift-enter' | 'left' | 'right' | 'up' | 'down'
) => {
  const cellsArray = props.cells as any[][];
  const maxCols = cellsArray?.[0]?.length || 0;
  const maxRows = cellsArray?.length || 0;
  if (maxCols === 0 || maxRows === 0) return null;

  const isEditable = (c: number, r: number) => {
    const cell = cellsArray?.[r]?.[c];
    if (!cell) return false;
    return isCellEditable(cell);
  };

  if (direction === 'tab') {
    let idx = row * maxCols + col + 1;
    const totalCells = maxRows * maxCols;
    for (let step = 0; step < totalCells; step++) {
      const currentIdx = (idx + step) % totalCells;
      const r = Math.floor(currentIdx / maxCols);
      const c = currentIdx % maxCols;
      if (isEditable(c, r)) {
        return { col: c, row: r };
      }
    }
  } else if (direction === 'shift-tab') {
    let idx = row * maxCols + col - 1;
    const totalCells = maxRows * maxCols;
    for (let step = 0; step < totalCells; step++) {
      const currentIdx = (idx - step + totalCells * 2) % totalCells;
      const r = Math.floor(currentIdx / maxCols);
      const c = currentIdx % maxCols;
      if (isEditable(c, r)) {
        return { col: c, row: r };
      }
    }
  } else if (direction === 'enter') {
    let idx = col * maxRows + row + 1;
    const totalCells = maxRows * maxCols;
    for (let step = 0; step < totalCells; step++) {
      const currentIdx = (idx + step) % totalCells;
      const r = currentIdx % maxRows;
      const c = Math.floor(currentIdx / maxRows);
      if (isEditable(c, r)) {
        return { col: c, row: r };
      }
    }
  } else if (direction === 'shift-enter') {
    let idx = col * maxRows + row - 1;
    const totalCells = maxRows * maxCols;
    for (let step = 0; step < totalCells; step++) {
      const currentIdx = (idx - step + totalCells * 2) % totalCells;
      const r = currentIdx % maxRows;
      const c = Math.floor(currentIdx / maxRows);
      if (isEditable(c, r)) {
        return { col: c, row: r };
      }
    }
  } else if (direction === 'down') {
    for (let r = row + 1; r < maxRows; r++) {
      if (isEditable(col, r)) {
        return { col, row: r };
      }
    }
  } else if (direction === 'up') {
    for (let r = row - 1; r >= 0; r--) {
      if (isEditable(col, r)) {
        return { col, row: r };
      }
    }
  } else if (direction === 'right') {
    for (let c = col + 1; c < maxCols; c++) {
      if (isEditable(c, row)) {
        return { col: c, row };
      }
    }
  } else if (direction === 'left') {
    for (let c = col - 1; c >= 0; c--) {
      if (isEditable(c, row)) {
        return { col: c, row };
      }
    }
  }

  return null;
};

const handleKeyDown = (event: KeyboardEvent, col: number, row: number) => {
  let direction: 'tab' | 'shift-tab' | 'enter' | 'shift-enter' | 'left' | 'right' | 'up' | 'down' | null = null;

  if (event.key === 'Tab') {
    event.preventDefault();
    direction = event.shiftKey ? 'shift-tab' : 'tab';
  } else if (event.key === 'Enter') {
    event.preventDefault();
    direction = event.shiftKey ? 'shift-enter' : 'enter';
  } else if (event.ctrlKey) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      direction = 'right';
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      direction = 'left';
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      direction = 'down';
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      direction = 'up';
    }
  }

  if (direction) {
    const nextCell = findNextEditableCell(col, row, direction);
    if (nextCell) {
      focusCell(nextCell.col, nextCell.row);
    }
  }
};
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
            <div v-if="props.isEditMode && isCellEditable(cell)" class="cell-input-container">
              <input
                type="text"
                v-model="cell.Value"
                class="cell-input"
                :data-col="cell.i"
                :data-row="cell.j"
                @click.stop
                @contextmenu.stop
                @change="onCellEdit(cell)"
                @keyup.enter="onCellEdit(cell)"
                @keydown="handleKeyDown($event, cell.i, cell.j)"
              />
            </div>
            <div v-else @click="onCellClick(cell)" @contextmenu="onCellRightClick($event, cell)">
              {{ toLocalString(getCellValue(cell)) }}
            </div>
          </template>
        </CellDropdown>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cells_container {
  overflow: auto;
  height: 100%;
  width: 100%;
  font-size: v-bind(fontSizeCSS);
}

.cell_row {
  display: flex;
}

.cell {
  border: 1px v-bind(borderColorCSS) solid;
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
  border-right: 1px v-bind(borderColorCSS) solid;
}

.cell_row:last-child>.cell {
  border-bottom: 1px v-bind(borderColorCSS) solid;
}

.virtual-scroll-container {
  overflow: hidden;
}

.cell-input-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 1px !important;
}

.cell-input {
  width: 100%;
  height: calc(100% - 2px);
  border: 1px solid silver;
  border-radius: 4px;
  padding: 0 6px;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  text-align: inherit;
  box-shadow: none;
  transition: all 0.15s ease-in-out;
  line-height: normal;
  box-sizing: border-box;
}

.cell-input:focus {
  outline: none;
  border-color: hsl(207, 90%, 54%);
  box-shadow: 0 0 0 3px hsla(207, 90%, 54%, 0.25), inset 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
}
</style>
