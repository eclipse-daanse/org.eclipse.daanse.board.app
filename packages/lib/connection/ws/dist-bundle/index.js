const { TwoWayConnection } = __tsm__.require("org.eclipse.daanse.board.app.lib.connection.twowayconnection");
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class WSConnection extends TwoWayConnection {
  socket = null;
  constructor() {
    super();
  }
  init(configuration) {
    this.socket = new WebSocket(configuration.url);
    this.socket.onopen = () => {
      super.onConnect();
    };
    this.socket.onmessage = (event) => {
      super.onMessage(event.data);
    };
    this.socket.onclose = () => {
      super.onClose();
    };
    this.socket.onerror = (error) => {
      super.onError(error);
    };
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
  hasTopics() {
    return false;
  }
}
const WSCONNECTION_FACTORY = serviceId("WSConnectionFactory");
const factorySymbol = Symbol.for(WSCONNECTION_FACTORY);
function createWSConnection(config) {
  if (!WSConnection.validateConfiguration(config)) {
    throw new Error(
      "Invalid WSConnection configuration. Please provide a valid configuration."
    );
  }
  const connection = new WSConnection();
  connection.init(config);
  return connection;
}
function activate$1({ services }) {
  services.register(WSCONNECTION_FACTORY, createWSConnection);
}
function deactivate$1({ services }) {
  services.unregister(WSCONNECTION_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WSCONNECTION_FACTORY,
  WSConnection,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.connection.websocket";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.connection.websocket");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  WSCONNECTION_FACTORY,
  WSConnection,
  activate,
  deactivate,
  factorySymbol
};
