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
  A server to work against. The fields are the board's own XMLA connection
  form - the service 'XmlaConnectionSettings' - so a server is described
  the same way here as for a dashboard; a preset fills them in.
-->
<script setup lang="ts">
import { computed, inject, reactive, ref, watch, type Component } from 'vue'
import { DButton, DInput, DModal, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PRESETS, type SavedConnection } from '../state/connections'
import { NoCatalogs, WORKBENCH } from '../state/workbench'

const open = defineModel<boolean>({ default: false })
const props = defineProps<{ editing?: SavedConnection | null }>()

const wb = inject(WORKBENCH)!
const Settings = inject<Component | undefined>('XmlaConnectionSettings', undefined)
const { t } = useTranslation('workbench')

const name = ref('')
const preset = ref<string | undefined>(undefined)
const config = reactive({
  url: '',
  catalogName: '',
  security: 'None' as 'None' | 'Basic',
  user: '',
  password: '',
  timeout: 60 as number | string,
})
/*
 * The cube a server opens on. The board's form has no field for it - a
 * dashboard picks its cube elsewhere - so the field is the workbench's
 * own, and an edited server shows the cube it was stored with.
 */
const cube = ref('')
const busy = ref(false)
/** Why the server could not be added, as it said. */
const failure = ref<string | null>(null)
watch(() => config.url, () => (failure.value = null))

const presetOptions = PRESETS.map(p => ({ uid: p.uid, name: p.name }))

watch(open, isOpen => {
  if (!isOpen) return
  failure.value = null
  const source = props.editing
  name.value = source?.name ?? ''
  preset.value = undefined
  config.url = source?.url ?? ''
  config.catalogName = source?.catalog ?? ''
  config.security = source?.security ?? 'None'
  config.user = source?.user ?? ''
  config.password = source?.password ?? ''
  config.timeout = source?.timeout ?? 60
  cube.value = source?.cube ?? ''
})

watch(preset, uid => {
  const chosen = PRESETS.find(p => p.uid === uid)
  if (!chosen) return
  name.value = chosen.name
  config.url = chosen.url
  config.catalogName = chosen.catalog
  config.security = 'None'
  cube.value = chosen.cube
})

/*
 * The cubes to choose from: what the server listed for this catalogue when
 * it is the one open, and always the stored cube, so the field does not
 * show empty for a server that has one.
 */
const cubeOptions = computed(() => {
  const listed =
    props.editing && wb.activeId.value === props.editing.uid && wb.catalog.value === config.catalogName
      ? wb.cubes.value.map(row => String(row.CUBE_NAME))
      : []
  const names = cube.value && !listed.includes(cube.value) ? [cube.value, ...listed] : listed
  return names.map(name => ({ uid: name, name }))
})
/* Typed in while the server has listed nothing to choose from. */
const cubeListed = computed(() => cubeOptions.value.some(option => option.uid !== cube.value))

const valid = computed(() => !!config.url.trim())

async function save() {
  if (!valid.value) return
  busy.value = true
  try {
    await wb.addConnection({
      uid: props.editing?.uid,
      name: name.value.trim() || config.url,
      url: config.url.trim(),
      catalog: config.catalogName,
      cube: cube.value.trim(),
      security: config.security,
      user: config.user,
      password: config.password,
      timeout: Number(config.timeout) || 0,
    })
    open.value = false
  } catch (error) {
    // The server did not answer: nothing was added, and the dialog stays to correct it.
    failure.value =
      error instanceof NoCatalogs
        ? t('Notice.noCatalogs', { url: error.url })
        : t('Connect.failed', { error: error instanceof Error ? error.message : String(error) })
  } finally {
    busy.value = false
  }
}

function remove() {
  if (!props.editing) return
  wb.removeConnection(props.editing.uid)
  open.value = false
}
</script>

<template>
  <DModal v-model="open" :title="editing ? t('Connect.editTitle') : t('Connect.title')" size="md">
    <form class="connect" @submit.prevent="save">
      <DSelect
        v-if="!editing"
        v-model="preset"
        :label="t('Connect.preset')"
        :options="presetOptions"
        :placeholder="t('Connect.presetNone')"
        clearable
      />
      <DInput v-model="name" :label="t('Connect.name')" :placeholder="config.url" />
      <component :is="Settings" v-if="Settings" :config="config" />
      <DInput v-else v-model="config.url" label="URL" />
      <DSelect
        v-if="cubeListed"
        v-model="cube"
        :label="t('Connect.cube')"
        :options="cubeOptions"
        :placeholder="t('Connect.cubeFirst')"
        clearable
      />
      <DInput v-else v-model="cube" :label="t('Connect.cube')" :placeholder="t('Connect.cubeFirst')" />
      <p class="connect__hint">{{ t('Connect.hint') }}</p>
      <p v-if="failure" class="connect__error" role="alert">{{ failure }}</p>
    </form>
    <template #actions>
      <DButton v-if="editing" intent="danger" @click="remove">{{ t('Connect.remove') }}</DButton>
      <DButton @click="open = false">{{ t('Connect.cancel') }}</DButton>
      <DButton intent="primary" :disabled="!valid" :busy="busy" @click="save">{{ t('Connect.connect') }}</DButton>
    </template>
  </DModal>
</template>

<style scoped>
.connect {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.connect__error {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-err);
  word-break: break-word;
}

.connect__hint {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
