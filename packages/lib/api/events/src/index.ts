/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

/**
 * The eventing contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

/// <reference path="./vite-env.d.ts" />

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { ResourceSet, EPackage } from '@emfts/core'
/*
 * The events models stay with the implementation for now: their generated
 * classes carry implementation-owned decorators (@WidgetAction), and the
 * generator maps sibling classes by nsURI to the old package - moving them
 * needs generator support first (follow-up). Their types travel here.
 */

/*
 * The contract itself, generated from EventModel.ecore in this package.
 *
 * A model is a promise about shape, so it belongs with the interfaces
 * rather than with one implementation of them - and a widget that emits an
 * event should depend on what an event is, not on the thing that dispatches
 * it. Payload and the three action interfaces are declared here and used by
 * lib.events, which is the way round the tsm manifest already described.
 */
/*
 * The model text, exported rather than read by path.
 *
 * EcoreMetadataService parses it to register the EPackage, because the
 * generated EventsPackage carries the classes but not the eAnnotations the
 * @WidgetAction metadata lives in. Reaching into this package's model/
 * directory would copy the text into the consumer's bundle, where it would
 * outlive an api upgrade and keep registering the old model - so it travels
 * as an export, one copy, versioned with the rest of the contract.
 */
export { default as EVENT_MODEL_ECORE } from '../model/EventModel.ecore?raw'

export type { Payload } from './gen/Payload'
/*
 * The implementations too: in emf mode the interface is the contract and
 * the Impl is what you instantiate, so a package that hands out one has to
 * hand out the other - and anything deriving from these needs the class to
 * extend.
 */
export { PayloadImpl } from './gen/PayloadImpl'
export { WidgetActionInterfaceImpl } from './gen/WidgetActionInterfaceImpl'
export { SystemActionInterfaceImpl } from './gen/SystemActionInterfaceImpl'
export { PageActionInterfaceImpl } from './gen/PageActionInterfaceImpl'
export { EventsPackage } from './gen/EventsPackage'
export { EventsFactory } from './gen/EventsFactory'
export type { WidgetActionInterface } from './gen/WidgetActionInterface'
export type { SystemActionInterface } from './gen/SystemActionInterface'
export type { PageActionInterface } from './gen/PageActionInterface'

/*
 * Still declared by the implementation: these carry behaviour - decorators,
 * the comparator, the raw ecore content - and are not part of the contract
 * a widget needs.
 */
import type { Condition, WidgetAction, ActionParameter, SystemActionsEcoreContent, WidgetEventDefinition, Comperator, MetadataEntry, PayloadMetadata, PayloadPropertyInfo, ActionDefinition, WidgetTypeRegistration, EventActionContext, EventActionMapping } from 'org.eclipse.daanse.board.app.lib.events'
export type { Condition, WidgetAction, ActionParameter, SystemActionsEcoreContent, WidgetEventDefinition, Comperator, MetadataEntry, PayloadMetadata, PayloadPropertyInfo, ActionDefinition, WidgetTypeRegistration, EventActionContext, EventActionMapping }

export interface RegisteredInstance {
    instanceId: string;
    widgetType: string;
    instanceRef: any;
    pageId?: string;
}

export interface EventAction {
    context: EventActionContext;
    contextId?: string;
    eventType: string;
    action: (...args: any[]) => void | Promise<void>;
}

export interface EcoreActionMetadata {
    methodName: string;
    eventType: string;
    parameters: EcoreParameterMetadata[];
}

export interface EcorePayloadMetadata {
    className: string;
    properties: EcorePayloadPropertyMetadata[];
}

export interface PayloadToArgMapping {
    payloadPath: string;
    argIndex: number;
}

export interface WidgetActionMetadata {
    eventType: string;
    parameters?: string[];
}

export interface EcoreParameterMetadata {
    name: string;
    type: string;
    optional: boolean;
    index: number;
}

export interface EcorePayloadPropertyMetadata {
    name: string;
    type: string;
    optional: boolean;
}

export interface EventRegistry {
  /**
  * Set EcoreMetadataService instance for Ecore-based metadata extraction
  */
  setEcoreMetadataService(service: any): void;
  /**
  * Registriert alle Events eines Widgets
  */
  registerWidget(widgetType: string, events: WidgetEventDefinition[]): void;
  /**
  * Gibt alle registrierten Events zurück (mit vollständigem widgetType:eventType)
  */
  getAllEvents(): WidgetEventDefinition[];
  /**
  * Gibt ein Event zurück
  */
  getEvent(widgetType: string, eventType: string): WidgetEventDefinition | undefined;
  /**
  * Gibt alle Events für einen Widget-Typ zurück
  */
  getWidgetEvents(widgetType: string): WidgetEventDefinition[];
  /**
  * Extrahiert alle Metadaten aus einem Payload-Typ
  */
  extractPayloadMetadata(target: any): PayloadMetadata;
  /**
  * Extract payload properties with type information from Ecore model
  * Falls back to decorator-based extraction if Ecore model is not available
  */
  extractPayloadPropertiesForEvent(eventType: string): PayloadPropertyInfo[];
  /**
  * Extract payload properties with type information (legacy method for backward compatibility)
  * @deprecated Use extractPayloadPropertiesForEvent instead
  */
  extractPayloadProperties(target: any): PayloadPropertyInfo[];
  /**
  * Löscht alle registrierten Events
  */
  clear(): void;
  /**
  * Entfernt alle Events eines Widget-Typs
  */
  unregisterWidget(widgetType: string): void;
}

export interface EventActionsRegistry {
  /**
  * Erstellt einen eindeutigen Key für die Registry
  */
  /**
  * Registriert eine Aktion für ein Event in einem Kontext
  */
  register(context: EventActionContext, eventType: string, action: (...args: any[]) => void | Promise<void>, contextId?: string): void;
  /**
  * Entfernt alle Aktionen für einen bestimmten Kontext
  */
  unregister(context: EventActionContext, eventType: string, contextId?: string): void;
  /**
  * Führt alle registrierten Aktionen für ein Event aus
  */
  execute(context: EventActionContext, eventType: string, ...args: any[]): Promise<void>;
  /**
  * Gibt alle Aktionen für einen Kontext zurück
  */
  getActions(context: EventActionContext, eventType?: string, contextId?: string): EventAction[];
  /**
  * Löscht alle registrierten Aktionen
  */
  clear(): void;
  /**
  * Entfernt alle Aktionen für einen bestimmten Context-ID (z.B. beim Unmount eines Widgets)
  */
  clearContext(context: EventActionContext, contextId: string): void;
  /**
  * Set the EcoreMetadataService (injected manually to avoid circular dependency)
  */
  setEcoreMetadataService(service: EcoreMetadataService): void;
  /**
  * Registriert einen Widget-Typ mit seinen Actions (aus @WidgetAction Decorators)
  * Wird beim Package-Import aufgerufen
  * @param widgetType - Widget type identifier
  * @param baseClass - Die abstrakte Basis-Klasse mit @WidgetAction Decorators
  * @param context - Optional: Kontext für diese Actions (default: 'widget')
  */
  registerWidgetType(widgetType: string, baseClass: any, context?: EventActionContext): void;
  /**
  * Nimmt die Registrierung eines Widget-Typs zurück.
  *
  * Gegenstück zu registerWidgetType, damit ein Widget-Modul seine
  * Registrierung in deactivate() wieder aufheben kann.
  *
  * @param widgetType - Widget type identifier
  * @returns ob der Typ registriert war
  */
  unregisterWidgetType(widgetType: string): boolean;
  /**
  * Registriert Actions aus einem Ecore-Modell
  * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
  * @param ecoreUri - URI zum Ecore-Model (z.B. "model/model.ecore")
  * @param context - Kontext für diese Actions (default: 'widget')
  */
  registerActionsFromEcore(name: string, ecoreUri: string, context?: EventActionContext): Promise<void>;
  /**
  * @deprecated Use registerActionsFromEcore instead
  */
  registerWidgetTypeFromEcore(widgetType: string, ecoreUri: string): Promise<void>;
  /**
  * Registriert Actions aus einem Ecore-Modell-String
  * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
  * @param ecoreContent - Ecore model as string
  * @param context - Kontext für diese Actions (default: 'widget')
  * @param uri - Optional URI for the model
  */
  registerActionsFromEcoreString(name: string, ecoreContent: string, context?: EventActionContext, uri?: string): Promise<void>;
  /**
  * @deprecated Use registerActionsFromEcoreString instead
  */
  registerWidgetTypeFromEcoreString(widgetType: string, ecoreContent: string, uri?: string): Promise<void>;
  /**
  * Registriert eine Instanz (Widget, Composer, Datasource, etc.)
  * Wird beim Mount/Init aufgerufen
  * @param instanceId - Eindeutige ID der Instanz
  * @param instanceRef - Referenz auf die Instanz mit den Action-Methoden
  * @param widgetType - Optional: Widget-Typ für die Instanz (z.B. "OGCSTAToChartComposer")
  * @param pageId - Optional: Page ID auf der die Instanz lebt
  */
  registerInstance(instanceId: string, instanceRef: any, widgetType?: string, pageId?: string): void;
  /**
  * Gibt die pageId für eine Instanz zurück
  * Prüft zuerst die manuelle Registrierung, dann die Lookup-Funktion
  */
  getInstancePageId(instanceId: string): string | undefined;
  /**
  * Setzt eine Funktion die pageId von widgetId ableiten kann
  * Diese Funktion wird von der Vue-App gesetzt um Zugriff auf die Pinia Stores zu haben
  */
  setPageIdLookup(fn: (widgetId: string) => string | undefined): void;
  /**
  * @deprecated Use registerInstance instead
  */
  registerWidgetInstance(widgetInstanceId: string, widgetRef: any): void;
  /**
  * Entfernt eine Instanz
  * Wird beim Unmount/Dispose aufgerufen
  * @param instanceId - ID der Instanz
  */
  unregisterInstance(instanceId: string): void;
  /**
  * Gibt alle registrierten Instanzen zurück
  * @param widgetType - Optional: Filter nach Widget-Typ
  */
  getRegisteredInstances(widgetType?: string): RegisteredInstance[];
  /**
  * Gibt alle Instanz-IDs zurück
  */
  getInstanceIds(): string[];
  /**
  * @deprecated Use unregisterInstance instead
  */
  unregisterWidgetInstance(widgetInstanceId: string): void;
  /**
  * Führt eine Action auf einer Instanz aus
  * @param instanceId - ID der Instanz
  * @param actionName - Name der Action-Methode (z.B. 'zoomToThing', 'switchThingByName')
  * @param args - Argumente für die Action
  */
  executeInstanceAction(instanceId: string, actionName: string, ...args: any[]): Promise<void>;
  /**
  * @deprecated Use executeInstanceAction instead
  */
  executeWidgetAction(widgetInstanceId: string, actionName: string, ...args: any[]): Promise<void>;
  /**
  * Führt eine Action auf allen registrierten Instanzen aus
  * @param actionName - Name der Action-Methode (z.B. 'zoomToThing')
  * @param args - Argumente für die Action
  */
  executeActionOnAll(actionName: string, ...args: any[]): Promise<void>;
  /**
  * @deprecated Use executeActionOnAll instead
  */
  executeWidgetActionOnAll(actionName: string, ...args: any[]): Promise<void>;
  /**
  * Gibt alle registrierten Widget-Typen zurück
  */
  getWidgetTypes(): WidgetTypeRegistration[];
  /**
  * Gibt die Registrierung für einen Widget-Typ zurück
  */
  getWidgetType(widgetType: string): WidgetTypeRegistration | undefined;
}

export interface EventManager {
  /**
  * Erstellt einen Key für die Mapping-Registry
  */
  /**
  * Registriert ein Event-Action-Mapping
  */
  registerMapping(mapping: EventActionMapping): void;
  /**
  * Entfernt ein Event-Action-Mapping
  */
  unregisterMapping(mappingId: string): void;
  /**
  * Registriert einen Callback der aufgerufen wird wenn Mappings geändert werden
  */
  onMappingsChanged(callback: () => void): void;
  /**
  * Setzt alle Mappings (z.B. nach Laden aus Storage)
  */
  setAllMappings(mappings: EventActionMapping[]): void;
  /**
  * Wertet Conditions gegen ein Payload aus
  */
  /**
  * Hilfsfunktion zum Zugriff auf verschachtelte Properties (z.B. "location.coordinates.lat")
  */
  /**
  * Wertet einen Vergleich aus
  */
  /**
  * Baut die Action Arguments basierend auf statischen Args und Payload-Mapping
  */
  /**
  * Führt eine einzelne Action aus
  */
  /**
  * Konvertiert ein legacy Mapping (mit actionName) zu ActionDefinition Array
  */
  /**
  * Verarbeitet ein Event und führt alle passenden Actions aus
  */
  handleEvent(context: EventActionContext, eventType: string, payload: any, contextId?: string): Promise<void>;
  /**
  * Gibt alle Mappings zurück
  */
  getAllMappings(): EventActionMapping[];
  /**
  * Gibt Mappings für einen bestimmten Context zurück
  */
  getMappings(context: EventActionContext, eventType?: string, contextId?: string): EventActionMapping[];
  /**
  * Löscht alle Mappings für einen Context
  */
  clearContext(context: EventActionContext, contextId: string): void;
  /**
  * Löscht alle Mappings
  */
  clear(): void;
}

export interface EventBusBridge {
  /**
  * Richtet die Bridge ein (muss nach Container-Initialisierung aufgerufen werden)
  */
  /**
  * Verbindet die Bruecke mit dem Ereignisbus.
  *
  * Nimmt die ServiceRegistry statt des Inversify-Containers: gebraucht wird
  * daraus nur der Emitter, und ueber die Registry ist er unter seiner
  * String-ID erreichbar.
  */
  setup(services: {
  getRequired<T>(id: string): T;
  }): void;
  /**
  * Richtet Listener für alle Events ein die Mappings haben (widget, page, system)
  */
  /**
  * Aktualisiert die Listener basierend auf aktuellen Mappings
  * Wird aufgerufen wenn neue Mappings hinzugefügt werden
  */
  refreshListeners(): void;
  /**
  * Verarbeitet ein Event und leitet es an den EventManager weiter
  * Unterstützt widget, page und system Events
  */
}

export interface EcoreMetadataService {
  /**
  * Creates a ResourceSet with registered Ecore package
  *
  * EResourceSetImpl registers the Ecore package and the XMI resource
  * factory for the `.ecore` extension in its constructor.
  */
  /**
  * Load the Events model synchronously and register it in the PackageRegistry
  */
  /**
  * Create a resource for the given URI and load the XMI content into it.
  *
  * `loadFromString` is optional on the Resource interface — only the XMI
  * resource implementation provides it. The resource factory registered for
  * `.ecore` returns one, so a missing method means the URI did not resolve to
  * an XMI resource and the caller needs to know.
  */
  /**
  * Register an EPackage in the ResourceSet's package registry under its nsURI
  */
  /**
  * Get the ResourceSet instance
  */
  getResourceSet(): ResourceSet;
  /**
  * Load an Ecore model from a URI string
  */
  loadModel(widgetType: string, ecoreUri: string): Promise<void>;
  /**
  * Load an Ecore model from a string
  */
  loadModelFromString(widgetType: string, ecoreContent: string, uri?: string): Promise<void>;
  /**
  * Register an already loaded EPackage for a widget type
  */
  registerModel(widgetType: string, ecorePackage: EPackage): void;
  /**
  * Extract action metadata from an Ecore model
  */
  extractActions(widgetType: string): EcoreActionMetadata[];
  /**
  * Get annotation detail value by key
  */
  /**
  * Extract payload metadata from an Ecore model by class name
  */
  extractPayloadMetadata(widgetType: string, payloadClassName: string): EcorePayloadMetadata | null;
  /**
  * Check if an EClass extends WidgetActionInterfaceImpl
  */
  /**
  * Map Ecore data types to TypeScript types
  */
  /**
  * Clear all cached models
  */
  clear(): void;
}

export const EVENT_REGISTRY_ID = serviceId<EventRegistry>('EventRegistry')
export const EVENT_REGISTRY = Symbol.for(EVENT_REGISTRY_ID)
export const EVENT_ACTIONS_REGISTRY_ID = serviceId<EventActionsRegistry>('EventActionsRegistry')
export const EVENT_ACTIONS_REGISTRY = Symbol.for(EVENT_ACTIONS_REGISTRY_ID)
export const EVENT_MANAGER_ID = serviceId<EventManager>('EventManager')
export const EVENT_MANAGER = Symbol.for(EVENT_MANAGER_ID)
export const EVENT_BUS_BRIDGE_ID = serviceId<EventBusBridge>('EventBusBridge')
export const EVENT_BUS_BRIDGE = Symbol.for(EVENT_BUS_BRIDGE_ID)
export const ECORE_METADATA_SERVICE_ID = serviceId<EcoreMetadataService>('EcoreMetadataService')
