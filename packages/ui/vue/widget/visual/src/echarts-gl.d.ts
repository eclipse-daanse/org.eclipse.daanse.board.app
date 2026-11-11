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

/* echarts-gl ships no declarations; these are the two entries this widget installs from. */
declare module 'echarts-gl/charts' {
  type Installer = (registers: unknown) => void
  export const Bar3DChart: Installer
  export const Scatter3DChart: Installer
  export const SurfaceChart: Installer
}

declare module 'echarts-gl/components' {
  export const Grid3DComponent: (registers: unknown) => void
}
