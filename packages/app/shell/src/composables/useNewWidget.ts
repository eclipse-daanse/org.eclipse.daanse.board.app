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
 * The dialog that puts a widget on a board, and the source it opens on.
 *
 * Module scope, like the one that makes a data source: there is one such
 * dialog, and the reasons to open it are in different places from where
 * it is mounted.
 */
const open = ref(false)

/** The source the widget will read, which is what the dialog is about. */
const forDatasource = ref<string | undefined>(undefined)

export function useNewWidget() {
  function show(datasource?: string) {
    forDatasource.value = datasource
    open.value = true
  }

  return { open, forDatasource, show }
}
