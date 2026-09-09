import { StateField as Zt, Facet as Oe, Annotation as Ie, EditorSelection as h, countColumn as ue, Text as Re, findClusterBreak as T, Transaction as Q, CharCategory as D, combineConfig as en, StateEffect as ve, ChangeSet as tn, ChangeDesc as nn } from "@codemirror/state";
import { EditorView as O, Direction as rn } from "@codemirror/view";
import { IndentContext as Fe, getIndentation as Ue, indentString as G, syntaxTree as fe, matchBrackets as E, getIndentUnit as Y, indentUnit as on } from "@codemirror/language";
import { N as Z } from "./index-BH-51Y2d.js";
const Ge = (e) => {
  let { state: t } = e, n = t.doc.lineAt(t.selection.main.from), r = ae(e.state, n.from);
  return r.line ? Ve(e) : r.block ? Pe(e) : !1;
};
function x(e, t) {
  return ({ state: n, dispatch: r }) => {
    if (n.readOnly)
      return !1;
    let l = e(t, n);
    return l ? (r(n.update(l)), !0) : !1;
  };
}
const Ve = /* @__PURE__ */ x(
  he,
  0
  /* CommentOption.Toggle */
), ln = /* @__PURE__ */ x(
  he,
  1
  /* CommentOption.Comment */
), cn = /* @__PURE__ */ x(
  he,
  2
  /* CommentOption.Uncomment */
), Ne = /* @__PURE__ */ x(
  z,
  0
  /* CommentOption.Toggle */
), sn = /* @__PURE__ */ x(
  z,
  1
  /* CommentOption.Comment */
), un = /* @__PURE__ */ x(
  z,
  2
  /* CommentOption.Uncomment */
), Pe = /* @__PURE__ */ x(
  (e, t) => z(e, t, an(t)),
  0
  /* CommentOption.Toggle */
);
function ae(e, t) {
  let n = e.languageDataAt("commentTokens", t, 1);
  return n.length ? n[0] : {};
}
const R = 50;
function fn(e, { open: t, close: n }, r, l) {
  let o = e.sliceDoc(r - R, r), c = e.sliceDoc(l, l + R), s = /\s*$/.exec(o)[0].length, i = /^\s*/.exec(c)[0].length, f = o.length - s;
  if (o.slice(f - t.length, f) == t && c.slice(i, i + n.length) == n)
    return {
      open: { pos: r - s, margin: s && 1 },
      close: { pos: l + i, margin: i && 1 }
    };
  let u, a;
  l - r <= 2 * R ? u = a = e.sliceDoc(r, l) : (u = e.sliceDoc(r, r + R), a = e.sliceDoc(l - R, l));
  let d = /^\s*/.exec(u)[0].length, A = /\s*$/.exec(a)[0].length, k = a.length - A - n.length;
  return u.slice(d, d + t.length) == t && a.slice(k, k + n.length) == n ? {
    open: {
      pos: r + d + t.length,
      margin: /\s/.test(u.charAt(d + t.length)) ? 1 : 0
    },
    close: {
      pos: l - A - n.length,
      margin: /\s/.test(a.charAt(k - 1)) ? 1 : 0
    }
  } : null;
}
function an(e) {
  let t = [];
  for (let n of e.selection.ranges) {
    let r = e.doc.lineAt(n.from), l = n.to <= r.to ? r : e.doc.lineAt(n.to);
    l.from > r.from && l.from == n.to && (l = n.to == r.to + 1 ? r : e.doc.lineAt(n.to - 1));
    let o = t.length - 1;
    o >= 0 && t[o].to > r.from ? t[o].to = l.to : t.push({ from: r.from + /^\s*/.exec(r.text)[0].length, to: l.to });
  }
  return t;
}
function z(e, t, n = t.selection.ranges) {
  let r = n.map((o) => ae(t, o.from).block);
  if (!r.every((o) => o))
    return null;
  let l = n.map((o, c) => fn(t, r[c], o.from, o.to));
  if (e != 2 && !l.every((o) => o))
    return { changes: t.changes(n.map((o, c) => l[c] ? [] : [{ from: o.from, insert: r[c].open + " " }, { from: o.to, insert: " " + r[c].close }])) };
  if (e != 1 && l.some((o) => o)) {
    let o = [];
    for (let c = 0, s; c < l.length; c++)
      if (s = l[c]) {
        let i = r[c], { open: f, close: u } = s;
        o.push({ from: f.pos - i.open.length, to: f.pos + f.margin }, { from: u.pos - u.margin, to: u.pos + i.close.length });
      }
    return { changes: o };
  }
  return null;
}
function he(e, t, n = t.selection.ranges) {
  let r = [], l = -1;
  e: for (let { from: o, to: c } of n) {
    let s = r.length, i = 1e9, f;
    for (let u = o; u <= c; ) {
      let a = t.doc.lineAt(u);
      if (f == null && (f = ae(t, a.from).line, !f))
        continue e;
      if (a.from > l && (o == c || c > a.from)) {
        l = a.from;
        let d = /^\s*/.exec(a.text)[0].length, A = d == a.length, k = a.text.slice(d, d + f.length) == f ? d : -1;
        d < a.text.length && d < i && (i = d), r.push({ line: a, comment: k, token: f, indent: d, empty: A, single: !1 });
      }
      u = a.to + 1;
    }
    if (i < 1e9)
      for (let u = s; u < r.length; u++)
        r[u].indent < r[u].line.text.length && (r[u].indent = i);
    r.length == s + 1 && (r[s].single = !0);
  }
  if (e != 2 && r.some((o) => o.comment < 0 && (!o.empty || o.single))) {
    let o = [];
    for (let { line: s, token: i, indent: f, empty: u, single: a } of r)
      (a || !u) && o.push({ from: s.from + f, insert: i + " " });
    let c = t.changes(o);
    return { changes: c, selection: t.selection.map(c, 1) };
  } else if (e != 1 && r.some((o) => o.comment >= 0)) {
    let o = [];
    for (let { line: c, comment: s, token: i } of r)
      if (s >= 0) {
        let f = c.from + s, u = f + i.length;
        c.text[u - c.from] == " " && u++, o.push({ from: f, to: u });
      }
    return { changes: o };
  }
  return null;
}
const ee = /* @__PURE__ */ Ie.define(), Je = /* @__PURE__ */ Ie.define(), ze = /* @__PURE__ */ Oe.define(), we = /* @__PURE__ */ Oe.define({
  combine(e) {
    return en(e, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (t, n) => n
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (t, n) => (r, l) => t(r, l) || n(r, l)
    });
  }
}), v = /* @__PURE__ */ Zt.define({
  create() {
    return C.empty;
  },
  update(e, t) {
    let n = t.state.facet(we), r = t.annotation(ee);
    if (r) {
      let i = g.fromTransaction(t, r.selection), f = r.side, u = f == 0 ? e.undone : e.done;
      return i ? u = N(u, u.length, n.minDepth, i) : u = _e(u, t.startState.selection), new C(f == 0 ? r.rest : u, f == 0 ? u : r.rest);
    }
    let l = t.annotation(Je);
    if ((l == "full" || l == "before") && (e = e.isolate()), t.annotation(Q.addToHistory) === !1)
      return t.changes.empty ? e : e.addMapping(t.changes.desc);
    let o = g.fromTransaction(t), c = t.annotation(Q.time), s = t.annotation(Q.userEvent);
    return o ? e = e.addChanges(o, c, s, n, t) : t.selection && (e = e.addSelection(t.startState.selection, c, s, n.newGroupDelay)), (l == "full" || l == "after") && (e = e.isolate()), e;
  },
  toJSON(e) {
    return { done: e.done.map((t) => t.toJSON()), undone: e.undone.map((t) => t.toJSON()) };
  },
  fromJSON(e) {
    return new C(e.done.map(g.fromJSON), e.undone.map(g.fromJSON));
  }
});
function hn(e = {}) {
  return [
    v,
    we.of(e),
    O.domEventHandlers({
      beforeinput(t, n) {
        let r = t.inputType == "historyUndo" ? de : t.inputType == "historyRedo" ? V : null;
        return r ? (t.preventDefault(), r(n)) : !1;
      }
    })
  ];
}
const dn = v;
function w(e, t) {
  return function({ state: n, dispatch: r }) {
    if (!t && n.readOnly)
      return !1;
    let l = n.field(v, !1);
    if (!l)
      return !1;
    let o = l.pop(e, n, t);
    return o ? (r(o), !0) : !1;
  };
}
const de = /* @__PURE__ */ w(0, !1), V = /* @__PURE__ */ w(1, !1), We = /* @__PURE__ */ w(0, !0), He = /* @__PURE__ */ w(1, !0);
function qe(e) {
  return function(t) {
    let n = t.field(v, !1);
    if (!n)
      return 0;
    let r = e == 0 ? n.done : n.undone;
    return r.length - (r.length && !r[0].changes ? 1 : 0);
  };
}
const mn = /* @__PURE__ */ qe(
  0
  /* BranchName.Done */
), pn = /* @__PURE__ */ qe(
  1
  /* BranchName.Undone */
);
function Ke(e) {
  return function(t) {
    let n = t.field(v, !1);
    if (!n)
      return !1;
    let r = n.done;
    return r.length > 0 && r[0].selectionsAfter.length > 0;
  };
}
const gn = /* @__PURE__ */ Ke(), yn = /* @__PURE__ */ Ke();
class g {
  constructor(t, n, r, l, o) {
    this.changes = t, this.effects = n, this.mapped = r, this.startSelection = l, this.selectionsAfter = o;
  }
  setSelAfter(t) {
    return new g(this.changes, this.effects, this.mapped, this.startSelection, t);
  }
  toJSON() {
    var t, n, r;
    return {
      changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(),
      mapped: (n = this.mapped) === null || n === void 0 ? void 0 : n.toJSON(),
      startSelection: (r = this.startSelection) === null || r === void 0 ? void 0 : r.toJSON(),
      selectionsAfter: this.selectionsAfter.map((l) => l.toJSON())
    };
  }
  static fromJSON(t) {
    return new g(t.changes && tn.fromJSON(t.changes), [], t.mapped && nn.fromJSON(t.mapped), t.startSelection && h.fromJSON(t.startSelection), t.selectionsAfter.map(h.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(t, n) {
    let r = S;
    for (let l of t.startState.facet(ze)) {
      let o = l(t);
      o.length && (r = r.concat(o));
    }
    return !r.length && t.changes.empty ? null : new g(t.changes.invert(t.startState.doc), r, void 0, n || t.startState.selection, S);
  }
  static selection(t) {
    return new g(void 0, S, void 0, void 0, t);
  }
}
function N(e, t, n, r) {
  let l = t + 1 > n + 20 ? t - n - 1 : 0, o = e.slice(l, t);
  return o.push(r), o;
}
function kn(e, t) {
  let n = [], r = !1;
  return e.iterChangedRanges((l, o) => n.push(l, o)), t.iterChangedRanges((l, o, c, s) => {
    for (let i = 0; i < n.length; ) {
      let f = n[i++], u = n[i++];
      s >= f && c <= u && (r = !0);
    }
  }), r;
}
function Sn(e, t) {
  return e.ranges.length == t.ranges.length && e.ranges.filter((n, r) => n.empty != t.ranges[r].empty).length === 0;
}
function $e(e, t) {
  return e.length ? t.length ? e.concat(t) : e : t;
}
const S = [], An = 200;
function _e(e, t) {
  if (e.length) {
    let n = e[e.length - 1], r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - An));
    return r.length && r[r.length - 1].eq(t) ? e : (r.push(t), N(e, e.length - 1, 1e9, n.setSelAfter(r)));
  } else
    return [g.selection([t])];
}
function Bn(e) {
  let t = e[e.length - 1], n = e.slice();
  return n[e.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), n;
}
function X(e, t) {
  if (!e.length)
    return e;
  let n = e.length, r = S;
  for (; n; ) {
    let l = Cn(e[n - 1], t, r);
    if (l.changes && !l.changes.empty || l.effects.length) {
      let o = e.slice(0, n);
      return o[n - 1] = l, o;
    } else
      t = l.mapped, n--, r = l.selectionsAfter;
  }
  return r.length ? [g.selection(r)] : S;
}
function Cn(e, t, n) {
  let r = $e(e.selectionsAfter.length ? e.selectionsAfter.map((s) => s.map(t)) : S, n);
  if (!e.changes)
    return g.selection(r);
  let l = e.changes.map(t), o = t.mapDesc(e.changes, !0), c = e.mapped ? e.mapped.composeDesc(o) : o;
  return new g(l, ve.mapEffects(e.effects, t), c, e.startSelection.map(o), r);
}
const Dn = /^(input\.type|delete)($|\.)/;
class C {
  constructor(t, n, r = 0, l = void 0) {
    this.done = t, this.undone = n, this.prevTime = r, this.prevUserEvent = l;
  }
  isolate() {
    return this.prevTime ? new C(this.done, this.undone) : this;
  }
  addChanges(t, n, r, l, o) {
    let c = this.done, s = c[c.length - 1];
    return s && s.changes && !s.changes.empty && t.changes && (!r || Dn.test(r)) && (!s.selectionsAfter.length && n - this.prevTime < l.newGroupDelay && l.joinToEvent(o, kn(s.changes, t.changes)) || // For compose (but not compose.start) events, always join with previous event
    r == "input.type.compose") ? c = N(c, c.length - 1, l.minDepth, new g(t.changes.compose(s.changes), $e(ve.mapEffects(t.effects, s.changes), s.effects), s.mapped, s.startSelection, S)) : c = N(c, c.length, l.minDepth, t), new C(c, S, n, r);
  }
  addSelection(t, n, r, l) {
    let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : S;
    return o.length > 0 && n - this.prevTime < l && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && Sn(o[o.length - 1], t) ? this : new C(_e(this.done, t), this.undone, n, r);
  }
  addMapping(t) {
    return new C(X(this.done, t), X(this.undone, t), this.prevTime, this.prevUserEvent);
  }
  pop(t, n, r) {
    let l = t == 0 ? this.done : this.undone;
    if (l.length == 0)
      return null;
    let o = l[l.length - 1], c = o.selectionsAfter[0] || (o.startSelection ? o.startSelection.map(o.changes.invertedDesc, 1) : n.selection);
    if (r && o.selectionsAfter.length)
      return n.update({
        selection: o.selectionsAfter[o.selectionsAfter.length - 1],
        annotations: ee.of({ side: t, rest: Bn(l), selection: c }),
        userEvent: t == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (o.changes) {
      let s = l.length == 1 ? S : l.slice(0, l.length - 1);
      return o.mapped && (s = X(s, o.mapped)), n.update({
        changes: o.changes,
        selection: o.startSelection,
        effects: o.effects,
        annotations: ee.of({ side: t, rest: s, selection: c }),
        filter: !1,
        userEvent: t == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
C.empty = /* @__PURE__ */ new C(S, S);
const Ln = [
  { key: "Mod-z", run: de, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: V, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: V, preventDefault: !0 },
  { key: "Mod-u", run: We, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: He, preventDefault: !0 }
];
function I(e, t) {
  return h.create(e.ranges.map(t), e.mainIndex);
}
function B(e, t) {
  return e.update({ selection: t, scrollIntoView: !0, userEvent: "select" });
}
function y({ state: e, dispatch: t }, n) {
  let r = I(e.selection, n);
  return r.eq(e.selection, !0) ? !1 : (t(B(e, r)), !0);
}
function M(e, t) {
  return h.cursor(t ? e.to : e.from);
}
function W(e, t) {
  return y(e, (n) => n.empty ? e.moveByChar(n, t) : M(n, t));
}
function m(e) {
  return e.textDirectionAt(e.state.selection.main.head) == rn.LTR;
}
const me = (e) => W(e, !m(e)), pe = (e) => W(e, m(e)), xn = (e) => W(e, !0), Mn = (e) => W(e, !1);
function ge(e, t, n) {
  let r = t.head, l = e.doc.lineAt(r);
  return r == (n ? l.to : l.from) ? r = n ? Math.min(e.doc.length, l.to + 1) : Math.max(0, l.from - 1) : r = l.from + T(l.text, r - l.from, n), h.cursor(r, n ? -1 : 1);
}
function je(e, t) {
  return y(e, (n) => n.empty ? ge(e.state, n, t) : M(n, t));
}
const bn = (e) => je(e, !0), En = (e) => je(e, !1);
function H(e, t) {
  return y(e, (n) => n.empty ? e.moveByGroup(n, t) : M(n, t));
}
const Qe = (e) => H(e, !m(e)), Xe = (e) => H(e, m(e)), Tn = (e) => H(e, !0), On = (e) => H(e, !1);
function ye(e, t, n) {
  let r = e.state.charCategorizer(t), l = r(n), o = l != D.Space;
  return (c) => {
    let s = r(c);
    return s != D.Space ? o && s == l : (o = !1, !0);
  };
}
const In = (e) => y(e, (t) => t.empty ? e.moveByChar(t, !0, (n) => ye(e, t.head, n)) : M(t, !0)), Te = typeof Intl < "u" && Intl.Segmenter ? /* @__PURE__ */ new Intl.Segmenter(void 0, { granularity: "word" }) : null;
function Ye(e, t, n) {
  let r = e.state.charCategorizer(t.from), l = D.Space, o = t.from, c = 0, s = !1, i = !1, f = !1, u = (d) => {
    if (s)
      return !1;
    o += n ? d.length : -d.length;
    let A = r(d), k;
    if (A == D.Word && d.charCodeAt(0) < 128 && /[\W_]/.test(d) && (A = -1), l == D.Space && (l = A), l != A)
      return !1;
    if (l == D.Word)
      if (d.toLowerCase() == d) {
        if (!n && i)
          return !1;
        f = !0;
      } else if (f) {
        if (n)
          return !1;
        s = !0;
      } else {
        if (i && n && r(k = e.state.sliceDoc(o, o + 1)) == D.Word && k.toLowerCase() == k)
          return !1;
        i = !0;
      }
    return c++, !0;
  }, a = e.moveByChar(t, n, (d) => (u(d), u));
  if (Te && l == D.Word && a.from == t.from + c * (n ? 1 : -1)) {
    let d = Math.min(t.head, a.head), A = Math.max(t.head, a.head), k = e.state.sliceDoc(d, A);
    if (k.length > 1 && /[\u4E00-\uffff]/.test(k)) {
      let F = Array.from(Te.segment(k));
      if (F.length > 1)
        return n ? h.cursor(t.head + F[1].index, -1) : h.cursor(a.head + F[F.length - 1].index, 1);
    }
  }
  return a;
}
function Ze(e, t) {
  return y(e, (n) => n.empty ? Ye(e, n, t) : M(n, t));
}
const Rn = (e) => Ze(e, !0), vn = (e) => Ze(e, !1);
function Fn(e, t, n) {
  if (t.type.prop(n))
    return !0;
  let r = t.to - t.from;
  return r && (r > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild;
}
function q(e, t, n) {
  let r = fe(e).resolveInner(t.head), l = n ? Z.closedBy : Z.openedBy;
  for (let i = t.head; ; ) {
    let f = n ? r.childAfter(i) : r.childBefore(i);
    if (!f)
      break;
    Fn(e, f, l) ? r = f : i = n ? f.to : f.from;
  }
  let o = r.type.prop(l), c, s;
  return o && (c = n ? E(e, r.from, 1) : E(e, r.to, -1)) && c.matched ? s = n ? c.end.to : c.end.from : s = n ? r.to : r.from, h.cursor(s, n ? -1 : 1);
}
const et = (e) => y(e, (t) => q(e.state, t, !m(e))), tt = (e) => y(e, (t) => q(e.state, t, m(e)));
function nt(e, t) {
  return y(e, (n) => {
    if (!n.empty)
      return M(n, t);
    let r = e.moveVertically(n, t);
    return r.head != n.head ? r : e.moveToLineBoundary(n, t);
  });
}
const ke = (e) => nt(e, !1), Se = (e) => nt(e, !0);
function rt(e) {
  let t = e.scrollDOM.clientHeight < e.scrollDOM.scrollHeight - 2, n = 0, r = 0, l;
  if (t) {
    for (let o of e.state.facet(O.scrollMargins)) {
      let c = o(e);
      c?.top && (n = Math.max(c?.top, n)), c?.bottom && (r = Math.max(c?.bottom, r));
    }
    l = e.scrollDOM.clientHeight - n - r;
  } else
    l = (e.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: n,
    marginBottom: r,
    selfScroll: t,
    height: Math.max(e.defaultLineHeight, l - 5)
  };
}
function ot(e, t) {
  let n = rt(e), { state: r } = e, l = I(r.selection, (c) => c.empty ? e.moveVertically(c, t, n.height) : M(c, t));
  if (l.eq(r.selection))
    return !1;
  let o;
  if (n.selfScroll) {
    let c = e.coordsAtPos(r.selection.main.head), s = e.scrollDOM.getBoundingClientRect(), i = s.top + n.marginTop, f = s.bottom - n.marginBottom;
    c && c.top > i && c.bottom < f && (o = O.scrollIntoView(l.main.head, { y: "start", yMargin: c.top - i }));
  }
  return e.dispatch(B(r, l), { effects: o }), !0;
}
const te = (e) => ot(e, !1), P = (e) => ot(e, !0);
function L(e, t, n) {
  let r = e.lineBlockAt(t.head), l = e.moveToLineBoundary(t, n);
  if (l.head == t.head && l.head != (n ? r.to : r.from) && (l = e.moveToLineBoundary(t, n, !1)), !n && l.head == r.from && r.length) {
    let o = /^\s*/.exec(e.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
    o && t.head != r.from + o && (l = h.cursor(r.from + o));
  }
  return l;
}
const lt = (e) => y(e, (t) => L(e, t, !0)), ct = (e) => y(e, (t) => L(e, t, !1)), st = (e) => y(e, (t) => L(e, t, !m(e))), it = (e) => y(e, (t) => L(e, t, m(e))), ut = (e) => y(e, (t) => h.cursor(e.lineBlockAt(t.head).from, 1)), ft = (e) => y(e, (t) => h.cursor(e.lineBlockAt(t.head).to, -1));
function at(e, t, n) {
  let r = !1, l = I(e.selection, (o) => {
    let c = E(e, o.head, -1) || E(e, o.head, 1) || o.head > 0 && E(e, o.head - 1, 1) || o.head < e.doc.length && E(e, o.head + 1, -1);
    if (!c || !c.end)
      return o;
    r = !0;
    let s = c.start.from == o.head ? c.end.to : c.end.from;
    return n ? h.range(o.anchor, s) : h.cursor(s);
  });
  return r ? (t(B(e, l)), !0) : !1;
}
const ht = ({ state: e, dispatch: t }) => at(e, t, !1), Un = ({ state: e, dispatch: t }) => at(e, t, !0);
function p(e, t, n) {
  let r = I(e.state.selection, (l) => {
    l.undirectional && l.head >= l.anchor != t && (l = h.range(l.head, l.anchor));
    let o = n(l);
    return h.range(l.anchor, o.head, o.goalColumn, o.bidiLevel || void 0, o.assoc);
  });
  return r.eq(e.state.selection) ? !1 : (e.dispatch(B(e.state, r)), !0);
}
function K(e, t) {
  return p(e, t, (n) => e.moveByChar(n, t));
}
const Ae = (e) => K(e, !m(e)), Be = (e) => K(e, m(e)), Gn = (e) => K(e, !0), Vn = (e) => K(e, !1), Nn = (e) => p(e, !0, (t) => ge(e.state, t, !0)), Pn = (e) => p(e, !1, (t) => ge(e.state, t, !1));
function $(e, t) {
  return p(e, t, (n) => e.moveByGroup(n, t));
}
const dt = (e) => $(e, !m(e)), mt = (e) => $(e, m(e)), Jn = (e) => $(e, !0), zn = (e) => $(e, !1), wn = (e) => p(e, !0, (t) => e.moveByChar(t, !0, (n) => ye(e, t.head, n)));
function pt(e, t) {
  return p(e, t, (n) => Ye(e, n, t));
}
const Wn = (e) => pt(e, !0), Hn = (e) => pt(e, !1), gt = (e) => {
  let t = !m(e);
  return p(e, t, (n) => q(e.state, n, t));
}, yt = (e) => {
  let t = m(e);
  return p(e, t, (n) => q(e.state, n, t));
};
function kt(e, t) {
  return p(e, t, (n) => e.moveVertically(n, t));
}
const Ce = (e) => kt(e, !1), De = (e) => kt(e, !0);
function St(e, t) {
  return p(e, t, (n) => e.moveVertically(n, t, rt(e).height));
}
const ne = (e) => St(e, !1), re = (e) => St(e, !0), At = (e) => p(e, !0, (t) => L(e, t, !0)), Bt = (e) => p(e, !1, (t) => L(e, t, !1)), Ct = (e) => {
  let t = !m(e);
  return p(e, t, (n) => L(e, n, t));
}, Dt = (e) => {
  let t = m(e);
  return p(e, t, (n) => L(e, n, t));
}, Lt = (e) => p(e, !1, (t) => h.cursor(e.lineBlockAt(t.head).from)), xt = (e) => p(e, !0, (t) => h.cursor(e.lineBlockAt(t.head).to)), oe = ({ state: e, dispatch: t }) => (t(B(e, { anchor: 0 })), !0), le = ({ state: e, dispatch: t }) => (t(B(e, { anchor: e.doc.length })), !0), ce = ({ state: e, dispatch: t }) => (t(B(e, { anchor: e.selection.main.anchor, head: 0 })), !0), se = ({ state: e, dispatch: t }) => (t(B(e, { anchor: e.selection.main.anchor, head: e.doc.length })), !0), Mt = ({ state: e, dispatch: t }) => (t(e.update({ selection: { anchor: 0, head: e.doc.length }, userEvent: "select" })), !0), bt = ({ state: e, dispatch: t }) => {
  let n = _(e).map(({ from: r, to: l }) => h.undirectionalRange(r, Math.min(l + 1, e.doc.length)));
  return t(e.update({ selection: h.create(n), userEvent: "select" })), !0;
}, Et = ({ state: e, dispatch: t }) => {
  let n = I(e.selection, (r) => {
    let l = fe(e), o = l.resolveStack(r.from, 1);
    if (r.empty) {
      let c = l.resolveStack(r.from, -1);
      c.node.from >= o.node.from && c.node.to <= o.node.to && (o = c);
    }
    for (let c = o; c; c = c.next) {
      let { node: s } = c;
      if ((s.from < r.from && s.to >= r.to || s.to > r.to && s.from <= r.from) && c.next)
        return h.undirectionalRange(s.from, s.to);
    }
    return r;
  });
  return n.eq(e.selection) ? !1 : (t(B(e, n)), !0);
};
function Tt(e, t) {
  let { state: n } = e, r = n.selection, l = n.selection.ranges.slice();
  for (let o of n.selection.ranges) {
    let c = n.doc.lineAt(o.head);
    if (t ? c.to < e.state.doc.length : c.from > 0)
      for (let s = o; ; ) {
        let i = e.moveVertically(s, t);
        if (i.head < c.from || i.head > c.to) {
          l.some((f) => f.head == i.head) || l.push(i);
          break;
        } else {
          if (i.head == s.head)
            break;
          s = i;
        }
      }
  }
  return l.length == r.ranges.length ? !1 : (e.dispatch(B(n, h.create(l, l.length - 1))), !0);
}
const Ot = (e) => Tt(e, !1), It = (e) => Tt(e, !0), Rt = ({ state: e, dispatch: t }) => {
  let n = e.selection, r = null;
  return n.ranges.length > 1 ? r = h.create([n.main]) : n.main.empty || (r = h.create([h.cursor(n.main.head)])), r ? (t(B(e, r)), !0) : !1;
};
function b(e, t) {
  if (e.state.readOnly)
    return !1;
  let n = "delete.selection", { state: r } = e, l = r.changeByRange((o) => {
    let { from: c, to: s } = o;
    if (c == s) {
      let i = t(o);
      i < c ? (n = "delete.backward", i = U(e, i, !1)) : i > c && (n = "delete.forward", i = U(e, i, !0)), c = Math.min(c, i), s = Math.max(s, i);
    } else
      c = U(e, c, !1), s = U(e, s, !0);
    return c == s ? { range: o } : { changes: { from: c, to: s }, range: h.cursor(c, c < o.head ? -1 : 1) };
  });
  return l.changes.empty ? !1 : (e.dispatch(r.update(l, {
    scrollIntoView: !0,
    userEvent: n,
    effects: n == "delete.selection" ? O.announce.of(r.phrase("Selection deleted")) : void 0
  })), !0);
}
function U(e, t, n) {
  if (e instanceof O)
    for (let r of e.state.facet(O.atomicRanges).map((l) => l(e)))
      r.between(t, t, (l, o) => {
        l < t && o > t && (t = n ? o : l);
      });
  return t;
}
const Le = (e, t, n) => b(e, (r) => {
  let l = r.from, { state: o } = e, c = o.doc.lineAt(l), s, i;
  if (n && !t && l > c.from && l < c.from + 200 && !/[^ \t]/.test(s = c.text.slice(0, l - c.from))) {
    if (s[s.length - 1] == "	")
      return l - 1;
    let f = ue(s, o.tabSize), u = f % Y(o) || Y(o);
    for (let a = 0; a < u && s[s.length - 1 - a] == " "; a++)
      l--;
    i = l;
  } else
    i = T(c.text, l - c.from, t, t) + c.from, i == l && c.number != (t ? o.doc.lines : 1) ? i += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(c.text.slice(i - c.from, l - c.from)) && (i = T(c.text, i - c.from, !1, !1) + c.from);
  return i;
}), J = (e) => Le(e, !1, !0), qn = (e) => Le(e, !1, !1), xe = (e) => Le(e, !0, !1), vt = (e, t) => b(e, (n) => {
  let r = n.head, { state: l } = e, o = l.doc.lineAt(r), c = l.charCategorizer(r);
  for (let s = null; ; ) {
    if (r == (t ? o.to : o.from)) {
      r == n.head && o.number != (t ? l.doc.lines : 1) && (r += t ? 1 : -1);
      break;
    }
    let i = T(o.text, r - o.from, t) + o.from, f = o.text.slice(Math.min(r, i) - o.from, Math.max(r, i) - o.from), u = c(f);
    if (s != null && u != s)
      break;
    (f != " " || r != n.head) && (s = u), r = i;
  }
  return r;
}), Me = (e) => vt(e, !1), Ft = (e) => vt(e, !0), Kn = (e) => b(e, (t) => e.moveByChar(t, !0, (n) => ye(e, t.head, n)).head), Ut = (e) => b(e, (t) => {
  let n = e.lineBlockAt(t.head).to;
  return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
}), $n = (e) => b(e, (t) => {
  let n = e.lineBlockAt(t.head).from;
  return t.head > n ? n : Math.max(0, t.head - 1);
}), Gt = (e) => b(e, (t) => {
  let n = e.moveToLineBoundary(t, !1).head;
  return t.head > n ? n : Math.max(0, t.head - 1);
}), Vt = (e) => b(e, (t) => {
  let n = e.moveToLineBoundary(t, !0).head;
  return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
}), _n = ({ state: e, dispatch: t }) => {
  if (e.readOnly)
    return !1;
  let n = [];
  for (let r = 0, l = "", o = e.doc.iter(); ; ) {
    if (o.next(), o.lineBreak || o.done) {
      let c = l.search(/\s+$/);
      if (c > -1 && n.push({ from: r - (l.length - c), to: r }), o.done)
        break;
      l = "";
    } else
      l = o.value;
    r += o.value.length;
  }
  return n.length ? (t(e.update({ changes: n, userEvent: "delete" })), !0) : !1;
}, Nt = ({ state: e, dispatch: t }) => {
  if (e.readOnly)
    return !1;
  let n = e.changeByRange((r) => ({
    changes: { from: r.from, to: r.to, insert: Re.of(["", ""]) },
    range: h.cursor(r.from)
  }));
  return t(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
}, Pt = ({ state: e, dispatch: t }) => {
  if (e.readOnly)
    return !1;
  let n = e.changeByRange((r) => {
    if (!r.empty || r.from == 0 || r.from == e.doc.length)
      return { range: r };
    let l = r.from, o = e.doc.lineAt(l), c = l == o.from ? l - 1 : T(o.text, l - o.from, !1) + o.from, s = l == o.to ? l + 1 : T(o.text, l - o.from, !0) + o.from;
    return {
      changes: { from: c, to: s, insert: e.doc.slice(l, s).append(e.doc.slice(c, l)) },
      range: h.cursor(s)
    };
  });
  return n.changes.empty ? !1 : (t(e.update(n, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function _(e) {
  let t = [], n = -1;
  for (let r of e.selection.ranges) {
    let l = e.doc.lineAt(r.from), o = e.doc.lineAt(r.to);
    if (!r.empty && r.to == o.from && (o = e.doc.lineAt(r.to - 1)), n >= l.number) {
      let c = t[t.length - 1];
      c.to = o.to, c.ranges.push(r);
    } else
      t.push({ from: l.from, to: o.to, ranges: [r] });
    n = o.number + 1;
  }
  return t;
}
function Jt(e, t, n) {
  if (e.readOnly)
    return !1;
  let r = [], l = [];
  for (let o of _(e)) {
    if (n ? o.to == e.doc.length : o.from == 0)
      continue;
    let c = e.doc.lineAt(n ? o.to + 1 : o.from - 1), s = c.length + 1;
    if (n) {
      r.push({ from: o.to, to: c.to }, { from: o.from, insert: c.text + e.lineBreak });
      for (let i of o.ranges)
        l.push(h.range(Math.min(e.doc.length, i.anchor + s), Math.min(e.doc.length, i.head + s)));
    } else {
      r.push({ from: c.from, to: o.from }, { from: o.to, insert: e.lineBreak + c.text });
      for (let i of o.ranges)
        l.push(h.range(i.anchor - s, i.head - s));
    }
  }
  return r.length ? (t(e.update({
    changes: r,
    scrollIntoView: !0,
    selection: h.create(l, e.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const zt = ({ state: e, dispatch: t }) => Jt(e, t, !1), wt = ({ state: e, dispatch: t }) => Jt(e, t, !0);
function Wt(e, t, n) {
  if (e.readOnly)
    return !1;
  let r = [];
  for (let o of _(e))
    n ? r.push({ from: o.from, insert: e.doc.slice(o.from, o.to) + e.lineBreak }) : r.push({ from: o.to, insert: e.lineBreak + e.doc.slice(o.from, o.to) });
  let l = e.changes(r);
  return t(e.update({
    changes: l,
    selection: e.selection.map(l, n ? 1 : -1),
    scrollIntoView: !0,
    userEvent: "input.copyline"
  })), !0;
}
const Ht = ({ state: e, dispatch: t }) => Wt(e, t, !1), qt = ({ state: e, dispatch: t }) => Wt(e, t, !0), Kt = (e) => {
  if (e.state.readOnly)
    return !1;
  let { state: t } = e, n = t.changes(_(t).map(({ from: l, to: o }) => (l > 0 ? l-- : o < t.doc.length && o++, { from: l, to: o }))), r = I(t.selection, (l) => {
    let o;
    if (e.lineWrapping) {
      let c = e.lineBlockAt(l.head), s = e.coordsAtPos(l.head, l.assoc || 1);
      s && (o = c.bottom + e.documentTop - s.bottom + e.defaultLineHeight / 2);
    }
    return e.moveVertically(l, !0, o);
  }).map(n);
  return e.dispatch({ changes: n, selection: r, scrollIntoView: !0, userEvent: "delete.line" }), !0;
}, jn = ({ state: e, dispatch: t }) => (t(e.update(e.replaceSelection(e.lineBreak), { scrollIntoView: !0, userEvent: "input" })), !0), Qn = ({ state: e, dispatch: t }) => (t(e.update(e.changeByRange((n) => {
  let r = /^\s*/.exec(e.doc.lineAt(n.from).text)[0];
  return {
    changes: { from: n.from, to: n.to, insert: e.lineBreak + r },
    range: h.cursor(n.from + r.length + 1)
  };
}), { scrollIntoView: !0, userEvent: "input" })), !0);
function Xn(e, t) {
  if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1)))
    return { from: t, to: t };
  let n = fe(e).resolveInner(t), r = n.childBefore(t), l = n.childAfter(t), o;
  return r && l && r.to <= t && l.from >= t && (o = r.type.prop(Z.closedBy)) && o.indexOf(l.name) > -1 && e.doc.lineAt(r.to).from == e.doc.lineAt(l.from).from && !/\S/.test(e.sliceDoc(r.to, l.from)) ? { from: r.to, to: l.from } : null;
}
const ie = /* @__PURE__ */ _t(!1), $t = /* @__PURE__ */ _t(!0);
function _t(e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly)
      return !1;
    let r = t.changeByRange((l) => {
      let { from: o, to: c } = l, s = t.doc.lineAt(o), i = !e && o == c && Xn(t, o);
      e && (o = c = (c <= s.to ? s : t.doc.lineAt(c)).to);
      let f = new Fe(t, { simulateBreak: o, simulateDoubleBreak: !!i }), u = Ue(f, o);
      for (u == null && (u = ue(/^\s*/.exec(t.doc.lineAt(o).text)[0], t.tabSize)); c < s.to && /\s/.test(s.text[c - s.from]); )
        c++;
      i ? { from: o, to: c } = i : o > s.from && o < s.from + 100 && !/\S/.test(s.text.slice(0, o)) && (o = s.from);
      let a = ["", G(t, u)];
      return i && a.push(G(t, f.lineIndent(s.from, -1))), {
        changes: { from: o, to: c, insert: Re.of(a) },
        range: h.cursor(o + 1 + a[1].length)
      };
    });
    return n(t.update(r, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function be(e, t) {
  let n = -1;
  return e.changeByRange((r) => {
    let l = [];
    for (let c = r.from; c <= r.to; ) {
      let s = e.doc.lineAt(c);
      s.number > n && (r.empty || r.to > s.from) && (t(s, l, r), n = s.number), c = s.to + 1;
    }
    let o = e.changes(l);
    return {
      changes: l,
      range: h.range(o.mapPos(r.anchor, 1), o.mapPos(r.head, 1))
    };
  });
}
const jt = ({ state: e, dispatch: t }) => {
  if (e.readOnly)
    return !1;
  let n = /* @__PURE__ */ Object.create(null), r = new Fe(e, { overrideIndentation: (o) => {
    let c = n[o];
    return c ?? -1;
  } }), l = be(e, (o, c, s) => {
    let i = Ue(r, o.from);
    if (i == null)
      return;
    /\S/.test(o.text) || (i = 0);
    let f = /^\s*/.exec(o.text)[0], u = G(e, i);
    (f != u || s.from < o.from + f.length) && (n[o.from] = i, c.push({ from: o.from, to: o.from + f.length, insert: u }));
  });
  return l.changes.empty || t(e.update(l, { userEvent: "indent" })), !0;
}, j = ({ state: e, dispatch: t }) => e.readOnly ? !1 : (t(e.update(be(e, (n, r) => {
  r.push({ from: n.from, insert: e.facet(on) });
}), { userEvent: "input.indent" })), !0), Ee = ({ state: e, dispatch: t }) => e.readOnly ? !1 : (t(e.update(be(e, (n, r) => {
  let l = /^\s*/.exec(n.text)[0];
  if (!l)
    return;
  let o = ue(l, e.tabSize), c = 0, s = G(e, Math.max(0, o - Y(e)));
  for (; c < l.length && c < s.length && l.charCodeAt(c) == s.charCodeAt(c); )
    c++;
  r.push({ from: n.from + c, to: n.from + l.length, insert: s.slice(c) });
}), { userEvent: "delete.dedent" })), !0), Qt = (e) => (e.setTabFocusMode(), !0), Yn = (e) => (e.setTabFocusMode(2e3), !0), Zn = ({ state: e, dispatch: t }) => e.selection.ranges.some((n) => !n.empty) ? j({ state: e, dispatch: t }) : (t(e.update(e.replaceSelection("	"), { scrollIntoView: !0, userEvent: "input" })), !0), Xt = [
  { key: "Ctrl-b", run: me, shift: Ae, preventDefault: !0 },
  { key: "Ctrl-f", run: pe, shift: Be },
  { key: "Ctrl-p", run: ke, shift: Ce },
  { key: "Ctrl-n", run: Se, shift: De },
  { key: "Ctrl-a", run: ut, shift: Lt },
  { key: "Ctrl-e", run: ft, shift: xt },
  { key: "Ctrl-d", run: xe },
  { key: "Ctrl-h", run: J },
  { key: "Ctrl-k", run: Ut },
  { key: "Ctrl-Alt-h", run: Me },
  { key: "Ctrl-o", run: Nt },
  { key: "Ctrl-t", run: Pt },
  { key: "Ctrl-v", run: P }
], Yt = /* @__PURE__ */ [
  { key: "ArrowLeft", run: me, shift: Ae, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Qe, shift: dt, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: st, shift: Ct, preventDefault: !0 },
  { key: "ArrowRight", run: pe, shift: Be, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Xe, shift: mt, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: it, shift: Dt, preventDefault: !0 },
  { key: "ArrowUp", run: ke, shift: Ce, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: oe, shift: ce },
  { mac: "Ctrl-ArrowUp", run: te, shift: ne },
  { key: "ArrowDown", run: Se, shift: De, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: le, shift: se },
  { mac: "Ctrl-ArrowDown", run: P, shift: re },
  { key: "PageUp", run: te, shift: ne },
  { key: "PageDown", run: P, shift: re },
  { key: "Home", run: ct, shift: Bt, preventDefault: !0 },
  { key: "Mod-Home", run: oe, shift: ce },
  { key: "End", run: lt, shift: At, preventDefault: !0 },
  { key: "Mod-End", run: le, shift: se },
  { key: "Enter", run: ie, shift: ie },
  { key: "Mod-a", run: Mt },
  { key: "Backspace", run: J, shift: J, preventDefault: !0 },
  { key: "Delete", run: xe, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Me, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: Ft, preventDefault: !0 },
  { mac: "Mod-Backspace", run: Gt, preventDefault: !0 },
  { mac: "Mod-Delete", run: Vt, preventDefault: !0 }
].concat(/* @__PURE__ */ Xt.map((e) => ({ mac: e.key, run: e.run, shift: e.shift }))), er = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: et, shift: gt },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: tt, shift: yt },
  { key: "Alt-ArrowUp", run: zt },
  { key: "Shift-Alt-ArrowUp", run: Ht },
  { key: "Alt-ArrowDown", run: wt },
  { key: "Shift-Alt-ArrowDown", run: qt },
  { key: "Mod-Alt-ArrowUp", run: Ot },
  { key: "Mod-Alt-ArrowDown", run: It },
  { key: "Escape", run: Rt },
  { key: "Mod-Enter", run: $t },
  { key: "Alt-l", mac: "Ctrl-l", run: bt },
  { key: "Mod-i", run: Et, preventDefault: !0 },
  { key: "Mod-[", run: Ee },
  { key: "Mod-]", run: j },
  { key: "Mod-Alt-\\", run: jt },
  { key: "Shift-Mod-k", run: Kt },
  { key: "Shift-Mod-\\", run: ht },
  { key: "Mod-/", run: Ge },
  { key: "Alt-A", mac: "Ctrl-A", run: Ne },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Qt }
].concat(Yt), tr = { key: "Tab", run: j, shift: Ee }, cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addCursorAbove: Ot,
  addCursorBelow: It,
  blockComment: sn,
  blockUncomment: un,
  canRedoSelection: yn,
  canUndoSelection: gn,
  copyLineDown: qt,
  copyLineUp: Ht,
  cursorCharBackward: Mn,
  cursorCharBackwardLogical: En,
  cursorCharForward: xn,
  cursorCharForwardLogical: bn,
  cursorCharLeft: me,
  cursorCharRight: pe,
  cursorDocEnd: le,
  cursorDocStart: oe,
  cursorGroupBackward: On,
  cursorGroupForward: Tn,
  cursorGroupForwardWin: In,
  cursorGroupLeft: Qe,
  cursorGroupRight: Xe,
  cursorLineBoundaryBackward: ct,
  cursorLineBoundaryForward: lt,
  cursorLineBoundaryLeft: st,
  cursorLineBoundaryRight: it,
  cursorLineDown: Se,
  cursorLineEnd: ft,
  cursorLineStart: ut,
  cursorLineUp: ke,
  cursorMatchingBracket: ht,
  cursorPageDown: P,
  cursorPageUp: te,
  cursorSubwordBackward: vn,
  cursorSubwordForward: Rn,
  cursorSyntaxLeft: et,
  cursorSyntaxRight: tt,
  defaultKeymap: er,
  deleteCharBackward: J,
  deleteCharBackwardStrict: qn,
  deleteCharForward: xe,
  deleteGroupBackward: Me,
  deleteGroupForward: Ft,
  deleteGroupForwardWin: Kn,
  deleteLine: Kt,
  deleteLineBoundaryBackward: Gt,
  deleteLineBoundaryForward: Vt,
  deleteToLineEnd: Ut,
  deleteToLineStart: $n,
  deleteTrailingWhitespace: _n,
  emacsStyleKeymap: Xt,
  history: hn,
  historyField: dn,
  historyKeymap: Ln,
  indentLess: Ee,
  indentMore: j,
  indentSelection: jt,
  indentWithTab: tr,
  insertBlankLine: $t,
  insertNewline: jn,
  insertNewlineAndIndent: ie,
  insertNewlineKeepIndent: Qn,
  insertTab: Zn,
  invertedEffects: ze,
  isolateHistory: Je,
  lineComment: ln,
  lineUncomment: cn,
  moveLineDown: wt,
  moveLineUp: zt,
  redo: V,
  redoDepth: pn,
  redoSelection: He,
  selectAll: Mt,
  selectCharBackward: Vn,
  selectCharBackwardLogical: Pn,
  selectCharForward: Gn,
  selectCharForwardLogical: Nn,
  selectCharLeft: Ae,
  selectCharRight: Be,
  selectDocEnd: se,
  selectDocStart: ce,
  selectGroupBackward: zn,
  selectGroupForward: Jn,
  selectGroupForwardWin: wn,
  selectGroupLeft: dt,
  selectGroupRight: mt,
  selectLine: bt,
  selectLineBoundaryBackward: Bt,
  selectLineBoundaryForward: At,
  selectLineBoundaryLeft: Ct,
  selectLineBoundaryRight: Dt,
  selectLineDown: De,
  selectLineEnd: xt,
  selectLineStart: Lt,
  selectLineUp: Ce,
  selectMatchingBracket: Un,
  selectPageDown: re,
  selectPageUp: ne,
  selectParentSyntax: Et,
  selectSubwordBackward: Hn,
  selectSubwordForward: Wn,
  selectSyntaxLeft: gt,
  selectSyntaxRight: yt,
  simplifySelection: Rt,
  splitLine: Nt,
  standardKeymap: Yt,
  temporarilySetTabFocusMode: Yn,
  toggleBlockComment: Ne,
  toggleBlockCommentByLine: Pe,
  toggleComment: Ge,
  toggleLineComment: Ve,
  toggleTabFocusMode: Qt,
  transposeChars: Pt,
  undo: de,
  undoDepth: mn,
  undoSelection: We
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ot as addCursorAbove,
  It as addCursorBelow,
  sn as blockComment,
  un as blockUncomment,
  yn as canRedoSelection,
  gn as canUndoSelection,
  qt as copyLineDown,
  Ht as copyLineUp,
  Mn as cursorCharBackward,
  En as cursorCharBackwardLogical,
  xn as cursorCharForward,
  bn as cursorCharForwardLogical,
  me as cursorCharLeft,
  pe as cursorCharRight,
  le as cursorDocEnd,
  oe as cursorDocStart,
  On as cursorGroupBackward,
  Tn as cursorGroupForward,
  In as cursorGroupForwardWin,
  Qe as cursorGroupLeft,
  Xe as cursorGroupRight,
  ct as cursorLineBoundaryBackward,
  lt as cursorLineBoundaryForward,
  st as cursorLineBoundaryLeft,
  it as cursorLineBoundaryRight,
  Se as cursorLineDown,
  ft as cursorLineEnd,
  ut as cursorLineStart,
  ke as cursorLineUp,
  ht as cursorMatchingBracket,
  P as cursorPageDown,
  te as cursorPageUp,
  vn as cursorSubwordBackward,
  Rn as cursorSubwordForward,
  et as cursorSyntaxLeft,
  tt as cursorSyntaxRight,
  cr as default,
  er as defaultKeymap,
  J as deleteCharBackward,
  qn as deleteCharBackwardStrict,
  xe as deleteCharForward,
  Me as deleteGroupBackward,
  Ft as deleteGroupForward,
  Kn as deleteGroupForwardWin,
  Kt as deleteLine,
  Gt as deleteLineBoundaryBackward,
  Vt as deleteLineBoundaryForward,
  Ut as deleteToLineEnd,
  $n as deleteToLineStart,
  _n as deleteTrailingWhitespace,
  Xt as emacsStyleKeymap,
  hn as history,
  dn as historyField,
  Ln as historyKeymap,
  Ee as indentLess,
  j as indentMore,
  jt as indentSelection,
  tr as indentWithTab,
  $t as insertBlankLine,
  jn as insertNewline,
  ie as insertNewlineAndIndent,
  Qn as insertNewlineKeepIndent,
  Zn as insertTab,
  ze as invertedEffects,
  Je as isolateHistory,
  ln as lineComment,
  cn as lineUncomment,
  wt as moveLineDown,
  zt as moveLineUp,
  V as redo,
  pn as redoDepth,
  He as redoSelection,
  Mt as selectAll,
  Vn as selectCharBackward,
  Pn as selectCharBackwardLogical,
  Gn as selectCharForward,
  Nn as selectCharForwardLogical,
  Ae as selectCharLeft,
  Be as selectCharRight,
  se as selectDocEnd,
  ce as selectDocStart,
  zn as selectGroupBackward,
  Jn as selectGroupForward,
  wn as selectGroupForwardWin,
  dt as selectGroupLeft,
  mt as selectGroupRight,
  bt as selectLine,
  Bt as selectLineBoundaryBackward,
  At as selectLineBoundaryForward,
  Ct as selectLineBoundaryLeft,
  Dt as selectLineBoundaryRight,
  De as selectLineDown,
  xt as selectLineEnd,
  Lt as selectLineStart,
  Ce as selectLineUp,
  Un as selectMatchingBracket,
  re as selectPageDown,
  ne as selectPageUp,
  Et as selectParentSyntax,
  Hn as selectSubwordBackward,
  Wn as selectSubwordForward,
  gt as selectSyntaxLeft,
  yt as selectSyntaxRight,
  Rt as simplifySelection,
  Nt as splitLine,
  Yt as standardKeymap,
  Yn as temporarilySetTabFocusMode,
  Ne as toggleBlockComment,
  Pe as toggleBlockCommentByLine,
  Ge as toggleComment,
  Ve as toggleLineComment,
  Qt as toggleTabFocusMode,
  Pt as transposeChars,
  de as undo,
  mn as undoDepth,
  We as undoSelection
};
