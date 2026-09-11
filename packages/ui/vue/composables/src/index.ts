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
// VariableWrapper ist Vue-frei und liegt deshalb in lib.variables. Der
// Re-Export haelt die bestehenden Importpfade gueltig; neuer Code sollte
// direkt aus org.eclipse.daanse.board.app.lib.variables importieren.
import { VariableWrapper,VARIABLEWRAPPER } from 'org.eclipse.daanse.board.app.lib.variables'
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
export { useDatasourceRepository, useTemporaryStore, useVariableRepository, usePromisifiedModal, useGlobalLoading, VariableWrapper,VARIABLEWRAPPER,VariableComplexStringWrapper,VARIABLECOMPLEXSTRINGWRAPPER, WrapperTypes, plainSettings, useEObject, useEList, useFeature}
