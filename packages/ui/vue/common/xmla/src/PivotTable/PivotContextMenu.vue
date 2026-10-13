<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from "vue";
import type { MenuAction, MenuTarget } from "./context";
import { useTranslation } from "org.eclipse.daanse.board.app.ui.vue.composables";

// One right-click menu for the whole table, opened at the pointer
const props = defineProps<{
  target: MenuTarget | null;
  x: number;
  y: number;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "action", action: MenuAction, target: MenuTarget): void;
}>();

const { t } = useTranslation("xmla");

const items = computed((): { action: MenuAction; label: string }[] => {
  const target = props.target;
  if (!target) return [];
  if (target.kind === "cell") {
    return [
      { action: "openCellProperties", label: t("PivotTable.openCellPropertiesButton") },
      { action: "drillthrough", label: t("PivotTable.drillthroughButton") },
    ];
  }
  // drill up is offered on every row member, but not on top-level column members
  const drillupDisabled = target.area === "columns" && target.member.LNum === "0";
  return [
    { action: "drilldown", label: t("PivotTable.drillDownButton") },
    ...(drillupDisabled
      ? []
      : [
          { action: "drillup" as const, label: t("PivotTable.drillUpButton") },
          { action: "openMemberProperties" as const, label: t("PivotTable.openButton") },
        ]),
    { action: "showMemberProperties", label: t("PivotTable.showButton") },
  ];
});

const menu = ref<HTMLElement | null>(null);
// kept inside the window: flipped to the left/top of the pointer near the edges
const position = ref({ left: 0, top: 0 });

watch(
  () => [props.target, props.x, props.y],
  async () => {
    if (!props.target) return;
    position.value = { left: props.x - 5, top: props.y + 10 };
    await nextTick();
    const rect = menu.value?.getBoundingClientRect();
    if (!rect) return;
    if (rect.right > window.innerWidth) position.value.left = Math.max(0, props.x - rect.width);
    if (rect.bottom > window.innerHeight) position.value.top = Math.max(0, props.y - rect.height);
  },
);

const onPointerDown = (event: PointerEvent) => {
  if (!menu.value?.contains(event.target as Node)) emit("close");
};
const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape") emit("close");
};
const onWindowChange = () => emit("close");

const listen = (on: boolean) => {
  if (on) {
    window.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onWindowChange);
    window.addEventListener("blur", onWindowChange);
  } else {
    window.removeEventListener("pointerdown", onPointerDown, true);
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("resize", onWindowChange);
    window.removeEventListener("blur", onWindowChange);
  }
};

// global listeners only while the menu is open
watch(
  () => !!props.target,
  (open, wasOpen) => {
    if (open !== !!wasOpen) listen(open);
  },
);
onBeforeUnmount(() => {
  if (props.target) listen(false);
});

const run = (action: MenuAction) => {
  const target = props.target;
  emit("close");
  if (target) emit("action", action, target);
};
</script>

<template>
  <Teleport to="body">
    <div v-if="target" ref="menu" class="pivotContextMenu" role="menu"
      :style="{ left: `${position.left}px`, top: `${position.top}px` }" @contextmenu.prevent>
      <button v-for="item in items" :key="item.action" type="button" role="menuitem" @click="run(item.action)">
        {{ item.label }}
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.pivotContextMenu {
  position: fixed;
  z-index: 40000;
  min-width: 180px;
  padding: 3px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-e3, 0 8px 24px rgba(0, 0, 0, 0.5));
  font-family: var(--font-sans);
  font-size: var(--text-sm);
}

.pivotContextMenu button {
  display: block;
  width: 100%;
  padding: 5px 9px;
  border: 0;
  border-radius: var(--radius-xs);
  background: none;
  text-align: left;
  font-family: inherit;
  font-size: inherit;
  color: var(--color-fg);
  cursor: pointer;
}

.pivotContextMenu button:hover {
  background-color: var(--color-raised);
}

.pivotContextMenu button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}
</style>
