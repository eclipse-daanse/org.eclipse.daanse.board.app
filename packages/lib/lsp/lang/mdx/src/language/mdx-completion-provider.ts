import type { LangiumDocument } from 'langium';
import { DefaultCompletionProvider } from 'langium/lsp';
import {
    CompletionItemKind,
    CompletionList,
    InsertTextFormat,
    Range,
    TextEdit,
    type CancellationToken,
    type CompletionItem,
    type CompletionParams
} from 'vscode-languageserver';
import {
    functionDisplayName,
    functionNames,
    lookupFunction,
    type MdxFunctionCategory,
    type MdxFunctionSignature
} from './mdx-functions.js';

/**
 * Adds the intrinsic MDX functions to completion.
 *
 * The grammar parses calls generically (`Name(args)`), so function names are
 * not part of it and Langium's default provider — which proposes keywords and
 * cross-references — cannot know them. They live in `mdx-functions.ts`, which
 * the validator already uses for arity checking, so contributing them here
 * keeps one table behind both.
 *
 * Serving this from the language server rather than from the playground's own
 * provider means the VS Code extension gets it too, and the table never has to
 * cross the worker boundary into the browser bundle.
 */

/**
 * What may follow a `.`.
 *
 * Postfix position takes the continuations of a member — `.Parent`,
 * `.CurrentMember`, `.UniqueName` — not calls like `Sum` or `Filter`.
 * `metadata` is included alongside navigation and member because `.Name`,
 * `.Level` and `.UniqueName` are all in it, and `Members` is allowed through
 * by name: it is categorised as a set function but `.Members` is one of the
 * most-typed things in MDX.
 */
const POSTFIX_CATEGORIES = new Set<MdxFunctionCategory>(['navigation', 'member', 'metadata']);
const POSTFIX_EXTRAS = new Set(['MEMBERS']);

function allowedInPostfix(name: string, signature: MdxFunctionSignature): boolean {
    return POSTFIX_CATEGORIES.has(signature.category) || POSTFIX_EXTRAS.has(name);
}

/** `1 arg`, `1–2 args`, `2+ args`, or none at all. */
function arityLabel(signature: MdxFunctionSignature): string {
    const { minArgs, maxArgs } = signature;
    if (maxArgs === 0) {
        return 'no arguments';
    }
    if (maxArgs === undefined) {
        return `${minArgs}+ args`;
    }
    if (minArgs === maxArgs) {
        return minArgs === 1 ? '1 arg' : `${minArgs} args`;
    }
    return `${minArgs}–${maxArgs} args`;
}

export class MdxCompletionProvider extends DefaultCompletionProvider {
    override async getCompletion(
        document: LangiumDocument,
        params: CompletionParams,
        cancelToken?: CancellationToken
    ): Promise<CompletionList | undefined> {
        const list = await super.getCompletion(document, params, cancelToken);
        const functions = this.functionCompletions(document, params);
        if (functions.length === 0) {
            return list;
        }
        return CompletionList.create([...(list?.items ?? []), ...functions], list?.isIncomplete ?? false);
    }

    /**
     * Contributed once per request rather than through `completionFor`, which
     * the base class calls once for every possible next grammar feature — 128
     * functions times that many features, deduplicated afterwards, for no gain.
     */
    protected functionCompletions(document: LangiumDocument, params: CompletionParams): CompletionItem[] {
        const text = document.textDocument.getText();
        const offset = document.textDocument.offsetAt(params.position);
        const lineBefore = text.slice(offset - params.position.character, offset);

        if (this.isInsideDelimitedName(lineBefore) || this.isInsideStringOrComment(lineBefore)) {
            return [];
        }

        const partial = /[A-Za-z_]\w*$/.exec(lineBefore)?.[0] ?? '';
        const preceding = lineBefore.slice(0, lineBefore.length - partial.length).at(-1);

        // Immediately after `[` the user is naming a cube object, not calling
        // anything — that position belongs to the metadata completion in the
        // playground, and to nothing at all in the extension.
        if (preceding === '[') {
            return [];
        }
        const postfix = preceding === '.';

        const range = Range.create(
            params.position.line,
            params.position.character - partial.length,
            params.position.line,
            params.position.character
        );

        const items: CompletionItem[] = [];
        for (const name of functionNames()) {
            const signature = lookupFunction(name);
            if (!signature || (postfix && !allowedInPostfix(name, signature))) {
                continue;
            }
            const label = functionDisplayName(name);
            const detail = signature.discouraged ? `${arityLabel(signature)} · discouraged` : arityLabel(signature);
            items.push({
                label,
                kind: CompletionItemKind.Function,
                detail,
                insertTextFormat: InsertTextFormat.Snippet,
                // A property-style function takes no parentheses: `.Parent`,
                // never `.Parent()`. The table already says which those are.
                textEdit: TextEdit.replace(range, signature.maxArgs === 0 ? label : `${label}($0)`)
            });
        }
        return items;
    }

    /**
     * Whether the cursor sits inside an unclosed `[...]`.
     *
     * Lexical rather than parsed, because the document is mid-edit and the
     * bracket is usually unterminated — which is exactly the case that must be
     * detected. `]]` is an escaped bracket, not a terminator.
     */
    protected isInsideDelimitedName(lineBefore: string): boolean {
        const withoutEscapes = lineBefore.replace(/\]\]/g, '');
        let depth = 0;
        for (const character of withoutEscapes) {
            if (character === '[') depth++;
            else if (character === ']' && depth > 0) depth--;
        }
        return depth > 0;
    }

    /** Mirrors the suppression rule the playground's own provider applies. */
    protected isInsideStringOrComment(lineBefore: string): boolean {
        const closedStrings = lineBefore.replace(/'(?:[^']|'')*'/g, '');
        return closedStrings.includes("'") || closedStrings.includes('//');
    }
}
