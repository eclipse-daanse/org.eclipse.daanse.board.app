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

import { WidgetActionInterface } from 'org.eclipse.daanse.board.app.lib.events'
import { WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'

export abstract class ChartWidgetInterface extends WidgetActionInterface {

  @WidgetAction({ eventType: 'chart.refresh' })
  refresh(): void { throw new Error("refresh not implemented"); }

  @WidgetAction({ eventType: 'chart.zoomIn' })
  zoomIn(): void { throw new Error("zoomIn not implemented"); }

  @WidgetAction({ eventType: 'chart.zoomOut' })
  zoomOut(): void { throw new Error("zoomOut not implemented"); }

  @WidgetAction({ eventType: 'chart.resetZoom' })
  resetZoom(): void { throw new Error("resetZoom not implemented"); }

  @WidgetAction({ eventType: 'chart.exportAsImage' })
  exportAsImage(format?: string): void { throw new Error("exportAsImage not implemented"); }
}
