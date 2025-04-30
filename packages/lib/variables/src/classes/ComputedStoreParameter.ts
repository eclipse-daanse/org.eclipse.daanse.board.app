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
import { Container } from 'inversify'
import { VariableRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { VariableEvents } from '..'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'

export class ComputedStoreParameter {
  private storage: VariableRepository
  private innerExpression: string
  private eventBus: TinyEmitter
  private currentSubscriptions: Map<string, () => void> = new Map()
  private refreshCb: () => void

  constructor(container: Container, expression: string, refreshCb: () => void) {
    this.storage = container.get<VariableRepository>(identifier)
    this.innerExpression = expression
    this.eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER)
    this.refreshCb = refreshCb

    this.eventBus.on(VariableEvents.VariableCreated, () => {
      refreshCb()
    })

    this.eventBus.on(VariableEvents.VariableRemoved, () => {
      refreshCb()
    })

    this.eventBus.on(VariableEvents.VariableUpdated, () => {
      console.log('Variable updated')
      refreshCb()
    })

    this.eventBus.on(VariableEvents.VariablesCleared, () => {
      refreshCb()
    })

    this.eventBus.on(VariableEvents.VariableRemoved, () => {
      refreshCb()
    })
  }

  // Case 1: Static string
  // Case 2: Computed string with variables
  //      - updated when variables change
  //      - updated when variables are added or removed

  getDependencies(): string[] {
    const regexp = /\$(\S+)*/gm
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

    this.currentSubscriptions.forEach((subFn, key) => {
      const variable = this.storage.getVariable(key) as Variable
      if (variable) {
        variable.unsubscribe(subFn)
      }
    })

    this.currentSubscriptions.clear()

    dependencies.forEach(dep => {
      const variable = this.storage.getVariable(dep) as Variable
      console.log('dep', dep)
      console.log('storage', this.storage)

      this.currentSubscriptions.set(dep, () => {
        console.log('Should update')
        this.refreshCb()
      })

      variable.subscribe(this.currentSubscriptions.get(dep) as () => void)
    })

    console.log(this.currentSubscriptions)

    dependencies.forEach(dep => {
      result = result.replace(
        `$${dep}`,
        typeof this.storage.getVariable(dep)?.value === 'number'
          ? this.storage.getVariable(dep)?.value
          : `${this.storage.getVariable(dep)?.value}`,
      )
    })

    // TODO: make logic for evaluation
    // const execFn = new Function(`return ${result}`);
    // return execFn();
    return result
  }

  get value(): string {
    return this.computeValue()
  }
}
