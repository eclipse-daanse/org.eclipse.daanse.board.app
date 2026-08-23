import { PAGE_CONTEXT as u } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { useRoute as g } from "vue-router";
const { serviceId: d } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class o {
  constructor() {
    this.currentPageId = void 0;
  }
  getCurrentPageId() {
    try {
      const e = g();
      if (e && e.params && e.params.pageid)
        return this.currentPageId = e.params.pageid, this.currentPageId;
    } catch {
    }
    try {
      const a = window.location.pathname.match(/\/page\/([^\/]+)/);
      if (a && a[1])
        return this.currentPageId = a[1], this.currentPageId;
    } catch {
    }
    return this.currentPageId;
  }
  setCurrentPageId(e) {
    this.currentPageId = e;
  }
}
const r = d("VuePageProvider"), p = Symbol.for(r), i = new o();
function c({ services: t }) {
  t.register(r, i), t.getRequired(u).setProvider(i);
}
function s({ services: t }) {
  t.unregister(r);
}
const P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VUE_PAGE_PROVIDER: r,
  VuePageProvider: o,
  activate: c,
  deactivate: s,
  identifier: p,
  vuePageProvider: i
}, Symbol.toStringTag, { value: "Module" })), n = "org.eclipse.daanse.board.app.ui.vue.page_provider", _ = "0.0.1-next.1";
async function h(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${n}: tsm runtime is not initialized`);
  e.register(n, P, _, "ui.vue.page_provider"), await c?.(t);
}
async function l(t) {
  await s?.(t);
}
export {
  r as VUE_PAGE_PROVIDER,
  o as VuePageProvider,
  h as activate,
  l as deactivate,
  p as identifier,
  i as vuePageProvider
};
