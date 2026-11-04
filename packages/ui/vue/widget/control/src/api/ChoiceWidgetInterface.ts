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

/** What a choice can be told to do from elsewhere on the board. */
export abstract class ChoiceWidgetInterface extends WidgetActionInterfaceImpl {
  /* Chooses the option holding the value given, without sending change. */
  @WidgetAction({
    eventType: 'choice.setValue',
    parameters: [
      { name: 'value', type: 'string', label: 'control:Action.value' },
    ],
  })
  setValue(value: unknown): void {
    throw new Error('setValue not implemented')
  }

  @WidgetAction({ eventType: 'choice.enable', parameters: [] })
  enable(): void {
    throw new Error('enable not implemented')
  }

  @WidgetAction({ eventType: 'choice.disable', parameters: [] })
  disable(): void {
    throw new Error('disable not implemented')
  }
}
