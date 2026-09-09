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

// The DMV worker entry. Separate from `mdx-server.worker.ts` because the two
// grammars are separate Langium projects with their own generated AST
// reflections — see `dmv/main-browser.ts`.
import { startDmvLanguageServer } from '../src/language/main-browser.js'

declare const self: DedicatedWorkerGlobalScope

startDmvLanguageServer(self)
