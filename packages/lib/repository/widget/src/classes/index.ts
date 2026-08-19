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

export interface WidgetConfig {
  component: any
  settingsComponent?: any
  supportedDSTypes: string[]
  icon: string
  name: string
  datasource?: string
}

/**
 * Service ID under which widget bundles register their provider.
 *
 * The repository tracks registrations under this ID (the OSGi ServiceTracker
 * pattern): a bundle that registers appears in the palette, one that goes
 * away disappears - nobody calls registerWidget by hand for bundles.
 */
export const WIDGET_SERVICE_ID = 'daanse.widget'

/**
 * What a widget bundle offers as a service: its type key plus the
 * configuration the palette and the wrapper consume.
 */
export interface WidgetProvider extends WidgetConfig {
  readonly type: string
}

export class WidgetRepository {
  private availableWidgets: Record<string, WidgetConfig> = {}

  registerWidget(typename: string, config: WidgetConfig) {
    this.availableWidgets[typename] = config
  }

  /**
   * Nimmt eine Registrierung zurück. Gibt zurück, ob der Typ registriert war.
   *
   * Gegenstück zu registerWidget, damit ein Widget-Modul seine Registrierung
   * in deactivate() wieder aufheben kann.
   */
  unregisterWidget(typename: string): boolean {
    if (!(typename in this.availableWidgets)) {
      return false
    }
    delete this.availableWidgets[typename]
    return true
  }

  getWidget(typename: string): WidgetConfig {
    return this.availableWidgets[typename]
  }

  getAllWidgets(): Record<string, WidgetConfig> {
    return this.availableWidgets
  }
}
