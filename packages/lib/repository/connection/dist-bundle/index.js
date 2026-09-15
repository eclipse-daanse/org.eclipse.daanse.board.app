import { WORKSPACE, ConnectionImpl } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { CONNECTION_REPOSITORY, identifier } from "org.eclipse.daanse.board.app.lib.api.connection";
import { CONNECTION_REPOSITORY as CONNECTION_REPOSITORY2, identifier as identifier2 } from "org.eclipse.daanse.board.app.lib.api.connection";
const connections = /* @__PURE__ */ new Map();
class ConnectionRepository {
  constructor(resolver) {
    this.resolver = resolver;
  }
  /*
   * Resolved on first use, not in the constructor: this repository is
   * created while its own module activates, and the workspace may not be
   * registered yet at that point.
   */
  workspaceHeld;
  get workspace() {
    if (!this.workspaceHeld) {
      this.workspaceHeld = this.resolver.getRequired(WORKSPACE);
    }
    return this.workspaceHeld;
  }
  /**
   * Resolves one of the identifiers a registered type entry carries
   * (Connection factory, Settings component). All of them are created with
   * Symbol.for, so the symbol's description IS the service id.
   */
  resolveIdentifier(identifier3) {
    return this.resolver.getRequired(identifier3.description);
  }
  availableConnections = {};
  connectionsByType = {};
  /**
   * Takes a connection out of the workspace and lets go of its live object.
   *
   * Both halves, because both existed: the live object used to be left
   * registered when a connection was deleted, since the removal happened in
   * a store that knew nothing about it.
   */
  removeConnection(connectionId) {
    connections.delete(connectionId);
    this.connectionsByType[connectionId] = void 0;
    const held = this.workspace.connections;
    const at = held.toArray().findIndex((connection) => connection.uid === connectionId);
    if (at > -1) held.removeAt(at);
  }
  getConnections() {
    return this.workspace.connections.toArray();
  }
  getConnectionModel(connectionId) {
    return this.getConnections().find((connection) => connection.uid === connectionId);
  }
  createConnection(type, config = {}) {
    const connection = new ConnectionImpl();
    connection.uid = Math.random().toString(36).substring(7);
    connection.name = "Connection " + connection.uid;
    connection.type = type;
    connection.config = config;
    this.workspace.connections.push(connection);
    try {
      this.saveConnection(connection);
    } catch (error) {
      console.warn(`connection ${connection.uid} is not live yet:`, error);
    }
    return connection;
  }
  /**
   * Rebuilds the live object from a connection that was changed.
   *
   * The uid, name and type are copied into the config because that is where
   * a connection's own init() reads them - the one place that happens now,
   * rather than at each caller.
   */
  saveConnection(connection) {
    const config = connection.config ?? {};
    config["uid"] = connection.uid;
    config["name"] = connection.name;
    config["type"] = connection.type;
    connection.config = config;
    if (!connection.type) return;
    this.registerConnection(
      connection.uid,
      connection.type,
      config
    );
  }
  /**
   * Builds a live object for every connection the workspace holds.
   *
   * What a loaded workspace needs: the model came out of a file, the
   * things that talk to endpoints did not.
   */
  rebuildLive() {
    for (const connection of this.getConnections()) this.saveConnection(connection);
  }
  setConnections(stored) {
    const held = this.workspace.connections;
    for (const connection of held.toArray()) {
      this.removeConnection(connection.uid);
    }
    held.clear();
    for (const entry of stored) {
      const connection = new ConnectionImpl();
      connection.uid = entry.uid;
      connection.name = entry.name;
      connection.type = entry.type;
      connection.config = entry.config ?? {};
      held.push(connection);
      this.saveConnection(connection);
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
    if (!identifiers) {
      console.warn(
        `Connection "${connectionId}" not registered: no connection type "${type}". Known types: ${Object.keys(this.availableConnections).join(", ") || "none"}`
      );
      return;
    }
    const connectionFactory = this.resolveIdentifier(identifiers.Connection);
    const connection = connectionFactory(connectionConfig);
    connections.set(connectionId, connection);
    this.connectionsByType[connectionId] = type;
  }
}
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
  CONNECTION_REPOSITORY2 as CONNECTION_REPOSITORY,
  activate,
  deactivate,
  identifier2 as identifier
};
