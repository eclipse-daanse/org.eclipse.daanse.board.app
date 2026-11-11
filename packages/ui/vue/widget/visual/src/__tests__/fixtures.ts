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
 * ********************************************************************/


/* What the drawing specs share: the settings a test starts from, a table, and two ways to draw it. */

import { draw, WORDS, type Look, type Option, type Word } from '../drawing'
import { asTable } from '../table'

export const LOOK: Look = {
  kind: 'bars3d',
  title: '',
  palette: 'aurora',
  valueColumn: '',
  xColumn: '',
  yColumn: '',
  zColumn: '',
  sizeColumn: '',
  separator: ' - ',
  autoRotate: true,
  showScale: true,
  showLabels: true,
  topN: 10,
  frameDuration: 1500,
  textColor: 'rgb(20, 20, 20)',
  locale: 'en',
  words: Object.fromEntries(WORDS.map((word) => [word, `<${word}>`])) as Record<Word, string>,
  aspect: 0,
  small: false,
}

/* What an XMLA source answers for products down the rows and years across. */
export const SALES = {
  headers: ['Caption', '1997', '1998'],
  rows: [
    ['Drink', '24597', '30010'],
    ['Food', 191940, 210000],
    ['Non-Consumable', 50236, null],
  ],
}

export function option(kind: Look['kind'], data: unknown = SALES, look: Partial<Look> = {}): Option {
  const drawn = draw(asTable(data), { ...LOOK, ...look, kind })
  if (!('option' in drawn)) throw new Error(`drew no chart: ${'problem' in drawn ? drawn.problem : 'a cube'}`)
  return drawn.option
}

export function problem(kind: Look['kind'], data: unknown, look: Partial<Look> = {}) {
  const drawn = draw(asTable(data), { ...LOOK, ...look, kind })
  return 'problem' in drawn ? drawn.problem : undefined
}
