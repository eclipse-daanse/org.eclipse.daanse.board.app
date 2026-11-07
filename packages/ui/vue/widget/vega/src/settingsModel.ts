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

/*
 * The settings of a chart as the model's own object (#1284), the adopt
 * path of the 3D map.
 *
 * A board hands a widget its settings as parsed JSON. Adopted into a
 * VegaWidgetSettings, the layers and their encodings are containment
 * lists, and one useEObject on the settings hears every change below them.
 * The adoption is cached by the stored object, so the widget, the preview
 * and the settings form hold the same instance.
 */

import './referencedPackages'
import { toRaw } from 'vue'
import { adopt, isModelled } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { VegawidgetFactory } from './gen/VegawidgetFactory'
import type { VegaWidgetSettings } from './gen/VegaWidgetSettings'

const factory = () => VegawidgetFactory.eINSTANCE

/** Adoptions already made, by the stored object they were made from. */
const adopted = new WeakMap<object, VegaWidgetSettings>()

/** Empty settings with the model's defaults - what the settings form adopts into. */
export function emptySettings(): VegaWidgetSettings {
  return factory().createVegaWidgetSettings()
}

/**
 * The chart a new widget starts with: bars of `amount` per `category`.
 *
 * Only for settings that never had layers. A chart whose layers were all
 * removed stays empty and says so - it is not refilled behind its back.
 */
export function withStarterLayer(settings: VegaWidgetSettings): VegaWidgetSettings {
  const layer = factory().createLayer()
  layer.mark = 'bar'
  const x = factory().createEncoding()
  x.channel = 'x'
  x.field = 'category'
  x.type = 'nominal'
  x.labelAngle = '0'
  const y = factory().createEncoding()
  y.channel = 'y'
  y.field = 'amount'
  y.type = 'quantitative'
  layer.encodings.add(x)
  layer.encodings.add(y)
  settings.layers.add(layer)
  return settings
}

/**
 * The settings of a chart, adopted once per stored object. Modelled input
 * is handed back as it is; nothing, or settings that never held layers,
 * start with the starter layer.
 */
export function modelledSettings(given: unknown): VegaWidgetSettings {
  const stored = given && typeof given === 'object' ? toRaw(given) : given
  if (!stored || typeof stored !== 'object') return withStarterLayer(emptySettings())
  if (isModelled(stored)) return stored as unknown as VegaWidgetSettings
  const held = adopted.get(stored)
  if (held) return held
  const made = adopt(emptySettings(), stored)
  if (!('layers' in stored)) withStarterLayer(made)
  adopted.set(stored, made)
  return made
}
