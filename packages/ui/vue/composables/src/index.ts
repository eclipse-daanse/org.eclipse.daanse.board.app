/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import { useDatasourceRepository } from './useDatasourceRepository'
import { useTemporaryStore } from './useTemporaryStore'
import { usePromisifiedModal } from './promisifiedModal'
import { useVariableRepository } from './useVariableRepository'
import { useGlobalLoading } from './useGlobalLoading'
import { plainSettings } from './plainSettings'
/* Modelled objects, as something Vue re-renders on. */
import { useEObject, useEList, useFeature } from './useEmf'
/* What a registry offers - types and widgets whose bundles arrive late. */
export { useRegistrations, type ObservableRegistry } from './useRegistrations'
/* What is on one board - its widgets and where they sit. */
import { useBoard } from './useBoard'
// VariableWrapper is Vue-free and therefore lives in lib.variables. The
// re-export keeps the existing import paths working; new code should import
// it from org.eclipse.daanse.board.app.lib.variables directly.
import { VariableWrapper,VARIABLEWRAPPER } from 'org.eclipse.daanse.board.app.lib.variables'
import { trackWrappers } from './wrapperReactivity'
export { trackWrappers, untrackWrappers } from './wrapperReactivity'

/*
 * A wrapper's value has to be visible to Vue, and lib.variables cannot see
 * Vue from where it sits. Started on load: a widget reads a setting the
 * moment it renders, which is well before anything would get round to
 * calling this.
 */
trackWrappers()
import { VariableComplexStringWrapper,VARIABLECOMPLEXSTRINGWRAPPER } from './VariableComplexStringWrapper'
import { EPackageRegistry } from '@emfts/core'
import { ComposablesPackage } from './gen/ComposablesPackage'

const WrapperTypes = {
  'VariableWrapper': VariableWrapper,
  'VariableComplexStringWrapper': VariableComplexStringWrapper,
}

/*
 * Building the EPackage on load and putting it in the registry, so a
 * reference to VariableWrapper from another model resolves to a type
 * instead of to nothing. The class itself stays hand-written - this is the
 * metamodel beside it, not a replacement.
 *
 * The registration is ours to do: generated packages resolve foreign types
 * through EPackageRegistry.INSTANCE but do not enter themselves into it,
 * so whoever owns the package has to. Reported as emf.ts.codegen#36.
 */
EPackageRegistry.INSTANCE.registerPackage(ComposablesPackage.eINSTANCE)

export { ComposablesPackage }
export { useDatasourceRepository, useTemporaryStore, useVariableRepository, usePromisifiedModal, useGlobalLoading, VariableWrapper,VARIABLEWRAPPER,VariableComplexStringWrapper,VARIABLECOMPLEXSTRINGWRAPPER, WrapperTypes, plainSettings, useEObject, useEList, useFeature, useBoard}
export { useHistory, useCurrentHistory, type History } from './useHistory'

/*
 * What the .ecore models say about themselves - the field descriptions the
 * code generator drops. Used by the forms that create connections and data
 * sources.
 */
export {
  describeClass,
  describeConfiguration,
  describeModel,
  hasModelDocs,
  registerModelDocs,
  resetModelDocs,
} from './modelDocs'
export type { ClassDoc, FeatureDoc } from './modelDocs'

/*
 * Translation that re-renders when a bundle's texts arrive or the language
 * changes - which is what lets a widget or its texts be deployed later.
 */
export { useTranslation } from './useTranslation'
export { useLanguage } from './useLanguage'
/* Numbers and dates in the language on screen. */
export { useFormat, numberFormat, dateFormat, relativeDays } from './useFormat'
export type { Format } from './useFormat'
export type { Translation } from './useTranslation'
export type { Language, LanguageChoice } from './useLanguage'

/*
 * Anything bound with v-html goes through one of these first. They are
 * exported here so a widget needs no DOMPurify dependency of its own.
 */
export { sanitizeHtml, sanitizeSvg, sanitizeStyleBlock } from './sanitize'
/* Its texts - collected by lib.i18next, see src/i18n. */
export { CommonTranslations } from './i18n'
