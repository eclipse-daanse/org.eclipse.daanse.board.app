import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap } from '@codemirror/autocomplete';
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import {
    bracketMatching,
    foldGutter,
    foldKeymap,
    indentOnInput,
    indentUnit
} from '@codemirror/language';
import { lintGutter, lintKeymap } from '@codemirror/lint';
import { languageServerSupport } from '@codemirror/lsp-client';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { EditorState, type Extension } from '@codemirror/state';
import {
    EditorView,
    drawSelection,
    dropCursor,
    highlightActiveLine,
    highlightActiveLineGutter,
    highlightSpecialChars,
    keymap,
    lineNumbers,
    rectangularSelection
} from '@codemirror/view';
import { startLanguageClient, type LanguageDescriptor } from 'org.eclipse.daanse.board.app.lib.lsp.core';
import { toFileUri } from '../state/editor-session.js';
import { editorTheme } from './theme.js';

export interface EditorHandle {
    readonly view: EditorView;
    /** Replaces the document and repoints the language server at a new URI. */
    setDocument(language: LanguageDescriptor, uri: string, text: string): Promise<void>;
    destroy(): void;
}

/**
 * Builds the editor's extension set for one document.
 *
 * `languageServerSupport(client, uri, languageID)` is what ties this editor to
 * the Langium server: it opens the document on the server, keeps it in sync,
 * and wires up the LSP-backed completion, diagnostics, hover, definitions and
 * rename that `languageServerExtensions()` registered on the client.
 *
 * Which language this is comes entirely from the descriptor. Nothing here
 * imports a language package, which is what lets a consumer add a language
 * without touching the editor.
 *
 * The URI must carry one of the descriptor's extensions — Langium's
 * `ServiceRegistry` picks the language by file extension, not by the
 * `languageId` field — or the server will not recognise the document.
 */
function extensionsFor(
    language: LanguageDescriptor,
    uri: string,
    client: Parameters<typeof languageServerSupport>[0],
    extra: Extension[]
): Extension[] {
    return [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        history(),
        foldGutter(),
        drawSelection(),
        dropCursor(),
        EditorState.allowMultipleSelections.of(true),
        indentOnInput(),
        indentUnit.of('    '),
        bracketMatching(),
        closeBrackets(),
        rectangularSelection(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        lintGutter(),
        keymap.of([
            ...closeBracketsKeymap,
            ...defaultKeymap,
            ...searchKeymap,
            ...historyKeymap,
            ...foldKeymap,
            ...completionKeymap,
            ...lintKeymap,
            indentWithTab
        ]),

        // One language per editor. The theme is shared: every language package
        // emits the same token categories.
        language.support(),
        editorTheme(),

        autocompletion({ activateOnTyping: true }),

        // Whatever the consumer attaches — the playground supplies cube
        // metadata completion from the same cache its sidebar reads. Passed in
        // rather than imported, because that source needs a cube connection
        // and this package has no business knowing about one. CodeMirror
        // merges extra sources with the LSP's own rather than replacing it,
        // which is what keeps grammar keywords and metadata in one list.
        ...extra,

        languageServerSupport(client, toFileUri(uri), language.id)
    ];
}

/**
 * Creates an editor bound to `parent`, starting the language server on the
 * first call for that language and reusing it thereafter.
 */
export async function createEditor(options: {
    parent: HTMLElement;
    language: LanguageDescriptor;
    uri: string;
    text: string;
    /** Extra CodeMirror extensions, appended before the LSP binding. */
    extensions?: Extension[];
    onUpdate?: (view: EditorView, docChanged: boolean) => void;
}): Promise<EditorHandle> {
    const extra = options.extensions ?? [];
    let client = await startLanguageClient(options.language);

    const listener = EditorView.updateListener.of((update) => {
        // Diagnostics arrive as a state-field change rather than a doc change,
        // so this cannot be narrowed to `update.docChanged` — the caller is
        // told which kind it was instead.
        options.onUpdate?.(update.view, update.docChanged);
    });

    let view = new EditorView({
        parent: options.parent,
        state: EditorState.create({
            doc: options.text,
            extensions: [...extensionsFor(options.language, options.uri, client, extra), listener]
        })
    });

    return {
        get view() {
            return view;
        },
        /**
         * Swapping documents means swapping the URI the language server knows
         * about. `languageServerSupport` binds a URI at construction time, so
         * the editor is rebuilt rather than reconfigured — the server
         * connection itself is untouched, only `didClose`/`didOpen` are
         * exchanged. Switching language switches server too, so the client is
         * re-resolved from the new descriptor first.
         */
        async setDocument(language: LanguageDescriptor, uri: string, text: string) {
            client = await startLanguageClient(language);
            const parent = view.dom.parentElement!;
            view.destroy();
            view = new EditorView({
                parent,
                state: EditorState.create({
                    doc: text,
                    extensions: [...extensionsFor(language, uri, client, extra), listener]
                })
            });
        },
        destroy() {
            view.destroy();
        }
    };
}
