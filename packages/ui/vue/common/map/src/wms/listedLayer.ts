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


/** A layer as far as the shared layer list reads and writes it (#1274). */
export interface ListedLayer {
  id?: string
  title?: string
  name?: string
  checked?: boolean
  opacity?: number
  reconstructionFailed?: boolean
}
