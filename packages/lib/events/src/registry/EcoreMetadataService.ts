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
  EResourceSet,
  EResourceSetImpl,
  URI,
  EPackage,
  EClass,
  EOperation,
  EParameter,
  EAnnotation,
  EDataType,
  getEcorePackage,
  isEClass
} from 'org.eclipse.daanse.board.app.lib.ecore';
import eventModelContent from '../../model/EventModel.ecore?raw';

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
  private resourceSet: EResourceSet;

  constructor() {
    this.resourceSet = this.createResourceSet();
    this.loadEventsModelSync();
  }

  /**
   * Creates a ResourceSet with registered Ecore package
   */
  private createResourceSet(): EResourceSet {
    const rs = new EResourceSetImpl();
    const ecorePackage = getEcorePackage();
    rs.getPackageRegistry().registerPackage(ecorePackage);
    return rs;
  }

  /**
   * Load the Events model synchronously and register it in the PackageRegistry
   */
  private loadEventsModelSync(): void {
    try {
      const resource = this.resourceSet.createResource(new URI('http://org.eclipse.daanse.board.app.lib.events/EventModel.ecore'));
      // Load synchronously - the ?raw import makes it available as a string
      resource.loadFromString(eventModelContent);

      const contents = resource.eContents();
      if (contents.size() > 0) {
        const eventsPackage = contents.get(0) as EPackage;
        // Register the Events package by its nsURI so it can be resolved
        this.resourceSet.getPackageRegistry().registerPackage(eventsPackage);
        console.log('✅ Loaded and registered Events model package with nsURI:', eventsPackage.nsURI);
      }
    } catch (error) {
      console.error('❌ Failed to load Events model:', error);
    }
  }

  /**
   * Get the ResourceSet instance
   */
  getResourceSet(): EResourceSet {
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
      const resource = this.resourceSet.createResource(new URI(uri));
      await resource.loadFromString(ecoreContent);

      // Extract the package from the resource
      const contents = resource.eContents();
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
    const classifiers = pkg.eClassifiers;
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

        const operations = eClass.eOperations;

        for (let j = 0; j < operations.size(); j++) {
          const operation = operations.get(j);

          // Check if operation has WidgetAction annotation
          const widgetActionAnnotation = this.findAnnotation(
            operation.eAnnotations,
            'org.eclipse.daanse.board.app.lib.events/WidgetAction'
          );

          if (widgetActionAnnotation) {
            const eventType = this.getAnnotationDetail(widgetActionAnnotation, 'eventType');
            const parameters: EcoreParameterMetadata[] = [];

            // Extract parameters
            const eParameters = operation.eParameters;
            for (let k = 0; k < eParameters.size(); k++) {
              const param = eParameters.get(k);
              const paramType = param.eType;
              const tsType = this.mapEcoreTypeToTS(paramType);

              // Check for ActionParameter annotation
              const actionParamAnnotation = this.findAnnotation(
                param.eAnnotations,
                'org.eclipse.daanse.board.app.lib.events/ActionParameter'
              );

              // Parameter is optional if:
              // 1. lowerBound is 0, OR
              // 2. ActionParameter annotation has optional=true detail
              const lowerBound = param.lowerBound;
              let optional = lowerBound === 0;

              if (actionParamAnnotation) {
                const optionalDetail = this.getAnnotationDetail(actionParamAnnotation, 'optional');
                if (optionalDetail === 'true') {
                  optional = true;
                }
              }

              parameters.push({
                name: param.name || `arg${k}`,
                type: tsType,
                optional,
                index: k
              });
            }

            actions.push({
              methodName: operation.name || `action${j}`,
              eventType: eventType || `${widgetType}.${operation.name}`,
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
   * Find an annotation by source
   */
  private findAnnotation(annotations: any, source: string): EAnnotation | undefined {
    for (let i = 0; i < annotations.size(); i++) {
      const ann = annotations.get(i);
      if (ann.source === source) {
        return ann;
      }
    }
    return undefined;
  }

  /**
   * Get annotation detail value by key
   */
  private getAnnotationDetail(annotation: EAnnotation, key: string): string | undefined {
    const details = annotation.details;
    // EMap uses get() method
    const value = details.getValue(key);
    return value || undefined;
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
    const classifiers = pkg.eClassifiers;
    for (let i = 0; i < classifiers.size(); i++) {
      const classifier = classifiers.get(i);

      if (isEClass(classifier)) {
        const eClass = classifier as EClass;

        if (eClass.name === payloadClassName) {
          const properties: EcorePayloadPropertyMetadata[] = [];

          // Extract all structural features (attributes and references)
          const features = eClass.eAllStructuralFeatures;
          for (let j = 0; j < features.size(); j++) {
            const feature = features.get(j);
            const featureName = feature.name;
            const featureType = feature.eType;
            const lowerBound = feature.lowerBound;
            const upperBound = feature.upperBound;

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
    const superTypes = eClass.eSuperTypes;
    for (let i = 0; i < superTypes.size(); i++) {
      const superType = superTypes.get(i);
      const superTypeName = superType.name;
      const superTypeNsURI = superType.ePackage?.nsURI;

      // Check if this is WidgetActionInterface from events package
      if (superTypeName === 'WidgetActionInterface' &&
          superTypeNsURI === 'http://org.eclipse.daanse.board.app.lib.events') {
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
  private mapEcoreTypeToTS(eType: any): string {
    if (!eType) return 'any';

    const typeName = eType.name ? eType.name : String(eType);

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

    return typeMap[typeName] || typeName;
  }

  /**
   * Clear all cached models
   */
  clear(): void {
    this.modelCache.clear();
  }
}

export const ECORE_METADATA_SERVICE = Symbol.for('EcoreMetadataService');
