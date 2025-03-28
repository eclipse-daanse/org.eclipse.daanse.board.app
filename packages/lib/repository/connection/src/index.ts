import type { Container } from "inversify";
import ConnectionRepository from "./classes";

const SERVICE_IDENTIFIER = {
    ConnectionRepository: Symbol.for("ConnectionRepository"),
}

const init = (container: Container) => {
    console.log('Connection repository module initialized');
    container.bind<ConnectionRepository>(SERVICE_IDENTIFIER.ConnectionRepository).to(ConnectionRepository).inSingletonScope();
}

export {
    ConnectionRepository,
    init,
    SERVICE_IDENTIFIER
}