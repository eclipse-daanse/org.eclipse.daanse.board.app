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

/**
 * One parameter of a widget action, as the rule dialog shows it.
 *
 * Declared where the action is written, because nothing at runtime knows it:
 * TypeScript erases the types, and a minified bundle renames the parameters
 * (#1223). The position in the list is the argument's index - the `argIndex`
 * a stored rule maps its payload to - so the list follows the signature.
 */
/**
 * What a parameter stands for, beyond its type - what the dialog offers
 * for it. 'variable': the name of a global variable, chosen from the ones
 * there are or typed for one that is not there yet (#1237).
 */
export type ActionParameterKind = 'variable';

export interface WidgetActionParameter {
  /** The parameter's name in the signature; also what a missing label falls back to. */
  name: string;
  /** What the dialog parses a typed-in value as: 'number', 'boolean', anything else is kept as text. */
  type: string;
  /** A language pack key, `namespace:Key`, for the text the dialog shows. */
  label?: string;
  optional?: boolean;
  kind?: ActionParameterKind;
}

export interface WidgetActionMetadata {
  eventType: string;
  /** The action's parameters in signature order. Undeclared, they show as arg0, arg1, ... */
  parameters?: WidgetActionParameter[];
}

export interface ActionParameterMetadata {
  index: number;
  name?: string;
  type?: string;
  label?: string;
  optional?: boolean;
  kind?: ActionParameterKind;
}

/** The honest name of a parameter nobody declared. */
function undeclaredParameter(index: number): WidgetActionParameter {
  return { name: `arg${index}`, type: 'any' };
}

/**
 * Decorator for widget action methods.
 * Marks a method as a widget action that can be invoked by the EventActionsRegistry.
 *
 * Parameters are taken from `metadata.parameters` only - never from the
 * method's source text, which a minified build has renamed.
 *
 * @param metadata - Metadata for the widget action
 */
export function WidgetAction(metadata: WidgetActionMetadata) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const existingMetadata = Reflect.getMetadata(WIDGET_ACTION_METADATA_KEY, target.constructor) || [];

    /*
     * The arity survives minification where the names do not, so an action
     * without declared parameters still offers one field per argument.
     */
    const arity = typeof descriptor?.value === 'function' ? descriptor.value.length : 0;

    Reflect.defineMetadata(
      WIDGET_ACTION_METADATA_KEY,
      [
        ...existingMetadata,
        {
          methodName: propertyKey,
          ...metadata,
          parameters: metadata.parameters?.map(p => ({ ...p })),
          arity
        }
      ],
      target.constructor
    );

    return descriptor;
  };
}

/**
 * Parameter decorator for widget action parameters.
 *
 * Name and type are what `metadata` says; without them the parameter is
 * `argN`, its type taken from `design:paramtypes` where the compiler emitted
 * them, `any` otherwise.
 *
 * @param metadata - Optional parameter metadata
 */
export function ActionParameter(metadata?: Partial<Omit<ActionParameterMetadata, 'index'>>) {
  return function (target: any, propertyKey: string | symbol, parameterIndex: number) {
    const key = String(propertyKey);
    const existingParams = Reflect.getMetadata(ACTION_PARAMETER_METADATA_KEY, target, key) || [];

    const paramTypes = Reflect.getMetadata('design:paramtypes', target, key) || [];
    const paramType = paramTypes[parameterIndex];

    let finalType = metadata?.type;
    if (!finalType && paramType) {
      // Map constructor names to TypeScript types
      const typeMap: Record<string, string> = {
        'String': 'string',
        'Number': 'number',
        'Boolean': 'boolean',
        'Array': 'Array<any>',
        'Object': 'object'
      };
      finalType = typeMap[paramType.name];
    }

    const name = metadata?.name || `arg${parameterIndex}`;
    existingParams.push({
      index: parameterIndex,
      name,
      type: finalType || 'any',
      label: metadata?.label,
      optional: metadata?.optional,
      kind: metadata?.kind
    });

    Reflect.defineMetadata(ACTION_PARAMETER_METADATA_KEY, existingParams, target, key);

    log('ActionParameter: %s[%d] = %s: %s%s', key, parameterIndex, name, finalType || 'any',
        metadata?.optional ? '?' : '');
  };
}

/**
 * Get all widget actions registered on a class.
 *
 * Every action comes back with its parameters as a list: declared on
 * `@WidgetAction`, else from `@ActionParameter`, else `arg0`... for the
 * method's arity.
 */
export function getWidgetActions(target: any): Array<WidgetActionMetadata & { methodName: string; parameters: WidgetActionParameter[] }> {
  const constructor = typeof target === 'function' ? target : target.constructor;
  log('getWidgetActions for %s', constructor?.name);

  const stored = Reflect.getMetadata(WIDGET_ACTION_METADATA_KEY, constructor) || [];

  const actions = stored.map((stored: any) => {
    const { arity, ...action } = stored;
    if (action.parameters) {
      return { ...action, parameters: action.parameters.map((p: WidgetActionParameter) => ({ ...p })) };
    }

    const paramMetadata: ActionParameterMetadata[] =
      Reflect.getMetadata(ACTION_PARAMETER_METADATA_KEY, constructor.prototype, action.methodName) || [];
    const count = Math.max(arity ?? 0, ...paramMetadata.map(p => p.index + 1));
    const parameters: WidgetActionParameter[] = [];
    for (let index = 0; index < count; index++) {
      const declared = paramMetadata.find(p => p.index === index);
      parameters.push(declared
        ? {
            name: declared.name || `arg${index}`,
            type: declared.type || 'any',
            ...(declared.label ? { label: declared.label } : {}),
            ...(declared.optional ? { optional: true } : {}),
            ...(declared.kind ? { kind: declared.kind } : {})
          }
        : undeclaredParameter(index));
    }
    return { ...action, parameters };
  });

  log('  Actions found: %o', actions);

  return actions;
}

/** A parameter as one line of text, `name?: type`, for log output. */
export function formatActionParameter(p: WidgetActionParameter): string {
  return `${p.name}${p.optional ? '?' : ''}: ${p.type}`;
}

export { WIDGET_ACTION_METADATA_KEY, ACTION_PARAMETER_METADATA_KEY };
