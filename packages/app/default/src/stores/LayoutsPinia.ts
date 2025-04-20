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

import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ILayoutItem } from '@/composables/useMovableLayout'

export const useLayoutStore = defineStore('layout', () => {
  const layout = ref([] as ILayoutItem[])

  const updateLayout = (updatedLayout: ILayoutItem[]) => {
    layout.value.splice(0, layout.value.length, ...updatedLayout)
  }

  return {
    layout,
    updateLayout,
  }
})
