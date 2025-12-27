/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import 'reflect-metadata';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';

const log = loggerFactory.createLogger('daanse:events:decorator');
const WIDGET_ACTION_METADATA_KEY = Symbol.for('daanse:widgetAction');
const ACTION_PARAMETER_METADATA_KEY = Symbol.for('daanse:actionParameter');

export interface WidgetActionMetadata {
  eventType: string;
  parameters?: string[];
}

export interface ActionParameterMetadata {
  index: number;
  name?: string;
  type?: string;
  optional?: boolean;
}

/**
 * Decorator for widget action methods.
 * Marks a method as a widget action that can be invoked by the EventActionsRegistry.
 *
 * @param metadata - Metadata for the widget action
 */
export function WidgetAction(metadata: WidgetActionMetadata) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Store metadata on the target class
    const existingMetadata = Reflect.getMetadata(WIDGET_ACTION_METADATA_KEY, target.constructor) || [];

    // Get parameter types from TypeScript metadata
    const paramTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey) || [];

    // Extract parameter names from function signature
    let parameters = metadata.parameters;
    if (!parameters && descriptor.value) {
      const funcStr = descriptor.value.toString();
      const paramMatch = funcStr.match(/\(([^)]*)\)/);
      if (paramMatch && paramMatch[1].trim()) {
        const paramNames = paramMatch[1].split(',').map((p: string) => p.trim());
        parameters = paramNames.map((paramName: string, index: number) => {
          // Extract name and type if available
          const nameMatch = paramName.match(/^(\w+)(\?)?:\s*(\w+)/);
          if (nameMatch) {
            const [, name, optional, type] = nameMatch;
            return `${name}${optional || ''}: ${type}`;
          }
          // Fallback: use paramTypes if available
          const typeName = paramTypes[index]?.name || 'any';
          return `${paramName}: ${typeName}`;
        });
      }
    }

    Reflect.defineMetadata(
      WIDGET_ACTION_METADATA_KEY,
      [
        ...existingMetadata,
        {
          methodName: propertyKey,
          ...metadata,
          parameters
        }
      ],
      target.constructor
    );

    return descriptor;
  };
}

/**
 * Parameter decorator for widget action parameters.
 * Automatically extracts parameter name and type from TypeScript metadata.
 *
 * @param metadata - Optional parameter metadata (can override name/type)
 */
export function ActionParameter(metadata?: Partial<Omit<ActionParameterMetadata, 'index'>>) {
  return function (target: any, propertyKey: string | symbol, parameterIndex: number) {
    const key = String(propertyKey);
    const existingParams = Reflect.getMetadata(ACTION_PARAMETER_METADATA_KEY, target, key) || [];

    // Get parameter types from design:paramtypes
    const paramTypes = Reflect.getMetadata('design:paramtypes', target, key) || [];
    const paramType = paramTypes[parameterIndex];

    // Extract parameter name from the original source before minification
    let paramName = metadata?.name;
    let paramTypeStr = metadata?.type;
    let isOptional = metadata?.optional;

    if (!paramName || !paramTypeStr) {
      // Get the function from the target's prototype
      const func = Object.getOwnPropertyDescriptor(target, key)?.value || target[key];
      if (func) {
        const fnStr = func.toString().replace(/\s+/g, ' ');
        const paramMatch = fnStr.match(/^[^(]*\(([^)]*)\)/);

        if (paramMatch && paramMatch[1].trim()) {
          const params = paramMatch[1]
            .split(',')
            .map((p: string) => p.replace(/\/\*.*\*\//, '').trim())
            .filter((p: string) => p.length > 0 && !p.startsWith('@'));

          const param = params[parameterIndex];
          if (param) {
            // Match: name, optional(?), type (including complex types like Array<T>)
            // Examples: "thingId: string", "zoom?: number", "items: Array<string>"
            const match = param.match(/^(\w+)(\?)?(?::\s*(.+?))?(?:\s*=|$)/);
            if (match) {
              if (!paramName) paramName = match[1];
              if (!isOptional) isOptional = !!match[2];
              if (!paramTypeStr && match[3]) paramTypeStr = match[3].trim();
            }
          }
        }
      }
    }

    // Convert constructor name to lowercase type name
    let finalType = paramTypeStr;
    if (!finalType && paramType) {
      // Map constructor names to TypeScript types
      const typeMap: Record<string, string> = {
        'String': 'string',
        'Number': 'number',
        'Boolean': 'boolean',
        'Array': 'Array<any>',
        'Object': 'object'
      };
      finalType = typeMap[paramType.name] || paramType.name || 'any';
    }

    existingParams.push({
      index: parameterIndex,
      name: paramName || `arg${parameterIndex}`,
      type: finalType || 'any',
      optional: isOptional
    });

    Reflect.defineMetadata(ACTION_PARAMETER_METADATA_KEY, existingParams, target, key);

    log('ActionParameter: %s[%d] = %s: %s%s', key, parameterIndex,
        paramName || `arg${parameterIndex}`,
        paramTypeStr || paramType?.name || 'any',
        isOptional ? '?' : '');
  };
}

/**
 * Get all widget actions registered on a class
 */
export function getWidgetActions(target: any): Array<WidgetActionMetadata & { methodName: string }> {
  const constructor = typeof target === 'function' ? target : target.constructor;
  log('getWidgetActions called with target: %o', target);
  log('  constructor: %o', constructor);
  log('  constructor.name: %s', constructor?.name);

  // Check all metadata keys
  const allKeys = Reflect.getMetadataKeys(constructor);
  log('  All metadata keys: %o', allKeys);

  let actions = Reflect.getMetadata(WIDGET_ACTION_METADATA_KEY, constructor) || [];

  // Enrich actions with parameter metadata from @ActionParameter decorators
  actions = actions.map((action: any) => {
    const paramMetadata = Reflect.getMetadata(ACTION_PARAMETER_METADATA_KEY, constructor.prototype, action.methodName) || [];

    if (paramMetadata.length > 0 && !action.parameters) {
      // Sort by index and format as strings
      const sortedParams = [...paramMetadata].sort((a, b) => a.index - b.index);
      action.parameters = sortedParams.map((p: ActionParameterMetadata) =>
        `${p.name}${p.optional ? '?' : ''}: ${p.type}`
      );
    }

    return action;
  });

  log('  Actions found: %o', actions);

  return actions;
}

export { WIDGET_ACTION_METADATA_KEY, ACTION_PARAMETER_METADATA_KEY };
