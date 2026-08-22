const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { Reference, ModelClass, Documentation, Attribute } from "org.eclipse.daanse.board.app.lib.annotations";
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
let RouteRegistry = class {
  constructor() {
    this.routes = [];
  }
  registerRoute(route) {
    throw new Error("registerRoute not implemented");
  }
  unregisterRoute(name) {
    throw new Error("unregisterRoute not implemented");
  }
  getRoute(name) {
    throw new Error("getRoute not implemented");
  }
  getAllRoutes() {
    throw new Error("getAllRoutes not implemented");
  }
};
__decorateClass$1([
  Reference("RouteDefinition")
], RouteRegistry.prototype, "routes", 2);
RouteRegistry = __decorateClass$1([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.repository.route#//RouteRegistry" })
], RouteRegistry);
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
let RouteDefinition = class {
};
__decorateClass([
  Documentation("Route path (e.g., '/events', '/configuration')"),
  Attribute()
], RouteDefinition.prototype, "path", 2);
__decorateClass([
  Documentation("Route name for navigation"),
  Attribute()
], RouteDefinition.prototype, "name", 2);
__decorateClass([
  Documentation("Vue component to render for this route"),
  Attribute()
], RouteDefinition.prototype, "component", 2);
__decorateClass([
  Documentation("Optional route metadata"),
  Attribute()
], RouteDefinition.prototype, "meta", 2);
RouteDefinition = __decorateClass([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.lib.repository.route#//RouteDefinition" })
], RouteDefinition);
class RouteRegistryImpl extends RouteRegistry {
  constructor() {
    super(...arguments);
    this.routesMap = /* @__PURE__ */ new Map();
  }
  registerRoute(route) {
    if (!route.name) {
      console.warn("Cannot register route without name");
      return false;
    }
    this.routesMap.set(route.name, route);
    this.routes = Array.from(this.routesMap.values());
    console.log(`Registered route: ${route.name} (${route.path})`);
    return true;
  }
  unregisterRoute(name) {
    if (!name) {
      return false;
    }
    const removed = this.routesMap.delete(name);
    if (removed) {
      this.routes = Array.from(this.routesMap.values());
      console.log(`Unregistered route: ${name}`);
    }
    return removed;
  }
  getRoute(name) {
    if (!name) {
      return new RouteDefinition();
    }
    return this.routesMap.get(name) || new RouteDefinition();
  }
  getAllRoutes() {
    const routes = Array.from(this.routesMap.values());
    return routes;
  }
  // Correct typed method for actual use
  getAllRoutesArray() {
    return Array.from(this.routesMap.values());
  }
}
const ROUTE_REGISTRY_ID = serviceId("RouteRegistry");
const ROUTE_REGISTRY = Symbol.for(ROUTE_REGISTRY_ID);
function activate$1({ services }) {
  services.register(ROUTE_REGISTRY_ID, new RouteRegistryImpl());
}
function deactivate$1({ services }) {
  services.unregister(ROUTE_REGISTRY_ID);
}
const identifier = ROUTE_REGISTRY;
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ROUTE_REGISTRY,
  ROUTE_REGISTRY_ID,
  get RouteDefinition() {
    return RouteDefinition;
  },
  get RouteRegistry() {
    return RouteRegistry;
  },
  RouteRegistryImpl,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.repository.route";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.repository.route");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  ROUTE_REGISTRY,
  ROUTE_REGISTRY_ID,
  RouteDefinition,
  RouteRegistry,
  RouteRegistryImpl,
  activate,
  deactivate,
  identifier
};
