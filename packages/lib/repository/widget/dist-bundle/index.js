import { injectAll, component } from "@eclipse-daanse/tsm";
import { WIDGET_SERVICE_ID, WIDGET_REPOSITORY, identifier } from "org.eclipse.daanse.board.app.lib.api.widget";
import { WIDGET_REPOSITORY as WIDGET_REPOSITORY2, WIDGET_SERVICE_ID as WIDGET_SERVICE_ID2, identifier as identifier2 } from "org.eclipse.daanse.board.app.lib.api.widget";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
const WIDGET_REPOSITORY_SERVICE = "WidgetRepository";
let TrackedWidgetRepository = class {
  tracked = [];
  manual = {};
  changeListeners = /* @__PURE__ */ new Set();
  set providers(providers) {
    this.tracked = providers;
    this.notifyChange();
  }
  get providers() {
    return this.tracked;
  }
  registerWidget(typename, config) {
    this.manual[typename] = config;
    this.notifyChange();
  }
  /** Takes back a manual registration; returns whether the type was known. */
  unregisterWidget(typename) {
    if (!(typename in this.manual)) {
      return false;
    }
    delete this.manual[typename];
    this.notifyChange();
    return true;
  }
  getWidget(typename) {
    return this.getAllWidgets()[typename];
  }
  getAllWidgets() {
    const widgets = { ...this.manual };
    const seen = /* @__PURE__ */ new Set();
    for (const provider of this.tracked) {
      if (seen.has(provider.type)) continue;
      seen.add(provider.type);
      widgets[provider.type] = provider;
    }
    return widgets;
  }
  /**
   * Called after every registration change.
   *
   * Framework-free on purpose - this package must not depend on Vue. The
   * wrapper turns the callback into reactivity on its side, so a widget
   * whose bundle stops flips to the placeholder instead of silently
   * rendering stale code, and flips back when the bundle starts again.
   * Returns the unsubscribe function.
   */
  onChange(listener) {
    this.changeListeners.add(listener);
    return () => this.changeListeners.delete(listener);
  }
  notifyChange() {
    for (const listener of this.changeListeners) {
      try {
        listener();
      } catch {
      }
    }
  }
};
__decorateClass([
  injectAll(WIDGET_SERVICE_ID)
], TrackedWidgetRepository.prototype, "providers", 1);
TrackedWidgetRepository = __decorateClass([
  component({
    service: [WIDGET_REPOSITORY_SERVICE]
  })
], TrackedWidgetRepository);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get TrackedWidgetRepository() {
    return TrackedWidgetRepository;
  },
  WIDGET_REPOSITORY,
  WIDGET_SERVICE_ID,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.repository.widget";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.repository.widget");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  TrackedWidgetRepository,
  WIDGET_REPOSITORY2 as WIDGET_REPOSITORY,
  WIDGET_SERVICE_ID2 as WIDGET_SERVICE_ID,
  activate,
  deactivate,
  identifier2 as identifier
};
