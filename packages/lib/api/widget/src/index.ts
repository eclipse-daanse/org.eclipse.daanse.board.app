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
 * The widget contract - and nothing else. Implementations and consumers
 * both depend on this bundle; neither depends on the other. The OSGi
 * analogue is the API bundle: a package without behaviour that names the
 * services, so the implementation can be replaced or reloaded without
 * touching the twenty-four bundles that provide widgets.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

export interface WidgetConfig {
  component: any
  settingsComponent?: any
  supportedDSTypes: string[]
  icon: string
  name: string
  datasource?: string
}

/**
 * What a widget bundle offers as a service: its type key plus the
 * configuration the palette and the wrapper consume.
 */
export interface WidgetProvider extends WidgetConfig {
  readonly type: string
}

/**
 * Service id under which widget bundles register their provider (the OSGi
 * whiteboard): a bundle that registers appears in the palette, one that
 * goes away disappears.
 */
export const WIDGET_SERVICE_ID = serviceId<WidgetProvider>('daanse.widget')

/** The palette's registry of available widget types. */
export interface WidgetRepository {
  registerWidget(typename: string, config: WidgetConfig): void
  /** Returns whether the type was registered. */
  unregisterWidget(typename: string): boolean
  /** Subscribes to registration changes; returns the unsubscribe function. */
  onChange(listener: () => void): () => void
  getWidget(typename: string): WidgetConfig
  getAllWidgets(): Record<string, WidgetConfig>
}

/** Typed service id - the name and the contract declared once, here. */
export const WIDGET_REPOSITORY = serviceId<WidgetRepository>('WidgetRepository')

/** The matching symbol for Vue-side injection (Symbol.for of the id). */
export const identifier = Symbol.for(WIDGET_REPOSITORY)
