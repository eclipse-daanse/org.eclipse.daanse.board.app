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

// The worker entry point. Vite bundles this file separately (see the
// `?worker&url` import in `lsp-client.ts`); everything it pulls in — the
// grammar, the scope provider, the validators — ends up in the worker bundle,
// not in the main one.
//
// This is byte-for-byte the same server the Monaco playground and the VS Code
// extension run. Only the transport differs; see `worker-transport.ts`.
import { startMdxLanguageServer } from '../src/language/main-browser.js'

declare const self: DedicatedWorkerGlobalScope

startMdxLanguageServer(self)
