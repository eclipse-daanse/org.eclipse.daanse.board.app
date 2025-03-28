import { DatasourceFactory } from "./classes"
import { Container } from "inversify";

const SERVICE_IDENTIFIER = {
    DatasourceFactory: Symbol.for("DatasourceFactory"),
}

const init = (container: Container) => {
    console.log("Datasource factory module initialized");
    container.bind<DatasourceFactory>(SERVICE_IDENTIFIER.DatasourceFactory).to(DatasourceFactory).inSingletonScope();
}

export { DatasourceFactory, init, SERVICE_IDENTIFIER };
