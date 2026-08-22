const { UsesComputedVariable } = __tsm__.require("org.eclipse.daanse.board.app.lib.variables");
class BaseDatasource extends UsesComputedVariable {
  constructor() {
    super(...arguments);
    this.subscribers = [];
    this.pollingInterval = 5e3;
    this.pollingActive = false;
    this.pollingIntervalId = null;
    this.name = "";
    this.type = "";
    this.uid = "";
  }
  init(configuration) {
    this.type = configuration.type;
    this.name = configuration.name;
    this.uid = configuration.uid;
    this.setUpdateCb(() => {
      console.log("Test notify");
      this.notify();
    });
    this.pollingEnabled = configuration.pollingEnabled ?? false;
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    return () => {
      this.unsubscribe(subscriber);
    };
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber();
    });
  }
  startPolling(interval) {
    this.stopPolling();
    if (this.pollingActive) return;
    this.pollingActive = true;
    this.pollingInterval = interval;
    this.pollingIntervalId = window.setInterval(async () => {
      if (!this.pollingActive) return;
      try {
        const resp = await this.getOriginalData();
        console.log(resp);
        this.notify();
      } catch (error) {
        console.warn("Polling error", error);
      }
    }, this.pollingInterval);
    console.log("Started polling", this.pollingIntervalId);
  }
  stopPolling() {
    console.log("Stopping polling", this.pollingIntervalId);
    this.pollingActive = false;
    if (this.pollingIntervalId !== null) {
      window.clearInterval(this.pollingIntervalId);
      this.pollingIntervalId = null;
    }
  }
  static validateConfiguration(config) {
    return true;
  }
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseDatasource
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.base";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.base");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  BaseDatasource,
  activate,
  deactivate
};
