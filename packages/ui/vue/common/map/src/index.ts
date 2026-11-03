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
 * A map that draws whatever geography it is handed.
 *
 * Here rather than in one source's package because more than one source
 * answers geography, and the two previews that drew maps before this each
 * understood only their own source's answer (#1187).
 */
import GeoFeatureMap from './GeoFeatureMap.vue'

export { GeoFeatureMap }
export { featuresIn, boundsOf, countByType, type Bounds, type Feature } from './features'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { CommonMapTranslations } from './i18n'
