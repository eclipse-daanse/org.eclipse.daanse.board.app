/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import {
  type LayoutI,
  type LayoutRepositoryI,
  LAYOUT_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.repository.layout.page'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import View from './components/View.vue'
import Edit from './components/Edit.vue'

// Export clipboard store for use in other layouts
export { useClipboardStore } from './composables/useClipboardStore'

const LAYOUT_ID = 'org.eclipse.daanse.board.app.ui.vue.layouts.base'

export function activate({ services }: ActivationContext) {
  services.getRequired<LayoutRepositoryI>(LAYOUT_REPOSITORY).addLayout({
    id: LAYOUT_ID,
    name: 'BaseLayout',
    description: 'pixelbased Layout',
    component: View,
    editor: Edit,
  } as LayoutI)
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<LayoutRepositoryI>(LAYOUT_REPOSITORY)
    .removeLayout(LAYOUT_ID)
}
