const { ref } = __tsm__.require("vue");
const { defineStore } = __tsm__.require("pinia");
let repository;
function provideRepository(instance) {
  repository = instance;
}
function requireRepository() {
  if (!repository) {
    throw new Error("ConnectionRepository not provided - is the ui.vue.stores.connection module active?");
  }
  return repository;
}
const useConnectionsStore = defineStore("connections", () => {
  const connections = ref([
    {
      uid: "test",
      name: "Test Connection 01",
      type: "rest",
      config: {
        url: "https://jsonplaceholder.typicode.com/"
      }
    }
  ]);
  const connectionRepository = requireRepository();
  const createConnection = (type, config = {}) => {
    const uid = Math.random().toString(36).substring(7);
    const name = "Connection " + uid;
    config["name"] = name;
    config["type"] = type;
    config["uid"] = uid;
    connectionRepository.registerConnection(uid, type, config);
    connections.value.push({ uid, type, name, config });
    return uid;
  };
  const removeConnection = (connectionId) => {
    const index = connections.value.findIndex((c) => c.uid === connectionId);
    if (index > -1) {
      connections.value.splice(index, 1);
    }
  };
  const updateConnection = (connectionId, connectionProxy) => {
    const connection = connections.value.find((c) => c.uid === connectionId);
    if (!connection) return;
    connection.uid = connectionProxy.uid;
    connection.type = connectionProxy.type;
    connection.name = connectionProxy.name;
    connection.config = connectionProxy.config;
    connection.config["name"] = connectionProxy.name;
    connection.config["type"] = connectionProxy.type;
    connection.config["uid"] = connectionProxy.uid;
    connectionRepository.registerConnection(connectionId, connection.type, connection.config);
    console.log(connectionRepository);
  };
  const updateConnections = (connectionProxies) => {
    connections.value.splice(0);
    connectionProxies.forEach((connectionProxy) => {
      connections.value.push(connectionProxy);
      connectionProxy.config["name"] = connectionProxy.name;
      connectionProxy.config["type"] = connectionProxy.type;
      connectionProxy.config["uid"] = connectionProxy.uid;
      connectionRepository.registerConnection(
        connectionProxy.uid,
        connectionProxy.type,
        connectionProxy.config
      );
    });
  };
  return { connections, createConnection, removeConnection, updateConnection, updateConnections };
});
function activate$1({ services }) {
  provideRepository(services.getRequired("ConnectionRepository"));
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  useConnectionsStore
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.stores.connection";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.stores.connection");
  await activate$1?.(context);
}
async function deactivate(context) {
  await void 0;
}
export {
  activate,
  deactivate,
  useConnectionsStore
};
