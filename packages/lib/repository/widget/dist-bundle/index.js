const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const WIDGET_SERVICE_ID = serviceId("daanse.widget");
class WidgetRepository {
  availableWidgets = {};
  changeListeners = /* @__PURE__ */ new Set();
  registerWidget(typename, config) {
    this.availableWidgets[typename] = config;
    this.notifyChange();
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
  /**
   * Nimmt eine Registrierung zurück. Gibt zurück, ob der Typ registriert war.
   *
   * Gegenstück zu registerWidget, damit ein Widget-Modul seine Registrierung
   * in deactivate() wieder aufheben kann.
   */
  unregisterWidget(typename) {
    if (!(typename in this.availableWidgets)) {
      return false;
    }
    delete this.availableWidgets[typename];
    this.notifyChange();
    return true;
  }
  getWidget(typename) {
    return this.availableWidgets[typename];
  }
  getAllWidgets() {
    return this.availableWidgets;
  }
}
const WIDGET_REPOSITORY = serviceId("WidgetRepository");
const identifier = Symbol.for(WIDGET_REPOSITORY);
let tracker;
function observable(services) {
  const candidate = services;
  return typeof candidate.addListener === "function" ? candidate : void 0;
}
function activate$1({ services, log }) {
  const repository = new WidgetRepository();
  services.register(WIDGET_REPOSITORY, repository);
  const registry = observable(services);
  if (!registry) {
    log.warn("service registry is not observable - widget bundles will not be tracked");
    return;
  }
  const tracked = /* @__PURE__ */ new Set();
  const sync = () => {
    const references = registry.getServiceReferences?.(WIDGET_SERVICE_ID) ?? [];
    const present = /* @__PURE__ */ new Map();
    for (const reference of references) {
      const type = reference.properties["widget.type"];
      if (typeof type === "string") present.set(type, reference);
    }
    for (const [type, reference] of present) {
      if (tracked.has(type)) continue;
      const provider = registry.resolveReference?.(reference);
      if (!provider) continue;
      repository.registerWidget(type, provider);
      tracked.add(type);
      log.info(`widget "${type}" tracked`);
    }
    for (const type of [...tracked]) {
      if (present.has(type)) continue;
      repository.unregisterWidget(type);
      tracked.delete(type);
      log.info(`widget "${type}" untracked`);
    }
  };
  sync();
  tracker = {
    onServiceEvent(event) {
      if (event.serviceId === WIDGET_SERVICE_ID) sync();
    }
  };
  registry.addListener?.(tracker);
}
function deactivate$1({ services }) {
  const registry = observable(services);
  if (registry && tracker) {
    registry.removeListener?.(tracker);
    tracker = void 0;
  }
  services.unregister(WIDGET_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WIDGET_REPOSITORY,
  WIDGET_SERVICE_ID,
  WidgetRepository,
  activate: activate$1,
  deactivate: deactivate$1,
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
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  WIDGET_REPOSITORY,
  WIDGET_SERVICE_ID,
  WidgetRepository,
  activate,
  deactivate,
  identifier
};
