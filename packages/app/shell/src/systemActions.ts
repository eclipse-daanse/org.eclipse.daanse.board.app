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
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { SystemActionsEcoreContent } from 'org.eclipse.daanse.board.app.lib.events'
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';
import type { TinyEmitter } from 'tiny-emitter';

const log = loggerFactory.createLogger('daanse:system:actions');

/**
 * SystemActions Implementierung mit Router-Zugriff
 */
class SystemActionsImpl {
  private eventBus: TinyEmitter;

  constructor(private router: Router, eventBus: TinyEmitter) {
    this.eventBus = eventBus;
  }

  async changePage(pageId?: string): Promise<void> {
    if (!pageId) {
      log('⚠️ changePage called without pageId');
      return;
    }
    log('📄 Changing page to: %s', pageId);

    // Create promise that resolves when pageLoaded event is received
    const pageLoadedPromise = new Promise<void>((resolve) => {
      const handler = (event: { pageId: string }) => {
        if (event.pageId === pageId) {
          log('📄 Received pageLoaded event for page: %s', pageId);
          this.eventBus.off('system:pageLoaded', handler);
          resolve();
        }
      };
      this.eventBus.on('system:pageLoaded', handler);

      // Timeout fallback after 5 seconds
      setTimeout(() => {
        this.eventBus.off('system:pageLoaded', handler);
        log('⚠️ pageLoaded timeout for page: %s, continuing anyway', pageId);
        resolve();
      }, 5000);
    });

    await this.router.push(`/page/${pageId}`);
    await pageLoadedPromise;

    log('📄 Page change complete, widgets should be registered');
  }

  async setGlobalVariable(variableName?: string, value?: any): Promise<void> {
    // Diese Action wird vom VariableRepository implementiert
    log('⚠️ setGlobalVariable should be handled by VariableRepository');
  }
}

/**
 * Registriert System-Actions (nur router-bezogene Actions)
 * Variable-Actions sind im variable package registriert
 */
export async function registerSystemActions(router: Router, actionsRegistry: EventActionsRegistry, eventBus: TinyEmitter) {
  

  // Registriere SystemActions Metadata aus Ecore Model
  await actionsRegistry.registerActionsFromEcoreString(
    'SystemActions',
    SystemActionsEcoreContent,
    'system',
    'SystemActions.ecore'
  );

  // Registriere Instanz mit Router-Zugriff
  const systemActions = new SystemActionsImpl(router, eventBus);
  actionsRegistry.registerInstance('SystemActions', systemActions, 'SystemActions');

  log('✅ System actions registered');
}
