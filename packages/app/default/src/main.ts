import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { register } from "org.eclipse.daanse.board.app.lib.module1";
import { container } from "org.eclipse.daanse.board.app.lib.core";

register(container);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
