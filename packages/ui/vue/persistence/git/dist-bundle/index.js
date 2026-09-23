(function(){var i="ui.vue.persistence.git",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".save[data-v-b5d7b044]{display:flex;align-items:flex-end;gap:8px}.table[data-v-98dec67c]{min-height:100px}.flex-nowrap[data-v-98dec67c]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-end;gap:8px}.note[data-v-98dec67c]{margin:8px 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.note--bad[data-v-98dec67c]{color:var(--color-err)}.token__title[data-v-98dec67c]{margin:0;font-size:var(--text-lg);font-weight:600}\n";})();
import { REPOSITORY_REGISTRY as te } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { AuthentificationError as ae, type as oe } from "org.eclipse.daanse.board.app.lib.persistence.git";
import { isRef as Y, shallowRef as $, ref as b, watchEffect as ne, computed as z, defineComponent as q, onMounted as le, createBlock as F, openBlock as S, Teleport as B, createElementVNode as I, createVNode as p, unref as e, withCtx as h, createTextVNode as x, toDisplayString as k, watch as A, createElementBlock as L, Fragment as ie, createCommentVNode as se, normalizeClass as re } from "vue";
import { DInput as K, DButton as C, DIcon as O, DSelect as W, DTable as ce, DModal as ue } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTranslation as Z, usePromisifiedModal as de } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { component as me } from "@eclipse-daanse/tsm";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const pe = () => {
};
function ve(i, c, o) {
  var a;
  let r;
  Y(o) ? r = { evaluating: o } : r = o || {};
  const { lazy: u = !1, flush: s = "sync", evaluating: d = void 0, shallow: f = !0, onError: _ = (a = globalThis.reportError) !== null && a !== void 0 ? a : pe } = r, g = $(!u), y = f ? $(c) : b(c);
  let w = 0;
  return ne(async (m) => {
    if (!g.value) return;
    w++;
    const v = w;
    let G = !1;
    d && Promise.resolve().then(() => {
      d.value = !0;
    });
    try {
      const V = await i((N) => {
        m(() => {
          d && (d.value = !1), G || N();
        });
      });
      v === w && (y.value = V);
    } catch (V) {
      _(V);
    } finally {
      d && v === w && (d.value = !1), G = !0;
    }
  }, { flush: s }), u ? z(() => (g.value = !0, y.value)) : y;
}
const j = ve, fe = { class: "save" }, ge = /* @__PURE__ */ q({
  __name: "SaveInputGit",
  props: {
    repo: {}
  },
  emits: ["save", "override"],
  setup(i, { expose: c, emit: o }) {
    const a = o, r = i, { t: u } = Z("persistence"), s = b("newFile"), d = z(() => s.value == "");
    le(async () => {
      f.value = await r.repo.findAll();
    });
    const f = b(), _ = z(() => f.value == null ? !1 : f.value.find((m) => m.name == s.value) != null), g = () => {
      const m = new URL(r.repo.uri);
      m.pathname = s.value + ".json", a("save", {
        name: s.value,
        uri: m
      });
    }, y = () => {
      const m = f.value.find((v) => v.name == s.value);
      a("override", m);
    };
    return c({ setNameSuggestion: (m) => {
      s.value = m;
    } }), (m, v) => (S(), F(B, {
      defer: "",
      to: "#loadSaveModalFooter"
    }, [
      I("div", fe, [
        p(e(K), {
          modelValue: s.value,
          "onUpdate:modelValue": v[0] || (v[0] = (G) => s.value = G),
          label: e(u)("Git.name"),
          placeholder: e(u)("Git.fileName")
        }, null, 8, ["modelValue", "label", "placeholder"]),
        _.value ? (S(), F(e(C), {
          key: 0,
          intent: "danger",
          disabled: d.value,
          onClick: y
        }, {
          default: h(() => [
            p(e(O), {
              name: "save",
              size: "sm"
            }),
            x(k(e(u)("Git.overwrite")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : (S(), F(e(C), {
          key: 1,
          intent: "primary",
          disabled: d.value,
          onClick: g
        }, {
          default: h(() => [
            p(e(O), {
              name: "save",
              size: "sm"
            }),
            x(k(e(u)("Git.store")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]))
      ])
    ]));
  }
}), J = (i, c) => {
  const o = i.__vccOpts || i;
  for (const [a, r] of c)
    o[a] = r;
  return o;
}, ye = /* @__PURE__ */ J(ge, [["__scopeId", "data-v-b5d7b044"]]), be = { class: "flex-nowrap" }, he = { class: "token__title" }, _e = /* @__PURE__ */ q({
  __name: "GitRepositoryV",
  props: {
    repo: {},
    context: {}
  },
  emits: ["close"],
  setup(i, { emit: c }) {
    const o = i, { t: a } = Z("persistence"), r = c, u = z(() => [
      { key: "name", label: a("Git.columns.name") },
      { key: "date", label: a("Git.columns.date") },
      { key: "size", label: a("Git.columns.size") }
    ]), s = b([]), d = b("main"), f = b(""), _ = b(!1), g = b(void 0), y = b(void 0);
    A(() => o.repo, async (n) => {
      await v();
    }, { immediate: !0 }), A(d, async (n) => {
      const t = (await o.repo.getBranches()).find((l) => l.name == n);
      t && (o.repo.setBranch(t), o.repo.getCommits(), v());
    }), A(f, async (n) => {
      const t = (await o.repo.getCommits()).find((l) => l.creation_date == n);
      t && (o.repo.setCommit(t), v());
    });
    const w = j(async () => (await o.repo.getBranches()).map((n) => n.name)), m = j(async () => (await o.repo.getCommits()).map((n) => n.creation_date));
    async function v() {
      if (o.repo != null)
        try {
          _.value = !0, s.value = await o.repo.findAll();
        } catch {
          s.value = [];
        } finally {
          _.value = !1;
        }
      else s.value = [];
    }
    const G = async (n) => {
      if (!o.context?.state)
        return console.log("no context"), !1;
      n.data = o.context.state;
      try {
        await o.repo.update(n), T({ message: a("Git.stored") });
      } catch (t) {
        let l = await M(null);
        l ? (await o.repo.auth({ auth: l }), G(n)) : T({ title: a("Git.storeFailed"), message: String(t) });
      } finally {
      }
    }, V = async (n) => {
      if (!o.context?.state)
        return console.log("no context"), !1;
      n.data = o.context.state;
      try {
        await o.repo.create(n), T({ message: a("Git.stored") });
      } catch (t) {
        if (t instanceof ae) {
          let l = await M(null);
          l ? (await o.repo.auth({ auth: l }), await V(n)) : T({ title: a("Git.storeFailed"), message: String(t) });
        } else
          T({ title: a("Git.storeFailed"), message: String(t) }), console.log(n);
      } finally {
        await v();
      }
    }, N = () => g.value, D = b();
    let E;
    function T(n) {
      D.value = {
        text: n.title ? `${n.title}: ${n.message}` : n.message,
        bad: !!n.title
      }, E && clearTimeout(E), E = setTimeout(() => D.value = void 0, 4e3);
    }
    const { isOpened: R, run: M, close: U } = de(N), ee = async () => {
      const n = y.value;
      try {
        let t = await o.repo.getEntityByUri(n.uri);
        t && t.data && r("close", t?.data), T({ message: a("Git.loaded") });
      } catch (t) {
        console.log(t);
      }
    };
    return (n, t) => (S(), L(ie, null, [
      I("div", be, [
        (S(), F(B, {
          defer: "",
          to: "#loadSaveModalFooter"
        }, [
          p(e(W), {
            modelValue: d.value,
            "onUpdate:modelValue": t[0] || (t[0] = (l) => d.value = l),
            label: e(a)("Git.branch"),
            options: e(w) ?? [],
            size: "sm"
          }, null, 8, ["modelValue", "label", "options"]),
          p(e(W), {
            modelValue: f.value,
            "onUpdate:modelValue": t[1] || (t[1] = (l) => f.value = l),
            label: e(a)("Git.commit"),
            options: e(m) ?? [],
            size: "sm",
            clearable: ""
          }, null, 8, ["modelValue", "label", "options"])
        ])),
        p(ye, {
          repo: i.repo,
          onSave: V,
          onOverride: G
        }, null, 8, ["repo"]),
        (S(), F(B, {
          defer: "",
          to: "#loadSaveModalFooter"
        }, [
          p(e(C), {
            intent: "primary",
            disabled: !y.value,
            onClick: ee
          }, {
            default: h(() => [
              p(e(O), {
                name: "task",
                size: "sm"
              }),
              x(k(e(a)("Git.load")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]))
      ]),
      D.value ? (S(), L("p", {
        key: 0,
        class: re(["note", { "note--bad": D.value.bad }]),
        role: "status"
      }, k(D.value.text), 3)) : se("", !0),
      p(e(ce), {
        selected: y.value,
        "onUpdate:selected": t[2] || (t[2] = (l) => y.value = l),
        class: "table",
        items: s.value,
        columns: u.value,
        selectable: "",
        empty: _.value ? e(a)("Git.loading") : e(a)("Git.empty")
      }, null, 8, ["selected", "items", "columns", "empty"]),
      p(e(ue), {
        modelValue: e(R),
        "onUpdate:modelValue": t[6] || (t[6] = (l) => Y(R) ? R.value = l : null),
        size: "sm"
      }, {
        header: h(() => [
          I("h2", he, k(e(a)("Git.access")), 1)
        ]),
        actions: h(() => [
          p(e(C), {
            intent: "quiet",
            onClick: t[4] || (t[4] = () => {
              g.value = void 0, e(U)(null);
            })
          }, {
            default: h(() => [
              x(k(e(a)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          p(e(C), {
            intent: "primary",
            onClick: t[5] || (t[5] = () => e(U)(g.value))
          }, {
            default: h(() => [
              x(k(e(a)("Git.continue")), 1)
            ]),
            _: 1
          })
        ]),
        default: h(() => [
          p(e(K), {
            modelValue: g.value,
            "onUpdate:modelValue": t[3] || (t[3] = (l) => g.value = l),
            label: e(a)("Git.token"),
            type: "password",
            hint: e(a)("Git.tokenHint")
          }, null, 8, ["modelValue", "label", "hint"])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
}), we = /* @__PURE__ */ J(_e, [["__scopeId", "data-v-98dec67c"]]), Ge = { columns: { name: "Datei", date: "Datum", size: "Größe" }, loaded: "Datei geladen", stored: "Datei abgelegt", storeFailed: "Ablegen fehlgeschlagen", loading: "Wird geladen…", empty: "Keine Datei in diesem Stand", branch: "Branch", commit: "Stand", load: "Laden", access: "Zugang zum Repository", token: "Token", tokenHint: "Wird nur für diese Sitzung behalten.", continue: "Weiter", name: "Name", fileName: "Dateiname", overwrite: "Überschreiben", store: "Ablegen" }, ke = {
  Git: Ge
}, Se = { columns: { name: "File", date: "Date", size: "Size" }, loaded: "File loaded", stored: "File stored", storeFailed: "Storing failed", loading: "Loading…", empty: "No file in this commit", branch: "Branch", commit: "Commit", load: "Load", access: "Access to the repository", token: "Token", tokenHint: "Kept for this session only.", continue: "Continue", name: "Name", fileName: "File name", overwrite: "Overwrite", store: "Store" }, Ve = {
  Git: Se
};
var Te = Object.getOwnPropertyDescriptor, De = (i, c, o, a) => {
  for (var r = a > 1 ? void 0 : a ? Te(c, o) : c, u = i.length - 1, s; u >= 0; u--)
    (s = i[u]) && (r = s(r) || r);
  return r;
};
const Q = "persistence";
let P = class {
  constructor() {
    this.namespace = Q, this.resources = {
      de: ke,
      en: Ve
    };
  }
};
P = De([
  me({
    service: ["Translations"],
    properties: { "i18n.namespace": Q }
  })
], P);
function X({ services: i }) {
  i.getRequired(te).registerViewForRepoType(oe, we);
}
const Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PersistenceTranslations() {
    return P;
  },
  activate: X
}, Symbol.toStringTag, { value: "Module" })), H = "org.eclipse.daanse.board.app.ui.vue.persistence.git", xe = "0.0.1-next.1";
async function Be(i) {
  const c = globalThis.__tsm__;
  if (!c)
    throw new Error(`${H}: tsm runtime is not initialized`);
  c.register(H, Fe, xe, "ui.vue.persistence.git"), await X?.(i);
}
async function Ie(i) {
  await void 0;
}
export {
  P as PersistenceTranslations,
  Be as activate,
  Ie as deactivate
};
