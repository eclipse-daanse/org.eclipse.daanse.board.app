<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { Entity, Repository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'


const emits = defineEmits<{
  (e: 'save', en: Entity): void,
  (e: 'override', en: Entity): void
}>()

const props = defineProps<{ repo: Repository }>()

const nameForSaving = ref<string>('newFile')

const isDisabled = computed(() => {
  return nameForSaving.value == ''
})
onMounted(async () => {
  files.value = await props.repo.findAll()
})
const files = ref<Entity[] | undefined>()

const isSameName = computed(() => {
  if (files.value == undefined) return false
  return (files.value!.find(f => (f.name == nameForSaving.value))) != undefined
})

const save = () => {
  const fu = new URL(props.repo.uri)
  fu.pathname = nameForSaving.value + '.json'
  emits('save', {
    name: nameForSaving.value,
    uri: fu
  } as Entity)
}
const override = () => {
  const en = files.value!.find(f => (f.name == nameForSaving.value))!
  emits('override', en)
}
const setNameSuggestion = (name: string) => {
  nameForSaving.value = name
}

defineExpose({ setNameSuggestion })

</script>
<template>

  <Teleport defer to="#loadSaveModalFooter">
    <div>
      <span class="va-title">Name: </span>
      <VaInput
        v-model="nameForSaving"
        placeholder="Name"
      />
    </div>
    <VaButton color="danger" icon="save" @click="override" border-color="primary"
              preset="secondary" :disabled="isDisabled" v-if="isSameName"> override
    </VaButton>
    <VaButton @click="save" :disabled="isDisabled" border-color="primary" preset="secondary"
              v-else icon="save"> save
    </VaButton>
  </Teleport>
</template>

<style scoped lang="scss">

</style>
