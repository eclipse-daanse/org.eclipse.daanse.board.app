import { Reference as b, ModelClass as u, Documentation as l, Attribute as g } from "org.eclipse.daanse.board.app.lib.annotations";
const { serviceId: _ } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var f = Object.defineProperty, y = Object.getOwnPropertyDescriptor, c = (t, i, n, o) => {
  for (var e = o > 1 ? void 0 : o ? y(i, n) : i, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (e = (o ? p(i, n, e) : p(e)) || e);
  return o && e && f(i, n, e), e;
};
let m = class {
  items = [];
  registerNavigationItem(t) {
    throw new Error("registerNavigationItem not implemented");
  }
  unregisterNavigationItem(t) {
    throw new Error("unregisterNavigationItem not implemented");
  }
  getNavigationItem(t) {
    throw new Error("getNavigationItem not implemented");
  }
  getAllNavigationItems() {
    throw new Error("getAllNavigationItems not implemented");
  }
};
c([
  b("NavigationItem")
], m.prototype, "items", 2);
m = c([
  u({ type: "http://org.eclipse.daanse.board.app.lib.repository.navigation#//NavigationRegistry" })
], m);
var I = Object.defineProperty, N = Object.getOwnPropertyDescriptor, a = (t, i, n, o) => {
  for (var e = o > 1 ? void 0 : o ? N(i, n) : i, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (e = (o ? p(i, n, e) : p(e)) || e);
  return o && e && I(i, n, e), e;
};
let r = class {
  id;
  label;
  icon;
  route;
  routeName;
  order = 0;
  visible = !0;
};
a([
  l("Unique identifier for the navigation item"),
  g()
], r.prototype, "id", 2);
a([
  l("Display label for the menu item"),
  g()
], r.prototype, "label", 2);
a([
  l("Icon name (e.g., 'event', 'settings', 'preview')"),
  g()
], r.prototype, "icon", 2);
a([
  l("Vue router path (e.g., '/events', '/configuration')"),
  g()
], r.prototype, "route", 2);
a([
  l("Vue router name for matching active state"),
  g()
], r.prototype, "routeName", 2);
a([
  l("Sort order in the menu (lower numbers appear first)"),
  g()
], r.prototype, "order", 2);
a([
  l("Whether the menu item should be displayed"),
  g()
], r.prototype, "visible", 2);
r = a([
  u({ type: "http://org.eclipse.daanse.board.app.lib.repository.navigation#//NavigationItem" })
], r);
const d = _("NavigationRegistry"), h = Symbol.for(d), w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NAVIGATION_REGISTRY: h,
  NAVIGATION_REGISTRY_ID: d,
  get NavigationItem() {
    return r;
  },
  get NavigationRegistry() {
    return m;
  }
}, Symbol.toStringTag, { value: "Module" })), v = "org.eclipse.daanse.board.app.lib.api.navigation", O = "0.0.1-next.1";
async function P(t) {
  const i = globalThis.__tsm__;
  if (!i)
    throw new Error(`${v}: tsm runtime is not initialized`);
  i.register(v, w, O, "lib.api.navigation"), await void 0;
}
async function A(t) {
  await void 0;
}
export {
  h as NAVIGATION_REGISTRY,
  d as NAVIGATION_REGISTRY_ID,
  r as NavigationItem,
  m as NavigationRegistry,
  P as activate,
  A as deactivate
};
