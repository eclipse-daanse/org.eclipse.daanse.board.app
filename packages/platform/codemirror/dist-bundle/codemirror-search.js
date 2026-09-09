import { getPanel as ee, getDialog as xe, showDialog as Se, EditorView as S, ViewPlugin as te, showPanel as Me, Decoration as d, runScopeHandlers as ye } from "@codemirror/view";
import { StateEffect as z, codePointAt as ve, fromCodePoint as be, codePointSize as Ce, EditorState as ke, StateField as Le, EditorSelection as p, Facet as re, Prec as We, combineConfig as ne, CharCategory as g, RangeSetBuilder as Ae, findClusterBreak as ie } from "@codemirror/state";
import { c as m } from "./index-CNXpFeEX.js";
const Y = typeof String.prototype.normalize == "function" ? (r) => r.normalize("NFKD") : (r) => r;
class M {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(e, t, n = 0, i = e.length, s, l) {
    this.test = l, this.value = { from: 0, to: 0, precise: !1 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, i), this.bufferStart = n, this.normalize = s ? (c) => s(Y(c)) : Y, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return ve(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = be(e), n = this.bufferStart + this.bufferPos;
      this.bufferPos += Ce(e);
      let i = this.normalize(t);
      if (i.length)
        for (let s = 0, l = n, c = !0; ; s++) {
          let o = i.charCodeAt(s), h = this.match(o, l, c, this.bufferPos + this.bufferStart, s == i.length - 1);
          if (h)
            return this.value = h, this;
          if (s == i.length - 1)
            break;
          c && s < t.length && t.charCodeAt(s) == o ? l++ : c = !1;
        }
    }
  }
  match(e, t, n, i, s) {
    let l = null;
    for (let c = 0; c < this.matches.length; ) {
      let o = this.matches[c], h = !1;
      this.query.charCodeAt(o.index) == e && (o.index == this.query.length - 1 ? l = { from: o.from, to: i, precise: s && o.precise } : (o.index++, h = !0)), h ? c++ : this.matches.splice(c, 1);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? l = { from: t, to: i, precise: n && s } : this.matches.push({ from: t, index: 1, precise: n })), l && this.test && !this.test(l.from, l.to, this.buffer, this.bufferStart) && (l = null), l;
  }
}
typeof Symbol < "u" && (M.prototype[Symbol.iterator] = function() {
  return this;
});
const se = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec(""), precise: !0 }, B = "gm" + (/x/.unicode == null ? "" : "u");
class N {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, n, i = 0, s = e.length) {
    if (this.text = e, this.to = s, this.curLine = "", this.done = !1, this.value = se, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new le(e, t, n, i, s);
    this.re = new RegExp(t, B + (n?.ignoreCase ? "i" : "")), this.test = n?.test, this.iter = e.iter();
    let l = e.lineAt(i);
    this.curLineStart = l.from, this.matchPos = q(e, i), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let n = this.curLineStart + t.index, i = n + t[0].length;
        if (this.matchPos = q(this.text, i + (n == i ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < i || n > this.value.to) && (!this.test || this.test(n, i, t)))
          return this.value = { from: n, to: i, precise: !0, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const O = /* @__PURE__ */ new WeakMap();
class C {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, n) {
    let i = O.get(e);
    if (!i || i.from >= n || i.to <= t) {
      let c = new C(t, e.sliceString(t, n));
      return O.set(e, c), c;
    }
    if (i.from == t && i.to == n)
      return i;
    let { text: s, from: l } = i;
    return l > t && (s = e.sliceString(t, l) + s, l = t), i.to < n && (s += e.sliceString(i.to, n)), O.set(e, new C(l, s)), new C(t, s.slice(t - l, n - l));
  }
}
class le {
  constructor(e, t, n, i, s) {
    this.text = e, this.to = s, this.done = !1, this.value = se, this.matchPos = q(e, i), this.re = new RegExp(t, B + (n?.ignoreCase ? "i" : "")), this.test = n?.test, this.flat = C.get(e, i, this.chunkEnd(
      i + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let n = this.flat.from + t.index, i = n + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, i, t)))
          return this.value = { from: n, to: i, precise: !0, match: t }, this.matchPos = q(this.text, i + (n == i ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = C.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (N.prototype[Symbol.iterator] = le.prototype[Symbol.iterator] = function() {
  return this;
});
function Ee(r) {
  try {
    return new RegExp(r, B), !0;
  } catch {
    return !1;
  }
}
function q(r, e) {
  if (e >= r.length)
    return e;
  let t = r.lineAt(e), n;
  for (; e < t.to && (n = t.text.charCodeAt(e - t.from)) >= 56320 && n < 57344; )
    e++;
  return e;
}
const ce = (r) => {
  let e = xe(r, "cm-goto-line");
  if (e) {
    let l = e.dom.querySelector("input[type=text]");
    return l && l.select(), !0;
  }
  let { state: t } = r, n = String(t.doc.lineAt(r.state.selection.main.head).number), { close: i, result: s } = Se(r, {
    class: "cm-goto-line",
    label: t.phrase("Go to line"),
    input: { type: "text", name: "line", value: n },
    focus: !0,
    submitLabel: t.phrase("go")
  });
  return s.then((l) => {
    let c = l && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(l.elements.line.value);
    if (!c) {
      r.dispatch({ effects: i });
      return;
    }
    let o = t.doc.lineAt(t.selection.main.head), [, h, a, u, F] = c, pe = u ? +u.slice(1) : 0, L = a ? +a : o.number;
    if (a && F) {
      let T = L / 100;
      h && (T = T * (h == "-" ? -1 : 1) + o.number / t.doc.lines), L = Math.round(t.doc.lines * T);
    } else a && h && (L = L * (h == "-" ? -1 : 1) + o.number);
    let U = t.doc.line(Math.max(1, Math.min(t.doc.lines, L))), X = p.cursor(U.from + Math.max(0, Math.min(pe, U.length)));
    r.dispatch({
      effects: [i, S.scrollIntoView(X.from, { y: "center" })],
      selection: X
    });
  }), !0;
}, Fe = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, oe = /* @__PURE__ */ re.define({
  combine(r) {
    return ne(r, Fe, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function De(r) {
  let e = [Ie, Pe];
  return r && e.push(oe.of(r)), e;
}
const Re = /* @__PURE__ */ d.mark({ class: "cm-selectionMatch" }), qe = /* @__PURE__ */ d.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Z(r, e, t, n) {
  return (t == 0 || r(e.sliceDoc(t - 1, t)) != g.Word) && (n == e.doc.length || r(e.sliceDoc(n, n + 1)) != g.Word);
}
function we(r, e, t, n) {
  return r(e.sliceDoc(t, t + 1)) == g.Word && r(e.sliceDoc(n - 1, n)) == g.Word;
}
const Pe = /* @__PURE__ */ te.fromClass(class {
  constructor(r) {
    this.decorations = this.getDeco(r);
  }
  update(r) {
    (r.selectionSet || r.docChanged || r.viewportChanged) && (this.decorations = this.getDeco(r.view));
  }
  getDeco(r) {
    let e = r.state.facet(oe), { state: t } = r, n = t.selection;
    if (n.ranges.length > 1)
      return d.none;
    let i = n.main, s, l = null;
    if (i.empty) {
      if (!e.highlightWordAroundCursor)
        return d.none;
      let o = t.wordAt(i.head);
      if (!o)
        return d.none;
      l = t.charCategorizer(i.head), s = t.sliceDoc(o.from, o.to);
    } else {
      let o = i.to - i.from;
      if (o < e.minSelectionLength || o > 200)
        return d.none;
      if (e.wholeWords) {
        if (s = t.sliceDoc(i.from, i.to), l = t.charCategorizer(i.head), !(Z(l, t, i.from, i.to) && we(l, t, i.from, i.to)))
          return d.none;
      } else if (s = t.sliceDoc(i.from, i.to), !s)
        return d.none;
    }
    let c = [];
    for (let o of r.visibleRanges) {
      let h = new M(t.doc, s, o.from, o.to);
      for (; !h.next().done; ) {
        let { from: a, to: u } = h.value;
        if ((!l || Z(l, t, a, u)) && (i.empty && a <= i.from && u >= i.to ? c.push(qe.range(a, u)) : (a >= i.to || u <= i.from) && c.push(Re.range(a, u)), c.length > e.maxMatches))
          return d.none;
      }
    }
    return d.set(c);
  }
}, {
  decorations: (r) => r.decorations
}), Ie = /* @__PURE__ */ S.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), Te = ({ state: r, dispatch: e }) => {
  let { selection: t } = r, n = p.create(t.ranges.map((i) => r.wordAt(i.head) || p.cursor(i.head)), t.mainIndex);
  return n.eq(t) ? !1 : (e(r.update({ selection: n })), !0);
};
function Oe(r, e) {
  let { main: t, ranges: n } = r.selection, i = r.wordAt(t.head), s = i && i.from == t.from && i.to == t.to;
  for (let l = !1, c = new M(r.doc, e, n[n.length - 1].to); ; )
    if (c.next(), c.done) {
      if (l)
        return null;
      c = new M(r.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), l = !0;
    } else {
      if (l && n.some((o) => o.from == c.value.from))
        continue;
      if (s) {
        let o = r.wordAt(c.value.from);
        if (!o || o.from != c.value.from || o.to != c.value.to)
          continue;
      }
      return c.value;
    }
}
const he = ({ state: r, dispatch: e }) => {
  let { ranges: t } = r.selection;
  if (t.some((s) => s.from === s.to))
    return Te({ state: r, dispatch: e });
  let n = r.sliceDoc(t[0].from, t[0].to);
  if (r.selection.ranges.some((s) => r.sliceDoc(s.from, s.to) != n))
    return !1;
  let i = Oe(r, n);
  return i ? (e(r.update({
    selection: r.selection.addRange(p.range(i.from, i.to), !1),
    effects: S.scrollIntoView(i.to)
  })), !0) : !1;
}, y = /* @__PURE__ */ re.define({
  combine(r) {
    return ne(r, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new Xe(e),
      scrollToMatch: (e) => S.scrollIntoView(e)
    });
  }
});
function _e(r) {
  return r ? [y.of(r), Q] : Q;
}
class V {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Ee(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord, this.test = e.test;
  }
  /**
  @internal
  */
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord && this.test == e.test;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new Ve(this) : new ze(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, n) {
    let i = e.doc ? e : ke.create({ doc: e });
    return n == null && (n = i.doc.length), this.regexp ? b(this, i, t, n) : v(this, i, t, n);
  }
}
class ae {
  constructor(e) {
    this.spec = e;
  }
}
function $e(r, e, t) {
  return (n, i, s, l) => {
    if (t && !t(n, i, s, l))
      return !1;
    let c = n >= l && i <= l + s.length ? s.slice(n - l, i - l) : e.doc.sliceString(n, i);
    return r(c, e, n, i);
  };
}
function v(r, e, t, n) {
  let i;
  return r.wholeWord && (i = Qe(e.doc, e.charCategorizer(e.selection.main.head))), r.test && (i = $e(r.test, e, i)), new M(e.doc, r.unquoted, t, n, r.caseSensitive ? void 0 : (s) => s.toLowerCase(), i);
}
function Qe(r, e) {
  return (t, n, i, s) => ((s > t || s + i.length < n) && (s = Math.max(0, t - 2), i = r.sliceString(s, Math.min(r.length, n + 2))), (e(w(i, t - s)) != g.Word || e(P(i, t - s)) != g.Word) && (e(P(i, n - s)) != g.Word || e(w(i, n - s)) != g.Word));
}
class ze extends ae {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, n) {
    let i = v(this.spec, e, n, e.doc.length).nextOverlapping();
    if (i.done) {
      let s = Math.min(e.doc.length, t + this.spec.unquoted.length);
      i = v(this.spec, e, 0, s).nextOverlapping();
    }
    return i.done || i.value.from == t && i.value.to == n ? null : i.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, n) {
    for (let i = n; ; ) {
      let s = Math.max(t, i - 1e4 - this.spec.unquoted.length), l = v(this.spec, e, s, i), c = null;
      for (; !l.nextOverlapping().done; )
        c = l.value;
      if (c)
        return c;
      if (s == t)
        return null;
      i -= 1e4;
    }
  }
  prevMatch(e, t, n) {
    let i = this.prevMatchInRange(e, 0, t);
    return i || (i = this.prevMatchInRange(e, Math.max(0, n - this.spec.unquoted.length), e.doc.length)), i && (i.from != t || i.to != n) ? i : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let n = v(this.spec, e, 0, e.doc.length), i = [];
    for (; !n.next().done; ) {
      if (i.length >= t)
        return null;
      i.push(n.value);
    }
    return i;
  }
  highlight(e, t, n, i) {
    let s = v(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done; )
      i(s.value.from, s.value.to);
  }
}
function Be(r, e, t) {
  return (n, i, s) => (!t || t(n, i, s)) && r(s[0], e, n, i);
}
function b(r, e, t, n) {
  let i;
  return r.wholeWord && (i = Ne(e.charCategorizer(e.selection.main.head))), r.test && (i = Be(r.test, e, i)), new N(e.doc, r.search, { ignoreCase: !r.caseSensitive, test: i }, t, n);
}
function w(r, e) {
  return r.slice(ie(r, e, !1), e);
}
function P(r, e) {
  return r.slice(e, ie(r, e));
}
function Ne(r) {
  return (e, t, n) => !n[0].length || (r(w(n.input, n.index)) != g.Word || r(P(n.input, n.index)) != g.Word) && (r(P(n.input, n.index + n[0].length)) != g.Word || r(w(n.input, n.index + n[0].length)) != g.Word);
}
class Ve extends ae {
  nextMatch(e, t, n) {
    let i = b(this.spec, e, n, e.doc.length).next();
    return i.done && (i = b(this.spec, e, 0, t).next()), i.done ? null : i.value;
  }
  prevMatchInRange(e, t, n) {
    for (let i = 1; ; i++) {
      let s = Math.max(
        t,
        n - i * 1e4
        /* FindPrev.ChunkSize */
      ), l = b(this.spec, e, s, n), c = null;
      for (; !l.next().done; )
        c = l.value;
      if (c && (s == t || c.from > s + 10))
        return c;
      if (s == t)
        return null;
    }
  }
  prevMatch(e, t, n) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, n) => {
      if (n == "&")
        return e.match[0];
      if (n == "$")
        return "$";
      for (let i = n.length; i > 0; i--) {
        let s = +n.slice(0, i);
        if (s > 0 && s < e.match.length)
          return e.match[s] + n.slice(i);
      }
      return t;
    });
  }
  matchAll(e, t) {
    let n = b(this.spec, e, 0, e.doc.length), i = [];
    for (; !n.next().done; ) {
      if (i.length >= t)
        return null;
      i.push(n.value);
    }
    return i;
  }
  highlight(e, t, n, i) {
    let s = b(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(n + 250, e.doc.length));
    for (; !s.next().done; )
      i(s.value.from, s.value.to);
  }
}
const k = /* @__PURE__ */ z.define(), H = /* @__PURE__ */ z.define(), x = /* @__PURE__ */ Le.define({
  create(r) {
    return new _(I(r).create(), null);
  },
  update(r, e) {
    for (let t of e.effects)
      t.is(k) ? r = new _(t.value.create(), r.panel) : t.is(H) && (r = new _(r.query, t.value ? K : null));
    return r;
  },
  provide: (r) => Me.from(r, (e) => e.panel)
});
function He(r) {
  let e = r.field(x, !1);
  return e ? e.query.spec : I(r);
}
function Ke(r) {
  var e;
  return ((e = r.field(x, !1)) === null || e === void 0 ? void 0 : e.panel) != null;
}
class _ {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const je = /* @__PURE__ */ d.mark({ class: "cm-searchMatch" }), Ge = /* @__PURE__ */ d.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), Je = /* @__PURE__ */ te.fromClass(class {
  constructor(r) {
    this.view = r, this.decorations = this.highlight(r.state.field(x));
  }
  update(r) {
    let e = r.state.field(x);
    (e != r.startState.field(x) || r.docChanged || r.selectionSet || r.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: r, panel: e }) {
    if (!e || !r.spec.valid)
      return d.none;
    let { view: t } = this, n = new Ae();
    for (let i = 0, s = t.visibleRanges, l = s.length; i < l; i++) {
      let { from: c, to: o } = s[i];
      for (; i < l - 1 && o > s[i + 1].from - 500; )
        o = s[++i].to;
      r.highlight(t.state, c, o, (h, a) => {
        let u = t.state.selection.ranges.some((F) => F.from == h && F.to == a);
        n.add(h, a, u ? Ge : je);
      });
    }
    return n.finish();
  }
}, {
  decorations: (r) => r.decorations
});
function E(r) {
  return (e) => {
    let t = e.state.field(x, !1);
    return t && t.query.spec.valid ? r(e, t) : j(e);
  };
}
const W = /* @__PURE__ */ E((r, { query: e }) => {
  let { to: t } = r.state.selection.main, n = e.nextMatch(r.state, t, t);
  if (!n)
    return !1;
  let i = p.single(n.from, n.to), s = r.state.facet(y);
  return r.dispatch({
    selection: i,
    effects: [J(r, n), s.scrollToMatch(i.main, r)],
    userEvent: "select.search"
  }), ge(r), !0;
}), A = /* @__PURE__ */ E((r, { query: e }) => {
  let { state: t } = r, { from: n } = t.selection.main, i = e.prevMatch(t, n, n);
  if (!i)
    return !1;
  let s = p.single(i.from, i.to), l = r.state.facet(y);
  return r.dispatch({
    selection: s,
    effects: [J(r, i), l.scrollToMatch(s.main, r)],
    userEvent: "select.search"
  }), ge(r), !0;
}), ue = /* @__PURE__ */ E((r, { query: e }) => {
  let t = e.matchAll(r.state, 1e3);
  return !t || !t.length ? !1 : (r.dispatch({
    selection: p.create(t.map((n) => p.range(n.from, n.to))),
    userEvent: "select.search.matches"
  }), !0);
}), fe = ({ state: r, dispatch: e }) => {
  let t = r.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: n, to: i } = t.main, s = [], l = 0;
  for (let c = new M(r.doc, r.sliceDoc(n, i)); !c.next().done; ) {
    if (s.length > 1e3)
      return !1;
    c.value.from == n && (l = s.length), s.push(p.range(c.value.from, c.value.to));
  }
  return e(r.update({
    selection: p.create(s, l),
    userEvent: "select.search.matches"
  })), !0;
}, $ = /* @__PURE__ */ E((r, { query: e }) => {
  let { state: t } = r, { from: n, to: i } = t.selection.main;
  if (t.readOnly)
    return !1;
  let s = e.nextMatch(t, n, n);
  if (!s)
    return !1;
  let l = s, c = [], o, h, a = [];
  l.precise ? l.from == n && l.to == i && (h = t.toText(e.getReplacement(l)), c.push({ from: l.from, to: l.to, insert: h }), l = e.nextMatch(t, l.from, l.to), a.push(S.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(n).number) + "."))) : l = e.nextMatch(t, l.from, l.to);
  let u = r.state.changes(c);
  return l && (o = p.single(l.from, l.to).map(u), a.push(J(r, l)), a.push(t.facet(y).scrollToMatch(o.main, r))), r.dispatch({
    changes: u,
    selection: o,
    effects: a,
    userEvent: "input.replace"
  }), !0;
}), de = /* @__PURE__ */ E((r, { query: e }) => {
  if (r.state.readOnly)
    return !1;
  let t = [];
  for (let i of e.matchAll(r.state, 1e9)) {
    let { from: s, to: l, precise: c } = i;
    c && t.push({ from: s, to: l, insert: e.getReplacement(i) });
  }
  if (!t.length)
    return !1;
  let n = r.state.phrase("replaced $ matches", t.length) + ".";
  return r.dispatch({
    changes: t,
    effects: S.announce.of(n),
    userEvent: "input.replace.all"
  }), !0;
});
function K(r) {
  return r.state.facet(y).createPanel(r);
}
function I(r, e) {
  var t, n, i, s, l;
  let c = r.selection.main, o = c.empty || c.to > c.from + 100 ? "" : r.sliceDoc(c.from, c.to);
  if (e && !o)
    return e;
  let h = r.facet(y);
  return new V({
    search: ((t = e?.literal) !== null && t !== void 0 ? t : h.literal) ? o : o.replace(/\n/g, "\\n"),
    caseSensitive: (n = e?.caseSensitive) !== null && n !== void 0 ? n : h.caseSensitive,
    literal: (i = e?.literal) !== null && i !== void 0 ? i : h.literal,
    regexp: (s = e?.regexp) !== null && s !== void 0 ? s : h.regexp,
    wholeWord: (l = e?.wholeWord) !== null && l !== void 0 ? l : h.wholeWord
  });
}
function me(r) {
  let e = ee(r, K);
  return e && e.dom.querySelector("[main-field]");
}
function ge(r) {
  let e = me(r);
  e && e == r.root.activeElement && e.select();
}
const j = (r) => {
  let e = r.state.field(x, !1);
  if (e && e.panel) {
    let t = me(r);
    if (t && t != r.root.activeElement) {
      let n = I(r.state, e.query.spec);
      n.valid && r.dispatch({ effects: k.of(n) }), t.focus(), t.select();
    }
  } else
    r.dispatch({ effects: [
      H.of(!0),
      e ? k.of(I(r.state, e.query.spec)) : z.appendConfig.of(Q)
    ] });
  return !0;
}, G = (r) => {
  let e = r.state.field(x, !1);
  if (!e || !e.panel)
    return !1;
  let t = ee(r, K);
  return t && t.dom.contains(r.root.activeElement) && r.focus(), r.dispatch({ effects: H.of(!1) }), !0;
}, Ue = [
  { key: "Mod-f", run: j, scope: "editor search-panel" },
  { key: "F3", run: W, shift: A, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: W, shift: A, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: G, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: fe },
  { key: "Mod-Alt-g", run: ce },
  { key: "Mod-d", run: he, preventDefault: !0 }
];
class Xe {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(x).query.spec;
    this.commit = this.commit.bind(this), this.searchField = m("input", {
      value: t.search,
      placeholder: f(e, "Find"),
      "aria-label": f(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = m("input", {
      value: t.replace,
      placeholder: f(e, "Replace"),
      "aria-label": f(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = m("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = m("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = m("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function n(i, s, l) {
      return m("button", { class: "cm-button", name: i, onclick: s, type: "button" }, l);
    }
    this.dom = m("div", { onkeydown: (i) => this.keydown(i), class: "cm-search" }, [
      this.searchField,
      n("next", () => W(e), [f(e, "next")]),
      n("prev", () => A(e), [f(e, "previous")]),
      n("select", () => ue(e), [f(e, "all")]),
      m("label", null, [this.caseField, f(e, "match case")]),
      m("label", null, [this.reField, f(e, "regexp")]),
      m("label", null, [this.wordField, f(e, "by word")]),
      ...e.state.readOnly ? [] : [
        m("br"),
        this.replaceField,
        n("replace", () => $(e), [f(e, "replace")]),
        n("replaceAll", () => de(e), [f(e, "replace all")])
      ],
      m("button", {
        name: "close",
        onclick: () => G(e),
        "aria-label": f(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new V({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: k.of(e) }));
  }
  keydown(e) {
    ye(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? A : W)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), $(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(k) && !n.value.eq(this.query) && this.setQuery(n.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(y).top;
  }
}
function f(r, e) {
  return r.state.phrase(e);
}
const D = 30, R = /[\s\.,:;?!]/;
function J(r, { from: e, to: t }) {
  let n = r.state.doc.lineAt(e), i = r.state.doc.lineAt(t).to, s = Math.max(n.from, e - D), l = Math.min(i, t + D), c = r.state.sliceDoc(s, l);
  if (s != n.from) {
    for (let o = 0; o < D; o++)
      if (!R.test(c[o + 1]) && R.test(c[o])) {
        c = c.slice(o);
        break;
      }
  }
  if (l != i) {
    for (let o = c.length - 1; o > c.length - D; o--)
      if (!R.test(c[o - 1]) && R.test(c[o])) {
        c = c.slice(0, o);
        break;
      }
  }
  return S.announce.of(`${r.state.phrase("current match")}. ${c} ${r.state.phrase("on line")} ${n.number}.`);
}
const Ye = /* @__PURE__ */ S.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), Q = [
  x,
  /* @__PURE__ */ We.low(Je),
  Ye
], rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RegExpCursor: N,
  SearchCursor: M,
  SearchQuery: V,
  closeSearchPanel: G,
  findNext: W,
  findPrevious: A,
  getSearchQuery: He,
  gotoLine: ce,
  highlightSelectionMatches: De,
  openSearchPanel: j,
  replaceAll: de,
  replaceNext: $,
  search: _e,
  searchKeymap: Ue,
  searchPanelOpen: Ke,
  selectMatches: ue,
  selectNextOccurrence: he,
  selectSelectionMatches: fe,
  setSearchQuery: k
}, Symbol.toStringTag, { value: "Module" }));
export {
  N as RegExpCursor,
  M as SearchCursor,
  V as SearchQuery,
  G as closeSearchPanel,
  rt as default,
  W as findNext,
  A as findPrevious,
  He as getSearchQuery,
  ce as gotoLine,
  De as highlightSelectionMatches,
  j as openSearchPanel,
  de as replaceAll,
  $ as replaceNext,
  _e as search,
  Ue as searchKeymap,
  Ke as searchPanelOpen,
  ue as selectMatches,
  he as selectNextOccurrence,
  fe as selectSelectionMatches,
  k as setSearchQuery
};
