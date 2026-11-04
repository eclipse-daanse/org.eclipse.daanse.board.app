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

/** What a toggle button can be told to do from elsewhere on the board. */
export abstract class ToggleWidgetInterface extends WidgetActionInterfaceImpl {
  /* Puts the toggle into the state given - true or false - without sending change. */
  @WidgetAction({
    eventType: 'toggle.setValue',
    parameters: [
      { name: 'on', type: 'boolean', label: 'control:Action.on' },
    ],
  })
  setValue(on: boolean): void {
    throw new Error('setValue not implemented')
  }

  @WidgetAction({ eventType: 'toggle.enable', parameters: [] })
  enable(): void {
    throw new Error('enable not implemented')
  }

  @WidgetAction({ eventType: 'toggle.disable', parameters: [] })
  disable(): void {
    throw new Error('disable not implemented')
  }
}
