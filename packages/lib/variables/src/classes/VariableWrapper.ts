/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/


import { Variable } from './Variable'
const TYPE = 'VARIABLEWRAPPER'

/**
 * Someone who wants to know when a wrapper is read or written.
 *
 * A wrapper keeps its value in a plain field, and a widget reads it inside
 * a computed - `config.fontSize.value`. A plain field tracks nothing, so
 * changing a setting changed what was stored and nothing re-rendered; the
 * widget caught up only when it was mounted again.
 *
 * The fix belongs where the value changes, but this package is deliberately
 * free of Vue. So it says what happens and leaves the translating to
 * whoever is listening - ui.vue.composables installs an observer that
 * turns a read into a dependency and a write into a notification.
 */
export interface WrapperObserver {
  /** A value was read - whoever is rendering now depends on it. */
  read(wrapper: object): void
  /** A value changed - whoever read it should look again. */
  written(wrapper: object): void
}

let observer: WrapperObserver | undefined

/** Installs the observer, or takes it away again with undefined. */
export function observeWrappers(next: WrapperObserver | undefined): void {
  observer = next
}

class VariableWrapper<T> {
  public readonly type:string = TYPE;
  private _value: T|undefined =undefined;
  public isSet: boolean = false;
  public reference: Variable|undefined;
  public variable = null as string|null;

  constructor(init_value: T|undefined = undefined) {
    this._value= init_value;
  }

  setTo(e:Variable) {
    this.reference = e;
    e.subscribe(()=>{
        if(this.reference) {
          this._value = (this.reference).value;
          observer?.written(this);
    }});
    this._value = this.reference.value as T;
    this.variable = this.reference.name;
    this.isSet = true;
    observer?.written(this);
  }

  get value(){
    observer?.read(this);
    return this._value as T;
  }

  // TODO: Memory leak
  set value(isn:T){
    //this.reference?.unsubscribe(this.boundOnChange)
    this.reference = undefined;
    this.isSet = false;
    /*
     * The name goes with the binding. Keeping it described a binding that
     * no longer exists, and anything asking "which variable is this on?"
     * got an answer that was no longer true.
     */
    this.variable = null;
    this._value = isn;
    observer?.written(this);
  }
}
export {VariableWrapper, TYPE as VARIABLEWRAPPER}
