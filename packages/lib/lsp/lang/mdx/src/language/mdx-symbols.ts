import type { AstNode, AstNodeDescription, LangiumDocument } from 'langium';
import { DefaultDocumentSymbolProvider, DefaultNodeKindProvider } from 'langium/lsp';
import { SymbolKind } from 'vscode-languageserver';
import type { DocumentSymbol, DocumentSymbolParams } from 'vscode-languageserver-protocol';

/**
 * The outline view of an MDX document.
 *
 * Langium's default `DocumentSymbolProvider` emits a symbol for every node that
 * has a `name` property and nothing else, which for this grammar means function
 * and method calls — the noise — while `SELECT`, `SCOPE` and the axes, the
 * structure someone actually navigates by, are invisible. It also stamps every
 * symbol `SymbolKind.Field`, so nothing can be told apart by icon.
 *
 * This replaces both: a fixed set of statement and declaration types get
 * symbols, everything else is skipped and its children spliced into the parent.
 *
 * Serving this over standard LSP rather than over the playground's `langium/ast`
 * request is what gives the VS Code extension an Outline view, breadcrumbs and
 * `Ctrl+Shift+O` without any client-side work.
 */
interface OutlineType {
    kind: SymbolKind;
    /** The row's primary text. */
    name: (node: AstNode) => string;
    /** Dimmed secondary text, where it adds something. */
    detail?: (node: AstNode) => string | undefined;
}

/** Reads a string-valued property without pulling in every node type. */
function text(node: AstNode, property: string): string | undefined {
    const value = (node as unknown as Record<string, unknown>)[property];
    return typeof value === 'string' ? value : undefined;
}

function count(node: AstNode, property: string): number {
    const value = (node as unknown as Record<string, unknown>)[property];
    return Array.isArray(value) ? value.length : 0;
}

/** `CREATE` and `DROP` carry the object kind as a property rather than a rule. */
const KIND_SYMBOLS: Record<string, SymbolKind> = {
    MEMBER: SymbolKind.Property,
    SET: SymbolKind.Array,
    KPI: SymbolKind.Event,
    SUBCUBE: SymbolKind.Namespace,
    CELL: SymbolKind.Event
};

function declaredKind(node: AstNode): SymbolKind {
    return KIND_SYMBOLS[text(node, 'kind') ?? ''] ?? SymbolKind.Object;
}

const OUTLINE: Record<string, OutlineType> = {
    SelectStatement: {
        kind: SymbolKind.Function,
        name: () => 'SELECT',
        detail: (node) => {
            const axes = count(node, 'axes');
            return axes === 1 ? '1 axis' : `${axes} axes`;
        }
    },
    DrillthroughStatement: { kind: SymbolKind.Function, name: () => 'DRILLTHROUGH' },
    ExplainStatement: { kind: SymbolKind.Function, name: () => 'EXPLAIN PLAN' },
    RefreshStatement: { kind: SymbolKind.Function, name: () => 'REFRESH CUBE' },
    UpdateStatement: { kind: SymbolKind.Function, name: () => 'UPDATE CUBE' },
    CalculateStatement: { kind: SymbolKind.Function, name: () => 'CALCULATE' },
    CallStatement: { kind: SymbolKind.Function, name: () => 'CALL' },
    FreezeStatement: { kind: SymbolKind.Function, name: () => 'FREEZE' },

    ScopeStatement: {
        kind: SymbolKind.Namespace,
        name: () => 'SCOPE',
        detail: (node) => {
            const statements = count(node, 'body');
            return statements === 1 ? '1 statement' : `${statements} statements`;
        }
    },
    Assignment: { kind: SymbolKind.Variable, name: () => 'This =' },

    CreateStatement: {
        kind: SymbolKind.Object,
        name: (node) => text(node, 'name') ?? 'CREATE',
        detail: (node) => {
            const modifiers = ['session', 'global', 'hidden', 'calculated'].filter(
                (flag) => (node as unknown as Record<string, unknown>)[flag] === true
            );
            return ['CREATE', ...modifiers.map((flag) => flag.toUpperCase()), text(node, 'kind')]
                .filter(Boolean)
                .join(' ');
        }
    },
    DropStatement: {
        kind: SymbolKind.Operator,
        name: (node) => `DROP ${text(node, 'kind') ?? ''}`.trim(),
        detail: (node) => {
            const targets = (node as unknown as { targets?: unknown }).targets;
            return Array.isArray(targets) ? targets.join(', ') : undefined;
        }
    },

    WithMember: {
        kind: SymbolKind.Property,
        name: (node) => text(node, 'name') ?? 'MEMBER',
        detail: () => 'WITH MEMBER'
    },
    WithSet: {
        kind: SymbolKind.Array,
        name: (node) => text(node, 'name') ?? 'SET',
        detail: () => 'WITH SET'
    },
    WithCellCalculation: {
        kind: SymbolKind.Event,
        name: (node) => text(node, 'name') ?? 'CELL CALCULATION',
        detail: () => 'WITH CELL CALCULATION'
    },
    WithMeasure: { kind: SymbolKind.Number, name: () => 'MEASURE', detail: () => 'WITH MEASURE' },

    AxisClause: {
        kind: SymbolKind.Key,
        name: (node) => {
            const target = (node as unknown as { target?: AstNode }).target;
            return (target && text(target, 'name')) ?? 'AXIS';
        },
        detail: (node) =>
            (node as unknown as Record<string, unknown>).nonEmpty === true ? 'NON EMPTY' : undefined
    }
};

export class MdxNodeKindProvider extends DefaultNodeKindProvider {
    override getSymbolKind(node: AstNode | AstNodeDescription): SymbolKind {
        const type = 'type' in node && typeof node.type === 'string' ? node.type : (node as AstNode).$type;
        if (type === 'CreateStatement' || type === 'DropStatement') {
            return '$type' in node ? declaredKind(node as AstNode) : SymbolKind.Object;
        }
        return OUTLINE[type]?.kind ?? super.getSymbolKind(node);
    }
}

export class MdxDocumentSymbolProvider extends DefaultDocumentSymbolProvider {
    protected override getSymbol(document: LangiumDocument, astNode: AstNode): DocumentSymbol[] {
        const outline = OUTLINE[astNode.$type];
        const cstNode = astNode.$cstNode;
        if (!outline || !cstNode) {
            // Not a navigable node: skip it, but keep whatever is inside it.
            return this.getChildSymbols(document, astNode) ?? [];
        }
        // `selectionRange` is what the editor selects on click; the name node
        // when the node has one, otherwise the node's own span.
        const nameNode = this.nameProvider.getNameNode(astNode) ?? cstNode;
        return [
            {
                kind: this.nodeKindProvider.getSymbolKind(astNode),
                name: outline.name(astNode),
                detail: outline.detail?.(astNode),
                range: cstNode.range,
                selectionRange: nameNode.range,
                children: this.getChildSymbols(document, astNode) ?? []
            }
        ];
    }

    override getSymbols(
        document: LangiumDocument,
        params: DocumentSymbolParams,
        cancelToken?: Parameters<DefaultDocumentSymbolProvider['getSymbols']>[2]
    ): DocumentSymbol[] {
        void params;
        void cancelToken;
        const root = document.parseResult.value as AstNode | undefined;
        return root ? this.getSymbol(document, root) : [];
    }
}
