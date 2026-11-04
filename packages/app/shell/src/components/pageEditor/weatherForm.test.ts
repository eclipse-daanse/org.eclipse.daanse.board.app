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

import { describe, expect, it } from 'vitest'
import weatherFormXmi from '../../../model/weather.ui.xmi?raw'
import { weatherForm } from './weatherForm'

describe('the weather form', () => {
  it("lists the page's widgets as the choices of a widget region", () => {
    const form = weatherForm(weatherFormXmi, [
      { id: 'a1', label: 'Text (a1)' },
      { id: 'b2', label: 'Chart "b" (b2)' },
    ])
    expect(form.xmi).toContain('<values>a1</values>')
    expect(form.xmi).toContain('<values>b2</values>')
    /* Quoted for JavaScript, then for XML: the attribute stays well formed */
    expect(form.xmi).toContain('Chart \\&quot;b\\&quot; (b2)')
    expect(form.xmi).not.toContain('widget choices -->')
  })

  it('is another form for another list of widgets', () => {
    const one = weatherForm(weatherFormXmi, [{ id: 'a1', label: 'Text' }])
    const other = weatherForm(weatherFormXmi, [{ id: 'b2', label: 'Text' }])
    expect(one.uri).not.toBe(other.uri)
    expect(weatherForm(weatherFormXmi, [{ id: 'a1', label: 'Text' }]).uri).toBe(one.uri)
  })
})
