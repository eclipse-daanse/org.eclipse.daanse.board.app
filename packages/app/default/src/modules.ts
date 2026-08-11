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
