import { REPOSITORY_REGISTRY as s, identifier as p } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { REPOSITORY_REGISTRY as f, identifier as d } from "org.eclipse.daanse.board.app.lib.api.persistence";
class l {
  init(e, t) {
    this.uri = e, this.name = t;
  }
  getUri() {
    return this.uri;
  }
  getName() {
    return this.name;
  }
}
class y {
  constructor() {
    this.availableRepos = /* @__PURE__ */ new Map(), this.availableRepoTypes = /* @__PURE__ */ new Map(), this.availableRepoTypesViews = /* @__PURE__ */ new Map(), this.init = !1, this.observers = [];
  }
  addObserver(e) {
    this.observers.push(e);
  }
  removeObserver(e) {
    this.observers = this.observers.filter((t) => t !== e);
  }
  notify(e, t) {
    for (const n of this.observers)
      n.update(e, t);
  }
  async findRepositoryByName(e) {
    return await Array.from(this.availableRepos.values()).find((t) => t.name == e);
  }
  async findRepositoryByUri(e) {
    return await this.availableRepos.get(e.toString());
  }
  async getAvailableReposetories() {
    return await Array.from(this.availableRepos.values());
  }
  register(e) {
    this.availableRepos.set(e.uri.toString(), e), console.info("registered Repo from Type:" + Object.getPrototypeOf(e).constructor.type + " under " + e.uri.toString()), this.notify("register", e);
  }
  registerRepoType(e, t) {
    this.availableRepoTypes.set(e, t);
  }
  registerViewForRepoType(e, t) {
    this.availableRepoTypesViews.set(e, t);
  }
  getViewForRepoType(e) {
    return this.availableRepoTypesViews.get(e);
  }
  isViewForRepoType(e) {
    return this.availableRepoTypesViews.has(e);
  }
  unregister(e) {
    const t = this.availableRepos.get(e.toString());
    t && (this.availableRepos.delete(e.toString()), this.notify("unregister", t));
  }
}
function a({ services: i, log: e }) {
  i.register(s, new y()), e.info("RepositoryRegistry bereit");
}
function o({ services: i }) {
  i.unregister(s);
}
const R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseRepository: l,
  REPOSITORY_REGISTRY: s,
  activate: a,
  deactivate: o,
  identifier: p
}, Symbol.toStringTag, { value: "Module" })), r = "org.eclipse.daanse.board.app.lib.repository.persistence", c = "0.0.1-next.1";
async function v(i) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${r}: tsm runtime is not initialized`);
  e.register(r, R, c, "lib.repository.persistence"), await a?.(i);
}
async function g(i) {
  await o?.(i);
}
export {
  l as BaseRepository,
  f as REPOSITORY_REGISTRY,
  v as activate,
  g as deactivate,
  d as identifier
};
