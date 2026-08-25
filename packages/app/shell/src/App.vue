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
  App shell after docs/mdx-workbench-layout-mockups.html: topbar on top, a
  fixed 52px activity rail on the left, content beside it.

  What changed against the old shell: the rail no longer hovers open over
  the content (va-sidebar hoverable + absolute), it holds its width and the
  content sits next to it. View/Edit left the navigation - they are modes of
  the open board and live in the topbar now.
-->

<script setup lang="ts">
import Header from './components/common/Header.vue'
import { inject, ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  NAVIGATION_REGISTRY,
  type NavigationRegistry,
  type NavigationItem,
} from 'org.eclipse.daanse.board.app.lib.api.navigation'
import { useGlobalLoading } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const navigationItems = ref<NavigationItem[]>([])
const { isLoading } = useGlobalLoading()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  const navRegistry = inject<NavigationRegistry>(NAVIGATION_REGISTRY)! as any
  navigationItems.value = navRegistry.getAllNavigationItemsArray
    ? navRegistry.getAllNavigationItemsArray()
    : []
})

/** Board entry: the rail points at the board, the topbar picks the mode. */
const boardTarget = computed(() =>
  route.params.pageid ? `/page/${route.params.pageid}` : '/page/abc',
)
const boardActive = computed(() =>
  ['home', 'page', 'edit', 'pageEdit'].includes(String(route.name)),
)

const go = (target: string) => router.push(target)
</script>

<template>
  <div class="shell">
    <div v-if="isLoading" class="global-loading-bar">
      <div class="global-loading-bar-progress"></div>
    </div>

    <Header />

    <div class="shell-body">
      <nav class="rail" aria-label="Bereiche">
        <button
          type="button"
          :class="['ri', { on: boardActive }]"
          :aria-current="boardActive ? 'page' : undefined"
          title="Board"
          @click="go(boardTarget)"
        >
          <va-icon name="dashboard" />
          <span class="sr-only">Board</span>
        </button>

        <button
          type="button"
          :class="['ri', { on: route.name === 'data' }]"
          :aria-current="route.name === 'data' ? 'page' : undefined"
          title="Verbindungen &amp; Daten"
          @click="go('/qweqwe/data')"
        >
          <va-icon name="dataset" />
          <span class="sr-only">Verbindungen &amp; Daten</span>
        </button>

        <button
          v-for="item in navigationItems"
          :key="item.id"
          type="button"
          :class="['ri', { on: route.name === item.routeName }]"
          :aria-current="route.name === item.routeName ? 'page' : undefined"
          :title="item.label"
          @click="go(item.route)"
        >
          <va-icon :name="item.icon" />
          <span class="sr-only">{{ item.label }}</span>
        </button>

        <span class="rail-spacer"></span>
      </nav>

      <main class="content">
        <router-view :key="$route.fullPath" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.shell {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 0;
  background: var(--color-bg);
}
.shell-body {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: var(--spacing-rail, 52px) minmax(0, 1fr);
  min-height: 0;
  overflow: hidden;
}

.rail {
  background: var(--color-pane);
  border-right: 1px solid var(--color-divider);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
  overflow: hidden;
}
.rail-spacer {
  flex: 1 1 auto;
}

/* 36px hit target, 8px radius, and the 3px accent bar the mockups put on
   the active entry. */
.ri {
  position: relative;
  width: 36px;
  height: 36px;
  flex: none;
  border: 0;
  border-radius: var(--radius-md, 8px);
  background: transparent;
  color: var(--color-dim);
  display: flex;
  align-items: center;
  justify-content: center;
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
  left: -8px;
  top: 8px;
  bottom: 8px;
  width: 3px;
  border-radius: var(--radius-xs, 3px);
  background: var(--color-accent);
}
.ri:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
.ri :deep(.va-icon) {
  font-size: 20px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.content {
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

@media (prefers-reduced-motion: reduce) {
  .ri {
    transition-duration: 0.01ms;
  }
}

.global-loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 8000;
  overflow: hidden;
}
.global-loading-bar-progress {
  height: 100%;
  width: 30%;
  background: var(--color-brandFill);
  animation: loading-slide 1.2s ease-in-out infinite;
}
@keyframes loading-slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}
</style>

<style>
@import './assets/main.css';
@import 'floating-vue/dist/style.css';

.va-modal {
  .va-dropdown__content {
    z-index: 38000;
  }
}
.va-dropdown__content {
  z-index: 38000 !important;
}
@supports (-moz-appearance: none) {
  .va-scroll-container__content {
    height: 100%;
  }
}
</style>
