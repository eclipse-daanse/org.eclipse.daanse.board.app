<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  The areas of an open board, in the order one builds one.

  A connection first, pages on it, variables to bind them, events to tie
  them together - and above all of it the overview, which is what "the
  board" means now that it has a screen of its own (#1170). The order the
  rail had before was the order the entries were written in (#1171).

  It holds a 52px column and opens over the content, so the thing under
  the pointer does not move while one reads the labels. Collapsed it is
  icons; open it is a label and a sentence saying what the area is for.

  A row is the same height either way, and the words are laid over it
  rather than inside it - so opening the panel does not move a single
  icon, and the one a person is reaching for stays where it was.

  Opening is hover or keyboard focus, and picking an area closes it again
  - having navigated, one is looking at what one chose, not at the menu
  one chose it from. Keyboard focus keeps it open all the same: there the
  menu is where one still is, and collapsing it would hide the row one is
  standing on.

  The pages of a board are not listed here: they are reached through the
  pages area, which is the screen that can show more of a page than its
  name.
-->

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  NAVIGATION_REGISTRY,
  type NavigationItem,
  type NavigationRegistry,
} from 'org.eclipse.daanse.board.app.lib.api.navigation'
import { useEList, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { boardPath, pagesPath } from 'org.eclipse.daanse.board.app.lib.api.page'

const { t } = useTranslation('shell')
const route = useRoute()
const router = useRouter()
const workspace = inject<Workspace>(WORKSPACE)!
const navRegistry = inject<NavigationRegistry>(NAVIGATION_REGISTRY) as any

const navigationItems = ref<NavigationItem[]>([])
onMounted(() => {
  navigationItems.value = navRegistry?.getAllNavigationItemsArray
    ? navRegistry.getAllNavigationItemsArray()
    : []
})

/*
 * Watched on the workspace, not on the board: opening another board
 * replaces the reference, and an adapter put on the board that was there
 * at setup would never hear of it.
 */
const pages = useEList(workspace, (w) => w.board?.pages)

const boardId = computed(() => {
  void pages.value
  return workspace.board?.id as string | undefined
})

/** Whether a page is open, in either mode - the pages area is then current. */
const inPages = computed(() =>
  ['pages', 'page', 'pageEdit'].includes(String(route.name)),
)

/*
 * The three the shell owns, then whatever a module registered - already
 * sorted by its `order`, which puts variables (10) before events (15).
 */
const areas = computed(() => [
  {
    id: 'overview',
    icon: 'dashboard',
    label: t('Rail.overview'),
    description: t('Rail.overviewDesc'),
    /* Without a board there is no rail at all, so the fallback is never
      reached in practice - it exists so the entry is never a dead href. */
    route: boardPath(boardId.value),
    current: String(route.name) === 'board',
  },
  {
    id: 'data',
    icon: 'dataset',
    label: t('Rail.data'),
    description: t('Rail.dataDesc'),
    route: '/datasources',
    current: String(route.name) === 'data',
  },
  {
    id: 'pages',
    icon: 'layers',
    label: t('Rail.pages'),
    description: t('Rail.pagesDesc'),
    route: pagesPath(boardId.value),
    current: inPages.value,
  },
  ...navigationItems.value.map((item) => ({
    id: item.id as string,
    icon: item.icon as string,
    label: t(item.label as string),
    /* A module that names no sentence simply has none. */
    description: item.description ? t(item.description) : '',
    route: item.route as string,
    current: String(route.name) === String(item.routeName),
  })),
])

/* ------------------------------------------------------- open or not */

const hovered = ref(false)
const focused = ref(false)
/* Set by picking an area, cleared by leaving the rail: the pointer is
  still on the panel at that moment, so :hover alone would hold it open. */
const dismissed = ref(false)

const expanded = computed(() => (hovered.value && !dismissed.value) || focused.value)

function enter() {
  hovered.value = true
}

function leave() {
  hovered.value = false
  dismissed.value = false
}

function go(target: string) {
  dismissed.value = true
  router.push(target)
}

/**
 * Whether the focus arrived by keyboard.
 *
 * A click on a button focuses it, so plain focus would mean every pick
 * holds the panel open - the very thing dismissing it is for.
 * :focus-visible is the browser's own answer to "did they tab here",
 * which is the question being asked. Where it is not understood - jsdom
 * does not - the keyboard is assumed, because holding the menu open is
 * the harmless way to be wrong about it.
 */
function byKeyboard(event: FocusEvent): boolean {
  const target = event.target as HTMLElement | null
  try {
    return target?.matches(':focus-visible') ?? false
  } catch {
    return true
  }
}
</script>

<template>
  <nav class="rail" :aria-label="t('Rail.areas')">
    <div
      :class="['rail__panel', { 'rail__panel--open': expanded }]"
      @mouseenter="enter"
      @mouseleave="leave"
      @focusin="focused = byKeyboard($event)"
      @focusout="focused = false"
    >
      <ul class="rail__areas">
        <li v-for="area in areas" :key="area.id" class="rail__area">
          <button
            type="button"
            :class="['ri', { on: area.current }]"
            :aria-current="area.current ? 'page' : undefined"
            :title="area.label"
            @click="go(area.route)"
          >
            <span class="ri__icon"><DIcon :name="area.icon" /></span>
            <span class="ri__text">
              <span class="ri__label">{{ area.label }}</span>
              <span v-if="area.description" class="ri__desc">{{ area.description }}</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/*
 * The cell keeps its 52px; the panel inside it is what grows, over the
 * content rather than against it.
 */
/*
 * A stacking context of its own, above everything that lies inside a
 * board: a widget carries its own z from the layout, a drag ghost in the
 * report sits at 100000, and the widget palette is a floating window at
 * 20000 - which the open panel disappeared behind, being a navigation
 * covered by the thing it navigates.
 *
 * Below the overlays that are meant to cover everything: a dialog's
 * scrim at 40000, the widget settings, the tree menu.
 */
.rail {
  position: relative;
  z-index: 30000;
  width: var(--spacing-rail, 52px);
  background: var(--color-pane);
  border-right: 1px solid var(--color-divider);
}

/*
 * Reaching up into the actions row.
 *
 * That row begins where the content does, which leaves the rail's own
 * column empty beside it - and the rail, starting under it, read as
 * hanging below its own heading. It starts where the row does, so the
 * column is one column from the top of the board down.
 */
.rail__panel {
  position: absolute;
  /* The row's height and the topbar's own bottom rule, so the column
    begins flush with the bar above rather than a hair below it. */
  inset: calc(-1 * var(--spacing-pagebar, 34px) - 1px) auto 0 0;
  width: var(--spacing-rail, 52px);
  z-index: 20;
  display: flex;
  flex-direction: column;
  /* Half a step, so the first row sits the same distance from the top as
    the rows sit from each other. */
  padding: 4px 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--color-pane);
  border-right: 1px solid var(--color-divider);
  transition: width 140ms cubic-bezier(0.2, 0.6, 0.2, 1);
}

.rail__panel--open {
  width: 268px;
  box-shadow: var(--shadow-e3);
}

.rail__areas {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
 * One step, 52px, and nothing between the steps: a row is as tall as the
 * distance to the next, so the icons read as evenly spaced rather than
 * as five heights and four gaps.
 *
 * The height is the same in both states - tall enough for a label and
 * two lines under it - so opening the panel reflows nothing.
 *
 * 16px each side puts the icon on the middle of the 52px column, and is
 * the same indent the label keeps once there is room for it.
 */
.ri {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: 0;
  border-radius: var(--radius-md, 4px);
  background: transparent;
  color: var(--color-dim);
  text-align: left;
  cursor: pointer;
  transition:
    background 140ms cubic-bezier(0.2, 0.6, 0.2, 1),
    color 140ms cubic-bezier(0.2, 0.6, 0.2, 1);
}
.ri:hover {
  color: var(--color-fg);
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
}
.ri.on {
  background: color-mix(in srgb, var(--color-accent) 14%, transparent);
  color: var(--color-accent);
}
.ri.on::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 3px;
  border-radius: var(--radius-xs, 2px);
  background: var(--color-accent);
}
.ri:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.ri__icon {
  flex: none;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ri :deep(.icon) {
  font-size: 20px;
}

/*
 * The words lie over the row, never in it.
 *
 * They are present the whole time, which is what keeps them readable to
 * a screen reader without a second copy of every label - and being out
 * of the flow is what holds the row at its height whether they are
 * legible or not.
 */
.ri__text {
  position: absolute;
  left: 46px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: opacity 110ms linear;
}
.rail__panel--open .ri__text {
  opacity: 1;
  pointer-events: auto;
}

.ri__label {
  font-size: var(--text-base, 13px);
  font-weight: 500;
  white-space: nowrap;
}
/* Two lines is what the row was sized for; a longer sentence is cut
  rather than allowed to push the icons apart. */
.ri__desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  font-size: var(--text-xs, 11px);
  line-height: 1.35;
  color: var(--color-dim);
}
.ri.on .ri__desc {
  color: color-mix(in srgb, var(--color-accent) 70%, var(--color-dim));
}

@media (prefers-reduced-motion: reduce) {
  .rail__panel,
  .ri,
  .ri__text {
    transition-duration: 0.01ms;
  }
}
</style>
