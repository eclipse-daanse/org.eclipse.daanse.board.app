/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import { injectable } from 'inversify';
import {
  ResourceSet,
  Resource,
  EResourceSetImpl,
  URI,
  EPackage,
  EClass,
  EClassifier,
  EAnnotation,
  EList,
  isEClass
} from '@emfts/core';
import eventModelContent from '../../model/EventModel.ecore?raw';

const EVENTS_NS_URI = 'http://org.eclipse.daanse.board.app.lib.events';

/**
 * Normalisiert ein mehrwertiges Feature auf ein Array.
 *
 * @emfts/core liefert je nach Zugriff eine EList (getEClassifiers) oder ein
 * natives Array (getEOperations, getESuperTypes) - siehe
 * eclipse-fennec/emf.ts#68.
 */
function toArray<T>(value: EList<T> | T[] | null | undefined): T[] {
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }

  const result: T[] = [];
  for (let i = 0; i < value.size(); i++) {
    result.push(value.get(i));
  }
  return result;
}

export interface EcoreParameterMetadata {
  name: string;
  type: string;
  optional: boolean;
  index: number;
}

export interface EcoreActionMetadata {
  methodName: string;
  eventType: string;
  parameters: EcoreParameterMetadata[];
}

export interface EcorePayloadPropertyMetadata {
  name: string;
  type: string;
  optional: boolean;
}

export interface EcorePayloadMetadata {
  className: string;
  properties: EcorePayloadPropertyMetadata[];
}

/**
 * Service for extracting action metadata from Ecore models
 */
@injectable()
export class EcoreMetadataService {
  private modelCache: Map<string, EPackage> = new Map();
  private resourceSet: ResourceSet;

  constructor() {
    this.resourceSet = this.createResourceSet();
    this.loadEventsModelSync();
  }

  /**
   * Creates a ResourceSet with registered Ecore package
   *
   * EResourceSetImpl registers the Ecore package and the XMI resource
   * factory for the `.ecore` extension in its constructor.
   */
  private createResourceSet(): ResourceSet {
    return new EResourceSetImpl();
  }

  /**
   * Load the Events model synchronously and register it in the PackageRegistry
   */
  private loadEventsModelSync(): void {
    try {
      const resource = this.createLoadedResource(
        `${EVENTS_NS_URI}/EventModel.ecore`,
        eventModelContent
      );

      const contents = resource.getContents();
      if (contents.size() > 0) {
        const eventsPackage = contents.get(0) as EPackage;
        // Register the Events package by its nsURI so it can be resolved
        this.registerPackage(eventsPackage);
        console.log('✅ Loaded and registered Events model package with nsURI:', eventsPackage.getNsURI());
      }
    } catch (error) {
      console.error('❌ Failed to load Events model:', error);
    }
  }

  /**
   * Create a resource for the given URI and load the XMI content into it.
   *
   * `loadFromString` is optional on the Resource interface — only the XMI
   * resource implementation provides it. The resource factory registered for
   * `.ecore` returns one, so a missing method means the URI did not resolve to
   * an XMI resource and the caller needs to know.
   */
  private createLoadedResource(uri: string, content: string): Resource {
    const resource = this.resourceSet.createResource(URI.createURI(uri));

    if (typeof resource.loadFromString !== 'function') {
      throw new Error(
        `Resource for "${uri}" does not support loading from a string; expected an XMI resource.`
      );
    }

    resource.loadFromString(content);
    return resource;
  }

  /**
   * Register an EPackage in the ResourceSet's package registry under its nsURI
   */
  private registerPackage(pkg: EPackage): void {
    const nsURI = pkg.getNsURI();
    if (nsURI) {
      this.resourceSet.getPackageRegistry().set(nsURI, pkg);
    }
  }

  /**
   * Get the ResourceSet instance
   */
  getResourceSet(): ResourceSet {
    return this.resourceSet;
  }

  /**
   * Load an Ecore model from a URI string
   */
  async loadModel(widgetType: string, ecoreUri: string): Promise<void> {
    try {
      const data = await fetch(ecoreUri);
      const dataAsText = await data.text();
      await this.loadModelFromString(widgetType, dataAsText, ecoreUri);
    } catch (error) {
      console.error(`Failed to load Ecore model from ${ecoreUri}:`, error);
      throw error;
    }
  }

  /**
   * Load an Ecore model from a string
   */
  async loadModelFromString(widgetType: string, ecoreContent: string, uri: string = 'model.ecore'): Promise<void> {
    try {
      const resource = this.createLoadedResource(uri, ecoreContent);

      // Extract the package from the resource
      const contents = resource.getContents();
      if (contents.size() > 0) {
        const pkg = contents.get(0) as EPackage;
        this.modelCache.set(widgetType, pkg);
        console.log(`✅ Loaded Ecore model for widget type "${widgetType}" from ${uri}`);
      }
    } catch (error) {
      console.error(`Failed to parse Ecore model for ${widgetType}:`, error);
      throw error;
    }
  }

  /**
   * Register an already loaded EPackage for a widget type
   */
  registerModel(widgetType: string, ecorePackage: EPackage): void {
    this.modelCache.set(widgetType, ecorePackage);
  }

  /**
   * Extract action metadata from an Ecore model
   */
  extractActions(widgetType: string): EcoreActionMetadata[] {
    const pkg = this.modelCache.get(widgetType);
    if (!pkg) {
      console.warn(`No Ecore model registered for widget type "${widgetType}"`);
      return [];
    }

    const actions: EcoreActionMetadata[] = [];

    // Iterate through all classifiers in the package
    const classifiers = pkg.getEClassifiers();
    for (let i = 0; i < classifiers.size(); i++) {
      const classifier = classifiers.get(i);

      // Only process EClass instances that extend WidgetActionInterface
      if (isEClass(classifier)) {
        const eClass = classifier as EClass;

        // Check if this class extends WidgetActionInterface
        const isWidgetActionInterface = this.extendsWidgetActionInterface(eClass);
        if (!isWidgetActionInterface) {
          continue;
        }

        const operations = eClass.getEOperations();

        for (let j = 0; j < operations.length; j++) {
          const operation = operations[j];
          const operationName = operation.getName();

          // Check if operation has WidgetAction annotation
          const widgetActionAnnotation = operation.getEAnnotation(
            'org.eclipse.daanse.board.app.lib.events/WidgetAction'
          );

          if (widgetActionAnnotation) {
            const eventType = this.getAnnotationDetail(widgetActionAnnotation, 'eventType');
            const parameters: EcoreParameterMetadata[] = [];

            // Extract parameters
            const eParameters = operation.getEParameters();
            for (let k = 0; k < eParameters.length; k++) {
              const param = eParameters[k];
              const paramType = param.getEType();
              const tsType = this.mapEcoreTypeToTS(paramType);

              // Check for ActionParameter annotation
              const actionParamAnnotation = param.getEAnnotation(
                'org.eclipse.daanse.board.app.lib.events/ActionParameter'
              );

              // Parameter is optional if:
              // 1. lowerBound is 0, OR
              // 2. ActionParameter annotation has optional=true detail
              const lowerBound = param.getLowerBound();
              let optional = lowerBound === 0;

              if (actionParamAnnotation) {
                const optionalDetail = this.getAnnotationDetail(actionParamAnnotation, 'optional');
                if (optionalDetail === 'true') {
                  optional = true;
                }
              }

              parameters.push({
                name: param.getName() || `arg${k}`,
                type: tsType,
                optional,
                index: k
              });
            }

            actions.push({
              methodName: operationName || `action${j}`,
              eventType: eventType || `${widgetType}.${operationName}`,
              parameters
            });
          }
        }
      }
    }

    console.log(`📝 Extracted ${actions.length} actions from Ecore model for "${widgetType}":`, actions);
    return actions;
  }

  /**
   * Get annotation detail value by key
   */
  private getAnnotationDetail(annotation: EAnnotation, key: string): string | undefined {
    return annotation.getDetails().getByKey(key) || undefined;
  }

  /**
   * Extract payload metadata from an Ecore model by class name
   */
  extractPayloadMetadata(widgetType: string, payloadClassName: string): EcorePayloadMetadata | null {
    const pkg = this.modelCache.get(widgetType);
    if (!pkg) {
      console.warn(`No Ecore model registered for widget type "${widgetType}"`);
      return null;
    }

    // Find the payload class
    const classifiers = pkg.getEClassifiers();
    for (let i = 0; i < classifiers.size(); i++) {
      const classifier = classifiers.get(i);

      if (isEClass(classifier)) {
        const eClass = classifier as EClass;

        if (eClass.getName() === payloadClassName) {
          const properties: EcorePayloadPropertyMetadata[] = [];

          // Extract all structural features (attributes and references)
          const features = eClass.getEAllStructuralFeatures();
          for (let j = 0; j < features.length; j++) {
            const feature = features[j];
            const featureName = feature.getName() as string;
            const featureType = feature.getEType();
            const lowerBound = feature.getLowerBound();
            const upperBound = feature.getUpperBound();

            // Determine TypeScript type
            let tsType = this.mapEcoreTypeToTS(featureType);

            // Check if it's an array (upperBound > 1 or upperBound === -1 means unbounded)
            if (upperBound > 1 || upperBound === -1) {
              tsType += '[]';
            }

            // Property is optional if lowerBound is 0
            const optional = lowerBound === 0;

            properties.push({
              name: featureName,
              type: tsType,
              optional
            });
          }

          return {
            className: payloadClassName,
            properties
          };
        }
      }
    }

    console.warn(`Payload class "${payloadClassName}" not found in Ecore model for "${widgetType}"`);
    return null;
  }

  /**
   * Check if an EClass extends WidgetActionInterface
   */
  private extendsWidgetActionInterface(eClass: EClass): boolean {
    // Check all super types
    const superTypes = eClass.getESuperTypes();
    for (let i = 0; i < superTypes.length; i++) {
      const superType = superTypes[i];
      const superTypeName = superType.getName();
      const superTypeNsURI = superType.getEPackage()?.getNsURI() ?? null;

      // Check if this is WidgetActionInterface from events package
      if (superTypeName === 'WidgetActionInterface' &&
          superTypeNsURI === EVENTS_NS_URI) {
        return true;
      }

      // Recursively check super types
      if (this.extendsWidgetActionInterface(superType)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Map Ecore data types to TypeScript types
   */
  private mapEcoreTypeToTS(eType: EClassifier | null | undefined): string {
    if (!eType) return 'any';

    const name = eType.getName();
    const typeName = name ? name : String(eType);

    const typeMap: Record<string, string> = {
      'EString': 'string',
      'EInt': 'number',
      'EDouble': 'number',
      'EFloat': 'number',
      'EBoolean': 'boolean',
      'EDate': 'Date',
      'EBigInteger': 'number',
      'EBigDecimal': 'number',
      'ELong': 'number',
      'EShort': 'number',
      'EByte': 'number',
      'EChar': 'string',
      'EByteArray': 'Uint8Array',
      'EJavaObject': 'any'
    };

    return typeMap[typeName as string] || (typeName as string);
  }

  /**
   * Clear all cached models
   */
  clear(): void {
    this.modelCache.clear();
  }
}

/** Dienst-ID im Namensraum der ServiceRegistry; `ECORE_METADATA_SERVICE` ist das dazu passende Symbol. */
export const ECORE_METADATA_SERVICE_ID = 'EcoreMetadataService';

export const ECORE_METADATA_SERVICE = Symbol.for(ECORE_METADATA_SERVICE_ID);
