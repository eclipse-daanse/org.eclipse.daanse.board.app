(function(){var i="ui.vue.common.lsp",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".editor-shell[data-v-b6d83ee1]{position:relative;height:100%;min-height:0;overflow:hidden}.editor-host[data-v-b6d83ee1]{height:100%;min-height:0}.editor-host[data-v-b6d83ee1] .cm-editor{height:100%}.editor-host[data-v-b6d83ee1] .cm-editor.cm-focused{outline:none}.editor-overlay[data-v-b6d83ee1]{position:absolute;inset:0;display:flex;flex-direction:column;gap:.75rem;align-items:center;justify-content:center;background:var(--surface);color:var(--text-muted);font-size:.9rem;text-align:center;padding:1.5rem}.editor-overlay--error[data-v-b6d83ee1]{color:var(--danger)}.editor-overlay code[data-v-b6d83ee1]{max-width:40rem;font-size:.8rem;color:var(--text-muted);white-space:pre-wrap;word-break:break-word}.spinner[data-v-b6d83ee1]{width:1.25rem;height:1.25rem;border:2px solid var(--border);border-top-color:var(--accent);border-radius:50%;animation:spin-b6d83ee1 .7s linear infinite}@keyframes spin-b6d83ee1{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.spinner[data-v-b6d83ee1]{animation:none}}.row[data-v-fb27fccb]{display:flex;align-items:center;gap:.35rem;width:100%;padding:.2rem .4rem;border:0;border-radius:3px;background:none;font:inherit;font-size:.8rem;color:var(--text);text-align:left;cursor:pointer}.row[data-v-fb27fccb]:hover{background:var(--surface-raised)}.row[data-v-fb27fccb]:focus-visible{outline:1px solid var(--accent);outline-offset:-1px}.row--active[data-v-fb27fccb]{background:var(--surface-raised);box-shadow:inset 2px 0 0 var(--accent)}.row--scalar .label[data-v-fb27fccb],.row--reference .label[data-v-fb27fccb]{color:var(--text-muted)}.row--reference .detail[data-v-fb27fccb]{color:var(--accent)}.row--empty .label[data-v-fb27fccb],.row--empty .detail[data-v-fb27fccb]{color:var(--warning);font-style:italic}.chevron[data-v-fb27fccb],.chevron-spacer[data-v-fb27fccb]{width:.75rem;height:.75rem;flex-shrink:0}.chevron[data-v-fb27fccb]{fill:currentColor;color:var(--text-muted);transition:transform .12s}.chevron--open[data-v-fb27fccb]{transform:rotate(90deg)}.label[data-v-fb27fccb]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--mono);font-size:.74rem}.detail[data-v-fb27fccb]{flex-shrink:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--mono);font-size:.72rem;color:var(--text-muted)}@media(prefers-reduced-motion:reduce){.chevron[data-v-fb27fccb]{transition:none}}.panel[data-v-1e86e834]{display:flex;flex-direction:column;min-height:0;width:22rem;flex-shrink:0;background:var(--surface);border-left:1px solid var(--border)}.panel-header[data-v-1e86e834]{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding:.5rem .9rem;border-bottom:1px solid var(--border)}h2[data-v-1e86e834]{margin:0;font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted)}.modes[data-v-1e86e834]{display:inline-flex;padding:2px;border:1px solid var(--border);border-radius:6px;background:var(--surface-raised)}.mode[data-v-1e86e834]{font:inherit;font-size:.68rem;font-weight:600;letter-spacing:.03em;padding:.12rem .5rem;border:0;border-radius:4px;background:none;color:var(--text-muted);cursor:pointer;transition:background .12s,color .12s}.mode[data-v-1e86e834]:hover{color:var(--text)}.mode--active[data-v-1e86e834]{background:var(--accent);color:var(--bg)}.mode[data-v-1e86e834]:focus-visible{outline:2px solid var(--accent);outline-offset:1px}.status[data-v-1e86e834]{margin:0;padding:.25rem .9rem;font-size:.7rem;color:var(--text-muted);border-bottom:1px solid var(--border)}.status--errors[data-v-1e86e834]{color:var(--warning)}.panel-body[data-v-1e86e834]{flex:1;min-height:0;overflow:auto;padding:.35rem}.empty[data-v-1e86e834]{margin:0;padding:.45rem;font-size:.8rem;color:var(--text-muted)}.empty--error[data-v-1e86e834]{color:var(--danger)}code[data-v-1e86e834]{font-family:var(--mono);font-size:.75rem}@media(prefers-reduced-motion:reduce){.mode[data-v-1e86e834]{transition:none}}.placeholder[data-v-5518d89f]{margin:0;padding:.8rem .9rem;font-size:.82rem;color:var(--text-muted)}.list[data-v-5518d89f]{margin:0;padding:.25rem 0;list-style:none;overflow-y:auto;min-height:0;flex:1}.row[data-v-5518d89f]{display:grid;grid-template-columns:.75rem 3.5rem 1fr;gap:.6rem;align-items:baseline;padding:.3rem .9rem;font-size:.82rem;line-height:1.45}.row[data-v-5518d89f]:hover{background:var(--surface-raised)}.dot[data-v-5518d89f]{width:.5rem;height:.5rem;border-radius:50%;align-self:center}.dot--error[data-v-5518d89f]{background:var(--danger)}.dot--warning[data-v-5518d89f]{background:var(--warning)}.dot--info[data-v-5518d89f],.dot--hint[data-v-5518d89f]{background:var(--accent)}.position[data-v-5518d89f]{font-family:var(--mono);font-size:.75rem;color:var(--text-muted);font-variant-numeric:tabular-nums;text-align:right}.message[data-v-5518d89f]{color:var(--text);overflow-wrap:anywhere}\n";})();
import { ref as v, shallowRef as j, provide as q, inject as X, defineComponent as R, onMounted as ce, watch as D, onBeforeUnmount as Y, createElementBlock as m, openBlock as f, createElementVNode as _, createCommentVNode as $, createTextVNode as B, toDisplayString as x, reactive as se, computed as C, unref as b, normalizeStyle as ue, normalizeClass as M, Fragment as T, renderList as I, createBlock as Q } from "vue";
import { closeBrackets as de, autocompletion as fe, closeBracketsKeymap as me, completionKeymap as ge } from "@codemirror/autocomplete";
import { history as pe, defaultKeymap as he, historyKeymap as ve, indentWithTab as ye } from "@codemirror/commands";
import { HighlightStyle as be, syntaxHighlighting as ke, foldGutter as _e, indentOnInput as Se, indentUnit as we, bracketMatching as xe, foldKeymap as Ee } from "@codemirror/language";
import { lintGutter as Te, lintKeymap as $e, forEachDiagnostic as Ce } from "@codemirror/lint";
import { languageServerSupport as Ae } from "@codemirror/lsp-client";
import { highlightSelectionMatches as De, searchKeymap as Me } from "@codemirror/search";
import { EditorState as F } from "@codemirror/state";
import { EditorView as L, lineNumbers as Le, highlightActiveLineGutter as Ie, highlightSpecialChars as Re, drawSelection as Ne, dropCursor as Oe, rectangularSelection as Be, highlightActiveLine as Fe, keymap as Pe } from "@codemirror/view";
import { getLanguageClient as Z, AST_REQUEST as He, startLanguageClient as U } from "org.eclipse.daanse.board.app.lib.lsp.core";
import { tags as w } from "@lezer/highlight";
const Ve = 300, P = Symbol(
  "olap-editor session"
);
function ze(e) {
  const t = v(e.language), r = v(e.uri), n = v(e.text ?? ""), a = v(null), c = v(null), p = v(!1), i = v(!1), g = v(null), h = j();
  let l, s = 0;
  async function k() {
    const u = ++s, y = Z(t.value.id);
    if (!y) {
      g.value = `The ${t.value.label} language server is not connected.`;
      return;
    }
    p.value = !0;
    try {
      const S = await y.request(
        He,
        {
          textDocument: { uri: N(r.value) }
        }
      );
      if (u !== s) return;
      c.value = S, g.value = null, i.value = !1;
    } catch (S) {
      if (u !== s) return;
      g.value = S instanceof Error ? S.message : String(S);
    } finally {
      u === s && (p.value = !1);
    }
  }
  function o() {
    i.value = !0, l && clearTimeout(l), l = setTimeout(() => void k(), Ve);
  }
  return {
    language: t,
    uri: r,
    text: n,
    cursorPosition: a,
    ast: c,
    astLoading: p,
    astStale: i,
    astError: g,
    setView(u) {
      if (h.value = u, !u) {
        a.value = null;
        return;
      }
      const y = u.state.selection.main.head, S = u.state.doc.lineAt(y), E = { line: S.number - 1, character: y - S.from }, A = a.value;
      (A?.line !== E.line || A?.character !== E.character) && (a.value = E);
    },
    revealRange(u) {
      const y = h.value;
      if (!y) return;
      const S = y.state.doc;
      if (u.start.line >= S.lines || u.end.line >= S.lines) return;
      const E = (A) => {
        const K = S.line(A.line + 1);
        return Math.min(K.from + A.character, K.to);
      };
      y.dispatch({
        selection: { anchor: E(u.start), head: E(u.end) },
        scrollIntoView: !0
      });
    },
    refreshAst: k,
    scheduleAstRefresh: o,
    dispose() {
      l && clearTimeout(l), s++, h.value = void 0, c.value = null;
    }
  };
}
function Ke(e) {
  return q(P, e), e;
}
function J() {
  const e = X(P);
  if (!e)
    throw new Error(
      "No editor session provided. Call provideEditorSession() in a parent component."
    );
  return e;
}
function N(e) {
  return /^[a-z][a-z\d+.-]*:/i.test(e) ? e : `file://${e.startsWith("/") ? "" : "/"}${e}`;
}
function ee(e, t) {
  const r = t.line > e.start.line || t.line === e.start.line && t.character >= e.start.character, n = t.line < e.end.line || t.line === e.end.line && t.character <= e.end.character;
  return r && n;
}
const d = {
  background: "#1f1f1f",
  surface: "#181818",
  foreground: "#cccccc",
  caret: "#aeafad",
  selection: "#264f78",
  lineHighlight: "#ffffff0a",
  gutterForeground: "#6e7681",
  border: "#2b2b2b",
  comment: "#6a9955",
  keyword: "#c586c0",
  member: "#9cdcfe",
  key: "#4fc1ff",
  string: "#ce9178",
  number: "#b5cea8",
  fn: "#dcdcaa",
  constant: "#569cd6",
  property: "#9cdcfe",
  operator: "#d4d4d4"
}, te = L.theme(
  {
    "&": {
      color: d.foreground,
      backgroundColor: d.background,
      height: "100%",
      fontSize: "13px"
    },
    ".cm-scroller": {
      fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
      lineHeight: "1.5"
    },
    ".cm-content": { caretColor: d.caret },
    ".cm-cursor, .cm-dropCursor": { borderLeftColor: d.caret },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
      backgroundColor: d.selection
    },
    ".cm-activeLine": { backgroundColor: d.lineHighlight },
    ".cm-gutters": {
      backgroundColor: d.background,
      color: d.gutterForeground,
      border: "none"
    },
    ".cm-activeLineGutter": { backgroundColor: d.lineHighlight },
    ".cm-foldPlaceholder": {
      backgroundColor: "transparent",
      border: "none",
      color: d.gutterForeground
    },
    ".cm-tooltip": {
      backgroundColor: d.surface,
      border: `1px solid ${d.border}`,
      color: d.foreground
    },
    ".cm-tooltip.cm-tooltip-autocomplete > ul": {
      fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
      maxHeight: "16rem"
    },
    ".cm-tooltip.cm-tooltip-autocomplete > ul > li[aria-selected]": {
      backgroundColor: d.selection,
      color: d.foreground
    },
    ".cm-completionIcon": { paddingRight: "0.6em", opacity: 0.7 },
    ".cm-completionDetail": {
      marginLeft: "1rem",
      color: d.gutterForeground,
      fontStyle: "normal"
    },
    // The panel @codemirror/lint renders at the bottom is redundant here —
    // the app has its own Problems panel fed from the same diagnostics.
    ".cm-panels": { display: "none" }
  },
  { dark: !0 }
), Ue = be.define([
  { tag: w.comment, color: d.comment, fontStyle: "italic" },
  { tag: w.keyword, color: d.keyword },
  { tag: w.operator, color: d.operator },
  { tag: w.string, color: d.string },
  { tag: w.number, color: d.number },
  // Delimited identifiers — `[Measures]`, `[Order Quantity]`.
  { tag: w.variableName, color: d.member },
  // Key qualifiers — `&[Mountain-200]` — and the contextual `This`.
  { tag: w.atom, color: d.key },
  // Axis names and positional flags.
  { tag: w.typeName, color: d.constant },
  { tag: w.function(w.variableName), color: d.fn },
  { tag: w.propertyName, color: d.property }
]);
function ne() {
  return [te, ke(Ue)];
}
function G(e, t, r, n) {
  return [
    Le(),
    Ie(),
    Re(),
    pe(),
    _e(),
    Ne(),
    Oe(),
    F.allowMultipleSelections.of(!0),
    Se(),
    we.of("    "),
    xe(),
    de(),
    Be(),
    Fe(),
    De(),
    Te(),
    Pe.of([
      ...me,
      ...he,
      ...Me,
      ...ve,
      ...Ee,
      ...ge,
      ...$e,
      ye
    ]),
    // One language per editor. The theme is shared: every language package
    // emits the same token categories.
    e.support(),
    ne(),
    fe({ activateOnTyping: !0 }),
    // Whatever the consumer attaches — the playground supplies cube
    // metadata completion from the same cache its sidebar reads. Passed in
    // rather than imported, because that source needs a cube connection
    // and this package has no business knowing about one. CodeMirror
    // merges extra sources with the LSP's own rather than replacing it,
    // which is what keeps grammar keywords and metadata in one list.
    ...n,
    Ae(r, N(t), e.id)
  ];
}
async function re(e) {
  const t = e.extensions ?? [];
  let r = await U(e.language);
  const n = L.updateListener.of((c) => {
    e.onUpdate?.(c.view, c.docChanged);
  });
  let a = new L({
    parent: e.parent,
    state: F.create({
      doc: e.text,
      extensions: [
        ...G(e.language, e.uri, r, t),
        n
      ]
    })
  });
  return {
    get view() {
      return a;
    },
    async setDocument(c, p, i) {
      r = await U(c);
      const g = a.dom.parentElement;
      a.destroy(), a = new L({
        parent: g,
        state: F.create({
          doc: i,
          extensions: [
            ...G(c, p, r, t),
            n
          ]
        })
      });
    },
    destroy() {
      a.destroy();
    }
  };
}
const Ge = {
  key: 0,
  class: "editor-overlay"
}, We = {
  key: 1,
  class: "editor-overlay editor-overlay--error"
}, je = /* @__PURE__ */ R({
  __name: "Editor",
  props: {
    language: {},
    uri: {},
    text: {},
    extensions: {}
  },
  emits: ["ready", "error", "update", "textChanged"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = v(null), c = v("starting"), p = v("");
    let i;
    ce(async () => {
      if (a.value)
        try {
          i = await re({
            parent: a.value,
            language: r.language,
            uri: r.uri,
            text: r.text,
            extensions: r.extensions,
            onUpdate: (l, s) => {
              n("update", l), s && n("textChanged", l.state.doc.toString());
            }
          }), c.value = "ready", n("ready"), n("update", i.view), n("textChanged", i.view.state.doc.toString());
        } catch (l) {
          c.value = "failed", p.value = l instanceof Error ? l.message : String(l), n("error", p.value);
        }
    }), D(
      () => [r.uri, r.language],
      async ([l, s]) => {
        c.value !== "ready" || !i || (await i.setDocument(s, l, r.text), n("update", i.view), n("textChanged", i.view.state.doc.toString()));
      }
    ), Y(() => {
      i?.destroy(), i = void 0;
    });
    function g(l) {
      l.dataTransfer && (l.preventDefault(), l.dataTransfer.dropEffect = "copy");
    }
    function h(l) {
      const s = l.dataTransfer?.getData("text/plain"), k = i?.view;
      if (!s || !k) return;
      l.preventDefault();
      const o = k.posAtCoords({ x: l.clientX, y: l.clientY }) ?? k.state.selection.main.head;
      k.dispatch({
        changes: { from: o, insert: s },
        selection: { anchor: o + s.length }
      }), k.focus();
    }
    return (l, s) => (f(), m("div", {
      class: "editor-shell",
      onDragover: g,
      onDrop: h
    }, [
      _("div", {
        ref_key: "container",
        ref: a,
        class: "editor-host"
      }, null, 512),
      c.value === "starting" ? (f(), m("div", Ge, [...s[0] || (s[0] = [
        _("span", {
          class: "spinner",
          "aria-hidden": "true"
        }, null, -1),
        B(" Starting the MDX language server… ", -1)
      ])])) : c.value === "failed" ? (f(), m("div", We, [
        s[1] || (s[1] = _("strong", null, "The editor failed to start.", -1)),
        _("code", null, x(p.value), 1)
      ])) : $("", !0)
    ], 32));
  }
}), O = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, qe = /* @__PURE__ */ O(je, [["__scopeId", "data-v-b6d83ee1"]]), Xe = 3;
function Ye(e) {
  if (e.property)
    return e.index === void 0 ? e.property : `${e.property}[${e.index}]`;
}
function oe(e) {
  const t = Ye(e), r = e.kind === "node" ? t ? `${t}: ${e.label}` : e.label : t ?? e.label;
  return {
    id: e.id,
    label: r,
    detail: e.kind === "node" ? void 0 : e.value ?? e.label,
    kind: e.kind,
    range: e.range,
    children: e.children.map(oe)
  };
}
function ae(e, t) {
  return {
    id: t,
    label: e.name,
    detail: e.detail || void 0,
    kind: "symbol",
    range: {
      start: {
        line: e.range.start.line,
        character: e.range.start.character
      },
      end: {
        line: e.range.end.line,
        character: e.range.end.character
      }
    },
    children: (e.children ?? []).map(
      (r, n) => ae(r, `${t}.${n}`)
    )
  };
}
async function Qe(e) {
  const t = Z(e.language.value.id);
  return t ? (await t.request("textDocument/documentSymbol", {
    textDocument: { uri: N(e.uri.value) }
  }) ?? []).filter((n) => "range" in n).map((n, a) => ae(n, `symbol.${a}`)) : [];
}
function le(e, t) {
  for (const r of e) {
    const n = r.range ? ee(r.range, t) : !1;
    if (n || !r.range) {
      const a = le(r.children, t);
      if (n) return [r, ...a];
      if (a.length > 0) return [r, ...a];
    }
  }
  return [];
}
const H = Symbol(
  "olap-editor ast tree"
);
function ie(e) {
  const t = v("ast"), r = v([]), n = se(/* @__PURE__ */ new Set()), a = v(null), c = v(!1), p = C(() => e.ast.value?.parserErrors ?? 0), i = C(
    () => e.language.value.hasOutline === !0
  );
  let g = "", h = 0;
  function l(o, u = 0) {
    if (!(u >= Xe))
      for (const y of o)
        y.children.length !== 0 && (n.add(y.id), l(y.children, u + 1));
  }
  function s(o) {
    r.value = o;
    const u = `${e.uri.value} ${t.value}`;
    u !== g && (g = u, n.clear(), a.value = null, l(o));
  }
  async function k() {
    if (!e.uri.value) {
      r.value = [];
      return;
    }
    if (t.value === "ast") {
      s(e.ast.value?.root ? [oe(e.ast.value.root)] : []);
      return;
    }
    const o = ++h;
    c.value = !0;
    try {
      const u = await Qe(e);
      if (o !== h) return;
      s(u);
    } finally {
      o === h && (c.value = !1);
    }
  }
  return D(
    i,
    (o) => {
      !o && t.value === "outline" && (t.value = "ast");
    },
    { immediate: !0 }
  ), D([e.ast, t, e.uri], () => void k(), {
    immediate: !0
  }), D(e.cursorPosition, (o) => {
    if (!o || r.value.length === 0) return;
    const u = le(r.value, o);
    if (u.length !== 0) {
      for (const y of u.slice(0, -1)) n.add(y.id);
      a.value = u[u.length - 1].id;
    }
  }), {
    mode: t,
    outlineAvailable: i,
    rows: r,
    activeId: a,
    loading: e.astLoading,
    outlineLoading: c,
    stale: e.astStale,
    parserErrors: p,
    errorMessage: e.astError,
    setMode: (o) => {
      o === "outline" && !i.value || (t.value = o);
    },
    isExpanded: (o) => n.has(o.id),
    selectRow: (o) => {
      a.value = o.id, o.range && e.revealRange(o.range), o.children.length !== 0 && (n.has(o.id) ? n.delete(o.id) : n.add(o.id));
    }
  };
}
function Ze(e) {
  const t = ie(e ?? J());
  return q(H, t), t;
}
function V() {
  const e = X(H);
  if (!e)
    throw new Error(
      "No AST tree model provided. Call provideAstTree() in a parent component."
    );
  return e;
}
const Je = ["title"], et = {
  key: 1,
  class: "chevron-spacer"
}, tt = { class: "label" }, nt = {
  key: 2,
  class: "detail"
}, rt = /* @__PURE__ */ R({
  __name: "AstTreeNode",
  props: {
    node: {},
    depth: {}
  },
  setup(e) {
    const t = e, { isExpanded: r, selectRow: n, activeId: a } = V(), c = v(null), p = C(() => r(t.node)), i = C(() => a.value === t.node.id), g = C(() => `${t.depth * 14 + 6}px`);
    return D(i, (h) => {
      h && c.value?.scrollIntoView({ block: "nearest" });
    }), (h, l) => (f(), m("div", null, [
      _("button", {
        ref_key: "row",
        ref: c,
        type: "button",
        class: M(["row", [`row--${e.node.kind}`, { "row--active": i.value }]]),
        style: ue({ paddingLeft: g.value }),
        title: e.node.detail ? `${e.node.label} ${e.node.detail}` : e.node.label,
        onClick: l[0] || (l[0] = (s) => b(n)(e.node))
      }, [
        e.node.children.length > 0 ? (f(), m("svg", {
          key: 0,
          viewBox: "0 0 16 16",
          class: M(["chevron", { "chevron--open": p.value }]),
          "aria-hidden": "true"
        }, [...l[1] || (l[1] = [
          _("path", { d: "M6 4l4 4-4 4V4Z" }, null, -1)
        ])], 2)) : (f(), m("span", et)),
        _("span", tt, x(e.node.label), 1),
        e.node.detail ? (f(), m("span", nt, x(e.node.detail), 1)) : $("", !0)
      ], 14, Je),
      p.value ? (f(!0), m(T, { key: 0 }, I(e.node.children, (s) => (f(), Q(z, {
        key: s.id,
        node: s,
        depth: e.depth + 1
      }, null, 8, ["node", "depth"]))), 128)) : $("", !0)
    ]));
  }
}), z = /* @__PURE__ */ O(rt, [["__scopeId", "data-v-fb27fccb"]]), ot = {
  class: "panel",
  "aria-label": "Syntax tree"
}, at = { class: "panel-header" }, lt = {
  key: 0,
  class: "modes",
  role: "group",
  "aria-label": "Tree mode"
}, it = ["aria-pressed", "title", "onClick"], ct = { class: "panel-body" }, st = {
  key: 0,
  class: "empty empty--error"
}, ut = {
  key: 1,
  class: "empty"
}, dt = {
  key: 2,
  class: "empty"
}, ft = /* @__PURE__ */ R({
  __name: "AstTreePanel",
  props: {
    ready: { type: Boolean }
  },
  setup(e) {
    const {
      mode: t,
      outlineAvailable: r,
      rows: n,
      setMode: a,
      loading: c,
      stale: p,
      parserErrors: i,
      errorMessage: g
    } = V(), h = [
      { id: "ast", label: "AST", description: "The parse tree, node by node" },
      {
        id: "outline",
        label: "Outline",
        description: "Statements and declarations"
      }
    ], l = C(
      () => r.value ? h : h.filter((s) => s.id === "ast")
    );
    return (s, k) => (f(), m("aside", ot, [
      _("header", at, [
        k[0] || (k[0] = _("h2", null, "Syntax tree", -1)),
        l.value.length > 1 ? (f(), m("div", lt, [
          (f(!0), m(T, null, I(l.value, (o) => (f(), m("button", {
            key: o.id,
            type: "button",
            class: M(["mode", { "mode--active": o.id === b(t) }]),
            "aria-pressed": o.id === b(t),
            title: o.description,
            onClick: (u) => b(a)(o.id)
          }, x(o.label), 11, it))), 128))
        ])) : $("", !0)
      ]),
      b(p) || b(i) > 0 ? (f(), m("p", {
        key: 0,
        class: M(["status", { "status--errors": b(i) > 0 }])
      }, [
        b(p) ? (f(), m(T, { key: 0 }, [
          B("Rebuilding…")
        ], 64)) : (f(), m(T, { key: 1 }, [
          B(x(b(i)) + " parse " + x(b(i) === 1 ? "error" : "errors") + " — partial tree", 1)
        ], 64))
      ], 2)) : $("", !0),
      _("div", ct, [
        b(g) ? (f(), m("p", st, x(b(g)), 1)) : e.ready ? b(n).length === 0 ? (f(), m("p", dt, x(b(c) ? "Parsing…" : "Nothing parsed yet."), 1)) : $("", !0) : (f(), m("p", ut, "Waiting for the language server…")),
        (f(!0), m(T, null, I(b(n), (o) => (f(), Q(z, {
          key: o.id,
          node: o,
          depth: 0
        }, null, 8, ["node"]))), 128))
      ])
    ]));
  }
}), mt = /* @__PURE__ */ O(ft, [["__scopeId", "data-v-1e86e834"]]), gt = {
  key: 0,
  class: "placeholder"
}, pt = {
  key: 1,
  class: "placeholder"
}, ht = {
  key: 2,
  class: "list"
}, vt = { class: "position" }, yt = { class: "message" }, bt = /* @__PURE__ */ R({
  __name: "DiagnosticsPanel",
  props: {
    diagnostics: {},
    ready: { type: Boolean }
  },
  setup(e) {
    return (t, r) => e.ready ? e.diagnostics.length === 0 ? (f(), m("p", pt, " No problems detected. ")) : (f(), m("ul", ht, [
      (f(!0), m(T, null, I(e.diagnostics, (n, a) => (f(), m("li", {
        key: a,
        class: "row"
      }, [
        _("span", {
          class: M(["dot", `dot--${n.severity}`]),
          "aria-hidden": "true"
        }, null, 2),
        _("span", vt, x(n.line) + ":" + x(n.column), 1),
        _("span", yt, x(n.message), 1)
      ]))), 128))
    ])) : (f(), m("p", gt, "Waiting for the language server…"));
  }
}), kt = /* @__PURE__ */ O(bt, [["__scopeId", "data-v-5518d89f"]]);
function _t() {
  const e = v([]), t = j(null);
  function r(a) {
    const c = a ?? t.value;
    if (a && (t.value = a), !c) {
      e.value = [];
      return;
    }
    const p = [];
    Ce(c.state, (i, g) => {
      const h = c.state.doc.lineAt(g);
      p.push({
        severity: i.severity,
        message: i.message,
        line: h.number,
        column: g - h.from + 1
      });
    }), p.sort((i, g) => i.line - g.line || i.column - g.column), e.value = p;
  }
  function n() {
    t.value = null, e.value = [];
  }
  return Y(n), { diagnostics: e, refresh: r, clear: n };
}
const St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AST_TREE_MODEL: H,
  AstTreeNode: z,
  AstTreePanel: mt,
  DiagnosticsPanel: kt,
  EDITOR_SESSION: P,
  Editor: qe,
  createAstTreeModel: ie,
  createEditor: re,
  createEditorSession: ze,
  editorBaseTheme: te,
  editorTheme: ne,
  provideAstTree: Ze,
  provideEditorSession: Ke,
  rangeContains: ee,
  toFileUri: N,
  useAstTree: V,
  useDiagnostics: _t,
  useEditorSession: J
}, Symbol.toStringTag, { value: "Module" })), W = "org.eclipse.daanse.board.app.ui.vue.common.lsp", wt = "0.0.1-next.1";
async function Nt(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${W}: tsm runtime is not initialized`);
  t.register(W, St, wt, "ui.vue.common.lsp"), await void 0;
}
async function Ot(e) {
  await void 0;
}
export {
  H as AST_TREE_MODEL,
  z as AstTreeNode,
  mt as AstTreePanel,
  kt as DiagnosticsPanel,
  P as EDITOR_SESSION,
  qe as Editor,
  Nt as activate,
  ie as createAstTreeModel,
  re as createEditor,
  ze as createEditorSession,
  Ot as deactivate,
  te as editorBaseTheme,
  ne as editorTheme,
  Ze as provideAstTree,
  Ke as provideEditorSession,
  ee as rangeContains,
  N as toFileUri,
  V as useAstTree,
  _t as useDiagnostics,
  J as useEditorSession
};
