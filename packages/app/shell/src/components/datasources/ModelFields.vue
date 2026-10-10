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
 * Every sentence here is the model's own: the GenModel `documentation`
 * annotation on the feature, shown under the control it belongs to. They
 * are written in English because the models are - the code they describe is
 * English too, and a translation kept beside them would be one more thing
 * that drifts.
 *
 * Fields the dialog asks for itself are left out: name, type and uid are
 * the connection's identity, not part of its configuration.
 */
import { computed } from 'vue'
import type { ClassDoc, FeatureDoc } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DField, DInput, DSwitch } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const props = withDefaults(
  defineProps<{
    doc?: ClassDoc
    /** The config object being filled in - written through directly. */
    config: Record<string, unknown>
    /** Fields the dialog asks for in its own words, so they are not asked twice. */
    omit?: string[]
  }>(),
  { omit: () => [] },
)

/** Held by the dialog around this, never by the model's own fields. */
const IDENTITY = new Set(['name', 'type', 'uid'])

const fields = computed<FeatureDoc[]>(() =>
  (props.doc?.features ?? []).filter(
    (f) => !IDENTITY.has(f.name) && !props.omit.includes(f.name) && !f.many,
  ),
)

/* A field the model marks as required and nobody has filled in yet. */
function isEmpty(feature: FeatureDoc): boolean {
  const held = props.config[feature.name]
  return held === undefined || held === null || held === ''
}

function label(feature: FeatureDoc): string {
  /* resourceUrl -> Resource url: the model's name, made readable, with no
     dictionary in between to go stale. */
  const spaced = feature.name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ')
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

function asNumber(feature: FeatureDoc, value: string | number) {
  props.config[feature.name] = value === '' ? undefined : Number(value)
}
</script>

<template>
  <p v-if="!doc" class="model__none">
    Dieser Typ bringt kein Modell mit — die Felder füllst du nach dem Anlegen im Editor aus.
  </p>

  <p v-else-if="!fields.length" class="model__none">
    Dieser Typ braucht außer dem Namen nichts weiter.
  </p>

  <template v-else>
    <template v-for="feature in fields" :key="feature.name">
      <!-- DSwitch carries neither hint nor stacked; DField supplies both -->
      <DField
        v-if="feature.type === 'boolean'"
        :label="label(feature)"
        :hint="feature.documentation"
        stacked
      >
        <DSwitch
          :model-value="!!config[feature.name]"
          @update:model-value="config[feature.name] = $event"
        />
      </DField>
      <DInput
        v-else-if="feature.type === 'number'"
        :model-value="(config[feature.name] as number | undefined) ?? ''"
        :label="label(feature)"
        :hint="feature.documentation"
        :required="!feature.optional"
        type="number"
        stacked
        @update:model-value="asNumber(feature, $event as string | number)"
      />
      <DInput
        v-else
        :model-value="(config[feature.name] as string | undefined) ?? ''"
        :label="label(feature)"
        :hint="feature.documentation"
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
