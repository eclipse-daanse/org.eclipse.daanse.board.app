import { LAYOUT_REPOSITORY as e, identifier as s } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { LAYOUT_REPOSITORY as d, identifier as p } from "org.eclipse.daanse.board.app.lib.api.layout.page";
class n {
  constructor() {
    this.availableLayouts = /* @__PURE__ */ new Map();
  }
  addLayout(t) {
    this.availableLayouts.set(t.id, t);
  }
  removeLayout(t) {
    return this.availableLayouts.delete(t);
  }
  getLayout(t) {
    return this.availableLayouts.get(t);
  }
  getAllLayouts() {
    return Array.from(this.availableLayouts.values());
  }
  hasLayout(t) {
    return this.availableLayouts.has(t);
  }
}
function o({ services: a }) {
  a.register(
    e,
    new n()
  );
}
function r({ services: a }) {
  a.unregister(e);
}
const l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LAYOUT_REPOSITORY: e,
  activate: o,
  deactivate: r,
  identifier: s
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.repository.layout.page", u = "0.0.1-next.1";
async function y(a) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, l, u, "lib.repository.layout.page"), await o?.(a);
}
async function v(a) {
  await r?.(a);
}
export {
  d as LAYOUT_REPOSITORY,
  y as activate,
  v as deactivate,
  p as identifier
};
