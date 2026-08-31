import { describe, expect, test } from 'vitest';
import { parseMdx, syntaxErrors } from '../test-helper.js';
import { AstUtils } from 'langium';
import { isNameReference, isMemberAccess, type MdxScript } from '../../src/language/generated/ast.js';

/** Resolves the first reference whose text equals `refText`. */
function findReference(root: MdxScript, refText: string) {
    for (const node of AstUtils.streamAst(root)) {
        if (isNameReference(node) && node.member.$refText === refText) {
            return node.member;
        }
        if (isMemberAccess(node) && node.segment.$refText === refText) {
            return node.segment;
        }
    }
    return undefined;
}

describe('in-file declarations resolve', () => {
    test('a named set is linked at its use site', async () => {
        const document = await parseMdx(
            `
            WITH SET Top10SellingProducts AS TopCount([P].[P].Children, 10, [Measures].[A])
            SELECT Top10SellingProducts ON 1 FROM [Adventure Works]
            `,
            { validation: true }
        );
        expect(syntaxErrors(document)).toBe('');
        const reference = findReference(document.parseResult.value, 'Top10SellingProducts');
        expect(reference?.ref?.$type).toBe('WithSet');
    });

    test('linking is case-insensitive', async () => {
        const document = await parseMdx(
            `
            WITH SET Top10SellingProducts AS {[A].[B]}
            SELECT TOP10SELLINGPRODUCTS ON 0 FROM [Cube]
            `,
            { validation: true }
        );
        const reference = findReference(document.parseResult.value, 'TOP10SELLINGPRODUCTS');
        expect(reference?.ref?.$type).toBe('WithSet');
    });

    test('a calculated member is reachable by its final path segment', async () => {
        const document = await parseMdx(
            `
            WITH MEMBER [Measures].[PCT Discount] AS [Measures].[A] / [Measures].[B]
            SELECT {[Measures].[PCT Discount]} ON 0 FROM [Cube]
            `,
            { validation: true }
        );
        const reference = findReference(document.parseResult.value, '[PCT Discount]');
        expect(reference?.ref?.$type).toBe('WithMember');
    });

    test('a WITH declaration is visible inside the subselect', async () => {
        const document = await parseMdx(
            `
            WITH SET [S] AS {[A].[B]}
            SELECT [S] ON 0 FROM (SELECT [S] ON 0 FROM [Cube])
            `,
            { validation: true }
        );
        expect(syntaxErrors(document)).toBe('');
        const reference = findReference(document.parseResult.value, '[S]');
        expect(reference?.ref?.$type).toBe('WithSet');
    });

    test('a session-scoped CREATE is visible to a later query', async () => {
        const document = await parseMdx(
            `
            CREATE SESSION SET CURRENTCUBE.[Core Products] AS {[P].[P].Members} ;
            SELECT [Core Products] ON 0 FROM [Cube] ;
            `,
            { validation: true }
        );
        expect(syntaxErrors(document)).toBe('');
        const reference = findReference(document.parseResult.value, '[Core Products]');
        expect(reference?.ref?.$type).toBe('CreateStatement');
    });
});

describe('server-side metadata is left unresolved', () => {
    test('an ordinary member path produces no diagnostics', async () => {
        // Cube, dimension and member names come from the server, so they can
        // never be resolved from the document. That is not an error.
        const document = await parseMdx(
            'SELECT [Date].[Calendar].[Month].&[200308] ON 0 FROM [Adventure Works]',
            { validation: true }
        );
        expect(syntaxErrors(document)).toBe('');
        expect(document.diagnostics ?? []).toHaveLength(0);
    });

    test('a key qualifier does not resolve to an unrelated declaration', async () => {
        const document = await parseMdx(
            `
            WITH SET [S] AS {[A].[B]}
            SELECT [Product].[Model].&[X] ON 0 FROM [Cube]
            `,
            { validation: true }
        );
        const reference = findReference(document.parseResult.value, '[X]');
        expect(reference?.ref).toBeUndefined();
    });
});
