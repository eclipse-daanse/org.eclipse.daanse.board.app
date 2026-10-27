<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * The fields of a configuration, as its model declares them.
 *
 * What a field is called and what it is for comes from the type's language
 * pack first - `<namespace>:Fields.<feature>` and `<namespace>:Hints.<feature>`.
 * The model's own words, its feature name made readable and its GenModel
 * `documentation`, are the fallback: a type nobody has translated still
 * explains itself, in the English the models are written in.
 *
 * Fields the dialog asks for itself are left out: name, type and uid are
 * the connection's identity, not part of its configuration.
 */
import { computed } from 'vue'
import type { ClassDoc, FeatureDoc } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DField, DInput, DSelect, DSwitch } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { formFields, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

export interface Choice {
  label: string
  value: string
}

const props = withDefaults(
  defineProps<{
    doc?: ClassDoc
    /** The config object being filled in - written through directly. */
    config: Record<string, unknown>
    /** Fields the dialog asks for in its own words, so they are not asked twice. */
    omit?: string[]
    /** The type's language-pack namespace, for its field labels. */
    namespace?: string
    /**
     * Values a field is picked from, by feature name. A field with choices
     * is a select; one whose choices are empty or not known yet stays a
     * text field, so it can always be answered.
     */
    choices?: Record<string, Choice[] | undefined>
  }>(),
  { omit: () => [], choices: () => ({}) },
)

const { t } = useTranslation('shell')

const fields = computed<FeatureDoc[]>(() => formFields(props.doc, props.omit))

/** A text of the type's pack, or nothing when the pack does not hold it. */
function fromPack(key: string): string | undefined {
  if (!props.namespace) return undefined
  const full = `${props.namespace}:${key}`
  const text = t(full, { defaultValue: '' })
  return text && text !== full ? text : undefined
}

function label(feature: FeatureDoc): string {
  const named = fromPack(`Fields.${feature.name}`)
  if (named) return named
  /* resourceUrl -> Resource Url: the model's name, made readable. */
  const spaced = feature.name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ')
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

function hint(feature: FeatureDoc): string | undefined {
  return fromPack(`Hints.${feature.name}`) ?? feature.documentation
}

function choicesOf(feature: FeatureDoc): Choice[] | undefined {
  const offered = props.choices[feature.name]
  return offered?.length ? offered : undefined
}

function asNumber(feature: FeatureDoc, value: string | number) {
  props.config[feature.name] = value === '' ? undefined : Number(value)
}
</script>

<template>
  <p v-if="!doc" class="model__none">
    {{ t('ModelFields.noModel') }}
  </p>

  <p v-else-if="!fields.length" class="model__none">
    {{ t('ModelFields.nothing') }}
  </p>

  <template v-else>
    <template v-for="feature in fields" :key="feature.name">
      <!-- DSwitch carries neither hint nor stacked; DField supplies both -->
      <DField
        v-if="feature.type === 'boolean'"
        :label="label(feature)"
        :hint="hint(feature)"
        stacked
      >
        <DSwitch
          :model-value="!!config[feature.name]"
          @update:model-value="config[feature.name] = $event"
        />
      </DField>
      <DSelect
        v-else-if="choicesOf(feature)"
        :model-value="config[feature.name]"
        :options="choicesOf(feature)!"
        value-key="value"
        label-key="label"
        :label="label(feature)"
        :hint="hint(feature)"
        :required="!feature.optional"
        :placeholder="t('ModelFields.pick')"
        stacked
        @update:model-value="config[feature.name] = $event"
      />
      <DInput
        v-else-if="feature.type === 'number'"
        :model-value="(config[feature.name] as number | undefined) ?? ''"
        :label="label(feature)"
        :hint="hint(feature)"
        :required="!feature.optional"
        type="number"
        stacked
        @update:model-value="asNumber(feature, $event as string | number)"
      />
      <DInput
        v-else
        :model-value="(config[feature.name] as string | undefined) ?? ''"
        :label="label(feature)"
        :hint="hint(feature)"
        :required="!feature.optional"
        :type="/url|uri|endpoint/i.test(feature.name) ? 'url' : 'text'"
        stacked
        @update:model-value="config[feature.name] = $event"
      />
    </template>
  </template>
</template>

<style scoped>
.model__none {
  margin: 0;
  padding: 10px 12px;
  font-size: 0.85rem;
  color: var(--color-dim);
  background-color: var(--color-sunken);
  border-radius: var(--radius-sm);
}
</style>
