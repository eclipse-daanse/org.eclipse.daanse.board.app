<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  The topbar from docs/mdx-workbench-layout-mockups.html: 42px tall, the
  Daanse mark on the left, a breadcrumb for where you are, and the
  view/edit switch on the right - the mockups move that switch out of the
  navigation into the topbar, because it is a mode of the open board, not
  a place you navigate to.
-->

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
  type PageI,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier,
} from 'org.eclipse.daanse.board.app.lib.api.layout.page'
import { v4 } from 'uuid'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { usePages } from '@/composables/usePages'
import { useWidgetPalette } from '@/composables/useWidgetPalette'
import { useBoardBackdrop } from '@/composables/useBoardBackdrop'
import { useGridSnap } from '@/composables/useGridSnap'

const route = useRoute()
const router = useRouter()

/** The page currently open, if any - drives both crumb and mode switch. */
const pageId = computed(() => (route.params.pageid as string | undefined) ?? '')

const isEditing = computed(
  () => route.name === 'edit' || route.name === 'pageEdit' || String(route.path).endsWith('/edit'),
)

/**
 * Where you are, as a path of places. Everything but the last one is a
 * step you can go back to - a crumb that cannot be clicked is a label,
 * and labels do not belong in a path.
 */
interface Crumb {
  label: string
  to?: string
}

const crumb = computed<Crumb[]>(() => {
  const boards: Crumb = { label: 'Boards', to: '/' }
  const board: Crumb = {
    label: pageId.value ? `Board ${pageId.value.slice(0, 8)}` : 'Board',
    to: pageId.value ? `/page/${pageId.value}` : undefined,
  }
  switch (route.name) {
    case 'home':
      return [{ label: 'Boards' }]
    case 'page':
      return [boards, { label: board.label }]
    case 'edit':
    case 'pageEdit':
      return [boards, board, { label: 'Bearbeiten' }]
    case 'data':
      return [boards, { label: 'Verbindungen & Daten' }]
    case 'config':
      return [boards, { label: 'Konfiguration' }]
    case 'save':
      return [boards, { label: 'Speicher' }]
    case 'test':
      return [boards, { label: 'Test' }]
    default:
      return [boards, { label: String(route.name ?? 'Board') }]
  }
})

const showModes = computed(() => Boolean(pageId.value))

/* ------------------------------------------------------- pages of a board */

/*
 * Which page of the board is open, and the way to another one.
 *
 * This used to float over the board in its own card, which put the answer
 * to "where am I" in two places: a breadcrumb at the top and a card at the
 * bottom. It belongs next to the breadcrumb, because it is the last step of
 * the same path - a board, then a page within it.
 */
const pageRepo = inject<PageRegistryI>(PageIdentifier)
const layoutRepo = inject<LayoutRepositoryI>(LayoutRepositoryIdentifier)

const { openSettings: openPageSettings } = usePages()

/*
 * The modelled pages. Reading this list is what makes everything below
 * re-run; there used to be a shared counter here, bumped by whoever
 * changed a page, because the registry told Vue nothing.
 */
const modelledPages = useEList(inject<Workspace>(WORKSPACE)!, (w) => w.pages)

/*
 * The widget palette floats over the board, so the way to it belongs here
 * rather than on the board it covers - a button underneath a window is a
 * button you cannot press.
 */
const { visible: paletteVisible, toggle: togglePalette } = useWidgetPalette()

/*
 * The page's own background, while editing. Offered only where there is one
 * to show - a switch that changes nothing is worse than no switch.
 */
const { shown: backdropShown, toggle: toggleBackdrop } = useBoardBackdrop()

/* Whether a dragged widget lines up with the grid it is dragged over. */
const { snapping, toggle: toggleSnapping } = useGridSnap()

const hasBackdrop = computed(() => {
  void modelledPages.value
  if (!pageId.value) return false
  try {
    const page = pageRepo?.getPage(pageId.value)
    return Boolean(page?.backgroundImage?.trim() || page?.backgroundColor?.trim())
  } catch {
    return false
  }
})

const pages = computed<PageI[]>(() => {
  void modelledPages.value
  const ids = pageRepo?.getAllPageIds() ?? []
  const found: PageI[] = []
  for (const id of ids) {
    const page = pageRepo?.getPage(id)
    if (page) found.push(page)
  }
  return found
})

const currentPageName = computed(() => {
  void modelledPages.value
  if (!pageId.value) return ''
  try {
    return pageRepo?.getPage(pageId.value)?.name ?? 'Seite'
  } catch {
    // A page that was removed while open - the name is gone, the id is not
    return 'Seite'
  }
})

const pagesOpen = ref(false)

function choosePage(id: string) {
  pagesOpen.value = false
  if (id === pageId.value) return
  router.push(isEditing.value ? `/page/${id}/edit` : `/page/${id}`)
}

/* Clicking anywhere else closes it, as a menu should */
const menuHost = ref<HTMLElement>()
function onDocumentPointer(event: PointerEvent) {
  if (!pagesOpen.value) return
  if (!menuHost.value?.contains(event.target as Node)) pagesOpen.value = false
}
function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') pagesOpen.value = false
}
onMounted(() => {
  document.addEventListener('pointerdown', onDocumentPointer)
  document.addEventListener('keydown', onEscape)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocumentPointer)
  document.removeEventListener('keydown', onEscape)
})

/*
 * Adding and removing pages came with the card this replaces, so they come
 * along: a switcher you cannot add to is a list of what already exists.
 *
 * A new page is made and opened straight away, named "Neue Seite" - the
 * name is a field in its settings, which is one click from here, rather
 * than a question asked before the page exists.
 */
function addPage() {
  const id = v4()
  pageRepo?.registerPage({
    id,
    name: 'Neue Seite',
    description: '',
    icon: '',
    visibleInNavigation: true,
    /* The id; the layout itself is resolved from the repository on render. */
    layoutId: 'org.eclipse.daanse.board.app.ui.vue.layouts.base',
  })
  pagesOpen.value = false
  router.push(`/page/${id}/edit`)
}

/* The last page is not removable: a board with no page has nothing to show */
const canRemove = computed(() => pages.value.length > 1)

function removePage(id: string) {
  if (!canRemove.value) return
  const page = pages.value.find((p) => p.id === id)
  if (!confirm(`Seite „${page?.name ?? id}" löschen? Das lässt sich nicht rückgängig machen.`)) return

  pageRepo?.unregisterPage(id)

  // Standing on the page that just went: move to whichever is left
  if (id === pageId.value) {
    const next = pages.value.find((p) => p.id !== id)
    if (next) router.push(isEditing.value ? `/page/${next.id}/edit` : `/page/${next.id}`)
  }
}


const openView = () => {
  if (pageId.value) router.push(`/page/${pageId.value}`)
}
const openEdit = () => {
  if (pageId.value) router.push(`/page/${pageId.value}/edit`)
}

/*
 * Storing belongs to the board you are looking at, not to a separate area
 * in the rail. It opens the launcher on its storage view, where the target
 * entry is picked; saving in place without asking comes later, once the
 * workspace origin is carried across reloads.
 */
const openStorage = () => router.push({ path: '/', query: { view: 'storage' } })

/* Appearance is global, so it hangs off the identity end of the bar rather
 * than the rail, which belongs to whatever board is open. */
const openAppearance = () => router.push('/appearance')
</script>

<template>
  <header class="topbar">
    <span class="brand">
      <span class="brand-mark" aria-hidden="true">D</span>
      <span class="brand-name">Daanse Board</span>
    </span>

    <nav class="crumb" aria-label="Pfad">
      <template v-for="(part, i) in crumb" :key="part.label + i">
        <span v-if="i > 0" class="crumb-sep" aria-hidden="true">/</span>
        <button
          v-if="part.to && i < crumb.length - 1"
          type="button"
          class="crumb-part crumb-link"
          @click="router.push(part.to)"
        >
          {{ part.label }}
        </button>
        <span v-else :class="['crumb-part', { current: i === crumb.length - 1 }]">
          {{ part.label }}
        </span>
      </template>
    </nav>

    <!--
      The page of the board, and its settings. Right after the breadcrumb
      because it is the last step of the same path, and only while a board
      is open - there is no page to switch when there is no board.
    -->
    <div v-if="showModes" ref="menuHost" class="pages">
      <button
        type="button"
        class="pages__current"
        :aria-expanded="pagesOpen"
        aria-haspopup="menu"
        title="Seite wechseln"
        @click="pagesOpen = !pagesOpen"
      >
        <span class="pages__name">{{ currentPageName }}</span>
        <span class="pages__caret" aria-hidden="true">▾</span>
      </button>

      <ul v-if="pagesOpen" class="pages__menu" role="menu">
        <li v-for="page in pages" :key="page.id" role="none" class="pages__line">
          <button
            type="button"
            role="menuitem"
            :class="['pages__item', { on: page.id === pageId }]"
            @click="choosePage(page.id as string)"
          >
            {{ page.name }}
          </button>
          <button
            v-if="canRemove"
            type="button"
            class="pages__remove"
            :title="`Seite „${page.name}“ löschen`"
            :aria-label="`Seite ${page.name} löschen`"
            @click.stop="removePage(page.id as string)"
          >
            ×
          </button>
        </li>
        <li class="pages__sep" role="separator"></li>
        <li role="none">
          <button type="button" role="menuitem" class="pages__item pages__add" @click="addPage">
            + Neue Seite
          </button>
        </li>
      </ul>
    </div>

    <button
      v-if="isEditing"
      type="button"
      :class="['icon-action', { on: snapping }]"
      :aria-pressed="snapping"
      title="Am Raster ausrichten"
      aria-label="Widgets am Raster ausrichten"
      @click="toggleSnapping"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
        <path
          d="M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17"
          fill="none"
          stroke="currentColor"
          stroke-width="1.3"
          opacity="0.55"
        />
        <rect x="9" y="9" width="6" height="6" fill="currentColor" />
      </svg>
    </button>

    <button
      v-if="isEditing && hasBackdrop"
      type="button"
      :class="['icon-action', { on: backdropShown }]"
      :aria-pressed="backdropShown"
      title="Hintergrund der Seite zeigen"
      aria-label="Hintergrund der Seite beim Bearbeiten zeigen oder verbergen"
      @click="toggleBackdrop"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6" />
        <circle cx="9" cy="10" r="1.6" fill="currentColor" />
        <path d="M4 17l4.5-4.5 3 3L15 12l5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
      </svg>
    </button>

    <button
      v-if="isEditing"
      type="button"
      :class="['icon-action', { on: paletteVisible }]"
      :aria-pressed="paletteVisible"
      title="Widgets"
      aria-label="Widget-Palette zeigen oder verbergen"
      @click="togglePalette"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.6" />
      </svg>
    </button>

    <button
      v-if="showModes"
      type="button"
      class="icon-action"
      title="Seite einrichten"
      aria-label="Seite einrichten"
      @click="openPageSettings(pageId)"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6" />
        <path
          d="M12 4.2v2M12 17.8v2M4.2 12h2M17.8 12h2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <span class="spacer"></span>

    <button
      v-if="showModes"
      type="button"
      class="action"
      title="Arbeitsstand speichern oder laden"
      @click="openStorage"
    >
      Speichern
    </button>

    <div v-if="showModes" class="modes" role="group" aria-label="Modus">
      <button
        type="button"
        :class="['mode', { on: !isEditing }]"
        :aria-pressed="!isEditing"
        @click="openView"
      >
        Ansicht
      </button>
      <button
        type="button"
        :class="['mode', { on: isEditing }]"
        :aria-pressed="isEditing"
        @click="openEdit"
      >
        Bearbeiten
      </button>
    </div>

    <button
      type="button"
      class="icon-action"
      title="Erscheinungsbild"
      aria-label="Erscheinungsbild"
      @click="openAppearance"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
    </button>

    <span class="avatar" title="Angemeldet">MH</span>
  </header>

  <Teleport to="body">
    <!-- modals mounted by other components land here -->
  </Teleport>
</template>

<style scoped>
.topbar {
  height: var(--spacing-topbar, 42px);
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  background: var(--color-pane);
  border-bottom: 1px solid var(--color-divider);
  color: var(--color-fg);
  font-size: var(--text-sm, 12px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: none;
  white-space: nowrap;
  font-weight: 600;
  font-size: var(--text-base, 13px);
}
.brand-mark {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-sm, 5px);
  background: var(--color-brandFill);
  color: var(--color-onBrand);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs, 11px);
  font-weight: 700;
  flex: none;
}

.crumb {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  color: var(--color-dim);
}
.crumb-part {
  overflow: hidden;
  text-overflow: ellipsis;
}
.crumb-part.current {
  color: var(--color-fg);
  font-weight: 500;
}
.crumb-link {
  padding: 0;
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.crumb-link:hover {
  color: var(--color-fg);
  text-decoration: underline;
}

.crumb-link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.crumb-sep {
  color: var(--color-outline);
}

.spacer {
  flex: 1 1 auto;
  min-width: 8px;
}

/* ------------------------------------------------------ page of a board */

.pages {
  position: relative;
  margin-left: 10px;
  flex: none;
}

/*
 * Quieter than .action: this says where you are, it does not ask to be
 * pressed. It takes the breadcrumb's weight so the two read as one path.
 */
.pages__current {
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 200px;
  height: 24px;
  padding: 0 7px;
  font-size: var(--text-sm, 12px);
  font-family: inherit;
  color: var(--color-fg);
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.pages__current:hover {
  background-color: var(--color-raised);
  border-color: var(--color-divider);
}

.pages__current:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.pages__name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pages__caret {
  font-size: 9px;
  color: var(--color-dim);
}

.pages__menu {
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  z-index: 400;
  min-width: 180px;
  max-height: 60vh;
  overflow-y: auto;
  padding: 3px;
  margin: 0;
  list-style: none;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm, 3px);
  box-shadow: var(--shadow-e2, 0 2px 8px rgb(0 0 0 / 14%));
}

.pages__item {
  display: block;
  width: 100%;
  padding: 5px 8px;
  font-size: var(--text-sm, 12px);
  font-family: inherit;
  text-align: left;
  color: var(--color-fg);
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.pages__item:hover {
  background-color: var(--color-raised);
}

/* The row holds the name and, on hover, the way to remove it */
.pages__line {
  display: flex;
  align-items: center;
  gap: 2px;
}

.pages__line .pages__item {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pages__remove {
  flex: none;
  width: 20px;
  height: 20px;
  font-size: 14px;
  line-height: 1;
  color: var(--color-dim);
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
  opacity: 0;
  transition: opacity 90ms ease, color 90ms ease;
}

.pages__line:hover .pages__remove,
.pages__remove:focus-visible {
  opacity: 1;
}

.pages__remove:hover {
  color: var(--color-err);
}

.pages__sep {
  height: 1px;
  margin: 3px 0;
  background-color: var(--color-divider);
}

.pages__add {
  color: var(--color-accent);
}

/* The open page is marked, not hidden: a list that drops its own entry
   makes you count to work out where you are */
.pages__item.on {
  color: var(--color-accent);
}

.pages__empty {
  padding: 5px 8px;
  font-size: var(--text-sm, 12px);
  color: var(--color-dim);
}

.action {
  height: 24px;
  padding: 0 10px;
  margin-right: 8px;
  font-size: var(--text-sm, 12px);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.action:hover {
  border-color: var(--color-outline);
}

.action:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.modes {
  display: inline-flex;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm, 5px);
  overflow: hidden;
  flex: none;
}
.mode {
  font: inherit;
  padding: 4px 11px;
  border: 0;
  background: var(--color-raised);
  color: var(--color-dim);
  cursor: pointer;
  white-space: nowrap;
}
.mode:hover {
  color: var(--color-fg);
}
.mode.on {
  background: var(--color-accent);
  color: var(--color-onAccent);
  font-weight: 600;
}
.mode:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.icon-action {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  color: var(--color-dim);
  background: none;
  border: 0;
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.icon-action:hover {
  color: var(--color-fg);
  background-color: var(--color-raised);
}

/* A toggle says which way it stands, not just that it can be pressed */
.icon-action.on {
  color: var(--color-accent);
  background-color: var(--color-raised);
}

.icon-action:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-raised);
  border: 1px solid var(--color-outline);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs, 11px);
  font-weight: 700;
  color: var(--color-dim);
  flex: none;
}
</style>
