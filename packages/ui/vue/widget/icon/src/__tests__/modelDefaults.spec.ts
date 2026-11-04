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
import { IconSettingsImpl } from '../gen/IconSettingsImpl'

/*
 * A new icon widget took its size from "undefinedpx", which the browser
 * ignored, and drew at the size around it. Since #1218 a number without a
 * declared default starts at 0 - an icon of 0 pixels. The model says what
 * a new one is; the font axes take the values the font itself defaults to.
 */
it('starts an icon at a visible size, with the font axes at their own defaults', () => {
  const icon = new IconSettingsImpl()
  expect(icon.iconSize).toBe(48)
  expect(icon.strokeWeight).toBe(400)
  expect(icon.opticSize).toBe(24)
  expect(icon.grade).toBe(0)
})
