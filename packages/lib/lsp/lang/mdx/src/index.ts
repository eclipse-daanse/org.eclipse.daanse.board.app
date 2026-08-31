/**
 * The MDX language package.
 *
 * Everything a consumer needs to edit MDX is behind `MDX_LANGUAGE`: the
 * highlighting, the examples, and the call that spawns the language server.
 * Nothing else in this file's import graph reaches the grammar or the parser —
 * those live in `./language`, and only the worker pulls them in.
 */
import { defineLanguage } from 'org.eclipse.daanse.board.app.lib.lsp.core';
import { MDX_EXAMPLES } from './examples.js';
import { MDX_FILE_EXTENSIONS, MDX_LANGUAGE_ID, mdx } from './mdx-stream-language.js';

// The worker is built separately (see vite.worker.config.ts) into this
// package's own dist as a self-contained chunk, so it carries Langium and the
// grammar with it and never resolves a bare import at runtime. Resolving it
// against this module's URL keeps the one bundler-specific line inside the
// language package, which is why the descriptor takes a URL and not a Worker.
const serverWorkerUrl = new URL('./mdx-server.worker.js', import.meta.url).href;

export const MDX_LANGUAGE = defineLanguage({
    id: MDX_LANGUAGE_ID,
    label: 'MDX',
    description: 'Multidimensional Expressions — queries and cube scripts',
    extensions: MDX_FILE_EXTENSIONS,
    support: mdx,
    serverWorkerUrl,
    examples: MDX_EXAMPLES,
    // `MdxDocumentSymbolProvider` narrows symbols to statements and
    // declarations worth navigating by.
    hasOutline: true
});

export { MDX_EXAMPLES } from './examples.js';
export { MDX_FILE_EXTENSIONS, MDX_LANGUAGE_ID, mdx, mdxStreamLanguage } from './mdx-stream-language.js';
export { parseMdxCompletionContext } from './mdx-reference-parser.js';
export type { MdxCompletionContext, WordRange } from './mdx-reference-parser.js';
