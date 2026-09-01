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
import b0 from 'org.eclipse.daanse.board.app.platform.vue/manifest.json'
import b1 from 'org.eclipse.daanse.board.app.shell/manifest.json'
import b2 from 'org.eclipse.daanse.board.app.ui.vue.widget.progress/manifest.json'
import b3 from 'org.eclipse.daanse.board.app.ui.vue.widget.map/manifest.json'
import b4 from 'org.eclipse.daanse.board.app.ui.vue.plugins.geojson_renderer/manifest.json'
import b5 from 'org.eclipse.daanse.board.app.ui.vue.plugins.endpointfinder/manifest.json'
import b6 from 'org.eclipse.daanse.board.app.ui.vue.composer.chart/manifest.json'
import b7 from 'org.eclipse.daanse.board.app.ui.vue.composer.datatable/manifest.json'
import b8 from 'org.eclipse.daanse.board.app.ui.vue.composer.kpi/manifest.json'
import b9 from 'org.eclipse.daanse.board.app.ui.vue.composer.ogc/manifest.json'
import b10 from 'org.eclipse.daanse.board.app.ui.vue.composer.ogcsta2chart/manifest.json'
import b11 from 'org.eclipse.daanse.board.app.ui.vue.composer.weather/manifest.json'
import b12 from 'org.eclipse.daanse.board.app.ui.vue.connection.graphql/manifest.json'
import b13 from 'org.eclipse.daanse.board.app.ui.vue.connection.mqtt/manifest.json'
import b14 from 'org.eclipse.daanse.board.app.ui.vue.connection.rest/manifest.json'
import b15 from 'org.eclipse.daanse.board.app.ui.vue.connection.rss/manifest.json'
import b16 from 'org.eclipse.daanse.board.app.ui.vue.connection.ws/manifest.json'
import b17 from 'org.eclipse.daanse.board.app.ui.vue.connection.xmla/manifest.json'
import b18 from 'org.eclipse.daanse.board.app.ui.vue.datasource.csv/manifest.json'
import b19 from 'org.eclipse.daanse.board.app.ui.vue.datasource.graphql/manifest.json'
import b20 from 'org.eclipse.daanse.board.app.ui.vue.datasource.kpi/manifest.json'
import b21 from 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta/manifest.json'
import b22 from 'org.eclipse.daanse.board.app.ui.vue.datasource.rest/manifest.json'
import b23 from 'org.eclipse.daanse.board.app.ui.vue.datasource.rss/manifest.json'
import b24 from 'org.eclipse.daanse.board.app.ui.vue.datasource.sparql/manifest.json'
import b25 from 'org.eclipse.daanse.board.app.ui.vue.datasource.sql_xmla/manifest.json'
import b26 from 'org.eclipse.daanse.board.app.ui.vue.datasource.valhalla/manifest.json'
import b27 from 'org.eclipse.daanse.board.app.ui.vue.datasource.ws/manifest.json'
import b28 from 'org.eclipse.daanse.board.app.ui.vue.datasource.xmla/manifest.json'
import b29 from 'org.eclipse.daanse.board.app.ui.vue.widget.chart/manifest.json'
import b30 from 'org.eclipse.daanse.board.app.ui.vue.widget.code/manifest.json'
import b31 from 'org.eclipse.daanse.board.app.ui.vue.widget.icon/manifest.json'
import b32 from 'org.eclipse.daanse.board.app.ui.vue.widget.image/manifest.json'
import b33 from 'org.eclipse.daanse.board.app.ui.vue.widget.markdown/manifest.json'
import b34 from 'org.eclipse.daanse.board.app.ui.vue.widget.mermaid/manifest.json'
import b35 from 'org.eclipse.daanse.board.app.ui.vue.widget.page/manifest.json'
import b36 from 'org.eclipse.daanse.board.app.ui.vue.widget.routing/manifest.json'
import b37 from 'org.eclipse.daanse.board.app.ui.vue.widget.rss/manifest.json'
import b38 from 'org.eclipse.daanse.board.app.ui.vue.widget.sample/manifest.json'
import b39 from 'org.eclipse.daanse.board.app.ui.vue.widget.svg.base/manifest.json'
import b40 from 'org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat/manifest.json'
import b41 from 'org.eclipse.daanse.board.app.ui.vue.widget.table.data/manifest.json'
import b42 from 'org.eclipse.daanse.board.app.ui.vue.widget.table.kpi/manifest.json'
import b43 from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/manifest.json'
import b44 from 'org.eclipse.daanse.board.app.ui.vue.widget.text.plain/manifest.json'
import b45 from 'org.eclipse.daanse.board.app.ui.vue.widget.text.rich/manifest.json'
import b46 from 'org.eclipse.daanse.board.app.ui.vue.widget.timeline/manifest.json'
import b47 from 'org.eclipse.daanse.board.app.ui.vue.widget.vanta/manifest.json'
import b48 from 'org.eclipse.daanse.board.app.ui.vue.widget.video/manifest.json'
import b49 from 'org.eclipse.daanse.board.app.ui.vue.widget.weather/manifest.json'
import b50 from 'org.eclipse.daanse.board.app.ui.vue.widget.xmla.filters/manifest.json'
import b51 from 'org.eclipse.daanse.board.app.lib.datasource.base/manifest.json'
import b52 from 'org.eclipse.daanse.board.app.lib.connection.base/manifest.json'
import b53 from 'org.eclipse.daanse.board.app.lib.connection.twowayconnection/manifest.json'
import b54 from 'org.eclipse.daanse.board.app.lib.utils.subscriber/manifest.json'
import b55 from 'org.eclipse.daanse.board.app.platform.system/manifest.json'
import b56 from 'org.eclipse.daanse.board.app.lib.variables/manifest.json'
import b57 from 'org.eclipse.daanse.board.app.ui.vue.stores.connection/manifest.json'
import b58 from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce/manifest.json'
import b59 from 'org.eclipse.daanse.board.app.lib.composer.chart/manifest.json'
import b60 from 'org.eclipse.daanse.board.app.lib.composer.datatable/manifest.json'
import b61 from 'org.eclipse.daanse.board.app.lib.composer.kpi/manifest.json'
import b62 from 'org.eclipse.daanse.board.app.lib.composer.ogc/manifest.json'
import b63 from 'org.eclipse.daanse.board.app.lib.composer.ogcsta2chart/manifest.json'
import b64 from 'org.eclipse.daanse.board.app.lib.composer.weather/manifest.json'
import b65 from 'org.eclipse.daanse.board.app.lib.connection.graphql/manifest.json'
import b66 from 'org.eclipse.daanse.board.app.lib.connection.mqtt/manifest.json'
import b67 from 'org.eclipse.daanse.board.app.lib.connection.rest/manifest.json'
import b68 from 'org.eclipse.daanse.board.app.lib.connection.rss/manifest.json'
import b69 from 'org.eclipse.daanse.board.app.lib.connection.websocket/manifest.json'
import b70 from 'org.eclipse.daanse.board.app.lib.connection.xmla/manifest.json'
import b71 from 'org.eclipse.daanse.board.app.lib.datasource.csv/manifest.json'
import b72 from 'org.eclipse.daanse.board.app.lib.datasource.graphql/manifest.json'
import b73 from 'org.eclipse.daanse.board.app.lib.datasource.kpi_tmp/manifest.json'
import b74 from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/manifest.json'
import b75 from 'org.eclipse.daanse.board.app.lib.datasource.rest/manifest.json'
import b76 from 'org.eclipse.daanse.board.app.lib.datasource.rss/manifest.json'
import b77 from 'org.eclipse.daanse.board.app.lib.datasource.sparql/manifest.json'
import b78 from 'org.eclipse.daanse.board.app.lib.datasource.sql_xmla/manifest.json'
import b79 from 'org.eclipse.daanse.board.app.lib.datasource.valhalla/manifest.json'
import b80 from 'org.eclipse.daanse.board.app.lib.datasource.websocket/manifest.json'
import b81 from 'org.eclipse.daanse.board.app.lib.datasource.xmla/manifest.json'
import b82 from 'org.eclipse.daanse.board.app.lib.events/manifest.json'
import b83 from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper/manifest.json'
import b84 from 'org.eclipse.daanse.board.app.lib.i18next/manifest.json'
import b85 from 'org.eclipse.daanse.board.app.lib.logger/manifest.json'
import b86 from 'org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service/manifest.json'
import b87 from 'org.eclipse.daanse.board.app.lib.persistence.git/manifest.json'
import b88 from 'org.eclipse.daanse.board.app.lib.persistence.loader/manifest.json'
import b89 from 'org.eclipse.daanse.board.app.lib.persistence.local/manifest.json'
import b90 from 'org.eclipse.daanse.board.app.lib.persistence.rest/manifest.json'
import b91 from 'org.eclipse.daanse.board.app.lib.persistence.util/manifest.json'
import b92 from 'org.eclipse.daanse.board.app.lib.repository.connection/manifest.json'
import b93 from 'org.eclipse.daanse.board.app.lib.repository.datasource/manifest.json'
import b94 from 'org.eclipse.daanse.board.app.lib.repository.layout.page/manifest.json'
import b95 from 'org.eclipse.daanse.board.app.lib.repository.navigation/manifest.json'
import b96 from 'org.eclipse.daanse.board.app.lib.repository.page/manifest.json'
import b97 from 'org.eclipse.daanse.board.app.lib.repository.persistence/manifest.json'
import b98 from 'org.eclipse.daanse.board.app.lib.repository.route/manifest.json'
import b99 from 'org.eclipse.daanse.board.app.lib.repository.variable/manifest.json'
import b100 from 'org.eclipse.daanse.board.app.lib.repository.widget/manifest.json'
import b101 from 'org.eclipse.daanse.board.app.lib.settings.manager/manifest.json'
import b102 from 'org.eclipse.daanse.board.app.ui.vue.eventmanager/manifest.json'
import b103 from 'org.eclipse.daanse.board.app.ui.vue.lang.common.en/manifest.json'
import b104 from 'org.eclipse.daanse.board.app.ui.vue.lang.icon.en/manifest.json'
import b105 from 'org.eclipse.daanse.board.app.ui.vue.lang.image.en/manifest.json'
import b106 from 'org.eclipse.daanse.board.app.ui.vue.lang.page.en/manifest.json'
import b107 from 'org.eclipse.daanse.board.app.ui.vue.lang.progress.en/manifest.json'
import b108 from 'org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en/manifest.json'
import b109 from 'org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en/manifest.json'
import b110 from 'org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en/manifest.json'
import b111 from 'org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en/manifest.json'
import b112 from 'org.eclipse.daanse.board.app.ui.vue.lang.video.en/manifest.json'
import b113 from 'org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en/manifest.json'
import b114 from 'org.eclipse.daanse.board.app.ui.vue.layouts.base/manifest.json'
import b115 from 'org.eclipse.daanse.board.app.ui.vue.layouts.grid/manifest.json'
import b116 from 'org.eclipse.daanse.board.app.ui.vue.page_provider/manifest.json'
import b117 from 'org.eclipse.daanse.board.app.ui.vue.persistence.git/manifest.json'
import b118 from 'org.eclipse.daanse.board.app.ui.vue.plugins.i18next/manifest.json'
import b119 from 'org.eclipse.daanse.board.app.ui.vue.variable.computed/manifest.json'
import b120 from 'org.eclipse.daanse.board.app.ui.vue.variable.constant/manifest.json'
import b121 from 'org.eclipse.daanse.board.app.ui.vue.variable.timepicker/manifest.json'
import b122 from 'org.eclipse.daanse.board.app.lib.annotations/manifest.json'
import b123 from 'org.eclipse.daanse.board.app.lib.utils.helpers/manifest.json'
import b124 from 'org.eclipse.daanse.board.app.ui.vue.composables/manifest.json'
import b125 from 'org.eclipse.daanse.board.app.ui.vue.variable.components/manifest.json'
import b126 from 'org.eclipse.daanse.board.app.ui.vue.stores.layout/manifest.json'
import b127 from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets/manifest.json'
import b128 from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper/manifest.json'
import b129 from 'org.eclipse.daanse.board.app.ui.vue.common.kpi/manifest.json'
import b130 from 'org.eclipse.daanse.board.app.ui.vue.common.monaco/manifest.json'
import b131 from 'org.eclipse.daanse.board.app.ui.vue.common.xmla/manifest.json'
import b132 from 'org.eclipse.daanse.board.app.lib.api.widget/manifest.json'
import b133 from 'org.eclipse.daanse.board.app.lib.api.connection/manifest.json'
import b134 from 'org.eclipse.daanse.board.app.lib.api.datasource/manifest.json'
import b135 from 'org.eclipse.daanse.board.app.lib.api.variable/manifest.json'
import b136 from 'org.eclipse.daanse.board.app.lib.api.persistence/manifest.json'
import b137 from 'org.eclipse.daanse.board.app.lib.api.route/manifest.json'
import b138 from 'org.eclipse.daanse.board.app.lib.api.navigation/manifest.json'
import b139 from 'org.eclipse.daanse.board.app.lib.api.layout.page/manifest.json'
import b140 from 'org.eclipse.daanse.board.app.lib.api.page/manifest.json'
import b141 from 'org.eclipse.daanse.board.app.lib.api.pagecontext/manifest.json'
import b142 from 'org.eclipse.daanse.board.app.lib.api.settings/manifest.json'
import b143 from 'org.eclipse.daanse.board.app.lib.api.logger/manifest.json'
import b144 from 'org.eclipse.daanse.board.app.lib.api.events/manifest.json'

/**
 * The URL bundles: modules the loader fetches through their manifest entry.
 * The dev server serves each package's dist-bundle/ under /bundles/<id>/;
 * the production build copies them into dist/bundles/.
 */
import lspSql from 'org.eclipse.daanse.board.app.lib.lsp.lang.sql/manifest.json'

export const bundles: ModuleManifest[] = [
  b0 as ModuleManifest,
  b1 as ModuleManifest,
  b2 as ModuleManifest,
  b3 as ModuleManifest,
  b4 as ModuleManifest,
  b5 as ModuleManifest,
  b6 as ModuleManifest,
  b7 as ModuleManifest,
  b8 as ModuleManifest,
  b9 as ModuleManifest,
  b10 as ModuleManifest,
  b11 as ModuleManifest,
  b12 as ModuleManifest,
  b13 as ModuleManifest,
  b14 as ModuleManifest,
  b15 as ModuleManifest,
  b16 as ModuleManifest,
  b17 as ModuleManifest,
  b18 as ModuleManifest,
  b19 as ModuleManifest,
  b20 as ModuleManifest,
  b21 as ModuleManifest,
  b22 as ModuleManifest,
  b23 as ModuleManifest,
  b24 as ModuleManifest,
  b25 as ModuleManifest,
  b26 as ModuleManifest,
  b27 as ModuleManifest,
  b28 as ModuleManifest,
  b29 as ModuleManifest,
  b30 as ModuleManifest,
  b31 as ModuleManifest,
  b32 as ModuleManifest,
  b33 as ModuleManifest,
  b34 as ModuleManifest,
  b35 as ModuleManifest,
  b36 as ModuleManifest,
  b37 as ModuleManifest,
  b38 as ModuleManifest,
  b39 as ModuleManifest,
  b40 as ModuleManifest,
  b41 as ModuleManifest,
  b42 as ModuleManifest,
  b43 as ModuleManifest,
  b44 as ModuleManifest,
  b45 as ModuleManifest,
  b46 as ModuleManifest,
  b47 as ModuleManifest,
  b48 as ModuleManifest,
  b49 as ModuleManifest,
  b50 as ModuleManifest,
  b51 as ModuleManifest,
  b52 as ModuleManifest,
  b53 as ModuleManifest,
  b54 as ModuleManifest,
  b55 as ModuleManifest,
  b56 as ModuleManifest,
  b57 as ModuleManifest,
  b58 as ModuleManifest,
  b59 as ModuleManifest,
  b60 as ModuleManifest,
  b61 as ModuleManifest,
  b62 as ModuleManifest,
  b63 as ModuleManifest,
  b64 as ModuleManifest,
  b65 as ModuleManifest,
  b66 as ModuleManifest,
  b67 as ModuleManifest,
  b68 as ModuleManifest,
  b69 as ModuleManifest,
  b70 as ModuleManifest,
  b71 as ModuleManifest,
  b72 as ModuleManifest,
  b73 as ModuleManifest,
  b74 as ModuleManifest,
  b75 as ModuleManifest,
  b76 as ModuleManifest,
  b77 as ModuleManifest,
  b78 as ModuleManifest,
  b79 as ModuleManifest,
  b80 as ModuleManifest,
  b81 as ModuleManifest,
  b82 as ModuleManifest,
  b83 as ModuleManifest,
  b84 as ModuleManifest,
  b85 as ModuleManifest,
  b86 as ModuleManifest,
  b87 as ModuleManifest,
  b88 as ModuleManifest,
  b89 as ModuleManifest,
  b90 as ModuleManifest,
  b91 as ModuleManifest,
  b92 as ModuleManifest,
  b93 as ModuleManifest,
  b94 as ModuleManifest,
  b95 as ModuleManifest,
  b96 as ModuleManifest,
  b97 as ModuleManifest,
  b98 as ModuleManifest,
  b99 as ModuleManifest,
  b100 as ModuleManifest,
  b101 as ModuleManifest,
  b102 as ModuleManifest,
  b103 as ModuleManifest,
  b104 as ModuleManifest,
  b105 as ModuleManifest,
  b106 as ModuleManifest,
  b107 as ModuleManifest,
  b108 as ModuleManifest,
  b109 as ModuleManifest,
  b110 as ModuleManifest,
  b111 as ModuleManifest,
  b112 as ModuleManifest,
  b113 as ModuleManifest,
  b114 as ModuleManifest,
  b115 as ModuleManifest,
  b116 as ModuleManifest,
  b117 as ModuleManifest,
  b118 as ModuleManifest,
  b119 as ModuleManifest,
  b120 as ModuleManifest,
  b121 as ModuleManifest,
  b122 as ModuleManifest,
  b123 as ModuleManifest,
  b124 as ModuleManifest,
  b125 as ModuleManifest,
  b126 as ModuleManifest,
  b127 as ModuleManifest,
  b128 as ModuleManifest,
  b129 as ModuleManifest,
  b130 as ModuleManifest,
  b131 as ModuleManifest,
  b132 as ModuleManifest,
  b133 as ModuleManifest,
  b134 as ModuleManifest,
  b135 as ModuleManifest,
  b136 as ModuleManifest,
  b137 as ModuleManifest,
  b138 as ModuleManifest,
  b139 as ModuleManifest,
  b140 as ModuleManifest,
  b141 as ModuleManifest,
  b142 as ModuleManifest,
  b143 as ModuleManifest,
  b144 as ModuleManifest,
  lspSql as ModuleManifest,
]
