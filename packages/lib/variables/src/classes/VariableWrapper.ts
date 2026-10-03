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
        console.log('change value')
        if(this.reference) {

          this._value = (this.reference).value;
    }});
    this._value = this.reference.value as T;
    this.variable = this.reference.name;
    this.isSet = true;
  }

  get value(){
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
  }
}
export {VariableWrapper, TYPE as VARIABLEWRAPPER}
