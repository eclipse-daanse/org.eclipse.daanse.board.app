/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { PivotGenerator } from './generator'
import type { Scenario } from './scenarios'

type Listener = () => void

// Stands in for lib.datasource.xmla: same getData/callEvent/subscribe surface,
// answers from PivotGenerator instead of an XMLA server.
export class SyntheticDatasource {
  private listeners: Listener[] = []
  private generator: PivotGenerator
  // resolves after each getData, used by the page to time a render
  public deliveries = 0
  public events: { event: string; params: any }[] = []

  constructor(scenario: Scenario) {
    this.generator = new PivotGenerator(scenario.spec)
  }

  async getData(type: string) {
    if (type !== 'PivotTable') throw new Error('Invalid data type')
    const data = this.generator.build()
    this.deliveries++
    return data
  }

  async callEvent(event: string, params: any) {
    this.events.push({ event, params })
    const uName = params?.value?.UName
    if (event === 'expand') this.generator.expand(params.area, uName)
    if (event === 'collapse') this.generator.collapse(params.area, uName)
    this.notify()
  }

  getCubeName() {
    return 'Synthetic'
  }

  subscribe(fn: Listener) {
    this.listeners.push(fn)
  }

  unsubscribe(fn: Listener) {
    this.listeners = this.listeners.filter(l => l !== fn)
  }

  notify() {
    this.listeners.forEach(fn => fn())
  }

  destroy() {
    this.listeners = []
  }
}
