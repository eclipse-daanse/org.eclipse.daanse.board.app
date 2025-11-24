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

import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';
import { VariableRepository } from '../classes/VariableRepository';
import VariableActionsModelContent from '../../model/VariableActions.ecore?raw';
import { Variable } from 'org.eclipse.daanse.board.app.lib.variables'

const VariableRepositoryIdentifier = Symbol.for('VariableRepository');

const log = loggerFactory.createLogger('daanse:variable:actions');

/**
 * Registers all variable-related actions (system and page level)
 */
export function registerVariableActions() {
  const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);
  const variableRepository = container.get<VariableRepository>(VariableRepositoryIdentifier);

  // Register Variable Actions metadata from Ecore model
  // This registers the action signatures so the UI knows about parameters
  actionsRegistry.registerWidgetTypeFromEcoreString('SystemVariableActions', VariableActionsModelContent);
  actionsRegistry.registerWidgetTypeFromEcoreString('PageVariableActions', VariableActionsModelContent);

  // setGlobalVariable Action - sets or updates a global variable
  actionsRegistry.register(
    'system',
    'setGlobalVariable',
    async (variableName: string, value: any) => {
      log('🌐 Setting global variable: %s = %o', variableName, value);

      // Get existing variable
      const existingVar:Variable = variableRepository.getVariable(variableName);

      if (existingVar) {
        // Update existing variable value
        existingVar.value=value;
      } else {
        // Create new constant variable if it doesn't exist
        variableRepository.registerVariable(variableName, 'constant', {
          value: value,
          scope: 'global'
        });
      }
    }
  );

  // setPageVariable Action - sets or updates a page-scoped variable
  actionsRegistry.register(
    'page',
    'setPageVariable',
    async (variableName: string, value: any, pageId?: string) => {
      log('📄 Setting page variable: %s = %o (pageId: %s)', variableName, value, pageId);

      // Get existing variable with page context
      const existingVar = variableRepository.getVariableWithContext(variableName, pageId);

      if (existingVar && typeof existingVar.set === 'function') {
        // Update existing variable value
        existingVar.set(value);
      } else {
        // Create new page-scoped constant variable
        variableRepository.registerVariable(variableName, 'constant', {
          value: value,
          scope: 'page',
          pageId: pageId
        });
      }
    }
  );

  log('✅ Variable actions registered');
}
