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

import { ref } from 'vue'

/**
 * The dialog that makes a data source, and what it is opened with.
 *
 * It used to be opened from the tree alone, with its state in the tree's
 * own refs. A catalogue hit opens the same dialog - it is the whole
 * point of a hit (#1163) - and it is reached from the detail pane on the
 * other side of the screen, which has no way to hand the tree anything.
 *
 * Module scope, like the storage dialog: one dialog, opened from
 * wherever there is a reason to make a source.
 */
const open = ref(false)

/** The connection it opens on, where the caller has one in mind. */
const forConnection = ref<string | undefined>(undefined)

/**
 * The type it opens on.
 *
 * A catalogue hit knows what it is read with, so asking again would be
 * asking a question whose answer is on the screen already.
 */
const forType = ref<string | undefined>(undefined)

/** The name it opens with, where the caller has one worth offering. */
const forName = ref<string | undefined>(undefined)

/**
 * Fields the caller can already answer.
 *
 * A catalogue hit carries an address, and for a type that reads a path
 * below its connection that path is the hit's own last segment - known
 * here, and a blank the person would otherwise fill in by hand from
 * something they can see on the screen behind the dialog.
 */
const forConfig = ref<Record<string, unknown> | undefined>(undefined)

export function useNewDatasource() {
  function show(
    on: {
      connection?: string
      type?: string
      name?: string
      config?: Record<string, unknown>
    } = {},
  ) {
    forConnection.value = on.connection
    forType.value = on.type
    forName.value = on.name
    forConfig.value = on.config
    open.value = true
  }

  return { open, forConnection, forType, forName, forConfig, show }
}
