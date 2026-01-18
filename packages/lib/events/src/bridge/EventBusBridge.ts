/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import { injectable, inject } from 'inversify';
import type { TinyEmitter } from 'tiny-emitter';
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import { EventManager, EVENT_MANAGER } from '../manager/EventManager';
import { EventRegistry, EVENT_REGISTRY } from '../registry/EventRegistry';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from '../registry/EventActionsRegistry';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';

const log = loggerFactory.createLogger('daanse:events:bridge');

/**
 * Bridge zwischen EventBus (TinyEmitter) und EventManager
 *
 * Hört auf alle Widget Events vom EventBus und leitet sie an den EventManager weiter
 */
@injectable()
export class EventBusBridge {
  private eventBus!: TinyEmitter;
  private isSetup = false;
  private registeredListeners = new Set<string>();

  constructor(
    @inject(EVENT_MANAGER) private eventManager: EventManager,
    @inject(EVENT_REGISTRY) private eventRegistry: EventRegistry,
    @inject(EVENT_ACTIONS_REGISTRY) private actionsRegistry: EventActionsRegistry
  ) {
    // EventBus wird später aus dem Container geholt, da er möglicherweise noch nicht gebunden ist
  }

  /**
   * Richtet die Bridge ein (muss nach Container-Initialisierung aufgerufen werden)
   */
  setup(container: any): void {
    if (this.isSetup) {
      log('Bridge already setup, skipping');
      return;
    }

    try {
      this.eventBus = container.get(identifiers.TINY_EMITTER) as TinyEmitter;

      // Registriere Callback beim EventManager
      this.eventManager.onMappingsChanged(() => {
        log('📢 EventManager notified about mapping changes, refreshing listeners');
        this.refreshListeners();
      });

      this.setupListeners();
      this.isSetup = true;
      log('✅ EventBus Bridge setup complete');
    } catch (error) {
      log('❌ Failed to setup EventBus Bridge:', error);
    }
  }

  /**
   * Richtet Listener für alle Events ein die Mappings haben (widget, page, system)
   */
  private setupListeners(): void {
    // Get all event mappings from EventManager
    const mappings = this.eventManager.getAllMappings();

    // Extract unique event types from mappings
    const eventTypes = new Set<string>();
    for (const mapping of mappings) {
      if (mapping.context === 'widget') {
        // Event format: widget:WidgetType:eventType (z.B. widget:MapWidget:click_on_thing)
        // mapping.eventType ist bereits "MapWidget:click_on_thing"
        const fullEventType = `widget:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      } else if (mapping.context === 'page') {
        // Page context: eventType ist ein Widget-Event (z.B. MapWidget:click_on_thing)
        // Wir registrieren für das Widget-Event und filtern später nach pageId
        const fullEventType = `widget:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      } else if (mapping.context === 'system') {
        // Event format: system:eventType (z.B. system:pageChange)
        const fullEventType = `system:${mapping.eventType}`;
        eventTypes.add(fullEventType);
      }
    }

    // Register listener for each unique event type
    for (const fullEventType of eventTypes) {
      if (this.registeredListeners.has(fullEventType)) {
        continue; // Already registered
      }

      this.eventBus.on(fullEventType, (data: any) => {
        log('📨 Received event via EventBus: %s', fullEventType);
        this.handleEvent(fullEventType, data);
      });

      this.registeredListeners.add(fullEventType);
      log('Registered listener for: %s', fullEventType);
    }

    log('✅ Bridge listening to %d event types', this.registeredListeners.size);
  }

  /**
   * Aktualisiert die Listener basierend auf aktuellen Mappings
   * Wird aufgerufen wenn neue Mappings hinzugefügt werden
   */
  refreshListeners(): void {
    if (!this.isSetup) return;
    this.setupListeners();
  }

  /**
   * Verarbeitet ein Event und leitet es an den EventManager weiter
   * Unterstützt widget, page und system Events
   */
  private async handleEvent(fullEventType: string, data: any): Promise<void> {
    try {
      const parts = fullEventType.split(':');
      if (parts.length < 2) {
        log('Invalid event format: %s', fullEventType);
        return;
      }

      const context = parts[0] as 'widget' | 'page' | 'system';

      if (context === 'widget') {
        // Parse: widget:WidgetType:eventType
        if (parts.length < 3) {
          log('Invalid widget event format: %s', fullEventType);
          return;
        }
        const widgetType = parts[1]; // z.B. "MapWidget"
        const eventType = parts[2];  // z.B. "click_on_thing"
        const widgetId = data.widgetId;
        const payload = data.payload;

        log('📨 Widget event received: %s from widget %s', fullEventType, widgetId);
        log('  Payload: %o', payload);

        // 1. Handle as widget event
        await this.eventManager.handleEvent(
          'widget',
          `${widgetType}:${eventType}`,
          payload,
          widgetId
        );

        // 2. Also handle as page event (for page-context mappings)
        // Get the pageId of this widget
        const widgetPageId = this.actionsRegistry.getInstancePageId(widgetId);
        if (widgetPageId) {
          log('📨 Also handling as page event for page: %s', widgetPageId);
          await this.eventManager.handleEvent(
            'page',
            `${widgetType}:${eventType}`,
            payload,
            widgetPageId
          );
        }
      } else if (context === 'system') {
        // Parse: system:eventType
        const eventType = parts.slice(1).join(':'); // Alles nach "system:"
        const payload = data.payload || data;

        log('📨 System event received: %s', fullEventType);
        log('  Payload: %o', payload);

        await this.eventManager.handleEvent(
          'system',
          eventType,
          payload
        );
      } else {
        log('Unknown event context: %s', context);
      }
    } catch (error) {
      log('❌ Error handling event:', error);
    }
  }
}

export const EVENT_BUS_BRIDGE = Symbol.for('EventBusBridge');
