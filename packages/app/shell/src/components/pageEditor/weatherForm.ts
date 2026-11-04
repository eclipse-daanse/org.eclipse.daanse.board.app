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
 * The weather form with the page's widgets as the choices of a widget
 * region.
 *
 * The form is written as a model, and a model lists its choices; the
 * widgets of one page are not known when it is written. So one value per
 * widget goes where the form says, and the words for each into its
 * optionLabel. The URI names the list as well, because forms are loaded
 * once per URI: a page with other widgets is another form.
 */
const MARKER = '<!-- widget choices -->'

export interface WidgetChoice {
  id: string
  label: string
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function weatherForm(xmi: string, widgets: WidgetChoice[]): { xmi: string; uri: string } {
  const values = widgets.map((widget) => `<values>${escapeXml(widget.id)}</values>`).join('\n      ')
  const labels = Object.fromEntries(widgets.map((widget) => [widget.id, widget.label]))
  const optionLabel = `<optionLabel language="JS" body="${escapeXml(`(${JSON.stringify(labels)})[option] ?? option`)}"/>`
  const filled = xmi.replace(MARKER, `${values}\n      ${optionLabel}`)
  const key = widgets.map((widget) => `${widget.id}=${widget.label}`).join('|')
  return { xmi: filled, uri: `/page-weather-${hash(key)}.ui.xmi` }
}

/** A short stable name for a list of choices; not a security measure. */
function hash(text: string): string {
  let h = 0
  for (let i = 0; i < text.length; i++) h = (Math.imul(h, 31) + text.charCodeAt(i)) | 0
  return (h >>> 0).toString(36)
}
