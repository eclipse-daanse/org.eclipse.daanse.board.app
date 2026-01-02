/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import { ref, computed, Ref } from 'vue'
import { useVariableRepository } from './useVariableRepository'

const TYPE = 'VARIABLECOMPLEXSTRINGWRAPPER'

class VariableComplexStringWrapper<T = string> {
  public readonly type: string = TYPE;
  public original: Ref<string> = ref('');

  public value: ReturnType<typeof computed>;

  constructor(initValue: string = '') {
    const { calculateValue,wrapParameters } = useVariableRepository();
    this.original.value = initValue;

    this.value =
    wrapParameters({
      value:computed({get:()=>this.original.value,set:(val)=>this.original.value = val}),
    }).value
    // value wird aus _original berechnet
    /*this.value = computed({
      get: () => {
        return calculateValue(this.original.value);
      },
      set: (newVal: string) => {
        // nur _original wird verändert
        this.original.value = newVal;
      }
    });*/
  }
}

export { VariableComplexStringWrapper, TYPE as VARIABLECOMPLEXSTRINGWRAPPER }
