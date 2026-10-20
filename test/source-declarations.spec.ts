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

/*
 * What check-model-conformance.mjs reads out of a source file decides whether
 * a pull request is blocked, so it is worth more than a glance at the output.
 * Above all: what a declaration extends is what separates a subclass, which
 * is fine, from a replacement of a generated class, which is the defect the
 * check exists to find.
 */

import { describe, it, expect } from 'vitest'
import { declarationsIn } from '../scripts/source-declarations.mjs'

describe('declarationsIn', () => {
  it('finds classes and interfaces, exported or not', () => {
    const found = declarationsIn(`
      class Plain {}
      export class Exported {}
      export abstract class Abstract {}
      interface Shape {}
      export interface Exposed {}
    `)

    expect(found.map(d => `${d.kind} ${d.name}`)).toEqual([
      'class Plain',
      'class Exported',
      'class Abstract',
      'interface Shape',
      'interface Exposed',
    ])
  })

  it('reads what a declaration extends, and nothing when it extends nothing', () => {
    const found = declarationsIn(`
      export class VariableWrapperImpl extends BasicEObject implements VariableWrapper {}
      class VariableWrapper<T> {}
    `)

    expect(found[0].extends).toBe('BasicEObject')
    expect(found[1].extends).toBeUndefined()
  })

  it('is not fooled by implements on its own', () => {
    const [only] = declarationsIn('class Variable implements Serializable {}')

    expect(only.extends).toBeUndefined()
  })

  it('follows a heritage clause broken across lines', () => {
    const [only] = declarationsIn(`
      export class TextSettingsImpl
        extends BasicEObject
        implements TextSettings
      {}
    `)

    expect(only.extends).toBe('BasicEObject')
  })

  /*
   * The regression this replaced. What a declaration extended used to be
   * looked up afterwards, with a pattern built from the name just read, which
   * searched the whole file and returned the first hit - so two declarations
   * sharing a name both got the heritage of whichever came first. Reading the
   * clause in the same match keeps each answer with its own declaration, and
   * keeps a checked-in identifier out of the checker's pattern.
   */
  it('keeps each declaration with its own heritage when a name repeats', () => {
    const found = declarationsIn(`
      class Condition {}
      class Condition extends BaseCondition {}
    `)

    expect(found.map(d => d.extends)).toEqual([undefined, 'BaseCondition'])
  })
})
