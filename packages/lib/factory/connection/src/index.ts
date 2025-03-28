import { Container } from "inversify";
import { ConnectionFactory } from "./classes";

const SERVICE_IDENTIFIER = {
    ConnectionFactory: Symbol.for("ConnectionFactory"),
}

const init = (container: Container) => {
    console.log('Connection module initialized');
    container.bind<ConnectionFactory>(SERVICE_IDENTIFIER.ConnectionFactory).to(ConnectionFactory).inSingletonScope();
}

export { ConnectionFactory, init, SERVICE_IDENTIFIER };