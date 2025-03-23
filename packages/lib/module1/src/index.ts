/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

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