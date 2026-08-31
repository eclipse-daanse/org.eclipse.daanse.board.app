import { describe, expect, test } from 'vitest';
import { parseMdx } from '../test-helper.js';

/**
 * Every keystroke in an editor produces a syntactically incomplete document,
 * so the validators run against partial ASTs far more often than complete
 * ones. A check that assumes a property is present throws, and Langium
 * surfaces that as `An error occurred during validation: Cannot read
 * properties of undefined` — one entry per run, flooding the problems panel
 * and hiding the real diagnostics.
 *
 * These are the prefixes of a realistic query, typed one fragment at a time.
 */
const PREFIXES = [
    'S',
    'SELECT',
    'SELECT ',
    'SELECT [',
    'SELECT [Pro',
    'SELECT [Product]',
    'SELECT [Product].',
    'SELECT [Product].[Category]',
    'SELECT [Product].[Category] ON',
    'SELECT [Product].[Category] ON ',
    'SELECT [Product].[Category] ON 0',
    'SELECT [Product].[Category] ON 0 FROM',
    'SELECT [Product].[Category] ON 0 FROM [',
    'SELECT [Product].[Category] ON 0 FROM [Sales]',
    'WITH',
    'WITH MEMBER',
    'WITH MEMBER [Measures].[X]',
    'WITH MEMBER [Measures].[X] AS',
    'WITH MEMBER [Measures].[X] AS 1,',
    'WITH MEMBER [Measures].[X] AS 1, SOLVE_ORDER',
    'WITH MEMBER [Measures].[X] AS 1, SOLVE_ORDER =',
    'SELECT {[A].[B]} ON 0 FROM [C] CELL PROPERTIES',
    'SELECT Sum(',
    'SELECT Sum([A].[B],',
    'CREATE',
    'CREATE MEMBER',
    'SCOPE(',
    'SCOPE([A].[B]) ; This =',
    'FROM',
    '[',
    '].[',
    'SELECT * FROM',
    // Constructs borrowed from mdx.langium.alt, typed one fragment at a time.
    '@',
    'SELECT @',
    'SELECT @p',
    'SELECT CAST(',
    'SELECT CAST(1',
    'SELECT CAST(1 AS',
    'SELECT [A].Members AS',
    'DRILLTHROUGH',
    'DRILLTHROUGH MAXROWS',
    'DRILLTHROUGH MAXROWS 10',
    'DRILLTHROUGH SELECT [A] ON 0 FROM [C] RETURN',
    'EXPLAIN',
    'EXPLAIN PLAN',
    'EXPLAIN PLAN FOR',
    'REFRESH',
    'REFRESH CUBE',
    'UPDATE',
    'UPDATE CUBE',
    'UPDATE CUBE [C]',
    'UPDATE CUBE [C] SET',
    'UPDATE CUBE [C] SET ([M].[A]) =',
    'UPDATE CUBE [C] SET ([M].[A]) = 1 USE_EQUAL_ALLOCATION BY',
    'CALL',
    'FREEZE',
    'FREEZE(',
    'SELECT Sum(,',
    'SELECT [D].[H].&[1]&',
    "SELECT 'a' ||"
];

describe('validation survives incomplete documents', () => {
    test.each(PREFIXES)('validating %j raises no internal error', async (text) => {
        const document = await parseMdx(text, { validation: true });
        const internal = (document.diagnostics ?? [])
            .map((d) => (typeof d.message === 'string' ? d.message : d.message.value))
            .filter((m) => m.includes('An error occurred during validation'));
        expect(internal).toEqual([]);
    });
});
