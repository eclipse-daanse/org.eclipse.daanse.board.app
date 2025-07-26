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

import { type Variable } from './Variable'
import { type TinyEmitter } from 'tiny-emitter'
import { VariableRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { VariableEvents } from '..'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { inject, Factory } from 'inversify'

export class ComputedStoreParameter {
  private innerExpression: string = ''
  private currentSubscriptions: Map<string, () => void> = new Map()
  private refreshCb: () => void = () => {}

  @inject(identifiers.TINY_EMITTER)
  private eventBus?: TinyEmitter

  @inject(identifier)
  private storage?: VariableRepository

  init(expression: string, refreshCb: () => void) {
    this.innerExpression = expression
    this.refreshCb = refreshCb

    this.eventBus?.on(VariableEvents.VariableCreated, () => {
      refreshCb()
    })

    this.eventBus?.on(VariableEvents.VariableRemoved, () => {
      refreshCb()
    })

    this.eventBus?.on(VariableEvents.VariableUpdated, () => {
      console.log('Variable updated')
      refreshCb()
    })

    this.eventBus?.on(VariableEvents.VariablesCleared, () => {
      refreshCb()
    })

    this.eventBus?.on(VariableEvents.VariableRemoved, () => {
      refreshCb()
    })
  }

  // Case 1: Static string
  // Case 2: Computed string with variables
  //      - updated when variables change
  //      - updated when variables are added or removed

  getDependencies(): string[] {
    const regexp = /\$([a-zA-Z_][\w]*)/g
    const dependencies = [] as string[]
    let m: RegExpExecArray | null

    while ((m = regexp.exec(this.innerExpression)) !== null) {
      if (m.index === regexp.lastIndex) {
        regexp.lastIndex++
      }
      dependencies.push(m[1])
    }

    return dependencies
  }

  computeValue() {
    const dependencies = this.getDependencies()
    let result = this.innerExpression

    if (dependencies.length === 0) {
      return result
    }

    // Alte Subscriptions entfernen
    this.currentSubscriptions.forEach((subFn, key) => {
      const variable = this.storage?.getVariable(key) as Variable
      if (variable) {
        variable.unsubscribe(subFn)
      }
    })
    this.currentSubscriptions.clear()

    // Neue Subscriptions einrichten
    dependencies.forEach(dep => {
      const variable = this.storage?.getVariable(dep) as Variable | undefined

      if (variable) {
        const subFn = () => {
          this.refreshCb()
        }
        this.currentSubscriptions.set(dep, subFn)
        variable.subscribe(subFn)
      }
    })

    // Nur definierte Variablen ersetzen
    dependencies.forEach(dep => {
      const variable = this.storage?.getVariable(dep)
      if (variable && variable.value !== undefined) {
        result = result.replace(
          `$${dep}`,
          typeof variable.value === 'number'
            ? variable.value.toString()
            : `${variable.value}`,
        )
      }
    })

    return result
  }

  get value(): string {
    return this.computeValue()
  }
}

if (!container.isBound(ComputedStoreParameter)) {
  container.bind<ComputedStoreParameter>(ComputedStoreParameter).toSelf().inTransientScope();
}
