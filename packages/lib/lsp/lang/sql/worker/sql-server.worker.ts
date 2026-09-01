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

/// <reference lib="WebWorker" />

// The SQL worker entry. Separate from the MDX and DMV workers because the
// three grammars are separate Langium projects with their own generated AST
// reflections - see `language/main-browser.ts`.
import { startSqlLanguageServer } from '../src/language/main-browser.js'

declare const self: DedicatedWorkerGlobalScope

startSqlLanguageServer(self)
