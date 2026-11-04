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

/** What a number field can be told to do from elsewhere on the board. */
export abstract class NumberFieldWidgetInterface extends WidgetActionInterfaceImpl {
  /* Writes the number given, kept between min and max and on the step grid, without sending change. */
  @WidgetAction({
    eventType: 'numberField.setValue',
    parameters: [
      { name: 'value', type: 'number', label: 'control:Action.value' },
    ],
  })
  setValue(value: number): void {
    throw new Error('setValue not implemented')
  }

  @WidgetAction({ eventType: 'numberField.enable', parameters: [] })
  enable(): void {
    throw new Error('enable not implemented')
  }

  @WidgetAction({ eventType: 'numberField.disable', parameters: [] })
  disable(): void {
    throw new Error('disable not implemented')
  }
}
