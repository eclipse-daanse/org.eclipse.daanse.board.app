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

/** What a lamp can be told to do from elsewhere on the board. Each change sends stateChanged. */
export abstract class LampWidgetInterface extends WidgetActionInterfaceImpl {
  @WidgetAction({ eventType: 'lamp.turnOn', parameters: [] })
  turnOn(): void {
    throw new Error('turnOn not implemented')
  }

  @WidgetAction({ eventType: 'lamp.turnOff', parameters: [] })
  turnOff(): void {
    throw new Error('turnOff not implemented')
  }

  @WidgetAction({ eventType: 'lamp.toggle', parameters: [] })
  toggle(): void {
    throw new Error('toggle not implemented')
  }

  /* From 0 to 100; above 0 does not switch the lamp on by itself. */
  @WidgetAction({
    eventType: 'lamp.setBrightness',
    parameters: [{ name: 'brightness', type: 'number', label: 'lamp:Action.brightness' }],
  })
  setBrightness(brightness: number): void {
    throw new Error('setBrightness not implemented')
  }

  /* Any CSS colour; empty hands the colour back to the colour temperature. */
  @WidgetAction({
    eventType: 'lamp.setColor',
    parameters: [{ name: 'color', type: 'string', label: 'lamp:Action.color' }],
  })
  setColor(color: string): void {
    throw new Error('setColor not implemented')
  }

  /* In kelvin; it is what the light shows while no colour is set. */
  @WidgetAction({
    eventType: 'lamp.setColorTemperature',
    parameters: [{ name: 'kelvin', type: 'number', label: 'lamp:Action.colorTemperature' }],
  })
  setColorTemperature(kelvin: number): void {
    throw new Error('setColorTemperature not implemented')
  }
}
