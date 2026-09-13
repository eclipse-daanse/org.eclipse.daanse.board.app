(function(){var i="ui.vue.persistence.git",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".save[data-v-316e302b]{display:flex;align-items:flex-end;gap:8px}.table[data-v-5ea0d212]{min-height:100px}.flex-nowrap[data-v-5ea0d212]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-end;gap:8px}.note[data-v-5ea0d212]{margin:8px 0;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-dim)}.note--bad[data-v-5ea0d212]{color:var(--color-err)}.token__title[data-v-5ea0d212]{margin:0;font-size:var(--text-lg);font-weight:600}\n";})();
import { REPOSITORY_REGISTRY as H } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { AuthentificationError as J, type as Q } from "org.eclipse.daanse.board.app.lib.persistence.git";
import { isRef as P, shallowRef as M, ref as m, watchEffect as X, computed as B, defineComponent as j, onMounted as ee, createBlock as T, openBlock as V, Teleport as I, createElementVNode as F, createVNode as d, unref as n, withCtx as b, createTextVNode as C, watch as E, createElementBlock as $, Fragment as te, createCommentVNode as ae, normalizeClass as oe, toDisplayString as ne } from "vue";
import { DInput as Y, DButton as R, DIcon as N, DSelect as O, DTable as le, DModal as se } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { usePromisifiedModal as ie } from "org.eclipse.daanse.board.app.ui.vue.composables";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const re = () => {
};
function ue(i, c, t) {
  var p;
  let v;
  P(t) ? v = { evaluating: t } : v = t || {};
  const { lazy: l = !1, flush: y = "sync", evaluating: r = void 0, shallow: w = !0, onError: f = (p = globalThis.reportError) !== null && p !== void 0 ? p : re } = v, g = M(!l), h = w ? M(c) : m(c);
  let s = 0;
  return X(async (u) => {
    if (!g.value) return;
    s++;
    const S = s;
    let _ = !1;
    r && Promise.resolve().then(() => {
      r.value = !0;
    });
    try {
      const D = await i((k) => {
        u(() => {
          r && (r.value = !1), _ || k();
        });
      });
      S === s && (h.value = D);
    } catch (D) {
      f(D);
    } finally {
      r && S === s && (r.value = !1), _ = !0;
    }
  }, { flush: y }), l ? B(() => (g.value = !0, h.value)) : h;
}
const W = ue, de = { class: "save" }, ce = /* @__PURE__ */ j({
  __name: "SaveInputGit",
  props: {
    repo: {}
  },
  emits: ["save", "override"],
  setup(i, { expose: c, emit: t }) {
    const p = t, v = i, l = m("newFile"), y = B(() => l.value == "");
    ee(async () => {
      r.value = await v.repo.findAll();
    });
    const r = m(), w = B(() => r.value == null ? !1 : r.value.find((s) => s.name == l.value) != null), f = () => {
      const s = new URL(v.repo.uri);
      s.pathname = l.value + ".json", p("save", {
        name: l.value,
        uri: s
      });
    }, g = () => {
      const s = r.value.find((u) => u.name == l.value);
      p("override", s);
    };
    return c({ setNameSuggestion: (s) => {
      l.value = s;
    } }), (s, u) => (V(), T(I, {
      defer: "",
      to: "#loadSaveModalFooter"
    }, [
      F("div", de, [
        d(n(Y), {
          modelValue: l.value,
          "onUpdate:modelValue": u[0] || (u[0] = (S) => l.value = S),
          label: "Name",
          placeholder: "Dateiname"
        }, null, 8, ["modelValue"]),
        w.value ? (V(), T(n(R), {
          key: 0,
          intent: "danger",
          disabled: y.value,
          onClick: g
        }, {
          default: b(() => [
            d(n(N), {
              name: "save",
              size: "sm"
            }),
            u[1] || (u[1] = C("Überschreiben ", -1))
          ]),
          _: 1
        }, 8, ["disabled"])) : (V(), T(n(R), {
          key: 1,
          intent: "primary",
          disabled: y.value,
          onClick: f
        }, {
          default: b(() => [
            d(n(N), {
              name: "save",
              size: "sm"
            }),
            u[2] || (u[2] = C("Ablegen ", -1))
          ]),
          _: 1
        }, 8, ["disabled"]))
      ])
    ]));
  }
}), q = (i, c) => {
  const t = i.__vccOpts || i;
  for (const [p, v] of c)
    t[p] = v;
  return t;
}, me = /* @__PURE__ */ q(ce, [["__scopeId", "data-v-316e302b"]]), pe = { class: "flex-nowrap" }, ve = /* @__PURE__ */ j({
  __name: "GitRepositoryV",
  props: {
    repo: {},
    context: {}
  },
  emits: ["close"],
  setup(i, { emit: c }) {
    const t = i, p = c, v = m([
      { key: "name", label: "Datei" },
      { key: "date", label: "Datum" },
      { key: "size", label: "Größe" }
    ]), l = m([]), y = m("main"), r = m(""), w = m(!1), f = m(void 0), g = m(void 0);
    E(() => t.repo, async (a) => {
      await u();
    }, { immediate: !0 }), E(y, async (a) => {
      const e = (await t.repo.getBranches()).find((o) => o.name == a);
      e && (t.repo.setBranch(e), t.repo.getCommits(), u());
    }), E(r, async (a) => {
      const e = (await t.repo.getCommits()).find((o) => o.creation_date == a);
      e && (t.repo.setCommit(e), u());
    });
    const h = W(async () => (await t.repo.getBranches()).map((a) => a.name)), s = W(async () => (await t.repo.getCommits()).map((a) => a.creation_date));
    async function u() {
      if (t.repo != null)
        try {
          w.value = !0, l.value = await t.repo.findAll();
        } catch {
          l.value = [];
        } finally {
          w.value = !1;
        }
      else l.value = [];
    }
    const S = async (a) => {
      if (!t.context?.state)
        return console.log("no context"), !1;
      a.data = t.context.state;
      try {
        await t.repo.update(a), x({ message: "Datei abgelegt" });
      } catch (e) {
        let o = await G(null);
        o ? (await t.repo.auth({ auth: o }), S(a)) : x({ title: "Ablegen fehlgeschlagen", message: String(e) });
      } finally {
      }
    }, _ = async (a) => {
      if (!t.context?.state)
        return console.log("no context"), !1;
      a.data = t.context.state;
      try {
        await t.repo.create(a), x({ message: "Datei abgelegt" });
      } catch (e) {
        if (e instanceof J) {
          let o = await G(null);
          o ? (await t.repo.auth({ auth: o }), await _(a)) : x({ title: "Ablegen fehlgeschlagen", message: String(e) });
        } else
          x({ title: "Ablegen fehlgeschlagen", message: String(e) }), console.log(a);
      } finally {
        await u();
      }
    }, D = () => f.value, k = m();
    let z;
    function x(a) {
      k.value = {
        text: a.title ? `${a.title}: ${a.message}` : a.message,
        bad: !!a.title
      }, z && clearTimeout(z), z = setTimeout(() => k.value = void 0, 4e3);
    }
    const { isOpened: A, run: G, close: U } = ie(D), Z = async () => {
      const a = g.value;
      try {
        let e = await t.repo.getEntityByUri(a.uri);
        e && e.data && p("close", e?.data), x({ message: "Datei geladen" });
      } catch (e) {
        console.log(e);
      }
    };
    return (a, e) => (V(), $(te, null, [
      F("div", pe, [
        (V(), T(I, {
          defer: "",
          to: "#loadSaveModalFooter"
        }, [
          d(n(O), {
            modelValue: y.value,
            "onUpdate:modelValue": e[0] || (e[0] = (o) => y.value = o),
            label: "Branch",
            options: n(h) ?? [],
            size: "sm"
          }, null, 8, ["modelValue", "options"]),
          d(n(O), {
            modelValue: r.value,
            "onUpdate:modelValue": e[1] || (e[1] = (o) => r.value = o),
            label: "Stand",
            options: n(s) ?? [],
            size: "sm",
            clearable: ""
          }, null, 8, ["modelValue", "options"])
        ])),
        d(me, {
          repo: i.repo,
          onSave: _,
          onOverride: S
        }, null, 8, ["repo"]),
        (V(), T(I, {
          defer: "",
          to: "#loadSaveModalFooter"
        }, [
          d(n(R), {
            intent: "primary",
            disabled: !g.value,
            onClick: Z
          }, {
            default: b(() => [
              d(n(N), {
                name: "task",
                size: "sm"
              }),
              e[7] || (e[7] = C("Laden ", -1))
            ]),
            _: 1
          }, 8, ["disabled"])
        ]))
      ]),
      k.value ? (V(), $("p", {
        key: 0,
        class: oe(["note", { "note--bad": k.value.bad }]),
        role: "status"
      }, ne(k.value.text), 3)) : ae("", !0),
      d(n(le), {
        selected: g.value,
        "onUpdate:selected": e[2] || (e[2] = (o) => g.value = o),
        class: "table",
        items: l.value,
        columns: v.value,
        selectable: "",
        empty: w.value ? "Wird geladen…" : "Keine Datei in diesem Stand"
      }, null, 8, ["selected", "items", "columns", "empty"]),
      d(n(se), {
        modelValue: n(A),
        "onUpdate:modelValue": e[6] || (e[6] = (o) => P(A) ? A.value = o : null),
        size: "sm"
      }, {
        header: b(() => [...e[8] || (e[8] = [
          F("h2", { class: "token__title" }, "Zugang zum Repository", -1)
        ])]),
        actions: b(() => [
          d(n(R), {
            intent: "quiet",
            onClick: e[4] || (e[4] = () => {
              f.value = void 0, n(U)(null);
            })
          }, {
            default: b(() => [...e[9] || (e[9] = [
              C("Abbrechen", -1)
            ])]),
            _: 1
          }),
          d(n(R), {
            intent: "primary",
            onClick: e[5] || (e[5] = () => n(U)(f.value))
          }, {
            default: b(() => [...e[10] || (e[10] = [
              C("Weiter", -1)
            ])]),
            _: 1
          })
        ]),
        default: b(() => [
          d(n(Y), {
            modelValue: f.value,
            "onUpdate:modelValue": e[3] || (e[3] = (o) => f.value = o),
            label: "Token",
            type: "password",
            hint: "Wird nur für diese Sitzung behalten."
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
}), fe = /* @__PURE__ */ q(ve, [["__scopeId", "data-v-5ea0d212"]]);
function K({ services: i }) {
  i.getRequired(H).registerViewForRepoType(Q, fe);
}
const ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: K
}, Symbol.toStringTag, { value: "Module" })), L = "org.eclipse.daanse.board.app.ui.vue.persistence.git", ye = "0.0.1-next.1";
async function he(i) {
  const c = globalThis.__tsm__;
  if (!c)
    throw new Error(`${L}: tsm runtime is not initialized`);
  c.register(L, ge, ye, "ui.vue.persistence.git"), await K?.(i);
}
async function xe(i) {
  await void 0;
}
export {
  he as activate,
  xe as deactivate
};
