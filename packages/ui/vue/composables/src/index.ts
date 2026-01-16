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
import { VariableWrapper,VARIABLEWRAPPER } from './VariableWrapper'
import { VariableComplexStringWrapper,VARIABLECOMPLEXSTRINGWRAPPER } from './VariableComplexStringWrapper'

const WrapperTypes = {
  'VariableWrapper': VariableWrapper,
  'VariableComplexStringWrapper': VariableComplexStringWrapper,
}

export { useDatasourceRepository, useTemporaryStore, useVariableRepository, usePromisifiedModal,VariableWrapper,VARIABLEWRAPPER,VariableComplexStringWrapper,VARIABLECOMPLEXSTRINGWRAPPER, WrapperTypes}
