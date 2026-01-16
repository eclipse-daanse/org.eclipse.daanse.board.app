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

  private _value: string | undefined = undefined;
  private _computedValue: string | null = null;

  constructor(initValue = '') {
    this._value = initValue;
  }

  get original() {
    return this._value || '';
  }

  updateFn() {
    const { calculateValue } = useVariableRepository();
    this._computedValue = calculateValue(this._value || '');
  }

  get value() {
    const { calculateValue } = useVariableRepository();
    this._computedValue = calculateValue(this._value || '', this.updateFn.bind(this));
    return this._computedValue;
  }

  set value(newValue: string) {
    this._value = newValue;
  }
}

export { VariableComplexStringWrapper, TYPE as VARIABLECOMPLEXSTRINGWRAPPER }
