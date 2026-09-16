import { DATASOURCE_REPOSITORY as h } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { WORKSPACE as y, BoardImpl as P, PageImpl as b, WidgetImpl as u, LayoutItemImpl as c } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { PAGE_REPOSITORY as g, identifier as m } from "org.eclipse.daanse.board.app.lib.api.page";
import { PAGE_REPOSITORY as O, identifier as W } from "org.eclipse.daanse.board.app.lib.api.page";
class w {
  constructor(t) {
    this.resolver = t;
  }
  get workspace() {
    return this.workspaceHeld || (this.workspaceHeld = this.resolver.getRequired(y)), this.workspaceHeld;
  }
  /**
   * The board that holds the pages, made if it is not there yet.
   *
   * A workspace holds one board or none, and registering a page is one of
   * the ways the first one comes into being - a page has to belong to
   * something.
   */
  get board() {
    let t = this.workspace.board;
    return t || (t = new P(), t.id = crypto.randomUUID(), t.name = "Board", this.workspace.board = t), t;
  }
  getPages() {
    return this.workspace.board?.pages.toArray() ?? [];
  }
  /** Built on read, so it cannot drift from what the workspace holds. */
  get pages() {
    const t = {};
    for (const r of this.getPages()) t[r.id] = r;
    return t;
  }
  get defaultPageId() {
    return this.workspace.board?.defaultPage?.id ?? null;
  }
  registerPage(t) {
    const r = this.getPage(t.id), e = r ?? new b();
    e.id = t.id, e.name = t.name, e.description = t.description, e.icon = t.icon, e.visibleInNavigation = t.visibleInNavigation ?? !0, e.layoutId = t.layoutId, e.layoutSettings = t.layoutSettings, e.backgroundColor = t.backgroundColor, e.backgroundImage = t.backgroundImage, e.backgroundSize = t.backgroundSize, e.backgroundPosition = t.backgroundPosition, e.backgroundRepeat = t.backgroundRepeat;
    const o = this.board;
    return r || o.pages.push(e), o.defaultPage || (o.defaultPage = e), e;
  }
  getPage(t) {
    return this.getPages().find((r) => r.id === t);
  }
  /**
   * The page to open when none is asked for.
   *
   * What the board names, but only if that page is still one of its own. A
   * stored state can carry a reference to a page that is not in it - an
   * older one wrote the default as a position in the file rather than as a
   * path to the page - and answering with it sends the caller to a board
   * that shows "this page does not exist".
   */
  getDefaultPage() {
    const t = this.workspace.board;
    if (!t) return null;
    const r = t.defaultPage;
    return r && t.pages.toArray().includes(r) ? r : t.pages.size() > 0 ? t.pages.get(0) : null;
  }
  setDefaultPage(t) {
    const r = this.getPage(t);
    r && this.workspace.board && (this.workspace.board.defaultPage = r);
  }
  unregisterPage(t) {
    const r = this.workspace.board;
    if (!r) return;
    const e = r.pages, o = e.toArray().findIndex((i) => i.id === t);
    if (o < 0) return;
    const a = e.get(o);
    e.removeAt(o), r.defaultPage === a && (r.defaultPage = e.size() > 0 ? e.get(0) : void 0);
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
  applyWidget(t, r) {
    t.uid = r.uid, t.type = r.type, t.wrapperConfig = r.wrapperConfig ?? {};
    const e = r.config ?? {}, o = e.datasourceId;
    t.datasource = o ? this.datasources.getDatasourceModel(o) : void 0, e.datasourceId = t.datasource?.uid ?? o, t.config = e;
  }
  addWidget(t, r, e = {}) {
    const o = this.getPage(t);
    if (!o) return;
    const a = new u();
    this.applyWidget(a, r), o.widgets.push(a);
    const i = new c();
    return i.id = r.uid, i.width = e.width ?? 300, i.height = e.height ?? 150, i.x = e.x ?? 0, i.y = e.y ?? 0, i.z = e.z ?? Math.max(0, ...o.layout.toArray().map((n) => n.z ?? 0)) + 1, i.group = e.group, o.layout.push(i), a;
  }
  saveWidget(t, r) {
    const o = this.getPage(t)?.widgets.toArray().find((a) => a.uid === r.uid);
    o && this.applyWidget(o, r);
  }
  removeWidget(t, r) {
    const e = this.getPage(t);
    if (!e) return;
    const o = e.widgets, a = o.toArray().findIndex((d) => d.uid === r);
    a > -1 && o.removeAt(a);
    const i = e.layout, n = i.toArray().findIndex((d) => d.id === r);
    n > -1 && i.removeAt(n);
  }
  setBoard(t, r, e) {
    const o = this.getPage(t);
    if (o) {
      o.widgets.clear();
      for (const a of r) {
        const i = new u();
        this.applyWidget(i, a), o.widgets.push(i);
      }
      o.layout.clear();
      for (const a of e) {
        const i = new c();
        i.id = a.id, i.x = a.x, i.y = a.y, i.z = a.z, i.width = a.width, i.height = a.height, i.group = a.group, o.layout.push(i);
      }
    }
  }
}
function p({ services: s }) {
  s.register(g, new w(s));
}
function f({ services: s }) {
  s.unregister(g);
}
const I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_REPOSITORY: g,
  activate: p,
  deactivate: f,
  identifier: m
}, Symbol.toStringTag, { value: "Module" })), l = "org.eclipse.daanse.board.app.lib.repository.page", k = "0.0.1-next.1";
async function x(s) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${l}: tsm runtime is not initialized`);
  t.register(l, I, k, "lib.repository.page"), await p?.(s);
}
async function S(s) {
  await f?.(s);
}
export {
  O as PAGE_REPOSITORY,
  x as activate,
  S as deactivate,
  W as identifier
};
