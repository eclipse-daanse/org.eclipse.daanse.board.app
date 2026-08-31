/**
 * Tokenizer tests for the MDX StreamLanguage.
 *
 * Highlighting bugs are easy to miss by eye and easy to regress when the
 * keyword lists change, so the categories are asserted directly rather than
 * checked in a screenshot.
 */
import { describe, expect, test } from 'vitest';
import { highlightTree, tagHighlighter, tags } from '@lezer/highlight';
import { mdxStreamLanguage } from '../src/mdx-stream-language.js';

/**
 * Mirrors the tag set `editor/theme.ts` styles, one class per rule.
 *
 * `@lezer/highlight`'s own `classHighlighter` is not usable here: it collapses
 * modifiers, so `tags.function(tags.variableName)` and a plain
 * `tags.variableName` both come back as `tok-variableName` and a function call
 * cannot be told from a member reference. Listing the rules explicitly, most
 * specific first, is also a check that the theme's tags are reachable.
 */
const highlighter = tagHighlighter([
    { tag: tags.comment, class: 'comment' },
    { tag: tags.keyword, class: 'keyword' },
    { tag: tags.operator, class: 'operator' },
    { tag: tags.string, class: 'string' },
    { tag: tags.number, class: 'number' },
    { tag: tags.function(tags.variableName), class: 'function' },
    { tag: tags.variableName, class: 'variableName' },
    { tag: tags.atom, class: 'atom' },
    { tag: tags.typeName, class: 'typeName' },
    { tag: tags.propertyName, class: 'propertyName' }
]);

interface Token {
    text: string;
    kind: string;
}

/** Tokenizes `code` and returns the classified spans, in order. */
function tokenize(code: string): Token[] {
    const tree = mdxStreamLanguage.parser.parse(code);
    const tokens: Token[] = [];
    highlightTree(tree, highlighter, (from, to, classes) => {
        tokens.push({ text: code.slice(from, to), kind: classes });
    });
    return tokens;
}

/** The classification of the first token whose text matches exactly. */
function kindOf(code: string, text: string): string | undefined {
    return tokenize(code).find((t) => t.text === text)?.kind;
}

describe('delimited identifiers', () => {
    test('a bracketed name is one token, even when it contains a keyword', () => {
        // The whole reason delimited identifiers are matched before keywords:
        // otherwise `Order` inside `[Order Quantity]` colours as a keyword.
        const tokens = tokenize('WHERE [Measures].[Order Quantity]');
        expect(tokens.find((t) => t.text === '[Order Quantity]')?.kind).toBe('variableName');
        expect(tokens.some((t) => t.text === 'Order')).toBe(false);
    });

    test('a doubled ]] is an escape, not a terminator', () => {
        const code = 'SELECT [Total Profit [Domestic]]]';
        const tokens = tokenize(code);
        expect(tokens.find((t) => t.kind === 'variableName')?.text).toBe('[Total Profit [Domestic]]]');
    });

    test('a key qualifier is its own category', () => {
        expect(kindOf('[Product].[Model].&[Mountain-200]', '&[Mountain-200]')).toBe('atom');
    });
});

describe('keywords and operators', () => {
    test.each(['SELECT', 'FROM', 'WHERE', 'WITH', 'MEMBER', 'SCOPE', 'CASE'])(
        '%s is a keyword',
        (word) => {
            expect(kindOf(`${word} `, word)).toBe('keyword');
        }
    );

    test('keywords are case-insensitive, as MDX requires', () => {
        expect(kindOf('select ', 'select')).toBe('keyword');
        expect(kindOf('SeLeCt ', 'SeLeCt')).toBe('keyword');
    });

    test.each(['AND', 'OR', 'NOT', 'XOR', 'IS'])('%s is a word operator', (word) => {
        expect(kindOf(`a ${word} b`, word)).toBe('operator');
    });

    test('axis names and flags are language constants', () => {
        expect(kindOf('} ON COLUMNS', 'COLUMNS')).toBe('typeName');
        expect(kindOf('Descendants(a, b, SELF)', 'SELF')).toBe('typeName');
    });
});

describe('comments', () => {
    test.each([
        ['// note', '// note'],
        ['-- note', '-- note']
    ])('%s is a line comment', (code, text) => {
        expect(kindOf(code, text)).toBe('comment');
    });

    test('-- is a comment, not two minus signs', () => {
        expect(tokenize('-- Source: SELECT Statement').every((t) => t.kind === 'comment')).toBe(true);
    });

    test('a block comment spans lines', () => {
        const tokens = tokenize('/* one\ntwo */ SELECT');
        expect(tokens.filter((t) => t.kind === 'comment').length).toBeGreaterThan(1);
        expect(tokens.find((t) => t.text === 'SELECT')?.kind).toBe('keyword');
    });
});

describe('literals and calls', () => {
    test.each(["'abc'", '"abc"'])('%s is a string', (code) => {
        expect(tokenize(code).some((t) => t.kind === 'string')).toBe(true);
    });

    test("a doubled '' inside a string does not terminate it", () => {
        const tokens = tokenize("'it''s' SELECT");
        expect(tokens.find((t) => t.text === 'SELECT')?.kind).toBe('keyword');
    });

    test.each(['1', '1.5', '1e3'])('%s is a number', (code) => {
        expect(tokenize(code).some((t) => t.kind === 'number')).toBe(true);
    });

    test('a name followed by ( is a function, whoever it is', () => {
        expect(kindOf('Aggregate(x)', 'Aggregate')).toBe('function');
        expect(kindOf('LookupCube("a","b")', 'LookupCube')).toBe('function');
    });

    test('a keyword followed by ( is still a keyword', () => {
        // The parenthesis belongs to the syntax, not to a call — otherwise
        // CAST, which is always written `CAST(`, would never look like one.
        expect(kindOf('CAST(1 AS STRING)', 'CAST')).toBe('keyword');
        expect(kindOf('MEMBER x AS ([A],[B])', 'AS')).toBe('keyword');
        expect(kindOf('NOT (a AND b)', 'NOT')).toBe('operator');
    });

    test('but a property call after a dot still is one', () => {
        expect(kindOf('[A].Properties("x")', 'Properties')).toBe('function');
    });

    test('a name after a dot is a property', () => {
        expect(kindOf('[Date].[Calendar].CurrentMember', 'CurrentMember')).toBe('propertyName');
    });

    test('a member property is only highlighted where it is assigned', () => {
        expect(kindOf('MEMBER x AS 1, SOLVE_ORDER = 5', 'SOLVE_ORDER')).toBe('propertyName');
        // Bare, with no `=`, it is just a word.
        expect(kindOf('SELECT SOLVE_ORDER', 'SOLVE_ORDER')).toBeUndefined();
    });
});
