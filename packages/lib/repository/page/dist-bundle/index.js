import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { WORKSPACE, BoardImpl, PageImpl, WidgetImpl, LayoutItemImpl } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { PAGE_REPOSITORY, identifier } from "org.eclipse.daanse.board.app.lib.api.page";
import { PAGE_REPOSITORY as PAGE_REPOSITORY2, identifier as identifier2 } from "org.eclipse.daanse.board.app.lib.api.page";
class PageRegistryImpl {
  constructor(resolver) {
    this.resolver = resolver;
  }
  get workspace() {
    if (!this.workspaceHeld) {
      this.workspaceHeld = this.resolver.getRequired(WORKSPACE);
    }
    return this.workspaceHeld;
  }
  /**
   * The board that holds the pages, made if it is not there yet.
   *
   * A workspace holds one board or none, and registering a page is one of
   * the ways the first one comes into being - a page has to belong to
   * something.
   */
  get board() {
    let held = this.workspace.board;
    if (!held) {
      held = new BoardImpl();
      held.id = crypto.randomUUID();
      held.name = "Board";
      this.workspace.board = held;
    }
    return held;
  }
  getPages() {
    return this.workspace.board?.pages.toArray() ?? [];
  }
  /** Built on read, so it cannot drift from what the workspace holds. */
  get pages() {
    const byId = {};
    for (const page of this.getPages()) byId[page.id] = page;
    return byId;
  }
  get defaultPageId() {
    return this.workspace.board?.defaultPage?.id ?? null;
  }
  registerPage(page) {
    const existing = this.getPage(page.id);
    const held = existing ?? new PageImpl();
    held.id = page.id;
    held.name = page.name;
    held.description = page.description;
    held.icon = page.icon;
    held.visibleInNavigation = page.visibleInNavigation ?? true;
    held.layoutId = page.layoutId;
    held.layoutSettings = page.layoutSettings;
    held.backgroundColor = page.backgroundColor;
    held.backgroundImage = page.backgroundImage;
    held.backgroundSize = page.backgroundSize;
    held.backgroundPosition = page.backgroundPosition;
    held.backgroundRepeat = page.backgroundRepeat;
    const board = this.board;
    if (!existing) board.pages.push(held);
    if (!board.defaultPage) board.defaultPage = held;
    return held;
  }
  getPage(pageId) {
    return this.getPages().find((page) => page.id === pageId);
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
    const board = this.workspace.board;
    if (!board) return null;
    const named = board.defaultPage;
    if (named && board.pages.toArray().includes(named)) return named;
    return board.pages.size() > 0 ? board.pages.get(0) : null;
  }
  setDefaultPage(pageId) {
    const page = this.getPage(pageId);
    if (page && this.workspace.board) this.workspace.board.defaultPage = page;
  }
  unregisterPage(pageId) {
    const board = this.workspace.board;
    if (!board) return;
    const held = board.pages;
    const at = held.toArray().findIndex((page) => page.id === pageId);
    if (at < 0) return;
    const removed = held.get(at);
    held.removeAt(at);
    if (board.defaultPage === removed) {
      board.defaultPage = held.size() > 0 ? held.get(0) : void 0;
    }
  }
  getAllPageIds() {
    return this.getPages().map((page) => page.id);
  }
  updatePage(page) {
    this.registerPage(page);
  }
  // ----------------------------------------------------- what is on a board
  get datasources() {
    return this.resolver.getRequired(DATASOURCE_REPOSITORY);
  }
  /**
   * Writes a widget's plain values onto the modelled one.
   *
   * The source is held as a reference and the id kept in the settings, in
   * that order - one direction, because the reference is the truth and the
   * id is what a widget's own settings read.
   */
  applyWidget(held, widget) {
    held.uid = widget.uid;
    held.type = widget.type;
    held.wrapperConfig = widget.wrapperConfig ?? {};
    const config = widget.config ?? {};
    const datasourceId = config["datasourceId"];
    held.datasource = datasourceId ? this.datasources.getDatasourceModel(datasourceId) : void 0;
    config["datasourceId"] = held.datasource?.uid ?? datasourceId;
    held.config = config;
  }
  addWidget(pageId, widget, placement = {}) {
    const page = this.getPage(pageId);
    if (!page) return void 0;
    const held = new WidgetImpl();
    this.applyWidget(held, widget);
    page.widgets.push(held);
    const item = new LayoutItemImpl();
    item.id = widget.uid;
    item.width = placement.width ?? 300;
    item.height = placement.height ?? 150;
    item.x = placement.x ?? 0;
    item.y = placement.y ?? 0;
    item.z = placement.z ?? Math.max(0, ...page.layout.toArray().map((l) => l.z ?? 0)) + 1;
    item.group = placement.group;
    page.layout.push(item);
    return held;
  }
  saveWidget(pageId, widget) {
    const page = this.getPage(pageId);
    const held = page?.widgets.toArray().find((w) => w.uid === widget.uid);
    if (held) this.applyWidget(held, widget);
  }
  removeWidget(pageId, widgetUid) {
    const page = this.getPage(pageId);
    if (!page) return;
    const widgets = page.widgets;
    const atWidget = widgets.toArray().findIndex((w) => w.uid === widgetUid);
    if (atWidget > -1) widgets.removeAt(atWidget);
    const layout = page.layout;
    const atItem = layout.toArray().findIndex((item) => item.id === widgetUid);
    if (atItem > -1) layout.removeAt(atItem);
  }
  setBoard(pageId, widgets, layout) {
    const page = this.getPage(pageId);
    if (!page) return;
    page.widgets.clear();
    for (const widget of widgets) {
      const held = new WidgetImpl();
      this.applyWidget(held, widget);
      page.widgets.push(held);
    }
    page.layout.clear();
    for (const item of layout) {
      const held = new LayoutItemImpl();
      held.id = item.id;
      held.x = item.x;
      held.y = item.y;
      held.z = item.z;
      held.width = item.width;
      held.height = item.height;
      held.group = item.group;
      page.layout.push(held);
    }
  }
}
function activate$1({ services }) {
  services.register(PAGE_REPOSITORY, new PageRegistryImpl(services));
}
function deactivate$1({ services }) {
  services.unregister(PAGE_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_REPOSITORY,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.repository.page";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.repository.page");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  PAGE_REPOSITORY2 as PAGE_REPOSITORY,
  activate,
  deactivate,
  identifier2 as identifier
};
