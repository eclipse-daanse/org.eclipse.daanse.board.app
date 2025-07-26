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
import { type IConstantVariableConfig, RefreshType } from '..'
import { Container, Factory } from 'inversify'
import { Serializable } from '../interface/JSONSerializableI'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const TYPE = 'ConstantVariable'
const symbol = Symbol.for(TYPE)

const init = (container: Container) => {
  container.bind(symbol).toConstantValue(ConstantVariable);
}

class ConstantVariable extends Variable implements Serializable {
  public type = TYPE

  init(name: string, config: IConstantVariableConfig) {
    super.init(name, config);
    this.value = config.value;
  }

  update(config: IConstantVariableConfig): void {
    super.update(config);
    this.value = config.value
  }

  get value(): string {
    return super.value
  }

  set value(value) {
    super.value = value
  }

  serialize(): any {
    const ret = super.serialize();
    ret.value = this.value;
    ret.type = this.type;
    return ret;
  }
}

if (!container.isBound(ConstantVariable)) {
  container.bind(ConstantVariable).toSelf().inTransientScope();
}

if (!container.isBound(symbol)) {
  container.bind<Factory<ConstantVariable>>(symbol).toFactory(() => {
    return (name: string, config: IConstantVariableConfig) => {
      const variable = container.get<ConstantVariable>(ConstantVariable);
      variable.init(name, config);
      return variable;
    };
  })
};

export { ConstantVariable, symbol, init, TYPE as CONSTANT_VARIABLE }
