import { SubscribeNotifyImpl } from "org.eclipse.daanse.board.app.lib.utils.subscriber";
import { PAGE_REPOSITORY, identifier } from "org.eclipse.daanse.board.app.lib.api.page";
import { PAGE_REPOSITORY as PAGE_REPOSITORY2, identifier as identifier2 } from "org.eclipse.daanse.board.app.lib.api.page";
const events = {
  PAGE_REGISTRATION: "PAGE_REGISTRATION",
  PAGE_UPDATE: "PAGE_UPDATE",
  PAGE_UNREGISTRATION: "PAGE_UNREGISTRATION"
};
class PageRegistryImpl extends SubscribeNotifyImpl {
  constructor() {
    super(...arguments);
    this.pages = {};
    this.defaultPageId = null;
  }
  registerPage(page) {
    this.pages[page.id] = page;
    if (this.defaultPageId === null) {
      this.defaultPageId = page.id;
    }
    this.notify(events.PAGE_REGISTRATION);
  }
  getPage(pageId) {
    return this.pages[pageId];
  }
  getDefaultPage() {
    if (this.defaultPageId && this.pages[this.defaultPageId]) {
      return this.pages[this.defaultPageId];
    }
    return null;
  }
  setDefaultPage(pageId) {
    if (this.pages[pageId]) {
      this.defaultPageId = pageId;
    }
  }
  unregisterPage(pageId) {
    delete this.pages[pageId];
    if (this.defaultPageId === pageId) {
      const remainingIds = Object.keys(this.pages);
      this.defaultPageId = remainingIds.length > 0 ? remainingIds[0] : null;
    }
    this.notify(events.PAGE_UNREGISTRATION);
  }
  getAllPageIds() {
    return Object.keys(this.pages);
  }
  updatePage(page) {
    this.pages[page.id] = page;
    this.notify(events.PAGE_UPDATE);
  }
}
function activate$1({ services }) {
  services.register(PAGE_REPOSITORY, new PageRegistryImpl());
}
function deactivate$1({ services }) {
  services.unregister(PAGE_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_REPOSITORY,
  activate: activate$1,
  deactivate: deactivate$1,
  events,
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
  events,
  identifier2 as identifier
};
