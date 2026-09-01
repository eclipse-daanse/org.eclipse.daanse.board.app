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

import type { Transport } from '@codemirror/lsp-client'

export function workerTransport(worker: Worker): Transport {
  let handlers: ((value: string) => void)[] = []

  worker.onmessage = (event: MessageEvent) => {
    const encoded = JSON.stringify(event.data)
    // Iterate a copy: a handler may unsubscribe itself while responding.
    for (const handler of handlers.slice()) {
      handler(encoded)
    }
  }

  return {
    send(message: string) {
      worker.postMessage(JSON.parse(message))
    },
    subscribe(handler: (value: string) => void) {
      handlers.push(handler)
    },
    unsubscribe(handler: (value: string) => void) {
      handlers = handlers.filter(existing => existing !== handler)
    },
  }
}
