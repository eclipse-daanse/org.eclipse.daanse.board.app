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

import { ActionParameter, WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'
import { ModelClass } from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({
  type: 'http://org.eclipse.daanse.board.app.lib.composer.ogcsta2chart#//OGCSTAToChartComposerInterface'
})
export abstract class OGCSTAToChartComposerInterface {

  @WidgetAction({ eventType: 'ogcsta2chart.switchThingByName' })
  switchThingByName(
    @ActionParameter() name: string
  ): void | Promise<void> {
    throw new Error('switchThingByName not implemented')
  }

  @WidgetAction({ eventType: 'ogcsta2chart.switchThingById' })
  switchThingById(
    @ActionParameter() id: string
  ): void | Promise<void> {
    throw new Error('switchThingById not implemented')
  }
}
