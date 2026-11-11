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

import { toNumber } from '../table'
import { withAlpha } from '../palettes'
import { type Context, escape, type Option, type Drawing } from '../context'

/** As many bars as a small tile shows, whatever the settings ask. */
const SMALL_BARS = 5

export function race(context: Context): Drawing {
  const { table, columns, look } = context
  if (!columns.numbers.length) return { problem: 'needsNumbers' }
  // A member with no value in any step - a cube asked without NonEmpty - would sit at zero all race long.
  const rows = table.rows.filter((row) => columns.numbers.some((column) => toNumber(row[column]) !== null))
  // The query was right but found nothing: a year the cube holds no sales for.
  if (!rows.length) return { problem: 'noValues' }
  // A step nobody has a value in - 1998 asked beside 1997 - is a period the cube does not hold, not one
  // where every bar fell to zero.
  const steps = columns.numbers.filter((column) => rows.some((row) => toNumber(row[column]) !== null))
  const frames = steps.map((column) => table.headers[column])
  const bars = rows.map((row) => context.label(row))
  const values = steps.map((column) => rows.map((row) => toNumber(row[column]) ?? 0))
  // ECharts ranks a sorting bar by its length, so -700 would lead +100 (its own code says it does not
  // support both signs). Where a value falls below zero the order of each step is ours instead,
  // without the bars sliding past each other.
  const signed = values.some((step) => step.some((value) => value < 0))
  const set = context.palette.set
  const colour = (row: number) => set[row % set.length]
  // A small tile has room for a few bars a line high each; twelve would be slivers with their names dropped.
  const most = look.small ? SMALL_BARS : 50
  const shown = Math.max(1, Math.min(most, Math.round(look.topN) || 10, bars.length))
  const duration = Math.max(200, Math.min(20000, Math.round(look.frameDuration) || 1500))
  const moving = frames.length > 1
  // On a small tile the timeline gives up its labels, the step stands in the corner large enough to read.
  const track = moving ? (look.small ? 52 : 72) : 16
  const accent = set[0]
  // The rounded end is the one away from zero: a loss reaches left, and its square end belongs on the axis.
  const rounded = (value: number) => (value < 0 ? [6, 0, 0, 6] : [0, 6, 6, 0])
  const frameText = (text: string) => ({
    id: 'frame',
    type: 'text',
    right: 72,
    bottom: track + 4,
    z: 100,
    silent: true,
    style: {
      text,
      // A year stands large behind the bars; a crossjoined caption gets smaller and is cut short.
      font: `bold ${Math.max(18, Math.min(40, Math.round(280 / Math.max(1, text.length))))}px sans-serif`,
      width: 280,
      overflow: 'truncate',
      fill: withAlpha(context.text, 0.22),
    },
  })

  const base = context.base()
  base.tooltip.trigger = 'item'
  base.tooltip.formatter = (p: { name: string; value: number }) => `${escape(p.name)}<br/><b>${context.format(Number(p.value))}</b>`
  const option: Option = {
    baseOption: {
      ...base,
      timeline: {
        show: moving,
        axisType: 'category',
        data: frames,
        autoPlay: moving,
        loop: true,
        playInterval: duration,
        bottom: 8,
        ...(look.small ? { height: 32 } : {}),
        // The play and step buttons sit inside this box; wider margins left a small tile no track.
        left: 16,
        right: 16,
        label: { show: !look.small, color: context.text },
        lineStyle: { color: context.faint },
        itemStyle: { color: withAlpha(context.text, 0.35) },
        checkpointStyle: { color: accent, borderColor: withAlpha(accent, 0.4) },
        controlStyle: { color: context.text, borderColor: context.text },
        progress: { lineStyle: { color: accent }, itemStyle: { color: accent } },
        emphasis: { label: { color: context.text }, controlStyle: { color: accent, borderColor: accent } },
      },
      grid: { left: 8, right: 72, top: look.title ? 44 : 16, bottom: track, containLabel: true },
      xAxis: {
        type: 'value',
        // The axis ends at the largest bar, wherever that is: its own label crowded the last round one.
        // A step where every member lost ends at zero, not at the smallest loss, whose bar would have no length.
        max: (extent: { max: number }) => Math.max(0, extent.max),
        // On a small tile the round values would run into each other; ECharts drops the ones that collide.
        axisLabel: { color: context.text, formatter: (v: number) => context.format(v), showMaxLabel: false, hideOverlap: true },
        splitLine: { lineStyle: { color: context.faint } },
      },
      yAxis: {
        type: 'category',
        data: bars,
        inverse: true,
        max: shown - 1,
        // Twelve bars on a tile a few lines high: the names that would overlap step aside.
        // On a small tile a name gets less room, or the bars it names are left a stub beside it.
        axisLabel: { show: look.showLabels, color: context.text, width: look.small ? 84 : 140, overflow: 'truncate', hideOverlap: true },
        axisTick: { show: false },
        axisLine: { show: false },
        animationDuration: 300,
        animationDurationUpdate: 300,
      },
      series: [
        {
          type: 'bar',
          realtimeSort: !signed,
          barCategoryGap: '28%',
          // Each bar keeps its colour as it changes places.
          itemStyle: { borderRadius: [0, 6, 6, 0], ...(signed ? {} : { color: (p: { dataIndex: number }) => colour(p.dataIndex) }) },
          // Only where a line is tight: while bars swap places their values cross, and a value hidden then
          // stays hidden for the rest of the step, on a tile with room for every one of them.
          labelLayout: { hideOverlap: look.small },
          label: { show: true, position: 'right', valueAnimation: true, color: context.text, formatter: (p: { value: number }) => context.format(Number(p.value)) },
          data: [],
        },
      ],
      animationDuration: 0,
      animationDurationUpdate: Math.round(duration * 0.9),
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
    },
    options: values.map((step, frame) => {
      const graphic = { elements: [frameText(frames[frame])] }
      if (!signed) return { series: [{ data: step }], graphic }
      // Only the bars that are shown: the deepest losses below them would stretch the axis to the left
      // and squeeze the ones on screen into a corner.
      const order = step
        .map((_, row) => row)
        .sort((a, b) => step[b] - step[a])
        .slice(0, shown)
      return {
        yAxis: { data: order.map((row) => bars[row]) },
        series: [{ data: order.map((row) => ({ value: step[row], itemStyle: { color: colour(row), borderRadius: rounded(step[row]) } })) }],
        graphic,
      }
    }),
  }
  return { option }
}
