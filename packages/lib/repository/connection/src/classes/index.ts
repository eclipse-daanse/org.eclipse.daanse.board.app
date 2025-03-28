
import { ConnectionFactory, SERVICE_IDENTIFIER } from "org.eclipse.daanse.board.app.lib.factory.connection";
import { inject, injectable } from "inversify";

const connections = new Map<string, IConnection | PubSubConnection>();

@injectable()
export default class ConnectionRepository implements IConnectionRepository {
  private availableConnections: Record<string, ConnectionIdentifiers> = {};

  constructor(
    @inject(SERVICE_IDENTIFIER.ConnectionFactory) private connectionFactory: ConnectionFactory,
  ) {
  }

  removeConnection(connectionId: string): void {
    if (connections.has(connectionId)) {
      connections.delete(connectionId);
    }
  }

  getConnection(connectionId: string): IConnection | PubSubConnection {
    const connection = connections.get(connectionId);
    if (!connection) throw new Error(`Connection with id ${connectionId} not found`);

    return connection;
  }

  registerConnectionType(name: string, identifiers: ConnectionIdentifiers): void {
    this.availableConnections[name] = identifiers;
  }

  get registeredConnections(): string[] {
    return Object.keys(this.availableConnections);
  }

  getConnectionIdentifiers(type: string): ConnectionIdentifiers {
    return this.availableConnections[type];
  }

  registerConnection(connectionId: string, type: string, connectionConfig: IConnectionConfig): void {
    const identifiers = this.availableConnections[type];

    if (identifiers) {
      const connection = this.connectionFactory.createConnection<IConnection | PubSubConnection>(identifiers.Connection, connectionConfig);
      connections.set(connectionId, connection);
    }
  }
}
