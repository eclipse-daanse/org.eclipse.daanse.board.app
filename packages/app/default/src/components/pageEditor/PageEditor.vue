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
import {
  computed,
  type ComputedRef,
  inject,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch
} from 'vue'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
  type PageI, events,type PageRegistryImpl
} from 'org.eclipse.daanse.board.app.lib.repository.page'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier
} from 'org.eclipse.daanse.board.app.lib.repository.layout.page'
import type { Container } from 'inversify'
import { useRoute, useRouter } from 'vue-router'
import { v4 } from 'uuid'

const router = useRouter();
const route = useRoute();
const container = inject<Container>('container')
const pageRepo:PageRegistryI|undefined = container?.get<PageRegistryI>(PageIdentifier);
const layoutRepo:LayoutRepositoryI|undefined
  = container?.get<LayoutRepositoryI>(LayoutRepositoryIdentifier);
const updated = ref(0);
const createNew = ref(false);
const name = ref('newPage');
const emit = defineEmits(['pageSettings'])
let subid:string|undefined = undefined
onMounted(() => {
  subid = (pageRepo as PageRegistryImpl).subscribe((ev:string)=>{
    if(ev == events.PAGE_UPDATE) updated.value+=1;
  })
})
onUnmounted(()=> {
  (pageRepo as PageRegistryImpl).unsubscribe(subid as string);
})

const pages:ComputedRef<PageI[]> = computed(() => {
  updated.value
  const pageIds = pageRepo?.getAllPageIds()
  const pages:PageI[] = [];
  for (const pageId of pageIds||[]) {
    const page = pageRepo?.getPage(pageId);
    if(page){
      pages.push(page);
    }
  }
  return pages;
})
const nodes = computed(() => {

  const ret = [];
  for(const page of pages.value){
    ret.push({
      id: page.id,
      label: page.name,
      icon: 'note',
    });
  }
  if(createNew.value){
    ret.push({
      id: v4(),
      label: 'newPage',
      icon: 'note',
      new: true,
    });
  }
  return ret;
})
const currentPage = computed(() => {
  const pageid = route.params.pageid;
  if(pageid){
    try{
      return pageRepo?.getPage(pageid as string).name
    }catch (r){
      return '??'
    }

  }
  else {
    return '??'
  }
})
const showNodes = ref(false)
const onNodeClick = (node: PageI) => {
  router.push(`/page/${node.id}/edit`)
}
const filter = ref("");
const addPage = () => {
  createNew.value = false;

  // Get default base layout
  const baseLayout = layoutRepo?.getLayout('org.eclipse.daanse.board.app.ui.vue.layouts.base')

  pageRepo?.registerPage({
    id: v4(),
    name: name.value,
    description: '',
    icon: '',
    visibleInNavigation: true,
    layout: baseLayout
  } as PageI);
  updated.value! += 1;
}
const add= ()=>{
  createNew.value = true;
  name.value = 'newPage';
}
</script>

<template>
  <Transition :duration="150" name="bounce">
    <div v-if="showNodes">
    <va-button icon="add" @click="add" preset="secondary"></va-button>
    <va-button icon="folder"  preset="secondary"></va-button>
      <VaDivider />
    <VaTreeView :nodes="nodes" :filter="filter" >
      <template #content="node" >
        <div @click="onNodeClick(node)" class="item" v-if="!('new' in node)">
          {{ node.label }}
          <VaButton
            preset="secondary"
            icon="settings"
            @click="emit('pageSettings',node.id)"
            size="small"
            class="ml-auto"
          />
        </div>
        <div v-else>

            <VaInput v-model="name"></VaInput>
            <VaButton
              @click="addPage"
              preset="secondary"
              icon="check"
              size="small"
              class="ml-auto"
            />
        </div>
      </template>
    </VaTreeView>
    <VaDivider />
    </div>
  </Transition>
  <VaButton
    icon="note"
    preset="secondary"
    icon-right="unfold_more"
    @click="showNodes=!showNodes"
  >{{currentPage}}</VaButton>
</template>

<style scoped>
.item{
  button{
    visibility: hidden;
  }
  &:hover{
    button {
      visibility: visible;
    }
  }
}
</style>
