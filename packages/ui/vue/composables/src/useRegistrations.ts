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

/**
 * What a registry has on offer, as something Vue re-renders on.
 *
 * Bundles activate asynchronously and in no particular order, so a
 * datasource type or a widget can register after the dialog or palette
 * listing them has mounted. The repositories are framework-free and their
 * records are plain objects - a getter read in a computed is read once and
 * never again.
 *
 * Registrations are not modelled: they are services coming and going, not
 * objects in the workspace, so there is no containment tree for EMF to
 * follow. Each repository says so through `onChange` instead, and this
 * turns that callback into a dependency. Deliberately not `reactive()` on
 * the repository: that would proxy everything it holds, EObjects included.
 */
import { computed, getCurrentScope, onScopeDispose, shallowRef, type ComputedRef } from 'vue'

/** The half of a repository this needs. */
export interface ObservableRegistry {
  onChange(listener: () => void): () => void
}

/**
 * Re-reads `read` whenever the registry reports a registration change, as
 * well as whenever anything reactive it reads changes.
 *
 * The subscription ends with the calling component or effect scope.
 */
export function useRegistrations<T>(
  registry: ObservableRegistry | undefined,
  read: () => T,
): ComputedRef<T> {
  const version = shallowRef(0)
  const unsubscribe = registry?.onChange?.(() => {
    version.value++
  })
  if (unsubscribe && getCurrentScope()) onScopeDispose(unsubscribe)

  return computed(() => {
    void version.value
    return read()
  })
}
