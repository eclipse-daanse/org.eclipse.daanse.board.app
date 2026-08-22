const connections = /* @__PURE__ */ new Map();
class ConnectionRepository {
  constructor(resolver) {
    this.resolver = resolver;
  }
  /**
   * Resolves one of the identifiers a registered type entry carries
   * (Connection factory, Settings component). All of them are created with
   * Symbol.for, so the symbol's description IS the service id.
   */
  resolveIdentifier(identifier2) {
    return this.resolver.getRequired(identifier2.description);
  }
  availableConnections = {};
  connectionsByType = {};
  removeConnection(connectionId) {
    if (connections.has(connectionId)) {
      connections.delete(connectionId);
    }
  }
  getConnection(connectionId) {
    const connection = connections.get(connectionId);
    if (!connection)
      throw new Error(`Connection with id ${connectionId} not found`);
    return connection;
  }
  registerConnectionType(name, identifiers) {
    this.availableConnections[name] = identifiers;
  }
  /**
   * Nimmt die Registrierung eines Verbindungstyps zurück.
   *
   * Gegenstück zu registerConnectionType, damit ein Modul seine
   * Registrierung in deactivate() wieder aufheben kann. Betrifft nur den
   * Typ; bestehende Verbindungen werden über removeConnection entfernt.
   *
   * @returns ob der Typ registriert war
   */
  unregisterConnectionType(name) {
    if (!(name in this.availableConnections)) {
      return false;
    }
    delete this.availableConnections[name];
    return true;
  }
  get registeredConnections() {
    return Object.keys(this.availableConnections);
  }
  getConnectionIdentifiers(type) {
    return this.availableConnections[type];
  }
  getRegisteredTypes() {
    return Object.keys(this.availableConnections);
  }
  getConnectionType(connectionId) {
    return this.connectionsByType[connectionId];
  }
  getConnectionId(connection) {
    let key;
    connections.forEach((aconnection, akey) => {
      if (connection === aconnection) {
        key = akey;
      }
    });
    return key;
  }
  getConnectionTypeFromConnection(connection) {
    const id = this.getConnectionId(connection);
    if (!id) return void 0;
    return this.getConnectionType(id);
  }
  registerConnection(connectionId, type, connectionConfig) {
    const identifiers = this.availableConnections[type];
    if (identifiers) {
      const connectionFactory = this.resolveIdentifier(identifiers.Connection);
      const connection = connectionFactory(connectionConfig);
      connections.set(connectionId, connection);
      this.connectionsByType[connectionId] = type;
    }
  }
}
const CONNECTION_REPOSITORY = "ConnectionRepository";
const identifier = Symbol.for(CONNECTION_REPOSITORY);
function activate$1({ services }) {
  services.register(CONNECTION_REPOSITORY, new ConnectionRepository(services));
}
function deactivate$1({ services }) {
  services.unregister(CONNECTION_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONNECTION_REPOSITORY,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.repository.connection";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.repository.connection");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  CONNECTION_REPOSITORY,
  activate,
  deactivate,
  identifier
};
