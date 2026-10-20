/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import DOMPurify from 'dompurify'

/**
 * Neutralisation for every string that reaches `v-html`.
 *
 * Two kinds of input cross a trust boundary into the widgets:
 *  - response bodies from configured endpoints (feeds, REST payloads, SVG hosts)
 *  - board definitions, which may have been loaded from a foreign git repository
 *    and are therefore not operator input either
 *
 * `v-html` compiles to `innerHTML`, so neither Vue's interpolation escaping nor
 * the XML layer that produced the value protects the sink. Sanitise here.
 */

/** Rich text, feed items, and anything else rendered as HTML. */
export const sanitizeHtml = (dirty: unknown): string => {
  if (typeof dirty !== 'string' || !dirty) return ''
  return DOMPurify.sanitize(dirty)
}

/**
 * SVG documents fetched from an asset host.
 *
 * The markup is injected into a `<div>`, so the browser parses it in the HTML
 * namespace, which is more permissive than an SVG-namespace parse: an
 * `<img onerror=…>` inside the SVG body would run. The SVG profile drops it.
 */
export const sanitizeSvg = (dirty: unknown): string => {
  if (typeof dirty !== 'string' || !dirty) return ''
  return DOMPurify.sanitize(dirty, {
    USE_PROFILES: { svg: true, svgFilters: true },
  })
}

/**
 * A `<style>` block assembled from board configuration.
 *
 * A class name or colour carrying `</style>` would otherwise close the element
 * and leave the remainder to be parsed as markup.
 */
export const sanitizeStyleBlock = (dirty: unknown): string => {
  if (typeof dirty !== 'string' || !dirty) return ''
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['style'],
    ALLOWED_ATTR: [],
    // Without FORCE_BODY a leading <style> is parsed into head and dropped,
    // which would silently remove the widget's class styling.
    FORCE_BODY: true,
  })
}
