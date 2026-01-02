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

const VariableRepositoryIdentifier = Symbol.for('VariableRepository');

const log = loggerFactory.createLogger('daanse:variable:actions');

/**
 * Registers all variable-related actions (system and page level)
 */
export function registerVariableActions() {
  const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);
  const variableRepository = container.get<VariableRepository>(VariableRepositoryIdentifier);

  // Register Variable Actions metadata from Ecore model with correct context
  actionsRegistry.registerActionsFromEcoreString(
    'SystemVariableActions',
    VariableActionsModelContent,
    'system',
    'VariableActions.ecore'
  );
  actionsRegistry.registerActionsFromEcoreString(
    'PageVariableActions',
    VariableActionsModelContent,
    'page',
    'VariableActions.ecore'
  );

  // Register VariableRepository as instance for action execution
  actionsRegistry.registerInstance('VariableRepository', variableRepository);

  log('Variable actions registered');
}
