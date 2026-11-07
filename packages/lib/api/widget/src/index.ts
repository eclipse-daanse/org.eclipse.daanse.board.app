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

import { serviceId, type Reads } from 'org.eclipse.daanse.board.app.lib.core'


/**
 * A form rendered from a model instead of written by hand.
 *
 * Carried on the registration like the icon, so whoever shows the settings
 * reads this rather than mounting a component, and needs no dependency on
 * the bundle it came from.
 *
 * The same shape appears on a layout - the two are one idea a level
 * apart, and neither api bundle depends on the other to say it.
 */
export interface SettingsFormI {
    /** The form itself, as XMI. */
    xmi: string;
    /**
     * The Ecore the form is written for, as text.
     *
     * Only the sentences in it are wanted: the code generator drops the
     * GenModel documentation, so a field can say what it is for only if the
     * model file itself is handed over. Without it the form still renders,
     * just without the explanations.
     */
    ecore?: string;
    /** Names the loaded resource, and is its cache key. */
    uri?: string;
    /** The package the form's feature references point at. */
    ePackage: () => unknown;
    /** Makes an empty instance of the settings class. */
    create: () => unknown;
    /** Forms for the classes that appear inside this one. */
    entryForms?: Array<{ xmi: string; uri?: string }>;
    /**
     * Sections of a hand-written form that the model does not cover, by the
     * data-section-id they carry - not by their name, which is translated.
     */
    unmodelledSections?: string[];
    /**
     * What the free-text fields of the form suggest - each ComboboxWidget
     * in it asks with the object it edits and the feature's name (#1285).
     * The context says which data source the widget reads, as far as the
     * dialog knows it; a chart suggests the fields of that source.
     */
    suggest?: (owner: unknown, feature: string, context: SettingsFormContext) => Promise<string[]> | string[];
}

/** What the settings dialog knows about the widget a form edits. */
export interface SettingsFormContext {
    /** The data source the widget reads; empty when it reads none. */
    datasourceId?: string;
}

export interface WidgetConfig {
  component: any
  settingsComponent?: any
  settingsForm?: SettingsFormI
  /**
   * The data this widget reads, as the shapes a source would have to
   * answer - or READS_NOTHING where it shows none.
   *
   * It used to be `supportedDSTypes`, a list of source types that held
   * three different kinds of value and that nothing read. A widget does
   * not care which kind of source it is given; it cares whether what
   * comes back is the shape it asked `useDatasourceRepository` for, and
   * that is what a source can be matched against without naming it (#1183).
   */
  reads: Reads
  icon: string
  /** What the palette calls it when there is no text for nameKey. */
  name: string
  /**
   * Translation key for the name, such as 'chart:Widget.name'. Optional, so
   * a widget without a language pack still shows up under its name.
   */
  nameKey?: string
  /**
   * A widget that is no picture on the board, such as a light source
   * (#1242): the wrapper draws no frame around it - no background, no
   * border, no shadow, no title - and, while the board is not edited, the
   * widget takes no pointer, so whatever lies under it stays operable.
   */
  frameless?: boolean
}

/**
 * What the wrapper provides to the widget inside it: whether the board is
 * being edited, as `{ value: boolean }` (a Vue ref). A widget that looks
 * different while it is placed - a frameless one shows a marker then -
 * injects it; outside a wrapper there is none, and the board is not edited.
 */
export const WIDGET_EDIT_MODE = Symbol.for('daanse.widget.editMode')

/**
 * The attribute the wrapper puts on its root element when its widget is
 * frameless. Whoever measures the widgets on a page reads it there: the
 * weather passes such a widget by, as nothing is seen of it (#1242).
 */
export const FRAMELESS_ATTRIBUTE = 'data-frameless'

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

/**
 * A tab a bundle contributes to a widget's settings.
 *
 * The overlay's own tabs are the ones every widget has: its data, its
 * look, its frame, its variables. A bundle that has something to say
 * about any widget - what happens when one raises an event, say - had no
 * way to say it here, and the only place to do that work was a screen of
 * its own that knows nothing about which widget is open.
 *
 * The datasource side has had this shape for a while in
 * `StoreIdentifiers.Views`; this is the same idea for widget settings.
 */
export interface WidgetSettingsTab {
  /** What the overlay addresses it by, and keeps in its `tab`. */
  readonly id: string
  /** A translation key, namespaced as the contributing bundle's texts are. */
  readonly label: string
  /**
   * Rendered with `widgetId` and `widgetType` - the instance it is about
   * and what kind it is. Not the model object: a tab wants to know which
   * widget, not to be handed one to write into.
   */
  readonly component: unknown
  /** Where it sits among the overlay's own; larger is further right. */
  readonly order?: number
  /**
   * Whether this tab has anything to say about that kind of widget.
   *
   * Asked rather than assumed, and answered by whoever contributes: the
   * events tab is of no use on a widget that raises none, and the overlay
   * has no business knowing what an event is.
   */
  appliesTo?(widgetType: string): boolean
}

/**
 * Service id a bundle registers a settings tab under - the whiteboard
 * again: a bundle that registers one gets a tab, one that goes away
 * loses it.
 */
export const WIDGET_SETTINGS_TAB_SERVICE_ID = serviceId<WidgetSettingsTab>(
  'daanse.widget.settingsTab',
)

/** What the overlay reads to find the tabs it did not declare itself. */
export interface WidgetSettingsTabRegistry {
  /** In the order they are shown. */
  getTabs(widgetType: string): WidgetSettingsTab[]
  /** Subscribes to registration changes; returns the unsubscribe function. */
  onChange(listener: () => void): () => void
}

export const WIDGET_SETTINGS_TABS = serviceId<WidgetSettingsTabRegistry>(
  'WidgetSettingsTabRegistry',
)

/** The matching symbol for Vue-side injection. */
export const settingsTabsIdentifier = Symbol.for(WIDGET_SETTINGS_TABS)

/** The matching symbol for Vue-side injection (Symbol.for of the id). */
export const identifier = Symbol.for(WIDGET_REPOSITORY)
