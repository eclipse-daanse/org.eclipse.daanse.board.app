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

import type { Router } from 'vue-router';
import {
  EventActionsRegistry,
  EVENT_ACTIONS_REGISTRY
} from 'org.eclipse.daanse.board.app.lib.events';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';

const log = loggerFactory.createLogger('daanse:system:actions');

/**
 * Registriert System-Actions (nur router-bezogene Actions)
 * Variable-Actions sind im variable package registriert
 */
export function registerSystemActions(router: Router) {
  const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

  // changePage Action
  actionsRegistry.register(
    'system',
    'changePage',
    async (pageId: string) => {
      log('📄 Changing page to: %s', pageId);
      await router.push(`/page/${pageId}`);
    }
  );

  log('✅ System actions registered');
}
