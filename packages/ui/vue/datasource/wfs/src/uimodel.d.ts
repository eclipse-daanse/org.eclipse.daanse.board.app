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
 * settings use one component of it, typed here as loosely as it is used.
 */
declare module 'org.eclipse.daanse.board.app.ui.vue.uimodel' {
  import type { DefineComponent } from 'vue'
  export const SettingsForm: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
}
