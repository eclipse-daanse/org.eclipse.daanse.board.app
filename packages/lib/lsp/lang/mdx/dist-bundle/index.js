import { component as _ } from "@eclipse-daanse/tsm";
import { LANGUAGE_SERVICE_ID as y } from "org.eclipse.daanse.board.app.lib.api.lsp";
import { consumeBlockComment as A, consumeDelimited as c, defineLanguage as w } from "org.eclipse.daanse.board.app.lib.lsp.core";
import { StreamLanguage as F, LanguageSupport as B } from "@codemirror/language";
import { tags as p } from "@lezer/highlight";
const U = `-- Sum of Order Quantity over the first eight months of calendar year 2003.
-- Source: SELECT Statement (MDX), Microsoft Learn.
WITH MEMBER [Date].[Calendar].[First8Months2003] AS
    Aggregate(
        PeriodsToDate(
            [Date].[Calendar].[Calendar Year],
            [Date].[Calendar].[Month].[August 2003]
        )
    )
SELECT
    [Date].[Calendar].[First8Months2003] ON COLUMNS,
    [Product].[Category].Children ON ROWS
FROM
    [Adventure Works]
WHERE
    [Measures].[Order Quantity]
`, k = `/* Top 10 best reseller-selling products by name, sliced by product line.
   Exercises calculated members with properties, named sets, key qualifiers
   and a slicer axis. Source: SELECT Statement (MDX), Microsoft Learn. */
with member [Measures].[PCT Discount] AS [Measures].[Discount Amount]/[Measures].[Reseller Sales Amount], FORMAT_STRING = 'Percent'
set Top10SellingProducts as topcount([Product].[Model Name].children, 10, [Measures].[Reseller Sales Amount])
set Preferred10Products as
{[Product].[Model Name].&[Mountain-200],
[Product].[Model Name].&[Road-250],
[Product].[Model Name].&[Mountain-100],
[Product].[Model Name].&[Road-650],
[Product].[Model Name].&[Touring-1000],
[Product].[Model Name].&[Road-550-W],
[Product].[Model Name].&[Road-350-W],
[Product].[Model Name].&[HL Mountain Frame],
[Product].[Model Name].&[Road-150],
[Product].[Model Name].&[Touring-3000]
}
select {[Measures].[Reseller Sales Amount], [Measures].[Discount Amount], [Measures].[PCT Discount]} on 0,
Top10SellingProducts on 1
from [Adventure Works]
where [Product].[Product Line].[Mountain]
`, v = `// NON VISUAL subselects: visually total the columns, but bring the true
// total of all [Category] for the row totals.
// Source: SELECT Statement (MDX), Microsoft Learn.
select [Category].members on 0,
[Business Type].members on 1
from NON VISUAL (Select {[Category].Accessories, [Category].Clothing} on 0
from ( Select {[Business Type].[Value Added Reseller], [Business Type].[Warehouse]} on 0
from [Adventure Works])
)
where [Measures].[Reseller Sales Amount]
`, W = `// DIMENSION PROPERTIES on an axis, CELL PROPERTIES after the slicer, and the
// .Properties(name, TYPED) accessor described in MDX-specs.md.
SELECT
    NON EMPTY {[Measures].[Internet Sales Amount]}
        DIMENSION PROPERTIES MEMBER_CAPTION, MEMBER_UNIQUE_NAME ON COLUMNS,
    NON EMPTY [Customer].[Customer Geography].[City].MEMBERS
        DIMENSION PROPERTIES [Customer].[Customer Geography].[City].[Country],
                             LEVEL_NUMBER,
                             CHILDREN_CARDINALITY,
                             IS_DATAMEMBER ON ROWS
FROM [Adventure Works]
WHERE ([Date].[Calendar].[Calendar Year].&[2003], [Measures].[Internet Sales Amount])
CELL PROPERTIES VALUE, FORMATTED_VALUE, BACK_COLOR, FORE_COLOR, FONT_FLAGS, ACTION_TYPE
`, Y = `// Operator precedence torture test, plus the set operators and the
// navigation/aggregation functions catalogued in MDX-specs.md.
WITH
    MEMBER [Measures].[Power] AS 2 ^ 3 ^ 2
    MEMBER [Measures].[Mixed] AS 1 + 2 * 3 - 4 / 5 ^ 6
    MEMBER [Measures].[Negated] AS NOT [Measures].[A] = [Measures].[B]
    MEMBER [Measures].[Chained] AS
        [Measures].[A] > 1 AND [Measures].[B] < 2 XOR NOT [Measures].[C] >= 3 OR [Measures].[D] <> 4
    MEMBER [Measures].[Identity] AS
        IIF([Date].[Calendar].CurrentMember IS [Date].[Calendar].[All Periods], 1, 0)
    MEMBER [Measures].[Root] AS [Measures].[Variance] ^ 0.5
    MEMBER [Measures].[Concat] AS "Total: " + [Date].[Calendar].CurrentMember.Name
    MEMBER [Measures].[Typed] AS
        [Customer].[Customer].CurrentMember.Properties("Yearly Income", TYPED) * 1.0
    MEMBER [Measures].[Lookup] AS
        LookupCube("Budget", "([Measures].[Amount], " + [Date].[Calendar].CurrentMember.UniqueName + ")")
    MEMBER [Measures].[Kpi] AS KPIValue("Revenue") / KPIGoal("Revenue")
    MEMBER [Measures].[Pass] AS CalculationPassValue([Measures].[Amount], CalculationCurrentPass() - 1)
    MEMBER [Measures].[Regression] AS
        LinRegIntercept([Date].[Calendar].[Month].Members, [Measures].[Amount], [Measures].[Units])
    SET [Range] AS [Date].[Year].[2023] : [Date].[Year].[2026]
    SET [Crossed] AS {[Product].[Category].Members} * {[Date].[Year].Members}
    SET [Merged] AS {[A].[X]} + {[A].[Y]} - {[A].[Z]}
    SET [Narrowed] AS Filter(EXISTING [Customer].[Customer].Members, [Measures].[Amount] > 0)
    SET [Ranked] AS Order([Product].[Product].Members, [Measures].[Amount], BDESC)
    SET [Totals] AS VisualTotals({[Geography].[Country].Members}, "* (Visual Total)")
    SET [Rolled] AS RollupChildren([Account].[Accounts].CurrentMember, "~")
    SET [Deep] AS Descendants([Date].[Calendar].[CY 2003], [Date].[Calendar].[Month], SELF_AND_BEFORE)
    SET [Ends] AS ClosingPeriod([Date].[Calendar].[Month], [Date].[Calendar].CurrentMember)
    SET [Up] AS Ancestor([Geography].[Geography].CurrentMember, 2)
    SET [Stats] AS
        {Avg([Range]), Max([Range]), Min([Range]), Median([Range]),
         Stdev([Range]), StdevP([Range]), Var([Range]), VarP([Range]),
         DistinctCount([Range])}
SELECT
    {[Measures].[Power], [Measures].[Mixed]} ON AXIS(0),
    [Range] ON AXIS(1)
FROM [Adventure Works]
`, G = `/* Syntax adopted from the Eclipse Daanse port kept alongside this grammar as
   mdx.langium.alt. Every construct below was a parse or lex error before that
   merge; docs/mdx-grammar-comparison.md records where each one came from.
   Parsed by test/parsing/examples.test.ts like every other example here. */
WITH
    -- Query parameters. \`@Region\` used to fail in the *lexer*, so there was
    -- no recovery and no useful diagnostic.
    MEMBER [Measures].[Selected] AS ([Measures].[Store Sales], @Region)

    -- \`||\` concatenates strings, at the same precedence as \`+\`.
    MEMBER [Measures].[Label] AS
        [Product].[Product Family].CurrentMember.Name || ' — ' || CAST([Measures].[Store Sales] AS STRING)

    -- Composite member keys: one reference to a level keyed on two columns,
    -- not two separate references.
    MEMBER [Measures].[JulyOf2005] AS ([Measures].[Store Sales], [Time].[Year].&[2005]&[7])

    -- A skipped argument slot, as declared by PARAMETERINFO.SKIPPABLE. The
    -- omitted positions still count towards arity.
    MEMBER [Measures].[LastYear] AS ParallelPeriod(, , [Time].[Year].CurrentMember)

    -- \`.Dimension\` is an ordinary member property; DIMENSION also opens the
    -- DIMENSION PROPERTIES clause below, and the two never compete.
    MEMBER [Measures].[DimName] AS [Product].[Product Family].CurrentMember.Dimension.Name

    -- Exponents apply to a leading-dot mantissa too: .5e3 is 500.
    MEMBER [Measures].[Scaled] AS [Measures].[Store Sales] / .5e3
SELECT
    -- \`AS\` names a set inline. It binds looser than every operator, which is
    -- also what keeps \`AS\` free as the separator inside CAST(… AS …).
    {[Measures].[Selected], [Measures].[Label], [Measures].[Scaled]} AS Chosen ON COLUMNS,
    [Product].[Product Family].Members
        DIMENSION PROPERTIES [Product].[Product Family].[Name] ON ROWS
FROM [Sales]
WHERE [Time].[Year].&[2005]
`, H = `/* Cube calculation script: CALCULATE, global calculated members, nested
   SCOPE blocks with This assignments, and FREEZE.
   The SCOPE block is from the Adventure Works sample solution quoted in
   SCOPE Statement (MDX), Microsoft Learn. */

CALCULATE ;

CREATE MEMBER CURRENTCUBE.[Measures].[Profit Ratio] AS
    [Measures].[Store Sales] / [Measures].[Store Cost],
    FORMAT_STRING = "Percent",
    SOLVE_ORDER = 10,
    VISIBLE = 1,
    DISPLAY_FOLDER = "Ratios",
    ASSOCIATED_MEASURE_GROUP = "Sales" ;

CREATE SET CURRENTCUBE.[Core Products] AS
    Descendants([Product].[Product Categories].[All Products], [Product].[Product Categories].[Subcategory], SELF) ;

Scope
 (
    [Date].[Fiscal Year].&[2005],
    [Date].[Fiscal].[Fiscal Quarter].Members,
    [Measures].[Sales Amount Quota]
 ) ;

   This = ParallelPeriod
          (
             [Date].[Fiscal].[Fiscal Year], 1,
             [Date].[Fiscal].CurrentMember
          ) * 1.35 ;

/*-- Allocate equally to months in FY 2002 -----------------------------*/

  Scope
  (
     [Date].[Fiscal Year].&[2002],
     [Date].[Fiscal].[Month].Members
  ) ;

    This = [Date].[Fiscal].CurrentMember.Parent / 3 ;

  End Scope ;
End Scope ;

Scope( Root([Date]), Leaves([Product]) ) ;
    This = CASE
        WHEN [Measures].[Amount] IS NULL THEN 0
        WHEN [Measures].[Amount] < 0 THEN NULL
        ELSE [Measures].[Amount] * 1.1
    END ;
End Scope ;

FREEZE ( [Date].[Fiscal Year].&[2005], [Measures].[Sales Amount Quota] ) ;

DROP MEMBER CURRENTCUBE.[Measures].[Profit Ratio] ;
`, g = [
  {
    id: "scratch",
    label: "Scratch",
    description: "A small query to edit freely.",
    fileName: "scratch.mdxq",
    text: `SELECT
    {[Measures].[Unit Sales], [Measures].[Store Cost]} ON COLUMNS,
    [Product].[Product Family].Members ON ROWS
FROM [Sales]
`
  },
  {
    id: "basic",
    label: "Basic query",
    description: "WITH MEMBER, two axes, a slicer.",
    fileName: "basic.mdxq",
    text: U
  },
  {
    id: "autoexists",
    label: "Named sets",
    description: "Calculated member with properties and two named sets — try go-to-definition.",
    fileName: "autoexists.mdxq",
    text: k
  },
  {
    id: "non-visual",
    label: "NON VISUAL subselects",
    description: "Nested subselects that keep true totals.",
    fileName: "non-visual.mdxq",
    text: v
  },
  {
    id: "properties",
    label: "Dimension & cell properties",
    description: "DIMENSION PROPERTIES on an axis, CELL PROPERTIES after the slicer.",
    fileName: "properties.mdxq",
    text: W
  },
  {
    id: "borrowed-syntax",
    label: "Parameters & casts",
    description: "Syntax borrowed from the Daanse port: @parameters, ||, CAST, composite &[…]&[…] keys, skipped argument slots.",
    fileName: "borrowed-syntax.mdxq",
    text: G
  },
  {
    id: "operators",
    label: "Operators & functions",
    description: "Precedence torture test and a wide sweep of the function library.",
    fileName: "operators.mdxq",
    text: Y
  },
  {
    id: "script",
    label: "Cube script",
    description: "CALCULATE, CREATE MEMBER, nested SCOPE blocks, FREEZE.",
    fileName: "script.mdxs",
    text: H
  }
], C = new Set(
  [
    "SELECT",
    "FROM",
    "WHERE",
    "WITH",
    "ON",
    "AS",
    "NON",
    "EMPTY",
    "VISUAL",
    "CREATE",
    "DROP",
    "SESSION",
    "GLOBAL",
    "HIDDEN",
    "CALCULATED",
    "MEMBER",
    "SET",
    "SUBCUBE",
    "KPI",
    "MEASURE",
    "CELL",
    "CALCULATION",
    "DIMENSION",
    "PROPERTIES",
    "SCOPE",
    "END",
    "CALCULATE",
    "FREEZE",
    "CASE",
    "WHEN",
    "THEN",
    "ELSE",
    "FOR",
    "CAST",
    "DRILLTHROUGH",
    "MAXROWS",
    "FIRSTROWSET",
    "RETURN",
    "EXPLAIN",
    "PLAN",
    "REFRESH",
    "CUBE",
    "UPDATE",
    "BY",
    "CALL"
  ].map((e) => e.toLowerCase())
), N = /* @__PURE__ */ new Set(["and", "or", "not", "xor", "is", "existing"]), V = new Set(
  [
    "COLUMNS",
    "ROWS",
    "PAGES",
    "SECTIONS",
    "CHAPTERS",
    "AXIS",
    "SELF_AND_AFTER",
    "SELF_AND_BEFORE",
    "SELF_BEFORE_AFTER",
    "SELF",
    "AFTER",
    "BEFORE",
    "LEAVES",
    "BASC",
    "BDESC",
    "ASC",
    "DESC",
    "TYPED",
    "NULL",
    "USE_EQUAL_ALLOCATION",
    "USE_EQUAL_INCREMENT",
    "USE_WEIGHTED_ALLOCATION",
    "USE_WEIGHTED_INCREMENT"
  ].map((e) => e.toLowerCase())
), X = /* @__PURE__ */ new Set(["currentcube", "this"]), q = new Set(
  [
    "SOLVE_ORDER",
    "FORMAT_STRING",
    "VISIBLE",
    "NON_EMPTY_BEHAVIOR",
    "CAPTION",
    "DISPLAY_FOLDER",
    "ASSOCIATED_MEASURE_GROUP",
    "SCOPE_ISOLATION",
    "BACK_COLOR",
    "FORE_COLOR",
    "FONT_NAME",
    "FONT_SIZE",
    "FONT_FLAGS",
    "GOAL",
    "STATUS",
    "TREND",
    "WEIGHT"
  ].map((e) => e.toLowerCase())
), K = /[_a-zA-ZÀ-￿]/, T = /[\wÀ-￿]/, Q = {
  name: "mdx",
  startState() {
    return { inBlockComment: !1, inString: null, afterDot: !1 };
  },
  token(e, n) {
    if (n.inBlockComment)
      return n.inBlockComment = !A(e), "comment";
    if (n.inString)
      return n.inString = O(e, n.inString), "string";
    if (e.eatSpace())
      return null;
    const r = n.afterDot;
    n.afterDot = !1;
    const t = e.peek();
    if (e.match("//") || e.match("--"))
      return e.skipToEnd(), "comment";
    if (e.match("/*"))
      return n.inBlockComment = !A(e), "comment";
    if (t === "[")
      return e.next(), c(e, "]"), "variableName";
    if (t === "&")
      return e.next(), e.eatSpace(), e.peek() === "[" && (e.next(), c(e, "]")), "atom";
    if (t === "@") {
      for (e.next(); !e.eol() && T.test(e.peek()); )
        e.next();
      return "variableName";
    }
    if (t === "'" || t === '"')
      return e.next(), n.inString = O(e, t), "string";
    if (/[0-9]/.test(t) || t === "." && /[0-9]/.test(e.string.charAt(e.pos + 1)))
      return e.match(/^\d*\.?\d+([eE][+-]?\d+)?/) || e.next(), "number";
    if (t === ".")
      return e.next(), n.afterDot = !0, "operator";
    if (K.test(t)) {
      for (e.next(); !e.eol() && T.test(e.peek()); )
        e.next();
      const a = e.current().toLowerCase(), s = e.string.slice(e.pos), i = C.has(a) || N.has(a);
      return /^\s*\(/.test(s) && (r || !i) ? "function" : r ? "propertyName" : N.has(a) ? "operator" : C.has(a) ? "keyword" : V.has(a) ? "typeName" : X.has(a) ? "atom" : q.has(a) && /^\s*=/.test(s) ? "propertyName" : null;
    }
    return e.match(/^(\|\||<>|>=|<=|[-+*/^:=<>])/) ? "operator" : (/[{}()\],]/.test(t), e.next(), null);
  },
  // `StreamLanguage` resolves token names through a default table of legacy
  // mode names. `function` is not one of them — returning it silently yields
  // no tag at all, so every call would render unstyled. Map it explicitly.
  // The other names used above (`comment`, `string`, `number`, `keyword`,
  // `operator`, `variableName`, `atom`, `typeName`, `propertyName`) are all
  // in the default table.
  tokenTable: {
    function: p.function(p.variableName)
  },
  languageData: {
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    closeBrackets: { brackets: ["[", "(", "{", "'", '"'] },
    // MDX is case-insensitive, so completion should be too.
    wordChars: "_"
  }
};
function O(e, n) {
  return c(e, n), null;
}
const L = F.define(Q), S = "mdx-query", h = [".mdxq", ".mdxs", ".mdx"];
function D() {
  return new B(L);
}
const l = /\[(?:[^\]]|\]\])*\]/.source;
function Z(e) {
  return e.slice(1, -1).replace(/\]\]/g, "]");
}
function $(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    if (e[r] === "'") {
      if (e[r + 1] === "'") {
        r++;
        continue;
      }
      n++;
    }
  return n % 2 === 1;
}
function j(e) {
  return e.replace(/'(?:[^']|'')*'/g, (n) => `'${" ".repeat(n.length - 2)}'`);
}
function z(e) {
  return j(e).includes("//");
}
function J(e, n) {
  if ($(e)) return { kind: "none" };
  if (z(e)) return { kind: "none" };
  const r = /\bFROM\s+(\S*)$/i.exec(e);
  if (r) {
    const u = r[1] ?? "";
    return {
      kind: "after-from",
      wordRange: { start: n - u.length, end: n }
    };
  }
  const t = /\bON\s+(\S*)$/i.exec(e);
  if (t) {
    const u = t[1] ?? "";
    return {
      kind: "after-on",
      wordRange: { start: n - u.length, end: n }
    };
  }
  const s = new RegExp(
    `((?:${l}\\.)*(?:${l})?)\\.?(\\[(?:[^\\]]|\\]\\])*|[A-Za-z_]\\w*)?$`
  ).exec(e);
  if (s) {
    const u = s[1] ?? "", M = s[2] ?? "", I = M.startsWith("["), m = u.match(new RegExp(l, "g")) ?? [];
    if (m.length > 0 || I) {
      const E = m, b = n - M.length, R = E.length >= 1 && Z(E[0]).toLowerCase() === "measures", x = n - s[0].length;
      return {
        kind: "bracket-chain",
        chain: R ? [] : E,
        isMeasuresChain: R,
        wordRange: { start: b, end: n },
        chainRange: { start: x, end: n }
      };
    }
  }
  const f = /[\w]*$/.exec(e)?.[0] ?? "";
  return {
    kind: "fresh-word",
    wordRange: { start: n - f.length, end: n }
  };
}
var ee = Object.getOwnPropertyDescriptor, ne = (e, n, r, t) => {
  for (var a = t > 1 ? void 0 : t ? ee(n, r) : n, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (a = i(a) || a);
  return a;
};
const te = new URL("./mdx-server.worker.js", import.meta.url).href, o = w({
  id: S,
  label: "MDX",
  description: "Multidimensional Expressions — queries and cube scripts",
  extensions: h,
  support: D,
  serverWorkerUrl: te,
  examples: g,
  // `MdxDocumentSymbolProvider` narrows symbols to statements and
  // declarations worth navigating by.
  hasOutline: !0
});
let d = class {
  id = o.id;
  label = o.label;
  description = o.description;
  extensions = o.extensions;
  support = o.support;
  examples = o.examples;
  hasOutline = o.hasOutline;
  createServerWorker = o.createServerWorker;
};
d = ne([
  _({
    service: [y],
    properties: { "language.id": S }
  })
], d);
const re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDX_EXAMPLES: g,
  MDX_FILE_EXTENSIONS: h,
  MDX_LANGUAGE: o,
  MDX_LANGUAGE_ID: S,
  get MdxLanguageProvider() {
    return d;
  },
  mdx: D,
  mdxStreamLanguage: L,
  parseMdxCompletionContext: J
}, Symbol.toStringTag, { value: "Module" })), P = "org.eclipse.daanse.board.app.lib.lsp.lang.mdx", ae = "0.0.1-next.1";
async function le(e) {
  const n = globalThis.__tsm__;
  if (!n)
    throw new Error(`${P}: tsm runtime is not initialized`);
  n.register(P, re, ae, "lib.lsp.lang.mdx"), await void 0;
}
async function ce(e) {
  await void 0;
}
export {
  g as MDX_EXAMPLES,
  h as MDX_FILE_EXTENSIONS,
  o as MDX_LANGUAGE,
  S as MDX_LANGUAGE_ID,
  d as MdxLanguageProvider,
  le as activate,
  ce as deactivate,
  D as mdx,
  L as mdxStreamLanguage,
  J as parseMdxCompletionContext
};
