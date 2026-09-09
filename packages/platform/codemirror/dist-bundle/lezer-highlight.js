import { N as F } from "./index-BH-51Y2d.js";
let _ = 0;
class m {
  /**
  @internal
  */
  constructor(t, i, n, a) {
    this.name = t, this.set = i, this.base = n, this.modified = a, this.id = _++;
  }
  toString() {
    let { name: t } = this;
    for (let i of this.modified)
      i.name && (t = `${i.name}(${t})`);
    return t;
  }
  static define(t, i) {
    let n = typeof t == "string" ? t : "?";
    if (t instanceof m && (i = t), i?.base)
      throw new Error("Can not derive from a modified tag");
    let a = new m(n, [], null, []);
    if (a.set.push(a), i)
      for (let o of i.set)
        a.set.push(o);
    return a;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(t) {
    let i = new q(t);
    return (n) => n.modified.indexOf(i) > -1 ? n : q.get(n.base || n, n.modified.concat(i).sort((a, o) => a.id - o.id));
  }
}
let G = 0;
class q {
  constructor(t) {
    this.name = t, this.instances = [], this.id = G++;
  }
  static get(t, i) {
    if (!i.length)
      return t;
    let n = i[0].instances.find((r) => r.base == t && Q(i, r.modified));
    if (n)
      return n;
    let a = [], o = new m(t.name, a, t, i);
    for (let r of i)
      r.instances.push(o);
    let g = U(i);
    for (let r of t.set)
      if (!r.modified.length)
        for (let d of g)
          a.push(q.get(r, d));
    return o;
  }
}
function Q(s, t) {
  return s.length == t.length && s.every((i, n) => i == t[n]);
}
function U(s) {
  let t = [[]];
  for (let i = 0; i < s.length; i++)
    for (let n = 0, a = t.length; n < a; n++)
      t.push(t[n].concat(s[i]));
  return t.sort((i, n) => n.length - i.length);
}
function W(s) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let i in s) {
    let n = s[i];
    Array.isArray(n) || (n = [n]);
    for (let a of i.split(" "))
      if (a) {
        let o = [], g = 2, r = a;
        for (let h = 0; ; ) {
          if (r == "..." && h > 0 && h + 3 == a.length) {
            g = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(r);
          if (!f)
            throw new RangeError("Invalid path: " + a);
          if (o.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), h += f[0].length, h == a.length)
            break;
          let p = a[h++];
          if (h == a.length && p == "!") {
            g = 0;
            break;
          }
          if (p != "/")
            throw new RangeError("Invalid path: " + a);
          r = a.slice(h);
        }
        let d = o.length - 1, c = o[d];
        if (!c)
          throw new RangeError("Invalid path: " + a);
        let b = new R(n, g, d > 0 ? o.slice(0, d) : null);
        t[c] = b.sort(t[c]);
      }
  }
  return J.add(t);
}
const J = new F({
  combine(s, t) {
    let i, n, a;
    for (; s || t; ) {
      if (!s || t && s.depth >= t.depth ? (a = t, t = t.next) : (a = s, s = s.next), i && i.mode == a.mode && !a.context && !i.context)
        continue;
      let o = new R(a.tags, a.mode, a.context);
      i ? i.next = o : n = o, i = o;
    }
    return n;
  }
});
class R {
  constructor(t, i, n, a) {
    this.tags = t, this.mode = i, this.context = n, this.next = a;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(t) {
    return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
R.empty = new R([], 2, null);
function L(s, t) {
  let i = /* @__PURE__ */ Object.create(null);
  for (let o of s)
    if (!Array.isArray(o.tag))
      i[o.tag.id] = o.class;
    else
      for (let g of o.tag)
        i[g.id] = o.class;
  let { scope: n, all: a = null } = t || {};
  return {
    style: (o) => {
      let g = a;
      for (let r of o)
        for (let d of r.set) {
          let c = i[d.id];
          if (c) {
            g = g ? g + " " + c : c;
            break;
          }
        }
      return g;
    },
    scope: n
  };
}
function X(s, t) {
  let i = null;
  for (let n of s) {
    let a = n.style(t);
    a && (i = i ? i + " " + a : a);
  }
  return i;
}
function P(s, t, i, n = 0, a = s.length) {
  let o = new Z(n, Array.isArray(t) ? t : [t], i);
  o.highlightRange(s.cursor(), n, a, "", o.highlighters), o.flush(a);
}
function Y(s, t, i, n, a, o = 0, g = s.length) {
  let r = o;
  function d(c, b) {
    if (!(c <= r)) {
      for (let h = s.slice(r, c), f = 0; ; ) {
        let p = h.indexOf(`
`, f), T = p < 0 ? h.length : p;
        if (T > f && n(h.slice(f, T), b), p < 0)
          break;
        a(), f = p + 1;
      }
      r = c;
    }
  }
  P(t, i, (c, b, h) => {
    d(c, ""), d(b, h);
  }, o, g), d(g, "");
}
class Z {
  constructor(t, i, n) {
    this.at = t, this.highlighters = i, this.span = n, this.class = "";
  }
  startSpan(t, i) {
    i != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = i);
  }
  flush(t) {
    t > this.at && this.class && this.span(this.at, t, this.class);
  }
  highlightRange(t, i, n, a, o) {
    let { type: g, from: r, to: d } = t;
    if (r >= n || d <= i)
      return;
    g.isTop && (o = this.highlighters.filter((p) => !p.scope || p.scope(g)));
    let c = a, b = V(t) || R.empty, h = X(o, b.tags);
    if (h && (c && (c += " "), c += h, b.mode == 1 && (a += (a ? " " : "") + h)), this.startSpan(Math.max(i, r), c), b.opaque)
      return;
    let f = t.tree && t.tree.prop(F.mounted);
    if (f && f.overlay) {
      let p = t.node.enter(f.overlay[0].from + r, 1), T = this.highlighters.filter((v) => !v.scope || v.scope(f.tree.type)), K = t.firstChild();
      for (let v = 0, M = r; ; v++) {
        let S = v < f.overlay.length ? f.overlay[v] : null, B = S ? S.from + r : d, D = Math.max(i, M), A = Math.min(n, B);
        if (D < A && K)
          for (; t.from < A && (this.highlightRange(t, D, A, a, o), this.startSpan(Math.min(A, t.to), c), !(t.to >= B || !t.nextSibling())); )
            ;
        if (!S || B > n)
          break;
        M = S.to + r, M > i && (this.highlightRange(p.cursor(), Math.max(i, S.from + r), Math.min(n, M), "", T), this.startSpan(Math.min(n, M), c));
      }
      K && t.parent();
    } else if (t.firstChild()) {
      f && (a = "");
      do
        if (!(t.to <= i)) {
          if (t.from >= n)
            break;
          this.highlightRange(t, i, n, a, o), this.startSpan(Math.min(n, t.to), c);
        }
      while (t.nextSibling());
      t.parent();
    }
  }
}
function V(s) {
  let t = s.type.prop(J);
  for (; t && t.context && !s.matchContext(t.context); )
    t = t.next;
  return t || null;
}
const e = m.define, C = e(), x = e(), $ = e(x), z = e(x), N = e(), I = e(N), E = e(N), y = e(), w = e(y), u = e(), k = e(), H = e(), O = e(H), j = e(), l = {
  /**
  A comment.
  */
  comment: C,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: e(C),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: e(C),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: e(C),
  /**
  Any kind of identifier.
  */
  name: x,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: e(x),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: $,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: e($),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: z,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: e(z),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: e(x),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: e(x),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: e(x),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: e(x),
  /**
  A literal value.
  */
  literal: N,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: I,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: e(I),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: e(I),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: e(I),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: E,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: e(E),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: e(E),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: e(N),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: e(N),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: e(N),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: e(N),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: e(N),
  /**
  A language keyword.
  */
  keyword: u,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: e(u),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: e(u),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: e(u),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: e(u),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: e(u),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: e(u),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: e(u),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: e(u),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: e(u),
  /**
  An operator.
  */
  operator: k,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: e(k),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: e(k),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: e(k),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: e(k),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: e(k),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: e(k),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: e(k),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: e(k),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: e(k),
  /**
  Program or markup punctuation.
  */
  punctuation: H,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: e(H),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: O,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: e(O),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: e(O),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: e(O),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: e(O),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: y,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: w,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: e(w),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: e(w),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: e(w),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: e(w),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: e(w),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: e(w),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: e(y),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: e(y),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: e(y),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: e(y),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: e(y),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: e(y),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: e(y),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: e(y),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: e(),
  /**
  Deleted text.
  */
  deleted: e(),
  /**
  Changed text.
  */
  changed: e(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: e(),
  /**
  Metadata or meta-instruction.
  */
  meta: j,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: e(j),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: e(j),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: e(j),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: m.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: m.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: m.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: m.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: m.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: m.defineModifier("special")
};
for (let s in l) {
  let t = l[s];
  t instanceof m && (t.name = s);
}
const tt = L([
  { tag: l.link, class: "tok-link" },
  { tag: l.heading, class: "tok-heading" },
  { tag: l.emphasis, class: "tok-emphasis" },
  { tag: l.strong, class: "tok-strong" },
  { tag: l.keyword, class: "tok-keyword" },
  { tag: l.atom, class: "tok-atom" },
  { tag: l.bool, class: "tok-bool" },
  { tag: l.url, class: "tok-url" },
  { tag: l.labelName, class: "tok-labelName" },
  { tag: l.inserted, class: "tok-inserted" },
  { tag: l.deleted, class: "tok-deleted" },
  { tag: l.literal, class: "tok-literal" },
  { tag: l.string, class: "tok-string" },
  { tag: l.number, class: "tok-number" },
  { tag: [l.regexp, l.escape, l.special(l.string)], class: "tok-string2" },
  { tag: l.variableName, class: "tok-variableName" },
  { tag: l.local(l.variableName), class: "tok-variableName tok-local" },
  { tag: l.definition(l.variableName), class: "tok-variableName tok-definition" },
  { tag: l.special(l.variableName), class: "tok-variableName2" },
  { tag: l.definition(l.propertyName), class: "tok-propertyName tok-definition" },
  { tag: l.typeName, class: "tok-typeName" },
  { tag: l.namespace, class: "tok-namespace" },
  { tag: l.className, class: "tok-className" },
  { tag: l.macroName, class: "tok-macroName" },
  { tag: l.propertyName, class: "tok-propertyName" },
  { tag: l.operator, class: "tok-operator" },
  { tag: l.comment, class: "tok-comment" },
  { tag: l.meta, class: "tok-meta" },
  { tag: l.invalid, class: "tok-invalid" },
  { tag: l.punctuation, class: "tok-punctuation" }
]), it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tag: m,
  classHighlighter: tt,
  getStyleTags: V,
  highlightCode: Y,
  highlightTree: P,
  styleTags: W,
  tagHighlighter: L,
  tags: l
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as Tag,
  tt as classHighlighter,
  it as default,
  V as getStyleTags,
  Y as highlightCode,
  P as highlightTree,
  W as styleTags,
  L as tagHighlighter,
  l as tags
};
