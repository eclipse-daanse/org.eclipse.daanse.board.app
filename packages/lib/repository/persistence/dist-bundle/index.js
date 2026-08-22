const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class BaseRepository {
  init(url, name) {
    this.uri = url;
    this.name = name;
  }
  getUri() {
    return this.uri;
  }
  getName() {
    return this.name;
  }
}
class RepositoryRegistry {
  constructor() {
    this.availableRepos = /* @__PURE__ */ new Map();
    this.availableRepoTypes = /* @__PURE__ */ new Map();
    this.availableRepoTypesViews = /* @__PURE__ */ new Map();
    this.init = false;
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }
  notify(event, repo) {
    for (const observer of this.observers) {
      observer.update(event, repo);
    }
  }
  async findRepositoryByName(name) {
    return await Array.from(this.availableRepos.values()).find((repo) => repo.name == name);
  }
  async findRepositoryByUri(uri) {
    return await this.availableRepos.get(uri.toString());
  }
  async getAvailableReposetories() {
    return await Array.from(this.availableRepos.values());
  }
  register(repo) {
    this.availableRepos.set(repo.uri.toString(), repo);
    console.info("registered Repo from Type:" + Object.getPrototypeOf(repo).constructor.type + " under " + repo.uri.toString());
    this.notify("register", repo);
  }
  registerRepoType(type, symbol) {
    this.availableRepoTypes.set(type, symbol);
  }
  registerViewForRepoType(type, component) {
    this.availableRepoTypesViews.set(type, component);
  }
  getViewForRepoType(type) {
    return this.availableRepoTypesViews.get(type);
  }
  isViewForRepoType(type) {
    return this.availableRepoTypesViews.has(type);
  }
  unregister(url) {
    const repo = this.availableRepos.get(url.toString());
    if (repo) {
      this.availableRepos.delete(url.toString());
      this.notify("unregister", repo);
    }
  }
}
const REPOSITORY_REGISTRY = serviceId("RepositoryRegistry");
const identifier = Symbol.for(REPOSITORY_REGISTRY);
function activate$1({ services, log }) {
  services.register(REPOSITORY_REGISTRY, new RepositoryRegistry());
  log.info("RepositoryRegistry bereit");
}
function deactivate$1({ services }) {
  services.unregister(REPOSITORY_REGISTRY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseRepository,
  REPOSITORY_REGISTRY,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.repository.persistence";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.repository.persistence");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  BaseRepository,
  REPOSITORY_REGISTRY,
  activate,
  deactivate,
  identifier
};
