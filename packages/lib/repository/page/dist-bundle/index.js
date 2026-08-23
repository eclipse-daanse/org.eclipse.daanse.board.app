import { SubscribeNotifyImpl as o } from "org.eclipse.daanse.board.app.lib.utils.subscriber";
import { PAGE_REPOSITORY as s, identifier as l } from "org.eclipse.daanse.board.app.lib.api.page";
import { PAGE_REPOSITORY as A, identifier as R } from "org.eclipse.daanse.board.app.lib.api.page";
const i = {
  PAGE_REGISTRATION: "PAGE_REGISTRATION",
  PAGE_UPDATE: "PAGE_UPDATE",
  PAGE_UNREGISTRATION: "PAGE_UNREGISTRATION"
};
class u extends o {
  constructor() {
    super(...arguments), this.pages = {}, this.defaultPageId = null;
  }
  registerPage(e) {
    this.pages[e.id] = e, this.defaultPageId === null && (this.defaultPageId = e.id), this.notify(i.PAGE_REGISTRATION);
  }
  getPage(e) {
    return this.pages[e];
  }
  getDefaultPage() {
    return this.defaultPageId && this.pages[this.defaultPageId] ? this.pages[this.defaultPageId] : null;
  }
  setDefaultPage(e) {
    this.pages[e] && (this.defaultPageId = e);
  }
  unregisterPage(e) {
    if (delete this.pages[e], this.defaultPageId === e) {
      const a = Object.keys(this.pages);
      this.defaultPageId = a.length > 0 ? a[0] : null;
    }
    this.notify(i.PAGE_UNREGISTRATION);
  }
  getAllPageIds() {
    return Object.keys(this.pages);
  }
  updatePage(e) {
    this.pages[e.id] = e, this.notify(i.PAGE_UPDATE);
  }
}
function n({ services: t }) {
  t.register(s, new u());
}
function g({ services: t }) {
  t.unregister(s);
}
const d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_REPOSITORY: s,
  activate: n,
  deactivate: g,
  events: i,
  identifier: l
}, Symbol.toStringTag, { value: "Module" })), r = "org.eclipse.daanse.board.app.lib.repository.page", P = "0.0.1-next.1";
async function c(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${r}: tsm runtime is not initialized`);
  e.register(r, d, P, "lib.repository.page"), await n?.(t);
}
async function h(t) {
  await g?.(t);
}
export {
  A as PAGE_REPOSITORY,
  c as activate,
  h as deactivate,
  i as events,
  R as identifier
};
