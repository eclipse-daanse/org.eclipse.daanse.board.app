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

import { Variable } from './Variable'
import { VariableStorage } from '../storage/VariableStorage'
import { type TinyEmitter } from 'tiny-emitter'
import { type IComputedVariableConfig } from '..'
import { Container } from 'inversify'

const symbol = Symbol.for('ComputedVariable')

const init = (container: Container) => {
  container.bind(symbol).toConstantValue(ComputedVariable);
}

class ComputedVariable extends Variable {
  private innerExpression: string = ''
  public type = 'computed'

  constructor(
    name: string,
    container: Container,
    config: IComputedVariableConfig,
  ) {
    super(name, container, config)
    this.expression = config.expression

    this.initSubscriptions()
  }

  get expression(): string {
    return this.innerExpression
  }

  set expression(expression) {
    this.innerExpression = expression

    this.initSubscriptions()
  }

  // TODO: Think if the inner value is necessary
  get value(): any {
    return this.computeValue()
  }

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

    dependencies.forEach(dep => {
      result = result.replace(
        `$${dep}`,
        typeof this.storage.getVariable(dep)?.value === 'number'
          ? this.storage.getVariable(dep)?.value
          : `'${this.storage.getVariable(dep)?.value}'`,
      )
    })

    const execFn = new Function(`return ${result}`)
    return execFn()
  }

  initSubscriptions() {
    const dependencies = this.getDependencies()
    dependencies.forEach(dep => {
      console.log(dep)
      const depencencyVariable = this.storage.getVariable(dep)
      console.log(depencencyVariable)
      depencencyVariable.subscribe(() => {
        console.log('dep changed', dep)
        this.notyfy()
        console.log('Variable changed')
      })
    })
  }
}

export { ComputedVariable, symbol, init }
