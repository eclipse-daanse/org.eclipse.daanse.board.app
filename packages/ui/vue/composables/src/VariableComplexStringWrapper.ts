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

import { shallowRef, type Ref } from 'vue'
import { useVariableRepository } from './useVariableRepository'

const TYPE = 'VARIABLECOMPLEXSTRINGWRAPPER'

class VariableComplexStringWrapper<T = string> {
  public readonly type: string = TYPE;

  private _value: string | undefined = undefined;
  private _computedValue: string | null = null;

  constructor(initValue = '') {
    this._value = initValue;
    /*
     * What a read subscribes to and a write notifies.
     *
     * _value is a plain field on a plain class: reading it inside a
     * computed tracks nothing, so typing in the settings changed the
     * stored text and nothing re-rendered. The widget only caught up when
     * it was mounted again, which is what reopening the settings does.
     *
     * Defined rather than declared, and not enumerable: a wrapper is
     * written out as its own fields, and a ref among them would land in
     * the stored board.
     */
    Object.defineProperty(this, '_tick', {
      value: shallowRef(0),
      enumerable: false,
      writable: false,
    });
  }

  /** @internal The dependency behind value - see the constructor. */
  private get tick(): Ref<number> {
    return (this as unknown as { _tick: Ref<number> })._tick;
  }

  get original() {
    void this.tick.value;
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
    void this.tick.value;
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
    if (newValue === this._value) return;
    this._value = newValue;
    this.tick.value++;
  }
}

export { VariableComplexStringWrapper, TYPE as VARIABLECOMPLEXSTRINGWRAPPER }
