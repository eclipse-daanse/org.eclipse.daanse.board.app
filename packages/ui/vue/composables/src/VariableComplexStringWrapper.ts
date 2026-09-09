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
    const substituted = this.substitute(this._value || '');
    if (substituted !== null) this._computedValue = substituted;
  }

  /**
   * The text with the variables it names filled in.
   *
   * Falls back to the text as written when the variables cannot be reached.
   * Resolving them goes through inject, which only answers inside a
   * component - and this is read from outside one more often than it looks:
   * Vue reads a property before writing it, so assigning to this threw from
   * inside the reactivity and the new text was never stored at all.
   *
   * Showing the text unsubstituted is the right failure: it is what was
   * written, and it is what gets stored either way. The last substitution
   * is not reused for it - that one was made from an older text, and
   * handing it back would show the previous value as if it were current.
   */
  get value() {
    const substituted = this.substitute(this._value || '', this.updateFn.bind(this));
    if (substituted === null) return this._value ?? '';
    this._computedValue = substituted;
    return substituted;
  }

  /** The substituted text, or null when the variables are out of reach. */
  private substitute(text: string, subscription?: () => void): string | null {
    try {
      const { calculateValue } = useVariableRepository();
      return subscription ? calculateValue(text, subscription) : calculateValue(text);
    } catch {
      return null;
    }
  }

  set value(newValue: string) {
    this._value = newValue;
  }
}

export { VariableComplexStringWrapper, TYPE as VARIABLECOMPLEXSTRINGWRAPPER }
