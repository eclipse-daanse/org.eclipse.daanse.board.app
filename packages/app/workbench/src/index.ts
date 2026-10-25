/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/*
 * The MDX workbench as a frame of its own: the launcher registers this
 * bundle instead of the board shell when the page is /workbench. Like the
 * shell it creates the Vue application, provides it as 'App' and bridges
 * every service into Vue's injection, so the components it borrows from the
 * XMLA and LSP bundles find what they inject - the connection repository,
 * the datasource repository - exactly as they do in the shell.
 */

import { APP } from 'org.eclipse.daanse.board.app.lib.core'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { createApp, type App as VueApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import { createWorkbench, WORKBENCH } from './state/workbench'
import { registerAnswerSource } from './state/answer'
import { DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'

let app: VueApp | undefined
let dispose: (() => void) | undefined

export async function activate({ services, log }: ActivationContext) {
  app = createApp(App)
  /*
   * The workbench has one screen and no routes of its own, but the widgets
   * and plugins it borrows read the route (a page id, say). A router in
   * memory answers them without touching the address bar.
   */
  app.use(
    createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/:any(.*)*', component: { render: () => null } }],
    }),
  )

  const registry = services as ActivationContext['services'] & {
    addListener?(l: { onServiceEvent(e: { serviceId: string }): void }): void
  }
  const provide = (id: string) => {
    const service = services.get(id)
    app?.provide(id, service)
    app?.provide(Symbol.for(id), service)
  }
  for (const id of services.getServiceIds()) provide(id)
  registry.addListener?.({ onServiceEvent: (event) => provide(event.serviceId) })

  services.register(APP, app)

  // Before the app mounts: the chart view builds its source on mounting.
  const dropAnswerSource = registerAnswerSource(services, services.getRequired(DATASOURCE_REPOSITORY))
  const workbench = createWorkbench(services, log)
  dispose = () => {
    workbench.dispose()
    dropAnswerSource()
  }
  app.provide(WORKBENCH, workbench)

  app.mount('#app')
  log.info('workbench mounted')
}

export function deactivate() {
  dispose?.()
  dispose = undefined
  app?.unmount()
  app = undefined
}

/* Its texts - collected by lib.i18next, see src/i18n. */
export { WorkbenchTranslations } from './i18n'
