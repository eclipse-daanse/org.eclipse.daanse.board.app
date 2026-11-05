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
 * The composer, offered once.
 *
 * This bundle carries @emfts/uimodel-composer inside it. A bundle that
 * brought a copy of its own would register a second UimodelPackage under
 * the same nsURI, the shared EPackageRegistry would keep whichever came
 * last, and the composer's identity checks against its metamodel would fail
 * for the other. So the composer, its metamodel and what a composer of its
 * own needs to take part are handed out from here, and a bundle that
 * renders a UIModel imports them from this library instead of bundling the
 * composer.
 *
 * A registry passed to UIModelComposer replaces the default one entirely;
 * `composerRegistryWith` starts from the default composers so that a bundle
 * only names the ones it adds or replaces.
 */
import type { Component } from 'vue'
import {
  createComposerRegistry,
  FormViewComposer,
  MasterDetailComposer,
  SectionViewComposer,
  SummaryViewComposer,
  TableViewComposer,
  TabViewComposer,
  type ComposerRegistry,
} from '@emfts/uimodel-composer'

export {
  UIModelComposer,
  ComponentDispatcher,
  FieldsRenderer,
  WidgetComposer,
  FormViewComposer,
  SectionViewComposer,
  TabViewComposer,
  SummaryViewComposer,
  TableViewComposer,
  MasterDetailComposer,
  createComposerRegistry,
  useComposerRegistry,
  useModelTick,
  trackExpressionTick,
  bumpExpressionTick,
  useTranslate,
  UimodelPackage,
  UimodelFactory,
  resolveCrossResourceProxies,
  type ComposerRegistry,
  type UIModel,
  type Component as UIModelComponent,
} from '@emfts/uimodel-composer'

/** The composers UIModelComposer uses when it is given no registry. */
export function defaultComposers(): Record<string, Component> {
  return {
    FormView: FormViewComposer,
    SectionView: SectionViewComposer,
    TabView: TabViewComposer,
    SummaryView: SummaryViewComposer,
    TableView: TableViewComposer,
    MasterDetail: MasterDetailComposer,
  }
}

/**
 * A registry holding the default composers and the given ones, keyed by the
 * name of the UIModel class they draw; a given one replaces a default of
 * the same name.
 */
export function composerRegistryWith(own: Record<string, Component> = {}): ComposerRegistry {
  return createComposerRegistry({ ...defaultComposers(), ...own })
}
