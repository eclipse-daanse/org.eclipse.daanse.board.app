import { DATASOURCE_REPOSITORY as h } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { WORKSPACE as P, PageImpl as y, WidgetImpl as u, LayoutItemImpl as c } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { PAGE_REPOSITORY as d, identifier as w } from "org.eclipse.daanse.board.app.lib.api.page";
import { PAGE_REPOSITORY as O, identifier as z } from "org.eclipse.daanse.board.app.lib.api.page";
class m {
  constructor(t) {
    this.resolver = t;
  }
  get workspace() {
    return this.workspaceHeld || (this.workspaceHeld = this.resolver.getRequired(P)), this.workspaceHeld;
  }
  getPages() {
    return this.workspace.pages.toArray();
  }
  /** Built on read, so it cannot drift from what the workspace holds. */
  get pages() {
    const t = {};
    for (const i of this.getPages()) t[i.id] = i;
    return t;
  }
  get defaultPageId() {
    return this.workspace.defaultPage?.id ?? null;
  }
  registerPage(t) {
    const i = this.getPage(t.id), e = i ?? new y();
    return e.id = t.id, e.name = t.name, e.description = t.description, e.icon = t.icon, e.visibleInNavigation = t.visibleInNavigation ?? !0, e.layoutId = t.layoutId, e.layoutSettings = t.layoutSettings, e.backgroundColor = t.backgroundColor, e.backgroundImage = t.backgroundImage, e.backgroundSize = t.backgroundSize, e.backgroundPosition = t.backgroundPosition, e.backgroundRepeat = t.backgroundRepeat, i || this.workspace.pages.push(e), this.workspace.defaultPage || (this.workspace.defaultPage = e), e;
  }
  getPage(t) {
    return this.getPages().find((i) => i.id === t);
  }
  getDefaultPage() {
    return this.workspace.defaultPage ?? null;
  }
  setDefaultPage(t) {
    const i = this.getPage(t);
    i && (this.workspace.defaultPage = i);
  }
  unregisterPage(t) {
    const i = this.workspace.pages, e = i.toArray().findIndex((r) => r.id === t);
    if (e < 0) return;
    const a = i.get(e);
    i.removeAt(e), this.workspace.defaultPage === a && (this.workspace.defaultPage = i.size() > 0 ? i.get(0) : void 0);
  }
  getAllPageIds() {
    return this.getPages().map((t) => t.id);
  }
  updatePage(t) {
    this.registerPage(t);
  }
  // ----------------------------------------------------- what is on a board
  get datasources() {
    return this.resolver.getRequired(h);
  }
  /**
   * Writes a widget's plain values onto the modelled one.
   *
   * The source is held as a reference and the id kept in the settings, in
   * that order - one direction, because the reference is the truth and the
   * id is what a widget's own settings read.
   */
  applyWidget(t, i) {
    t.uid = i.uid, t.type = i.type, t.wrapperConfig = i.wrapperConfig ?? {};
    const e = i.config ?? {}, a = e.datasourceId;
    t.datasource = a ? this.datasources.getDatasourceModel(a) : void 0, e.datasourceId = t.datasource?.uid ?? a, t.config = e;
  }
  addWidget(t, i, e = {}) {
    const a = this.getPage(t);
    if (!a) return;
    const r = new u();
    this.applyWidget(r, i), a.widgets.push(r);
    const o = new c();
    return o.id = i.uid, o.width = e.width ?? 300, o.height = e.height ?? 150, o.x = e.x ?? 0, o.y = e.y ?? 0, o.z = e.z ?? Math.max(0, ...a.layout.toArray().map((n) => n.z ?? 0)) + 1, o.group = e.group, a.layout.push(o), r;
  }
  saveWidget(t, i) {
    const a = this.getPage(t)?.widgets.toArray().find((r) => r.uid === i.uid);
    a && this.applyWidget(a, i);
  }
  removeWidget(t, i) {
    const e = this.getPage(t);
    if (!e) return;
    const a = e.widgets, r = a.toArray().findIndex((g) => g.uid === i);
    r > -1 && a.removeAt(r);
    const o = e.layout, n = o.toArray().findIndex((g) => g.id === i);
    n > -1 && o.removeAt(n);
  }
  setBoard(t, i, e) {
    const a = this.getPage(t);
    if (a) {
      a.widgets.clear();
      for (const r of i) {
        const o = new u();
        this.applyWidget(o, r), a.widgets.push(o);
      }
      a.layout.clear();
      for (const r of e) {
        const o = new c();
        o.id = r.id, o.x = r.x, o.y = r.y, o.z = r.z, o.width = r.width, o.height = r.height, o.group = r.group, a.layout.push(o);
      }
    }
  }
}
function p({ services: s }) {
  s.register(d, new m(s));
}
function f({ services: s }) {
  s.unregister(d);
}
const I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_REPOSITORY: d,
  activate: p,
  deactivate: f,
  identifier: w
}, Symbol.toStringTag, { value: "Module" })), l = "org.eclipse.daanse.board.app.lib.repository.page", k = "0.0.1-next.1";
async function R(s) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${l}: tsm runtime is not initialized`);
  t.register(l, I, k, "lib.repository.page"), await p?.(s);
}
async function x(s) {
  await f?.(s);
}
export {
  O as PAGE_REPOSITORY,
  R as activate,
  x as deactivate,
  z as identifier
};
