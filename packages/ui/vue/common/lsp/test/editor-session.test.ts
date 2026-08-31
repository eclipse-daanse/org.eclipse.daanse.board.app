/**
 * The two wires between the tree panel and the editor.
 *
 * `AstTreePanel` navigates *to* the editor through `revealRange`, and follows
 * the caret *back* through `cursorPosition`. Both run through the view the
 * host hands the session, and both silently do nothing when it was never
 * handed over — which is exactly what happened after the CodeMirror move:
 * `setView` existed, and nobody called it, so clicking any row in either mode
 * was a no-op and the tree never followed the caret.
 *
 * A real `EditorView` needs a DOM. The view is stubbed instead: the session
 * only reads `state` and calls `dispatch`, so the offset arithmetic is what
 * these tests are really about.
 */
import { describe, expect, test } from 'vitest';
import { EditorState } from '@codemirror/state';
import type { EditorView } from '@codemirror/view';
import { createEditorSession } from '../src/state/editor-session.js';
import type { LanguageDescriptor } from 'org.eclipse.daanse.board.app.lib.lsp.core';

const LANGUAGE = {
    id: 'test',
    label: 'Test',
    description: '',
    extensions: ['.test'],
    support: () => [] as never,
    createServerWorker: () => undefined as never
} as unknown as LanguageDescriptor;

interface Dispatched {
    selection?: { anchor: number; head: number };
    scrollIntoView?: boolean;
}

function stubView(doc: string, cursor = 0) {
    const dispatched: Dispatched[] = [];
    const view = {
        state: EditorState.create({ doc, selection: { anchor: cursor } }),
        dispatch: (spec: Dispatched) => dispatched.push(spec)
    };
    return { view: view as unknown as EditorView, dispatched };
}

function session() {
    return createEditorSession({ language: LANGUAGE, uri: 'file:///q.test', text: '' });
}

const DOC = 'SELECT\n  [Measures].[Unit Sales]\nFROM [Sales]';

describe('revealRange', () => {
    test('does nothing when no view has been handed over', () => {
        const s = session();
        // The regression: no throw, no complaint, just silence.
        expect(() => s.revealRange({ start: { line: 0, character: 0 }, end: { line: 0, character: 6 } })).not.toThrow();
    });

    test('selects the range, converting LSP line/character to offsets', () => {
        const s = session();
        const { view, dispatched } = stubView(DOC);
        s.setView(view);
        s.revealRange({ start: { line: 1, character: 2 }, end: { line: 1, character: 12 } });
        expect(dispatched).toHaveLength(1);
        expect(dispatched[0].selection).toEqual({ anchor: 9, head: 19 });
        expect(dispatched[0].scrollIntoView).toBe(true);
        expect(DOC.slice(9, 19)).toBe('[Measures]');
    });

    test('clamps a character past the end of its line', () => {
        const s = session();
        const { view, dispatched } = stubView(DOC);
        s.setView(view);
        s.revealRange({ start: { line: 0, character: 0 }, end: { line: 0, character: 999 } });
        // Line 0 is `SELECT`; without the clamp this would run into line 1 and
        // CodeMirror would reject the selection outright.
        expect(dispatched[0].selection).toEqual({ anchor: 0, head: 6 });
    });

    test('ignores a line past the end of the document', () => {
        const s = session();
        const { view, dispatched } = stubView(DOC);
        s.setView(view);
        s.revealRange({ start: { line: 99, character: 0 }, end: { line: 99, character: 1 } });
        expect(dispatched).toEqual([]);
    });
});

describe('cursorPosition', () => {
    test('is null until a view arrives', () => {
        expect(session().cursorPosition.value).toBeNull();
    });

    test('is derived from the view the host hands over', () => {
        const s = session();
        // Offset 9 is the `[` of `[Measures]` on line 1.
        s.setView(stubView(DOC, 9).view);
        expect(s.cursorPosition.value).toEqual({ line: 1, character: 2 });
    });

    test('tracks the caret across updates', () => {
        const s = session();
        s.setView(stubView(DOC, 0).view);
        expect(s.cursorPosition.value).toEqual({ line: 0, character: 0 });
        // Offset 33 is the `F` of `FROM`, the first character of line 2.
        s.setView(stubView(DOC, 33).view);
        expect(s.cursorPosition.value).toEqual({ line: 2, character: 0 });
        s.setView(stubView(DOC, 38).view);
        expect(s.cursorPosition.value).toEqual({ line: 2, character: 5 });
    });

    test('keeps the same object when the caret has not moved', () => {
        const s = session();
        s.setView(stubView(DOC, 9).view);
        const first = s.cursorPosition.value;
        // The editor emits an update per keystroke; a fresh object each time
        // would wake the tree's caret watcher when nothing had moved.
        s.setView(stubView(DOC, 9).view);
        expect(s.cursorPosition.value).toBe(first);
    });

    test('clears when the view goes away', () => {
        const s = session();
        s.setView(stubView(DOC, 9).view);
        s.setView(undefined);
        expect(s.cursorPosition.value).toBeNull();
    });
});
