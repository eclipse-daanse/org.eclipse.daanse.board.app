import { ComputedString } from "./variables/ComputedString";
import { Container } from "inversify";
import { VariableStorage } from "./storage/VariablesStorage";

const SERVICE_IDENTIFIER = {
    VariableStorage: Symbol.for("VariableStorage"),
    ComputedString: Symbol.for("ComputedString"),
}

const init = (container: Container) => {
    console.log('Variables module initialized');
    container.bind<VariableStorage>(SERVICE_IDENTIFIER.VariableStorage).to(VariableStorage).inSingletonScope();
    container.bind<ComputedString>(SERVICE_IDENTIFIER.ComputedString).to(ComputedString).inTransientScope();
}

export {
    VariableStorage,
    init,
    ComputedString,
    SERVICE_IDENTIFIER
}