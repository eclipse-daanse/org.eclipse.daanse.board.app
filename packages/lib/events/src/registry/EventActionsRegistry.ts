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
import { getWidgetActions, type WidgetActionMetadata } from '../decorators/WidgetAction';
import { EcoreMetadataService, ECORE_METADATA_SERVICE, type EcoreActionMetadata } from './EcoreMetadataService';

/**
 * Kontext für Event-Aktionen
 */
export type EventActionContext = 'system' | 'page' | 'widget';

/**
 * Event-Aktion Definition
 */
export interface EventAction {
  context: EventActionContext;
  contextId?: string; // Optional: z.B. pageId oder widgetId
  eventType: string;
  action: (...args: any[]) => void | Promise<void>;
}

/**
 * Widget-Type Registrierung
 */
export interface WidgetTypeRegistration {
  widgetType: string;
  baseClass: any; // Die abstrakte Basis-Klasse mit @WidgetAction Decorators
  actions: Array<WidgetActionMetadata & { methodName: string }>;
  context?: EventActionContext; // Optional: Kontext für diese Actions (widget, system, page)
}

/**
 * Registry für Event-Aktionen in verschiedenen Kontexten
 */
@injectable()
export class EventActionsRegistry {
  private actions: Map<string, EventAction[]> = new Map();
  private widgetTypes: Map<string, WidgetTypeRegistration> = new Map();
  private widgetInstances: Map<string, any> = new Map(); // widgetInstanceId -> widget component ref
  private ecoreMetadataService?: EcoreMetadataService;

  /**
   * Erstellt einen eindeutigen Key für die Registry
   */
  private createKey(context: EventActionContext, eventType: string, contextId?: string): string {
    if (contextId) {
      return `${context}:${contextId}:${eventType}`;
    }
    return `${context}:${eventType}`;
  }

  /**
   * Registriert eine Aktion für ein Event in einem Kontext
   */
  register(
    context: EventActionContext,
    eventType: string,
    action: (...args: any[]) => void | Promise<void>,
    contextId?: string
  ): void {
    const key = this.createKey(context, eventType, contextId);

    if (!this.actions.has(key)) {
      this.actions.set(key, []);
    }

    this.actions.get(key)!.push({
      context,
      contextId,
      eventType,
      action
    });
  }

  /**
   * Entfernt alle Aktionen für einen bestimmten Kontext
   */
  unregister(context: EventActionContext, eventType: string, contextId?: string): void {
    const key = this.createKey(context, eventType, contextId);
    this.actions.delete(key);
  }

  /**
   * Führt alle registrierten Aktionen für ein Event aus
   */
  async execute(
    context: EventActionContext,
    eventType: string,
    ...args: any[]
  ): Promise<void> {
    const key = this.createKey(context, eventType);
    const actions = this.actions.get(key) || [];

    for (const action of actions) {
      try {
        await action.action(...args);
      } catch (error) {
        console.error(`Error executing action for ${key}:`, error);
      }
    }
  }

  /**
   * Gibt alle Aktionen für einen Kontext zurück
   */
  getActions(context: EventActionContext, eventType?: string, contextId?: string): EventAction[] {
    if (eventType) {
      const key = this.createKey(context, eventType, contextId);
      return this.actions.get(key) || [];
    }

    // Alle Aktionen für den Kontext
    const result: EventAction[] = [];
    const prefix = contextId ? `${context}:${contextId}:` : `${context}:`;

    for (const [key, actions] of this.actions.entries()) {
      if (key.startsWith(prefix)) {
        result.push(...actions);
      }
    }

    return result;
  }

  /**
   * Löscht alle registrierten Aktionen
   */
  clear(): void {
    this.actions.clear();
  }

  /**
   * Entfernt alle Aktionen für einen bestimmten Context-ID (z.B. beim Unmount eines Widgets)
   */
  clearContext(context: EventActionContext, contextId: string): void {
    const keysToDelete: string[] = [];
    const prefix = `${context}:${contextId}:`;

    for (const key of this.actions.keys()) {
      if (key.startsWith(prefix)) {
        keysToDelete.push(key);
      }
    }

    for (const key of keysToDelete) {
      this.actions.delete(key);
    }

    // Remove widget instance if it's a widget context
    if (context === 'widget') {
      this.widgetInstances.delete(contextId);
    }
  }

  /**
   * Set the EcoreMetadataService (injected manually to avoid circular dependency)
   */
  setEcoreMetadataService(service: EcoreMetadataService): void {
    this.ecoreMetadataService = service;
  }

  /**
   * Registriert einen Widget-Typ mit seinen Actions (aus @WidgetAction Decorators)
   * Wird beim Package-Import aufgerufen
   * @param widgetType - Widget type identifier
   * @param baseClass - Die abstrakte Basis-Klasse mit @WidgetAction Decorators
   * @param context - Optional: Kontext für diese Actions (default: 'widget')
   */
  registerWidgetType(widgetType: string, baseClass: any, context?: EventActionContext): void {
    const actions = getWidgetActions(baseClass);

    this.widgetTypes.set(widgetType, {
      widgetType,
      baseClass,
      actions,
      context: context || 'widget'
    });

    console.log(`📝 Registered widget type "${widgetType}" (context: ${context || 'widget'}) with ${actions.length} actions:`);
    actions.forEach(action => {
      console.log(`  - ${action.methodName}(${action.parameters?.join(', ') || ''})`, action);
    });
  }

  /**
   * Registriert Actions aus einem Ecore-Modell
   * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
   * @param ecoreUri - URI zum Ecore-Model (z.B. "model/model.ecore")
   * @param context - Kontext für diese Actions (default: 'widget')
   */
  async registerActionsFromEcore(
    name: string,
    ecoreUri: string,
    context?: EventActionContext
  ): Promise<void> {
    if (!this.ecoreMetadataService) {
      console.error('EcoreMetadataService not set. Cannot register actions from Ecore.');
      return;
    }

    try {
      // Load the Ecore model
      await this.ecoreMetadataService.loadModel(name, ecoreUri);

      // Extract actions from the model
      const ecoreActions = this.ecoreMetadataService.extractActions(name);

      // Convert EcoreActionMetadata to WidgetActionMetadata format
      const actions = ecoreActions.map(ecoreAction => ({
        methodName: ecoreAction.methodName,
        eventType: ecoreAction.eventType,
        parameters: ecoreAction.parameters.map(p =>
          `${p.name}${p.optional ? '?' : ''}: ${p.type}`
        )
      }));

      // Register the action type
      this.widgetTypes.set(name, {
        widgetType: name,
        baseClass: null, // No base class for Ecore-based actions
        actions,
        context: context || 'widget'
      });

      console.log(`📝 Registered actions "${name}" (context: ${context || 'widget'}) from Ecore with ${actions.length} actions:`);
      actions.forEach(action => {
        console.log(`  - ${action.methodName}(${action.parameters?.join(', ') || ''})`, action);
      });
    } catch (error) {
      console.error(`Failed to register actions "${name}" from Ecore:`, error);
      throw error;
    }
  }

  /**
   * @deprecated Use registerActionsFromEcore instead
   */
  async registerWidgetTypeFromEcore(widgetType: string, ecoreUri: string): Promise<void> {
    console.warn('registerWidgetTypeFromEcore is deprecated. Use registerActionsFromEcore instead.');
    return this.registerActionsFromEcore(widgetType, ecoreUri, 'widget');
  }

  /**
   * Registriert Actions aus einem Ecore-Modell-String
   * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
   * @param ecoreContent - Ecore model as string
   * @param context - Kontext für diese Actions (default: 'widget')
   * @param uri - Optional URI for the model
   */
  async registerActionsFromEcoreString(
    name: string,
    ecoreContent: string,
    context?: EventActionContext,
    uri?: string
  ): Promise<void> {
    if (!this.ecoreMetadataService) {
      console.error('EcoreMetadataService not set. Cannot register actions from Ecore.');
      return;
    }

    try {
      // Load the Ecore model from string
      await this.ecoreMetadataService.loadModelFromString(name, ecoreContent, uri);

      // Extract actions from the model
      const ecoreActions = this.ecoreMetadataService.extractActions(name);

      // Convert EcoreActionMetadata to WidgetActionMetadata format
      const actions = ecoreActions.map(ecoreAction => ({
        methodName: ecoreAction.methodName,
        eventType: ecoreAction.eventType,
        parameters: ecoreAction.parameters.map(p =>
          `${p.name}${p.optional ? '?' : ''}: ${p.type}`
        )
      }));

      // Register the action type
      this.widgetTypes.set(name, {
        widgetType: name,
        baseClass: null, // No base class for Ecore-based actions
        actions,
        context: context || 'widget'
      });

      console.log(`📝 Registered actions "${name}" (context: ${context || 'widget'}) from Ecore string with ${actions.length} actions:`);
      actions.forEach(action => {
        console.log(`  - ${action.methodName}(${action.parameters?.join(', ') || ''})`, action);
      });
    } catch (error) {
      console.error(`Failed to register actions "${name}" from Ecore string:`, error);
      throw error;
    }
  }

  /**
   * @deprecated Use registerActionsFromEcoreString instead
   */
  async registerWidgetTypeFromEcoreString(widgetType: string, ecoreContent: string, uri?: string): Promise<void> {
    console.warn('registerWidgetTypeFromEcoreString is deprecated. Use registerActionsFromEcoreString instead.');
    return this.registerActionsFromEcoreString(widgetType, ecoreContent, 'widget', uri);
  }

  /**
   * Registriert eine Instanz (Widget, Composer, Datasource, etc.)
   * Wird beim Mount/Init aufgerufen
   * @param instanceId - Eindeutige ID der Instanz
   * @param instanceRef - Referenz auf die Instanz mit den Action-Methoden
   */
  registerInstance(instanceId: string, instanceRef: any): void {
    this.widgetInstances.set(instanceId, instanceRef);
    console.log(`Registered instance "${instanceId}"`);
  }

  /**
   * @deprecated Use registerInstance instead
   */
  registerWidgetInstance(widgetInstanceId: string, widgetRef: any): void {
    this.registerInstance(widgetInstanceId, widgetRef);
  }

  /**
   * Entfernt eine Instanz
   * Wird beim Unmount/Dispose aufgerufen
   * @param instanceId - ID der Instanz
   */
  unregisterInstance(instanceId: string): void {
    this.widgetInstances.delete(instanceId);
    console.log(`Unregistered instance "${instanceId}"`);
  }

  /**
   * @deprecated Use unregisterInstance instead
   */
  unregisterWidgetInstance(widgetInstanceId: string): void {
    this.unregisterInstance(widgetInstanceId);
  }

  /**
   * Führt eine Action auf einer Instanz aus
   * @param instanceId - ID der Instanz
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing', 'switchThingByName')
   * @param args - Argumente für die Action
   */
  async executeInstanceAction(instanceId: string, actionName: string, ...args: any[]): Promise<void> {
    const instanceRef = this.widgetInstances.get(instanceId);

    if (!instanceRef) {
      console.warn(`Instance "${instanceId}" not found.`);
      return;
    }

    if (typeof instanceRef[actionName] !== 'function') {
      console.warn(`Action "${actionName}" not found on instance "${instanceId}".`);
      return;
    }

    try {
      await instanceRef[actionName](...args);
    } catch (error) {
      console.error(`Error executing action "${actionName}" on "${instanceId}":`, error);
    }
  }

  /**
   * @deprecated Use executeInstanceAction instead
   */
  async executeWidgetAction(widgetInstanceId: string, actionName: string, ...args: any[]): Promise<void> {
    return this.executeInstanceAction(widgetInstanceId, actionName, ...args);
  }

  /**
   * Führt eine Action auf allen registrierten Instanzen aus
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing')
   * @param args - Argumente für die Action
   */
  async executeActionOnAll(actionName: string, ...args: any[]): Promise<void> {
    if (this.widgetInstances.size === 0) {
      console.warn(`No instances registered to execute action "${actionName}".`);
      return;
    }

    let executedCount = 0;
    for (const [instanceId, instanceRef] of this.widgetInstances.entries()) {
      if (typeof instanceRef[actionName] === 'function') {
        try {
          await instanceRef[actionName](...args);
          executedCount++;
          console.log(`Executed action "${actionName}" on instance "${instanceId}"`);
        } catch (error) {
          console.error(`Error executing action "${actionName}" on "${instanceId}":`, error);
        }
      }
    }

    if (executedCount === 0) {
      console.warn(`Action "${actionName}" not found on any instances.`);
    } else {
      console.log(`Executed action "${actionName}" on ${executedCount} instance(s)`);
    }
  }

  /**
   * @deprecated Use executeActionOnAll instead
   */
  async executeWidgetActionOnAll(actionName: string, ...args: any[]): Promise<void> {
    return this.executeActionOnAll(actionName, ...args);
  }

  /**
   * Gibt alle registrierten Widget-Typen zurück
   */
  getWidgetTypes(): WidgetTypeRegistration[] {
    return Array.from(this.widgetTypes.values());
  }

  /**
   * Gibt die Registrierung für einen Widget-Typ zurück
   */
  getWidgetType(widgetType: string): WidgetTypeRegistration | undefined {
    return this.widgetTypes.get(widgetType);
  }
}

// Symbol für Dependency Injection
export const EVENT_ACTIONS_REGISTRY = Symbol.for('EventActionsRegistry');
