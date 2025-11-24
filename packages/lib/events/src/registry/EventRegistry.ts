/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import 'reflect-metadata';
import { injectable } from 'inversify';

/**
 * Metadaten-Eintrag
 */
export interface MetadataEntry {
  key: string;
  value: any;
}

/**
 * Payload-Metadaten-Struktur
 */
export interface PayloadMetadata {
  __class: MetadataEntry[];
  [propertyName: string]: MetadataEntry[];
}

/**
 * Extended Payload Property with type information
 */
export interface PayloadPropertyInfo {
  name: string;
  type: string;
  optional: boolean;
}

/**
 * Definition eines Widget-Events
 */
export interface WidgetEventDefinition {
  name: string;
  type: string;
  description?: string;
  payloadType: any;             // typeof PayloadClass
}

/**
 * Zentrale Registry für alle Event-Schemas mit Introspection
 */
@injectable()
export class EventRegistry {
  private events: Map<string, WidgetEventDefinition> = new Map();
  private widgetTypeMap: Map<string, string> = new Map(); // Maps eventType -> widgetType
  private ecoreMetadataService?: any; // EcoreMetadataService instance

  /**
   * Set EcoreMetadataService instance for Ecore-based metadata extraction
   */
  setEcoreMetadataService(service: any): void {
    this.ecoreMetadataService = service;
  }

  /**
   * Registriert alle Events eines Widgets
   */
  registerWidget(widgetType: string, events: WidgetEventDefinition[]): void {
    for (const event of events) {
      const key = `${widgetType}:${event.type}`;
      // Store mapping from event type to widget type
      this.widgetTypeMap.set(key, widgetType);
      // Speichere Event mit vollständigem Type
      this.events.set(key, {
        ...event,
        type: key  // z.B. "MapWidget:click_on_datastream"
      });
    }
  }

  /**
   * Gibt alle registrierten Events zurück (mit vollständigem widgetType:eventType)
   */
  getAllEvents(): WidgetEventDefinition[] {
    return Array.from(this.events.values());
  }

  /**
   * Gibt ein Event zurück
   */
  getEvent(widgetType: string, eventType: string): WidgetEventDefinition | undefined {
    return this.events.get(`${widgetType}:${eventType}`);
  }

  /**
   * Gibt alle Events für einen Widget-Typ zurück
   */
  getWidgetEvents(widgetType: string): WidgetEventDefinition[] {
    return Array.from(this.events.entries())
      .filter(([key]) => key.startsWith(`${widgetType}:`))
      .map(([, event]) => event);
  }

  /**
   * Extrahiert alle Metadaten aus einem Payload-Typ
   */
  public extractPayloadMetadata(target: any): PayloadMetadata {
    const proto = target.prototype ?? target;
    const result: Record<string, any> = {};

    const ownKeys = Reflect.getMetadataKeys(proto);
    result["__class"] = ownKeys.map(key => ({
      key,
      value: Reflect.getMetadata(key, proto)
    }));

    // Get property names from prototype
    const protoPropertyNames = Object.getOwnPropertyNames(proto);
    const propertyNamesSet = new Set<string>(protoPropertyNames);

    // Also get property names from an instance to catch optional properties
    try {
      const instance = new target();
      Object.keys(instance).forEach(key => propertyNamesSet.add(key));
    } catch (e) {
      // If we can't instantiate, just use proto properties
    }

    // Check all property names for metadata
    for (const property of propertyNamesSet) {
      if (property === "constructor") continue;

      const metaKeys = Reflect.getMetadataKeys(proto, property);
      if (metaKeys.length === 0) continue;

      result[property] = metaKeys.map(key => ({
        key,
        value: Reflect.getMetadata(key, proto, property)
      }));
    }

    return result as PayloadMetadata;
  }

  /**
   * Extract payload properties with type information from Ecore model
   * Falls back to decorator-based extraction if Ecore model is not available
   */
  public extractPayloadPropertiesForEvent(eventType: string): PayloadPropertyInfo[] {
    // Try to get widget type from event type
    const widgetType = this.widgetTypeMap.get(eventType);

    if (!widgetType || !this.ecoreMetadataService) {
      console.warn(`No widget type or EcoreMetadataService for event: ${eventType}`);
      return [];
    }

    // Get payload class name from event type (e.g., "MapWidget:click_on_thing" -> "ThingClickPayload")
    const event = this.events.get(eventType);
    if (!event || !event.payloadType) {
      console.warn(`No event or payload type found for: ${eventType}`);
      return [];
    }

    const payloadClassName = event.payloadType.name; // e.g., "ThingClickPayload"

    // Extract from Ecore model
    const ecoreMetadata = this.ecoreMetadataService.extractPayloadMetadata(widgetType, payloadClassName);

    if (ecoreMetadata && ecoreMetadata.properties) {
      console.log(`✅ Extracted ${ecoreMetadata.properties.length} properties from Ecore model for ${payloadClassName}`);
      return ecoreMetadata.properties;
    }

    console.warn(`No Ecore metadata found for ${payloadClassName}, returning empty array`);
    return [];
  }

  /**
   * Extract payload properties with type information (legacy method for backward compatibility)
   * @deprecated Use extractPayloadPropertiesForEvent instead
   */
  public extractPayloadProperties(target: any): PayloadPropertyInfo[] {
    // This is now a fallback method that won't be used
    console.warn('extractPayloadProperties() called - this method is deprecated, use extractPayloadPropertiesForEvent() instead');
    return [];
  }

  /**
   * Löscht alle registrierten Events
   */
  clear(): void {
    this.events.clear();
  }

  /**
   * Entfernt alle Events eines Widget-Typs
   */
  unregisterWidget(widgetType: string): void {
    const keysToDelete: string[] = [];

    for (const key of this.events.keys()) {
      if (key.startsWith(`${widgetType}:`)) {
        keysToDelete.push(key);
      }
    }

    for (const key of keysToDelete) {
      this.events.delete(key);
    }
  }
}

// Symbol für Dependency Injection
export const EVENT_REGISTRY = Symbol.for('EventRegistry');
