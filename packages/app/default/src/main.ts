/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
 */


import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'



import { init } from "org.eclipse.daanse.board.app.lib.module1";
import { container } from "org.eclipse.daanse.board.app.lib.core";


init(container);


const app = createApp(App)

// app.use(createPinia())
// app.use(router)

app.mount('#app')
