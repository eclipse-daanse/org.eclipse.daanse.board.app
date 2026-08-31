<!--
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
-->

<script setup lang="ts">
// TODO: fix when testing widget repository
// import type { IWidget } from "@/types/Widgets";
// import { WidgetRepository } from "@/plugins/data/WidgetRepository";
// import SERVICE_IDENTIFIER from "@/config/identifiers/services";
import { inject, computed, ref, onUnmounted } from 'vue'
import {
  WidgetRepository,
  identifier as WidgetIdentifier,
} from 'org.eclipse.daanse.board.app.lib.api.widget'

import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'


const { widget, extraActions } = defineProps<{
  widget: any
  editEnabled: boolean
  /**
   * Actions from whoever places the widget.
   *
   * Stacking order and copying belong to the layout - it is the only thing
   * that knows there are other widgets. The wrapper knows how to show an
   * action, not which ones exist, so the two are kept apart.
   */
  extraActions?: Array<{ id: string; icon: string; label: string; danger?: boolean; run: () => void }>
}>();

const emit = defineEmits(['openSettings', 'removeWidget'])

const registeredWidgets = inject<WidgetRepository>(WidgetIdentifier)!

/*
 * The repository is deliberately framework-free, so its record is not
 * reactive. This counter bridges the gap: every registration change bumps
 * it, and the computeds below list it as a dependency. Without this, a
 * widget whose bundle stops would keep rendering stale code instead of
 * showing the placeholder - and never come back on restart.
 */
const registryVersion = ref(0)
const unsubscribe = registeredWidgets.onChange?.(() => { registryVersion.value++ })
onUnmounted(() => unsubscribe?.())

const isWidgetRegistered = computed(() => {
  void registryVersion.value
  return registeredWidgets.getWidget(widget.type)
})

const availableWidgets = computed(() => {
  void registryVersion.value
  return registeredWidgets.getAllWidgets()
})

const showDeleteConfirm = ref(false)
const widgetToDelete = ref<string | null>(null)

const deleteWidget = (id: string): void => {
  widgetToDelete.value = id
  showDeleteConfirm.value = true
}

const confirmDelete = (): void => {
  if (widgetToDelete.value) {
    emit('removeWidget', widgetToDelete.value)
  }
  showDeleteConfirm.value = false
  widgetToDelete.value = null
}

const openSettings = (id: string): void => {
  emit('openSettings', id)
}

/*
 * What can be done with a widget while the board is being edited.
 *
 * A list rather than a pair of buttons: it states in one place what the
 * board offers on a widget, and anything added here appears in the overlay
 * without further layout work.
 */
const actions = computed(() => [
  {
    id: 'settings',
    icon: 'settings',
    label: 'Einstellungen',
    run: () => openSettings(widget.uid),
  },
  ...(extraActions ?? []),
  {
    id: 'delete',
    icon: 'delete',
    label: 'Löschen',
    danger: true,
    run: () => deleteWidget(widget.uid),
  },
])

/*
 * Widget chrome as specified in docs/mdx-workbench-layout-mockups.html:
 * pane surface, a real 1px edge in the divider colour, 8px radius and the
 * --shadow-e2 elevation (0 2px 8px, 14% ink) instead of the old 5/5/12 drop
 * shadow. These are the defaults for newly placed widgets - widgets already
 * on a board keep the wrapperConfig stored with them.
 */
const defaultConfig = {
  title: "",
  backgroundColor: "#f6f7f9",
  backgroundColorTransparence: 255,
  titleColor: "#575d68",
  padding: 0,
  titleFontSize: 12,
  borderSize: 1,
  borderColor: "#ccd1d9",
  borderRadius: 8,
  blur: 0,
  fullscreen: false,
  shadowColor: "#191e2d",
  shadowBlur: 8,
  shadowX: 0,
  shadowY: 2,
  shadowTransparence: 36,
  transparency: 255
}

Object.keys(defaultConfig).forEach((key) => {
  // Check if the property exists and is a VariableWrapper
  // We assume if it's an object with 'value', it might be a wrapper or compatible.
  // However, to ensure it has methods like setTo, we might need to re-wrap or check prototype.
  // For simplicity/robustness, if it's strictly a primitive, we wrap it.
  // If it is undefined, we wrap the default.
  // If existing boards have primitives, this upgrades them.

  const val = widget.wrapperConfig[key];

  // Logic: if missing, use default wrapped.
  // If present but primitive, wrap it.
  // If present and object, assume it's ok (or maybe we should ensure instance?)
  // VariableWrapper constructor: constructor(value?: T)

  if (val === undefined || val === null) {
    widget.wrapperConfig[key] = new VariableWrapper(defaultConfig[key as keyof typeof defaultConfig]);
  } else if (typeof val !== 'object') {
    widget.wrapperConfig[key] = new VariableWrapper(val);
  } else if (!(val instanceof VariableWrapper)) {
    // It is an object but not a VariableWrapper instance (e.g. simple JSON object)
    // Re-hydrate if it has value property?
    if ('value' in val) {
      const v = new VariableWrapper(val.value);
      // handle other props like variable name if present?
      if ('variable' in val) v.variable = val.variable;
      widget.wrapperConfig[key] = v;
    } else {
      // Fallback
      widget.wrapperConfig[key] = new VariableWrapper(defaultConfig[key as keyof typeof defaultConfig]);
    }
  }
});


const getShadow = computed(() => {
  let post = ''
  const shadowTransparence = widget.wrapperConfig.shadowTransparence?.value;
  if (isByte(shadowTransparence)) {
    post = shadowTransparence.toString(16)
  }
  let color = (widget.wrapperConfig.shadowColor?.value || '#FFFFFF').replace('#', '')
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }

  const ret = `${widget.wrapperConfig.shadowX?.value}px ${widget.wrapperConfig.shadowY?.value}px ${widget.wrapperConfig.shadowBlur?.value}px #${color}${post}`
  return ret
})

const getBackground = computed(() => {
  let bgAlpha = 255
  const bgTransparence = widget.wrapperConfig.backgroundColorTransparence?.value;
  if (isByte(bgTransparence)) {
    bgAlpha = bgTransparence
  }
  // Also factor in overall widget transparency
  const transparencyVal = widget.wrapperConfig.transparency?.value;
  if (isByte(transparencyVal)) {
    bgAlpha = Math.round(bgAlpha * (transparencyVal / 255))
  }

  /*
   * No colour of its own means "follow the theme" - white was a sensible
   * default while the app only had a light surface, but it burns a hole in
   * a dark board. Widgets that carry a stored colour keep it.
   */
  const stored = widget.wrapperConfig.backgroundColor?.value
  if (!stored) return 'var(--color-pane)'

  let color = stored.replace('#', '')
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }

  const post = bgAlpha < 255 ? bgAlpha.toString(16).padStart(2, '0') : ''
  const ret = `#${color}${post}`
  return ret
})

const borderColor = computed(() => {
  return widget.wrapperConfig.borderColor?.value || 'var(--color-divider)'
})

const borderSize = computed(() => {
  return widget.wrapperConfig.borderSize?.value || 0
})

const borderRadius = computed(() => {
  return widget.wrapperConfig.borderRadius?.value || 0
})

const transparency = computed(() => {
  const t = widget.wrapperConfig.transparency?.value;
  return isByte(t)
    ? t / 255
    : 1
})

const titleFontSize = computed(() => {
  return widget.wrapperConfig.titleFontSize?.value || 16
})

const titleColor = computed(() => {
  return widget.wrapperConfig.titleColor?.value || 'var(--color-divider)'
})

// Unused? But kept for consistency
const getShadowColor = computed(() => {
  let color = (widget.wrapperConfig.shadowColor?.value || '#FFFFFF').replace('#', '')
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }
  const t = widget.wrapperConfig.shadowTransparence?.value;
  return (
    color +
    (isByte(t)
      ? t.toString(16)
      : '')
  )
})
function isByte(value: any): value is number {
  const parsedValue = parseInt(value);
  if (isNaN(parsedValue)) {
    return false;
  }
  return parsedValue >= 0 && parsedValue <= 255;
}
const getBlur = computed(() => {
  const b = widget.wrapperConfig.blur?.value;
  return (isByte(b)) ?
    b : ''
})
const getpadding = computed(() => {
  console.log(widget.wrapperConfig.padding)
  const int = parseInt(widget.wrapperConfig.padding?.value);
  return isNaN(int) ? 0 : int;
})

</script>

<template>
  <div
    class="flex relative flex-col w-full h-full wrapper-container"
    :style="{ '--blur-amount': getBlur + 'px', '--title-color': titleColor }">
    <div
      v-if="widget.wrapperConfig.title?.value"
      class="font-semibold capitalize"
      :style="{
        fontSize: titleFontSize + 'px',
        color: titleColor,
        padding: getpadding + 'px',
        paddingBottom: 0,
        opacity: transparency,
      }"
    >
      {{ widget.wrapperConfig.title.value }}
    </div>
    <template v-if="isWidgetRegistered">
      <div
        class="w-full h-full box-border cursor-pointer overflow-hidden sub"
        :style="{ position: 'relative', opacity: transparency }"
      >
        <VaScrollContainer color="var(--color-outline)" vertical horizontal>
          <component :is="availableWidgets[widget.type].component" :config="widget.config"
            v-model:configv="widget.config" :datasourceId="widget.config.datasourceId" :id="widget.uid || widget.id"
            class="widget_component" />
        </VaScrollContainer>
      </div>
      <!--
        While editing, hovering a widget dims it and offers what can be done
        with it. Dimmed rather than covered: you have to see which widget you
        are about to change, and a widget that disappears under its own menu
        is the wrong one half the time.
      -->
      <div class="actions" v-if="editEnabled" aria-hidden="false">
        <div class="actions__row">
          <button
            v-for="action in actions"
            :key="action.id"
            type="button"
            :class="['action', { 'action--danger': action.danger }]"
            :title="action.label"
            @click.stop="action.run()"
          >
            <VaIcon :name="action.icon" class="action__icon" />
            <span class="action__label">{{ action.label }}</span>
          </button>
        </div>
      </div>
    </template>
    <div v-else>
      <p>Widget type {{ widget.type }} is not registered.</p>
    </div>

    <VaModal
      v-model="showDeleteConfirm"
      size="small"
      hide-default-actions
      overlay-opacity="0.3"
    >
      <div style="text-align: center; padding: 1rem;">
        <VaIcon name="warning" color="danger" size="2rem" />
        <h5 style="margin: 0.5rem 0;">Widget löschen</h5>
        <p>Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.</p>
      </div>
      <template #footer>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
          <VaButton preset="secondary" @click="showDeleteConfirm = false; widgetToDelete = null;">
            Abbrechen
          </VaButton>
          <VaButton color="danger" icon="delete" @click="confirmDelete()">
            Löschen
          </VaButton>
        </div>
      </template>
    </VaModal>
  </div>
</template>
<style scoped>
.absolute {
  position: absolute;
}

.wrapper-container {

  background-color: v-bind(getBackground);
  border-color: v-bind(borderColor);
  border-width: v-bind(borderSize + "px");
  border-style: solid;


  width: 100%;
  height: 100%;
  box-Shadow: v-bind(getShadow);
  border-radius: v-bind(borderRadius + "px");
  backdrop-filter: blur(var(--blur-amount));
}

.sub {
  border-radius: v-bind(borderRadius + "px");
  padding: v-bind(getpadding + "px");
}

/*
 * The overlay covers the widget but does not take the pointer: only the
 * buttons do. Everything between them stays draggable, so a widget can
 * still be moved and resized while its actions are showing.
 */
.actions {
  position: absolute;
  inset: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  background: color-mix(in srgb, var(--color-bg, #121820) 70%, transparent);
  opacity: 0;
  transition: opacity 120ms ease;
  pointer-events: none;
}

.wrapper-container:hover .actions,
.actions:focus-within {
  opacity: 1;
}

/* A little above the middle: an optical centre sits higher than a measured one */
.actions__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px;
  max-width: 100%;
  padding: 0 4px;
  margin-bottom: 6%;
}

.action {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 60px;
  padding: 8px 6px 6px;
  border: 1px solid transparent;
  border-radius: var(--radius-md, 4px);
  background: transparent;
  color: var(--color-dim, #8b98a8);
  font: inherit;
  cursor: pointer;
  transition: color 100ms ease, background-color 100ms ease, border-color 100ms ease;
}

.action:hover,
.action:focus-visible {
  color: var(--color-fg, #e6edf5);
  background: color-mix(in srgb, var(--color-pane, #1a222c) 88%, transparent);
  border-color: var(--color-divider, #2b3644);
}

.action:focus-visible {
  outline: 2px solid var(--color-accent, #4fa3d1);
  outline-offset: 1px;
}

.action--danger:hover,
.action--danger:focus-visible {
  color: var(--color-err, #d1584f);
  border-color: color-mix(in srgb, var(--color-err, #d1584f) 40%, transparent);
}

.action__icon {
  font-size: 22px;
}

/* Says what the icon does; quiet until the action is the one being pointed at */
.action__label {
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.01em;
  white-space: nowrap;
}
</style>
