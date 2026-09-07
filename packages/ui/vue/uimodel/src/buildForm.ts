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
 * A form derived from a class, for models that do not ship a UI model yet.
 *
 * The composer renders a UIModel; a settings class that has none would
 * render nothing. Rather than leave those blank, a form is derived from the
 * class itself - one widget per structural feature, in declaration order,
 * which is the order the model already puts them in.
 *
 * This is a floor, not a ceiling. As soon as a package ships a real UIModel
 * (as XMI beside its Ecore), that model wins: it can group fields into
 * sections, hide them behind conditions, label them properly and give them
 * an order chosen for the reader rather than for the generator.
 */
import type { EClass, EStructuralFeature } from '@emfts/core'
import { UimodelFactory } from '@emfts/uimodel-composer'
import type { UIModel, WidgetComponent } from '@emfts/uimodel-composer'

/** How a feature should be edited, from its name and type. */
export type FieldKind = 'colour' | 'number' | 'text' | 'flag'

/*
 * The settings models express nearly everything as a string wrapper, so the
 * type alone cannot say what a field is. The name can: these models were
 * written by people who called a colour a colour.
 */
/*
 * fill and stroke are colours by another name - SVG's names for them. The
 * anchors keep strokeWidth out of it: that is a number, and it sits right
 * beside the two in the same form.
 */
const COLOUR = /color|colour|^fill$|^stroke$/i
const NUMBER = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i
const FLAG = /^(is|has|show|enable|fullscreen|visible)/i

export function kindOf(feature: EStructuralFeature): FieldKind {
  const name = feature.getName?.() ?? ''
  const type = feature.getEType?.()?.getName?.() ?? ''

  if (type === 'EBoolean' || FLAG.test(name)) return 'flag'
  if (COLOUR.test(name)) return 'colour'
  if (type === 'EInt' || type === 'EDouble' || NUMBER.test(name)) return 'number'
  return 'text'
}

/** "backgroundColorTransparence" reads as "Background color transparence". */
export function labelOf(feature: EStructuralFeature): string {
  const name = feature.getName?.() ?? ''
  const spaced = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ')
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

/**
 * A flat form for every feature of a class.
 *
 * The widget kinds are the ones the uimodel metamodel already names, so a
 * hand-written model can express the same thing and this stays a stand-in
 * rather than a parallel language.
 */
export function formFor(eClass: EClass, name = eClass.getName?.() ?? 'Settings'): UIModel {
  const factory = UimodelFactory.eINSTANCE
  const form = factory.createFormView()
  form.name = name

  for (const feature of eClass.getEStructuralFeatures()) {
    const widget = widgetFor(factory, feature)
    widget.feature = feature
    widget.label = labelOf(feature)
    form.fields.push(widget)
  }

  const model = factory.createUIModel()
  model.name = name
  model.targetClasses.push(eClass)
  model.components.push(form)
  return model
}

function widgetFor(factory: typeof UimodelFactory.eINSTANCE, feature: EStructuralFeature): WidgetComponent {
  switch (kindOf(feature)) {
    case 'flag':
      return factory.createCheckboxWidget()
    case 'number':
      return factory.createNumberWidget()
    // Colours have no widget class of their own in the metamodel; the
    // renderer picks the picker from the feature name, the same way this does
    case 'colour':
    case 'text':
    default:
      return factory.createInputWidget()
  }
}
