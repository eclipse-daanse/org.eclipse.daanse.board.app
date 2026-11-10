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

import { columnNamed, toNumber } from '../table'
import { type Context, escape, type Drawing } from '../context'

export function scatter3d(context: Context): Drawing {
  const { table, columns, look } = context
  const size = columnNamed(table, look.sizeColumn)
  const named = [look.xColumn, look.yColumn, look.zColumn].map((name) => columnNamed(table, name))
  /* An axis the settings leave open takes a column no other axis shows, so
     that naming one axis does not draw a column twice; the size column only
     when there is nothing else left. A column with no number in it at all - a
     measure nobody has a value of - would leave no point standing. */
  const filled = (column: number) => table.rows.some((row) => toNumber(row[column]) !== null)
  /* Captions that read as numbers - the months of a year are 1 to 12 - still
     name the points, and become an axis only when three are not found
     elsewhere. A table of numbers and nothing else is read the same way. */
  const first = columns.labels[0]
  const caption = first !== undefined && columns.numeric.includes(first) ? first : undefined
  const free = columns.numeric.filter(
    (column) => !named.includes(column) && column !== size && column !== caption && filled(column),
  )
  if (caption !== undefined && !named.includes(caption) && caption !== size && filled(caption)) free.push(caption)
  if (size !== undefined && !named.includes(size)) free.push(size)
  const [x, y, z] = named.map((column) => column ?? free.shift())
  /* Three measures that came back without a single value - a year nobody
     sold in - are a query that found nothing, not one that asked wrongly. */
  const measures = columns.numeric.filter((column) => column !== caption)
  const nothing = measures.length >= 3 && !measures.some(filled)
  const missing = { problem: nothing ? 'noValues' : 'needsThreeNumbers' } as const
  if (x === undefined || y === undefined || z === undefined) return missing
  const axes = [x, y, z]
  /* Points are named by what names a row and is not an axis; with nothing
     left to name them by, by their place. */
  const hasNames = columns.labels.some((column) => !axes.includes(column))

  const points: { name: string; value: number[] }[] = []
  table.rows.forEach((row, index) => {
    const coordinates = axes.map((column) => toNumber(row[column]))
    if (coordinates.some((each) => each === null)) return
    const value = coordinates as number[]
    if (size !== undefined) value.push(toNumber(row[size]) ?? 0)
    points.push({ name: hasNames ? context.label(row) : `#${index + 1}`, value })
  })
  if (!points.length) return missing

  const heights = points.map((point) => point.value[2])
  /* The upright axis has its name beside its ticks, and 800.000 is wider than
     8.000: the name stands as far off as the widest tick reaches. */
  const widest = Math.max(...[Math.min(...heights), Math.max(...heights)].map((value) => context.format(Math.round(value)).length))
  const upright = Math.max(30, 20 + 5 * widest)
  const option = context.base()
  const names = [x, y, z, size].map((column) => (column === undefined ? '' : table.headers[column]))
  option.tooltip.formatter = (p: { name: string; value: number[] }) =>
    `<b>${escape(p.name)}</b><br/>` +
    p.value.map((value, i) => `${escape(names[i])}: ${context.format(value)}`).join('<br/>')
  option.visualMap = context.scale(Math.min(...heights), Math.max(...heights), { dimension: 2 })

  /* A tile squeezed beside others has a box a third the size, and points as
     large as in a full one would cover each other and the ticks. */
  const [smallest, spread] = look.small ? [3, 11] : [5, 23]
  let symbolSize: number | ((value: number[]) => number) = look.small ? 6 : 10
  if (size !== undefined) {
    const sizes = points.map((point) => Math.abs(point.value[3]))
    const largest = Math.max(...sizes) || 1
    symbolSize = (value: number[]) => smallest + spread * Math.sqrt(Math.abs(value[3]) / largest)
  }

  /* Ticks are written as the board writes numbers - 50.000 on a German one -
     and the names stand clear of them, which at the default gap they do not.
     The axes span the points rather than reach down to zero: twelve months of
     sales lie between 16.000 and 26.000, and from zero they would sit huddled
     in one far corner of the box. */
  const axis = (dimension: number) =>
    context.axis3d({
      type: 'value',
      name: names[dimension],
      scale: true,
      nameGap: dimension === 2 ? upright : 30,
      /* Fewer and smaller ticks in a small tile, where eight to an axis run
         into each other - and the usual ones again in a large tile, which a
         redraw is merged into and would otherwise keep the small ones. */
      splitNumber: look.small ? 3 : 5,
      axisLabel: {
        textStyle: { color: context.text, fontSize: look.small ? 9 : 12 },
        formatter: (value: number) => context.format(value),
      },
      // The value a hovered point stands at on each axis, which unformatted reads 21464.
      axisPointer: { label: { formatter: (_: string, value: number[]) => context.format(value[dimension]) } },
    })
  option.xAxis3D = axis(0)
  option.yAxis3D = axis(1)
  option.zAxis3D = axis(2)
  option.grid3D = context.box(1)
  option.series = [
    {
      type: 'scatter3D',
      data: points,
      symbolSize,
      itemStyle: { opacity: 0.9, borderWidth: 0.5, borderColor: 'rgba(255, 255, 255, 0.7)' },
      emphasis: { itemStyle: { color: '#ffd166' }, label: { show: false } },
      animationDurationUpdate: 900,
    },
  ]
  return { option }
}
