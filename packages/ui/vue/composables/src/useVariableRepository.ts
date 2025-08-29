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

import {
  identifier,
  type VariableRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { ref, computed, type ComputedRef } from 'vue'
import { Variable } from 'org.eclipse.daanse.board.app.lib.variables'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { type PageContextServiceI, identifier as PAGE_CONTEXT_SERVICE } from 'org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service'

export function useVariableRepository() {
  let variableRepositoryFound = false
  const updateTimestamp = ref(Date.now())

  const connectedVariables = [] as Variable[]

  if (!container) {
    throw new Error(
      'Container not found. Check if your module is properly configured.',
    )
  }

  const variableRepository = container.get<VariableRepository>(identifier)
  if (!variableRepository) {
    throw new Error('VariableRepository not found in the container.')
  }
  variableRepositoryFound = true

  let pageContextService: PageContextServiceI | null = null
  try {
    pageContextService = container.get<PageContextServiceI>(PAGE_CONTEXT_SERVICE)
  } catch (e) {
    // PageContextService might not be available in all contexts
    console.warn('PageContextService not available for variable resolution')
  }

  const subscriptionFn = () => {
    updateTimestamp.value = Date.now()
  }

  const calculateValue = (templateValue: string): string => {
    // Regex pattern to find variables in format {{ _variableName }}
    // This matches:
    // 1. Double curly brackets with optional whitespace
    // 2. Underscore (in capture group 1) followed by alphanumeric characters and/or underscores (capture group 2)
    // 3. Closing double curly brackets with optional whitespace
    const regex = /\{\{\s*(_)([a-zA-Z0-9_]+)\s*\}\}/g
    for (const variable of connectedVariables) {
      variable.unsubscribe(subscriptionFn)
    }
    connectedVariables.length = 0

    // Find all matches in the template
    const matches = [...templateValue.matchAll(regex)]

    // Extract variable names from matches (without the underscore)
    const listOfVariables = matches.map(match => match[2])

    // Process the template by replacing variables with their values
    let result = templateValue

    // Replace each variable placeholder with its actual value
    for (const varName of listOfVariables) {
      try {
        let variable = undefined;
        try{
          // Try context-aware variable resolution first
          const currentPageId = pageContextService?.getCurrentPageId()
          variable = variableRepository.getVariableWithContext ?
            variableRepository.getVariableWithContext(varName, currentPageId) :
            variableRepository.getVariable(varName)
        }catch (e){
          console.error(e)
        }


        if (variable) {
          variable.subscribe(subscriptionFn)
          connectedVariables.push(variable)
          const value = variable.value

          // If variable exists, replace all instances of its placeholder with the underscore in template
          const variableRegex = new RegExp(
            `\\{\\{\\s*_${varName}\\s*\\}\\}`,
            'g',
          )
          result = result.replace(variableRegex, String(value))
        }
      } catch (error) {
        console.warn(`Error resolving variable ${varName}:`, error)
      }
    }

    return result
  }

  const wrapParameters = (
    parameters: Record<string, ComputedRef<any>>,
  ): Record<string, any> => {
    const wrappedParameters: Record<string, any> = {}
    for (const [key, value] of Object.entries(parameters)) {
      try{
        const computedValue = computed(() => {
          updateTimestamp.value
          if (value){
            return calculateValue(value.value + '')
          }else {
            return value
          }

        })
        wrappedParameters[key] = computedValue
      }catch (r){
        console.log(r);
      }

    }
    return wrappedParameters
  }

  return {
    calculateValue,
    wrapParameters,
  }
}
