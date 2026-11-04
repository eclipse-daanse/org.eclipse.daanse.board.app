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

/** What a slider can be told to do from elsewhere on the board. */
export abstract class SliderWidgetInterface extends WidgetActionInterfaceImpl {
  /* Moves the thumb - the lower one of a range - to where the value may stand, without sending change. */
  @WidgetAction({
    eventType: 'slider.setValue',
    parameters: [
      { name: 'value', type: 'number', label: 'control:Action.value' },
    ],
  })
  setValue(value: number): void {
    throw new Error('setValue not implemented')
  }

  /* Moves both thumbs of a range, without sending change. */
  @WidgetAction({
    eventType: 'slider.setRange',
    parameters: [
      { name: 'lower', type: 'number', label: 'control:Action.lower' },
      { name: 'upper', type: 'number', label: 'control:Action.upper' },
    ],
  })
  setRange(lower: number, upper: number): void {
    throw new Error('setRange not implemented')
  }

  @WidgetAction({ eventType: 'slider.enable', parameters: [] })
  enable(): void {
    throw new Error('enable not implemented')
  }

  @WidgetAction({ eventType: 'slider.disable', parameters: [] })
  disable(): void {
    throw new Error('disable not implemented')
  }
}
