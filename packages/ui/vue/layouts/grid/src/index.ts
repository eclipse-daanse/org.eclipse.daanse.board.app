/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { identifier,type  LayoutI, type LayoutRepositoryI } from 'org.eclipse.daanse.board.app.lib.repository.layout.page'
import View from './comonents/View.vue'
import Edit from './comonents/Edit.vue'
import GridSettingsPanel from './comonents/GridSettingsPanel.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

if(container.isBound(identifier)) {
  const layoutRepo = container.get<LayoutRepositoryI>(identifier)
  if(layoutRepo){
    const layout = {
      id: "org.eclipse.daanse.board.app.ui.vue.layouts.grid",
      name: "GridLayout",
      description: "responsive grid-based layout",
      component: View,
      editor: Edit,
      settings: GridSettingsPanel
    } as LayoutI;
    layoutRepo.addLayout(layout)
    console.log('📦 GridLayout added')
  }
}

