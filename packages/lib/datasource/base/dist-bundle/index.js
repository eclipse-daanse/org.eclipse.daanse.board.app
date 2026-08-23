import { UsesComputedVariable as l } from "org.eclipse.daanse.board.app.lib.variables";
class n extends l {
  constructor() {
    super(...arguments), this.subscribers = [], this.pollingInterval = 5e3, this.pollingActive = !1, this.pollingIntervalId = null, this.name = "", this.type = "", this.uid = "";
  }
  init(t) {
    this.type = t.type, this.name = t.name, this.uid = t.uid, this.setUpdateCb(() => {
      console.log("Test notify"), this.notify();
    }), this.pollingEnabled = t.pollingEnabled ?? !1;
  }
  subscribe(t) {
    return this.subscribers.push(t), () => {
      this.unsubscribe(t);
    };
  }
  unsubscribe(t) {
    this.subscribers = this.subscribers.filter((i) => i !== t);
  }
  notify() {
    this.subscribers.forEach((t) => {
      t();
    });
  }
  startPolling(t) {
    this.stopPolling(), !this.pollingActive && (this.pollingActive = !0, this.pollingInterval = t, this.pollingIntervalId = window.setInterval(async () => {
      if (this.pollingActive)
        try {
          const i = await this.getOriginalData();
          console.log(i), this.notify();
        } catch (i) {
          console.warn("Polling error", i);
        }
    }, this.pollingInterval), console.log("Started polling", this.pollingIntervalId));
  }
  stopPolling() {
    console.log("Stopping polling", this.pollingIntervalId), this.pollingActive = !1, this.pollingIntervalId !== null && (window.clearInterval(this.pollingIntervalId), this.pollingIntervalId = null);
  }
  static validateConfiguration(t) {
    return !0;
  }
}
const o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseDatasource: n
}, Symbol.toStringTag, { value: "Module" })), s = "org.eclipse.daanse.board.app.lib.datasource.base", r = "0.0.1-next.1";
async function c(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${s}: tsm runtime is not initialized`);
  t.register(s, o, r, "lib.datasource.base"), await void 0;
}
async function h(e) {
  await void 0;
}
export {
  n as BaseDatasource,
  c as activate,
  h as deactivate
};
