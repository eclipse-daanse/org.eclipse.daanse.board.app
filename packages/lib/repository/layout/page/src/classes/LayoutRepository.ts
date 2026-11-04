/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { LayoutI } from '../interfaces/LayoutI'
import { LayoutRepositoryI } from '../interfaces/LayoutRepositoryI'

export class LayoutRepository implements LayoutRepositoryI {
  private availableLayouts : Map<string,LayoutI> = new Map();
  private readonly changeListeners = new Set<() => void>();

  addLayout(layout: LayoutI): void {
    this.availableLayouts.set(layout.id, layout);
    this.notifyChange();
  }

  removeLayout(layoutId: string): boolean {
    const removed = this.availableLayouts.delete(layoutId);
    if (removed) this.notifyChange();
    return removed;
  }

  onChange(listener: () => void): () => void {
    this.changeListeners.add(listener);
    return () => this.changeListeners.delete(listener);
  }

  private notifyChange(): void {
    for (const listener of this.changeListeners) {
      try {
        listener();
      } catch {
        // One broken subscriber must not keep the others from hearing it
      }
    }
  }

  getLayout(layoutId: string): LayoutI | undefined {
    return this.availableLayouts.get(layoutId);
  }

  getAllLayouts(): LayoutI[] {
    return Array.from(this.availableLayouts.values());
  }

  hasLayout(layoutId: string): boolean {
    return this.availableLayouts.has(layoutId);
  }
}
