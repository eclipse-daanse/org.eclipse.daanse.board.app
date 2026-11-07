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
 * What the settings dialog lends the fields of the generated symbol-layer
 * form (#1296): the place mode on the preview map and whether a model file
 * can be read. Neither is a value of the model, so the form cannot know them;
 * the dialog provides them and the two field widgets inject them.
 */
import type { InjectionKey, Ref } from 'vue'

export interface SymbolLayerContext {
  /** The id of the layer whose instances the clicks on the preview place, if any. */
  placingId: Ref<string | undefined>
  togglePlacing(layer: { id?: unknown }): void
  /** A sentence on the model file at this address: loading, ready, or why it cannot be read. */
  fileStatus(url: unknown): { text: string; error: boolean }
}

export const SYMBOL_LAYER_CONTEXT: InjectionKey<SymbolLayerContext> = Symbol('maplibre.symbolLayerContext')
