/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

import { WidgetActionInterfaceImpl } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'

/** What a gauge can be told to do from elsewhere on the board. */
export abstract class GaugeWidgetInterface extends WidgetActionInterfaceImpl {
  @WidgetAction({
    eventType: 'gauge.setValue',
    parameters: [
      { name: 'value', type: 'number', label: 'gauge:Action.value' },
    ],
  })
  setValue(value: number): void {
    throw new Error('setValue not implemented')
  }

  @WidgetAction({
    eventType: 'gauge.setMax',
    parameters: [
      { name: 'max', type: 'number', label: 'gauge:Action.max' },
    ],
  })
  setMax(max: number): void {
    throw new Error('setMax not implemented')
  }

  @WidgetAction({ eventType: 'gauge.refresh', parameters: [] })
  refresh(): void {
    throw new Error('refresh not implemented')
  }
}
