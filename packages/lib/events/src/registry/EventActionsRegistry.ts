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
   */
  registerWidgetType(widgetType: string, baseClass: any): void {
    const actions = getWidgetActions(baseClass);

    this.widgetTypes.set(widgetType, {
      widgetType,
      baseClass,
      actions
    });

    console.log(`📝 Registered widget type "${widgetType}" with ${actions.length} actions:`);
    actions.forEach(action => {
      console.log(`  - ${action.methodName}(${action.parameters?.join(', ') || ''})`, action);
    });
  }

  /**
   * Registriert einen Widget-Typ aus einem Ecore-Modell
   * @param widgetType - Widget type identifier (z.B. "MapWidget")
   * @param ecoreUri - URI zum Ecore-Model (z.B. "model/model.ecore")
   */
  async registerWidgetTypeFromEcore(widgetType: string, ecoreUri: string): Promise<void> {
    if (!this.ecoreMetadataService) {
      console.error('EcoreMetadataService not set. Cannot register widget type from Ecore.');
      return;
    }

    try {
      // Load the Ecore model
      await this.ecoreMetadataService.loadModel(widgetType, ecoreUri);

      // Extract actions from the model
      const ecoreActions = this.ecoreMetadataService.extractActions(widgetType);

      // Convert EcoreActionMetadata to WidgetActionMetadata format
      const actions = ecoreActions.map(ecoreAction => ({
        methodName: ecoreAction.methodName,
        eventType: ecoreAction.eventType,
        parameters: ecoreAction.parameters.map(p =>
          `${p.name}${p.optional ? '?' : ''}: ${p.type}`
        )
      }));

      // Register the widget type
      this.widgetTypes.set(widgetType, {
        widgetType,
        baseClass: null, // No base class for Ecore-based widgets
        actions
      });

      console.log(`📝 Registered widget type "${widgetType}" from Ecore with ${actions.length} actions:`);
      actions.forEach(action => {
        console.log(`  - ${action.methodName}(${action.parameters?.join(', ') || ''})`, action);
      });
    } catch (error) {
      console.error(`Failed to register widget type "${widgetType}" from Ecore:`, error);
      throw error;
    }
  }

  /**
   * Registriert einen Widget-Typ aus einem Ecore-Modell-String
   * @param widgetType - Widget type identifier
   * @param ecoreContent - Ecore model as string
   * @param uri - Optional URI for the model
   */
  async registerWidgetTypeFromEcoreString(widgetType: string, ecoreContent: string, uri?: string): Promise<void> {
    if (!this.ecoreMetadataService) {
      console.error('EcoreMetadataService not set. Cannot register widget type from Ecore.');
      return;
    }

    try {
      // Load the Ecore model from string
      await this.ecoreMetadataService.loadModelFromString(widgetType, ecoreContent, uri);

      // Extract actions from the model
      const ecoreActions = this.ecoreMetadataService.extractActions(widgetType);

      // Convert EcoreActionMetadata to WidgetActionMetadata format
      const actions = ecoreActions.map(ecoreAction => ({
        methodName: ecoreAction.methodName,
        eventType: ecoreAction.eventType,
        parameters: ecoreAction.parameters.map(p =>
          `${p.name}${p.optional ? '?' : ''}: ${p.type}`
        )
      }));

      // Register the widget type
      this.widgetTypes.set(widgetType, {
        widgetType,
        baseClass: null, // No base class for Ecore-based widgets
        actions
      });

      console.log(`📝 Registered widget type "${widgetType}" from Ecore string with ${actions.length} actions:`);
      actions.forEach(action => {
        console.log(`  - ${action.methodName}(${action.parameters?.join(', ') || ''})`, action);
      });
    } catch (error) {
      console.error(`Failed to register widget type "${widgetType}" from Ecore string:`, error);
      throw error;
    }
  }

  /**
   * Registriert eine Widget-Instanz (Component Ref)
   * Wird beim Widget-Mount aufgerufen
   */
  registerWidgetInstance(widgetInstanceId: string, widgetRef: any): void {
    this.widgetInstances.set(widgetInstanceId, widgetRef);
    console.log(`Registered widget instance "${widgetInstanceId}"`);
  }

  /**
   * Entfernt eine Widget-Instanz
   * Wird beim Widget-Unmount aufgerufen
   */
  unregisterWidgetInstance(widgetInstanceId: string): void {
    this.widgetInstances.delete(widgetInstanceId);
    console.log(`Unregistered widget instance "${widgetInstanceId}"`);
  }

  /**
   * Führt eine Widget-Action aus
   * @param widgetInstanceId - ID der Widget-Instanz
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing')
   * @param args - Argumente für die Action
   */
  async executeWidgetAction(widgetInstanceId: string, actionName: string, ...args: any[]): Promise<void> {
    const widgetRef = this.widgetInstances.get(widgetInstanceId);

    if (!widgetRef) {
      console.warn(`Widget instance "${widgetInstanceId}" not found.`);
      return;
    }

    if (typeof widgetRef[actionName] !== 'function') {
      console.warn(`Action "${actionName}" not found on widget instance "${widgetInstanceId}".`);
      return;
    }

    try {
      await widgetRef[actionName](...args);
    } catch (error) {
      console.error(`Error executing widget action "${actionName}" on "${widgetInstanceId}":`, error);
    }
  }

  /**
   * Führt eine Widget-Action auf allen registrierten Widget-Instanzen aus
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing')
   * @param args - Argumente für die Action
   */
  async executeWidgetActionOnAll(actionName: string, ...args: any[]): Promise<void> {
    if (this.widgetInstances.size === 0) {
      console.warn(`No widget instances registered to execute action "${actionName}".`);
      return;
    }

    let executedCount = 0;
    for (const [widgetInstanceId, widgetRef] of this.widgetInstances.entries()) {
      if (typeof widgetRef[actionName] === 'function') {
        try {
          await widgetRef[actionName](...args);
          executedCount++;
          console.log(`✅ Executed action "${actionName}" on widget instance "${widgetInstanceId}"`);
        } catch (error) {
          console.error(`Error executing widget action "${actionName}" on "${widgetInstanceId}":`, error);
        }
      }
    }

    if (executedCount === 0) {
      console.warn(`Action "${actionName}" not found on any widget instances.`);
    } else {
      console.log(`📢 Executed action "${actionName}" on ${executedCount} widget instance(s)`);
    }
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
