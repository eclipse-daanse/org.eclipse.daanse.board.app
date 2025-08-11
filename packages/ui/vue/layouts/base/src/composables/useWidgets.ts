/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *———
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import { useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { useRoute } from 'vue-router'

export const useWidgets = () => {
  const route = useRoute()
  const pageID = route.params.pageid ?? ''
  return useWidgetsStore(pageID as string || '')
}
