import type { Container } from "inversify";

class Module1 {
    private string = "Hello from module 1";

    constructor() {
        console.log("Module1 inited");
    }

    getString() {
        return this.string;
    }
}

const register = (container: Container) => {
    const instance = new Module1();
    container.bind("Default").toConstantValue(instance);
}

export {
    register
}