<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
// import { useDataSourcesStore } from '@/plugins/data/DatasourcePinia';
import { computed, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
// import { useSerialization } from '@/composables/useSerialization';
// import { useConfigurationsStore } from '@/plugins/data/ConfigurationPinia';
// import { useConnectionsStore } from '@/plugins/data/ConnectionsPinia';
// import { useWidgetsStore } from '@/plugins/data/WidgetsPinia';
// import { useLayoutStore } from '@/plugins/data/LayoutsPinia';

// import LoadModal from "@/components/modals/LoadSave/LoadModal.vue";

// const { dataSources } = useDataSourcesStore();
// const { configurations } = useConfigurationsStore();
// const { connections } = useConnectionsStore();
// const { widgets } = useWidgetsStore();
// const { layout } = useLayoutStore();
// const { getState, loadState } = useSerialization({
//   configurations: configurations,
//   datasources: dataSources,
//   connections: connections,
//   widgets: widgets,
//   layout: layout,
// })
const route = useRoute()
const loadModalRef = ref(null as unknown as Ref<any>)

const headerTitle = computed(() => {
  switch (route.name) {
    case 'home':
      return 'Report Vue'
    case 'about':
      return 'Edit Report'
    case 'data':
      return 'Data Designer'
    case 'config':
      return 'Configuration Editor'
    case 'test':
      return 'Test View'
    default:
      return 'Unknown View'
  }
})

const saveStateToStorage = () => {
  //   const serState = getState();
  //   loadModalRef.value?.run({ context: 'SAVE', state: serState });
}

const loadStateFromStorage = async () => {
  //   const state = await loadModalRef.value?.run({ context: 'LOAD', state: null });
  //   if (state) {
  //     loadState(state);
  //   }
}
</script>

<template>
  <va-navbar color="primary" class="header">
    <template #left>
      <va-navbar-item class="logo">
        <!-- <div class="white triangle"></div>
        <div class="small logo daanse" id="logo"></div>
        <div class="small logo daanse" id="claim"></div>  -->
        PLACE FOR A LOGO (WILL REPLACE SCSS CODE WITH A CSS MODULE)
      </va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item class="logo">
        <VaButton class="mr-2" @click="saveStateToStorage" icon="save">Save</VaButton>
        <VaButton class="mr-2" @click="loadStateFromStorage" icon="download">Load</VaButton>
      </va-navbar-item>
    </template>
  </va-navbar>
  <Teleport to="body">
    <!-- <SaveModal ref="loadsaveModal" /> -->
    <LoadModal ref="loadModalRef" />
  </Teleport>
</template>
