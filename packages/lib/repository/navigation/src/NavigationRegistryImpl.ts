/*
  Copyright (c) 2025 Contributors to the Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import { injectable } from 'inversify'
import { NavigationRegistry } from './gen/NavigationRegistry'
import { NavigationItem } from './gen/NavigationItem'

@injectable()
export class NavigationRegistryImpl extends NavigationRegistry {
  private itemsMap: Map<string, NavigationItem> = new Map()

  registerNavigationItem(item: NavigationItem): boolean {
    if (!item.id) {
      console.warn('Cannot register navigation item without id')
      return false
    }

    this.itemsMap.set(item.id, item)
    this.items = Array.from(this.itemsMap.values())
    console.log(`Registered navigation item: ${item.id} (${item.label})`)
    return true
  }

  unregisterNavigationItem(id: string): boolean {
    const removed = this.itemsMap.delete(id)
    if (removed) {
      this.items = Array.from(this.itemsMap.values())
      console.log(`Unregistered navigation item: ${id}`)
    }
    return removed
  }

  getNavigationItem(id?: string): NavigationItem {
    if (!id) {
      return new NavigationItem()
    }
    return this.itemsMap.get(id) || new NavigationItem()
  }

  getAllNavigationItems(): NavigationItem {
    // Note: Ecore generator creates wrong return type - should be NavigationItem[]
    // We return the array cast as NavigationItem to match the generated interface
    const items = Array.from(this.itemsMap.values())
      .filter(item => item.visible !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0))
    return items as any as NavigationItem
  }

  // Correct typed method for actual use
  getAllNavigationItemsArray(): NavigationItem[] {
    return Array.from(this.itemsMap.values())
      .filter(item => item.visible !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0))
  }
}
