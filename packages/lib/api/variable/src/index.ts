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
 * The variable repository contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

export interface VariableConfig {
    [key: string]: any;
}

export interface VariableRepository {
  /**
  * Resolves one of the identifiers a registered variable type carries.
  * All of them are created with Symbol.for, so the description IS the id.
  */
  resolveIdentifier<T>(identifier: symbol): T;
  registerVariableType(type: string, identifiers: VariableDeffinition): void;
  /**
  * Nimmt die Registrierung eines Variablentyps zurück.
  *
  * Gegenstück zu registerVariableType, damit ein Modul seine Registrierung
  * in deactivate() wieder aufheben kann. Betrifft nur den Typ; angelegte
  * Variablen werden über removeVariable entfernt.
  *
  * @returns ob der Typ registriert war
  */
  unregisterVariableType(type: string): boolean;
  getRegisteredVariableTypes(): string[];
  getVariableIdentifiers(type: string): VariableDeffinition | undefined;
  registerVariable(name: string, type: string, config: VariableConfig): void;
  getVariable(name: string): any;
  getVariableWithContext(name: string, pageId?: string): any;
  getVariableById(id: string): any;
  removeVariable(nameOrId: string): void;
  getAllVariables(): any[];
  renameVariable(newname: string, oldname: string): void;
  renameVariableById(id: string, newname: string): void;
  getVariablesByScope(scope: 'global' | 'page', pageId?: string): any[];
  getVariableWithPageContext(pageId: string, name: string): any;
  /**
  * Sets or updates a global variable (Action method)
  */
  setGlobalVariable(variableName: string, value: any): void;
  /**
  * Sets or updates a page-scoped variable (Action method)
  */
  setPageVariable(variableName: string, value: any, pageId?: string): void;
}

export interface VariableDeffinition {
    Variable: symbol;
    Settings: any;
}

export const VARIABLE_REPOSITORY = serviceId<VariableRepository>('VariableRepository')
export const identifier = Symbol.for(VARIABLE_REPOSITORY)
