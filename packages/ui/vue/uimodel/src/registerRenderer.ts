/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * Telling the composer what draws a setting.
 *
 * Every setting in this application is a reference to VariableWrapper, so
 * one registration against that type covers all of them - including the
 * settings of a widget that does not exist yet. Registering per feature
 * would mean knowing every class in advance, and doing it again for each
 * new one.
 */
import { EPackageRegistry, type EClass, type EStructuralFeature } from '@emfts/core'
import { componentRegistry } from '@emfts/vue-registry'
import SettingsListWidget from './SettingsListWidget.vue'
import SettingsObjectWidget from './SettingsObjectWidget.vue'
import SettingsFieldWidget from './SettingsFieldWidget.vue'

const COMPOSABLES_NS = 'org.eclipse.daanse.board.app.ui.vue.composables'

let done = false

export function registerWrapperRenderer(): boolean {
  if (done) return true

  const target = EPackageRegistry.INSTANCE.getEPackage(COMPOSABLES_NS)?.getEClassifier(
    'VariableWrapper',
  ) as EClass | undefined

  if (!target) {
    // The package registers itself when its bundle loads; until then there
    // is nothing to register against and the caller tries again later
    return false
  }

  componentRegistry.registerForReference(SettingsFieldWidget, { targetClass: target })
  done = true
  return true
}

/**
 * The renderer for a setting that holds several things.
 *
 * Registered for any feature that is many-valued, whatever it points at:
 * the list renderer builds each entry's form from the class the list is
 * typed against, so it does not need to know the classes in advance. A
 * single value never reaches it - the matcher only accepts isMany().
 */
export function registerListRenderer(eClass: EClass, seen = new Set<EClass>()): void {
  /* A class can contain itself through a chain; register each one once. */
  if (seen.has(eClass)) return
  seen.add(eClass)

  for (const feature of eClass.getEStructuralFeatures()) {
    if (isMany(feature)) {
      /*
       * A list of plain values - which forecast parameters to chart, say -
       * is not a list of things to open one at a time. It is a set of
       * choices, and the field renderer draws it as one; the list renderer
       * would ask it which class its entries are and find no answer.
       */
      if (isAttribute(feature)) {
        componentRegistry.registerForFeature(
          eClass,
          feature.getName?.() ?? '',
          SettingsFieldWidget,
        )
        continue
      }

      componentRegistry.registerForFeature(
        eClass,
        feature.getName?.() ?? '',
        SettingsListWidget,
      )
      /* Each entry is a form too, so the class the list is typed against
       * needs its own features registered - otherwise an entry's fields
       * fall back to the composer's default and ignore their form. */
      const entry = (feature as any).getEReferenceType?.()
      if (entry) registerListRenderer(entry, seen)
      continue
    }
    /*
     * One nested object. Without this the composer has no renderer for it
     * and falls back to a text field, which offers a line to type in where
     * a form belongs. VariableWrapper is the exception: it is a single
     * reference too, but it is a value rather than a nested form, and its
     * own renderer is registered against the type above.
     */
    if (isContainedObject(feature)) {
      componentRegistry.registerForFeature(
        eClass,
        feature.getName?.() ?? '',
        SettingsObjectWidget,
      )
      /* The nested class needs its own features registered too - its lists
       * are drawn by the same renderer, one level further in. */
      const target = (feature as any).getEReferenceType?.()
      if (target) registerListRenderer(target, seen)
      continue
    }

    /*
     * A plain attribute. The composer's own fallback draws one as a text
     * area whatever the form says it is, so a five-value choice arrived as
     * a box to type a guess into. The same renderer as the wrappers gets
     * it, which is what makes the written widget class decide the control;
     * it leaves the {x} off, there being no wrapper to bind.
     */
    if (isAttribute(feature)) {
      componentRegistry.registerForFeature(
        eClass,
        feature.getName?.() ?? '',
        SettingsFieldWidget,
      )
    }
  }
}

function isAttribute(feature: EStructuralFeature): boolean {
  try {
    return (feature as any).getEReferenceType?.() == null
  } catch {
    return true
  }
}

function isContainedObject(feature: EStructuralFeature): boolean {
  try {
    const target = (feature as any).getEReferenceType?.()
    if (!target) return false
    return target.getName?.() !== 'VariableWrapper'
  } catch {
    return false
  }
}

function isMany(feature: EStructuralFeature): boolean {
  try {
    return feature.isMany?.() === true || (feature.getUpperBound?.() ?? 1) !== 1
  } catch {
    return false
  }
}
