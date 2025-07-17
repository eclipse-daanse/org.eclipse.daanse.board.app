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

import { computed, toRefs, onMounted, ref, watch } from "vue";
import { PageI } from './interface/PageI'
import { RouterView, useRouter } from 'vue-router'


const config = defineModel<PageI>('configv', { required: true});
const defaultConfig: PageI = {
  path:'/page/abc'
};


const data = ref(null as any);

type ConfigKeys = keyof PageI;
if(!config.value.path){
  for (const key of Object.keys(defaultConfig) as ConfigKeys[]) {
    const defaultVal = defaultConfig[key];
    const currentVal = config.value[key];
    if (currentVal === undefined || currentVal === null) {
      // TypeScript hilft hier nicht automatisch → expliziter Cast nötig
      (config.value[key] as typeof defaultVal) = defaultVal;
    }
  }
}
const router = useRouter()
console.log(config.value.path)
const routeRecord = router.getRoutes().find(r => {
  return r.path === '/page/:pageid'
})

const component = routeRecord?.components?.default

console.log(routeRecord)
console.log(component)

</script>

<template>
    <div class="container" v-if="config.path">
      <component :is="component" :params="{ pageid: 'abc' }" />
    </div>
</template>

<style scoped>

</style>
