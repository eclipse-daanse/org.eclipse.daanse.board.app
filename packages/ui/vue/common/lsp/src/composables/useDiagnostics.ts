import { onBeforeUnmount, ref, shallowRef, type Ref } from 'vue';
import { forEachDiagnostic, type Diagnostic } from '@codemirror/lint';
import type { EditorView } from '@codemirror/view';

export interface DiagnosticEntry {
    readonly severity: 'error' | 'warning' | 'info' | 'hint';
    readonly message: string;
    readonly line: number;
    readonly column: number;
}

/**
 * Mirrors the language server's diagnostics for the active editor into
 * reactive state.
 *
 * There is no second validation path: `@codemirror/lsp-client` feeds
 * `textDocument/publishDiagnostics` into `@codemirror/lint`'s state field, and
 * this reads that same field via `forEachDiagnostic`. What the panel lists is
 * exactly what produced the underlines.
 *
 * Unlike the Monaco build there is no global diagnostics registry to subscribe
 * to, so the editor drives this: `Editor.vue` calls `refresh(view)` from its
 * `updateListener` whenever the document or state changes.
 */
export function useDiagnostics() {
    const diagnostics = ref<DiagnosticEntry[]>([]);
    const view = shallowRef<EditorView | null>(null);

    function refresh(source?: EditorView | null): void {
        const target = source ?? view.value;
        if (source) {
            view.value = source;
        }
        if (!target) {
            diagnostics.value = [];
            return;
        }

        const collected: DiagnosticEntry[] = [];
        forEachDiagnostic(target.state, (diagnostic: Diagnostic, from: number) => {
            const line = target.state.doc.lineAt(from);
            collected.push({
                severity: diagnostic.severity,
                message: diagnostic.message,
                line: line.number,
                column: from - line.from + 1
            });
        });
        collected.sort((a, b) => a.line - b.line || a.column - b.column);
        diagnostics.value = collected;
    }

    function clear(): void {
        view.value = null;
        diagnostics.value = [];
    }

    onBeforeUnmount(clear);

    return { diagnostics, refresh, clear } satisfies {
        diagnostics: Ref<DiagnosticEntry[]>;
        refresh: (source?: EditorView | null) => void;
        clear: () => void;
    };
}
