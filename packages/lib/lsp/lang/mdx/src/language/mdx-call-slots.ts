import { CstUtils, isLeafCstNode, type AstNode } from 'langium';

/**
 * A node whose grammar rule takes a comma-separated argument list —
 * `FunctionCall` and `MethodCall`.
 */
export type ArgumentList = AstNode & { arguments: AstNode[] };

/**
 * Offsets of the commas separating *this* call's arguments, in source order.
 *
 * `astNode` is what separates this call's separators from a nested call's:
 * every CST node reports the AST node it was built for, and a comma inside
 * `Sum(a, Fn(b, c))` belongs to `Fn`, not to `Sum`.
 *
 * Returns undefined when the call has no CST node, which happens for nodes
 * synthesised by error recovery.
 */
function separatorOffsets(call: ArgumentList): number[] | undefined {
    const cst = call.$cstNode;
    if (!cst) {
        return undefined;
    }
    return CstUtils.streamCst(cst)
        .filter((node) => isLeafCstNode(node) && node.text === ',' && node.astNode === call)
        .map((node) => node.offset)
        .toArray()
        .sort((left, right) => left - right);
}

/**
 * How many argument *slots* a call was written with.
 *
 * A skipped argument (`ParallelPeriod(, , [Date].[Month])`) parses but produces
 * no element in `arguments`, so the array undercounts. The separators are still
 * in the CST, so the slot count is one more than the number of commas.
 */
export function argumentSlotCount(call: ArgumentList): number {
    const separators = separatorOffsets(call);
    if (!separators) {
        return call.arguments.length;
    }
    // No slots at all (`Fn()`) rather than one empty slot.
    return separators.length === 0 && call.arguments.length === 0 ? 0 : separators.length + 1;
}

/**
 * The slot each element of `arguments` actually occupies in the source.
 *
 * For `Fn(, , x)` this is `[2]`: the single parsed argument sits in slot three.
 * Falls back to positional indices when ranges are unavailable.
 */
export function argumentSlotIndices(call: ArgumentList): number[] {
    const separators = separatorOffsets(call);
    if (!separators) {
        return call.arguments.map((_, index) => index);
    }
    return call.arguments.map((argument, index) => {
        const offset = argument.$cstNode?.offset;
        if (offset === undefined) {
            return index;
        }
        return separators.filter((separator) => separator < offset).length;
    });
}
