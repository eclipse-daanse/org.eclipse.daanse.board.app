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

/** What a visual widget can be told to do from elsewhere on the board. */
export abstract class VisualWidgetInterface extends WidgetActionInterfaceImpl {
  /** Draws the same table as another kind: bars3d, surface, scatter3d, sunburst, treemap, sankey, race, calendar. */
  @WidgetAction({ eventType: 'visual.setKind' })
  setKind(kind: string): void {
    throw new Error(`setKind(${kind}) not implemented`)
  }

  @WidgetAction({ eventType: 'visual.refresh' })
  refresh(): void {
    throw new Error('refresh not implemented')
  }
}
