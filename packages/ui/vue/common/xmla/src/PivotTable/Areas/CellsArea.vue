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
import { computed, shallowReactive, watch } from "vue";
import { usePivotActions, usePivotBus } from "../context";
import { type AxisLayout, sizeAt } from "../logic/axis";
import { type CellDefaults, cellStyle, cellText, isCellEditable } from "../logic/cell";
import type { FormatEvaluator } from "../logic/conditionalFormat";
import { directionOf, findNextEditableCell } from "../logic/navigation";
import type { PivotCell } from "../logic/types";

const props = defineProps<{
  cells: PivotCell[][];
  rowAxis: AxisLayout;
  colAxis: AxisLayout;
  rowRange: { first: number; last: number };
  colRange: { first: number; last: number };
  defaults: CellDefaults;
  format: FormatEvaluator;
  isEditMode: boolean;
}>();

const emit = defineEmits<{
  (e: "cell-edit", payload: { cell: PivotCell & { i: number; j: number }; value: any }): void;
}>();

const bus = usePivotBus();
const actions = usePivotActions();

// Typed but not yet committed values, so they survive the cell scrolling out of view
const drafts = shallowReactive(new Map<string, string>());
watch(() => props.cells, () => drafts.clear());

interface VisibleCell {
  key: string;
  i: number;
  j: number;
  cell: PivotCell;
  text: string;
  editable: boolean;
  lastColumn: boolean;
  lastRow: boolean;
  style: Record<string, string | number>;
}

const visibleCells = computed(() => {
  const result: VisibleCell[] = [];
  const { cells, rowAxis, colAxis, defaults, format } = props;
  for (let j = props.rowRange.first; j <= props.rowRange.last; j++) {
    const row = cells[j];
    if (!row) continue;
    const top = rowAxis.starts[j];
    const height = sizeAt(rowAxis, j);
    for (let i = props.colRange.first; i <= props.colRange.last; i++) {
      const cell = row[i];
      if (!cell) continue;
      result.push({
        key: `${i}_${j}`,
        i,
        j,
        cell,
        text: cellText(cell),
        editable: isCellEditable(cell),
        lastColumn: i === colAxis.count - 1,
        lastRow: j === rowAxis.count - 1,
        style: {
          ...cellStyle(cell, defaults, format),
          left: `${colAxis.starts[i]}px`,
          top: `${top}px`,
          width: `${sizeAt(colAxis, i)}px`,
          height: `${height}px`,
        },
      });
    }
  }
  return result;
});

const withPosition = ({ cell, i, j }: VisibleCell, Value?: any) =>
  Value === undefined ? { ...cell, i, j } : { ...cell, Value, i, j };

const onCellClick = ({ i, j }: VisibleCell) => bus.emit("cell_clicked", { i, j });

const onCellContextMenu = (event: MouseEvent, visible: VisibleCell) => {
  bus.emit("cell_right_clicked", { i: visible.i, j: visible.j });
  actions.openMenu(event, { kind: "cell", cell: withPosition(visible) });
};

const draftValue = (visible: VisibleCell) => drafts.get(visible.key) ?? visible.cell.Value;

const onInput = (event: Event, visible: VisibleCell) => {
  drafts.set(visible.key, (event.target as HTMLInputElement).value);
};

const onCellEdit = (visible: VisibleCell) => {
  const value = draftValue(visible);
  emit("cell-edit", { cell: withPosition(visible, value), value });
};

const onKeyDown = (event: KeyboardEvent, { i, j }: VisibleCell) => {
  const direction = directionOf(event);
  if (!direction) return;
  event.preventDefault();
  const rows = props.cells.length;
  const columns = props.cells[0]?.length ?? 0;
  const next = findNextEditableCell({ col: i, row: j }, direction, columns, rows, (c, r) =>
    isCellEditable(props.cells[r]?.[c]),
  );
  if (next) actions.focusCell(next.col, next.row);
};
</script>

<template>
  <div class="cells" :style="{ width: `${colAxis.total}px`, height: `${rowAxis.total}px` }">
    <div v-for="visible in visibleCells" :key="visible.key" class="cell"
      :class="{ lastColumn: visible.lastColumn, lastRow: visible.lastRow }" :style="visible.style"
      @contextmenu="onCellContextMenu($event, visible)">
      <div v-if="isEditMode && visible.editable" class="cell-input-container">
        <input type="text" class="cell-input" :value="draftValue(visible)" :data-col="visible.i"
          :data-row="visible.j" @click.stop @contextmenu.stop @input="onInput($event, visible)"
          @change="onCellEdit(visible)" @keyup.enter="onCellEdit(visible)"
          @keydown="onKeyDown($event, visible)" />
      </div>
      <div v-else class="cell-content" @click="onCellClick(visible)">
        {{ visible.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.cells {
  position: relative;
  flex-shrink: 0;
}

.cell {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--pt-border-color);
  border-left: 1px solid var(--pt-border-color);
  padding: 3px;
  overflow: hidden;
}

.cell.lastColumn {
  border-right: 1px solid var(--pt-border-color);
}

.cell.lastRow {
  border-bottom: 1px solid var(--pt-border-color);
}

.cell-content {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
