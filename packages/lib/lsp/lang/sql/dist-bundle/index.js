import { component as O } from "@eclipse-daanse/tsm";
import { LANGUAGE_SERVICE_ID as T } from "org.eclipse.daanse.board.app.lib.api.lsp";
import { consumeBlockComment as R, consumeDelimited as d, defineLanguage as A } from "org.eclipse.daanse.board.app.lib.lsp.core";
import { StreamLanguage as y, LanguageSupport as I } from "@codemirror/language";
import { tags as u } from "@lezer/highlight";
const w = `-- The simplest useful query against the cube's relational source:
-- what a fact row looks like.
SELECT
    s.product_id,
    s.customer_id,
    s.store_sales,
    s.unit_sales
FROM sales_fact_1997 s
WHERE s.store_sales > 10
ORDER BY s.store_sales DESC
LIMIT 20;
`, b = `-- The star schema, joined out. This is roughly the shape Mondrian itself
-- generates when it resolves an MDX query against FoodMart.
SELECT
    pc.product_family,
    pc.product_department,
    t.the_year,
    t.quarter,
    st.store_country,
    s.store_sales
FROM sales_fact_1997 s
    INNER JOIN product p ON s.product_id = p.product_id
    INNER JOIN product_class pc ON p.product_class_id = pc.product_class_id
    INNER JOIN time_by_day t ON s.time_id = t.time_id
    LEFT OUTER JOIN store st ON s.store_id = st.store_id
    LEFT JOIN promotion pr USING (promotion_id)
WHERE t.the_year = 1997
  AND pc.product_family IN ('Food', 'Drink');
`, L = `-- Aggregation with a grouped filter and a subtotal row, which is what a
-- cube measure is underneath.
SELECT
    pc.product_family,
    pc.product_department,
    SUM(s.store_sales)                     AS sales,
    SUM(s.store_cost)                      AS cost,
    SUM(s.store_sales) - SUM(s.store_cost) AS margin,
    COUNT(*)                               AS fact_rows,
    COUNT(DISTINCT s.customer_id)          AS customers
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
GROUP BY pc.product_family, pc.product_department WITH ROLLUP
HAVING SUM(s.store_sales) > 1000
ORDER BY sales DESC;
`, q = `-- A common table expression naming an intermediate result, and a recursive
-- one generating the twelve months of 1997 without reading a table.
WITH RECURSIVE months (n) AS (
    SELECT 1
    UNION ALL
    SELECT n + 1 FROM months WHERE n < 12
),
monthly_sales AS (
    SELECT
        t.month_of_year AS month_of_year,
        SUM(s.store_sales) AS sales
    FROM sales_fact_1997 s
        JOIN time_by_day t ON s.time_id = t.time_id
    WHERE t.the_year = 1997
    GROUP BY t.month_of_year
)
SELECT
    m.n,
    COALESCE(ms.sales, 0) AS sales
FROM months m
    LEFT JOIN monthly_sales ms ON ms.month_of_year = m.n
ORDER BY m.n;
`, x = `-- Window functions: a running total, a rank within each family, and a
-- month-on-month delta. None of these collapse rows the way GROUP BY does.
SELECT
    pc.product_family,
    t.month_of_year,
    SUM(s.store_sales)                                       AS sales,
    SUM(SUM(s.store_sales)) OVER w                           AS running_total,
    RANK()      OVER (PARTITION BY pc.product_family ORDER BY SUM(s.store_sales) DESC) AS rank_in_family,
    LAG(SUM(s.store_sales), 1) OVER w                        AS previous_month
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
    JOIN time_by_day t ON s.time_id = t.time_id
GROUP BY pc.product_family, t.month_of_year
WINDOW w AS (
    PARTITION BY pc.product_family
    ORDER BY t.month_of_year
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
)
ORDER BY pc.product_family, t.month_of_year;
`, C = `-- UNION, INTERSECT and EXCEPT over the same dimension, plus a scalar
-- subquery and an EXISTS test.
SELECT c.customer_id, CONCAT(c.fname, ' ', c.lname) AS customer, 'high value' AS segment
FROM customer c
WHERE c.customer_id IN (
        SELECT s.customer_id
        FROM sales_fact_1997 s
        GROUP BY s.customer_id
        HAVING SUM(s.store_sales) > (SELECT AVG(store_sales) * 100 FROM sales_fact_1997)
    )
UNION ALL
SELECT c.customer_id, CONCAT(c.fname, ' ', c.lname), 'lapsed'
FROM customer c
WHERE NOT EXISTS (SELECT 1 FROM sales_fact_1997 s WHERE s.customer_id = c.customer_id)
ORDER BY segment, customer
LIMIT 100;
`, v = `-- The expression grammar: CASE, CAST, the full operator precedence chain,
-- string concatenation under PIPES_AS_CONCAT, and quoting.
--
-- Note "state_province" - with ANSI_QUOTES on, double quotes delimit an
-- identifier, not a string. A string is written in single quotes.
SELECT
    \`order\`                                             AS quoted_reserved_word,
    "state_province"                                    AS ansi_quoted,
    c.fname || ' ' || c.lname                           AS full_name,
    CAST(s.store_sales AS DECIMAL(10, 2))               AS sales,
    CASE
        WHEN s.store_sales > 100 THEN 'large'
        WHEN s.store_sales > 10  THEN 'medium'
        ELSE 'small'
    END                                                 AS bucket,
    s.store_sales - s.store_cost * 2 + 1                AS precedence_check,
    DATE_FORMAT(t.the_date, '%Y-%m')                    AS period,
    LEFT(c.lname, 3)                                    AS initials,
    c.city IS NOT NULL AND c.country <> 'Mexico'        AS predicate
FROM sales_fact_1997 s
    JOIN customer c ON s.customer_id = c.customer_id
    JOIN time_by_day t ON s.time_id = t.time_id
WHERE c.lname LIKE 'A%' ESCAPE '!'
  AND c.city NOT IN ('Acapulco', 'Mexico City')
  AND s.unit_sales BETWEEN 1 AND 5;
`, D = `-- Data manipulation. Nothing here is sent anywhere - see the note on the Run
-- button - but the grammar covers the INSERT, UPDATE and DELETE pages, so the
-- examples should too.
INSERT INTO product_class (product_class_id, product_subcategory, product_category, product_department, product_family)
VALUES
    (1000, 'Fresh Fruit', 'Fruit', 'Produce', 'Food'),
    (1001, 'Fresh Herbs', 'Herbs', 'Produce', 'Food') AS new
ON DUPLICATE KEY UPDATE product_subcategory = new.product_subcategory;

INSERT INTO sales_summary (product_family, sales)
SELECT pc.product_family, SUM(s.store_sales)
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
GROUP BY pc.product_family;

UPDATE product
SET SRP = SRP * 1.05
WHERE product_class_id = 1000
ORDER BY product_id
LIMIT 100;

DELETE FROM sales_fact_1997
WHERE store_sales <= 0
LIMIT 10;
`, S = [
  {
    id: "sql-basic",
    label: "Basic query",
    description: "SELECT, WHERE, ORDER BY and LIMIT against the fact table.",
    fileName: "sql-basic.sql",
    text: w
  },
  {
    id: "sql-joins",
    label: "Star schema joins",
    description: "Every join kind, ON and USING - roughly what Mondrian emits for an MDX query.",
    fileName: "sql-joins.sql",
    text: b
  },
  {
    id: "sql-aggregate",
    label: "GROUP BY and ROLLUP",
    description: "Aggregates, DISTINCT counts, HAVING and a subtotal row.",
    fileName: "sql-aggregate.sql",
    text: L
  },
  {
    id: "sql-cte",
    label: "Common table expressions",
    description: "A named intermediate result and a RECURSIVE CTE.",
    fileName: "sql-cte.sql",
    text: q
  },
  {
    id: "sql-window",
    label: "Window functions",
    description: "Running total, rank within partition and LAG, over a named WINDOW.",
    fileName: "sql-window.sql",
    text: x
  },
  {
    id: "sql-set-operations",
    label: "Set operations & subqueries",
    description: "UNION ALL, IN, EXISTS and a scalar subquery.",
    fileName: "sql-set-operations.sql",
    text: C
  },
  {
    id: "sql-expressions",
    label: "Expressions & quoting",
    description: "CASE, CAST, operator precedence, and what ANSI_QUOTES does to double quotes.",
    fileName: "sql-expressions.sql",
    text: v
  },
  {
    id: "sql-dml",
    label: "INSERT / UPDATE / DELETE",
    description: "The data-manipulation statements the grammar covers.",
    fileName: "sql-dml.sql",
    text: D
  }
], _ = /* @__PURE__ */ new Set([
  "select",
  "from",
  "where",
  "group",
  "by",
  "having",
  "order",
  "limit",
  "offset",
  "insert",
  "into",
  "values",
  "value",
  "update",
  "set",
  "delete",
  "replace",
  "with",
  "recursive",
  "as",
  "join",
  "inner",
  "left",
  "right",
  "outer",
  "cross",
  "natural",
  "on",
  "using",
  "union",
  "intersect",
  "except",
  "all",
  "distinct",
  "distinctrow",
  "window",
  "over",
  "partition",
  "rows",
  "range",
  "between",
  "preceding",
  "following",
  "unbounded",
  "current",
  "row",
  "case",
  "when",
  "then",
  "else",
  "end",
  "cast",
  "convert",
  "interval",
  "exists",
  "lateral",
  "straight_join",
  "ignore",
  "force",
  "use",
  "index",
  "key",
  "duplicate",
  "rollup",
  "for",
  "lock",
  "share",
  "mode",
  "nowait",
  "skip",
  "locked",
  "outfile",
  "dumpfile",
  "fields",
  "columns",
  "lines",
  "terminated",
  "enclosed",
  "escaped",
  "starting",
  "optionally",
  "character",
  "low_priority",
  "high_priority",
  "quick",
  "delayed",
  "array",
  "of"
]), p = /* @__PURE__ */ new Set([
  "and",
  "or",
  "not",
  "xor",
  "is",
  "in",
  "like",
  "regexp",
  "rlike",
  "div",
  "mod",
  "sounds",
  "member",
  "escape",
  "any",
  "some"
]), k = /* @__PURE__ */ new Set([
  "null",
  "true",
  "false",
  "unknown",
  "default",
  "asc",
  "desc"
]), m = /* @__PURE__ */ new Set([
  "any_value",
  "avg",
  "bit_and",
  "bit_or",
  "bit_xor",
  "count",
  "group_concat",
  "grouping",
  "json_arrayagg",
  "json_objectagg",
  "max",
  "min",
  "std",
  "stddev",
  "stddev_pop",
  "stddev_samp",
  "sum",
  "var_pop",
  "var_samp",
  "variance",
  "cume_dist",
  "dense_rank",
  "first_value",
  "lag",
  "last_value",
  "lead",
  "nth_value",
  "ntile",
  "percent_rank",
  "rank",
  "row_number",
  "abs",
  "ceil",
  "ceiling",
  "floor",
  "round",
  "truncate",
  "pow",
  "power",
  "sqrt",
  "exp",
  "ln",
  "log",
  "log2",
  "log10",
  "sign",
  "rand",
  "greatest",
  "least",
  "coalesce",
  "ifnull",
  "nullif",
  "if",
  "isnull",
  "concat",
  "concat_ws",
  "substr",
  "substring",
  "substring_index",
  "trim",
  "ltrim",
  "rtrim",
  "lpad",
  "rpad",
  "upper",
  "lower",
  "ucase",
  "lcase",
  "length",
  "char_length",
  "character_length",
  "locate",
  "instr",
  "reverse",
  "repeat",
  "space",
  "strcmp",
  "format",
  "elt",
  "field",
  "find_in_set",
  "now",
  "curdate",
  "curtime",
  "current_date",
  "current_time",
  "current_timestamp",
  "date",
  "time",
  "timestamp",
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "microsecond",
  "dayname",
  "monthname",
  "dayofweek",
  "dayofmonth",
  "dayofyear",
  "weekday",
  "weekofyear",
  "yearweek",
  "last_day",
  "date_add",
  "date_sub",
  "adddate",
  "subdate",
  "addtime",
  "subtime",
  "datediff",
  "timediff",
  "date_format",
  "time_format",
  "str_to_date",
  "unix_timestamp",
  "from_unixtime",
  "makedate",
  "maketime",
  "timestampadd",
  "timestampdiff",
  "sec_to_time",
  "time_to_sec",
  "extract",
  "get_format",
  "convert_tz",
  "json_extract",
  "json_unquote",
  "json_object",
  "json_array",
  "json_contains",
  "json_keys",
  "json_length",
  "json_type",
  "json_valid",
  "json_value",
  "md5",
  "sha1",
  "sha2",
  "uuid",
  "hex",
  "unhex",
  "bin",
  "oct",
  "conv",
  "ascii",
  "char",
  "ord",
  "regexp_like",
  "regexp_replace",
  "regexp_substr",
  "regexp_instr",
  "database",
  "schema",
  "user",
  "version",
  "last_insert_id",
  "row_count",
  "found_rows",
  "connection_id"
]), U = /[_a-zA-Z$]|[^\x00-\x7f]/, E = /[\w$]|[^\x00-\x7f]/, M = {
  name: "sql",
  startState() {
    return { inBlockComment: !1 };
  },
  token(e, s) {
    if (s.inBlockComment)
      return s.inBlockComment = !R(e), "comment";
    if (e.eatSpace())
      return null;
    const t = e.peek();
    if (e.match(/^--(?=[ \t\f]|$)/) || t === "#")
      return e.skipToEnd(), "comment";
    if (e.match("/*"))
      return s.inBlockComment = !0, "comment";
    if (t === "`" || t === '"')
      return e.next(), d(e, t), "variableName";
    if (t === "'")
      return e.next(), d(e, t), "string";
    if (t === "@") {
      for (e.next(), e.eat("@"); !e.eol() && (E.test(e.peek()) || e.peek() === "."); )
        e.next();
      return "meta";
    }
    if (t === "?")
      return e.next(), "meta";
    if (e.match(/^0[xX][0-9a-fA-F]+/) || e.match(/^0[bB][01]+/))
      return "number";
    if (/[0-9]/.test(t) || t === "." && /[0-9]/.test(e.string.charAt(e.pos + 1)))
      return e.match(/^(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/) || e.next(), "number";
    if (U.test(t)) {
      for (e.next(); !e.eol() && E.test(e.peek()); )
        e.next();
      const n = e.current().toLowerCase();
      if (e.peek() === "(") {
        if (m.has(n)) return "function";
        if (!_.has(n) && !p.has(n))
          return "variableName";
      }
      return p.has(n) ? "operator" : k.has(n) ? "atom" : _.has(n) ? "keyword" : m.has(n) ? "function" : "variableName";
    }
    return e.match(/^(<=>|<<|>>|<>|!=|>=|<=|\|\||&&|[-+*/%^&|~!=<>])/) ? "operator" : /[(),;{}]/.test(t) ? (e.next(), null) : t === "." ? (e.next(), "operator") : (e.next(), null);
  },
  // `function` is not a default StreamLanguage token name - returning it
  // unmapped yields no tag at all and the token renders unstyled, silently.
  // Same trap as in the other two languages.
  tokenTable: {
    function: u.function(u.variableName)
  },
  languageData: {
    commentTokens: { line: "--", block: { open: "/*", close: "*/" } },
    closeBrackets: { brackets: ["(", "`", "'", '"'] }
  }
}, N = y.define(M), c = "sql", h = [".sql"];
function g() {
  return new I(N);
}
var F = Object.getOwnPropertyDescriptor, P = (e, s, t, n) => {
  for (var r = n > 1 ? void 0 : n ? F(s, t) : s, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = l(r) || r);
  return r;
};
const B = new URL("./sql-server.worker.js", import.meta.url).href, o = A({
  id: c,
  label: "SQL",
  description: "MySQL 8.4 queries and data manipulation over a relational source",
  extensions: h,
  support: g,
  serverWorkerUrl: B,
  examples: S,
  hasOutline: !0
});
let i = class {
  id = o.id;
  label = o.label;
  description = o.description;
  extensions = o.extensions;
  support = o.support;
  examples = o.examples;
  hasOutline = o.hasOutline;
  createServerWorker = o.createServerWorker;
};
i = P([
  O({
    service: [T],
    properties: { "language.id": c }
  })
], i);
const W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SQL_EXAMPLES: S,
  SQL_FILE_EXTENSIONS: h,
  SQL_LANGUAGE: o,
  SQL_LANGUAGE_ID: c,
  get SqlLanguageProvider() {
    return i;
  },
  sql: g,
  sqlStreamLanguage: N
}, Symbol.toStringTag, { value: "Module" })), f = "org.eclipse.daanse.board.app.lib.lsp.lang.sql", j = "0.0.1-next.1";
async function X(e) {
  const s = globalThis.__tsm__;
  if (!s)
    throw new Error(`${f}: tsm runtime is not initialized`);
  s.register(f, W, j, "lib.lsp.lang.sql"), await void 0;
}
async function Q(e) {
  await void 0;
}
export {
  S as SQL_EXAMPLES,
  h as SQL_FILE_EXTENSIONS,
  o as SQL_LANGUAGE,
  c as SQL_LANGUAGE_ID,
  i as SqlLanguageProvider,
  X as activate,
  Q as deactivate,
  g as sql,
  N as sqlStreamLanguage
};
