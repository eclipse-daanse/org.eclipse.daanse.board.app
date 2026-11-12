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
 * ui.vue.uimodel is built as a bundle only and brings no declarations; the
 * settings use these parts of it, typed here as loosely as they are used.
 */
declare module 'org.eclipse.daanse.board.app.ui.vue.uimodel' {
  import type { Component, DefineComponent } from 'vue'
  export const SettingsForm: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export const SettingsListWidget: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export const SettingsFieldWidget: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export function registerFieldWidget(eClass: unknown, featureName: string, component: Component): () => void
}
