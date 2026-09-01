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

import { startWorkerLanguageServer } from 'org.eclipse.daanse.board.app.lib.lsp.server/worker'
import { MDX_AST_STRATEGY } from './mdx-ast.js'
import { createMdxServices } from './mdx-module.js'

export function startMdxLanguageServer(
  port: DedicatedWorkerGlobalScope | MessagePort,
): void {
  startWorkerLanguageServer(port, {
    createServices: createMdxServices,
    astStrategy: MDX_AST_STRATEGY,
  })
}
