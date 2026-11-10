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

export abstract class ChartWidgetInterface extends WidgetActionInterfaceImpl {

  @WidgetAction({ eventType: 'chart.refresh', parameters: [] })
  refresh(): void { throw new Error("refresh not implemented"); }

  @WidgetAction({ eventType: 'chart.zoomIn', parameters: [] })
  zoomIn(): void { throw new Error("zoomIn not implemented"); }

  @WidgetAction({ eventType: 'chart.zoomOut', parameters: [] })
  zoomOut(): void { throw new Error("zoomOut not implemented"); }

  @WidgetAction({ eventType: 'chart.resetZoom', parameters: [] })
  resetZoom(): void { throw new Error("resetZoom not implemented"); }

  @WidgetAction({
    eventType: 'chart.exportAsImage',
    parameters: [
      { name: 'format', type: 'string', label: 'chart:Action.format', optional: true },
    ],
  })
  exportAsImage(format?: string): void { throw new Error("exportAsImage not implemented"); }
}
