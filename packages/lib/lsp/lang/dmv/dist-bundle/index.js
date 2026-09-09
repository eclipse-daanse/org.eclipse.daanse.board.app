import { component as u } from "@eclipse-daanse/tsm";
import { LANGUAGE_SERVICE_ID as N } from "org.eclipse.daanse.board.app.lib.api.lsp";
import { consumeBlockComment as D, consumeDelimited as d, defineLanguage as f } from "org.eclipse.daanse.board.app.lib.lsp.core";
import { StreamLanguage as _, LanguageSupport as O } from "@codemirror/language";
import { tags as a } from "@lezer/highlight";
const h = `-- The simplest DMV query: every row of a schema rowset.
-- Source: Dynamic Management Views (DMVs) in Analysis Services, Microsoft Learn.
SELECT * FROM $System.DISCOVER_SESSIONS
`, C = `-- WHERE supplies a restriction to the rowset.
-- Source: Dynamic Management Views (DMVs) in Analysis Services, Microsoft Learn.
SELECT *
FROM $System.DISCOVER_CALC_DEPENDENCY
WHERE OBJECT_TYPE = 'ACTIVE_RELATIONSHIP'
`, v = `/* DISTINCT, TOP, an explicit column list and ORDER BY.
   Listing the schema rowsets a server exposes is the canonical way to
   discover what else you can query. */
SELECT DISTINCT TOP 20
    TABLE_NAME,
    TABLE_TYPE
FROM $System.DBSCHEMA_TABLES
WHERE TABLE_TYPE = 'SCHEMA'
ORDER BY TABLE_NAME ASC
`, M = `-- Rowsets that take restrictions must be wrapped in SYSTEMRESTRICTSCHEMA.
-- Restriction names are commonly bracketed, and CATALOG_NAME is case-sensitive.
-- Source: Dynamic Management Views (DMVs) in Analysis Services, Microsoft Learn.
SELECT *
FROM SYSTEMRESTRICTSCHEMA(
    $System.DISCOVER_CSDL_METADATA,
    [CATALOG_NAME] = 'FoodMart'
)
`, w = `/* The full predicate grammar: AND/OR precedence, parentheses, NOT,
   every comparison operator, a bare boolean column, and an @parameter
   the client binds before sending. */
SELECT
    [CUBE_NAME],
    [MEASURE_NAME],
    [MEASURE_AGGREGATOR]
FROM $System.MDSCHEMA_MEASURES
WHERE CATALOG_NAME = @catalog
  AND NOT MEASURE_IS_VISIBLE = 0
  AND (CUBE_NAME = 'Sales' OR CUBE_NAME <> 'HR')
  AND MEASURE_AGGREGATOR >= 1
ORDER BY [CUBE_NAME] ASC, [MEASURE_NAME] DESC
`, y = `/* AND/OR mixed with no parentheses at all, which is how the predicate is
   actually written in the field. AND binds tighter, so this reads as
   (A AND B) OR (C AND D) — the parse tree, not the layout, decides.
   Normalized from a published query; see test/dmv/corpus/. */
SELECT [TABLE], OBJECT, OBJECT_TYPE, REFERENCED_TABLE, REFERENCED_OBJECT, REFERENCED_OBJECT_TYPE
FROM $SYSTEM.DISCOVER_ITEM_DEPENDENCY
WHERE OBJECT_TYPE = 'CALC_FIELD' AND REFERENCED_OBJECT_TYPE = 'FIELD'
   OR OBJECT_TYPE = 'UNIT' AND REFERENCED_OBJECT_TYPE = 'UNIT'
ORDER BY [TABLE] ASC
`, I = `/* How DMV queries look when people write them rather than document them:
   a long AND chain one condition per line, and a multi-column ORDER BY
   whose direction is written only on the last column — the first sorts
   ascending by default. Normalized from a published query; see
   test/dmv/corpus/. */
SELECT *
FROM $SYSTEM.DISCOVER_SEGMENT_GROUPING_STAT
WHERE DATABASE_NAME = 'Northwind Trading DW'
  AND MODEL_NAME = 'Northwind Trading'
  AND UNIT_GROUP_NAME = 'Online Orders'
  AND SEGMENT_NAME = 'Online_Orders_2003'
ORDER BY GROUPING_NAME, ATTRIBUTE_COUNT_MAX desc
`, T = [
  {
    id: "dmv-basic",
    label: "Basic rowset",
    description: "The simplest DMV query: every row of a schema rowset.",
    fileName: "dmv-basic.dmv",
    text: h
  },
  {
    id: "dmv-filtered",
    label: "WHERE restriction",
    description: "WHERE supplies a restriction to the rowset.",
    fileName: "dmv-filtered.dmv",
    text: C
  },
  {
    id: "dmv-projection",
    label: "DISTINCT / TOP / ORDER BY",
    description: "An explicit column list with DISTINCT, TOP and sorting.",
    fileName: "dmv-projection.dmv",
    text: v
  },
  {
    id: "dmv-restrict-schema",
    label: "SYSTEMRESTRICTSCHEMA",
    description: "Rowsets that take restrictions must be wrapped in this call.",
    fileName: "dmv-restrict-schema.dmv",
    text: M
  },
  {
    id: "dmv-predicates",
    label: "Predicates",
    description: "AND/OR precedence, NOT, every comparison operator, and an @parameter.",
    fileName: "dmv-predicates.dmv",
    text: w
  },
  {
    id: "dmv-precedence",
    label: "AND/OR precedence",
    description: "AND and OR mixed without parentheses, as written in the field.",
    fileName: "dmv-precedence.dmv",
    text: y
  },
  {
    id: "dmv-formatting",
    label: "Real-world formatting",
    description: "A long AND chain and a partly-directed multi-column ORDER BY.",
    fileName: "dmv-formatting.dmv",
    text: I
  }
], g = /* @__PURE__ */ new Set([
  "select",
  "distinct",
  "top",
  "from",
  "where",
  "order",
  "by"
]), L = /* @__PURE__ */ new Set(["and", "or", "not"]), B = /* @__PURE__ */ new Set(["asc", "desc"]), b = /* @__PURE__ */ new Set(["systemrestrictschema"]), x = /[_a-zA-Z]/, c = /[\w]/, P = {
  name: "dmv",
  startState() {
    return { inBlockComment: !1, afterSystemDot: !1, afterSystem: !1 };
  },
  token(e, n) {
    if (n.inBlockComment)
      return n.inBlockComment = !D(e), "comment";
    if (e.eatSpace())
      return null;
    const s = n.afterSystem, o = n.afterSystemDot;
    n.afterSystem = !1, n.afterSystemDot = !1;
    const t = e.peek();
    if (e.match("//") || e.match("--"))
      return e.skipToEnd(), "comment";
    if (e.match("/*"))
      return n.inBlockComment = !0, "comment";
    if (t === "$") {
      for (e.next(); !e.eol() && c.test(e.peek()); )
        e.next();
      return n.afterSystem = !0, "className";
    }
    if (t === "[")
      return e.next(), d(e, "]"), o ? "typeName" : "variableName";
    if (t === "'" || t === '"')
      return e.next(), d(e, t), "string";
    if (t === "@") {
      for (e.next(); !e.eol() && c.test(e.peek()); )
        e.next();
      return "meta";
    }
    if (/[0-9]/.test(t) || t === "." && /[0-9]/.test(e.string.charAt(e.pos + 1)))
      return e.match(/^\d*\.?\d+/) || e.next(), "number";
    if (t === ".")
      return e.next(), n.afterSystemDot = s, "operator";
    if (x.test(t)) {
      for (e.next(); !e.eol() && c.test(e.peek()); )
        e.next();
      const i = e.current().toLowerCase();
      return o ? "typeName" : b.has(i) ? "function" : L.has(i) ? "operator" : g.has(i) ? "keyword" : B.has(i) ? "atom" : "variableName";
    }
    return e.match(/^(<>|>=|<=|[=<>*])/) ? "operator" : (/[(),;]/.test(t), e.next(), null);
  },
  // `function` and `className` are not default StreamLanguage token names —
  // returning them unmapped yields no tag at all and the token renders
  // unstyled, silently. Same trap as in `mdx-language.ts`.
  tokenTable: {
    function: a.function(a.variableName),
    className: a.className
  },
  languageData: {
    commentTokens: { line: "--", block: { open: "/*", close: "*/" } },
    closeBrackets: { brackets: ["[", "(", "'", '"'] }
  }
}, A = _.define(P), l = "dmv", p = [".dmv"];
function R() {
  return new O(A);
}
var Y = Object.getOwnPropertyDescriptor, k = (e, n, s, o) => {
  for (var t = o > 1 ? void 0 : o ? Y(n, s) : n, i = e.length - 1, m; i >= 0; i--)
    (m = e[i]) && (t = m(t) || t);
  return t;
};
const U = new URL("./dmv-server.worker.js", import.meta.url).href, r = f({
  id: l,
  label: "DMV",
  description: "Dynamic Management View queries over $System schema rowsets",
  extensions: p,
  support: R,
  serverWorkerUrl: U,
  examples: T,
  // Langium's default provider would emit one row per `ColumnReference` — a
  // flat list of every column the query names, which is worse than no
  // outline. DMV gets none until it has a provider worth the name.
  hasOutline: !1
});
let E = class {
  id = r.id;
  label = r.label;
  description = r.description;
  extensions = r.extensions;
  support = r.support;
  examples = r.examples;
  hasOutline = r.hasOutline;
  createServerWorker = r.createServerWorker;
};
E = k([
  u({
    service: [N],
    properties: { "language.id": l }
  })
], E);
const V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DMV_EXAMPLES: T,
  DMV_FILE_EXTENSIONS: p,
  DMV_LANGUAGE: r,
  DMV_LANGUAGE_ID: l,
  get DmvLanguageProvider() {
    return E;
  },
  dmv: R,
  dmvStreamLanguage: A
}, Symbol.toStringTag, { value: "Module" })), S = "org.eclipse.daanse.board.app.lib.lsp.lang.dmv", G = "0.0.1-next.1";
async function j(e) {
  const n = globalThis.__tsm__;
  if (!n)
    throw new Error(`${S}: tsm runtime is not initialized`);
  n.register(S, V, G, "lib.lsp.lang.dmv"), await void 0;
}
async function q(e) {
  await void 0;
}
export {
  T as DMV_EXAMPLES,
  p as DMV_FILE_EXTENSIONS,
  r as DMV_LANGUAGE,
  l as DMV_LANGUAGE_ID,
  E as DmvLanguageProvider,
  j as activate,
  q as deactivate,
  R as dmv,
  A as dmvStreamLanguage
};
