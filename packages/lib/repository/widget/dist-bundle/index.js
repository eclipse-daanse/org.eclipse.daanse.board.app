import { injectAll as f, component as h } from "@eclipse-daanse/tsm";
import { WIDGET_SERVICE_ID as d, WIDGET_REPOSITORY as g, identifier as p } from "org.eclipse.daanse.board.app.lib.api.widget";
import { WIDGET_REPOSITORY as W, WIDGET_SERVICE_ID as b, identifier as T } from "org.eclipse.daanse.board.app.lib.api.widget";
var u = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, l = (e, t, r, n) => {
  for (var i = n > 1 ? void 0 : n ? _(t, r) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (i = (n ? a(t, r, i) : a(i)) || i);
  return n && i && u(t, r, i), i;
};
let s = class {
  tracked = [];
  manual = {};
  changeListeners = /* @__PURE__ */ new Set();
  set providers(e) {
    this.tracked = e, this.notifyChange();
  }
  get providers() {
    return this.tracked;
  }
  registerWidget(e, t) {
    this.manual[e] = t, this.notifyChange();
  }
  /** Takes back a manual registration; returns whether the type was known. */
  unregisterWidget(e) {
    return e in this.manual ? (delete this.manual[e], this.notifyChange(), !0) : !1;
  }
  getWidget(e) {
    return this.getAllWidgets()[e];
  }
  getAllWidgets() {
    const e = { ...this.manual }, t = /* @__PURE__ */ new Set();
    for (const r of this.tracked)
      t.has(r.type) || (t.add(r.type), e[r.type] = r);
    return e;
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
  onChange(e) {
    return this.changeListeners.add(e), () => this.changeListeners.delete(e);
  }
  notifyChange() {
    for (const e of this.changeListeners)
      try {
        e();
      } catch {
      }
  }
};
l([
  f(d)
], s.prototype, "providers", 1);
s = l([
  h({
    service: [g]
  })
], s);
const y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get TrackedWidgetRepository() {
    return s;
  },
  WIDGET_REPOSITORY: g,
  WIDGET_SERVICE_ID: d,
  identifier: p
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.lib.repository.widget", m = "0.0.1-next.1";
async function E(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${c}: tsm runtime is not initialized`);
  t.register(c, y, m, "lib.repository.widget"), await void 0;
}
async function w(e) {
  await void 0;
}
export {
  s as TrackedWidgetRepository,
  W as WIDGET_REPOSITORY,
  b as WIDGET_SERVICE_ID,
  E as activate,
  w as deactivate,
  T as identifier
};
