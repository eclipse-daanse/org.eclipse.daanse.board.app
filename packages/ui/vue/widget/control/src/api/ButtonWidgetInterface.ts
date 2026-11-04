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

/** What a button can be told to do from elsewhere on the board. */
export abstract class ButtonWidgetInterface extends WidgetActionInterfaceImpl {
  @WidgetAction({
    eventType: 'button.setValue',
    parameters: [
      { name: 'value', type: 'string', label: 'control:Action.value' },
    ],
  })
  setValue(value: string): void {
    throw new Error('setValue not implemented')
  }

  @WidgetAction({
    eventType: 'button.setLabel',
    parameters: [
      { name: 'label', type: 'string', label: 'control:Action.label' },
    ],
  })
  setLabel(label: string): void {
    throw new Error('setLabel not implemented')
  }

  @WidgetAction({ eventType: 'button.enable', parameters: [] })
  enable(): void {
    throw new Error('enable not implemented')
  }

  @WidgetAction({ eventType: 'button.disable', parameters: [] })
  disable(): void {
    throw new Error('disable not implemented')
  }
}
