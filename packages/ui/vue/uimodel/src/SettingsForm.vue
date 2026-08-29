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
import { computed, markRaw, onMounted, provide, shallowRef, watch } from 'vue'
import type { EObject, EPackage } from '@emfts/core'
import { UIModelComposer } from '@emfts/uimodel-composer'
import type { UIModel } from '@emfts/uimodel-composer'
import { componentRegistry, COMPONENT_REGISTRY_KEY } from '@emfts/vue-registry'
import { UimodelPackage } from '@emfts/uimodel-composer'
import { asModel } from './adopt'
import { registerListRenderer, registerWrapperRenderer } from './registerRenderer'
import { formFor } from './buildForm'
import { loadUIModel } from './loadUIModel'
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

/*
 * One renderer for every reference to VariableWrapper - which is what every
 * setting in this application is. Registered against the type rather than
 * against each feature of each class: a settings class the app has never
 * seen is then already covered, and this does not have to wait for an
 * object to exist before it knows what to draw.
 */
registerWrapperRenderer()



const settings = defineModel<unknown>({ required: true })

const props = defineProps<{
  /** Makes an empty instance of the settings class. */
  create: () => EObject
  /** A hand-written model; without one, a form is derived from the class. */
  uiModel?: UIModel
  /** The same, still as XMI - read once against the package below. */
  uiModelXmi?: string
  /** The package the form's feature references point at. */
  domainPackage?: EPackage
  /** Name for the loaded resource, and its cache key. */
  uiModelUri?: string
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

/*
 * Kept out of the reactive graph, and built once per class rather than per
 * read. EMF compares metamodel objects by identity - an EClass against the
 * package's literal, a feature against the class it came from - and a
 * reactive proxy is never identical to the object it wraps, so those
 * comparisons fail and the composer decides it has nothing to render.
 */
const uiModelCache = shallowRef<UIModel | undefined>()
const uiModelFor = shallowRef<unknown>()

const uiModel = computed<UIModel | undefined>(() => {
  /*
   * Lists are matched per feature, so their renderer needs the class -
   * unlike the value renderer, which is registered once against
   * VariableWrapper. Done here because this is where the class is known
   * for certain: a watch on the model ran before the settings object had
   * been adopted, so there was no class yet and nothing was registered.
   */
  const settingsClass = (settings.value as EObject | undefined)?.eClass?.()
  if (settingsClass) registerListRenderer(settingsClass)

  if (props.uiModel) return markRaw(props.uiModel)

  // A written form beats a derived one: it says how the fields belong
  // together, which a class alone cannot
  if (props.uiModelXmi && props.domainPackage) {
    const written = loadUIModel(props.uiModelXmi, props.domainPackage, props.uiModelUri)
    if (written) return markRaw(written)
  }
  const target = model.value
  const eClass = target?.eClass?.()
  if (!eClass) return undefined
  if (uiModelFor.value !== eClass) {
    uiModelFor.value = eClass
    uiModelCache.value = markRaw(formFor(eClass))
  }
  return uiModelCache.value
})

const hasFields = computed(() => (model.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0)


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

/* The composer draws the group's own label (emf.ts.ui#10); the spacing
   and the rule are ours, so a group reads as a block rather than as a
   heading with fields loosely under it. */
.settings-form :deep(.uim-c-GroupWidget) {
  padding-top: 10px;
  margin-top: 12px;
  border-top: 1px solid var(--color-divider);
}

.settings-form :deep(.uim-c-GroupWidget:first-child) {
  padding-top: 0;
  margin-top: 0;
  border-top: 0;
}

.settings-form :deep(.uim-group-label) {
  display: block;
  margin-bottom: 7px;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-dim);
}

.settings-form__empty {
  margin: 0;
  padding: 12px 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
