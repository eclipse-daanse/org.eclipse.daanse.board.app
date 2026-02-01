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

import { ref, computed } from 'vue'

// Global state - shared across all components
const activeLoadingCount = ref(0)

export function useGlobalLoading() {
  const isLoading = computed(() => activeLoadingCount.value > 0)

  const startLoading = () => {
    activeLoadingCount.value++
  }

  const stopLoading = () => {
    if (activeLoadingCount.value > 0) {
      activeLoadingCount.value--
    }
  }

  return {
    isLoading,
    activeLoadingCount,
    startLoading,
    stopLoading,
  }
}
