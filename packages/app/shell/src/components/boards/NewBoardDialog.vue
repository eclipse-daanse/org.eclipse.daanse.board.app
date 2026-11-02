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
  What a board needs before it exists: a name, and somewhere to live.

  Both were decided later before - the name never, and the place at the
  first save, which turned the most ordinary step into a dialog in the
  middle of building something. They are cheap here: nothing is going on
  yet, and nothing has been made that could be lost.

  A folder on this machine is not a place until somebody picks it, and
  picking one needs a gesture the browser will accept - so connecting one
  is offered here rather than only in the storage view. Answering "where"
  with "somewhere you have not connected yet" is no answer.

  A build carrying only read-only places has nowhere to offer. The board
  is made anyway and says it is not stored, because that is true, and
  saving it later still goes through storage.
-->

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { DButton, DInput, DModal, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { Repository } from 'org.eclipse.daanse.board.app.lib.api.persistence'
import {
  chooseDirectory,
  filesystemAvailable,
} from 'org.eclipse.daanse.board.app.lib.persistence.filesystem'
import { useWorkspaceFile } from '@/composables/useWorkspaceFile'

const open = defineModel<boolean>('open', { default: false })
const emit = defineEmits<{ create: [name: string, place: Repository | undefined] }>()

const { t } = useTranslation('shell')
const { writablePlaces } = useWorkspaceFile()

const name = ref('')
const places = ref<Repository[]>([])
const placeUri = ref('')
const failure = ref('')
const field = ref<{ focus?: () => void } | undefined>()

/* Asked once: whether this browser can hand out a folder at all. */
const canUseFolders = filesystemAvailable()

/** A place reads by its own name; the uri is what identifies it. */
const labelOf = (place: Repository) =>
  String((place as unknown as { name?: string }).name ?? place.uri)

async function readPlaces(prefer?: string) {
  places.value = await writablePlaces()
  const wanted = places.value.find((each) => String(each.uri) === prefer)
  placeUri.value = String(wanted?.uri ?? places.value[0]?.uri ?? '')
}

watch(open, async (isOpen) => {
  if (!isOpen) return
  name.value = t('Boards.new.suggestion')
  failure.value = ''
  await readPlaces()
  await nextTick()
  field.value?.focus?.()
})

/**
 * A folder on this machine, picked now.
 *
 * The picker needs a user gesture, which this click is. Closing it
 * without choosing is not a failure - nothing was chosen, so nothing is
 * said about it.
 */
async function connectFolder() {
  failure.value = ''
  try {
    const place = await chooseDirectory()
    if (!place) return
    await readPlaces(String(place.uri))
  } catch (error) {
    failure.value = t('Boards.new.folderFailed', { reason: (error as Error).message })
  }
}

function confirm() {
  const named = name.value.trim()
  if (!named) return
  const place = places.value.find((each) => String(each.uri) === placeUri.value)
  open.value = false
  emit('create', named, place)
}
</script>

<template>
  <DModal v-model="open" size="sm" :title="t('Boards.new.title')">
    <div class="new-board">
      <DInput
        ref="field"
        v-model="name"
        :label="t('Boards.new.name')"
        :placeholder="t('Boards.new.suggestion')"
        @keydown.enter="confirm"
      />

      <!-- The places are objects of this view's making, so they are read
        by plain value/label rather than the uid/name a repository has. -->
      <DSelect
        v-if="places.length"
        v-model="placeUri"
        value-key="value"
        label-key="label"
        :label="t('Boards.new.place')"
        :hint="t('Boards.new.placeNote')"
        :options="places.map((place) => ({ value: String(place.uri), label: labelOf(place) }))"
      />

      <p v-else class="new-board__note">{{ t('Boards.new.noPlace') }}</p>

      <!-- A folder is not a place until it is picked, and picking needs a
        gesture the browser accepts - so it is offered where the question
        is asked. -->
      <DButton v-if="canUseFolders" size="sm" @click="connectFolder">
        {{ t('Boards.new.connectFolder') }}
      </DButton>
      <p v-else class="new-board__note">{{ t('Storage.noFolderSupport') }}</p>

      <p v-if="failure" class="new-board__failure" role="alert">{{ failure }}</p>
    </div>

    <template #actions>
      <DButton size="sm" @click="open = false">{{ t('common:Action.cancel') }}</DButton>
      <DButton intent="primary" size="sm" :disabled="!name.trim()" @click="confirm">
        {{ t('common:Action.create') }}
      </DButton>
    </template>
  </DModal>
</template>

<style scoped>
.new-board {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.new-board__note {
  margin: 0;
  font-size: var(--text-xs);
  line-height: 1.4;
  color: var(--color-dim);
}

.new-board__failure {
  margin: 0;
  font-size: var(--text-xs);
  line-height: 1.4;
  color: var(--color-err);
}
</style>
