/**
 * The wire contract of the `langium/ast` request.
 *
 * Split out from `ast-tree.ts` because both sides of the worker boundary need
 * it and only one of them may pull in Langium. The serializer imports these
 * from here; so does the client in `lsp-client.ts`, which runs in the main
 * bundle where the grammar, the parser and the AST must never land.
 */
import type { Range } from 'vscode-languageserver-types';

/**
 * A serialized view of a parse tree, for the playground's syntax-tree panel.
 *
 * Shared by every language in this repository. What it exposes is what the
 * *parser* did: which grammar rule produced each node, and which property slot
 * of its parent it landed in. No standard LSP method can express both —
 * `DocumentSymbol` has nowhere to put either — which is why this is served over
 * a request of its own rather than over `documentSymbol`.
 *
 * The AST cannot be sent as-is. `$container` and `$cstNode` are cyclic and a
 * `Reference`'s `ref` points back into the tree, so every field is copied
 * explicitly rather than filtered out of a `JSON.stringify`.
 *
 * Language-specific behaviour goes in an `AstTreeStrategy`; see
 * each language package's AST strategy.
 */
export interface AstTreeNode {
    /**
     * Path from the root — `statements.0.axes.1.expression`.
     *
     * Unique, survives a missing CST node, and doubles as the source of the
     * row's property-slot label. Stable across re-serialisations of an
     * unchanged subtree, which is what keeps expansion state from resetting on
     * every keystroke.
     */
    id: string;
    /**
     * `node` — an AST node. `scalar` — a string, number or boolean property.
     * `reference` — a cross-reference, carrying its text only. `empty` — a slot
     * a strategy chose to render as a gap.
     */
    kind: 'node' | 'scalar' | 'reference' | 'empty';
    /** The grammar rule, for `node` rows; the property name otherwise. */
    label: string;
    /** The property slot in the parent. Absent on the root. */
    property?: string;
    /** Position within a multi-valued slot. */
    index?: number;
    /** The rendered value of a scalar or the text of a reference. */
    value?: string;
    range?: Range;
    offset?: number;
    length?: number;
    children: AstTreeNode[];
}

export interface AstTreeResult {
    uri: string;
    /** Absent when the document produced no root node at all. */
    root?: AstTreeNode;
    /**
     * Whether the parse hit errors. The tree is still built and still worth
     * showing — a broken parse is usually the thing being debugged — but the
     * panel marks itself stale rather than implying the tree is authoritative.
     */
    parserErrors: number;
}

/**
 * The request every language server in this repository answers.
 *
 * Deliberately outside the LSP namespace, so it collides with nothing Langium
 * binds. Deliberately language-neutral: MDX and DMV run as separate servers in
 * separate workers and never share a connection, so one name serves both and
 * the client keeps a single constant.
 */
export const AST_REQUEST = 'langium/ast';

export interface AstRequestParams {
    textDocument: { uri: string };
}
