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

import type { ModuleManifest } from '@eclipse-daanse/tsm'
import platformSystem from 'org.eclipse.daanse.board.app.platform.system/manifest.json'
import libVariables from 'org.eclipse.daanse.board.app.lib.variables/manifest.json'
import storesConnection from 'org.eclipse.daanse.board.app.ui.vue.stores.connection/manifest.json'
import storesDatasource from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce/manifest.json'
import m0 from 'org.eclipse.daanse.board.app.lib.composer.chart/manifest.json'
import m1 from 'org.eclipse.daanse.board.app.lib.composer.datatable/manifest.json'
import m2 from 'org.eclipse.daanse.board.app.lib.composer.kpi/manifest.json'
import m3 from 'org.eclipse.daanse.board.app.lib.composer.ogc/manifest.json'
import m4 from 'org.eclipse.daanse.board.app.lib.composer.ogcsta2chart/manifest.json'
import m5 from 'org.eclipse.daanse.board.app.lib.composer.weather/manifest.json'
import m6 from 'org.eclipse.daanse.board.app.lib.connection.graphql/manifest.json'
import m7 from 'org.eclipse.daanse.board.app.lib.connection.mqtt/manifest.json'
import m8 from 'org.eclipse.daanse.board.app.lib.connection.rest/manifest.json'
import m9 from 'org.eclipse.daanse.board.app.lib.connection.rss/manifest.json'
import m10 from 'org.eclipse.daanse.board.app.lib.connection.websocket/manifest.json'
import m11 from 'org.eclipse.daanse.board.app.lib.connection.xmla/manifest.json'
import m12 from 'org.eclipse.daanse.board.app.lib.datasource.csv/manifest.json'
import m13 from 'org.eclipse.daanse.board.app.lib.datasource.graphql/manifest.json'
import m14 from 'org.eclipse.daanse.board.app.lib.datasource.kpi_tmp/manifest.json'
import m15 from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/manifest.json'
import m16 from 'org.eclipse.daanse.board.app.lib.datasource.rest/manifest.json'
import m17 from 'org.eclipse.daanse.board.app.lib.datasource.rss/manifest.json'
import m18 from 'org.eclipse.daanse.board.app.lib.datasource.sparql/manifest.json'
import m19 from 'org.eclipse.daanse.board.app.lib.datasource.sql_xmla/manifest.json'
import m20 from 'org.eclipse.daanse.board.app.lib.datasource.valhalla/manifest.json'
import m21 from 'org.eclipse.daanse.board.app.lib.datasource.websocket/manifest.json'
import m22 from 'org.eclipse.daanse.board.app.lib.datasource.xmla/manifest.json'
import m23 from 'org.eclipse.daanse.board.app.lib.events/manifest.json'
import m24 from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper/manifest.json'
import m25 from 'org.eclipse.daanse.board.app.lib.i18next/manifest.json'
import m26 from 'org.eclipse.daanse.board.app.lib.logger/manifest.json'
import m27 from 'org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service/manifest.json'
import m28 from 'org.eclipse.daanse.board.app.lib.persistence.git/manifest.json'
import m29 from 'org.eclipse.daanse.board.app.lib.persistence.loader/manifest.json'
import m30 from 'org.eclipse.daanse.board.app.lib.persistence.local/manifest.json'
import m31 from 'org.eclipse.daanse.board.app.lib.persistence.rest/manifest.json'
import m32 from 'org.eclipse.daanse.board.app.lib.persistence.util/manifest.json'
import m33 from 'org.eclipse.daanse.board.app.lib.repository.connection/manifest.json'
import m34 from 'org.eclipse.daanse.board.app.lib.repository.datasource/manifest.json'
import m35 from 'org.eclipse.daanse.board.app.lib.repository.layout.page/manifest.json'
import m36 from 'org.eclipse.daanse.board.app.lib.repository.navigation/manifest.json'
import m37 from 'org.eclipse.daanse.board.app.lib.repository.page/manifest.json'
import m38 from 'org.eclipse.daanse.board.app.lib.repository.persistence/manifest.json'
import m39 from 'org.eclipse.daanse.board.app.lib.repository.route/manifest.json'
import m40 from 'org.eclipse.daanse.board.app.lib.repository.variable/manifest.json'
import m41 from 'org.eclipse.daanse.board.app.lib.repository.widget/manifest.json'
import m42 from 'org.eclipse.daanse.board.app.lib.settings.manager/manifest.json'
import m43 from 'org.eclipse.daanse.board.app.ui.vue.eventmanager/manifest.json'
import m44 from 'org.eclipse.daanse.board.app.ui.vue.lang.common.en/manifest.json'
import m45 from 'org.eclipse.daanse.board.app.ui.vue.lang.icon.en/manifest.json'
import m46 from 'org.eclipse.daanse.board.app.ui.vue.lang.image.en/manifest.json'
import m47 from 'org.eclipse.daanse.board.app.ui.vue.lang.page.en/manifest.json'
import m48 from 'org.eclipse.daanse.board.app.ui.vue.lang.progress.en/manifest.json'
import m49 from 'org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en/manifest.json'
import m50 from 'org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en/manifest.json'
import m51 from 'org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en/manifest.json'
import m52 from 'org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en/manifest.json'
import m53 from 'org.eclipse.daanse.board.app.ui.vue.lang.video.en/manifest.json'
import m54 from 'org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en/manifest.json'
import m55 from 'org.eclipse.daanse.board.app.ui.vue.layouts.base/manifest.json'
import m56 from 'org.eclipse.daanse.board.app.ui.vue.layouts.grid/manifest.json'
import m57 from 'org.eclipse.daanse.board.app.ui.vue.page_provider/manifest.json'
import m58 from 'org.eclipse.daanse.board.app.ui.vue.persistence.git/manifest.json'
import m59 from 'org.eclipse.daanse.board.app.ui.vue.plugins.i18next/manifest.json'
import m60 from 'org.eclipse.daanse.board.app.ui.vue.variable.computed/manifest.json'
import m61 from 'org.eclipse.daanse.board.app.ui.vue.variable.constant/manifest.json'
import m62 from 'org.eclipse.daanse.board.app.ui.vue.variable.timepicker/manifest.json'

/**
 * Modules still statically bundled with the host, but run by the tsm
 * ModuleLoader: the host resolves their containers (entryResolver), the
 * loader does everything else - ordering via requiresService and the
 * unsatisfied state, lifecycle, scoped registrations.
 *
 * This replaced the hand-run ModuleBootstrapper. An entry leaves this list
 * by becoming a URL bundle in bundles.ts; the manifest at the package stays
 * the same, only `entry` starts pointing at a real URL.
 */
export const preloadedModules: Array<[ModuleManifest, () => Promise<unknown>]> = [
  // System bundle: owns the application-wide base services (event bus)
  [platformSystem as ModuleManifest, () => import('org.eclipse.daanse.board.app.platform.system')],
  // Freed from import-time bindings in the service-locator cleanup
  [libVariables as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.variables')],
  // Store packages: their activate hands the repositories into the pinia closures
  [storesConnection as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.stores.connection')],
  [storesDatasource as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.stores.datasouce')],
  [m0 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.composer.chart')],
  [m1 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.composer.datatable')],
  [m2 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.composer.kpi')],
  [m3 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.composer.ogc')],
  [m4 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.composer.ogcsta2chart')],
  [m5 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.composer.weather')],
  [m6 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.connection.graphql')],
  [m7 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.connection.mqtt')],
  [m8 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.connection.rest')],
  [m9 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.connection.rss')],
  [m10 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.connection.websocket')],
  [m11 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.connection.xmla')],
  [m12 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.csv')],
  [m13 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.graphql')],
  [m14 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.kpi_tmp')],
  [m15 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.ogcsta')],
  [m16 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.rest')],
  [m17 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.rss')],
  [m18 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.sparql')],
  [m19 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.sql_xmla')],
  [m20 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.valhalla')],
  [m21 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.websocket')],
  [m22 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.datasource.xmla')],
  [m23 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.events')],
  [m24 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.factory.variableWrapper')],
  [m25 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.i18next')],
  [m26 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.logger')],
  [m27 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service')],
  [m28 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.persistence.git')],
  [m29 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.persistence.loader')],
  [m30 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.persistence.local')],
  [m31 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.persistence.rest')],
  [m32 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.persistence.util')],
  [m33 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.connection')],
  [m34 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.datasource')],
  [m35 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.layout.page')],
  [m36 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.navigation')],
  [m37 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.page')],
  [m38 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.persistence')],
  [m39 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.route')],
  [m40 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.variable')],
  [m41 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.repository.widget')],
  [m42 as ModuleManifest, () => import('org.eclipse.daanse.board.app.lib.settings.manager')],
  [m43 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.eventmanager')],
  [m44 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.common.en')],
  [m45 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.icon.en')],
  [m46 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.image.en')],
  [m47 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.page.en')],
  [m48 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.progress.en')],
  [m49 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en')],
  [m50 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en')],
  [m51 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en')],
  [m52 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en')],
  [m53 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.video.en')],
  [m54 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en')],
  [m55 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.layouts.base')],
  [m56 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.layouts.grid')],
  [m57 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.page_provider')],
  [m58 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.persistence.git')],
  [m59 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.plugins.i18next')],
  [m60 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.variable.computed')],
  [m61 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.variable.constant')],
  [m62 as ModuleManifest, () => import('org.eclipse.daanse.board.app.ui.vue.variable.timepicker')],
]
