/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
 * The contract lives in lib.api.widget - this package only implements it.
 * The re-exports keep old import paths compiling during the transition.
 */
import { component, injectAll } from '@eclipse-daanse/tsm'
import {
  WIDGET_REPOSITORY,
  WIDGET_SERVICE_ID,
  type WidgetConfig,
  type WidgetProvider,
  type WidgetRepository,
} from 'org.eclipse.daanse.board.app.lib.api.widget'

export {
  WIDGET_SERVICE_ID,
  WIDGET_REPOSITORY,
  identifier,
  type WidgetConfig,
  type WidgetProvider,
  type WidgetRepository,
} from 'org.eclipse.daanse.board.app.lib.api.widget'

/*
 * Literal on purpose (tsm#21): the build-time component scan cannot yet read
 * a constant behind a bare import. The type annotation ties this literal to
 * the contract; the value must match WIDGET_REPOSITORY in lib.api.widget.
 */
const WIDGET_REPOSITORY_SERVICE: typeof WIDGET_REPOSITORY = 'WidgetRepository'

/**
 * The palette as a whiteboard consumer, in the declarative form: one
 * dynamic 0..n reference instead of a hand-written tracker. The OSGi
 * analogue is `@Reference(cardinality = MULTIPLE, policy = DYNAMIC)`.
 *
 * The loader keeps the collection current on every registry event and
 * assigns it only when its content actually changed, so the setter is the
 * change notification. Ranking is the registry's: references arrive winner
 * first, so on a duplicate widget type the highest-ranked provider shadows
 * the rest - and takes over the moment it appears or leaves.
 *
 * `registerWidget`/`unregisterWidget` remain for manual registrations (a
 * test, a host-side widget); tracked providers always win over a manual
 * entry of the same type.
 */
@component({
  service: [WIDGET_REPOSITORY_SERVICE],
})
export class TrackedWidgetRepository implements WidgetRepository {
  private tracked: WidgetProvider[] = []
  private readonly manual: Record<string, WidgetConfig> = {}
  private readonly changeListeners = new Set<() => void>()

  @injectAll(WIDGET_SERVICE_ID)
  set providers(providers: WidgetProvider[]) {
    this.tracked = providers
    this.notifyChange()
  }

  get providers(): WidgetProvider[] {
    return this.tracked
  }

  registerWidget(typename: string, config: WidgetConfig): void {
    this.manual[typename] = config
    this.notifyChange()
  }

  /** Takes back a manual registration; returns whether the type was known. */
  unregisterWidget(typename: string): boolean {
    if (!(typename in this.manual)) {
      return false
    }
    delete this.manual[typename]
    this.notifyChange()
    return true
  }

  getWidget(typename: string): WidgetConfig {
    return this.getAllWidgets()[typename]
  }

  getAllWidgets(): Record<string, WidgetConfig> {
    const widgets: Record<string, WidgetConfig> = { ...this.manual }
    /*
     * First occurrence per type wins: the registry hands references out in
     * ranking order, so this IS the OSGi selection rule.
     */
    const seen = new Set<string>()
    for (const provider of this.tracked) {
      if (seen.has(provider.type)) continue
      seen.add(provider.type)
      widgets[provider.type] = provider
    }
    return widgets
  }

  /**
   * Called after every registration change.
   *
   * Framework-free on purpose - this package must not depend on Vue. The
   * wrapper turns the callback into reactivity on its side, so a widget
   * whose bundle stops flips to the placeholder instead of silently
   * rendering stale code, and flips back when the bundle starts again.
   * Returns the unsubscribe function.
   */
  onChange(listener: () => void): () => void {
    this.changeListeners.add(listener)
    return () => this.changeListeners.delete(listener)
  }

  private notifyChange(): void {
    for (const listener of this.changeListeners) {
      try {
        listener()
      } catch {
        // One broken subscriber must not keep the others from hearing it
      }
    }
  }
}
