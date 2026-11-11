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
 * ********************************************************************/

/*
 * The settings form, for the test that mounts it. The package has no
 * declarations until it is built, and checking its sources under this
 * package's tsconfig reports its own findings; vitest resolves it to its
 * sources either way.
 */
declare module 'org.eclipse.daanse.board.app.ui.vue.uimodel' {
  import type { DefineComponent } from 'vue'
  export const SettingsForm: DefineComponent<any, any, any>
}
