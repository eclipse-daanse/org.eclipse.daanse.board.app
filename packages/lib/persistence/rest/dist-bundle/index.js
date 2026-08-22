const { BaseRepository } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.persistence");
class RestRepositoryImpl extends BaseRepository {
  static {
    this.type = "restRepositories";
  }
  init(url, name, settings = {
    updateEndpointPath: ":id",
    deleteEndpointPath: ":id",
    findAllEndpointPath: "",
    createEndpointPath: ":id",
    findEndpointPath: ":id",
    syncEndpointPath: ""
  }) {
    super.init(url, name);
    this.updateEndpointPath = settings.updateEndpointPath || ":id";
    this.deleteEndpointPath = settings.deleteEndpointPath || ":id";
    this.findAllEndpointPath = settings.findEndpointPath || "";
    this.createEndpointPath = settings.createEndpointPath || ":id";
    this.findEndpointPath = settings.findEndpointPath || ":id";
    this.syncEndpointPath = settings.syncEndpointPath || "";
  }
  async sync() {
    try {
      const createURL = new URL(this.uri ?? "");
      createURL.pathname = createURL.pathname + "/" + this.findAllEndpointPath;
      const res = await fetch(createURL, { method: "HEAD" });
      if (res.ok) {
        const resArr = [];
        const data = await res.json();
        for (const entity of data) {
          resArr.push({
            name: entity.name,
            uri: new URL(entity.url),
            data: null
          });
        }
        return resArr;
      } else {
        throw new Error(res.statusText);
      }
    } catch (e) {
      console.log(e);
      throw new Error("Resource could not find entities");
    }
  }
  async create(e) {
    try {
      const createURL = new URL(this.uri ?? "");
      const entityPath = e.uri.pathname;
      createURL.pathname = createURL.pathname + "/" + this.createEndpointPath?.replace(":id", entityPath);
      const res = await fetch(createURL, { method: "GET", body: e.data });
      if (res.ok) {
        return true;
      } else {
        throw new Error(res.statusText);
      }
    } catch (e2) {
      console.log(e2);
      return new Error("Resource could not created");
    }
  }
  async delete(e) {
    try {
      const createURL = new URL(this.uri ?? "");
      const entityPath = e.uri.pathname;
      createURL.pathname = createURL.pathname + "/" + this.deleteEndpointPath?.replace(":id", entityPath);
      const res = await fetch(createURL, { method: "DELETE" });
      if (res.ok) {
        return true;
      } else {
        throw new Error(res.statusText);
      }
    } catch (e2) {
      console.log(e2);
      return new Error("Resource could not deleted");
    }
  }
  async findAll() {
    try {
      const createURL = new URL(this.uri ?? "");
      createURL.pathname = createURL.pathname + "/" + this.findAllEndpointPath;
      const res = await fetch(createURL, { method: "GET" });
      if (res.ok) {
        const resArr = [];
        const data = await res.json();
        for (const entity of data) {
          resArr.push({
            name: entity.name,
            uri: new URL(entity.url),
            data: null
          });
        }
        return resArr;
      } else {
        throw new Error(res.statusText);
      }
    } catch (e) {
      console.log(e);
      throw new Error("Resource could not find entities");
    }
  }
  async getEntityByUri(uri) {
    try {
      const getURL = new URL(this.uri ?? "");
      const entityPath = uri.pathname;
      getURL.pathname = getURL.pathname + "/" + this.findEndpointPath?.replace(":id", entityPath);
      const res = await fetch(getURL, { method: "GET" });
      if (res.ok) {
        const data = await res.json();
        const resArr = {
          name: entityPath,
          uri: getURL,
          data
        };
        return resArr;
      } else {
        throw new Error(res.statusText);
      }
    } catch (e) {
      console.log(e);
      throw new Error("Resource could not find entities");
    }
  }
  async update(e) {
    try {
      const createURL = new URL(this.uri ?? "");
      const entityPath = e.uri.pathname;
      createURL.pathname = createURL.pathname + "/" + this.updateEndpointPath?.replace(":id", entityPath);
      const res = await fetch(createURL, { method: "DELETE" });
      if (res.ok) {
        return true;
      } else {
        throw new Error(res.statusText);
      }
    } catch (e2) {
      console.log(e2);
      return new Error("Resource could not deleted");
    }
  }
}
const REST_REPOSITORY = "RestRepository";
const identifier = Symbol.for(REST_REPOSITORY);
function activate$1({ services }) {
  services.register(REST_REPOSITORY, new RestRepositoryImpl());
  const repoRegistry = services.getRequired("RepositoryRegistry");
  repoRegistry.registerRepoType(RestRepositoryImpl.type, identifier);
}
function deactivate$1({ services }) {
  services.unregister(REST_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  deactivate: deactivate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.persistence.rest";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.persistence.rest");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
