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
/*
 * Settings rendered from the model rather than from a hand-written form.
 *
 * What it takes: the settings object as stored, and the factory that makes
 * an instance of its class. What it does: puts the stored values into a
 * modelled instance, derives a form from that class unless one is supplied,
 * and lets the composer render it against the app's own controls.
 *
 * The point is not that this form looks better than a hand-written one. It
 * is that it comes from the same place the settings themselves come from:
 * add a feature to the Ecore, regenerate, and the field is there - in the
 * form, in the stored state and in the widget, without three separate
 * edits that can drift apart.
 */
import { computed, onMounted, provide, watch } from 'vue'
import type { EObject } from '@emfts/core'
import { UIModelComposer } from '@emfts/uimodel-composer'
import type { UIModel } from '@emfts/uimodel-composer'
import { componentRegistry, COMPONENT_REGISTRY_KEY } from '@emfts/vue-registry'
import { UimodelPackage } from '@emfts/uimodel-composer'
import { asModel } from './adopt'
import { formFor } from './buildForm'
import VariableWrapperWidget from './VariableWrapperWidget.vue'

/*
 * Both metamodels have to exist before anything reads them: the settings
 * class registers its own package, and this one is the composer's - without
 * it the factory below builds objects whose class is null.
 */
UimodelPackage.eINSTANCE

/*
 * The composer looks the renderer up through an injected registry, not the
 * module-level one. Providing it here keeps the registration and the lookup
 * on the same object.
 */
provide(COMPONENT_REGISTRY_KEY, componentRegistry)

const settings = defineModel<unknown>({ required: true })

const props = defineProps<{
  /** Makes an empty instance of the settings class. */
  create: () => EObject
  /** A hand-written model; without one, a form is derived from the class. */
  uiModel?: UIModel
  /** Shown when the object has no features to edit. */
  emptyText?: string
}>()

/*
 * Adopting replaces the object the caller holds, so it happens once and the
 * result is written back - otherwise every render would build a new
 * instance and every edit would land in the previous one.
 */
function ensureModelled() {
  const modelled = asModel(settings.value, props.create)
  if (modelled !== settings.value) settings.value = modelled
}

onMounted(ensureModelled)
watch(settings, ensureModelled)

const model = computed(() => settings.value as EObject | undefined)

const uiModel = computed<UIModel | undefined>(() => {
  const target = model.value
  if (!target?.eClass) return undefined
  return props.uiModel ?? formFor(target.eClass())
})

const hasFields = computed(() => (model.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0)

/*
 * One renderer for every field of these settings, registered once. The
 * registry matches on the feature, and each of these models expresses its
 * fields as references to VariableWrapper - so the renderer reads the
 * wrapper and picks the control from the feature itself.
 */
let registered = false
function registerRenderer() {
  if (registered) return
  const target = model.value
  if (!target?.eClass) return
  for (const feature of target.eClass().getEStructuralFeatures()) {
    componentRegistry.registerForFeature(target.eClass(), feature.getName?.() ?? '', VariableWrapperWidget)
  }
  registered = true
}

onMounted(registerRenderer)
watch(model, registerRenderer)
</script>

<template>
  <div class="settings-form">
    <UIModelComposer v-if="uiModel && model && hasFields" :ui-model="uiModel" :model="model" />
    <p v-else class="settings-form__empty">
      {{ emptyText ?? 'Für dieses Widget sind keine Einstellungen modelliert.' }}
    </p>
  </div>
</template>

<style scoped>
.settings-form {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.settings-form__empty {
  margin: 0;
  padding: 12px 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
