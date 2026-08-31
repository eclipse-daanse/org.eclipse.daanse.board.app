/**
 * What a language package hands its consumer.
 *
 * The one contract between `@olap-editor/lang-*` and everything that renders
 * them. UI components take a descriptor as a prop and never import a language
 * package, so adding a language is a new package plus one import in the
 * application that chooses it — not an edit to the editor.
 *
 * `createServerWorker` is the reason this is an object of functions rather
 * than data. Worker URL resolution is bundler-specific; each language package
 * owns that detail behind this call so no consumer has to know it.
 */
import type { LanguageSupport } from '@codemirror/language';

export interface LanguageExample {
    /** Stable across renames; what a picker keys its selection off. */
    id: string;
    /** Shown in the example picker. */
    label: string;
    /** One line, under the label. */
    description: string;
    /** File name, whose extension decides which server sees the document. */
    fileName: string;
    text: string;
}

export interface LanguageDescriptor {
    /** Matches the `id` in the package's `langium-config.json`. */
    id: string;
    /** Shown on a language switcher. */
    label: string;
    /** One line, for the switcher's tooltip. */
    description: string;
    /**
     * Document URIs must end in one of these for the server to see them; the
     * first is the default for new documents.
     */
    extensions: string[];
    /** CodeMirror highlighting. Tokenizing only — the real parse is the server's. */
    support: () => LanguageSupport;
    /**
     * Spawns the language server worker. Called once per language, on first
     * use; the client is shared by every editor thereafter.
     */
    createServerWorker: () => Worker;
    /** Sample documents, offered by the application that mounts the editor. */
    examples?: LanguageExample[];
    /**
     * Whether the server implements a document-symbol provider worth showing
     * as an outline. Langium's default emits a row per named node, which for
     * some grammars is worse than no outline at all.
     */
    hasOutline?: boolean;
}

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
 * bundler-specific (`?worker&url` under Vite), and keeping that line there is
 * what spares every consumer from knowing it.
 */
export function defineLanguage(
    options: Omit<LanguageDescriptor, 'createServerWorker'> & {
        /** The bundler-resolved URL of the worker entry. */
        serverWorkerUrl: string;
    }
): LanguageDescriptor {
    const { serverWorkerUrl, ...rest } = options;
    return {
        ...rest,
        createServerWorker: () =>
            new Worker(serverWorkerUrl, { type: 'module', name: `${rest.label} Language Server` })
    };
}
