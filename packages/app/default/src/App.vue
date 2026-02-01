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
import Header from './components/common/Header.vue'
import { VaSpacer } from 'vuestic-ui'
import { ref, onMounted } from 'vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  NAVIGATION_REGISTRY,
  type NavigationRegistry,
  type NavigationItem
} from 'org.eclipse.daanse.board.app.lib.repository.navigation'
import { useGlobalLoading } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const navigationItems = ref<NavigationItem[]>([])
const { isLoading } = useGlobalLoading()

onMounted(() => {
  const navRegistry = container.get<NavigationRegistry>(NAVIGATION_REGISTRY) as any
  navigationItems.value = navRegistry.getAllNavigationItemsArray
    ? navRegistry.getAllNavigationItemsArray()
    : []
  console.log('Loaded navigation items:', navigationItems.value)
})
</script>

<template>
  <div class="flex flex-col h-full w-full">
    <!-- Global Loading Indicator -->
    <div v-if="isLoading" class="global-loading-bar">
      <div class="global-loading-bar-progress"></div>
    </div>
    <Header />
    <div class="flex-grow flex overflow-hidden h-full">
      <va-sidebar
        hoverable minimized-width="58px"
        class="ice_gray absolute! z-mx"
        activeColor="active"
      >
        <div class="orange">
          <div class="justify-center flex">
            <img src="@/assets/Daanse%20Logo%20Vektor.svg" class="h-5 mt-6 mb-3">
          </div>
        <!-- Static navigation items for dashboards -->
        <va-sidebar-item :active="$route.name === 'home' || $route.name === 'page'"
          @click="()=>{
            // Navigate to view mode for current page or default
            if ($route.params.pageid) {
              $router.push(`/page/${$route.params.pageid}`)
            } else {
              // Default page - use first available page or abc
              $router.push('/page/abc')
            }
          }" class="pointer">
          <va-sidebar-item-content >
            <va-icon name="preview" />
            <va-sidebar-item-title class="font-normal"> View dashboard </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
        <va-sidebar-item :active="$route.name === 'edit' || $route.name === 'pageEdit'"
          @click="()=>{
            // Navigate to edit mode for current page or default
            if ($route.params.pageid) {
              $router.push(`/page/${$route.params.pageid}/edit`)
            } else {
              // Default page - use first available page or abc
              $router.push('/page/abc/edit')
            }
          }" class="pointer ">
          <va-sidebar-item-content class="">
            <va-icon name="draw" />
            <va-sidebar-item-title  class="font-normal"> Edit dashboard </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
        <va-sidebar-item :active="$route.name === 'data'"
          @click="$router.push('/qweqwe/data')" class="pointer ">
          <va-sidebar-item-content class="">
            <va-icon name="dataset" />
            <va-sidebar-item-title class="font-normal"> Data configuration </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>

        <!-- Dynamic navigation items from registry -->
        <va-sidebar-item
          v-for="item in navigationItems"
          :key="item.id"
          :active="$route.name === item.routeName"
          @click="$router.push(item.route)"
          class="pointer">
          <va-sidebar-item-content>
            <va-icon :name="item.icon" />
            <va-sidebar-item-title class="font-normal">{{ item.label }}</va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>


        </div>
      </va-sidebar>
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<style scoped>
.global-loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  /*background: rgba(0, 0, 0, 0.1);*/
  z-index: 8000;
  overflow: hidden;
}

.global-loading-bar-progress {
  height: 100%;
  width: 30%;
  background: linear-gradient(90deg, #e79542, #f5a623, #e79542);
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
@import "./assets/main.css";
@import 'floating-vue/dist/style.css';

.va-modal{
  /*z-index: 3700!important;*/
  .va-dropdown__content{
      z-index: 38000;
  }
}
.va-dropdown__content{
  z-index: 38000!important;
}
.orange{
  background: linear-gradient(rgba(231, 149, 66, 0.24) 0%, rgba(79, 79, 79, 0) 18%);
  height:100%;

}
@supports (-moz-appearance: none) {
  .va-scroll-container__content{
    height: 100%;
  }
}

</style>
