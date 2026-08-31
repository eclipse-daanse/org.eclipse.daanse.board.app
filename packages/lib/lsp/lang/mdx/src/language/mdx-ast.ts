import type { AstNode } from 'langium';
import type { AstTreeContext, AstTreeNode, AstTreeStrategy } from 'org.eclipse.daanse.board.app.lib.lsp.server';
import { argumentSlotCount, argumentSlotIndices, type ArgumentList } from './mdx-call-slots.js';

/**
 * What MDX adds to the shared parse-tree serializer.
 *
 * The walk itself lives in `org.eclipse.daanse.board.app.lib.lsp.core` and is language-neutral. The
 * one thing MDX cannot express through it is the argument list: skippable
 * argument slots mean the `arguments` array and the slots the author actually
 * wrote are different sequences, and the panel exists to show the second.
 *
 * MDX references are handled by the shared walker, which takes a `Reference`'s
 * text without reading `ref` — the linker has not run at `DocumentState.Parsed`
 * and MDX references mostly resolve against server metadata anyway, not the
 * document.
 */
function isArgumentList(node: AstNode): node is ArgumentList {
    return Array.isArray((node as { arguments?: unknown }).arguments);
}

/**
 * Children of an `arguments` array, with the slots the author actually wrote.
 *
 * `Fn(, , x)` parses to a single-element `arguments` array, so a faithful-
 * looking tree would put `x` at index 0 — a lie in exactly the place this
 * panel exists to inspect. The real indices come from the CST commas, and the
 * gaps become explicit placeholder rows.
 */
function serializeArguments(
    call: ArgumentList,
    parentId: string,
    context: AstTreeContext
): AstTreeNode[] {
    const indices = argumentSlotIndices(call);
    const slots: AstTreeNode[] = [];
    for (let slot = 0; slot < argumentSlotCount(call); slot++) {
        const position = indices.indexOf(slot);
        if (position === -1) {
            slots.push({
                id: `${parentId}.arguments.${slot}`,
                kind: 'empty',
                label: '(skipped)',
                property: 'arguments',
                index: slot,
                children: []
            });
        } else {
            slots.push(
                context.serializeNode(
                    call.arguments[position],
                    `${parentId}.arguments.${slot}`,
                    'arguments',
                    slot
                )
            );
        }
    }
    return slots;
}

/** Passed to `registerAstRequest` by both MDX entry points. */
export const MDX_AST_STRATEGY: AstTreeStrategy = {
    customProperty(node, property, _value, id, context) {
        if (property === 'arguments' && isArgumentList(node)) {
            return serializeArguments(node, id, context);
        }
        return undefined;
    }
};
