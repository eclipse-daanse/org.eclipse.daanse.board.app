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
  A calculation for WITH: a calculated member, a named set or a cell
  calculation, with its properties. An existing one is edited as the text
  it is - every property the grammar allows stays reachable that way.
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { DButton, DInput, DModal, DRadioGroup, DCheckbox } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const props = defineProps<{ open: boolean; initial?: string }>()
const emit = defineEmits<{ (event: 'save', definition: string): void; (event: 'cancel'): void }>()
const { t } = useTranslation('workbench')

const kind = ref<'member' | 'set' | 'cell'>('member')
const calculated = ref(false)
const parent = ref('[Measures]')
const name = ref('')
const expression = ref('')
const scope = ref('')
const formatString = ref('')
const solveOrder = ref('')
const raw = ref('')

const kinds = computed(() => [
  { uid: 'member', name: t('With.member') },
  { uid: 'set', name: t('With.set') },
  { uid: 'cell', name: t('With.cell') },
])

watch(
  () => props.open,
  open => {
    if (!open) return
    raw.value = props.initial ?? ''
    kind.value = 'member'
    calculated.value = false
    parent.value = '[Measures]'
    name.value = ''
    expression.value = ''
    scope.value = ''
    formatString.value = ''
    solveOrder.value = ''
  },
)

const quote = (text: string) => (text.startsWith('[') ? text : `[${text.replace(/]/g, ']]')}]`)

const definition = computed(() => {
  if (props.initial !== undefined) return raw.value.trim()
  if (!name.value.trim() || !expression.value.trim()) return ''
  const props_: string[] = []
  if (formatString.value.trim()) props_.push(`FORMAT_STRING = '${formatString.value.replace(/'/g, "''")}'`)
  if (solveOrder.value.trim()) props_.push(`SOLVE_ORDER = ${Number(solveOrder.value) || 0}`)
  const tail = props_.length ? `,\n    ${props_.join(',\n    ')}` : ''
  if (kind.value === 'set') return `SET ${quote(name.value.trim())} AS ${expression.value.trim()}`
  if (kind.value === 'cell') return `CELL CALCULATION ${quote(name.value.trim())} FOR '${scope.value.trim() || '({[Measures].Members})'}' AS ${expression.value.trim()}${tail}`
  const member = name.value.includes('.') ? name.value.trim() : `${parent.value.trim()}.${quote(name.value.trim())}`
  return `${calculated.value ? 'CALCULATED ' : ''}MEMBER ${member} AS ${expression.value.trim()}${tail}`
})

const open = computed({ get: () => props.open, set: (value: boolean) => !value && emit('cancel') })
</script>

<template>
  <DModal v-model="open" :title="initial !== undefined ? t('With.editTitle') : t('With.title')" size="md">
    <div class="with">
      <template v-if="initial !== undefined">
        <DInput v-model="raw" :rows="6" :label="t('With.definition')" />
      </template>
      <template v-else>
        <DRadioGroup v-model="kind" :options="kinds" />
        <DCheckbox v-if="kind === 'member'" v-model="calculated" label="CALCULATED" />
        <DInput v-if="kind === 'member'" v-model="parent" :label="t('With.parent')" />
        <DInput v-model="name" :label="t('With.name')" />
        <DInput v-if="kind === 'cell'" v-model="scope" :label="t('With.scope')" placeholder="({[Measures].Members})" />
        <DInput v-model="expression" :rows="4" :label="t('With.expression')" />
        <template v-if="kind !== 'set'">
          <DInput v-model="formatString" :label="t('With.formatString')" placeholder="Currency, Percent, #,##0.00" />
          <DInput v-model="solveOrder" type="number" :label="t('With.solveOrder')" />
        </template>
      </template>
      <pre v-if="definition" class="with__preview">{{ definition }}</pre>
    </div>
    <template #actions>
      <DButton @click="emit('cancel')">{{ t('Connect.cancel') }}</DButton>
      <DButton intent="primary" :disabled="!definition" @click="emit('save', definition)">{{ initial !== undefined ? t('With.update') : t('With.insert') }}</DButton>
    </template>
  </DModal>
</template>

<style scoped>
.with {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.with__preview {
  margin: 0;
  padding: 8px;
  background: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  white-space: pre-wrap;
}
</style>
