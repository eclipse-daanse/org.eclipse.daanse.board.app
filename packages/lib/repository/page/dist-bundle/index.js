import { WORKSPACE as d, PageImpl as u } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { PAGE_REPOSITORY as r, identifier as l } from "org.eclipse.daanse.board.app.lib.api.page";
import { PAGE_REPOSITORY as v, identifier as y } from "org.eclipse.daanse.board.app.lib.api.page";
class f {
  constructor(e) {
    this.resolver = e;
  }
  get workspace() {
    return this.workspaceHeld || (this.workspaceHeld = this.resolver.getRequired(d)), this.workspaceHeld;
  }
  getPages() {
    return this.workspace.pages.toArray();
  }
  /** Built on read, so it cannot drift from what the workspace holds. */
  get pages() {
    const e = {};
    for (const i of this.getPages()) e[i.id] = i;
    return e;
  }
  get defaultPageId() {
    return this.workspace.defaultPage?.id ?? null;
  }
  registerPage(e) {
    const i = this.getPage(e.id), t = i ?? new u();
    return t.id = e.id, t.name = e.name, t.description = e.description, t.icon = e.icon, t.visibleInNavigation = e.visibleInNavigation ?? !0, t.layoutId = e.layoutId, t.layoutSettings = e.layoutSettings, t.backgroundColor = e.backgroundColor, t.backgroundImage = e.backgroundImage, t.backgroundSize = e.backgroundSize, t.backgroundPosition = e.backgroundPosition, t.backgroundRepeat = e.backgroundRepeat, i || this.workspace.pages.push(t), this.workspace.defaultPage || (this.workspace.defaultPage = t), t;
  }
  getPage(e) {
    return this.getPages().find((i) => i.id === e);
  }
  getDefaultPage() {
    return this.workspace.defaultPage ?? null;
  }
  setDefaultPage(e) {
    const i = this.getPage(e);
    i && (this.workspace.defaultPage = i);
  }
  unregisterPage(e) {
    const i = this.workspace.pages, t = i.toArray().findIndex((c) => c.id === e);
    if (t < 0) return;
    const g = i.get(t);
    i.removeAt(t), this.workspace.defaultPage === g && (this.workspace.defaultPage = i.size() > 0 ? i.get(0) : void 0);
  }
  getAllPageIds() {
    return this.getPages().map((e) => e.id);
  }
  updatePage(e) {
    this.registerPage(e);
  }
}
function s({ services: a }) {
  a.register(r, new f(a));
}
function n({ services: a }) {
  a.unregister(r);
}
const P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_REPOSITORY: r,
  activate: s,
  deactivate: n,
  identifier: l
}, Symbol.toStringTag, { value: "Module" })), o = "org.eclipse.daanse.board.app.lib.repository.page", p = "0.0.1-next.1";
async function b(a) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${o}: tsm runtime is not initialized`);
  e.register(o, P, p, "lib.repository.page"), await s?.(a);
}
async function w(a) {
  await n?.(a);
}
export {
  v as PAGE_REPOSITORY,
  b as activate,
  w as deactivate,
  y as identifier
};
