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

import { expect, it } from 'vitest'
import { PageImpl } from './gen/PageImpl'

/*
 * Since #1218 a flag without a declared default starts as false, not as
 * undefined, and "?? true" never applies to false. A page is shown in the
 * navigation until someone hides it.
 */
it('shows a new page in the navigation', () => {
  expect(new PageImpl().visibleInNavigation).toBe(true)
})
