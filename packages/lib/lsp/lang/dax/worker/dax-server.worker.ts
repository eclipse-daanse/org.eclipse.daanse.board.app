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

// The DAX worker entry, built on its own by vite.worker.config.ts. It lives in
// worker/ rather than src/ so Vite never resolves it to TypeScript source -
// see the note in src/index.ts.
import { startDaxLanguageServer } from '../src/language/main-browser.js'

declare const self: DedicatedWorkerGlobalScope

startDaxLanguageServer(self)
