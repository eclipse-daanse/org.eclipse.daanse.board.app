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
import { type IVariableConfig } from '..'
import { Container, Factory } from 'inversify'
import { Serializable } from '../interface/JSONSerializableI'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const TYPE = 'DateTimePickerVariable'
const symbol = Symbol.for(TYPE)

export interface IDateTimePickerVariableConfig extends IVariableConfig {
  /** ISO 8601 datetime string (e.g., "2025-02-06T14:30:00") */
  datetime: string
}

const init = (container: Container) => {
  container.bind(symbol).toConstantValue(DateTimePickerVariable);
}

class DateTimePickerVariable extends Variable implements Serializable {
  public type = TYPE
  private innerDatetime: string = ''

  init(name: string, config: IDateTimePickerVariableConfig) {
    super.init(name, config);
    this.innerDatetime = config.datetime || '';
  }

  update(config: IDateTimePickerVariableConfig): void {
    super.update(config);
    this.innerDatetime = config.datetime || '';
  }

  get datetime(): string {
    return this.innerDatetime
  }

  set datetime(value: string) {
    this.innerDatetime = value
    this.notyfy()
  }

  get value(): string {
    return this.innerDatetime
  }

  set value(value: string) {
    this.innerDatetime = value
    this.notyfy()
  }

  serialize(): any {
    const ret = super.serialize();
    ret.datetime = this.innerDatetime;
    ret.type = this.type;
    return ret;
  }
}

if (!container.isBound(DateTimePickerVariable)) {
  container.bind(DateTimePickerVariable).toSelf().inTransientScope();
}

if (!container.isBound(symbol)) {
  container.bind<Factory<DateTimePickerVariable>>(symbol).toFactory(() => {
    return (name: string, config: IDateTimePickerVariableConfig) => {
      const variable = container.get<DateTimePickerVariable>(DateTimePickerVariable);
      variable.init(name, config);
      return variable;
    };
  })
};

export { DateTimePickerVariable, symbol, init, TYPE as DATETIME_PICKER_VARIABLE }
