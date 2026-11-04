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

import { WidgetActionInterfaceImpl } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'

export abstract class TimelineWidgetInterface extends WidgetActionInterfaceImpl {

  @WidgetAction({ eventType: 'timeline.zoomIn', parameters: [] })
  zoomIn(): void { throw new Error("zoomIn not implemented"); }

  @WidgetAction({ eventType: 'timeline.zoomOut', parameters: [] })
  zoomOut(): void { throw new Error("zoomOut not implemented"); }

  @WidgetAction({
    eventType: 'timeline.setDateRange',
    parameters: [
      { name: 'start', type: 'string', label: 'timeline:Action.start' },
      { name: 'end', type: 'string', label: 'timeline:Action.end' },
    ],
  })
  setDateRange(start: string, end: string): void { throw new Error("setDateRange not implemented"); }

  @WidgetAction({ eventType: 'timeline.jumpToNow', parameters: [] })
  jumpToNow(): void { throw new Error("jumpToNow not implemented"); }
}
