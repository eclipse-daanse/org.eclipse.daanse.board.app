import { PAGE_CONTEXT as i, identifier as o } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { PAGE_CONTEXT as _, identifier as f } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
class c {
  setProvider(t) {
    this.provider = t;
  }
  getCurrentPageId() {
    return this.provider?.getCurrentPageId();
  }
}
function n({ services: e }) {
  e.register(i, new c());
}
function a({ services: e }) {
  e.unregister(i);
}
const s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_CONTEXT: i,
  activate: n,
  deactivate: a,
  identifier: o
}, Symbol.toStringTag, { value: "Module" })), r = "org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service", g = "0.0.1-next.1";
async function p(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${r}: tsm runtime is not initialized`);
  t.register(r, s, g, "lib.pagecontext.pagecontext_service"), await n?.(e);
}
async function l(e) {
  await a?.(e);
}
export {
  _ as PAGE_CONTEXT,
  p as activate,
  l as deactivate,
  f as identifier
};
