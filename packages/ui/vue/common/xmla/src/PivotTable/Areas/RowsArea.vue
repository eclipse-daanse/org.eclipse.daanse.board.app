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
  // width of each hierarchy position
  memberWidths: number[];
  width: number;
  expanded: Set<string>;
  levelStyles: Map<number, LevelStyle>;
}>();

const bus = usePivotBus();
const actions = usePivotActions();

const visibleRows = computed(() => {
  const result = [];
  for (let j = props.range.first; j <= props.range.last; j++) {
    const entry = props.entries[j];
    if (!entry) continue;
    const style = { top: `${props.axis.starts[j]}px`, height: `${sizeAt(props.axis, j)}px` };
    const last = j === props.axis.count - 1;
    if (isProperty(entry)) {
      result.push({ j, style, last, property: entry.PROPERTY_NAME, members: [] });
      continue;
    }
    const members = entry.map((_, k) => {
      const view = memberView(props.entries, j, k, props.hierarchies, props.expanded, props.levelStyles);
      if (!view) return null;
      const memberStyle: Record<string, string> = { width: `${props.memberWidths[k]}px` };
      if (view.levelStyle) {
        memberStyle["background-color"] = view.levelStyle.backgroundColor;
        memberStyle["color"] = view.levelStyle.textColor;
        memberStyle["font-weight"] = String(view.levelStyle.fontWeight);
      }
      if (view.merged) memberStyle["border-top"] = "none";
      return { ...view, style: memberStyle };
    });
    result.push({ j, style, last, property: null, members });
  }
  return result;
});

const onContextMenu = (event: MouseEvent, member: PivotMember) => {
  bus.emit("row_right_clicked", member.UName);
  actions.openMenu(event, { kind: "member", area: "rows", member });
};
</script>

<template>
  <div class="rowsHeader_container" :style="{ width: `${width}px`, height: `${axis.total}px` }">
    <div v-for="row in visibleRows" :key="row.j" class="rowsHeader" :class="{ last: row.last }" :style="row.style">
      <div v-if="row.property !== null" class="rowMember rowMemberContent propertyRow">
        {{ row.property }}
      </div>
      <template v-else>
        <template v-for="(view, k) in row.members" :key="k">
          <div v-if="view" class="rowMember" :style="view.style" @click="bus.emit('row_clicked', view.member.UName)"
            @contextmenu="onContextMenu($event, view.member)">
            <div class="rowMemberOffset" v-for="n in view.indent" :key="n"></div>
            <div class="rowMemberContent">
              <div v-if="view.toggle === 'expand'" class="expandIcon">
                <va-icon name="chevron_right" size="small" @click="actions.expand(view.member, 'rows')" />
              </div>
              <div v-else-if="view.toggle === 'collapse'" class="expandIcon">
                <va-icon name="expand_more" size="small" @click="actions.collapse(view.member, 'rows')" />
              </div>
              <div class="rowMemberCaption">{{ view.caption }}</div>
            </div>
          </div>
        </template>
      </template>
      <div class="row_dragAreaBottom" @mousedown="actions.startResize('rows', row.j, $event)"></div>
      <div v-if="row.j > 0" class="row_dragAreaTop" @mousedown="actions.startResize('rows', row.j - 1, $event)"></div>
    </div>
  </div>
</template>

<style scoped>
.rowsHeader_container {
  position: sticky;
  left: 0;
  z-index: 1;
  flex-shrink: 0;
  color: var(--pt-header-text-color);
}

.rowsHeader {
  position: absolute;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  padding-right: 10px;
  line-height: var(--pt-row-height);
  border-top: 1px solid var(--pt-border-color);
  background-color: var(--pt-header-background-color);
}

.rowsHeader.last {
  border-bottom: 1px solid var(--pt-border-color);
}

.rowMember {
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100%;
  border-left: 1px solid var(--pt-border-color);
  align-items: flex-start;
  font-weight: var(--pt-header-font-weight);
}

.rowMemberOffset {
  width: 30px;
  height: 100%;
  flex-shrink: 0;
  border-right: 1px dashed lightgrey;
}

.rowMemberContent {
  flex: 1 1 auto;
  min-width: 0;
  padding-left: 5px;
  display: flex;
}

.rowMemberCaption {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 100%;
}

.expandIcon {
  flex-grow: 0;
  cursor: pointer;
}

.propertyRow {
  width: 100%;
  min-width: 150px;
  font-style: italic;
  font-weight: 500;
}

.row_dragAreaTop {
  position: absolute;
  width: 100%;
  height: 5px;
  left: 0;
  top: 0;
  cursor: ns-resize;
  z-index: 1;
}

.row_dragAreaBottom {
  position: absolute;
  height: 5px;
  width: 100%;
  bottom: -1px;
  left: 0;
  cursor: ns-resize;
  z-index: 1;
}
</style>
