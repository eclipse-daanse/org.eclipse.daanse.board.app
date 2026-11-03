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
import { DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
  type PageI,
  pagePath,
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
import { useCurrentHistory, useEList, useLanguage, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { usePages } from '@/composables/usePages'
import { useWidgetPalette } from '@/composables/useWidgetPalette'
import { boardCrumb, type Crumb } from '@/composables/boardCrumb'
import { useBoardBackdrop } from '@/composables/useBoardBackdrop'
import { useGridSnap } from '@/composables/useGridSnap'
import { useStorageDialog } from '@/composables/useStorageDialog'
import { useStoreBoard } from '@/composables/useStoreBoard'
import { useWorkspaceOrigin } from '@/composables/useWorkspaceFile'

const { show: showStorage } = useStorageDialog()

/* Keeping the board - the same press as on its own screen. */
const { store, storing, stored, failed } = useStoreBoard()
const kept = useWorkspaceOrigin()

const route = useRoute()
const router = useRouter()
const { t } = useTranslation('shell')

/** The page currently open, if any - drives both crumb and mode switch. */
const pageId = computed(() => (route.params.pageid as string | undefined) ?? '')

/*
 * Taking a change back belongs to the board, and the buttons for it
 * belong up here with the rest of what one does to a board. The layout
 * owns the history and publishes it; this reads whichever board is open.
 */
const history = useCurrentHistory()

const isEditing = computed(
  () => route.name === 'edit' || route.name === 'pageEdit' || String(route.path).endsWith('/edit'),
)

const workspace = inject<Workspace>(WORKSPACE)!

/*
 * The language, and the ones there are to choose from.
 *
 * Offered only when there is more than one: a single language is not a
 * choice, and a menu with one entry is furniture.
 */
const { available: languages, current: language, choose: chooseLanguage } = useLanguage()
const languageOpen = ref(false)

function pickLanguage(tag: string) {
  chooseLanguage(tag)
  languageOpen.value = false
}

/*
 * The modelled pages. Reading this list is what makes everything below
 * re-run; there used to be a shared counter here, bumped by whoever
 * changed a page, because the registry told Vue nothing.
 */
const modelledPages = useEList(workspace, (w) => w.board?.pages)

/** A page's address is inside its board; see lib.api.page. */
const boardId = computed(() => {
  void modelledPages.value
  return workspace.board?.id as string | undefined
})

/*
 * The path, rooted in the open board. Built by boardCrumb, which is a
 * plain function of the route and what is open - and therefore testable
 * without a header around it.
 */
const crumb = computed<Crumb[]>(() => {
  /* Reading the pages is what makes this re-run when the board is renamed. */
  void modelledPages.value
  return boardCrumb({
    route: route.name,
    boardId: boardId.value,
    boardName: workspace.board?.name as string | undefined,
    pageName: currentPageName.value,
    t,
  })
})

const showModes = computed(() => Boolean(pageId.value))

/*
 * The second row is about the open board, not only about a page of it:
 * keeping the board is offered from every one of its screens, and the
 * way into its pages has to be on them too - it was on the board's own
 * screen and nowhere else.
 *
 * Not on the launcher, which keeps a board open behind it but is the
 * screen one picks from rather than one of the board's own - the rail
 * is gone there for the same reason, and the row lines up with it.
 */
const boardOpen = computed(
  () => Boolean(boardId.value) && String(route.name) !== 'home',
)


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
    return pageRepo?.getPage(pageId.value)?.name ?? t('Header.page.fallbackName')
  } catch {
    // A page that was removed while open - the name is gone, the id is not
    return t('Header.page.fallbackName')
  }
})

const pagesOpen = ref(false)

function choosePage(id: string) {
  pagesOpen.value = false
  if (id === pageId.value) return
  router.push(pagePath(boardId.value, id, isEditing.value))
}

/* Clicking anywhere else closes it, as a menu should */
const menuHost = ref<HTMLElement>()
const languageHost = ref<HTMLElement>()
function onDocumentPointer(event: PointerEvent) {
  const at = event.target as Node
  if (pagesOpen.value && !menuHost.value?.contains(at)) pagesOpen.value = false
  if (languageOpen.value && !languageHost.value?.contains(at)) languageOpen.value = false
}
function onEscape(event: KeyboardEvent) {
  if (event.key !== 'Escape') return
  pagesOpen.value = false
  languageOpen.value = false
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
    name: t('Page.newName'),
    description: '',
    icon: '',
    visibleInNavigation: true,
    /* The id; the layout itself is resolved from the repository on render. */
    layoutId: 'org.eclipse.daanse.board.app.ui.vue.layouts.base',
  })
  pagesOpen.value = false
  router.push(pagePath(boardId.value, id, true))
}

/* The last page is not removable: a board with no page has nothing to show */
const canRemove = computed(() => pages.value.length > 1)

function removePage(id: string) {
  if (!canRemove.value) return
  const page = pages.value.find((p) => p.id === id)
  if (!confirm(t('Header.page.confirmRemove', { name: page?.name ?? id }))) return

  pageRepo?.unregisterPage(id)

  // Standing on the page that just went: move to whichever is left
  if (id === pageId.value) {
    const next = pages.value.find((p) => p.id !== id)
    if (next) router.push(pagePath(boardId.value, next.id as string, isEditing.value))
  }
}


const openView = () => {
  if (pageId.value) router.push(pagePath(boardId.value, pageId.value))
}
const openEdit = () => {
  if (pageId.value) router.push(pagePath(boardId.value, pageId.value, true))
}

/*
 * Storing belongs to the board you are looking at, not to a separate area
 * in the rail. A board that has been stored is written back where it came
 * from, without asking - the origin is carried across reloads now, and a
 * folder whose permission has lapsed is asked for again on the click
 * (#1200). Storage opens only where there is nothing to write over, or
 * where the place or the state has gone.
 */
/*
 * Storage opens over the board rather than instead of it.
 *
 * Pressing here again closes it, though nothing here does that: the
 * dialog's scrim lies over this button, and a click on the scrim is what
 * dismisses it. Which is why this only ever opens.
 *
 * It used to go to the launcher with ?view=storage, which closed the
 * board one had come to keep and offered no way back to it.
 */
const openStorage = () => showStorage()

/* Appearance is global, so it hangs off the identity end of the bar rather
 * than the rail, which belongs to whatever board is open. */
const openAppearance = () => router.push('/appearance')
</script>

<template>
  <header class="topbar">
    <!--
      Two rows, because they answer two questions.
      Where am I, and what is this - the mark, the storage every board
      lies in, the path - and on the right what holds for the whole
      application: its language, its appearance, who is signed in.
    -->
    <div
      :class="['topbar__row', 'topbar__row--where', { 'topbar__row--aside': boardOpen }]"
    >
      <!--
        The mark, only where there is no rail to hold it. With a board
        open it heads the column on the left, and this bar begins beside
        that column.
      -->
      <span v-if="!boardOpen" class="brand">
        <span class="brand-mark" aria-hidden="true">D</span>
        <span class="brand-name">{{ t('Header.brand') }}</span>
      </span>

      <!--
        The storage, reached from the identity end of the bar: it holds
        every board, not the one open, which is why it is up here beside
        the mark rather than down among the things one does to a page.

        With a board open, which is when there is something to keep. On
        the launcher storage is a view of its own, and offering a dialog
        over the screen one picks from would be the same thing twice.
      -->
      <button
        v-if="boardId"
        type="button"
        class="icon-action"
        :title="t('Header.storageLabel')"
        :aria-label="t('Header.storage')"
        @click="openStorage"
      >
        <DIcon name="folder" size="sm" />
      </button>

  <nav class="crumb" :aria-label="t('Header.crumb.label')">
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

      <span class="spacer"></span>

  <div v-if="languages.length > 1" ref="languageHost" class="lang">
        <button
          type="button"
          class="icon-action lang__button"
          :aria-expanded="languageOpen"
          aria-haspopup="menu"
          :title="t('Header.language')"
          :aria-label="t('Header.language')"
          @click="languageOpen = !languageOpen"
        >
          {{ (language ?? '').slice(0, 2).toUpperCase() }}
        </button>

        <ul v-if="languageOpen" class="lang__menu" role="menu">
          <li v-for="each in languages" :key="each.tag" role="none">
            <button
              type="button"
              role="menuitem"
              :class="['lang__item', { on: each.tag === language }]"
              @click="pickLanguage(each.tag)"
            >
              {{ each.label }}
            </button>
          </li>
        </ul>
      </div>

  <button
        type="button"
        class="icon-action"
        :title="t('Header.appearance')"
        :aria-label="t('Header.appearance')"
        @click="openAppearance"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" width="15" height="15">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6" />
          <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
        </svg>
      </button>

  <span class="avatar" :title="t('Header.signedIn')">MH</span>
    </div>

    <!--
      And what one does to the page one is on. Keeping the board comes
      first, because it is what every other press here eventually needs;
      the mode the page is in comes last, on the right, where a choice
      between two states belongs.

      Only with a board open: there is no page to act on without one.
    -->
    <div v-if="boardOpen" class="topbar__row topbar__row--page">
  <!--
        Keeping the board, from the page one is building on - the same
        press as on the board's own screen. An icon, because this is the
        row of things one does to a board and they are all icons; the word
        is in its title and in what it says when it has written.
      -->
      <button
        v-if="boardOpen"
        type="button"
        class="icon-action"
        :class="{ 'icon-action--said': stored }"
        :disabled="storing"
        :title="kept ? t('Board.keepIn', { name: kept.name }) : t('Board.keepSomewhere')"
        :aria-label="t('common:Action.save')"
        @click="store"
      >
        <DIcon :name="stored ? 'check' : 'save'" size="sm" />
      </button>

      <!-- Keeping the board failed. Said here because this is where the
        person pressed, and where a board made with a place that refused
        arrives believing it is stored. -->
      <p v-if="failed" class="topbar__failed" role="alert" :title="failed">{{ failed }}</p>

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
          :title="t('Header.page.switch')"
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
              :title="t('Header.page.remove', { name: page.name })"
              :aria-label="t('Header.page.remove', { name: page.name })"
              @click.stop="removePage(page.id as string)"
            >
              ×
            </button>
          </li>
          <li class="pages__sep" role="separator"></li>
          <li role="none">
            <button type="button" role="menuitem" class="pages__item pages__add" @click="addPage">
              {{ t('Header.page.add') }}
            </button>
          </li>
        </ul>
      </div>

  <button
        v-if="isEditing && history"
        type="button"
        class="icon-action"
        :disabled="!history.canUndo.value"
        :title="history.undoLabel.value ? t('Header.undoWhat', { what: t(history.undoLabel.value) }) : t('Header.undo')"
        :aria-label="t('Header.undoLabel')"
        @click="history.undo()"
      >
        <DIcon name="undo" size="sm" />
      </button>

      <button
        v-if="isEditing && history"
        type="button"
        class="icon-action"
        :disabled="!history.canRedo.value"
        :title="history.redoLabel.value ? t('Header.redoWhat', { what: t(history.redoLabel.value) }) : t('Header.redo')"
        :aria-label="t('Header.redoLabel')"
        @click="history.redo()"
      >
        <DIcon name="redo" size="sm" />
      </button>

      <button
        v-if="isEditing"
        type="button"
        :class="['icon-action', { on: snapping }]"
        :aria-pressed="snapping"
        :title="t('Header.snap')"
        :aria-label="t('Header.snapLabel')"
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
        :title="t('Header.backdrop')"
        :aria-label="t('Header.backdropLabel')"
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
        :title="t('Header.palette')"
        :aria-label="t('Header.paletteLabel')"
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
        :title="t('Header.pageSettings')"
        :aria-label="t('Header.pageSettings')"
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

  <div v-if="showModes" class="modes" role="group" :aria-label="t('Header.mode')">
        <button
          type="button"
          :class="['mode', { on: !isEditing }]"
          :aria-pressed="!isEditing"
          @click="openView"
        >
          {{ t('Header.view') }}
        </button>
        <button
          type="button"
          :class="['mode', { on: isEditing }]"
          :aria-pressed="isEditing"
          @click="openEdit"
        >
          {{ t('Header.edit') }}
        </button>
      </div>
    </div>
  </header>

  <Teleport to="body">
    <!-- modals mounted by other components land here -->
  </Teleport>
</template>

<style scoped>
/*
 * Two rows: where one is, and what one does here.
 *
 * The first keeps the topbar's own height, because it is the bar the
 * mockups set. The second is shorter - a row of small actions, not of
 * identity - and is drawn only with a board open, so the launcher is
 * one bar tall as it always was.
 */
.topbar {
  flex: none;
  display: flex;
  flex-direction: column;
  background: var(--color-pane);
  border-bottom: 1px solid var(--color-divider);
  color: var(--color-fg);
  font-size: var(--text-sm, 12px);
}

.topbar__row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  min-width: 0;
}

.topbar__row--where {
  height: var(--spacing-topbar, 42px);
  flex: none;
}

/* Beside the rail, which carries the mark and begins at the top of the
  window - so both bars start where the content does. */
.topbar__row--aside {
  padding-left: calc(var(--spacing-rail, 52px) + 12px);
}

/*
 * Starts where the content does. The rail is a column of the body below
 * and this row acts on what is in that column, so beginning under the
 * mark instead would point at the navigation rather than at the board.
 */
.topbar__row--page {
  height: var(--spacing-pagebar, 34px);
  flex: none;
  gap: 6px;
  padding-left: calc(var(--spacing-rail, 52px) + 12px);
  border-top: 1px solid var(--color-divider);
  /*
   * A step up from the bar above it, not down to the ground.
   *
   * It carried --color-bg, which is the editor surface - so the row read
   * as the top of the board rather than as the bottom of the topbar.
   * Raised is what this house puts under buttons and table heads, and
   * that is what this row is; mixed with the pane so the two bars are
   * told apart rather than set against each other.
   */
  background: color-mix(in srgb, var(--color-raised) 60%, var(--color-pane));
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


.icon-action:disabled {
  opacity: 0.4;
  cursor: default;
}
/*
 * The bar mixes font ligatures with inline SVG, and the two sit at
 * different heights for the same nominal size: a glyph's box is not its
 * font-size, and an inline-block carries a baseline a 15px rect does
 * not. Every child is given the same 16px block, so a row of them reads
 * as a row.
 */
.icon-action > svg,
.icon-action :deep(.icon) {
  display: block;
  width: 16px;
  height: 16px;
  font-size: 16px;
  line-height: 16px;
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

/* What it says when it has written: the tick that replaces the glyph,
  held for a moment by useStoreBoard. */
.icon-action--said {
  color: var(--color-ok);
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

/* The language, shown as its tag - two letters say it without a word. */
.lang {
  position: relative;
}

.lang__button {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.lang__menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 60;
  min-width: 150px;
  margin: 0;
  padding: 4px;
  list-style: none;
  background-color: var(--color-pane);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-e3);
}

.lang__item {
  display: block;
  width: 100%;
  padding: 5px 10px;
  font: inherit;
  color: var(--color-fg);
  text-align: left;
  background: none;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
}

.lang__item:hover,
.lang__item:focus-visible {
  background-color: var(--color-sunken);
}

.lang__item.on {
  color: var(--color-accent);
}

/* One line, cut off rather than pushing the topbar apart; the full text
  is in the title. */
.topbar__failed {
  margin: 0;
  max-width: 28ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--text-xs);
  color: var(--color-err);
}

</style>
