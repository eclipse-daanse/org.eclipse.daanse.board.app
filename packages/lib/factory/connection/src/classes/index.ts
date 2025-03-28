import { injectable, inject, Container } from "inversify";
import { VariableStorage, SERVICE_IDENTIFIER as VariableIdentifiers } from "org.eclipse.daanse.board.app.lib.variables";
import { identifiers } from "org.eclipse.daanse.board.app.lib.core";
import { ConnectionRepository, SERVICE_IDENTIFIER as ConnectionIdentifiers } from "org.eclipse.daanse.board.app.lib.repository.connection";

@injectable()
export class ConnectionFactory {

    constructor(
        @inject(identifiers.CONTAINER) private container: Container,
        // @inject(DatasourceRepository) private datasourceRepository: DatasourceRepository,
        @inject(VariableIdentifiers.VariableStorage) private variableStorage: VariableStorage
    ) {
        console.log('ConnectionFactory initialized', container, variableStorage);
    }

    createConnection<T>(identifier: symbol, configuration: any): T {
        const ctor = this.container.get<ConnectionConstructor<T>>(identifier);

        const connectionRepo = this.container.get<ConnectionRepository>(ConnectionIdentifiers.ConnectionRepository);

        if (ctor.validateConfiguration(configuration)) {
            return new ctor({
                // connectionRepository: this.connectionRepository,
                // datasourceRepository: this.datasourceRepository,
                connectionRepository: connectionRepo,
                datasourceRepository: null,
                variableStorage: this.variableStorage,
                ...configuration
            });
        } else {
            console.warn('Invalid configuration', configuration);
            return null as unknown as T;
        }
    }
}