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
 * The vue-router ESM artefact the import map points at - the application's only
 * copy. The default export mirrors the namespace: code compiled from CJS
 * interop does `import X from 'vue-router'` and must find one.
 */
import * as VueRouter from 'vue-router'

export * from 'vue-router'
export default VueRouter
