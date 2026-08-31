import {
    DocumentState,
    GrammarUtils,
    URI,
    isAstNode,
    isReference,
    type AstNode,
    type CstNode,
    type LangiumDocument
} from 'langium';
import type { LangiumSharedServices } from 'langium/lsp';
import type { CancellationToken, Connection } from 'vscode-languageserver';
import {
    AST_REQUEST,
    type AstRequestParams,
    type AstTreeNode,
    type AstTreeResult
} from 'org.eclipse.daanse.board.app.lib.lsp.core';

export type { AstRequestParams, AstTreeNode, AstTreeResult } from 'org.eclipse.daanse.board.app.lib.lsp.core';
export { AST_REQUEST } from 'org.eclipse.daanse.board.app.lib.lsp.core';

/** Re-entry into the walker, for strategies that build rows of their own. */
export interface AstTreeContext {
    serializeNode(node: AstNode, id: string, property?: string, index?: number): AstTreeNode;
}

/**
 * Language-specific overrides.
 *
 * Only `customProperty` currently has a caller — MDX's argument slots. The
 * other two are speculative: nothing overrides them today and no test
 * exercises them, so treat their shape as unproven until something needs one.
 */
export interface AstTreeStrategy {
    /**
     * Replaces the default handling of one property.
     *
     * Return the rows for that property, or `undefined` to fall through to the
     * default walk. MDX uses this to rebuild skipped argument slots from the
     * CST commas.
     */
    customProperty?(
        node: AstNode,
        property: string,
        value: unknown,
        id: string,
        context: AstTreeContext
    ): AstTreeNode[] | undefined;
    /** Renders a scalar property's value. Defaults to `renderScalar` below. */
    renderScalar?(value: unknown): string;
    /** Labels a node row. Defaults to the node's `$type`. */
    labelNode?(node: AstNode): string;
}

/** Copies the fields of a CST node that can cross a `postMessage` boundary. */
function locate(cst: CstNode | undefined): Pick<AstTreeNode, 'range' | 'offset' | 'length'> {
    if (!cst) {
        // Error recovery synthesises nodes with no CST node at all.
        return {};
    }
    return { range: cst.range, offset: cst.offset, length: cst.length };
}

/**
 * Strings are quoted, everything else is stringified.
 *
 * The quoting is load-bearing on the client: `ui/src/state/cube-scope.ts`
 * `JSON.parse`s these back to tell a string scalar from a numeric one when it
 * reads cube names out of the tree.
 */
export function renderScalar(value: unknown): string {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
}

/**
 * Builds the serializer for one strategy.
 *
 * A closure rather than a class: the three functions are mutually recursive and
 * every one of them needs the strategy, which makes threading it through
 * parameters noisier than capturing it once.
 */
function createSerializer(strategy: AstTreeStrategy): AstTreeContext {
    const scalar = strategy.renderScalar ?? renderScalar;
    const label = strategy.labelNode ?? ((node: AstNode) => node.$type);

    /**
     * Walks one node's properties.
     *
     * `AstUtils.streamContents` would find the child nodes, but it yields a
     * bare `Stream<AstNode>` with no property name or index — and the property
     * slot is the whole point here — so the properties are walked directly.
     * Order follows the generated interface rather than the source text.
     */
    function serializeChildren(node: AstNode, id: string): AstTreeNode[] {
        const children: AstTreeNode[] = [];
        for (const [property, value] of Object.entries(node)) {
            if (property.startsWith('$')) {
                // `$container`, `$document` and `$cstNode` are all cyclic.
                continue;
            }
            const custom = strategy.customProperty?.(node, property, value, id, context);
            if (custom) {
                children.push(...custom);
                continue;
            }
            if (Array.isArray(value)) {
                value.forEach((element, index) => {
                    children.push(
                        serializeValue(node, element, `${id}.${property}.${index}`, property, index)
                    );
                });
                continue;
            }
            if (value === undefined || value === null) {
                continue;
            }
            children.push(serializeValue(node, value, `${id}.${property}`, property, undefined));
        }
        return children;
    }

    function serializeValue(
        owner: AstNode,
        value: unknown,
        id: string,
        property: string,
        index: number | undefined
    ): AstTreeNode {
        if (isReference(value)) {
            // At `DocumentState.Parsed` the linker has not run, and reading
            // `ref` would force it. Only the text is taken.
            return {
                id,
                kind: 'reference',
                label: property,
                property,
                index,
                value: value.$refText,
                ...locate(value.$refNode),
                children: []
            };
        }
        if (isAstNode(value)) {
            return serializeNode(value, id, property, index);
        }
        return {
            id,
            kind: 'scalar',
            label: property,
            property,
            index,
            value: scalar(value),
            // Datatype rules are plain strings with no AST node of their own,
            // but they do have a CST node, so a name row can still be clicked
            // through to its source.
            ...locate(GrammarUtils.findNodeForProperty(owner.$cstNode, property, index)),
            children: []
        };
    }

    function serializeNode(
        node: AstNode,
        id: string,
        property?: string,
        index?: number
    ): AstTreeNode {
        return {
            id,
            kind: 'node',
            label: label(node),
            property,
            index,
            ...locate(node.$cstNode),
            children: serializeChildren(node, id)
        };
    }

    const context: AstTreeContext = { serializeNode };
    return context;
}

/** Serializes a parsed document. Safe on a partial parse. */
export function buildAstTree(document: LangiumDocument, strategy: AstTreeStrategy = {}): AstTreeResult {
    const root = document.parseResult.value as AstNode | undefined;
    const { serializeNode } = createSerializer(strategy);
    return {
        uri: document.uri.toString(),
        root: root ? serializeNode(root, 'root') : undefined,
        parserErrors: document.parseResult.parserErrors.length
    };
}

/**
 * Registers `langium/ast` on a connection.
 *
 * Must be called before `startLanguageServer`, which calls
 * `connection.listen()` once it has registered its own handlers.
 */
export function registerAstRequest(
    connection: Connection,
    shared: LangiumSharedServices,
    strategy: AstTreeStrategy = {}
): void {
    connection.onRequest(
        AST_REQUEST,
        async (params: AstRequestParams, cancelToken: CancellationToken): Promise<AstTreeResult> => {
            const uri = URI.parse(params.textDocument.uri);
            const document = await shared.workspace.LangiumDocuments.getOrCreateDocument(uri);
            // `Parsed` rather than `Linked`: the tree is wanted even when the
            // document is mid-edit and nothing links, and the panel does not
            // show resolution state anyway.
            await shared.workspace.DocumentBuilder.waitUntil(DocumentState.Parsed, uri, cancelToken);
            return buildAstTree(document, strategy);
        }
    );
}
