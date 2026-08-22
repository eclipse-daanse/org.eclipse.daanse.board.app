const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { BaseRepository, REPOSITORY_REGISTRY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.persistence");
const { VALIDITY_CHECK } = __tsm__.require("org.eclipse.daanse.board.app.lib.persistence.util");
import { inject, injectable } from "@eclipse-daanse/tsm";
const { parse: $parse } = JSON;
const { keys } = Object;
const Primitive = String;
const primitive = "string";
const ignore = {};
const object = "object";
const noop = (_, value) => value;
const primitives = (value) => value instanceof Primitive ? Primitive(value) : value;
const Primitives = (_, value) => typeof value === primitive ? new Primitive(value) : value;
const resolver = (input, lazy, parsed, $) => (output) => {
  for (let ke = keys(output), { length } = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[+value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({ o: output, k, r: tmp });
      } else
        output[k] = $.call(output, k, tmp);
    } else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  return output;
};
const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const $ = noop;
  let value = input[0];
  if (typeof value === object && value) {
    const lazy = [];
    const revive = resolver(input, lazy, /* @__PURE__ */ new Set(), $);
    value = revive(value);
    let i = 0;
    while (i < lazy.length) {
      const { o, k, r } = lazy[i++];
      o[k] = $.call(o, k, revive(r));
    }
  }
  return $.call({ "": value }, "", value);
};
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
let LocalRepositoryImpl = class extends BaseRepository {
  init(url, name) {
    super.init(url, name);
  }
  sync() {
    return Promise.resolve([]);
  }
  async findAll() {
    let ret = [];
    Object.keys(localStorage).forEach((e, key) => {
      try {
        let content = JSON.parse(localStorage.getItem(e) ?? "");
        if (Array.isArray(content)) {
          content = parse(localStorage.getItem(e) ?? "");
        }
        if (this.ValidityCheck.checkContent(content)) {
          let copyBaseUri = new URL(this.uri ?? "");
          copyBaseUri.pathname = e + ".json";
          ret.push({
            name: e,
            uri: copyBaseUri,
            data: content
          });
        }
      } catch (e2) {
        console.log(e2);
      }
    });
    return Promise.resolve(ret);
  }
  test() {
    this.ValidityCheck.checkContent({});
  }
  findByFragment(_pathname) {
    let pathname = _pathname.charAt(0) == "/" ? _pathname.slice(1) : _pathname;
    let ret = [];
    if (Object.keys(localStorage).includes(pathname)) {
      let content = JSON.parse(localStorage.getItem(pathname) ?? "");
      if (Array.isArray(content)) {
        content = parse(localStorage.getItem(pathname) ?? "");
      }
      if (this.ValidityCheck.checkContent(content)) {
        let copyBaseUri = new URL(this.uri ?? "");
        copyBaseUri.pathname = pathname + ".json";
        ret.push({
          name: pathname,
          uri: copyBaseUri,
          data: localStorage.getItem(pathname)
        });
      }
    }
    return Promise.resolve(ret);
  }
  findByName(name) {
    return this.findByFragment(name);
  }
  findByUri(uri) {
    let path = uri.pathname.replace(".json", "");
    return this.findByFragment(path);
  }
  async getEntityByUri(uri) {
    if (uri.protocol != this.uri?.protocol || uri.hostname != this.uri?.hostname) {
      return Promise.resolve(null);
    }
    let path = uri.pathname.replace(".json", "");
    let entity = await this.findByFragment(path);
    return Promise.resolve(entity[0]);
  }
  create(e) {
    if (this.checkURI(e)) {
      return Promise.reject("Entity Uri not set or not in Repo");
    }
    const name = e.uri.pathname.replace(".json", "").replace("/", "");
    if (Object.keys(localStorage).includes(name)) {
      return Promise.reject("Entity allready exists! use update!");
    }
    if (e.name == void 0 || e.name == "") {
      return Promise.reject("name not set in entity");
    }
    if (!e.uri.pathname.includes(".json")) {
      return Promise.reject("name not contains a .json file type");
    }
    localStorage.setItem(name, e.data);
    return Promise.resolve(true);
  }
  delete(e) {
    if (this.checkURI(e)) {
      return Promise.reject("Entity Uri not set or in Repo");
    }
    if (e.name == void 0 || e.name == "") {
      return Promise.reject("name not set in entity");
    }
    if (!e.uri.pathname.includes(".json")) {
      return Promise.reject("name not contains a .json file type");
    }
    const name = e.uri.pathname.replace(".json", "").replace("/", "");
    localStorage.removeItem(name);
    return Promise.resolve(true);
  }
  update(e) {
    if (this.checkURI(e)) {
      return Promise.reject("Entity Uri not set or in Repo");
    }
    if (e.name == void 0 || e.name == "") {
      return Promise.reject("name not set in entity");
    }
    if (!e.uri.pathname.includes(".json")) {
      return Promise.reject("name not contains a .json file type");
    }
    const name = e.uri.pathname.replace(".json", "").replace("/", "");
    if (!Object.keys(localStorage).includes(name)) {
      return Promise.reject("Entity not exists! use create!");
    }
    localStorage.setItem(name, e.data);
    return Promise.resolve(true);
  }
  checkURI(e) {
    return !e.uri || e.uri.protocol != this.uri?.protocol || e.uri.hostname != this.uri?.hostname;
  }
};
LocalRepositoryImpl.type = "localRepositories";
__decorateClass([
  inject(VALIDITY_CHECK, { optional: true })
], LocalRepositoryImpl.prototype, "ValidityCheck", 2);
LocalRepositoryImpl = __decorateClass([
  injectable()
], LocalRepositoryImpl);
const LOCAL_REPOSITORY = serviceId("LocalRepository");
const identifier = Symbol.for(LOCAL_REPOSITORY);
function activate$1({ services }) {
  services.register(LOCAL_REPOSITORY, services.construct(LocalRepositoryImpl));
  const repoRegistry = services.getRequired(REPOSITORY_REGISTRY);
  repoRegistry.registerRepoType(LocalRepositoryImpl.type, identifier);
}
function deactivate$1({ services }) {
  services.unregister(LOCAL_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LOCAL_REPOSITORY,
  activate: activate$1,
  deactivate: deactivate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.persistence.local";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.persistence.local");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  LOCAL_REPOSITORY,
  activate,
  deactivate
};
