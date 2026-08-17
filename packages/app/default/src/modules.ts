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

import type { ModuleEntry } from 'org.eclipse.daanse.board.app.lib.core'

/**
 * Die Module der Anwendung, in Aktivierungsreihenfolge.
 *
 * Diese Liste löst die nebenwirkungsgetriebenen `import '…'`-Anweisungen in
 * `main.ts` ab. Sie wächst, während die übrigen Pakete auf `activate`
 * umgestellt werden; noch nicht umgestellte stehen weiterhin als Import in
 * `main.ts` und registrieren sich beim Laden selbst.
 *
 * Ein Eintrag hier ist gleichzeitig die Vorlage für das spätere tsm-Manifest:
 * `id` wird zur Modul-ID, `load` zum `entry`.
 *
 * Die Widgets sind untereinander unabhängig; ihre Reihenfolge bestimmt nur,
 * in welcher Folge sie in der Palette erscheinen.
 */
export const modules: ModuleEntry[] = [
  // Registries - muessen vor allem stehen, was sie benutzt
  {
    id: 'lib.repository.widget',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.widget'),
  },
  {
    id: 'lib.repository.page',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.page'),
  },
  {
    id: 'lib.repository.layout.page',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.layout.page'),
  },

  // Layouts - vor allem, was Layouts nachschlägt
  {
    id: 'ui.vue.layouts.base',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.layouts.base'),
  },
  {
    id: 'ui.vue.layouts.grid',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.layouts.grid'),
  },

  // Variablentypen
  {
    id: 'ui.vue.variable.constant',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.variable.constant'),
  },
  {
    id: 'ui.vue.variable.computed',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.variable.computed'),
  },
  {
    id: 'ui.vue.variable.timepicker',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.variable.timepicker'),
  },

  // i18n-Ressourcen
  {
    id: 'ui.vue.lang.common.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.common.en'),
  },
  {
    id: 'ui.vue.lang.icon.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.icon.en'),
  },
  {
    id: 'ui.vue.lang.image.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.image.en'),
  },
  {
    id: 'ui.vue.lang.page.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.page.en'),
  },
  {
    id: 'ui.vue.lang.progress.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.progress.en'),
  },
  {
    id: 'ui.vue.lang.svg.base.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en'),
  },
  {
    id: 'ui.vue.lang.svg.repeat.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en'),
  },
  {
    id: 'ui.vue.lang.text.plain.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en'),
  },
  {
    id: 'ui.vue.lang.text.rich.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en'),
  },
  {
    id: 'ui.vue.lang.video.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.video.en'),
  },
  {
    id: 'ui.vue.lang.wrapper.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en'),
  },

  // Verbindungen (UI)
  {
    id: 'ui.vue.connection.graphql',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.graphql'),
  },
  {
    id: 'ui.vue.connection.mqtt',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.mqtt'),
  },
  {
    id: 'ui.vue.connection.rest',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.rest'),
  },
  {
    id: 'ui.vue.connection.rss',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.rss'),
  },
  {
    id: 'ui.vue.connection.ws',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.ws'),
  },
  {
    id: 'ui.vue.connection.xmla',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.xmla'),
  },

  // Datenquellen (UI)
  {
    id: 'ui.vue.datasource.csv',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.csv'),
  },
  {
    id: 'ui.vue.datasource.graphql',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.graphql'),
  },
  {
    id: 'ui.vue.datasource.kpi',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.kpi'),
  },
  {
    id: 'ui.vue.datasource.ogcsta',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta'),
  },
  {
    id: 'ui.vue.datasource.rest',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.rest'),
  },
  {
    id: 'ui.vue.datasource.rss',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.rss'),
  },
  {
    id: 'ui.vue.datasource.sparql',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.sparql'),
  },
  {
    id: 'ui.vue.datasource.sql_xmla',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.sql_xmla'),
  },
  {
    id: 'ui.vue.datasource.valhalla',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.valhalla'),
  },
  {
    id: 'ui.vue.datasource.ws',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.ws'),
  },
  {
    id: 'ui.vue.datasource.xmla',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.xmla'),
  },

  // Composer (UI)
  {
    id: 'ui.vue.composer.chart',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.chart'),
  },
  {
    id: 'ui.vue.composer.datatable',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.datatable'),
  },
  {
    id: 'ui.vue.composer.kpi',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.kpi'),
  },
  {
    id: 'ui.vue.composer.ogc',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.ogc'),
  },
  {
    id: 'ui.vue.composer.ogcsta2chart',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.ogcsta2chart'),
  },
  {
    id: 'ui.vue.composer.weather',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.weather'),
  },

  // Widgets
  {
    id: 'ui.vue.widget.sample',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.sample'),
  },
  {
    id: 'ui.vue.widget.image',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.image'),
  },
  {
    id: 'ui.vue.widget.progress',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.progress'),
  },
  {
    id: 'ui.vue.widget.video',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.video'),
  },
  {
    id: 'ui.vue.widget.text.plain',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.text.plain'),
  },
  {
    id: 'ui.vue.widget.text.rich',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.text.rich'),
  },
  {
    id: 'ui.vue.widget.svg.base',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.svg.base'),
  },
  {
    id: 'ui.vue.widget.svg.repeat',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat'),
  },
  {
    id: 'ui.vue.widget.table.data',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.table.data'),
  },
  {
    id: 'ui.vue.widget.table.pivot',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.table.pivot'),
  },
  {
    id: 'ui.vue.widget.table.kpi',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.table.kpi'),
  },
  {
    id: 'ui.vue.widget.icon',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.icon'),
  },
  {
    id: 'ui.vue.widget.vanta',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.vanta'),
  },
  {
    id: 'ui.vue.widget.code',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.code'),
  },
  {
    id: 'ui.vue.widget.rss',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.rss'),
  },
  {
    id: 'ui.vue.widget.mermaid',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.mermaid'),
  },
  {
    id: 'ui.vue.widget.chart',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.chart'),
  },
  {
    id: 'ui.vue.widget.markdown',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.markdown'),
  },
  {
    id: 'ui.vue.widget.timeline',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.timeline'),
  },
  {
    id: 'ui.vue.widget.routing',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.routing'),
  },
  {
    id: 'ui.vue.widget.map',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.map'),
  },
  {
    id: 'ui.vue.widget.weather',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.weather'),
  },
  {
    id: 'ui.vue.widget.xmla.filters',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.xmla.filters'),
  },
  {
    id: 'ui.vue.widget.page',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.page'),
  },
]
