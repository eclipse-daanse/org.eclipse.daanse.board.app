/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import 'reflect-metadata';
import { injectable, inject } from '@eclipse-daanse/tsm';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY, type EventActionContext } from '../registry/EventActionsRegistry';
import { Condition } from './Condition';
import { Comperator } from './Comperator';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

const log = loggerFactory.createLogger('daanse:events:manager');

/**
 * Mapping von Payload Property zu Action Argument Index
 */
export interface PayloadToArgMapping {
  payloadPath: string;  // z.B. "thingId" oder "location.lat"
  argIndex: number;     // z.B. 0 für ersten Parameter
}

/**
 * Definition einer einzelnen Action
 */
export interface ActionDefinition {
  targetContext: EventActionContext;
  targetContextId?: string;
  actionName: string;
  actionArgs?: any[];  // Statische Args
  payloadMapping?: PayloadToArgMapping[];  // Dynamisches Mapping von Payload zu Args
}

/**
 * Event-Action-Mapping mit Conditions
 * Unterstützt einzelne Action (actionName) oder mehrere Actions (actions Array)
 */
export interface EventActionMapping {
  id: string;
  context: EventActionContext;
  contextId?: string;
  eventType: string;
  conditions?: Condition[];
  // Single action (legacy/simple case)
  targetContext?: EventActionContext;
  targetContextId?: string;
  actionName?: string;
  actionArgs?: any[];  // Statische Args
  payloadMapping?: PayloadToArgMapping[];  // Dynamisches Mapping von Payload zu Args
  // Multiple actions (new)
  actions?: ActionDefinition[];
}

/**
 * EventManager verbindet Events mit Actions und wertet Conditions aus
 */
@injectable()
export class EventManager {
  private mappings: Map<string, EventActionMapping[]> = new Map();
  private onMappingsChangedCallback?: () => void;

  constructor(
    @inject('EventActionsRegistry') private actionsRegistry: EventActionsRegistry
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
  private buildActionArgs(action: ActionDefinition, payload: any): any[] {
    // Start mit statischen Args oder leerem Array
    const args: any[] = [...(action.actionArgs || [])];

    // Wende Payload-Mappings an
    if (action.payloadMapping && action.payloadMapping.length > 0) {
      for (const pm of action.payloadMapping) {
        const value = this.getNestedProperty(payload, pm.payloadPath);
        args[pm.argIndex] = value;
        log('  Mapped payload.%s -> arg[%d] = %o', pm.payloadPath, pm.argIndex, value);
      }
    }

    return args;
  }

  /**
   * Führt eine einzelne Action aus
   */
  private async executeAction(action: ActionDefinition, payload: any): Promise<void> {
    const args = this.buildActionArgs(action, payload);

    if (!action.targetContextId) {
      // Wenn keine targetContextId angegeben ist, führe auf allen Instanzen aus
      log('No targetContextId specified, executing action on all instances');
      await this.actionsRegistry.executeActionOnAll(
        action.actionName,
        ...args
      );
    } else {
      // Führe auf spezifischer Instanz aus
      await this.actionsRegistry.executeInstanceAction(
        action.targetContextId,
        action.actionName,
        ...args
      );
    }
  }

  /**
   * Konvertiert ein legacy Mapping (mit actionName) zu ActionDefinition Array
   */
  private getActionsFromMapping(mapping: EventActionMapping): ActionDefinition[] {
    // Wenn actions Array existiert, nutze es
    if (mapping.actions && mapping.actions.length > 0) {
      return mapping.actions;
    }

    // Legacy: Konvertiere einzelne Action zu Array
    if (mapping.actionName) {
      return [{
        targetContext: mapping.targetContext!,
        targetContextId: mapping.targetContextId,
        actionName: mapping.actionName,
        actionArgs: mapping.actionArgs,
        payloadMapping: mapping.payloadMapping
      }];
    }

    return [];
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
          log('⏭️  Conditions not met for mapping %s, skipping', mapping.id);
          continue;
        }

        // Hole alle Actions für dieses Mapping (unterstützt legacy single action und neue multiple actions)
        const actions = this.getActionsFromMapping(mapping);

        if (actions.length === 0) {
          log('⚠️  No actions defined for mapping %s', mapping.id);
          continue;
        }

        log('▶️  Executing %d action(s) for mapping %s', actions.length, mapping.id);

        // Führe alle Actions sequenziell aus
        for (const action of actions) {
          log('  → Action: %s on %s', action.actionName, action.targetContextId || 'all instances');
          await this.executeAction(action, payload);
        }
      } catch (error) {
        log('❌ Error executing actions for mapping %s: %o', mapping.id, error);
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
/** Dienst-ID im Namensraum der ServiceRegistry; `EVENT_MANAGER` ist das dazu passende Symbol. */
/** Typed service id - the name and the contract declared once, here. */
export const EVENT_MANAGER_ID = serviceId<EventManager>('EventManager');

export const EVENT_MANAGER = Symbol.for(EVENT_MANAGER_ID);
