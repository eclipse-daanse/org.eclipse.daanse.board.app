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
 * The tsm framework API as an ESM artefact - what the import map hands every
 * bundle that writes `@component`, `@inject` or `serviceId`. One shared copy
 * instead of one per bundle; the OSGi analogue is the system bundle
 * exporting org.osgi.framework. Runtime state stays unaffected either way:
 * tsm keys its decorator metadata with Symbol.for and its runtime through
 * window.__tsm__, by design copy-tolerant.
 */
import * as tsm from '@eclipse-daanse/tsm'

export * from '@eclipse-daanse/tsm'
export default tsm
