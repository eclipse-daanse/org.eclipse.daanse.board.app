/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { SubscribeNotifyI } from '../api/SubscribeNotifyI'
import {v4 as uuid} from 'uuid';
export abstract class SubscribeNotifyImpl implements SubscribeNotifyI{
  private subscribers = new Map<string,Function>()
  notify(ev:string): void {
    for(const sub of this.subscribers.values()){
      sub(ev);
    }
  }

  subscribe(recall: Function): string {
    const id = uuid();
    this.subscribers.set(id,recall);
    return id;
  }

  unsubscribe(id: string): void {
    this.subscribers.delete(id);
  }

}
