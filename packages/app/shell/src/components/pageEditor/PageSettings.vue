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
/*
 * The settings of one page, over the board they change.
 *
 * Grouped the way the decisions are made: what the page is called, which
 * layout carries it, what lies behind it, and whether it shows up in
 * navigation. Every field writes straight through - there is no Save, and
 * no way to lose what you typed by closing the window.
 */
import { inject, ref, computed, watch, onMounted } from 'vue'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
  type Page,
  type StoredPage,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier,
} from 'org.eclipse.daanse.board.app.lib.api.layout.page'
import { usePages } from '@/composables/usePages'
import {
  DButton,
  DColorInput,
  DInput,
  DSelect,
  DSwitch,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { SettingsForm } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'

const pageid = defineModel<string>({ required: true })
const emit = defineEmits(['close'])

const pageRepo = inject<PageRegistryI>(PageIdentifier)
const layoutRepo = inject<LayoutRepositoryI>(LayoutRepositoryIdentifier)
const pageSettings = ref<StoredPage | null>(null)

const availableLayouts = computed(() => layoutRepo?.getAllLayouts() ?? [])

const defaultLayout = computed(
  () =>
    availableLayouts.value.find(
      (layout) => layout.id === 'org.eclipse.daanse.board.app.ui.vue.layouts.base',
    ) ?? availableLayouts.value[0],
)

/*
 * The page names its layout by id; the object behind it carries the Vue
 * components and the settings form, and is resolved here rather than stored
 * with the board.
 */
const layoutId = computed({
  get: () => pageSettings.value?.layoutId ?? '',
  set: (id: string) => {
    if (pageSettings.value) pageSettings.value.layoutId = id
  },
})

const chosenLayout = computed(() =>
  pageSettings.value?.layoutId ? layoutRepo?.getLayout(pageSettings.value.layoutId) : undefined,
)

const backgroundSizes = [
  { uid: 'auto', name: 'Auto' },
  { uid: 'cover', name: 'Füllend' },
  { uid: 'contain', name: 'Einpassend' },
]

const backgroundRepeats = [
  { uid: 'no-repeat', name: 'Nicht wiederholen' },
  { uid: 'repeat', name: 'Wiederholen' },
  { uid: 'repeat-x', name: 'Waagerecht wiederholen' },
  { uid: 'repeat-y', name: 'Senkrecht wiederholen' },
]

const backgroundPositions = [
  { uid: 'center', name: 'Mitte' },
  { uid: 'top', name: 'Oben' },
  { uid: 'bottom', name: 'Unten' },
  { uid: 'left', name: 'Links' },
  { uid: 'right', name: 'Rechts' },
  { uid: 'top left', name: 'Oben links' },
  { uid: 'top right', name: 'Oben rechts' },
  { uid: 'bottom left', name: 'Unten links' },
  { uid: 'bottom right', name: 'Unten rechts' },
]

/* Only worth asking about once there is an image to place */
const hasBackgroundImage = computed(() => Boolean(pageSettings.value?.backgroundImage?.trim()))

/*
 * Read once, on the id the panel was opened with. Reading fresh rather than
 * binding the stored object: what is edited here is a copy, written back on
 * every change, so a half-typed name never reaches anything else.
 */
function load() {
  if (!pageid.value || !pageRepo) {
    pageSettings.value = null
    return
  }

  let original: Page | undefined
  try {
    original = pageRepo.getPage(pageid.value)
  } catch {
    // A page that is not in the registry - it was removed, or never there
    original = undefined
  }

  /*
   * Copied feature by feature. A modelled object keeps its values in
   * private fields behind getters, so spreading it would hand back _name
   * and _id rather than what the model calls them.
   */
  pageSettings.value = original
    ? {
        id: original.id as string,
        name: original.name as string,
        description: original.description,
        icon: original.icon,
        visibleInNavigation: original.visibleInNavigation ?? true,
        layoutId: original.layoutId ?? defaultLayout.value?.id,
        layoutSettings: original.layoutSettings as Record<string, any> | undefined,
        backgroundColor: original.backgroundColor,
        backgroundImage: original.backgroundImage,
        backgroundSize: original.backgroundSize as 'auto' | 'cover' | 'contain' | undefined,
        backgroundPosition: original.backgroundPosition,
        backgroundRepeat: original.backgroundRepeat as StoredPage['backgroundRepeat'],
      }
    : null
}

onMounted(load)
/* Opened again for a different page while still on screen */
watch(pageid, load)


watch(
  pageSettings,
  () => {
    if (!pageSettings.value) return
    pageRepo?.updatePage(pageSettings.value)
  },
  { deep: true },
)
</script>

<template>
  <aside class="page-settings" aria-label="Seite einrichten">
    <header class="head">
      <h2 class="head__title">Seite einrichten</h2>
      <button type="button" class="head__close" aria-label="Schließen" @click="emit('close')">
        ×
      </button>
    </header>

    <div class="body">
      <!-- Said out loud rather than rendering nothing: a panel that opens
           empty looks like a fault in the button that opened it -->
      <p v-if="!pageSettings" class="missing">
        Diese Seite ist nicht mehr da. Wähle oben eine andere.
      </p>

      <template v-else>
      <section class="group">
        <h3 class="group__label">Seite</h3>
        <DInput v-model="pageSettings.name" label="Name" />
        <DInput v-model="pageSettings.description" label="Beschreibung" />
        <DInput v-model="pageSettings.icon" label="Symbol" placeholder="Name eines Material-Icons" />
      </section>

      <section class="group">
        <h3 class="group__label">Layout</h3>
        <DSelect v-model="layoutId" label="Layout" :options="availableLayouts" value-key="id" label-key="name" />
        <!--
          What a layout itself offers. A model where the layout carries one -
          the form is a model beside its Ecore, the same way a widget's is -
          and the layout's own component where it does not.
        -->
        <SettingsForm
          v-if="chosenLayout?.settingsForm"
          v-model="pageSettings.layoutSettings"
          :create="chosenLayout!.settingsForm!.create as () => any"
          :ui-model-xmi="chosenLayout!.settingsForm!.xmi"
          :domain-package="chosenLayout!.settingsForm!.ePackage() as any"
          :ui-model-uri="chosenLayout!.settingsForm!.uri"
          :entry-forms="chosenLayout!.settingsForm!.entryForms"
        />
        <component
          v-else-if="chosenLayout?.settings"
          :is="chosenLayout!.settings"
          v-model="pageSettings.layoutSettings"
        />
      </section>

      <section class="group">
        <h3 class="group__label">Hintergrund</h3>
        <!-- Stacked: swatch and hex field together are wider than a label
             plus a control fits in a panel this narrow -->
        <DColorInput v-model="pageSettings.backgroundColor" label="Farbe" stacked />
        <DInput
          v-model="pageSettings.backgroundImage"
          label="Bild"
          placeholder="Adresse eines Bildes"
        />
        <template v-if="hasBackgroundImage">
          <DSelect v-model="pageSettings.backgroundSize" label="Größe" :options="backgroundSizes" />
          <DSelect
            v-model="pageSettings.backgroundRepeat"
            label="Wiederholung"
            :options="backgroundRepeats"
          />
          <DSelect
            v-model="pageSettings.backgroundPosition"
            label="Position"
            :options="backgroundPositions"
          />
        </template>
      </section>

      <section class="group">
        <h3 class="group__label">Navigation</h3>
        <DSwitch v-model="pageSettings.visibleInNavigation" label="In der Navigation zeigen" />
      </section>

      <!-- Not a field: changing it would break the address this page is open at -->
      <p class="ident">
        Kennung <code>{{ pageSettings.id }}</code>
      </p>
      </template>
    </div>

    <footer class="foot">
      <DButton intent="primary" @click="emit('close')">Fertig</DButton>
    </footer>
  </aside>
</template>

<style scoped>
/*
 * A docked panel on the right, the same surface and edge as the rest of the
 * workbench. It keeps the widget settings' shape - head, scrolling body,
 * footer - so the two read as the same kind of thing.
 */
.page-settings {
  position: absolute;
  top: 12px;
  right: 12px;
  bottom: 12px;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  width: 340px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-md, 4px);
  box-shadow: var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%));
}

.head {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: none;
  height: 34px;
  padding: 0 6px 0 12px;
  border-bottom: 1px solid var(--color-divider);
}

.head__title {
  flex: 1;
  margin: 0;
  font-size: var(--text-sm, 12px);
  font-weight: 500;
  color: var(--color-fg);
}

.head__close {
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 1;
  color: var(--color-dim);
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.head__close:hover {
  color: var(--color-fg);
  background-color: var(--color-raised);
}

.head__close:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px;
}

.group + .group {
  margin-top: 18px;
}

.group__label {
  margin: 0 0 8px;
  font-size: var(--text-xs, 11px);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-dim);
}

.group > :deep(.field) {
  margin-bottom: 8px;
}

/* Shown, not offered: it is how the page is addressed, not a setting */
.ident {
  margin: 18px 0 0;
  font-size: var(--text-xs, 11px);
  color: var(--color-dim);
}

.ident code {
  font-family: var(--font-mono);
  user-select: all;
}

.missing {
  margin: 0;
  font-size: var(--text-sm, 12px);
  color: var(--color-dim);
}

.foot {
  display: flex;
  justify-content: flex-end;
  flex: none;
  padding: 8px 12px;
  border-top: 1px solid var(--color-divider);
}
</style>
