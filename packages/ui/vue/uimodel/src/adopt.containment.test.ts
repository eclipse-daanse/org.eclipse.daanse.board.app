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
 * ********************************************************************/

import { describe, it, expect } from 'vitest'
import type { EObject } from '@emfts/core'
import { adopt, asModel, isModelled } from './adopt'
import { ContainmentfixtureFactory } from './gen/ContainmentfixtureFactory'
import { ContainmentfixturePackage } from './gen/ContainmentfixturePackage'
import type { FixtureChild } from './gen/FixtureChild'
import type { FixtureSettings } from './gen/FixtureSettings'

/*
 * Settings that hold other modelled objects, and what becomes of them on
 * the way back from storage.
 *
 * Two widgets keep their settings this way: the map holds its services as
 * a contained list (widget/map/model/model.ecore:203-204) and the timeline
 * its relative-time configuration as a contained object
 * (widget/timeline/model/model.ecore:55-56). The fixture model beside this
 * package has one of each, for the same reason.
 *
 * Built on the real thing rather than on doubles: what has to work is the
 * walk from an instance through eClass() to a containment reference, its
 * target type, and the factory that makes one. A hand-built EPackage would
 * be a copy of what the generator emits, and the test would prove the copy.
 */

/*
 * Built on load, as every generated package is: until it exists the class
 * literals are null and an instance cannot say what it is.
 */
void ContainmentfixturePackage.eINSTANCE

const factory = ContainmentfixtureFactory.eINSTANCE

/** Settings as a widget would build them, before anything is stored. */
function built(): FixtureSettings {
  const settings = factory.createFixtureSettings()
  settings.title = 'A board'

  const first = factory.createFixtureChild()
  first.label = 'first'
  const second = factory.createFixtureChild()
  second.label = 'second'
  settings.children.push(first, second)

  const only = factory.createFixtureChild()
  only.label = 'the only one'
  settings.only = only

  return settings
}

/**
 * The same settings after a round through a stored board.
 *
 * The real path, not an imitation of it: a workspace is written with
 * JSON.stringify and read with JSON.parse, and what that does to a
 * generated instance - writing the _-prefixed fields behind the setters -
 * is the whole reason adopt() exists.
 */
function stored(): unknown {
  return JSON.parse(JSON.stringify(built()))
}

/** The settings as they come back, adopted into a fresh instance. */
function restored(): FixtureSettings {
  return adopt(factory.createFixtureSettings() as EObject, stored()) as unknown as FixtureSettings
}

describe('adopting a stored settings object', () => {
  it('puts a plain value back through its setter', () => {
    expect(restored().title).toBe('A board')
  })

  it('leaves an already modelled object alone', () => {
    const made = factory.createFixtureSettings()

    expect(asModel(made as EObject, () => factory.createFixtureSettings() as EObject)).toBe(made)
  })

  /*
   * A single contained object does arrive - it has a setter - and its
   * values can be read off it, because the names it was serialised under
   * are the model's own. It is simply not an object any more.
   */
  it('carries the values of a single contained object across', () => {
    expect((restored().only as unknown as { label?: string })?.label).toBe('the only one')
  })

  /*
   * What a plain object cannot do: say what it is. Anything that asks a
   * contained object for its class, notifies through it, or walks it as
   * a model needs this - and until #1195 it held only until the board
   * was saved and reopened.
   */
  it('rebuilds a single contained object as a modelled one', () => {
    expect(isModelled(restored().only)).toBe(true)
  })

  /*
   * The one that lost data rather than shape. A many-valued feature has
   * no setter - EMF gives it a getter that builds the list on demand -
   * so the assignment had nothing to write to, and the catch around it
   * took that for a read-only feature. A map saved with three services
   * reopened with none, and nothing anywhere said so (#1195).
   */
  it('keeps the objects in a contained list, and rebuilds them', () => {
    const children = restored().children

    expect(children).toHaveLength(2)
    for (const child of children) {
      expect(isModelled(child)).toBe(true)
    }
  })

  /* Adopted in turn, so depth costs nothing. */
  it('rebuilds what a contained object contains', () => {
    const outer = factory.createFixtureSettings()
    const inner = factory.createFixtureChild()
    inner.label = 'inner'
    outer.only = inner

    const back = adopt(
      factory.createFixtureSettings() as EObject,
      JSON.parse(JSON.stringify(outer)),
    ) as unknown as FixtureSettings

    expect(isModelled(back.only)).toBe(true)
    expect(back.only?.label).toBe('inner')
  })

  /*
   * A board written by a later version may name a class this one does not
   * have. Keeping the plain value leaves the widget something to read;
   * dropping it would lose the setting outright.
   */
  it('keeps a stored value whose class it cannot reach', () => {
    const settings = adopt(factory.createFixtureSettings() as EObject, {
      title: 'A board',
      somethingNewer: { kind: 'from a later version' },
    }) as unknown as FixtureSettings & { somethingNewer?: { kind: string } }

    expect(settings.title).toBe('A board')
    expect(settings.somethingNewer?.kind).toBe('from a later version')
  })
})
