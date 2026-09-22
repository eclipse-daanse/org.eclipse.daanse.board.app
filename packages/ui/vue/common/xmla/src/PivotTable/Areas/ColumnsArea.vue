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
import { computed } from "vue";
import { usePivotActions, usePivotBus } from "../context";
import { type AxisLayout, sizeAt } from "../logic/axis";
import { type AxisHierarchies, memberView } from "../logic/hierarchy";
import { type AxisEntry, type LevelStyle, type PivotMember, isProperty } from "../logic/types";

const props = defineProps<{
  entries: AxisEntry[];
  axis: AxisLayout;
  range: { first: number; last: number };
  hierarchies: AxisHierarchies;
  // height of each hierarchy position
  memberHeights: number[];
  height: number;
  expanded: Set<string>;
  levelStyles: Map<number, LevelStyle>;
}>();

const bus = usePivotBus();
const actions = usePivotActions();

const visibleColumns = computed(() => {
  const result = [];
  for (let i = props.range.first; i <= props.range.last; i++) {
    const entry = props.entries[i];
    if (!entry) continue;
    const style = { left: `${props.axis.starts[i]}px`, width: `${sizeAt(props.axis, i)}px` };
    const last = i === props.axis.count - 1;
    if (isProperty(entry)) {
      result.push({ i, style, last, property: entry.PROPERTY_NAME, members: [] });
      continue;
    }
    const members = entry.map((_, k) => {
      const view = memberView(props.entries, i, k, props.hierarchies, props.expanded, props.levelStyles);
      if (!view) return null;
      const memberStyle: Record<string, string> = { height: `${props.memberHeights[k]}px` };
      if (view.levelStyle) {
        memberStyle["background-color"] = view.levelStyle.backgroundColor;
        memberStyle["color"] = view.levelStyle.textColor;
        memberStyle["font-weight"] = String(view.levelStyle.fontWeight);
      }
      if (view.merged) memberStyle["border-left"] = "none";
      return { ...view, style: memberStyle };
    });
    result.push({ i, style, last, property: null, members });
  }
  return result;
});

const onContextMenu = (event: MouseEvent, member: PivotMember) => {
  bus.emit("column_right_clicked", member.UName);
  actions.openMenu(event, { kind: "member", area: "columns", member });
};
</script>

<template>
  <div class="columnHeader_container" :style="{ width: `${axis.total}px`, height: `${height}px` }">
    <div v-for="column in visibleColumns" :key="column.i" class="columnHeader" :class="{ last: column.last }"
      :style="column.style">
      <div v-if="column.property !== null" class="columnMember columnMemberContent columnMemberHeader propertyColumn">
        {{ column.property }}
      </div>
      <template v-else>
        <template v-for="(view, k) in column.members" :key="k">
          <div v-if="view" class="columnMember" :style="view.style" @click="bus.emit('column_clicked', view.member.UName)"
            @contextmenu="onContextMenu($event, view.member)">
            <div class="columnMemberOffset" v-for="n in view.indent" :key="n"></div>
            <div class="columnMemberContent">
              <div v-if="view.toggle === 'expand'" class="expandIcon">
                <va-icon name="chevron_right" size="small" @click="actions.expand(view.member, 'columns')" />
              </div>
              <div v-else-if="view.toggle === 'collapse'" class="expandIcon">
                <va-icon name="expand_more" size="small" @click="actions.collapse(view.member, 'columns')" />
              </div>
              <div class="columnMemberHeader">{{ view.caption }}</div>
            </div>
          </div>
        </template>
      </template>
      <div class="col_dragAreaRight" @mousedown="actions.startResize('columns', column.i, $event)"></div>
      <div v-if="column.i > 0" class="col_dragAreaLeft"
        @mousedown="actions.startResize('columns', column.i - 1, $event)"></div>
    </div>
  </div>
</template>

<style scoped>
.columnHeader_container {
  position: relative;
  flex-shrink: 0;
  color: var(--pt-header-text-color);
}

.columnHeader {
  position: absolute;
  top: 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  background-color: var(--pt-header-background-color);
}

.columnHeader.last {
  border-right: 1px solid var(--pt-border-color);
}

.columnMember {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid var(--pt-border-color);
  border-left: 1px solid var(--pt-border-color);
  font-weight: var(--pt-header-font-weight);
}

.columnMemberContent {
  display: flex;
  flex-shrink: 0;
  padding-left: 3px;
  height: var(--pt-row-height);
  line-height: var(--pt-row-height);
}

.columnMemberOffset {
  flex-shrink: 0;
  height: var(--pt-row-height);
  border-bottom: 1px dashed lightgray;
}

.columnMemberHeader {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.expandIcon {
  flex-grow: 0;
  cursor: pointer;
}

.propertyColumn {
  font-style: italic;
  height: 100%;
  font-weight: 500;
}

.col_dragAreaLeft {
  position: absolute;
  height: 100%;
  width: 5px;
  left: 0;
  top: 0;
  cursor: ew-resize;
  z-index: 1;
}

.col_dragAreaRight {
  position: absolute;
  height: 100%;
  width: 5px;
  right: -1px;
  top: 0;
  cursor: ew-resize;
  z-index: 1;
}
</style>
