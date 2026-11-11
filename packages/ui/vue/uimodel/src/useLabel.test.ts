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


/*
 * The help key of a field is derived from its label key; scripts/i18n.mjs
 * derives it the same way to count it as used, so the two must agree.
 */
import { describe, it, expect } from 'vitest'
import { helpKeyOf } from './useLabel'

describe('the help key of a label', () => {
  it('sits in the section named after the label\'s, with Help behind it', () => {
    expect(helpKeyOf('progress:Form.fillColor')).toBe('progress:FormHelp.fillColor')
    expect(helpKeyOf('variableConstant:FormConstant.value')).toBe('variableConstant:FormConstantHelp.value')
    expect(helpKeyOf('chart:Form.group.deep')).toBe('chart:FormHelp.group.deep')
  })

  it('is not there for words or a key without a section', () => {
    expect(helpKeyOf('Fill colour')).toBeUndefined()
    expect(helpKeyOf('progress:fillColor')).toBeUndefined()
    expect(helpKeyOf(undefined)).toBeUndefined()
  })
})
