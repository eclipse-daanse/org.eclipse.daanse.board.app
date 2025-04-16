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
</script>

<template>
  <div class="flex flex-col h-full w-full">
    <Header />
    <div class="flex-grow flex overflow-hidden h-full">
      <va-sidebar hoverable minimized-width="58px" class="colored-sidebar">
        <va-sidebar-item
          :active="$route.name === 'designer'"
          @click="$router.push('/qweqwe/')"
          class="pointer"
        >
          <va-sidebar-item-content>
            <va-icon name="preview" />
            <va-sidebar-item-title> View dashboard </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
        <va-sidebar-item
          :active="$route.name === 'dashboard'"
          @click="$router.push('/qweqwe/edit')"
          class="pointer"
        >
          <va-sidebar-item-content>
            <va-icon name="draw" />
            <va-sidebar-item-title> Edit dashboard </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
        <va-sidebar-item
          :active="$route.name === 'dashboard'"
          @click="$router.push('/qweqwe/data')"
          class="pointer"
        >
          <va-sidebar-item-content>
            <va-icon name="dataset" />
            <va-sidebar-item-title> Data configuration </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
        <va-sidebar-item
          :active="$route.name === 'config'"
          @click="$router.push('/configuration')"
          class="pointer"
        >
          <va-sidebar-item-content>
            <va-icon name="settings" />
            <va-sidebar-item-title> Environment variables </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
        <va-sidebar-item
          :active="$route.name === 'test'"
          @click="$router.push('/test')"
          class="pointer"
        >
          <va-sidebar-item-content>
            <va-icon name="bug_report" />
            <va-sidebar-item-title> Test </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </va-sidebar>
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
