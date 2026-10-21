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
 * What a stored board says a wrapper was.
 *
 * This is the only place a saved state is turned back into wrappers, so it
 * decides whether boards written by an older version still open. The shape
 * changed when VariableWrapper became an EObject: the value used to be
 * written as the private field `_value` and the bound variable as a whole
 * nested `reference` object, and is now `value` and the name in `variable`.
 * Both have to load, for as long as boards written by either exist.
 */

import { describe, it, expect } from 'vitest'
import { VariableWrapperFactory } from './Factory'
import { VARIABLEWRAPPER } from 'org.eclipse.daanse.board.app.lib.variables'

/** Enough of a Variable for setTo: a name, a value and somewhere to subscribe. */
function variable(name: string, value: unknown) {
  return { name, value, subscribe() {}, unsubscribe() {} }
}

function factoryKnowing(...variables: ReturnType<typeof variable>[]) {
  const repo = {
    getVariable: (name: string) => variables.find((v) => v.name === name),
  }
  return new VariableWrapperFactory(repo as never)
}

/** A board as it is stored: settings sitting under a widget's config. */
function board(wrapper: Record<string, unknown>) {
  return { widgets: [{ config: { fontSize: wrapper } }] }
}

const restoredFontSize = (json: unknown) =>
  (json as { widgets: { config: { fontSize: { value: unknown; variable?: string } } }[] })
    .widgets[0].config.fontSize

/*
 * A plain stored object carries a `value` of its own, so reading one proves
 * nothing on its own - it has to be a wrapper, which is what setTo marks.
 */
const isWrapper = (held: unknown) =>
  typeof (held as { setTo?: unknown } | undefined)?.setTo === 'function'

describe('restoring wrappers from a stored board', () => {
  it('reads a state written before the wrapper was an EObject', () => {
    const json = board({ type: VARIABLEWRAPPER, _value: 22, isSet: false, variable: null })

    const restored = restoredFontSize(factoryKnowing().initilazeVariableWrappers(json))

    expect(isWrapper(restored)).toBe(true)
    expect(restored.value).toBe(22)
  })

  it('reads a state written after it', () => {
    const json = board({ type: VARIABLEWRAPPER, value: 22, isSet: false })

    const restored = restoredFontSize(factoryKnowing().initilazeVariableWrappers(json))

    expect(isWrapper(restored)).toBe(true)
    expect(restored.value).toBe(22)
  })

  /*
   * The old shape stored the entire live Variable under `reference`, the new
   * one only its name - which is what the model says the field is for, and
   * what the old shape also happened to carry alongside it.
   */
  it('rebinds a variable named the old way, through the nested reference', () => {
    const json = board({
      type: VARIABLEWRAPPER,
      _value: 5,
      isSet: true,
      variable: 'zoom',
      reference: { name: 'zoom' },
    })

    const restored = restoredFontSize(
      factoryKnowing(variable('zoom', 9)).initilazeVariableWrappers(json),
    )

    expect(restored.value).toBe(9)
    expect(restored.variable).toBe('zoom')
  })

  it('rebinds a variable named the new way, by name alone', () => {
    const json = board({ type: VARIABLEWRAPPER, value: 5, isSet: true, variable: 'zoom' })

    const restored = restoredFontSize(
      factoryKnowing(variable('zoom', 9)).initilazeVariableWrappers(json),
    )

    expect(restored.value).toBe(9)
    expect(restored.variable).toBe('zoom')
  })

  it('leaves a wrapper that never held anything alone', () => {
    const json = board({ type: VARIABLEWRAPPER, isSet: false })

    const restored = restoredFontSize(factoryKnowing().initilazeVariableWrappers(json))

    // Still the plain stored object, not a wrapper built around undefined.
    expect(restored).toEqual({ type: VARIABLEWRAPPER, isSet: false })
  })
})
