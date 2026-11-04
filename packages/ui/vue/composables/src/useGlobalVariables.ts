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

import { inject } from 'vue'
import { type VariableRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.variable'

/** A global variable as a choice: what it is called and what kind it is. */
export interface GlobalVariableChoice {
  name: string
  type: string
}

/**
 * The global variables there are, by name, as a list to choose from - what
 * an action parameter declared as a variable offers (#1237).
 *
 * A function rather than a list: a variable is added on another screen,
 * and whoever offers the choice asks again when it is offered. Where no
 * variable repository is provided the list is empty.
 */
export function useGlobalVariables(): () => GlobalVariableChoice[] {
  const repository = inject<VariableRepository | undefined>(identifier, undefined)
  return () =>
    (repository?.getVariablesByScope('global') ?? [])
      .map(([name, live]: [string, { type?: string } | undefined]) => ({ name, type: live?.type ?? '' }))
      .sort((a: GlobalVariableChoice, b: GlobalVariableChoice) => a.name.localeCompare(b.name))
}
