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

import type { LanguageDescriptor } from 'org.eclipse.daanse.board.app.lib.api.lsp'

/**
 * Builds a descriptor from a worker URL, so a language package never writes
 * the `new Worker(...)` call itself.
 *
 * The options object is what a language actually has to decide; the one line
 * this hides is the one that is easy to get wrong. A worker built without
 * `{ type: 'module' }` fails on the language server's first ESM import, and
 * the symptom is an editor that renders and never diagnoses — no error, no
 * console output, because the worker dies before the transport is connected.
 *
 * The URL itself stays in the language package: resolving it is
 * bundler-specific, and keeping that line there is what spares every consumer
 * from knowing it.
 */
export function defineLanguage(
  options: Omit<LanguageDescriptor, 'createServerWorker'> & {
    serverWorkerUrl: string
  },
): LanguageDescriptor {
  const { serverWorkerUrl, ...rest } = options
  return {
    ...rest,
    createServerWorker: () =>
      new Worker(serverWorkerUrl, {
        type: 'module',
        name: `${rest.label} Language Server`,
      }),
  }
}
