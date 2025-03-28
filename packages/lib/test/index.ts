import { TinyEmitter } from "tiny-emitter";
import { Container } from "inversify";
import variables from "org.eclipse.daanse.board.app.lib.variables";
import core from "org.eclipse.daanse.board.app.lib.core";
import connectionFactory from "org.eclipse.daanse.board.app.lib.factory.connection";
import connectionRepository from "org.eclipse.daanse.board.app.lib.repository.connection";
import datasourceRepository from "org.eclipse.daanse.board.app.lib.repository.datasource";
import datasourceFactory from "org.eclipse.daanse.board.app.lib.factory.datasource";

const { identifiers } = core;

const container = new Container();

container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
    console.log(ctx);
    return ctx as Container
});
container.get(identifiers.CONTAINER);
container.bind(identifiers.TINY_EMITTER).toConstantValue(new TinyEmitter());

variables.init(container);
connectionFactory.init(container);
connectionRepository.init(container);
datasourceRepository.init(container);
datasourceFactory.init(container);

const vs = container.get(variables.SERVICE_IDENTIFIER.VariableStorage);
const cf = container.get<connectionFactory.ConnectionFactory>(connectionFactory.SERVICE_IDENTIFIER.ConnectionFactory);
const cr = container.get<connectionRepository.ConnectionRepository>(connectionRepository.SERVICE_IDENTIFIER.ConnectionRepository);
const dsr = container.get<datasourceRepository.DatasourceRepository>(datasourceRepository.SERVICE_IDENTIFIER.DatasourceRepository);
const dsf = container.get<datasourceFactory.DatasourceFactory>(datasourceFactory.SERVICE_IDENTIFIER.DatasourceFactory);

// console.log(cr);
// console.log(cf);

// cf.createConnection();

