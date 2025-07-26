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
        variables.value.splice(0, variables.value.length);
        variables.value.push(...variableRepositoryInst.getAllVariables().map(([name, config]) => {
            return {
                ...config,
                name,
                key: name + Date.now()
            }
        }));
    }

    updateVariables();

    const createVariable = (type: string = 'ConstantVariable', config: any = {
        value: 'test'
    }) => {
        const uid = Math.random().toString(36).substring(7)
        const name = 'Variable ' + uid

        variableRepositoryInst.registerVariable(name, type, config)
        const newVar = variableRepositoryInst.getVariable(name)
        variables.value.push({
            ...newVar,
            name
        })
    };

    const removeVariable = (name: string) => {
        const index = variables.value.findIndex((v) => v.name === name);
        if (index > -1) {
            variables.value.splice(index, 1);
          variableRepositoryInst.removeVariable(name);
        }
    };

    const updateVariable = (variableState: any) => {
        const prevVar = variableRepositoryInst.getVariable(variableState.originalName);

        if (prevVar.type === variableState.type) {
            (prevVar as Variable).update(variableState.config)
            if (variableState.name && prevVar.name !== variableState.name) {
                prevVar.rename(variableState.name);
                variableRepositoryInst
                    .renameVariable(variableState.name,variableState.originalName);
            }
        } else {
            variableRepositoryInst.removeVariable(variableState.originalName);
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
