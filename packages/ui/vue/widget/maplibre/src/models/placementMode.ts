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
 * The "place on map" mode of the settings (#1281): which model layer of
 * which settings takes clicks on the map. Module state, as the settings and
 * the map of the same widget are two components of one bundle; the map that
 * holds the same settings object is the one that places.
 */

import { shallowRef } from 'vue'

export const placing = shallowRef<{ settings: object; layerId: string } | null>(null)
