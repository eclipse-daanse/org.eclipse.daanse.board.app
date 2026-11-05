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

import type { InjectionKey, Ref } from 'vue'

/**
 * Who puts the widgets in a stacking context of their own while the
 * weather runs (#1260).
 *
 * The weather layer does it on its own board. But a light layer inside it
 * blends its front canvas additively, and an element that holds a blended
 * one is drawn as a group of its own - which Chrome also takes as the end
 * of what a widget's backdrop-filter sees. The page behind the board is
 * outside that group, so a frame's blur showed nothing of it while the
 * weather ran.
 *
 * So a light layer inside takes the stacking context over, one level
 * down, on its own board: the widgets stay under the weather and the
 * light, in the same order, and the blended canvas is in no group but the
 * page's.
 */
export interface WeatherBoardStacking {
  /** Whether the weather runs, and the widgets have to stay under it. */
  running: Readonly<Ref<boolean>>
  /** Called by a layer inside that stacks the widgets itself; what it returns hands it back. */
  stackInside(): () => void
}

export const WEATHER_BOARD_STACKING: InjectionKey<WeatherBoardStacking> = Symbol('weatherBoardStacking')
