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

import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type VariableRepository, identifier }
  from 'org.eclipse.daanse.board.app.lib.repository.variable';
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import { TinyEmitter } from 'tiny-emitter';
import { type Variable, VariableEvents } from 'org.eclipse.daanse.board.app.lib.variables'
import { container } from 'org.eclipse.daanse.board.app.lib.core';

export const useVariablesStore = defineStore('variables', () =>{
    const variables = ref([] as any[]);
    const variableRepositoryInst = container.get<VariableRepository>(identifier)
    const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER);

    eventBus.on(VariableEvents.VariableUpdated, () => {
        updateVariables();
    });

    const updateVariables = () => {
        const allVars = variableRepositoryInst.getAllVariables();
        variables.value.splice(0, variables.value.length);
        const mappedVars = allVars.map(([name, config]) => {
            return {
                ...config,
                name,
                key: config.id || name // Use id as key if available, fallback to name
            }
        });
        variables.value.push(...mappedVars);
    }

    updateVariables();

    const createVariable = (type: string = 'ConstantVariable', config: any = {
        value: 'test'
    }) => {
        const uid = Math.random().toString(36).substring(7)
        const name = 'Variable ' + uid

        variableRepositoryInst.registerVariable(name, type, config)
        updateVariables(); // Refresh the entire list from repository
    };

    const removeVariable = (nameOrId: string) => {
        // Use the improved removeVariable that handles both names and IDs
        variableRepositoryInst.removeVariable(nameOrId);
        updateVariables(); // Refresh the entire list from repository
    };

    const updateVariable = (variableState: any) => {
        const prevVar = variableState.id ?
            variableRepositoryInst.getVariableById(variableState.id) :
            variableRepositoryInst.getVariable(variableState.originalName);

        if (!prevVar) {
            console.error('Variable not found:', variableState.id || variableState.originalName);
            return;
        }

        if (prevVar.type === variableState.type) {
            (prevVar as Variable).update(variableState.config)
            if (variableState.name && prevVar.name !== variableState.name) {
                // Find the correct scope for this variable and update the repository map
                const scope = prevVar.scope || 'global'
                const scopeKey = prevVar.pageId && scope === 'page' ?
                  `page-${prevVar.pageId}` : scope

                // Manual fix: Update the repository map directly using scope-aware storage
                const repository = variableRepositoryInst as any
                if (repository.availableVariablesByScope) {
                    const scopeMap = repository.availableVariablesByScope.get(scopeKey)
                    if (scopeMap && scopeMap.has(prevVar.name)) {
                        scopeMap.set(variableState.name, prevVar)
                        scopeMap.delete(prevVar.name)
                    }
                }

                // Update variable name
                prevVar.rename(variableState.name);
            }
        } else {
            // Use ID for removal to ensure proper cleanup from scope-aware storage
            variableRepositoryInst.removeVariable(prevVar.id);
            variableRepositoryInst
                .registerVariable(variableState.name, variableState.type, variableState.config);
        }
        updateVariables();
    }

    return {
        variables,
        createVariable,
        removeVariable,
        updateVariable,
        updateVariables
    };
});
