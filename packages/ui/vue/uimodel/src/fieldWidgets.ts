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
 * A widget of a bundle's own for one field of a generated form.
 *
 * The generated form draws every field with the generic renderers of
 * registerRenderer: a list, a nested object, a value. Now and then a field
 * needs more than its value says - a list of map instances that are also
 * placed by clicks on a preview map, say. A bundle registers its own widget
 * for that one feature here instead of building the form again by hand
 * around it. The widget gets what the generic ones get (eObject, feature,
 * custom) and can draw them inside its own, as SettingsListWidget or
 * SettingsFieldWidget, which are exported for that.
 *
 * The registry of the composer is inside this bundle, so a bundle cannot
 * reach it on its own; this is the way in.
 */
import { markRaw, type Component } from 'vue'
import type { EClass } from '@emfts/core'
import { componentRegistry } from '@emfts/vue-registry'

/*
 * Above the generic renderers, which are registered per feature (300) each
 * time a form is opened, and below a single instance (500). On the same
 * priority the one registered first would win, and that is the generic one.
 */
export const FIELD_WIDGET_PRIORITY = 350

const registered = new Map<string, () => void>()

function keyOf(eClass: EClass, featureName: string): string {
  return `${eClass.getEPackage?.()?.getNsURI?.() ?? ''}#//${eClass.getName?.() ?? ''}/${featureName}`
}

/**
 * Draws the feature of the class (and of its subclasses) with the component.
 * A second registration for the same feature replaces the first - a bundle
 * that is loaded again does not stack its widgets.
 *
 * @returns a function that takes the registration back
 */
export function registerFieldWidget(eClass: EClass, featureName: string, component: Component): () => void {
  const key = keyOf(eClass, featureName)
  registered.get(key)?.()
  const off = componentRegistry.registerForFeature(eClass, featureName, markRaw(component), {
    priority: FIELD_WIDGET_PRIORITY,
  })
  const unregister = () => {
    if (registered.get(key) === unregister) registered.delete(key)
    off()
  }
  registered.set(key, unregister)
  return unregister
}
