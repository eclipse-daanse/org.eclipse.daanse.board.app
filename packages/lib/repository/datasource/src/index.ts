import type { Container } from "inversify";
import DatasourceRepository from "./classes";

const SERVICE_IDENTIFIER = {
    DatasourceRepository: Symbol.for("DatasourceRepository"),
}

const init = (container: Container) => {
    console.log('Datasource repository module initialized');
    container.bind<DatasourceRepository>(SERVICE_IDENTIFIER.DatasourceRepository).to(DatasourceRepository).inSingletonScope();
}

export {
    DatasourceRepository,
    init,
    SERVICE_IDENTIFIER
}