import { identifier as E } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as w, computed as D, inject as m, onMounted as _, onUnmounted as O, watch as S, onBeforeUnmount as x } from "vue";
import { identifier as T } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as I } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { VariableWrapper as V, VARIABLEWRAPPER as B } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as K, VariableWrapper as Q } from "org.eclipse.daanse.board.app.lib.variables";
const y = w(0);
function L() {
  return {
    isLoading: D(() => y.value > 0),
    activeLoadingCount: y,
    startLoading: () => {
      y.value++;
    },
    stopLoading: () => {
      y.value > 0 && y.value--;
    }
  };
}
function N(r, t, a, c = [], l) {
  const i = m(E);
  if (!i)
    throw new Error("DatasourceRepository not provided");
  const { startLoading: f, stopLoading: n } = L(), u = async () => {
    if (!r.value) {
      a.value = null;
      return;
    }
    console.log("getData", r.value), console.log("type", t), f();
    try {
      const o = await i.getDatasource(r.value).getData(t, l?.value || {});
      t === "PivotTable" ? a.value = JSON.parse(JSON.stringify(o)) : a.value = structuredClone(o);
    } catch (e) {
      a.value = null, console.warn(e);
    } finally {
      n();
    }
  }, b = async (e, o, s = !0) => {
    if (r.value)
      try {
        const v = i.getDatasource(
          r.value
        ), R = v.callEvent(e, o, s);
        if (!s && R instanceof Promise) {
          await R;
          const W = await v.getData(t);
          a.value = structuredClone(W);
        }
      } catch (v) {
        console.warn(v);
      }
  }, p = async (e) => {
    if (!r.value) {
      a.value = null;
      return;
    }
    console.log("getDataWithOptions", r.value, e), console.log("type", t), f();
    try {
      const s = await i.getDatasource(r.value).getData(t, e);
      a.value = structuredClone(s);
    } catch (o) {
      a.value = null, console.warn(o);
    } finally {
      n();
    }
  }, g = (e, o) => {
    try {
      u();
    } catch (s) {
      console.warn(s);
    }
    if (!(!e || !o || e === o)) {
      try {
        const s = i.getDatasource(o);
        s.unsubscribe(u), c.forEach((v) => {
          s.unsubscribe(v);
        });
      } catch (s) {
        console.warn(s);
      }
      try {
        const s = i.getDatasource(e);
        s.subscribe(() => u()), c.forEach((v) => {
          s.subscribe(v);
        });
      } catch (s) {
        console.warn(s);
      }
    }
  }, d = () => {
    try {
      return i.getDatasource(r.value);
    } catch (e) {
      return console.warn(e), null;
    }
  };
  return _(() => {
    u();
    try {
      const e = i.getDatasource(r.value);
      e.subscribe(u), c.forEach((o) => {
        e.subscribe(o);
      });
    } catch (e) {
      console.warn(e);
    }
  }), O(() => {
    try {
      const e = i.getDatasource(r.value);
      e.unsubscribe(u), c.forEach((o) => {
        e.unsubscribe(o);
      });
    } catch (e) {
      console.warn(e);
    }
  }), {
    data: a,
    callEvent: b,
    update: g,
    getDataWithOptions: p,
    getDatasourceInstance: d
  };
}
function M(r, t, a) {
  const c = m(E);
  if (!c)
    throw new Error("DatasourceRepository not provided");
  const l = c.getDatasourceIdentifiers(r);
  console.log("Identifiers for datasource type", r, l), _(async () => {
    console.log(
      "Creating temporary store for type",
      r,
      "with settings",
      t.value
    );
    const f = c.resolveIdentifier(l.Store);
    a.value = f({ ...t.value.config, _isTemporaryPreview: !0 });
  });
  const i = async () => {
    a.value?.destroy(), a.value = null;
    const n = c.resolveIdentifier(l.Store)({ ...t.value.config, _isTemporaryPreview: !0 });
    return n.initPromise ? (await n.initPromise, a.value = n, n) : (a.value = n, n);
  };
  return S(
    () => t,
    async () => {
    },
    { deep: !0 }
  ), x(() => {
    console.log("Destroying temporary store"), a.value?.destroy();
  }), {
    update: i
  };
}
function $(r, t = () => {
}) {
  const a = w(!1);
  let c = (n) => {
  }, l = new Promise((n) => {
    c = n;
  });
  return { isOpened: a, run: (n) => (a.value = !0, t(n), l), close: (n) => {
    c(n), l = new Promise((u) => {
      c = u;
    }), a.value = !1, r();
  } };
}
function h() {
  const r = w(Date.now()), t = [], a = m(T);
  if (!a)
    throw new Error("VariableRepository not provided");
  let c = null;
  try {
    c = m(I);
  } catch {
    console.warn("PageContextService not available for variable resolution");
  }
  const l = () => {
    r.value = Date.now();
  }, i = (n, u = () => {
  }) => {
    const b = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const e of t)
      e.unsubscribe(l), e.unsubscribe(u);
    t.length = 0;
    const g = [...n.matchAll(b)].map((e) => e[1]);
    let d = n;
    for (const e of g)
      try {
        let o;
        try {
          const s = c?.getCurrentPageId();
          o = a.getVariableWithContext ? a.getVariableWithContext(e, s) : a.getVariable(e);
        } catch (s) {
          console.error(s);
        }
        if (o) {
          o.subscribe(l), o.subscribe(u), t.push(o);
          const s = o.value, v = new RegExp(
            `\\{\\s*${e}\\s*\\}`,
            "g"
          );
          d = d.replace(v, String(s));
        }
      } catch (o) {
        console.warn(`Error resolving variable ${e}:`, o);
      }
    return d;
  };
  return {
    calculateValue: i,
    wrapParameters: (n) => {
      const u = {};
      for (const [b, p] of Object.entries(n))
        try {
          const g = D(() => (r.value, p && i(p.value + "")));
          u[b] = g;
        } catch (g) {
          console.log(g);
        }
      return u;
    }
  };
}
const A = "VARIABLECOMPLEXSTRINGWRAPPER";
class C {
  type = A;
  _value = void 0;
  _computedValue = null;
  constructor(t = "") {
    this._value = t;
  }
  get original() {
    return this._value || "";
  }
  updateFn() {
    const { calculateValue: t } = h();
    this._computedValue = t(this._value || "");
  }
  get value() {
    const { calculateValue: t } = h();
    return this._computedValue = t(this._value || "", this.updateFn.bind(this)), this._computedValue;
  }
  set value(t) {
    this._value = t;
  }
}
const j = {
  VariableWrapper: V,
  VariableComplexStringWrapper: C
}, F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLECOMPLEXSTRINGWRAPPER: A,
  VARIABLEWRAPPER: B,
  VariableComplexStringWrapper: C,
  VariableWrapper: V,
  WrapperTypes: j,
  useDatasourceRepository: N,
  useGlobalLoading: L,
  usePromisifiedModal: $,
  useTemporaryStore: M,
  useVariableRepository: h
}, Symbol.toStringTag, { value: "Module" })), P = "org.eclipse.daanse.board.app.ui.vue.composables", G = "0.0.1-next.1";
async function U(r) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${P}: tsm runtime is not initialized`);
  t.register(P, F, G, "ui.vue.composables"), await void 0;
}
async function Z(r) {
  await void 0;
}
export {
  A as VARIABLECOMPLEXSTRINGWRAPPER,
  K as VARIABLEWRAPPER,
  C as VariableComplexStringWrapper,
  Q as VariableWrapper,
  j as WrapperTypes,
  U as activate,
  Z as deactivate,
  N as useDatasourceRepository,
  L as useGlobalLoading,
  $ as usePromisifiedModal,
  M as useTemporaryStore,
  h as useVariableRepository
};
