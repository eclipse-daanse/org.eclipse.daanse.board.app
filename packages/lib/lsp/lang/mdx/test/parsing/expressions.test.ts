import { describe, expect, test } from 'vitest';
import { parseMdx, syntaxErrors } from '../test-helper.js';
import {
    isBinaryExpression,
    isFunctionCall,
    isLogicalExpression,
    isMemberAccess,
    isNameReference,
    isNumberLiteral,
    isSetExpression,
    isStringLiteral,
    isTupleExpression,
    isUnaryExpression,
    isWithMember,
    type Expression,
    type MdxScript,
    type SelectStatement
} from '../../src/language/generated/ast.js';

/** Parses `WITH MEMBER m AS <expression>` and returns the expression. */
async function parseExpression(text: string): Promise<Expression> {
    const document = await parseMdx(`WITH MEMBER [Measures].[M] AS ${text} SELECT FROM [Cube]`);
    expect(syntaxErrors(document)).toBe('');
    const select = document.parseResult.value.statements[0] as SelectStatement;
    const clause = select.with[0];
    expect(isWithMember(clause)).toBe(true);
    return (clause as { value: Expression }).value;
}

describe('operator precedence', () => {
    test('^ is right associative', async () => {
        // 2 ^ 3 ^ 2 must group as 2 ^ (3 ^ 2), not (2 ^ 3) ^ 2.
        const expression = await parseExpression('2 ^ 3 ^ 2');
        expect(isBinaryExpression(expression)).toBe(true);
        const root = expression as { operator: string; left: Expression; right: Expression };
        expect(root.operator).toBe('^');
        expect(isNumberLiteral(root.left)).toBe(true);
        expect(isBinaryExpression(root.right)).toBe(true);
    });

    test('* and / bind tighter than + and -', async () => {
        const expression = await parseExpression('1 + 2 * 3');
        const root = expression as { operator: string; left: Expression; right: Expression };
        expect(root.operator).toBe('+');
        expect((root.right as { operator: string }).operator).toBe('*');
    });

    test('^ binds tighter than *', async () => {
        const expression = await parseExpression('2 * 3 ^ 4');
        const root = expression as { operator: string; right: Expression };
        expect(root.operator).toBe('*');
        expect((root.right as { operator: string }).operator).toBe('^');
    });

    test('comparison binds looser than arithmetic', async () => {
        const expression = await parseExpression('1 + 2 > 3 * 4');
        const root = expression as { operator: string; left: Expression; right: Expression };
        expect(root.operator).toBe('>');
        expect((root.left as { operator: string }).operator).toBe('+');
        expect((root.right as { operator: string }).operator).toBe('*');
    });

    test('NOT binds looser than comparison', async () => {
        // Microsoft's precedence table places NOT below the comparison
        // operators, so `NOT a = b` means `NOT (a = b)`.
        const expression = await parseExpression('NOT [A] = [B]');
        expect(isUnaryExpression(expression)).toBe(true);
        const root = expression as { operator: string; operand: Expression };
        expect(root.operator).toBe('NOT');
        expect(isBinaryExpression(root.operand)).toBe(true);
        expect((root.operand as { operator: string }).operator).toBe('=');
    });

    test('AND binds tighter than XOR, which binds tighter than OR', async () => {
        const expression = await parseExpression('[A] OR [B] XOR [C] AND [D]');
        expect(isLogicalExpression(expression)).toBe(true);
        const or = expression as { operator: string; right: Expression };
        expect(or.operator).toBe('OR');
        const xor = or.right as { operator: string; right: Expression };
        expect(xor.operator).toBe('XOR');
        expect((xor.right as { operator: string }).operator).toBe('AND');
    });

    test('IS binds tightest', async () => {
        const expression = await parseExpression('[A] IS [B] AND [C]');
        const and = expression as { operator: string; left: Expression };
        expect(and.operator).toBe('AND');
        expect((and.left as { operator: string }).operator).toBe('IS');
    });

    test('the range operator produces a binary expression', async () => {
        const expression = await parseExpression('[Date].[Year].[2023] : [Date].[Year].[2026]');
        expect(isBinaryExpression(expression)).toBe(true);
        expect((expression as { operator: string }).operator).toBe(':');
    });

    test('unary minus applies before multiplication', async () => {
        const expression = await parseExpression('-2 * 3');
        const root = expression as { operator: string; left: Expression };
        expect(root.operator).toBe('*');
        expect(isUnaryExpression(root.left)).toBe(true);
    });

    test('parentheses override precedence', async () => {
        const expression = await parseExpression('(1 + 2) * 3');
        const root = expression as { operator: string; left: Expression };
        expect(root.operator).toBe('*');
        // A single parenthesised operand is a one-item tuple node.
        expect(isTupleExpression(root.left)).toBe(true);
        expect((root.left as { items: Expression[] }).items).toHaveLength(1);
    });
});

describe('set algebra reuses the arithmetic operators', () => {
    test('crossjoin, union and except share the arithmetic nodes', async () => {
        // `*`, `+` and `-` are overloaded: the distinction between arithmetic
        // and set algebra is a question about operand types, not syntax.
        const expression = await parseExpression('{[A]} * {[B]} + {[C]} - {[D]}');
        const root = expression as { operator: string; left: Expression; right: Expression };
        expect(root.operator).toBe('-');
        const union = root.left as { operator: string; left: Expression };
        expect(union.operator).toBe('+');
        expect((union.left as { operator: string }).operator).toBe('*');
        expect(isSetExpression(root.right)).toBe(true);
    });
});

describe('member navigation', () => {
    test('a qualified path is a left-nested chain of member accesses', async () => {
        const expression = await parseExpression('[Date].[Calendar].[Month]');
        expect(isMemberAccess(expression)).toBe(true);
        const outer = expression as { segment: { $refText: string }; target: Expression };
        expect(outer.segment.$refText).toBe('[Month]');
        const inner = outer.target as { segment: { $refText: string }; target: Expression };
        expect(inner.segment.$refText).toBe('[Calendar]');
        expect(isNameReference(inner.target)).toBe(true);
    });

    test('the & key qualifier is recorded', async () => {
        const expression = await parseExpression('[Product].[Model Name].&[Mountain-200]');
        const access = expression as { key: boolean; segment: { $refText: string } };
        expect(access.key).toBe(true);
        expect(access.segment.$refText).toBe('[Mountain-200]');
    });

    test('navigation and method calls compose', async () => {
        const expression = await parseExpression('[Date].[Calendar].CurrentMember.Parent.Item(0)');
        const call = expression as { name: string; arguments: Expression[]; target: Expression };
        expect(call.name).toBe('Item');
        expect(call.arguments).toHaveLength(1);
        expect(isMemberAccess(call.target)).toBe(true);
    });

    test('.Properties keeps TYPED as a flag rather than an argument', async () => {
        const expression = await parseExpression('[Customer].[Customer].Properties("Income", TYPED)');
        const call = expression as { typed: boolean; property: Expression };
        expect(call.typed).toBe(true);
        expect(isStringLiteral(call.property)).toBe(true);
    });

    test('.Properties without TYPED', async () => {
        const expression = await parseExpression('[Customer].[Customer].Properties("Income")');
        expect((expression as { typed: boolean }).typed).toBe(false);
    });
});

describe('irregular call syntax', () => {
    test('Descendants keeps its flag positional', async () => {
        const expression = await parseExpression(
            'Descendants([Date].[Calendar].[CY 2003], [Date].[Calendar].[Month], SELF_AND_BEFORE)'
        );
        const call = expression as { flag: string; member: Expression; level: Expression };
        expect(call.flag).toBe('SELF_AND_BEFORE');
        expect(call.member).toBeDefined();
        expect(call.level).toBeDefined();
    });

    test('Descendants accepts a bare member', async () => {
        const expression = await parseExpression('Descendants([Date].[Calendar])');
        expect((expression as { flag?: string }).flag).toBeUndefined();
    });

    test('Order keeps its direction positional', async () => {
        const expression = await parseExpression('Order([P].[P].Members, [Measures].[A], BDESC)');
        expect((expression as { direction: string }).direction).toBe('BDESC');
    });

    test('CASE supports both the searched and the simple form', async () => {
        const searched = await parseExpression(
            'CASE WHEN [A] < 0 THEN 0 WHEN [A] > 100 THEN 100 ELSE [A] END'
        );
        const searchedCase = searched as { conditions: Expression[]; results: Expression[]; otherwise?: Expression };
        expect(searchedCase.conditions).toHaveLength(2);
        expect(searchedCase.results).toHaveLength(2);
        expect(searchedCase.otherwise).toBeDefined();

        const simple = await parseExpression('CASE [A] WHEN 1 THEN "one" END');
        expect((simple as { subject?: Expression }).subject).toBeDefined();
    });

    test('EXISTING narrows the following set expression', async () => {
        const expression = await parseExpression('Filter(EXISTING [Customer].[Customer].Members, 1)');
        expect(isFunctionCall(expression)).toBe(true);
        const call = expression as { arguments: Expression[] };
        expect(call.arguments[0].$type).toBe('ExistingExpression');
    });
});

describe('tuples and sets', () => {
    test('a multi-member tuple keeps every item', async () => {
        const expression = await parseExpression('([Date].[Year].&[2003], [Measures].[Amount])');
        expect(isTupleExpression(expression)).toBe(true);
        expect((expression as { items: Expression[] }).items).toHaveLength(2);
    });

    test('the empty set parses', async () => {
        const expression = await parseExpression('{}');
        expect(isSetExpression(expression)).toBe(true);
        expect((expression as { items: Expression[] }).items).toHaveLength(0);
    });
});

describe('statement coverage', () => {
    test('a SELECT with every optional clause parses', async () => {
        const document = await parseMdx(`
            WITH MEMBER [Measures].[X] AS 1, FORMAT_STRING = 'Percent'
                 SET [S] AS {[A].[B]}
            SELECT
                NON EMPTY {[Measures].[X]} DIMENSION PROPERTIES MEMBER_CAPTION ON COLUMNS,
                [S] ON ROWS
            FROM NON VISUAL (SELECT {[A].[B]} ON 0 FROM [Cube] WHERE [C].[D])
            WHERE ([C].[D], [E].[F])
            CELL PROPERTIES VALUE, FORMATTED_VALUE
        `);
        expect(syntaxErrors(document)).toBe('');
        const select = document.parseResult.value.statements[0] as SelectStatement;
        expect(select.axes).toHaveLength(2);
        expect(select.axes[0].nonEmpty).toBe(true);
        expect(select.from.$type).toBe('SubSelect');
        expect((select.from as { nonVisual: boolean }).nonVisual).toBe(true);
        expect(select.slicer).toBeDefined();
        expect(select.cellProperties?.properties).toEqual(['VALUE', 'FORMATTED_VALUE']);
    });

    test('SELECT * and a bare FROM parse', async () => {
        const document = await parseMdx('SELECT * FROM [Cube]');
        expect(syntaxErrors(document)).toBe('');
        expect((document.parseResult.value.statements[0] as SelectStatement).star).toBe(true);
    });

    test('nested SCOPE blocks nest in the AST', async () => {
        const document = await parseMdx(`
            SCOPE([Date].[Year].&[2005]) ;
                This = 1 ;
                SCOPE([Date].[Month].Members) ;
                    This = [Date].CurrentMember.Parent / 3 ;
                END SCOPE ;
            END SCOPE ;
        `);
        expect(syntaxErrors(document)).toBe('');
        const outer = document.parseResult.value.statements[0] as { body: MdxScript['statements'] };
        expect(outer.body).toHaveLength(2);
        expect(outer.body[1].$type).toBe('ScopeStatement');
    });

    test('CALCULATE, FREEZE and DROP parse as statements', async () => {
        const document = await parseMdx(`
            CALCULATE ;
            FREEZE ([Date].[Year].&[2005], [Measures].[Quota]) ;
            DROP MEMBER CURRENTCUBE.[Measures].[X] ;
        `);
        expect(syntaxErrors(document)).toBe('');
        expect(document.parseResult.value.statements.map((s) => s.$type)).toEqual([
            'CalculateStatement',
            'FreezeStatement',
            'DropStatement'
        ]);
    });

    test('CREATE variants share one statement rule', async () => {
        const document = await parseMdx(`
            CREATE SESSION HIDDEN CALCULATED MEMBER CURRENTCUBE.[Measures].[A] AS 1, SOLVE_ORDER = 5 ;
            CREATE GLOBAL SET CURRENTCUBE.[S] AS {[A].[B]} ;
            CREATE SUBCUBE [Cube] AS SELECT {[A].[B]} ON 0 FROM [Cube] ;
            CREATE KPI CURRENTCUBE.[K] AS [Measures].[A], GOAL = 100 ;
        `);
        expect(syntaxErrors(document)).toBe('');
        const [member, set] = document.parseResult.value.statements as Array<{
            kind?: string;
            session?: boolean;
            global?: boolean;
            hidden?: boolean;
            calculated?: boolean;
        }>;
        expect(member.kind).toBe('MEMBER');
        expect(member.session).toBe(true);
        expect(member.hidden).toBe(true);
        expect(member.calculated).toBe(true);
        expect(set.kind).toBe('SET');
        expect(set.global).toBe(true);
    });
});
