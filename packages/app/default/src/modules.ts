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
 * Die Module der Anwendung.
 *
 * Die Reihenfolge dieser Liste ist *nicht* die Aktivierungsreihenfolge. Der
 * Bootstrapper leitet sie aus `provides` und `requires` ab: ein Modul läuft
 * nach denen, deren Dienste es auflöst. Die Einträge stehen deshalb
 * alphabetisch — die Sortierung ist eine Frage der Lesbarkeit geworden, nicht
 * der Korrektheit. Belegt wird das durch den Permutationstest in
 * `ModuleBootstrapper.test.ts`: jede Vertauschung führt zur selben
 * Aktivierungsfolge.
 *
 * Innerhalb dieser Liste gibt es genau zwei ordnende Abhängigkeiten —
 * `WidgetRepository` (24 Konsumenten) und `LayoutRepository` (2). Alle
 * übrigen aufgelösten Dienste stammen aus Paketen, die noch nicht auf
 * `activate` umgestellt sind (`ConnectionRepository`, `DatasourceRepository`, `EventActionsRegistry`, `EventRegistry`, `I18next`, `VariableRepository`); sie kommen über den Rückfallweg der
 * `BoardServiceRegistry` und beeinflussen die Reihenfolge nicht. Mit jedem
 * umgestellten Paket wandert einer davon in diese Liste, ohne dass hier
 * umsortiert werden müsste.
 *
 * `provides` und `requires` sind zugleich die Vorlage für das spätere
 * tsm-Manifest: `id` wird zur Modul-ID, `load` zum `entry`, und die beiden
 * Listen heißen dort `provides` und `requiresService`.
 */
export const modules: ModuleEntry[] = [

  {
    id: 'lib.composer.chart',
    load: () => import('org.eclipse.daanse.board.app.lib.composer.chart'),
    provides: ['ChartComposer'],
  },
  {
    id: 'lib.composer.datatable',
    load: () => import('org.eclipse.daanse.board.app.lib.composer.datatable'),
    provides: ['DataTableComposer'],
  },
  {
    id: 'lib.composer.kpi',
    load: () => import('org.eclipse.daanse.board.app.lib.composer.kpi'),
    provides: ['KpiComposer'],
  },
  {
    id: 'lib.composer.ogc',
    load: () => import('org.eclipse.daanse.board.app.lib.composer.ogc'),
    provides: ['OgcFeatureComposer'],
  },
  {
    id: 'lib.composer.ogcsta2chart',
    load: () => import('org.eclipse.daanse.board.app.lib.composer.ogcsta2chart'),
    provides: ['OGCSTAToChartComposer'],
    requires: ['EventActionsRegistry'],
  },
  {
    id: 'lib.composer.weather',
    load: () => import('org.eclipse.daanse.board.app.lib.composer.weather'),
    provides: ['WeatherComposer'],
  },
  {
    id: 'lib.connection.graphql',
    load: () => import('org.eclipse.daanse.board.app.lib.connection.graphql'),
    provides: ['GraphQLConnectionFactory'],
  },
  {
    id: 'lib.connection.mqtt',
    load: () => import('org.eclipse.daanse.board.app.lib.connection.mqtt'),
    provides: ['MQTTConnectionFactory'],
    requires: ['LoggerFactory'],
  },
  {
    id: 'lib.connection.rest',
    load: () => import('org.eclipse.daanse.board.app.lib.connection.rest'),
    provides: ['RestConnectionFactory'],
  },
  {
    id: 'lib.connection.rss',
    load: () => import('org.eclipse.daanse.board.app.lib.connection.rss'),
    provides: ['RssConnectionFactory'],
  },
  {
    id: 'lib.connection.websocket',
    load: () => import('org.eclipse.daanse.board.app.lib.connection.websocket'),
    provides: ['WSConnectionFactory'],
  },
  {
    id: 'lib.connection.xmla',
    load: () => import('org.eclipse.daanse.board.app.lib.connection.xmla'),
    provides: ['XmlaConnectionFactory'],
  },
  {
    id: 'lib.datasource.csv',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.csv'),
    provides: ['CsvStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.graphql',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.graphql'),
    provides: ['GraphQLStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.kpi_tmp',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.kpi_tmp'),
    provides: ['KpiStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.ogcsta',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.ogcsta'),
    provides: ['OgcStaStoreFactory'],
    requires: ['ConnectionRepository', 'LoggerFactory', 'VariableRepository'],
  },
  {
    id: 'lib.datasource.rest',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.rest'),
    provides: ['RestStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.rss',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.rss'),
    provides: ['RssStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.sparql',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.sparql'),
    provides: ['SparqlStore'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.sql_xmla',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.sql_xmla'),
    provides: ['SqlXmlaStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.valhalla',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.valhalla'),
    provides: ['ValhallaStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.websocket',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.websocket'),
    provides: ['WSStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.datasource.xmla',
    load: () => import('org.eclipse.daanse.board.app.lib.datasource.xmla'),
    provides: ['XmlaStoreFactory'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'lib.events',
    load: () => import('org.eclipse.daanse.board.app.lib.events'),
    provides: [
      'EcoreMetadataService',
      'EventActionsRegistry',
      'EventBusBridge',
      'EventManager',
      'EventRegistry',
    ],
    requires: ['TINY_EMITTER'],
  },
  {
    id: 'lib.factory.variableWrapper',
    load: () => import('org.eclipse.daanse.board.app.lib.factory.variableWrapper'),
    provides: ['VariableWrapperFactory'],
    requires: ['VariableRepository'],
  },
  {
    id: 'lib.i18next',
    load: () => import('org.eclipse.daanse.board.app.lib.i18next'),
    provides: ['I18next'],
  },
  {
    id: 'lib.logger',
    load: () => import('org.eclipse.daanse.board.app.lib.logger'),
    provides: ['LoggerFactory'],
  },
  {
    id: 'lib.pagecontext.pagecontext_service',
    load: () => import('org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service'),
    provides: ['PageContext'],
  },
  {
    id: 'lib.persistence.git',
    load: () => import('org.eclipse.daanse.board.app.lib.persistence.git'),
    provides: ['GitRepository'],
    requires: ['RepositoryRegistry'],
  },
  {
    id: 'lib.persistence.loader',
    load: () => import('org.eclipse.daanse.board.app.lib.persistence.loader'),
    requires: ['GitRepository', 'LocalRepository', 'RepositoryRegistry', 'RestRepository', 'SettingsManager'],
  },
  {
    id: 'lib.persistence.local',
    load: () => import('org.eclipse.daanse.board.app.lib.persistence.local'),
    provides: ['LocalRepository'],
    requires: ['RepositoryRegistry', 'ValidityCheck'],
  },
  {
    id: 'lib.persistence.rest',
    load: () => import('org.eclipse.daanse.board.app.lib.persistence.rest'),
    provides: ['RestRepository'],
    requires: ['RepositoryRegistry'],
  },
  {
    id: 'lib.persistence.util',
    load: () => import('org.eclipse.daanse.board.app.lib.persistence.util'),
    provides: ['ValidityCheck'],
  },
  {
    id: 'lib.repository.connection',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.connection'),
    provides: ['ConnectionRepository'],
  },
  {
    id: 'lib.repository.datasource',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.datasource'),
    provides: ['DatasourceRepository'],
  },
  {
    id: 'lib.repository.layout.page',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.layout.page'),
    provides: ['LayoutRepository'],
  },
  {
    id: 'lib.repository.navigation',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.navigation'),
    provides: ['NavigationRegistry'],
  },
  {
    id: 'lib.repository.page',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.page'),
    provides: ['PageRepository'],
  },
  {
    id: 'lib.repository.persistence',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.persistence'),
    provides: ['RepositoryRegistry'],
  },
  {
    id: 'lib.repository.route',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.route'),
    provides: ['RouteRegistry'],
  },
  {
    id: 'lib.repository.variable',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.variable'),
    provides: ['VariableRepository'],
    requires: ['TINY_EMITTER'],
  },
  {
    id: 'lib.repository.widget',
    load: () => import('org.eclipse.daanse.board.app.lib.repository.widget'),
    provides: ['WidgetRepository'],
  },
  {
    id: 'lib.settings.manager',
    load: () => import('org.eclipse.daanse.board.app.lib.settings.manager'),
    provides: ['SettingsManager'],
  },
  {
    id: 'ui.vue.composer.chart',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.chart'),
    provides: ['ChartPreview', 'ChartSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.composer.datatable',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.datatable'),
    provides: ['DatatablePreview', 'DatatableSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.composer.kpi',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.kpi'),
    provides: ['KpiComposerPreview', 'KpiComposerSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.composer.ogc',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.ogc'),
    provides: ['OgcComposerPreview', 'OgcComposerSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.composer.ogcsta2chart',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.ogcsta2chart'),
    provides: ['OGCSTAToChartComposerPreview', 'OGCSTAToChartComposerSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.composer.weather',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.composer.weather'),
    provides: ['WeatherComposerPreview', 'WeatherComposerSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.connection.graphql',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.graphql'),
    provides: ['GraphqlConnectionSettings'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'ui.vue.connection.mqtt',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.mqtt'),
    provides: ['MqttConnectionSettings'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'ui.vue.connection.rest',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.rest'),
    provides: ['RestConnectionSettings'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'ui.vue.connection.rss',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.rss'),
    provides: ['RssConnectionSettings'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'ui.vue.connection.ws',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.ws'),
    provides: ['WsConnectionSettings'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'ui.vue.connection.xmla',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.connection.xmla'),
    provides: ['XmlaConnectionSettings'],
    requires: ['ConnectionRepository'],
  },
  {
    id: 'ui.vue.datasource.csv',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.csv'),
    provides: ['CsvPreview', 'CsvSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.graphql',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.graphql'),
    provides: ['GraphqlPreview', 'GraphqlSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.kpi',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.kpi'),
    provides: ['KpiPreview', 'KpiSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.ogcsta',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta'),
    provides: ['OgcStaPreview', 'OgcStaSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.rest',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.rest'),
    provides: ['RestPreview', 'RestSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.rss',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.rss'),
    provides: ['RssPreview', 'RssSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.sparql',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.sparql'),
    provides: ['SparqlPreview', 'SparqlSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.sql_xmla',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.sql_xmla'),
    provides: ['SqlXmlaPreview', 'SqlXmlaSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.valhalla',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.valhalla'),
    provides: ['ValhallaPreview', 'ValhallaSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.ws',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.ws'),
    provides: ['WsPreview', 'WsSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.datasource.xmla',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.datasource.xmla'),
    provides: ['XmlaPreview', 'XmlaSettings'],
    requires: ['DatasourceRepository'],
  },
  {
    id: 'ui.vue.eventmanager',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.eventmanager'),
    requires: ['NavigationRegistry', 'RouteRegistry'],
  },
  {
    id: 'ui.vue.lang.common.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.common.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.icon.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.icon.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.image.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.image.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.page.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.page.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.progress.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.progress.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.svg.base.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.svg.repeat.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.text.plain.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.text.rich.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.video.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.video.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.lang.wrapper.en',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en'),
    requires: ['I18next'],
  },
  {
    id: 'ui.vue.layouts.base',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.layouts.base'),
    requires: ['LayoutRepository'],
  },
  {
    id: 'ui.vue.layouts.grid',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.layouts.grid'),
    requires: ['LayoutRepository'],
  },
  {
    id: 'ui.vue.page_provider',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.page_provider'),
    provides: ['VuePageProvider'],
    requires: ['PageContext'],
  },
  {
    id: 'ui.vue.persistence.git',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.persistence.git'),
    requires: ['RepositoryRegistry'],
  },
  {
    id: 'ui.vue.plugins.endpointfinder',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.plugins.endpointfinder'),
    requires: ['App', 'ConnectionRepository', 'RestConnectionFactory'],
  },
  {
    id: 'ui.vue.plugins.i18next',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.plugins.i18next'),
    requires: ['App', 'I18next'],
  },
  {
    id: 'ui.vue.variable.computed',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.variable.computed'),
    requires: ['VariableRepository'],
  },
  {
    id: 'ui.vue.variable.constant',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.variable.constant'),
    requires: ['VariableRepository'],
  },
  {
    id: 'ui.vue.variable.timepicker',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.variable.timepicker'),
    requires: ['VariableRepository'],
  },

  /*
   * Widgets. Hier trägt die Reihenfolge doch eine Bedeutung, aber keine
   * technische: `WidgetRepository` hält seine Typen in einem Record, und die
   * Palette in `AddWidgetWindow.vue` zeigt sie unsortiert in genau dieser
   * Folge. Wer die Palette umsortieren will, sortiert hier.
   */

]
