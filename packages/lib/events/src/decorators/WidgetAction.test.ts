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

import 'reflect-metadata'
import { describe, expect, it } from 'vitest'
import { ActionParameter, WidgetAction, getWidgetActions } from './WidgetAction'

/*
 * What a bundle holds: the method's parameters renamed, the types gone.
 * Built with `new Function` so no compiler or transform can restore them.
 */
// eslint-disable-next-line @typescript-eslint/no-implied-eval
const minified = (arity: number) => new Function(...['e', 't', 'n'].slice(0, arity), 'return e') as (...args: unknown[]) => unknown

/** Applies the decorator the way the TypeScript emit does, onto a method whose source is `minified`. */
function decorate(target: object, key: string, fn: (...args: unknown[]) => unknown, decorator: MethodDecorator) {
  Object.defineProperty(target, key, { value: fn, writable: true, configurable: true })
  const descriptor = Object.getOwnPropertyDescriptor(target, key)!
  decorator(target, key, descriptor)
}

describe('@WidgetAction parameters (#1223)', () => {
  it('keeps the declared names and types whatever the source text says', () => {
    class Gauge {}
    decorate(Gauge.prototype, 'setValue', minified(1), WidgetAction({
      eventType: 'gauge.setValue',
      parameters: [{ name: 'value', type: 'number', label: 'gauge:Action.value' }],
    }) as MethodDecorator)

    expect(String((Gauge.prototype as any).setValue)).toContain('(e')
    expect(getWidgetActions(Gauge)).toEqual([{
      methodName: 'setValue',
      eventType: 'gauge.setValue',
      parameters: [{ name: 'value', type: 'number', label: 'gauge:Action.value' }],
    }])
  })

  it('keeps the declared order, which is the argIndex a stored rule maps to', () => {
    class Table {}
    decorate(Table.prototype, 'highlightCell', minified(3), WidgetAction({
      eventType: 'dataTable.highlightCell',
      parameters: [
        { name: 'row', type: 'any' },
        { name: 'column', type: 'any' },
        { name: 'value', type: 'any', optional: true },
      ],
    }) as MethodDecorator)

    const [action] = getWidgetActions(Table)
    expect(action.parameters.map((p, index) => [index, p.name])).toEqual([[0, 'row'], [1, 'column'], [2, 'value']])
  })

  it('names undeclared parameters arg0... by arity, not after the minified source', () => {
    class Undeclared {}
    decorate(Undeclared.prototype, 'seek', minified(2), WidgetAction({ eventType: 'x.seek' }) as MethodDecorator)

    expect(getWidgetActions(Undeclared)[0].parameters).toEqual([
      { name: 'arg0', type: 'any' },
      { name: 'arg1', type: 'any' },
    ])
  })

  it('lets @ActionParameter name a parameter, and does not read the source either', () => {
    class Composer {}
    decorate(Composer.prototype, 'switchThing', minified(2), WidgetAction({ eventType: 'x.switch' }) as MethodDecorator)
    ActionParameter({ name: 'thingId', type: 'string', label: 'x:Action.thingId' })(Composer.prototype, 'switchThing', 0)
    ActionParameter()(Composer.prototype, 'switchThing', 1)

    expect(getWidgetActions(Composer)[0].parameters).toEqual([
      { name: 'thingId', type: 'string', label: 'x:Action.thingId' },
      { name: 'arg1', type: 'any' },
    ])
  })
})
