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

// @vitest-environment jsdom

/*
 * One registration draws every setting in the application, which is why its
 * absence is so quiet: nothing throws, the dialog still appears, and every
 * field in it is a textarea reading "[object Object]". That is what shipped
 * when VariableWrapper moved packages and a written-out nsURI in this file
 * stopped matching - see #1091.
 */

import { describe, it, expect } from 'vitest'
import { BasicEReference, type EClass } from '@emfts/core'
import { componentRegistry } from '@emfts/vue-registry'
import { VariablesPackage } from 'org.eclipse.daanse.board.app.lib.variables'
import { registerWrapperRenderer } from './registerRenderer'
import SettingsFieldWidget from './SettingsFieldWidget.vue'

/** A setting as a widget's model states it: a reference to the wrapper. */
function wrapperReference(name: string) {
  const reference = new BasicEReference()
  reference.setName(name)
  reference.setEType(VariablesPackage.eINSTANCE.getEClassifier('VariableWrapper') as EClass)
  return reference
}

describe('the settings field renderer', () => {
  it('finds the class it registers against', () => {
    // False means the classifier was not found, and every field falls back.
    expect(registerWrapperRenderer()).toBe(true)
  })

  it('is what the registry hands back for a setting', () => {
    registerWrapperRenderer()

    const match = componentRegistry.getComponent({ reference: wrapperReference('fontSize') })

    expect(match).toBe(SettingsFieldWidget)
  })

  /*
   * The move that caused #1091 changed both the owning package and the
   * nsURI. Asking the package object rather than the registry for a string
   * is what makes that a build error; this holds the other half, that the
   * class is reachable under the name the renderer asks for.
   */
  it('reaches VariableWrapper through the package rather than a written-out nsURI', () => {
    expect(VariablesPackage.eINSTANCE.getEClassifier('VariableWrapper')).toBeDefined()
  })
})
