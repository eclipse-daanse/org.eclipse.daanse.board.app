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
const showDeleteConfirm = ref(false);
const pageToDelete = ref<string | null>(null);
const emit = defineEmits(['pageSettings'])
let subid:string|undefined = undefined
onMounted(() => {
  subid = (pageRepo as PageRegistryImpl).subscribe((ev:string)=>{
    if(
      ev == events.PAGE_UPDATE
      || ev == events.PAGE_UNREGISTRATION
      || ev == events.PAGE_REGISTRATION
    ) updated.value+=1;
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
const pageToDeleteName = computed(() => {
  if (!pageToDelete.value) return '';
  try {
    return pageRepo?.getPage(pageToDelete.value)?.name || '';
  } catch {
    return '';
  }
})
const confirmRemovePage = (pageId: string) => {
  pageToDelete.value = pageId;
  showDeleteConfirm.value = true;
}
const removePage = () => {
  const pageId = pageToDelete.value;
  if (!pageId) return;
  pageRepo?.unregisterPage(pageId);
  updated.value += 1;
  showDeleteConfirm.value = false;
  pageToDelete.value = null;
  if (route.params.pageid === pageId) {
    const remainingIds = pageRepo?.getAllPageIds() || [];
    if (remainingIds.length > 0) {
      router.push(`/page/${remainingIds[0]}/edit`);
    } else {
      router.push('/');
    }
  }
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
          <VaButton
            preset="secondary"
            icon="delete"
            @click.stop="confirmRemovePage(node.id)"
            size="small"
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

  <VaModal
    size="small"
    hide-default-actions
    v-model="showDeleteConfirm"
    overlay-opacity="0.3"
  >
    <div class="delete-dialog">
      <VaIcon name="warning" color="danger" size="2rem" />
      <h5 class="va-h5">Seite löschen</h5>
      <p class="delete-dialog__message">
        Möchtest du die Seite <strong>{{ pageToDeleteName }}</strong> wirklich löschen?
        Diese Aktion kann nicht rückgängig gemacht werden.
      </p>
    </div>
    <template #footer>
      <div class="delete-dialog__actions">
        <VaButton preset="secondary" @click="showDeleteConfirm = false; pageToDelete = null;">
          Abbrechen
        </VaButton>
        <VaButton color="danger" icon="delete" @click="removePage()">
          Löschen
        </VaButton>
      </div>
    </template>
  </VaModal>
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
.delete-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  padding: 1rem 0.5rem 0;
}
.delete-dialog__message {
  color: var(--va-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}
.delete-dialog__actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 100%;
}
</style>
