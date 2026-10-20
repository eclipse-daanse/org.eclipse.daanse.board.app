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

import { onBeforeUnmount, ref, shallowRef, type Ref } from 'vue'
import { forEachDiagnostic, type Diagnostic } from '@codemirror/lint'
import type { EditorView } from '@codemirror/view'

export interface DiagnosticEntry {
  readonly severity: 'error' | 'warning' | 'info' | 'hint'
  readonly message: string
  readonly line: number
  readonly column: number
}

export function useDiagnostics() {
  const diagnostics = ref<DiagnosticEntry[]>([])
  const view = shallowRef<EditorView | null>(null)

  function refresh(source?: EditorView | null): void {
    const target = source ?? view.value
    if (source) {
      view.value = source
    }
    if (!target) {
      diagnostics.value = []
      return
    }

    const collected: DiagnosticEntry[] = []
    forEachDiagnostic(target.state, (diagnostic: Diagnostic, from: number) => {
      const line = target.state.doc.lineAt(from)
      collected.push({
        severity: diagnostic.severity,
        message: diagnostic.message,
        line: line.number,
        column: from - line.from + 1,
      })
    })
    collected.sort((a, b) => a.line - b.line || a.column - b.column)
    diagnostics.value = collected
  }

  function clear(): void {
    view.value = null
    diagnostics.value = []
  }

  onBeforeUnmount(clear)

  return { diagnostics, refresh, clear } satisfies {
    diagnostics: Ref<DiagnosticEntry[]>
    refresh: (source?: EditorView | null) => void
    clear: () => void
  }
}
