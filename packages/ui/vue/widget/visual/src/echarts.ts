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

/**
 * The parts of ECharts this widget draws with, and nothing more.
 *
 * Registered piece by piece rather than imported whole: the full package
 * brings maps, a dozen chart types nobody here asks for, and doubles the
 * bundle. Kept apart from the component so a test can stand in for it -
 * jsdom has neither a canvas nor WebGL.
 */
import * as echarts from 'echarts/core'
import {
  SunburstChart,
  TreemapChart,
  SankeyChart,
} from 'echarts/charts'
import {
  BarChart,
  GraphicComponent,
  GridComponent,
  TimelineComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { Bar3DChart, SurfaceChart, Scatter3DChart } from 'echarts-gl/charts'
import { Grid3DComponent } from 'echarts-gl/components'

echarts.use([
  SunburstChart,
  TreemapChart,
  SankeyChart,
  BarChart,
  GraphicComponent,
  GridComponent,
  TimelineComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
  Bar3DChart,
  SurfaceChart,
  Scatter3DChart,
  Grid3DComponent,
])

export interface Chart {
  setOption(option: object, settings?: { notMerge?: boolean; lazyUpdate?: boolean }): void
  resize(): void
  dispatchAction(action: { type: string }): void
  on(event: string, handler: (params: { name?: string; value?: unknown; seriesType?: string; dataType?: string }) => void): void
  dispose(): void
}

export function createChart(host: HTMLElement): Chart {
  return echarts.init(host, undefined, { renderer: 'canvas' }) as unknown as Chart
}
