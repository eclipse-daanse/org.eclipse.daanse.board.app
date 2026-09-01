import { N as y, T as m, a as H, P as Mt, I as wt, b as q, c as ce } from "./index-BH-51Y2d.js";
import { StateEffect as G, Facet as v, StateField as Lt, countColumn as de, EditorState as N, RangeSetBuilder as it, RangeSet as Bt, Prec as Nt, combineConfig as Rt } from "@codemirror/state";
import { ViewPlugin as W, EditorView as b, gutter as pe, Decoration as p, Direction as j, GutterMarker as ge, WidgetType as Ft, logException as me } from "@codemirror/view";
import { tagHighlighter as ke, tags as u, styleTags as be, highlightTree as we } from "@lezer/highlight";
import { S as yt } from "./style-mod-C6yElynz.js";
var Q;
const x = /* @__PURE__ */ new y();
function st(n) {
  return v.define({
    combine: n ? (t) => t.concat(n) : void 0
  });
}
const Et = /* @__PURE__ */ new y();
class d {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(t, e, r = [], i = "") {
    this.data = t, this.name = i, N.prototype.hasOwnProperty("tree") || Object.defineProperty(N.prototype, "tree", { get() {
      return g(this);
    } }), this.parser = e, this.extension = [
      T.of(this),
      N.languageData.of((s, o, a) => {
        let l = vt(s, o, a), h = l.type.prop(x);
        if (!h)
          return [];
        let f = s.facet(h), c = l.type.prop(Et);
        if (c) {
          let w = l.resolve(o - l.from, a);
          for (let k of c)
            if (k.test(w, s)) {
              let A = s.facet(k.facet);
              return k.type == "replace" ? A : A.concat(f);
            }
        }
        return f;
      })
    ].concat(r);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(t, e, r = -1) {
    return vt(t, e, r).type.prop(x) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(t) {
    let e = t.facet(T);
    if (e?.data == this.data)
      return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting)
      return [];
    let r = [], i = (s, o) => {
      if (s.prop(x) == this.data) {
        r.push({ from: o, to: o + s.length });
        return;
      }
      let a = s.prop(y.mounted);
      if (a) {
        if (a.tree.prop(x) == this.data) {
          if (a.overlay)
            for (let l of a.overlay)
              r.push({ from: l.from + o, to: l.to + o });
          else
            r.push({ from: o, to: o + s.length });
          return;
        } else if (a.overlay) {
          let l = r.length;
          if (i(a.tree, a.overlay[0].from + o), r.length > l)
            return;
        }
      }
      for (let l = 0; l < s.children.length; l++) {
        let h = s.children[l];
        h instanceof m && i(h, s.positions[l] + o);
      }
    };
    return i(g(t), 0), r;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
d.setState = /* @__PURE__ */ G.define();
function vt(n, t, e) {
  let r = n.facet(T), i = g(n).topNode;
  if (!r || r.allowsNesting)
    for (let s = i; s; s = s.enter(t, e, wt.ExcludeBuffers | wt.EnterBracketed))
      s.type.isTop && (i = s);
  return i;
}
class $ extends d {
  constructor(t, e, r) {
    super(t, e, [], r), this.parser = e;
  }
  /**
  Define a language from a parser.
  */
  static define(t) {
    let e = st(t.languageData);
    return new $(e, t.parser.configure({
      props: [x.add((r) => r.isTop ? e : void 0)]
    }), t.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(t, e) {
    return new $(this.data, this.parser.configure(t), e || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function g(n) {
  let t = n.field(d.state, !1);
  return t ? t.tree : m.empty;
}
function Wt(n, t, e = 50) {
  var r;
  let i = (r = n.field(d.state, !1)) === null || r === void 0 ? void 0 : r.context;
  if (!i)
    return null;
  let s = i.viewport;
  i.updateViewport({ from: 0, to: t });
  let o = i.isDone(t) || i.work(e, t) ? i.tree : null;
  return i.updateViewport(s), o;
}
function ye(n, t = n.doc.length) {
  var e;
  return ((e = n.field(d.state, !1)) === null || e === void 0 ? void 0 : e.context.isDone(t)) || !1;
}
function ve(n, t = n.viewport.to, e = 100) {
  let r = Wt(n.state, t, e);
  return r != g(n.state) && n.dispatch({}), !!r;
}
function Te(n) {
  var t;
  return ((t = n.plugin(Vt)) === null || t === void 0 ? void 0 : t.isWorking()) || !1;
}
class Ut {
  /**
  Create an input object for the given document.
  */
  constructor(t) {
    this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t) {
    return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t) {
    return this.syncTo(t), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(t, e) {
    let r = this.cursorPos - this.string.length;
    return t < r || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - r, e - r);
  }
}
let L = null;
class P {
  constructor(t, e, r = [], i, s, o, a, l) {
    this.parser = t, this.state = e, this.fragments = r, this.tree = i, this.treeLen = s, this.viewport = o, this.skipped = a, this.scheduleOn = l, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(t, e, r) {
    return new P(t, e, [], m.empty, 0, r, [], null);
  }
  startParse() {
    return this.parser.startParse(new Ut(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(t, e) {
    return e != null && e >= this.state.doc.length && (e = void 0), this.tree != m.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var r;
      if (typeof t == "number") {
        let i = Date.now() + t;
        t = () => Date.now() > i;
      }
      for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
        let i = this.parse.advance();
        if (i)
          if (this.fragments = this.withoutTempSkipped(H.addTree(i, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (r = this.parse.stoppedAt) !== null && r !== void 0 ? r : this.state.doc.length, this.tree = i, this.parse = null, this.treeLen < (e ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (t())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let t, e;
    this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
      for (; !(e = this.parse.advance()); )
        ;
    }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(H.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(t) {
    let e = L;
    L = this;
    try {
      return t();
    } finally {
      L = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); )
      t = Tt(t, e.from, e.to);
    return t;
  }
  /**
  @internal
  */
  changes(t, e) {
    let { fragments: r, tree: i, treeLen: s, viewport: o, skipped: a } = this;
    if (this.takeTree(), !t.empty) {
      let l = [];
      if (t.iterChangedRanges((h, f, c, w) => l.push({ fromA: h, toA: f, fromB: c, toB: w })), r = H.applyChanges(r, l), i = m.empty, s = 0, o = { from: t.mapPos(o.from, -1), to: t.mapPos(o.to, 1) }, this.skipped.length) {
        a = [];
        for (let h of this.skipped) {
          let f = t.mapPos(h.from, 1), c = t.mapPos(h.to, -1);
          f < c && a.push({ from: f, to: c });
        }
      }
    }
    return new P(this.parser, e, r, i, s, o, a, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(t) {
    if (this.viewport.from == t.from && this.viewport.to == t.to)
      return !1;
    this.viewport = t;
    let e = this.skipped.length;
    for (let r = 0; r < this.skipped.length; r++) {
      let { from: i, to: s } = this.skipped[r];
      i < t.to && s > t.from && (this.fragments = Tt(this.fragments, i, s), this.skipped.splice(r--, 1));
    }
    return this.skipped.length >= e ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(t, e) {
    this.skipped.push({ from: t, to: e });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(t) {
    return new class extends Mt {
      createParse(e, r, i) {
        let s = i[0].from, o = i[i.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let l = L;
            if (l) {
              for (let h of i)
                l.tempSkipped.push(h);
              t && (l.scheduleOn = l.scheduleOn ? Promise.all([l.scheduleOn, t]) : t);
            }
            return this.parsedPos = o, new m(q.none, [], [], o - s);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(t) {
    t = Math.min(t, this.state.doc.length);
    let e = this.fragments;
    return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return L;
  }
}
function Tt(n, t, e) {
  return H.applyChanges(n, [{ fromA: t, toA: e, fromB: t, toB: e }]);
}
class D {
  constructor(t) {
    this.context = t, this.tree = t.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree)
      return this;
    let e = this.context.changes(t.changes, t.state), r = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
    return e.work(20, r) || e.takeTree(), new D(e);
  }
  static init(t) {
    let e = Math.min(3e3, t.doc.length), r = P.create(t.facet(T).parser, t, { from: 0, to: e });
    return r.work(20, e) || r.takeTree(), new D(r);
  }
}
d.state = /* @__PURE__ */ Lt.define({
  create: D.init,
  update(n, t) {
    for (let e of t.effects)
      if (e.is(d.setState))
        return e.value;
    return t.startState.facet(T) != t.state.facet(T) ? D.init(t.state) : n.apply(t);
  }
});
let Ht = (n) => {
  let t = setTimeout(
    () => n(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (Ht = (n) => {
  let t = -1, e = setTimeout(
    () => {
      t = requestIdleCallback(n, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
const X = typeof navigator < "u" && (!((Q = navigator.scheduling) === null || Q === void 0) && Q.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Vt = /* @__PURE__ */ W.fromClass(class {
  constructor(t) {
    this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t) {
    let e = this.view.state.field(d.state).context;
    (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: t } = this.view, e = t.field(d.state);
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = Ht(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: r, viewport: { to: i } } = this.view, s = r.field(d.state);
    if (s.tree == s.context.tree && s.context.isDone(
      i + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, t && !X ? Math.max(25, t.timeRemaining() - 5) : 1e9), a = s.context.treeLen < i && r.doc.length > i + 1e3, l = s.context.work(() => X && X() || Date.now() > o, i + (a ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (l || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: d.setState.of(new D(s.context)) })), this.chunkBudget > 0 && !(l && !a) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(t) {
    t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => me(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), T = /* @__PURE__ */ v.define({
  combine(n) {
    return n.length ? n[0] : null;
  },
  enables: (n) => [
    d.state,
    Vt,
    b.contentAttributes.compute([n], (t) => {
      let e = t.facet(n);
      return e && e.name ? { "data-language": e.name } : {};
    })
  ]
});
class Se {
  /**
  Create a language support object.
  */
  constructor(t, e = []) {
    this.language = t, this.support = e, this.extension = [t, e];
  }
}
class ot {
  constructor(t, e, r, i, s, o = void 0) {
    this.name = t, this.alias = e, this.extensions = r, this.filename = i, this.loadFunc = s, this.support = o, this.loading = null;
  }
  /**
  Start loading the the language. Will return a promise that
  resolves to a [`LanguageSupport`](https://codemirror.net/6/docs/ref/#language.LanguageSupport)
  object when the language successfully loads.
  */
  load() {
    return this.loading || (this.loading = this.loadFunc().then((t) => this.support = t, (t) => {
      throw this.loading = null, t;
    }));
  }
  /**
  Create a language description.
  */
  static of(t) {
    let { load: e, support: r } = t;
    if (!e) {
      if (!r)
        throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
      e = () => Promise.resolve(r);
    }
    return new ot(t.name, (t.alias || []).concat(t.name).map((i) => i.toLowerCase()), t.extensions || [], t.filename, e, r);
  }
  /**
  Look for a language in the given array of descriptions that
  matches the filename. Will first match
  [`filename`](https://codemirror.net/6/docs/ref/#language.LanguageDescription.filename) patterns,
  and then [extensions](https://codemirror.net/6/docs/ref/#language.LanguageDescription.extensions),
  and return the first language that matches.
  */
  static matchFilename(t, e) {
    for (let i of t)
      if (i.filename && i.filename.test(e))
        return i;
    let r = /\.([^.]+)$/.exec(e);
    if (r) {
      for (let i of t)
        if (i.extensions.indexOf(r[1]) > -1)
          return i;
    }
    return null;
  }
  /**
  Look for a language whose name or alias matches the the given
  name (case-insensitively). If `fuzzy` is true, and no direct
  matchs is found, this'll also search for a language whose name
  or alias occurs in the string (for names shorter than three
  characters, only when surrounded by non-word characters).
  */
  static matchLanguageName(t, e, r = !0) {
    e = e.toLowerCase();
    for (let i of t)
      if (i.alias.some((s) => s == e))
        return i;
    if (r)
      for (let i of t)
        for (let s of i.alias) {
          let o = e.indexOf(s);
          if (o > -1 && (s.length > 2 || !/\w/.test(e[o - 1]) && !/\w/.test(e[o + s.length])))
            return i;
        }
    return null;
  }
}
const jt = /* @__PURE__ */ v.define(), lt = /* @__PURE__ */ v.define({
  combine: (n) => {
    if (!n.length)
      return "  ";
    let t = n[0];
    if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
    return t;
  }
});
function R(n) {
  let t = n.facet(lt);
  return t.charCodeAt(0) == 9 ? n.tabSize * t.length : t.length;
}
function at(n, t) {
  let e = "", r = n.tabSize, i = n.facet(lt)[0];
  if (i == "	") {
    for (; t >= r; )
      e += "	", t -= r;
    i = " ";
  }
  for (let s = 0; s < t; s++)
    e += i;
  return e;
}
function ht(n, t) {
  n instanceof N && (n = new _(n));
  for (let r of n.state.facet(jt)) {
    let i = r(n, t);
    if (i !== void 0)
      return i;
  }
  let e = g(n.state);
  return e.length >= t ? Pe(n, e, t) : null;
}
function xe(n, t, e) {
  let r = /* @__PURE__ */ Object.create(null), i = new _(n, { overrideIndentation: (o) => {
    var a;
    return (a = r[o]) !== null && a !== void 0 ? a : -1;
  } }), s = [];
  for (let o = t; o <= e; ) {
    let a = n.doc.lineAt(o);
    o = a.to + 1;
    let l = ht(i, a.from);
    if (l == null)
      continue;
    /\S/.test(a.text) || (l = 0);
    let h = /^\s*/.exec(a.text)[0], f = at(n, l);
    h != f && (r[a.from] = l, s.push({ from: a.from, to: a.from + h.length, insert: f }));
  }
  return n.changes(s);
}
class _ {
  /**
  Create an indent context.
  */
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = R(t);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(t, e = 1) {
    let r = this.state.doc.lineAt(t), { simulateBreak: i, simulateDoubleBreak: s } = this.options;
    return i != null && i >= r.from && i <= r.to ? s && i == t ? { text: "", from: t } : (e < 0 ? i < t : i <= t) ? { text: r.text.slice(i - r.from), from: i } : { text: r.text.slice(0, i - r.from), from: r.from } : r;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(t, e = 1) {
    if (this.options.simulateDoubleBreak && t == this.options.simulateBreak)
      return "";
    let { text: r, from: i } = this.lineAt(t, e);
    return r.slice(t - i, Math.min(r.length, t + 100 - i));
  }
  /**
  Find the column for the given position.
  */
  column(t, e = 1) {
    let { text: r, from: i } = this.lineAt(t, e), s = this.countColumn(r, t - i), o = this.options.overrideIndentation ? this.options.overrideIndentation(i) : -1;
    return o > -1 && (s += o - this.countColumn(r, r.search(/\S|$/))), s;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(t, e = t.length) {
    return de(t, this.state.tabSize, e);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(t, e = 1) {
    let { text: r, from: i } = this.lineAt(t, e), s = this.options.overrideIndentation;
    if (s) {
      let o = s(i);
      if (o > -1)
        return o;
    }
    return this.countColumn(r, r.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const ft = /* @__PURE__ */ new y();
function Pe(n, t, e) {
  let r = t.resolveStack(e), i = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
  if (i != r.node) {
    let s = [];
    for (let o = i; o && !(o.from < r.node.from || o.to > r.node.to || o.from == r.node.from && o.type == r.node.type); o = o.parent)
      s.push(o);
    for (let o = s.length - 1; o >= 0; o--)
      r = { node: s[o], next: r };
  }
  return $t(r, n, e);
}
function $t(n, t, e) {
  for (let r = n; r; r = r.next) {
    let i = Ae(r.node);
    if (i)
      return i(J.create(t, e, r));
  }
  return 0;
}
function Ce(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Ae(n) {
  let t = n.type.prop(ft);
  if (t)
    return t;
  let e = n.firstChild, r;
  if (e && (r = e.type.prop(y.closedBy))) {
    let i = n.lastChild, s = i && r.indexOf(i.name) > -1;
    return (o) => zt(o, !0, 1, void 0, s && !Ce(o) ? i.from : void 0);
  }
  return n.parent == null ? Ie : null;
}
function Ie() {
  return 0;
}
class J extends _ {
  constructor(t, e, r) {
    super(t.state, t.options), this.base = t, this.pos = e, this.context = r;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(t, e, r) {
    return new J(t, e, r);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(t) {
    let e = this.state.doc.lineAt(t.from);
    for (; ; ) {
      let r = t.resolve(e.from);
      for (; r.parent && r.parent.from == r.from; )
        r = r.parent;
      if (De(r, t))
        break;
      e = this.state.doc.lineAt(r.from);
    }
    return this.lineIndent(e.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return $t(this.context.next, this.base, this.pos);
  }
}
function De(n, t) {
  for (let e = t; e; e = e.parent)
    if (n == e)
      return !0;
  return !1;
}
function Oe(n) {
  let t = n.node, e = t.childAfter(t.from), r = t.lastChild;
  if (!e)
    return null;
  let i = n.options.simulateBreak, s = n.state.doc.lineAt(e.from), o = i == null || i <= s.from ? s.to : Math.min(s.to, i);
  for (let a = e.to; ; ) {
    let l = t.childAfter(a);
    if (!l || l == r)
      return null;
    if (!l.type.isSkipped) {
      if (l.from >= o)
        return null;
      let h = /^ */.exec(s.text.slice(e.to - s.from))[0].length;
      return { from: e.from, to: e.to + h };
    }
    a = l.to;
  }
}
function Me({ closing: n, align: t = !0, units: e = 1 }) {
  return (r) => zt(r, t, e, n);
}
function zt(n, t, e, r, i) {
  let s = n.textAfter, o = s.match(/^\s*/)[0].length, a = r && s.slice(o, o + r.length) == r || i == n.pos + o, l = t ? Oe(n) : null;
  return l ? a ? n.column(l.from) : n.column(l.to) : n.baseIndent + (a ? 0 : n.unit * e);
}
const Le = (n) => n.baseIndent;
function Be({ except: n, units: t = 1 } = {}) {
  return (e) => {
    let r = n && n.test(e.textAfter);
    return e.baseIndent + (r ? 0 : t * e.unit);
  };
}
const Ne = 200;
function Re() {
  return N.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
      return n;
    let t = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!t.length)
      return n;
    let e = n.newDoc, { head: r } = n.newSelection.main, i = e.lineAt(r);
    if (r > i.from + Ne)
      return n;
    let s = e.sliceString(i.from, r);
    if (!t.some((h) => h.test(s)))
      return n;
    let { state: o } = n, a = -1, l = [];
    for (let { head: h } of o.selection.ranges) {
      let f = o.doc.lineAt(h);
      if (f.from == a)
        continue;
      a = f.from;
      let c = ht(o, f.from);
      if (c == null)
        continue;
      let w = /^\s*/.exec(f.text)[0], k = at(o, c);
      w != k && l.push({ from: f.from, to: f.from + w.length, insert: k });
    }
    return l.length ? [n, { changes: l, sequential: !0 }] : n;
  });
}
const qt = /* @__PURE__ */ v.define(), Gt = /* @__PURE__ */ new y();
function Fe(n) {
  let t = n.firstChild, e = n.lastChild;
  return t && t.to < e.from ? { from: t.to, to: e.type.isError ? n.to : e.from } : null;
}
function Ee(n, t, e) {
  let r = g(n);
  if (r.length < e)
    return null;
  let i = r.resolveStack(e, 1), s = null;
  for (let o = i; o; o = o.next) {
    let a = o.node;
    if (a.to <= e || a.from > e)
      continue;
    if (s && a.from < t)
      break;
    let l = a.type.prop(Gt);
    if (l && (a.to < r.length - 50 || r.length == n.doc.length || !We(a))) {
      let h = l(a, n);
      h && h.from <= e && h.from >= t && h.to > e && (s = h);
    }
  }
  return s;
}
function We(n) {
  let t = n.lastChild;
  return t && t.to == n.to && t.type.isError;
}
function O(n, t, e) {
  for (let r of n.facet(qt)) {
    let i = r(n, t, e);
    if (i)
      return i;
  }
  return Ee(n, t, e);
}
function _t(n, t) {
  let e = t.mapPos(n.from, 1), r = t.mapPos(n.to, -1);
  return e >= r ? void 0 : { from: e, to: r };
}
const M = /* @__PURE__ */ G.define({ map: _t }), C = /* @__PURE__ */ G.define({ map: _t });
function ut(n) {
  let t = [];
  for (let { head: e } of n.state.selection.ranges)
    t.some((r) => r.from <= e && r.to >= e) || t.push(n.lineBlockAt(e));
  return t;
}
const S = /* @__PURE__ */ Lt.define({
  create() {
    return p.none;
  },
  update(n, t) {
    t.isUserEvent("delete") && t.changes.iterChangedRanges((r, i) => n = St(n, r, i)), n = n.map(t.changes);
    let e = [];
    for (let r of t.effects)
      r.is(M) && !He(n, r.value.from, r.value.to) ? e.push(r.value) : r.is(C) && (n = n.update({
        filter: (i, s) => r.value.from != i || r.value.to != s,
        filterFrom: r.value.from,
        filterTo: r.value.to
      }));
    if (e.length) {
      let { preparePlaceholder: r } = t.state.facet(dt), i = e.map((s) => (r ? p.replace({ widget: new qe(r(t.state, s)) }) : xt).range(s.from, s.to));
      n = n.update({ add: i });
    }
    return t.selection && (n = St(n, t.selection.main.head)), n;
  },
  provide: (n) => b.decorations.from(n),
  toJSON(n, t) {
    let e = [];
    return n.between(0, t.doc.length, (r, i) => {
      e.push(r, i);
    }), e;
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let t = [];
    for (let e = 0; e < n.length; ) {
      let r = n[e++], i = n[e++];
      if (typeof r != "number" || typeof i != "number")
        throw new RangeError("Invalid JSON for fold state");
      t.push(xt.range(r, i));
    }
    return p.set(t, !0);
  }
});
function St(n, t, e = t) {
  let r = !1;
  return n.between(t, e, (i, s) => {
    i < e && s > t && (r = !0);
  }), r ? n.update({
    filterFrom: t,
    filterTo: e,
    filter: (i, s) => i >= e || s <= t
  }) : n;
}
function Ue(n) {
  return n.field(S, !1) || Bt.empty;
}
function F(n, t, e) {
  var r;
  let i = null;
  return (r = n.field(S, !1)) === null || r === void 0 || r.between(t, e, (s, o) => {
    (!i || i.from > s) && (i = { from: s, to: o });
  }), i;
}
function He(n, t, e) {
  let r = !1;
  return n.between(t, t, (i, s) => {
    i == t && s == e && (r = !0);
  }), r;
}
function ct(n, t) {
  return n.field(S, !1) ? t : t.concat(G.appendConfig.of(pt()));
}
const Jt = (n) => {
  for (let t of ut(n)) {
    let e = O(n.state, t.from, t.to);
    if (e)
      return n.dispatch({ effects: ct(n.state, [M.of(e), z(n, e)]) }), !0;
  }
  return !1;
}, Kt = (n) => {
  if (!n.state.field(S, !1))
    return !1;
  let t = [];
  for (let e of ut(n)) {
    let r = F(n.state, e.from, e.to);
    r && t.push(C.of(r), z(n, r, !1));
  }
  return t.length && n.dispatch({ effects: t }), t.length > 0;
};
function z(n, t, e = !0) {
  let r = n.state.doc.lineAt(t.from).number, i = n.state.doc.lineAt(t.to).number;
  return b.announce.of(`${n.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${r} ${n.state.phrase("to")} ${i}.`);
}
const Qt = (n) => {
  let { state: t } = n, e = [];
  for (let r = 0; r < t.doc.length; ) {
    let i = n.lineBlockAt(r), s = O(t, i.from, i.to);
    s && e.push(M.of(s)), r = (s ? n.lineBlockAt(s.to) : i).to + 1;
  }
  return e.length && n.dispatch({ effects: ct(n.state, e) }), !!e.length;
}, Xt = (n) => {
  let t = n.state.field(S, !1);
  if (!t || !t.size)
    return !1;
  let e = [];
  return t.between(0, n.state.doc.length, (r, i) => {
    e.push(C.of({ from: r, to: i }));
  }), n.dispatch({ effects: e }), !0;
};
function Ve(n, t) {
  for (let e = t; ; ) {
    let r = O(n.state, e.from, e.to);
    if (r && r.to > t.from)
      return r;
    if (!e.from)
      return null;
    e = n.lineBlockAt(e.from - 1);
  }
}
const je = (n) => {
  let t = [];
  for (let e of ut(n)) {
    let r = F(n.state, e.from, e.to);
    if (r)
      t.push(C.of(r), z(n, r, !1));
    else {
      let i = Ve(n, e);
      i && t.push(M.of(i), z(n, i));
    }
  }
  return t.length > 0 && n.dispatch({ effects: ct(n.state, t) }), !!t.length;
}, $e = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Jt },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Kt },
  { key: "Ctrl-Alt-[", run: Qt },
  { key: "Ctrl-Alt-]", run: Xt }
], ze = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, dt = /* @__PURE__ */ v.define({
  combine(n) {
    return Rt(n, ze);
  }
});
function pt(n) {
  let t = [S, Je];
  return n && t.push(dt.of(n)), t;
}
function Yt(n, t) {
  let { state: e } = n, r = e.facet(dt), i = (o) => {
    let a = n.lineBlockAt(n.posAtDOM(o.target)), l = F(n.state, a.from, a.to);
    l && n.dispatch({ effects: C.of(l) }), o.preventDefault();
  };
  if (r.placeholderDOM)
    return r.placeholderDOM(n, i, t);
  let s = document.createElement("span");
  return s.textContent = r.placeholderText, s.setAttribute("aria-label", e.phrase("folded code")), s.title = e.phrase("unfold"), s.className = "cm-foldPlaceholder", s.onclick = i, s;
}
const xt = /* @__PURE__ */ p.replace({ widget: /* @__PURE__ */ new class extends Ft {
  toDOM(n) {
    return Yt(n, null);
  }
}() });
class qe extends Ft {
  constructor(t) {
    super(), this.value = t;
  }
  eq(t) {
    return this.value == t.value;
  }
  toDOM(t) {
    return Yt(t, this.value);
  }
}
const Ge = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Y extends ge {
  constructor(t, e) {
    super(), this.config = t, this.open = e;
  }
  eq(t) {
    return this.config == t.config && this.open == t.open;
  }
  toDOM(t) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let e = document.createElement("span");
    return e.textContent = this.open ? this.config.openText : this.config.closedText, e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), e;
  }
}
function _e(n = {}) {
  let t = { ...Ge, ...n }, e = new Y(t, !0), r = new Y(t, !1), i = W.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(T) != o.state.facet(T) || o.startState.field(S, !1) != o.state.field(S, !1) || g(o.startState) != g(o.state) || t.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let a = new it();
      for (let l of o.viewportLineBlocks) {
        let h = F(o.state, l.from, l.to) ? r : O(o.state, l.from, l.to) ? e : null;
        h && a.add(l.from, l.from, h);
      }
      return a.finish();
    }
  }), { domEventHandlers: s } = t;
  return [
    i,
    pe({
      class: "cm-foldGutter",
      markers(o) {
        var a;
        return ((a = o.plugin(i)) === null || a === void 0 ? void 0 : a.markers) || Bt.empty;
      },
      initialSpacer() {
        return new Y(t, !1);
      },
      domEventHandlers: {
        ...s,
        click: (o, a, l) => {
          if (s.click && s.click(o, a, l))
            return !0;
          let h = F(o.state, a.from, a.to);
          if (h)
            return o.dispatch({ effects: C.of(h) }), !0;
          let f = O(o.state, a.from, a.to);
          return f ? (o.dispatch({ effects: M.of(f) }), !0) : !1;
        }
      }
    }),
    pt()
  ];
}
const Je = /* @__PURE__ */ b.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class U {
  constructor(t, e) {
    this.specs = t;
    let r;
    function i(a) {
      let l = yt.newName();
      return (r || (r = /* @__PURE__ */ Object.create(null)))["." + l] = a, l;
    }
    const s = typeof e.all == "string" ? e.all : e.all ? i(e.all) : void 0, o = e.scope;
    this.scope = o instanceof d ? (a) => a.prop(x) == o.data : o ? (a) => a == o : void 0, this.style = ke(t.map((a) => ({
      tag: a.tag,
      class: a.class || i(Object.assign({}, a, { tag: null }))
    })), {
      all: s
    }).style, this.module = r ? new yt(r) : null, this.themeType = e.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://code.haverbeke.berlin/marijn/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(t, e) {
    return new U(t, e || {});
  }
}
const tt = /* @__PURE__ */ v.define(), Zt = /* @__PURE__ */ v.define({
  combine(n) {
    return n.length ? [n[0]] : null;
  }
});
function V(n) {
  let t = n.facet(tt);
  return t.length ? t : n.facet(Zt);
}
function Ke(n, t) {
  let e = [Ye], r;
  return n instanceof U && (n.module && e.push(b.styleModule.of(n.module)), r = n.themeType), t?.fallback ? e.push(Zt.of(n)) : r ? e.push(tt.computeN([b.darkTheme], (i) => i.facet(b.darkTheme) == (r == "dark") ? [n] : [])) : e.push(tt.of(n)), e;
}
function Qe(n, t, e) {
  let r = V(n), i = null;
  if (r) {
    for (let s of r)
      if (!s.scope || e && s.scope(e)) {
        let o = s.style(t);
        o && (i = i ? i + " " + o : o);
      }
  }
  return i;
}
class Xe {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = g(t.state), this.decorations = this.buildDeco(t, V(t.state)), this.decoratedTo = t.viewport.to;
  }
  update(t) {
    let e = g(t.state), r = V(t.state), i = r != V(t.startState), { viewport: s } = t.view, o = t.changes.mapPos(this.decoratedTo, 1);
    e.length < s.to && !i && e.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = o) : (e != this.tree || t.viewportChanged || i) && (this.tree = e, this.decorations = this.buildDeco(t.view, r), this.decoratedTo = s.to);
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length)
      return p.none;
    let r = new it();
    for (let { from: i, to: s } of t.visibleRanges)
      we(this.tree, e, (o, a, l) => {
        r.add(o, a, this.markCache[l] || (this.markCache[l] = p.mark({ class: l })));
      }, i, s);
    return r.finish();
  }
}
const Ye = /* @__PURE__ */ Nt.high(/* @__PURE__ */ W.fromClass(Xe, {
  decorations: (n) => n.decorations
})), Ze = /* @__PURE__ */ U.define([
  {
    tag: u.meta,
    color: "#404740"
  },
  {
    tag: u.link,
    textDecoration: "underline"
  },
  {
    tag: u.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: u.emphasis,
    fontStyle: "italic"
  },
  {
    tag: u.strong,
    fontWeight: "bold"
  },
  {
    tag: u.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: u.keyword,
    color: "#708"
  },
  {
    tag: [u.atom, u.bool, u.url, u.contentSeparator, u.labelName],
    color: "#219"
  },
  {
    tag: [u.literal, u.inserted],
    color: "#164"
  },
  {
    tag: [u.string, u.deleted],
    color: "#a11"
  },
  {
    tag: [u.regexp, u.escape, /* @__PURE__ */ u.special(u.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ u.definition(u.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ u.local(u.variableName),
    color: "#30a"
  },
  {
    tag: [u.typeName, u.namespace],
    color: "#085"
  },
  {
    tag: u.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ u.special(u.variableName), u.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ u.definition(u.propertyName),
    color: "#00c"
  },
  {
    tag: u.comment,
    color: "#940"
  },
  {
    tag: u.invalid,
    color: "#f00"
  }
]), tn = /* @__PURE__ */ b.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), te = 1e4, ee = "()[]{}", ne = /* @__PURE__ */ v.define({
  combine(n) {
    return Rt(n, {
      afterCursor: !0,
      brackets: ee,
      maxScanDistance: te,
      renderMatch: rn
    });
  }
}), en = /* @__PURE__ */ p.mark({ class: "cm-matchingBracket" }), nn = /* @__PURE__ */ p.mark({ class: "cm-nonmatchingBracket" });
function rn(n) {
  let t = [], e = n.matched ? en : nn;
  return t.push(e.range(n.start.from, n.start.to)), n.end && t.push(e.range(n.end.from, n.end.to)), t;
}
function Pt(n) {
  let t = [], e = n.facet(ne);
  for (let r of n.selection.ranges) {
    if (!r.empty)
      continue;
    let i = B(n, r.head, -1, e) || r.head > 0 && B(n, r.head - 1, 1, e) || e.afterCursor && (B(n, r.head, 1, e) || r.head < n.doc.length && B(n, r.head + 1, -1, e));
    i && (t = t.concat(e.renderMatch(i, n)));
  }
  return p.set(t, !0);
}
const sn = /* @__PURE__ */ W.fromClass(class {
  constructor(n) {
    this.paused = !1, this.decorations = Pt(n.state);
  }
  update(n) {
    (n.docChanged || n.selectionSet || this.paused) && (n.view.composing ? (this.decorations = this.decorations.map(n.changes), this.paused = !0) : (this.decorations = Pt(n.state), this.paused = !1));
  }
}, {
  decorations: (n) => n.decorations
}), on = [
  sn,
  tn
];
function ln(n = {}) {
  return [ne.of(n), on];
}
const re = /* @__PURE__ */ new y();
function et(n, t, e) {
  let r = n.prop(t < 0 ? y.openedBy : y.closedBy);
  if (r)
    return r;
  if (n.name.length == 1) {
    let i = e.indexOf(n.name);
    if (i > -1 && i % 2 == (t < 0 ? 1 : 0))
      return [e[i + t]];
  }
  return null;
}
function nt(n) {
  let t = n.type.prop(re);
  return t ? t(n.node) : n;
}
function B(n, t, e, r = {}) {
  let i = r.maxScanDistance || te, s = r.brackets || ee, o = g(n), a = o.resolveInner(t, e);
  for (let l = a; l; l = l.parent) {
    let h = et(l.type, e, s);
    if (h && l.from < l.to) {
      let f = nt(l);
      if (f && (e > 0 ? t >= f.from && t < f.to : t > f.from && t <= f.to))
        return an(n, t, e, l, f, h, s);
    }
  }
  return hn(n, t, e, o, a.type, i, s);
}
function an(n, t, e, r, i, s, o) {
  let a = r.parent, l = { from: i.from, to: i.to }, h = 0, f = a?.cursor();
  if (f && (e < 0 ? f.childBefore(r.from) : f.childAfter(r.to)))
    do
      if (e < 0 ? f.to <= r.from : f.from >= r.to) {
        if (h == 0 && s.indexOf(f.type.name) > -1 && f.from < f.to) {
          let c = nt(f);
          return { start: l, end: c ? { from: c.from, to: c.to } : void 0, matched: !0 };
        } else if (et(f.type, e, o))
          h++;
        else if (et(f.type, -e, o)) {
          if (h == 0) {
            let c = nt(f);
            return {
              start: l,
              end: c && c.from < c.to ? { from: c.from, to: c.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (e < 0 ? f.prevSibling() : f.nextSibling());
  return { start: l, matched: !1 };
}
function hn(n, t, e, r, i, s, o) {
  if (e < 0 ? !t : t == n.doc.length)
    return null;
  let a = e < 0 ? n.sliceDoc(t - 1, t) : n.sliceDoc(t, t + 1), l = o.indexOf(a);
  if (l < 0 || l % 2 == 0 != e > 0)
    return null;
  let h = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, f = n.doc.iterRange(t, e > 0 ? n.doc.length : 0), c = 0;
  for (let w = 0; !f.next().done && w <= s; ) {
    let k = f.value;
    e < 0 && (w += k.length);
    let A = t + w * e;
    for (let I = e > 0 ? 0 : k.length - 1, ue = e > 0 ? k.length : -1; I != ue; I += e) {
      let K = o.indexOf(k[I]);
      if (!(K < 0 || r.resolveInner(A + I, 1).type != i))
        if (K % 2 == 0 == e > 0)
          c++;
        else {
          if (c == 1)
            return { start: h, end: { from: A + I, to: A + I + 1 }, matched: K >> 1 == l >> 1 };
          c--;
        }
    }
    e > 0 && (w += k.length);
  }
  return f.done ? { start: h, matched: !1 } : null;
}
function Ct(n, t, e, r = 0, i = 0) {
  t == null && (t = n.search(/[^\s\u00a0]/), t == -1 && (t = n.length));
  let s = i;
  for (let o = r; o < t; o++)
    n.charCodeAt(o) == 9 ? s += e - s % e : s++;
  return s;
}
class gt {
  /**
  Create a stream.
  */
  constructor(t, e, r, i) {
    this.string = t, this.tabSize = e, this.indentUnit = r, this.overrideIndent = i, this.pos = 0, this.start = 0, this.lastColumnPos = 0, this.lastColumnValue = 0;
  }
  /**
  True if we are at the end of the line.
  */
  eol() {
    return this.pos >= this.string.length;
  }
  /**
  True if we are at the start of the line.
  */
  sol() {
    return this.pos == 0;
  }
  /**
  Get the next code unit after the current position, or undefined
  if we're at the end of the line.
  */
  peek() {
    return this.string.charAt(this.pos) || void 0;
  }
  /**
  Read the next code unit and advance `this.pos`.
  */
  next() {
    if (this.pos < this.string.length)
      return this.string.charAt(this.pos++);
  }
  /**
  Match the next character against the given string, regular
  expression, or predicate. Consume and return it if it matches.
  */
  eat(t) {
    let e = this.string.charAt(this.pos), r;
    if (typeof t == "string" ? r = e == t : r = e && (t instanceof RegExp ? t.test(e) : t(e)), r)
      return ++this.pos, e;
  }
  /**
  Continue matching characters that match the given string,
  regular expression, or predicate function. Return true if any
  characters were consumed.
  */
  eatWhile(t) {
    let e = this.pos;
    for (; this.eat(t); )
      ;
    return this.pos > e;
  }
  /**
  Consume whitespace ahead of `this.pos`. Return true if any was
  found.
  */
  eatSpace() {
    let t = this.pos;
    for (; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
      ++this.pos;
    return this.pos > t;
  }
  /**
  Move to the end of the line.
  */
  skipToEnd() {
    this.pos = this.string.length;
  }
  /**
  Move to directly before the given character, if found on the
  current line.
  */
  skipTo(t) {
    let e = this.string.indexOf(t, this.pos);
    if (e > -1)
      return this.pos = e, !0;
  }
  /**
  Move back `n` characters.
  */
  backUp(t) {
    this.pos -= t;
  }
  /**
  Get the column position at `this.pos`.
  */
  column() {
    return this.lastColumnPos < this.start && (this.lastColumnValue = Ct(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue;
  }
  /**
  Get the indentation column of the current line.
  */
  indentation() {
    var t;
    return (t = this.overrideIndent) !== null && t !== void 0 ? t : Ct(this.string, null, this.tabSize);
  }
  /**
  Match the input against the given string or regular expression
  (which should start with a `^`). Return true or the regexp match
  if it matches.
  
  Unless `consume` is set to `false`, this will move `this.pos`
  past the matched text.
  
  When matching a string `caseInsensitive` can be set to true to
  make the match case-insensitive.
  */
  match(t, e, r) {
    if (typeof t == "string") {
      let i = (o) => r ? o.toLowerCase() : o, s = this.string.substr(this.pos, t.length);
      return i(s) == i(t) ? (e !== !1 && (this.pos += t.length), !0) : null;
    } else {
      let i = this.string.slice(this.pos).match(t);
      return i && i.index > 0 ? null : (i && e !== !1 && (this.pos += i[0].length), i);
    }
  }
  /**
  Get the current token.
  */
  current() {
    return this.string.slice(this.start, this.pos);
  }
}
function fn(n) {
  return {
    name: n.name || "",
    token: n.token,
    blankLine: n.blankLine || (() => {
    }),
    startState: n.startState || (() => !0),
    copyState: n.copyState || un,
    indent: n.indent || (() => null),
    languageData: n.languageData || {},
    tokenTable: n.tokenTable || bt,
    mergeTokens: n.mergeTokens !== !1
  };
}
function un(n) {
  if (typeof n != "object")
    return n;
  let t = {};
  for (let e in n) {
    let r = n[e];
    t[e] = r instanceof Array ? r.slice() : r;
  }
  return t;
}
const At = /* @__PURE__ */ new WeakMap();
class mt extends d {
  constructor(t) {
    let e = st(t.languageData), r = fn(t), i, s = new class extends Mt {
      createParse(o, a, l) {
        return new dn(i, o, a, l);
      }
    }();
    super(e, s, [], t.name), this.topNode = mn(e, this), i = this, this.streamParser = r, this.stateAfter = new y({ perNode: !0 }), this.tokenTable = t.tokenTable ? new le(r.tokenTable) : gn;
  }
  /**
  Define a stream language.
  */
  static define(t) {
    return new mt(t);
  }
  /**
  @internal
  */
  getIndent(t) {
    let e, { overrideIndentation: r } = t.options;
    r && (e = At.get(t.state), e != null && e < t.pos - 1e4 && (e = void 0));
    let i = kt(this, t.node.tree, t.node.from, t.node.from, e ?? t.pos), s, o;
    if (i ? (o = i.state, s = i.pos + 1) : (o = this.streamParser.startState(t.unit), s = t.node.from), t.pos - s > 1e4)
      return null;
    for (; s < t.pos; ) {
      let l = t.state.doc.lineAt(s), h = Math.min(t.pos, l.to);
      if (l.length) {
        let f = r ? r(l.from) : -1, c = new gt(l.text, t.state.tabSize, t.unit, f < 0 ? void 0 : f);
        for (; c.pos < h - l.from; )
          se(this.streamParser.token, c, o);
      } else
        this.streamParser.blankLine(o, t.unit);
      if (h == t.pos)
        break;
      s = l.to + 1;
    }
    let a = t.lineAt(t.pos);
    return r && e == null && At.set(t.state, a.from), this.streamParser.indent(o, /^\s*(.*)/.exec(a.text)[1], t);
  }
  get allowsNesting() {
    return !1;
  }
}
function kt(n, t, e, r, i) {
  let s = e >= r && e + t.length <= i && t.prop(n.stateAfter);
  if (s)
    return { state: n.streamParser.copyState(s), pos: e + t.length };
  for (let o = t.children.length - 1; o >= 0; o--) {
    let a = t.children[o], l = e + t.positions[o], h = a instanceof m && l < i && kt(n, a, l, r, i);
    if (h)
      return h;
  }
  return null;
}
function ie(n, t, e, r, i) {
  if (i && e <= 0 && r >= t.length)
    return t;
  !i && e == 0 && t.type == n.topNode && (i = !0);
  for (let s = t.children.length - 1; s >= 0; s--) {
    let o = t.positions[s], a = t.children[s], l;
    if (o < r && a instanceof m) {
      if (!(l = ie(n, a, e - o, r - o, i)))
        break;
      return i ? new m(t.type, t.children.slice(0, s).concat(l), t.positions.slice(0, s + 1), o + l.length) : l;
    }
  }
  return null;
}
function cn(n, t, e, r, i) {
  for (let s of t) {
    let o = s.from + (s.openStart ? 25 : 0), a = s.to - (s.openEnd ? 25 : 0), l = o <= e && a > e && kt(n, s.tree, 0 - s.offset, e, a), h;
    if (l && l.pos <= r && (h = ie(n, s.tree, e + s.offset, l.pos + s.offset, !1)))
      return { state: l.state, tree: h };
  }
  return { state: n.streamParser.startState(i ? R(i) : 4), tree: m.empty };
}
class dn {
  constructor(t, e, r, i) {
    this.lang = t, this.input = e, this.fragments = r, this.ranges = i, this.stoppedAt = null, this.chunks = [], this.chunkPos = [], this.chunk = [], this.chunkReused = void 0, this.rangeIndex = 0, this.to = i[i.length - 1].to;
    let s = P.get(), o = i[0].from, { state: a, tree: l } = cn(t, r, o, this.to, s?.state);
    this.state = a, this.parsedPos = this.chunkStart = o + l.length;
    for (let h = 0; h < l.children.length; h++)
      this.chunks.push(l.children[h]), this.chunkPos.push(l.positions[h]);
    s && this.parsedPos < s.viewport.from - 1e5 && i.some((h) => h.from <= s.viewport.from && h.to >= s.viewport.from) && (this.state = this.lang.streamParser.startState(R(s.state)), s.skipUntilInView(this.parsedPos, s.viewport.from), this.parsedPos = s.viewport.from), this.moveRangeIndex();
  }
  advance() {
    let t = P.get(), e = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt), r = Math.min(
      e,
      this.chunkStart + 512
      /* C.ChunkSize */
    );
    for (t && (r = Math.min(r, t.viewport.to)); this.parsedPos < r; )
      this.parseLine(t);
    return this.chunkStart < this.parsedPos && this.finishChunk(), this.parsedPos >= e ? this.finish() : t && this.parsedPos >= t.viewport.to ? (t.skipUntilInView(this.parsedPos, e), this.finish()) : null;
  }
  stopAt(t) {
    this.stoppedAt = t;
  }
  lineAfter(t) {
    let e = this.input.chunk(t);
    if (this.input.lineChunks)
      e == `
` && (e = "");
    else {
      let r = e.indexOf(`
`);
      r > -1 && (e = e.slice(0, r));
    }
    return t + e.length <= this.to ? e : e.slice(0, this.to - t);
  }
  nextLine() {
    let t = this.parsedPos, e = this.lineAfter(t), r = t + e.length;
    for (let i = this.rangeIndex; ; ) {
      let s = this.ranges[i].to;
      if (s >= r || (e = e.slice(0, s - (r - e.length)), i++, i == this.ranges.length))
        break;
      let o = this.ranges[i].from, a = this.lineAfter(o);
      e += a, r = o + a.length;
    }
    return { line: e, end: r };
  }
  skipGapsTo(t, e, r) {
    for (; ; ) {
      let i = this.ranges[this.rangeIndex].to, s = t + e;
      if (r > 0 ? i > s : i >= s)
        break;
      let o = this.ranges[++this.rangeIndex].from;
      e += o - i;
    }
    return e;
  }
  moveRangeIndex() {
    for (; this.ranges[this.rangeIndex].to < this.parsedPos; )
      this.rangeIndex++;
  }
  emitToken(t, e, r, i) {
    let s = 4;
    if (this.ranges.length > 1) {
      i = this.skipGapsTo(e, i, 1), e += i;
      let a = this.chunk.length;
      i = this.skipGapsTo(r, i, -1), r += i, s += this.chunk.length - a;
    }
    let o = this.chunk.length - 4;
    return this.lang.streamParser.mergeTokens && s == 4 && o >= 0 && this.chunk[o] == t && this.chunk[o + 2] == e ? this.chunk[o + 2] = r : this.chunk.push(t, e, r, s), i;
  }
  parseLine(t) {
    let { line: e, end: r } = this.nextLine(), i = 0, { streamParser: s } = this.lang, o = new gt(e, t ? t.state.tabSize : 4, t ? R(t.state) : 2);
    if (o.eol())
      s.blankLine(this.state, o.indentUnit);
    else
      for (; !o.eol(); ) {
        let a = se(s.token, o, this.state);
        if (a && (i = this.emitToken(this.lang.tokenTable.resolve(a), this.parsedPos + o.start, this.parsedPos + o.pos, i)), o.start > 1e4)
          break;
      }
    this.parsedPos = r, this.moveRangeIndex(), this.parsedPos < this.to && this.parsedPos++;
  }
  finishChunk() {
    let t = m.build({
      buffer: this.chunk,
      start: this.chunkStart,
      length: this.parsedPos - this.chunkStart,
      nodeSet: pn,
      topID: 0,
      maxBufferLength: 512,
      reused: this.chunkReused
    });
    t = new m(t.type, t.children, t.positions, t.length, [[this.lang.stateAfter, this.lang.streamParser.copyState(this.state)]]), this.chunks.push(t), this.chunkPos.push(this.chunkStart - this.ranges[0].from), this.chunk = [], this.chunkReused = void 0, this.chunkStart = this.parsedPos;
  }
  finish() {
    return new m(this.lang.topNode, this.chunks, this.chunkPos, this.parsedPos - this.ranges[0].from).balance();
  }
}
function se(n, t, e) {
  t.start = t.pos;
  for (let r = 0; r < 10; r++) {
    let i = n(t, e);
    if (t.pos > t.start)
      return i;
  }
  throw new Error("Stream parser failed to advance stream.");
}
const bt = /* @__PURE__ */ Object.create(null), E = [q.none], pn = /* @__PURE__ */ new ce(E), It = [], Dt = /* @__PURE__ */ Object.create(null), oe = /* @__PURE__ */ Object.create(null);
for (let [n, t] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  oe[n] = /* @__PURE__ */ ae(bt, t);
class le {
  constructor(t) {
    this.extra = t, this.table = Object.assign(/* @__PURE__ */ Object.create(null), oe);
  }
  resolve(t) {
    return t ? this.table[t] || (this.table[t] = ae(this.extra, t)) : 0;
  }
}
const gn = /* @__PURE__ */ new le(bt);
function Z(n, t) {
  It.indexOf(n) > -1 || (It.push(n), console.warn(t));
}
function ae(n, t) {
  let e = [];
  for (let a of t.split(" ")) {
    let l = [];
    for (let h of a.split(".")) {
      let f = n[h] || u[h];
      f ? typeof f == "function" ? l.length ? l = l.map(f) : Z(h, `Modifier ${h} used at start of tag`) : l.length ? Z(h, `Tag ${h} used as modifier`) : l = Array.isArray(f) ? f : [f] : Z(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of l)
      e.push(h);
  }
  if (!e.length)
    return 0;
  let r = t.replace(/ /g, "_"), i = r + " " + e.map((a) => a.id), s = Dt[i];
  if (s)
    return s.id;
  let o = Dt[i] = q.define({
    id: E.length,
    name: r,
    props: [be({ [r]: e })]
  });
  return E.push(o), o.id;
}
function mn(n, t) {
  let e = q.define({ id: E.length, name: "Document", props: [
    x.add(() => n),
    ft.add(() => (r) => t.getIndent(r))
  ], top: !0 });
  return E.push(e), e;
}
function he(n) {
  return n.length <= 4096 && /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/.test(n);
}
function fe(n) {
  for (let t = n.iter(); !t.next().done; )
    if (he(t.value))
      return !0;
  return !1;
}
function kn(n) {
  let t = !1;
  return n.iterChanges((e, r, i, s, o) => {
    !t && fe(o) && (t = !0);
  }), t;
}
const rt = /* @__PURE__ */ v.define({ combine: (n) => n.some((t) => t) });
function bn(n = {}) {
  let t = [wn];
  return n.alwaysIsolate && t.push(rt.of(!0)), t;
}
const wn = /* @__PURE__ */ W.fromClass(class {
  constructor(n) {
    this.always = n.state.facet(rt) || n.textDirection != j.LTR || n.state.facet(b.perLineTextDirection), this.hasRTL = !this.always && fe(n.state.doc), this.tree = g(n.state), this.decorations = this.always || this.hasRTL ? Ot(n, this.tree, this.always) : p.none;
  }
  update(n) {
    let t = n.state.facet(rt) || n.view.textDirection != j.LTR || n.state.facet(b.perLineTextDirection);
    if (!t && !this.hasRTL && kn(n.changes) && (this.hasRTL = !0), !t && !this.hasRTL)
      return;
    let e = g(n.state);
    (t != this.always || e != this.tree || n.docChanged || n.viewportChanged) && (this.tree = e, this.always = t, this.decorations = Ot(n.view, e, t));
  }
}, {
  provide: (n) => {
    function t(e) {
      var r, i;
      return (i = (r = e.plugin(n)) === null || r === void 0 ? void 0 : r.decorations) !== null && i !== void 0 ? i : p.none;
    }
    return [
      b.outerDecorations.of(t),
      Nt.lowest(b.bidiIsolatedRanges.of(t))
    ];
  }
});
function Ot(n, t, e) {
  let r = new it(), i = n.visibleRanges;
  e || (i = yn(i, n.state.doc));
  for (let { from: s, to: o } of i)
    t.iterate({
      enter: (a) => {
        let l = a.type.prop(y.isolate);
        l && r.add(a.from, a.to, vn[l]);
      },
      from: s,
      to: o
    });
  return r.finish();
}
function yn(n, t) {
  let e = t.iter(), r = 0, i = [], s = null;
  for (let { from: o, to: a } of n)
    if (!(s && s.to > o && (o = s.to, o >= a)))
      for (r + e.value.length < o && (e.next(o - (r + e.value.length)), r = o); ; ) {
        let l = r, h = r + e.value.length;
        if (!e.lineBreak && he(e.value) && (s && s.to > l - 10 ? s.to = Math.min(a, h) : i.push(s = { from: l, to: Math.min(a, h) })), h >= a)
          break;
        r = h, e.next();
      }
  return i;
}
const vn = {
  rtl: /* @__PURE__ */ p.mark({ class: "cm-iso", inclusive: !0, attributes: { dir: "rtl" }, bidiIsolate: j.RTL }),
  ltr: /* @__PURE__ */ p.mark({ class: "cm-iso", inclusive: !0, attributes: { dir: "ltr" }, bidiIsolate: j.LTR }),
  auto: /* @__PURE__ */ p.mark({ class: "cm-iso", inclusive: !0, attributes: { dir: "auto" }, bidiIsolate: null })
}, In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DocInput: Ut,
  HighlightStyle: U,
  IndentContext: _,
  LRLanguage: $,
  Language: d,
  LanguageDescription: ot,
  LanguageSupport: Se,
  ParseContext: P,
  StreamLanguage: mt,
  StringStream: gt,
  TreeIndentContext: J,
  bidiIsolates: bn,
  bracketMatching: ln,
  bracketMatchingHandle: re,
  codeFolding: pt,
  continuedIndent: Be,
  defaultHighlightStyle: Ze,
  defineLanguageFacet: st,
  delimitedIndent: Me,
  ensureSyntaxTree: Wt,
  flatIndent: Le,
  foldAll: Qt,
  foldCode: Jt,
  foldEffect: M,
  foldGutter: _e,
  foldInside: Fe,
  foldKeymap: $e,
  foldNodeProp: Gt,
  foldService: qt,
  foldState: S,
  foldable: O,
  foldedRanges: Ue,
  forceParsing: ve,
  getIndentUnit: R,
  getIndentation: ht,
  highlightingFor: Qe,
  indentNodeProp: ft,
  indentOnInput: Re,
  indentRange: xe,
  indentService: jt,
  indentString: at,
  indentUnit: lt,
  language: T,
  languageDataProp: x,
  matchBrackets: B,
  sublanguageProp: Et,
  syntaxHighlighting: Ke,
  syntaxParserRunning: Te,
  syntaxTree: g,
  syntaxTreeAvailable: ye,
  toggleFold: je,
  unfoldAll: Xt,
  unfoldCode: Kt,
  unfoldEffect: C
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ut as DocInput,
  U as HighlightStyle,
  _ as IndentContext,
  $ as LRLanguage,
  d as Language,
  ot as LanguageDescription,
  Se as LanguageSupport,
  P as ParseContext,
  mt as StreamLanguage,
  gt as StringStream,
  J as TreeIndentContext,
  bn as bidiIsolates,
  ln as bracketMatching,
  re as bracketMatchingHandle,
  pt as codeFolding,
  Be as continuedIndent,
  In as default,
  Ze as defaultHighlightStyle,
  st as defineLanguageFacet,
  Me as delimitedIndent,
  Wt as ensureSyntaxTree,
  Le as flatIndent,
  Qt as foldAll,
  Jt as foldCode,
  M as foldEffect,
  _e as foldGutter,
  Fe as foldInside,
  $e as foldKeymap,
  Gt as foldNodeProp,
  qt as foldService,
  S as foldState,
  O as foldable,
  Ue as foldedRanges,
  ve as forceParsing,
  R as getIndentUnit,
  ht as getIndentation,
  Qe as highlightingFor,
  ft as indentNodeProp,
  Re as indentOnInput,
  xe as indentRange,
  jt as indentService,
  at as indentString,
  lt as indentUnit,
  T as language,
  x as languageDataProp,
  B as matchBrackets,
  Et as sublanguageProp,
  Ke as syntaxHighlighting,
  Te as syntaxParserRunning,
  g as syntaxTree,
  ye as syntaxTreeAvailable,
  je as toggleFold,
  Xt as unfoldAll,
  Kt as unfoldCode,
  C as unfoldEffect
};
