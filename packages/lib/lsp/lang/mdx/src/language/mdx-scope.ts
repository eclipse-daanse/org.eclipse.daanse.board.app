import {
    DefaultScopeProvider,
    EMPTY_SCOPE,
    stream,
    type AstNode,
    type AstNodeDescription,
    type ReferenceInfo,
    type Scope,
    type Stream
} from 'langium';
import {
    isCreateStatement,
    isMdxScript,
    isScopeStatement,
    isSelectStatement,
    isWithMember,
    isWithSet,
    type Declaration
} from './generated/ast.js';
import { normalizeMemberPath, splitMemberPath } from './mdx-member-path.js';

/**
 * A scope that compares member paths after normalisation.
 *
 * Langium's built-in `caseInsensitive` scope option only lowercases; MDX also
 * needs the whitespace around a `.` separator collapsed.
 */
class MemberPathScope implements Scope {
    private readonly elements = new Map<string, AstNodeDescription>();

    constructor(
        descriptions: Iterable<AstNodeDescription>,
        private readonly outerScope?: Scope
    ) {
        for (const description of descriptions) {
            const key = normalizeMemberPath(description.name);
            // Declarations arrive innermost-first, so the first wins: a
            // query-scoped definition shadows a session-scoped one.
            if (!this.elements.has(key)) {
                this.elements.set(key, description);
            }
        }
    }

    getElement(name: string): AstNodeDescription | undefined {
        return this.elements.get(normalizeMemberPath(name)) ?? this.outerScope?.getElement(name);
    }

    getElements(name: string): Stream<AstNodeDescription> {
        const own = this.elements.get(normalizeMemberPath(name));
        const outer = this.outerScope?.getElements(name) ?? stream<AstNodeDescription>([]);
        return own ? stream([own]).concat(outer) : outer;
    }

    getAllElements(): Stream<AstNodeDescription> {
        const own = stream(this.elements.values());
        return this.outerScope ? own.concat(this.outerScope.getAllElements()) : own;
    }
}

/**
 * Resolves references to names declared *in the file*.
 *
 * Cube, dimension, hierarchy, level and member names live in server metadata,
 * so the overwhelming majority of member paths cannot be resolved from source
 * and are left unlinked on purpose (see `MdxDocumentValidator`, which drops
 * linking errors). What this provider does resolve:
 *
 *   - `WITH MEMBER` / `WITH SET` names, visible throughout their SELECT,
 *     including its subselects;
 *   - `CREATE MEMBER` / `CREATE SET` / `CREATE KPI` names, visible for the
 *     remainder of the script and inside nested SCOPE blocks.
 */
export class MdxScopeProvider extends DefaultScopeProvider {
    override getScope(context: ReferenceInfo): Scope {
        // `member` is a bare NameReference; `segment` the tail of a member path.
        if (context.property !== 'member' && context.property !== 'segment') {
            return EMPTY_SCOPE;
        }
        const descriptions: AstNodeDescription[] = [];
        for (const declaration of this.visibleDeclarations(context.container)) {
            const name = declaration.name;
            if (!name) {
                continue;
            }
            descriptions.push(this.descriptions.createDescription(declaration, name));
            // A declaration is also reachable by its final segment: a reference
            // to `[Measures].[PCT Discount]` reaches the linker as a
            // MemberAccess whose reference text is just `[PCT Discount]`.
            const segments = splitMemberPath(name);
            const last = segments[segments.length - 1];
            if (last && last !== name) {
                descriptions.push(this.descriptions.createDescription(declaration, last));
            }
        }
        return new MemberPathScope(descriptions);
    }

    /**
     * Declarations visible from `node`, innermost container first.
     */
    protected visibleDeclarations(node: AstNode): Declaration[] {
        const result: Declaration[] = [];
        for (const container of containerChain(node)) {
            if (isSelectStatement(container)) {
                for (const clause of container.with) {
                    if (isWithMember(clause) || isWithSet(clause)) {
                        result.push(clause);
                    }
                }
            } else if (isMdxScript(container)) {
                collectCreateStatements(container.statements, result);
            } else if (isScopeStatement(container)) {
                collectCreateStatements(container.body, result);
            }
        }
        return result;
    }
}

function collectCreateStatements(statements: readonly AstNode[], target: Declaration[]): void {
    for (const statement of statements) {
        if (isCreateStatement(statement) && statement.name) {
            target.push(statement);
        }
    }
}

function containerChain(node: AstNode): AstNode[] {
    const chain: AstNode[] = [];
    let current: AstNode | undefined = node;
    while (current) {
        chain.push(current);
        current = current.$container;
    }
    return chain;
}
