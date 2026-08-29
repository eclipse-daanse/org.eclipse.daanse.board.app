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
import { EPackageRegistry, type EClass } from '@emfts/core'
import { componentRegistry } from '@emfts/vue-registry'
import VariableWrapperWidget from './VariableWrapperWidget.vue'

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

  componentRegistry.registerForReference(VariableWrapperWidget, { targetClass: target })
  done = true
  return true
}
