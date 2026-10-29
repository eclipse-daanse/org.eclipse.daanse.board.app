<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!-- One function with every overload the server reports. -->
<script setup lang="ts">
import { computed } from 'vue'
import { DButton, DModal } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { FunctionInfo, insertionOf, type FunctionEntry } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'

const props = defineProps<{ entry: FunctionEntry | null }>()
const emit = defineEmits<{ (event: 'close'): void; (event: 'insert', text: string, caret?: number): void }>()
const { t } = useTranslation('workbench')

const open = computed({ get: () => !!props.entry, set: (value: boolean) => !value && emit('close') })
</script>

<template>
  <DModal v-model="open" :title="entry ? t('FunctionInfo.title', { name: entry.name, count: entry.overloads.length }) : ''" size="lg">
    <FunctionInfo v-if="entry" :entry="entry" />
    <template #actions>
      <DButton v-if="entry" @click="emit('insert', insertionOf(entry).text, insertionOf(entry).caret); emit('close')">{{ t('FunctionInfo.insert') }}</DButton>
      <DButton intent="primary" @click="emit('close')">{{ t('RowInfo.close') }}</DButton>
    </template>
  </DModal>
</template>
