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

import type { EClass, EObject } from '@emfts/core'
import { wireNameOf } from '@eclipse-daanse/emf-xml'
import { bootstrapInBrowser } from '@eclipse-daanse/xmla-model/browser'
import type { XmlaModels } from '@eclipse-daanse/xmla-model'

/*
 * Bootstrapping parses every XMLA .ecore - a couple of hundred
 * milliseconds - so it happens once, on first use, and every connection
 * shares the result. The former client parsed its WSDL per connection.
 */
let models: XmlaModels | null = null

export function xmlaModels(): XmlaModels {
  return (models ??= bootstrapInBrowser())
}

function xmlaClass(name: string): EClass {
  const eClass = xmlaModels().named('xmla')?.getEClassifier(name) as EClass | null
  if (!eClass) throw new Error(`the xmla model has no ${name}`)
  return eClass
}

function create(eClass: EClass): EObject {
  return xmlaModels().named('xmla')!.getEFactoryInstance().create(eClass)
}

let propertyFeatures: Map<string, any> | null = null

/** A `PropertyList` from the names the properties have on the wire. */
export function propertyList(
  values: Record<string, string | number | boolean | undefined>,
): EObject | null {
  const eClass = xmlaClass('PropertyList')
  if (!propertyFeatures) {
    propertyFeatures = new Map()
    for (const feature of eClass.getEAllStructuralFeatures() as any) {
      propertyFeatures.set(wireNameOf(feature), feature)
    }
  }

  let list: EObject | null = null
  for (const [name, value] of Object.entries(values)) {
    if (value === undefined || value === '') continue
    const feature = propertyFeatures.get(name)
    if (!feature) throw new Error(`the XMLA PropertyList has no ${name}`)
    list ??= create(eClass)
    list.eSet(feature, value)
  }
  return list
}

/** A `<Statement>` command carrying the text. */
export function statement(text: string): EObject {
  const eClass = xmlaClass('Statement')
  const command = create(eClass)
  command.eSet(eClass.getEStructuralFeature('statement')!, text)
  return command
}
