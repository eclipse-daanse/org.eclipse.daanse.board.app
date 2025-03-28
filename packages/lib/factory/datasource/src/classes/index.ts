import { injectable, inject, Container } from "inversify";
import { VariableStorage, SERVICE_IDENTIFIER as VariableIdentifiers } from "org.eclipse.daanse.board.app.lib.variables";
import { identifiers } from "org.eclipse.daanse.board.app.lib.core";
import { ConnectionRepository, SERVICE_IDENTIFIER as ConnectionIdentifiers } from "org.eclipse.daanse.board.app.lib.repository.connection";
import { DatasourceRepository, SERVICE_IDENTIFIER as DatasourceIdentifiers } from "org.eclipse.daanse.board.app.lib.repository.datasource";


export class DatasourceFactory {
    constructor(
        @inject(identifiers.CONTAINER) private container: Container,
        @inject(VariableIdentifiers.VariableStorage) private variableStorage: VariableStorage

    ) {
        console.log('DatasourceFactory initialized');
    }
    
    createDatasource<T>(identifier: symbol, configuration: any): T {
        const ctor = this.container.get<StoreConstructor<T>>(identifier);

        const connectionRepo = this.container.get(ConnectionIdentifiers.ConnectionRepository);
        // const datasourceRepo = this.container.get(SERVICE_IDENTIFIER.DatasourceRepository);

        if (ctor.validateConfiguration(configuration)) {
            return new ctor({
                connectionRepository: connectionRepo,
                datasourceRepository: null, // datasourceRepo,
                variableStorage: this.variableStorage,
                ...configuration
            });
        } else {
            console.warn('Invalid configuration', configuration);
            return null as unknown as T;
        }
    }
}