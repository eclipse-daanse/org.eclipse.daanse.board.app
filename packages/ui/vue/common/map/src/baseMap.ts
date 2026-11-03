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
 * The background every map draws when nobody chose one.
 *
 * CARTO's basemaps, which served that role until now, answer every tile
 * with an image reading "API KEY REQUIRED" (#1197). OpenStreetMap's own
 * tiles are free under its usage policy: a browser's User-Agent or
 * Referer, no bulk download - which a preview satisfies.
 */
export const FREE_BASE_MAP_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

export const FREE_BASE_MAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
