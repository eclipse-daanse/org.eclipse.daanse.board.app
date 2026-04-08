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
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import {
  EventActionsRegistry,
  EVENT_ACTIONS_REGISTRY
} from 'org.eclipse.daanse.board.app.lib.events';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';
import { WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'

const log = loggerFactory.createLogger('daanse:system:actions');

class TestActions {
  @WidgetAction({ eventType: 'test.console' })
  testAction(...args: any[]) {
    console.log('TestActions', args);
  }
}

export async function registerTestActions() {
  const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

  actionsRegistry.registerWidgetType('test', TestActions, 'system');

  const instance = new TestActions();
  actionsRegistry.registerInstance('test', instance, 'system');

  log('✅ Test actions registered');
}
