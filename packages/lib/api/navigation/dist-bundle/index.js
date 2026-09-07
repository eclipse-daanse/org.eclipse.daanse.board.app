import { Reference as _, Documentation as t, ModelClass as c, Attribute as l } from "org.eclipse.daanse.board.app.lib.annotations";
const { serviceId: y } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var b = Object.defineProperty, I = Object.getOwnPropertyDescriptor, v = (i, r, p, a) => {
  for (var e = a > 1 ? void 0 : a ? I(r, p) : r, g = i.length - 1, m; g >= 0; g--)
    (m = i[g]) && (e = (a ? m(r, p, e) : m(e)) || e);
  return a && e && b(r, p, e), e;
};
let n = class {
  items = [];
  registerNavigationItem(i) {
    throw new Error("registerNavigationItem not implemented");
  }
  unregisterNavigationItem(i) {
    throw new Error("unregisterNavigationItem not implemented");
  }
  getNavigationItem(i) {
    throw new Error("getNavigationItem not implemented");
  }
  getAllNavigationItems() {
    throw new Error("getAllNavigationItems not implemented");
  }
};
v([
  _("NavigationItem")
], n.prototype, "items", 2);
v([
  t("Register a navigation menu item")
], n.prototype, "registerNavigationItem", 1);
v([
  t("Unregister a navigation menu item by id")
], n.prototype, "unregisterNavigationItem", 1);
v([
  t("Get a navigation item by id")
], n.prototype, "getNavigationItem", 1);
v([
  t("Get all registered navigation items, sorted by order")
], n.prototype, "getAllNavigationItems", 1);
n = v([
  t("Registry for managing navigation menu items"),
  c({ type: "http://org.eclipse.daanse.board.app.lib.repository.navigation#//NavigationRegistry" })
], n);
var f = Object.defineProperty, N = Object.getOwnPropertyDescriptor, s = (i, r, p, a) => {
  for (var e = a > 1 ? void 0 : a ? N(r, p) : r, g = i.length - 1, m; g >= 0; g--)
    (m = i[g]) && (e = (a ? m(r, p, e) : m(e)) || e);
  return a && e && f(r, p, e), e;
};
let o = class {
  id;
  label;
  icon;
  route;
  routeName;
  order = 0;
  visible = !0;
};
s([
  t("Unique identifier for the navigation item"),
  l()
], o.prototype, "id", 2);
s([
  t("Display label for the menu item"),
  l()
], o.prototype, "label", 2);
s([
  t("Icon name (e.g., 'event', 'settings', 'preview')"),
  l()
], o.prototype, "icon", 2);
s([
  t("Vue router path (e.g., '/events', '/configuration')"),
  l()
], o.prototype, "route", 2);
s([
  t("Vue router name for matching active state"),
  l()
], o.prototype, "routeName", 2);
s([
  t("Sort order in the menu (lower numbers appear first)"),
  l()
], o.prototype, "order", 2);
s([
  t("Whether the menu item should be displayed"),
  l()
], o.prototype, "visible", 2);
o = s([
  t("Represents a navigation menu item in the application"),
  c({ type: "http://org.eclipse.daanse.board.app.lib.repository.navigation#//NavigationItem" })
], o);
const d = y("NavigationRegistry"), h = Symbol.for(d), w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NAVIGATION_REGISTRY: h,
  NAVIGATION_REGISTRY_ID: d,
  get NavigationItem() {
    return o;
  },
  get NavigationRegistry() {
    return n;
  }
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.lib.api.navigation", R = "0.0.1-next.1";
async function A(i) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error(`${u}: tsm runtime is not initialized`);
  r.register(u, w, R, "lib.api.navigation"), await void 0;
}
async function P(i) {
  await void 0;
}
export {
  h as NAVIGATION_REGISTRY,
  d as NAVIGATION_REGISTRY_ID,
  o as NavigationItem,
  n as NavigationRegistry,
  A as activate,
  P as deactivate
};
