/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { Variable } from './Variable'
import { VariableWrapperImpl } from '../gen/VariableWrapperImpl'
import type { EObject } from '@emfts/core'

const TYPE = 'VARIABLEWRAPPER'

/**
 * Someone who wants to know when a wrapper is read.
 *
 * A widget reads a setting inside a computed - `config.fontSize.value` - and
 * Vue only re-renders what it saw being read. EMF announces changes, but it
 * has nothing to say about reads, and this package is deliberately free of
 * Vue. So it says when a value is read and leaves the translating to
 * whoever is listening; ui.vue.composables turns that into a dependency and
 * listens to the EMF notification for the other half.
 */
export interface WrapperObserver {
  /** A value was read - whoever is rendering now depends on it. */
  read(wrapper: object): void
}

let observer: WrapperObserver | undefined

/** Installs the observer, or takes it away again with undefined. */
export function observeWrappers(next: WrapperObserver | undefined): void {
  observer = next
}

/**
 * A setting's value, either given directly or taken from a variable.
 *
 * The generated class underneath is the model: it holds value, variable,
 * isSet and type, and notifies on every one of them. What is added here is
 * the part a model cannot state - the live Variable this follows, and that
 * writing a value by hand releases that binding.
 *
 * `reference` is deliberately not a modelled feature. It points at a running
 * object with subscriptions attached; what belongs in a stored board is its
 * name, which `variable` already carries.
 */
class VariableWrapper<T> extends VariableWrapperImpl {
  /** The variable this follows, while it follows one. Never serialised. */
  public reference: Variable | undefined

  constructor(init_value: T | undefined = undefined) {
    super()
    if (init_value !== undefined) {
      super.value = init_value as unknown as EObject
    }
  }

  setTo(e: Variable) {
    this.reference = e
    e.subscribe(() => {
      if (this.reference) {
        super.value = this.reference.value as EObject
      }
    })
    super.value = this.reference.value as EObject
    this.variable = this.reference.name
    this.isSet = true
  }

  /*
   * Typed loosely on purpose. The class carries a <T>, but emfts-codegen
   * does not carry a type parameter into what it generates - both the
   * generated interface and its implementation fix `value` to EObject, so
   * an override typed T is not assignable to the base and the package does
   * not compile. Widening here keeps every call site reading the value it
   * actually holds; narrowing it again is a generator question, filed as
   * emf.ts.codegen generics.
   */
  override get value(): any {
    observer?.read(this)
    return super.value
  }

  // TODO: Memory leak - the subscription in setTo is an anonymous closure
  // and cannot be handed back to unsubscribe.
  override set value(isn: any) {
    this.reference = undefined
    this.isSet = false
    /*
     * The name goes with the binding. Keeping it described a binding that
     * no longer exists, and anything asking "which variable is this on?"
     * got an answer that was no longer true.
     */
    this.variable = undefined as unknown as string
    super.value = isn
  }
}
export { VariableWrapper, TYPE as VARIABLEWRAPPER }
