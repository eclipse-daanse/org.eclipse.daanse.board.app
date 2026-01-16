/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/


import { identifier,type  LayoutI, type LayoutRepositoryI } from 'org.eclipse.daanse.board.app.lib.repository.layout.page'
import View from './components/View.vue'
import Edit from './components/Edit.vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

// Export clipboard store for use in other layouts
export { useClipboardStore } from './composables/useClipboardStore'

if(container.isBound(identifier)) {

  const layoutRepo = container.get<LayoutRepositoryI>(identifier)
  if(layoutRepo){
    const layout = {
      id: "org.eclipse.daanse.board.app.ui.vue.layouts.base",
      name: "BaseLayout",
      description: "pixelbased Layout",
      component: View,
      editor: Edit
    } as LayoutI;
    layoutRepo.addLayout(layout)
    console.log('📦 BaseLayout added')
  }
  else{
    console.log('X📦X LayoutRepository is not found, cannot add BaseLayout')
  }
}


