const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { BaseConnection } = __tsm__.require("org.eclipse.daanse.board.app.lib.connection.base");
class RestConnection extends BaseConnection {
  url = "";
  cacheEnabled = false;
  cacheTTL = 3e4;
  // 30 seconds default
  cache = /* @__PURE__ */ new Map();
  pendingRequests = /* @__PURE__ */ new Map();
  constructor() {
    super();
  }
  init(configuration) {
    super.init(configuration);
    this.url = configuration.url;
    this.cacheEnabled = configuration.cacheEnabled ?? false;
    this.cacheTTL = configuration.cacheTTL ?? 3e4;
  }
  getCacheKey(url, options) {
    const method = options?.method || "GET";
    const body = options?.body ? JSON.stringify(options.body) : "";
    return `${method}:${url}:${body}`;
  }
  isValidCacheEntry(entry) {
    return Date.now() - entry.timestamp < this.cacheTTL;
  }
  cleanExpiredCache() {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp >= this.cacheTTL) {
        this.cache.delete(key);
      }
    }
  }
  clearCache() {
    this.cache.clear();
  }
  fetch(config, options) {
    const fullUrl = this.url + config.url;
    const cacheKey = this.getCacheKey(fullUrl, options);
    const method = options?.method || "GET";
    const shouldCache = this.cacheEnabled && method === "GET";
    if (shouldCache) {
      const cachedEntry = this.cache.get(cacheKey);
      if (cachedEntry && this.isValidCacheEntry(cachedEntry)) {
        const clonedResponse = new Response(JSON.stringify(cachedEntry.body), {
          status: cachedEntry.response.status,
          statusText: cachedEntry.response.statusText,
          headers: cachedEntry.response.headers
        });
        return Promise.resolve(clonedResponse);
      }
      const pendingRequest = this.pendingRequests.get(cacheKey);
      if (pendingRequest) {
        return pendingRequest.then((response) => response.clone());
      }
    }
    const requestPromise = fetch(fullUrl, options).then(async (response) => {
      if (shouldCache && response.ok) {
        const clonedResponse = response.clone();
        try {
          const body = await clonedResponse.json();
          this.cache.set(cacheKey, {
            response: response.clone(),
            body,
            timestamp: Date.now()
          });
        } catch {
        }
      }
      return response;
    }).finally(() => {
      this.pendingRequests.delete(cacheKey);
      if (this.cache.size > 100) {
        this.cleanExpiredCache();
      }
    });
    if (shouldCache) {
      this.pendingRequests.set(cacheKey, requestPromise);
    }
    return requestPromise;
  }
  setConfig() {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(configuration) {
    if (!configuration.url) {
      return false;
    }
    return true;
  }
}
const REST_CONNECTION_FACTORY = serviceId("RestConnectionFactory");
const factorySymbol = Symbol.for(REST_CONNECTION_FACTORY);
function createRestConnection(config) {
  if (!RestConnection.validateConfiguration(config)) {
    throw new Error(
      "Invalid RestConnection configuration. Please provide a valid configuration."
    );
  }
  const connection = new RestConnection();
  connection.init(config);
  return connection;
}
function activate$1({ services }) {
  services.register(REST_CONNECTION_FACTORY, createRestConnection);
}
function deactivate$1({ services }) {
  services.unregister(REST_CONNECTION_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REST_CONNECTION_FACTORY,
  RestConnection,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.connection.rest";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.connection.rest");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  REST_CONNECTION_FACTORY,
  RestConnection,
  activate,
  deactivate,
  factorySymbol
};
