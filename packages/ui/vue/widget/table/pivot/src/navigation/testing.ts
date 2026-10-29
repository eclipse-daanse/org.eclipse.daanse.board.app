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

/*
 * The recorded FoodMart cellset the tests and the harness share:
 *   0  Unit Sales, Store Sales
 *   1  All Products, Drink, Food, Non-Consumable
 *   2  1997 and its quarters, 1998 and its quarters (time; 1998 empty)
 *   3  Canada, Mexico, USA with their states (Canada, Mexico empty)
 */
import { ref } from 'vue'
import { parseCellset, positionsOf, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import sales from '../../../../../../../lib/datasource/xmla/src/utils/__fixtures__/sales-4-axes.json'
import salesMetadata from '../../../../../../../lib/datasource/xmla/src/utils/__fixtures__/sales-4-axes.metadata.json'
import { createNavigationStore, type NavigationSettings } from './store'
import english from '../i18n/en.json'
import xmlaEnglish from '../../../../../common/xmla/src/i18n/en.json'

export const salesCellset = () => parseCellset(sales) as Cellset
export const metadata = salesMetadata

export const indexOf = (cellset: Cellset, axis: number, label: string) =>
  positionsOf(cellset, axis).findIndex(p => p.label === label)

export function storeFor(cellset: Cellset | null = salesCellset(), settings: NavigationSettings = {}) {
  const data = ref<Cellset | null>(cellset)
  const config = ref<NavigationSettings>({ ...settings })
  return { data, config, store: createNavigationStore(data, config) }
}

type Texts = Record<string, unknown>

/**
 * A translator over the given packs, as the application's would answer:
 * `namespace:Key.path`, {{name}} filled in, the key itself when missing.
 * Tests and the harness read English through it.
 */
export function translator(packs: Record<string, Texts>, fallback = 'tablePivot') {
  return {
    language: 'en',
    t(key: string, options: Record<string, unknown> = {}) {
      const [namespace, path] = key.includes(':') ? key.split(':', 2) : [fallback, key]
      const text = path.split('.').reduce<unknown>((node, part) => (node as Texts | undefined)?.[part], packs[namespace])
      if (typeof text !== 'string') return key
      return text.replace(/\{\{(\w+)\}\}/g, (_, name: string) => String(options[name] ?? ''))
    },
  }
}

export const i18n = translator({ tablePivot: english, xmla: xmlaEnglish })
