/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY, type EventActionContext } from '../registry/EventActionsRegistry';
import { Condition } from './Condition';
import { Comperator } from './Comperator';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';

const log = loggerFactory.createLogger('daanse:events:manager');

/**
 * Mapping von Payload Property zu Action Argument Index
 */
export interface PayloadToArgMapping {
  payloadPath: string;  // z.B. "thingId" oder "location.lat"
  argIndex: number;     // z.B. 0 für ersten Parameter
}

/**
 * Event-Action-Mapping mit Conditions
 */
export interface EventActionMapping {
  id: string;
  context: EventActionContext;
  contextId?: string;
  eventType: string;
  conditions?: Condition[];
  targetContext: EventActionContext;
  targetContextId?: string;
  actionName: string;
  actionArgs?: any[];  // Statische Args
  payloadMapping?: PayloadToArgMapping[];  // Dynamisches Mapping von Payload zu Args
}

/**
 * EventManager verbindet Events mit Actions und wertet Conditions aus
 */
@injectable()
export class EventManager {
  private mappings: Map<string, EventActionMapping[]> = new Map();
  private onMappingsChangedCallback?: () => void;

  constructor(
    @inject(EVENT_ACTIONS_REGISTRY) private actionsRegistry: EventActionsRegistry
  ) {}

  /**
   * Erstellt einen Key für die Mapping-Registry
   */
  private createMappingKey(context: EventActionContext, eventType: string, contextId?: string): string {
    if (contextId) {
      return `${context}:${contextId}:${eventType}`;
    }
    return `${context}:${eventType}`;
  }

  /**
   * Registriert ein Event-Action-Mapping
   */
  registerMapping(mapping: EventActionMapping): void {
    const key = this.createMappingKey(mapping.context, mapping.eventType, mapping.contextId);

    if (!this.mappings.has(key)) {
      this.mappings.set(key, []);
    }

    this.mappings.get(key)!.push(mapping);
    log('Registered event-action mapping: %s -> %s', key, mapping.actionName);

    // Benachrichtige über Änderungen
    if (this.onMappingsChangedCallback) {
      this.onMappingsChangedCallback();
    }
  }

  /**
   * Entfernt ein Event-Action-Mapping
   */
  unregisterMapping(mappingId: string): void {
    for (const [key, mappings] of this.mappings.entries()) {
      const index = mappings.findIndex(m => m.id === mappingId);
      if (index !== -1) {
        mappings.splice(index, 1);
        if (mappings.length === 0) {
          this.mappings.delete(key);
        }
        log('Unregistered event-action mapping: %s', mappingId);
        return;
      }
    }
  }

  /**
   * Registriert einen Callback der aufgerufen wird wenn Mappings geändert werden
   */
  onMappingsChanged(callback: () => void): void {
    this.onMappingsChangedCallback = callback;
  }

  /**
   * Setzt alle Mappings (z.B. nach Laden aus Storage)
   */
  setAllMappings(mappings: EventActionMapping[]): void {
    this.mappings.clear();
    for (const mapping of mappings) {
      const key = this.createMappingKey(mapping.context, mapping.eventType, mapping.contextId);
      if (!this.mappings.has(key)) {
        this.mappings.set(key, []);
      }
      this.mappings.get(key)!.push(mapping);
    }

    // Benachrichtige über Änderungen
    if (this.onMappingsChangedCallback) {
      this.onMappingsChangedCallback();
      log('Notified listeners about %d loaded mappings', mappings.length);
    }
  }

  /**
   * Wertet Conditions gegen ein Payload aus
   */
  private evaluateConditions(conditions: Condition[], payload: any): boolean {
    if (!conditions || conditions.length === 0) {
      return true; // Keine Conditions = immer erfüllt
    }

    // Alle Conditions müssen erfüllt sein (AND-Verknüpfung)
    return conditions.every(condition => {
      if (!condition.prop) {
        return true; // Condition ohne Property wird ignoriert
      }

      const payloadValue = this.getNestedProperty(payload, condition.prop);
      const conditionValue = condition.value;

      return this.evaluateComparison(payloadValue, condition.comperator, conditionValue);
    });
  }

  /**
   * Hilfsfunktion zum Zugriff auf verschachtelte Properties (z.B. "location.coordinates.lat")
   */
  private getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((current, prop) => {
      return current?.[prop];
    }, obj);
  }

  /**
   * Wertet einen Vergleich aus
   */
  private evaluateComparison(payloadValue: any, comperator: Comperator, conditionValue: any): boolean {
    // Konvertiere Werte für numerische Vergleiche
    const numPayload = Number(payloadValue);
    const numCondition = Number(conditionValue);
    const isNumeric = !isNaN(numPayload) && !isNaN(numCondition);

    switch (comperator) {
      case Comperator.eq:
        return isNumeric ? numPayload === numCondition : payloadValue == conditionValue;

      case Comperator.neq:
        return isNumeric ? numPayload !== numCondition : payloadValue != conditionValue;

      case Comperator.lt:
        return isNumeric ? numPayload < numCondition : payloadValue < conditionValue;

      case Comperator.lte:
        return isNumeric ? numPayload <= numCondition : payloadValue <= conditionValue;

      case Comperator.gt:
        return isNumeric ? numPayload > numCondition : payloadValue > conditionValue;

      case Comperator.gte:
        return isNumeric ? numPayload >= numCondition : payloadValue >= conditionValue;

      default:
        console.warn(`Unknown comperator: ${comperator}`);
        return false;
    }
  }

  /**
   * Baut die Action Arguments basierend auf statischen Args und Payload-Mapping
   */
  private buildActionArgs(mapping: EventActionMapping, payload: any): any[] {
    // Start mit statischen Args oder leerem Array
    const args: any[] = [...(mapping.actionArgs || [])];

    // Wende Payload-Mappings an
    if (mapping.payloadMapping && mapping.payloadMapping.length > 0) {
      for (const pm of mapping.payloadMapping) {
        const value = this.getNestedProperty(payload, pm.payloadPath);
        args[pm.argIndex] = value;
        log('  Mapped payload.%s -> arg[%d] = %o', pm.payloadPath, pm.argIndex, value);
      }
    }

    return args;
  }

  /**
   * Verarbeitet ein Event und führt alle passenden Actions aus
   */
  async handleEvent(
    context: EventActionContext,
    eventType: string,
    payload: any,
    contextId?: string
  ): Promise<void> {
    // Suche nach Mappings mit spezifischer contextId
    const keyWithContext = this.createMappingKey(context, eventType, contextId);
    let mappings = this.mappings.get(keyWithContext) || [];

    // Fallback: Suche nach Mappings ohne contextId (für alle Contexts)
    if (mappings.length === 0 && contextId) {
      const keyWithoutContext = this.createMappingKey(context, eventType);
      mappings = this.mappings.get(keyWithoutContext) || [];
      log('📨 Handling event: %s, no specific mappings, using general mappings: %d', keyWithContext, mappings.length);
    } else {
      log('📨 Handling event: %s, found %d mapping(s)', keyWithContext, mappings.length);
    }

    log('  Payload: %o', payload);

    for (const mapping of mappings) {
      try {
        // Prüfe Conditions
        if (!this.evaluateConditions(mapping.conditions || [], payload)) {
          log('⏭️  Conditions not met for mapping %s, skipping action %s', mapping.id, mapping.actionName);
          continue;
        }

        log('▶️  Executing action %s for mapping %s', mapping.actionName, mapping.id);

        // Baue Arguments mit Payload-Mapping
        const args = this.buildActionArgs(mapping, payload);

        // Führe Action aus
        if (mapping.targetContext === 'widget') {
          // Widget Action
          if (!mapping.targetContextId) {
            // Wenn keine targetContextId angegeben ist, führe auf allen Widgets des Event-Typs aus
            log('📢 No targetContextId specified, executing action on all widgets of this type');
            await this.actionsRegistry.executeWidgetActionOnAll(
              mapping.actionName,
              ...args
            );
          } else {
            // Führe auf spezifischem Widget aus
            await this.actionsRegistry.executeWidgetAction(
              mapping.targetContextId,
              mapping.actionName,
              ...args
            );
          }
        } else {
          // System/Page Action (über EventActionsRegistry)
          await this.actionsRegistry.execute(
            mapping.targetContext,
            mapping.actionName,
            ...args
          );
        }
      } catch (error) {
        log('❌ Error executing action for mapping %s: %o', mapping.id, error);
      }
    }
  }

  /**
   * Gibt alle Mappings zurück
   */
  getAllMappings(): EventActionMapping[] {
    const result: EventActionMapping[] = [];
    for (const mappings of this.mappings.values()) {
      result.push(...mappings);
    }
    return result;
  }

  /**
   * Gibt Mappings für einen bestimmten Context zurück
   */
  getMappings(context: EventActionContext, eventType?: string, contextId?: string): EventActionMapping[] {
    if (eventType) {
      const key = this.createMappingKey(context, eventType, contextId);
      return this.mappings.get(key) || [];
    }

    // Alle Mappings für den Context
    const result: EventActionMapping[] = [];
    const prefix = contextId ? `${context}:${contextId}:` : `${context}:`;

    for (const [key, mappings] of this.mappings.entries()) {
      if (key.startsWith(prefix)) {
        result.push(...mappings);
      }
    }

    return result;
  }

  /**
   * Löscht alle Mappings für einen Context
   */
  clearContext(context: EventActionContext, contextId: string): void {
    const keysToDelete: string[] = [];
    const prefix = `${context}:${contextId}:`;

    for (const key of this.mappings.keys()) {
      if (key.startsWith(prefix)) {
        keysToDelete.push(key);
      }
    }

    for (const key of keysToDelete) {
      this.mappings.delete(key);
    }

    console.log(`Cleared event mappings for context ${context}:${contextId}`);
  }

  /**
   * Löscht alle Mappings
   */
  clear(): void {
    this.mappings.clear();
  }
}

// Symbol für Dependency Injection
export const EVENT_MANAGER = Symbol.for('EventManager');
