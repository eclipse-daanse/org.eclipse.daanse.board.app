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
import progressWidget from 'org.eclipse.daanse.board.app.ui.vue.widget.progress/manifest.json'
import wmap from 'org.eclipse.daanse.board.app.ui.vue.widget.map/manifest.json'
import geojsonRenderer from 'org.eclipse.daanse.board.app.ui.vue.plugins.geojson_renderer/manifest.json'
import wchart from 'org.eclipse.daanse.board.app.ui.vue.widget.chart/manifest.json'
import wcode from 'org.eclipse.daanse.board.app.ui.vue.widget.code/manifest.json'
import wicon from 'org.eclipse.daanse.board.app.ui.vue.widget.icon/manifest.json'
import wimage from 'org.eclipse.daanse.board.app.ui.vue.widget.image/manifest.json'
import wmarkdown from 'org.eclipse.daanse.board.app.ui.vue.widget.markdown/manifest.json'
import wmermaid from 'org.eclipse.daanse.board.app.ui.vue.widget.mermaid/manifest.json'
import wpage from 'org.eclipse.daanse.board.app.ui.vue.widget.page/manifest.json'
import wrouting from 'org.eclipse.daanse.board.app.ui.vue.widget.routing/manifest.json'
import wrss from 'org.eclipse.daanse.board.app.ui.vue.widget.rss/manifest.json'
import wsample from 'org.eclipse.daanse.board.app.ui.vue.widget.sample/manifest.json'
import wsvgbase from 'org.eclipse.daanse.board.app.ui.vue.widget.svg.base/manifest.json'
import wsvgrepeat from 'org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat/manifest.json'
import wtabledata from 'org.eclipse.daanse.board.app.ui.vue.widget.table.data/manifest.json'
import wtablekpi from 'org.eclipse.daanse.board.app.ui.vue.widget.table.kpi/manifest.json'
import wtablepivot from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/manifest.json'
import wtextplain from 'org.eclipse.daanse.board.app.ui.vue.widget.text.plain/manifest.json'
import wtextrich from 'org.eclipse.daanse.board.app.ui.vue.widget.text.rich/manifest.json'
import wtimeline from 'org.eclipse.daanse.board.app.ui.vue.widget.timeline/manifest.json'
import wvanta from 'org.eclipse.daanse.board.app.ui.vue.widget.vanta/manifest.json'
import wvideo from 'org.eclipse.daanse.board.app.ui.vue.widget.video/manifest.json'
import wweather from 'org.eclipse.daanse.board.app.ui.vue.widget.weather/manifest.json'
import wxmlafilters from 'org.eclipse.daanse.board.app.ui.vue.widget.xmla.filters/manifest.json'

/**
 * The application's real bundles: built on their own, loaded at runtime by
 * the tsm ModuleLoader through their `entry` URL.
 *
 * This is the counterpart list to `modules.ts`. Over there lives the
 * statically bundled stock still activated by our bootstrapper; whatever
 * already exists as a bundle lands here. The migration moves entries from
 * there to here - once `modules.ts` is empty, bootstrapper and ordering can
 * be deleted and the loader carries alone.
 *
 * An entry is a tsm manifest: `id`, `version`, `entry` (the bundle's URL),
 * `provides`/`requiresService` for services, `dependencies` for module
 * references. Services from the static stock are perfectly ordinary services
 * to a bundle - both worlds share the BoardServiceRegistry, and since tsm
 * knows `unsatisfied`, a bundle waits for a missing required service instead
 * of failing.
 */
export const bundles: ModuleManifest[] = [
  progressWidget as ModuleManifest,
  wmap as ModuleManifest,
  geojsonRenderer as ModuleManifest,
  wchart as ModuleManifest,
  wcode as ModuleManifest,
  wicon as ModuleManifest,
  wimage as ModuleManifest,
  wmarkdown as ModuleManifest,
  wmermaid as ModuleManifest,
  wpage as ModuleManifest,
  wrouting as ModuleManifest,
  wrss as ModuleManifest,
  wsample as ModuleManifest,
  wsvgbase as ModuleManifest,
  wsvgrepeat as ModuleManifest,
  wtabledata as ModuleManifest,
  wtablekpi as ModuleManifest,
  wtablepivot as ModuleManifest,
  wtextplain as ModuleManifest,
  wtextrich as ModuleManifest,
  wtimeline as ModuleManifest,
  wvanta as ModuleManifest,
  wvideo as ModuleManifest,
  wweather as ModuleManifest,
  wxmlafilters as ModuleManifest,
]
