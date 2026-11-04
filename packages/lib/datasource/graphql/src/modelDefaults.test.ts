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
import { IGraphQLStoreConfigurationImpl } from './gen/IGraphQLStoreConfigurationImpl'

/*
 * Since #1218 a number without a declared default starts at 0, not at
 * undefined - and the store's "?? 5000" never applies to 0. A source with
 * polling switched on and no interval set would ask its endpoint without
 * pause. The model says what the interval is until someone sets one.
 */
it('polls every five seconds until an interval is set', () => {
  expect(new IGraphQLStoreConfigurationImpl().pollingInterval).toBe(5000)
})
