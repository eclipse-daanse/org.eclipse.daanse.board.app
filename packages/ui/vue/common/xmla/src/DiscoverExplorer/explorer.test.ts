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
import { describe, expect, it } from 'vitest'
import { dataTypeName, isMeasuresDimension, restrictionNames, rowLabel, scopesOf } from './explorer'
import {
  entryGroupLabel,
  groupFunctions,
  groupLabel,
  insertionOf,
  isDotFunction,
  parametersOf,
  representativeOf,
  returnTypeOf,
  signatureOf,
} from '../Functions/functions'

describe('the server explorer', () => {
  /* DISCOVER_SCHEMA_ROWSETS as the board's client reads it: Restrictions repeat. */
  const rowsets = [
    { SchemaName: 'DBSCHEMA_CATALOGS', Restrictions: { Name: 'CATALOG_NAME' } },
    { SchemaName: 'MDSCHEMA_LEVELS', Restrictions: [{ Name: 'CATALOG_NAME' }, { Name: 'CUBE_NAME' }] },
    { SchemaName: 'DISCOVER_KEYWORDS' },
    { SchemaName: 'DBSCHEMA_TABLES', Restrictions: [{ Name: 'TABLE_CATALOG' }] },
  ]

  it('keeps every rowset\'s restrictions for the tree to show', () => {
    const scopes = scopesOf(rowsets)
    expect(scopes.restrictions.get('MDSCHEMA_LEVELS')).toEqual(['CATALOG_NAME', 'CUBE_NAME'])
    expect(scopes.restrictions.get('DISCOVER_KEYWORDS')).toEqual([])
  })

  it('names a column\'s OLE DB type', () => {
    expect(dataTypeName('130')).toBe('VARCHAR')
    expect(dataTypeName(5)).toBe('DOUBLE')
    expect(dataTypeName('999')).toBe('999')
    expect(dataTypeName({})).toBe('')
  })

  it('reads restrictions whether one or many', () => {
    expect(restrictionNames(rowsets[1])).toEqual(['CATALOG_NAME', 'CUBE_NAME'])
    expect(restrictionNames(rowsets[0])).toEqual(['CATALOG_NAME'])
    expect(restrictionNames(rowsets[2])).toEqual([])
  })

  it('puts a rowset restricted by CATALOG_NAME inside the catalogs, the rest at the root', () => {
    const scopes = scopesOf(rowsets)
    expect(scopes.catalogScoped).toEqual(['MDSCHEMA_LEVELS'])
    expect(scopes.global).toEqual(['DBSCHEMA_TABLES', 'DISCOVER_KEYWORDS'])
    expect(scopes.declared.has('DBSCHEMA_CATALOGS')).toBe(true)
  })

  it('knows the measures dimension by its type or its name', () => {
    expect(isMeasuresDimension({ DIMENSION_UNIQUE_NAME: '[Measures]', DIMENSION_TYPE: 2 })).toBe(true)
    expect(isMeasuresDimension({ DIMENSION_UNIQUE_NAME: '[Measures]' })).toBe(true)
    expect(isMeasuresDimension({ DIMENSION_UNIQUE_NAME: '[Time]', DIMENSION_TYPE: '1' })).toBe(false)
  })

  it('names a row by its caption or name', () => {
    expect(rowLabel({ CUBE_NAME: 'Sales', CUBE_CAPTION: 'Sales Cube' })).toBe('Sales Cube')
    expect(rowLabel({ Keyword: 'SELECT' })).toBe('SELECT')
    expect(rowLabel({ X: 'first' })).toBe('first')
  })
})

describe('the functions', () => {
  const rows = [
    { FUNCTION_NAME: 'Filter', PARAMETER_LIST: 'Set, Logical Expression', INTERFACE_NAME: 'Set', DESCRIPTION: 'Filters a set.', PARAMETERINFO: [{ NAME: 'Set', OPTIONAL: 'false' }, { NAME: 'Expr', OPTIONAL: 'true' }] },
    { FUNCTION_NAME: 'Children', OBJECT: '4', INTERFACE_NAME: 'Set' },
    { FUNCTION_NAME: 'Lag', OBJECT: '4', PARAMETER_LIST: 'Numeric Expression' },
    { FUNCTION_NAME: 'FILTER', PARAMETER_LIST: 'Set' },
  ]

  it('groups overloads by name', () => {
    const entries = groupFunctions(rows)
    expect(entries.map(e => e.name)).toEqual(['Children', 'Filter', 'Lag'])
    expect(entries.find(e => e.name === 'Filter')!.overloads).toHaveLength(2)
  })

  it('writes signatures and insertions as MDX does', () => {
    expect(signatureOf(rows[0])).toBe('Filter(Set, Logical Expression)')
    expect(signatureOf(rows[1])).toBe('Member.Children')
    expect(signatureOf(rows[2])).toBe('Member.Lag(Numeric Expression)')
    const [children, filter, lag] = groupFunctions(rows)
    expect(insertionOf(children)).toEqual({ text: '.Children', caret: 9 })
    expect(insertionOf(lag)).toEqual({ text: '.Lag()', caret: 5 })
    expect(insertionOf(filter)).toEqual({ text: 'Filter()', caret: 7 })
  })

  /* As eMondrian answers: no OBJECT, the receiver first in the list, empty cells as objects. */
  const mondrian = [
    { FUNCTION_NAME: 'Members', PARAMETER_LIST: 'Hierarchy', RETURN_TYPE: '12', ORIGIN: '1', INTERFACE_NAME: {} },
    { FUNCTION_NAME: 'Members', PARAMETER_LIST: 'Level', RETURN_TYPE: '12', ORIGIN: '1', INTERFACE_NAME: {} },
    { FUNCTION_NAME: 'Lag', PARAMETER_LIST: 'Member, Numeric Expression', RETURN_TYPE: '12', ORIGIN: '1', INTERFACE_NAME: {} },
    { FUNCTION_NAME: 'Crossjoin', PARAMETER_LIST: '(none)', RETURN_TYPE: '1', ORIGIN: '1', INTERFACE_NAME: {} },
  ]

  it('reads eMondrian\'s rows: dot functions by name, no "(none)", no [object Object]', () => {
    expect(signatureOf(mondrian[0])).toBe('Hierarchy.Members')
    expect(signatureOf(mondrian[2])).toBe('Member.Lag(Numeric Expression)')
    expect(signatureOf(mondrian[3])).toBe('Crossjoin(…)')
    const [crossjoin, lag, members] = groupFunctions(mondrian)
    expect(insertionOf(members).text).toBe('.Members')
    expect(insertionOf(lag).text).toBe('.Lag()')
    expect(insertionOf(crossjoin).text).toBe('Crossjoin()')
    expect(groupLabel(mondrian[0], 'INTERFACE_NAME')).toBe('')
    expect(groupLabel(mondrian[0], 'ORIGIN')).toBe('MSOLAP')
  })

  it('writes an overload taking a String as a call, not as a dot on a string', () => {
    const members = [
      { FUNCTION_NAME: 'Members', PARAMETER_LIST: 'String' },
      { FUNCTION_NAME: 'Members', PARAMETER_LIST: 'Hierarchy' },
    ]
    expect(signatureOf(members[0])).toBe('Members(String)')
    expect(isDotFunction(members[0])).toBe(false)
    const [entry] = groupFunctions(members)
    expect(signatureOf(representativeOf(entry!))).toBe('Hierarchy.Members')
    expect(entryGroupLabel(entry!, 'KIND')).toBe('dot')
    expect(insertionOf(entry!).text).toBe('.Members')
    const [byString] = groupFunctions([members[0]])
    expect(entryGroupLabel(byString!, 'KIND')).toBe('call')
    expect(insertionOf(byString!).text).toBe('Members()')
  })

  it('does not write "()" where the server does not say what a function takes', () => {
    expect(signatureOf({ FUNCTION_NAME: 'Order', PARAMETER_LIST: '(none)' })).toBe('Order(…)')
    expect(signatureOf({ FUNCTION_NAME: 'PeriodsToDate', PARAMETER_LIST: '' })).toBe('PeriodsToDate(…)')
    expect(signatureOf({ FUNCTION_NAME: 'Order', PARAMETERINFO: [{ NAME: 'Set' }, { NAME: 'Numeric' }] })).toBe('Order(Set, Numeric)')
    // A dot function with nothing stated has no receiver to show either.
    expect(signatureOf({ FUNCTION_NAME: 'Properties', PARAMETER_LIST: '(none)' })).toBe('….Properties(…)')
    const [properties] = groupFunctions([
      { FUNCTION_NAME: 'Properties', PARAMETER_LIST: '(none)' },
      { FUNCTION_NAME: 'Properties', PARAMETER_LIST: 'Member, String' },
    ])
    expect(signatureOf(representativeOf(properties!))).toBe('Member.Properties(String)')
    expect(insertionOf(properties!)).toEqual({ text: '.Properties()', caret: 12 })
  })

  it('names the return type', () => {
    expect(returnTypeOf(mondrian[0])).toBe('Variant (12)')
    expect(returnTypeOf({ RETURN_TYPE: '99' })).toBe('99')
    expect(returnTypeOf({ RETURN_TYPE: {} })).toBe('')
  })

  it('reads the parameters with their flags', () => {
    expect(parametersOf(rows[0]).map(p => [p.name, p.optional])).toEqual([
      ['Set', false],
      ['Expr', true],
    ])
  })
})
