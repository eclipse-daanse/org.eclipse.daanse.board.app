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

import { WidgetActionInterface } from 'org.eclipse.daanse.board.app.lib.events'
import { WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'

export abstract class VideoWidgetInterface extends WidgetActionInterface {

  @WidgetAction({ eventType: 'video.play' })
  play(): void {
    throw new Error("play not implemented");
  }

  @WidgetAction({ eventType: 'video.pause' })
  pause(): void {
    throw new Error("pause not implemented");
  }

  @WidgetAction({ eventType: 'video.stop' })
  stop(): void {
    throw new Error("stop not implemented");
  }

  @WidgetAction({ eventType: 'video.seek' })
  seek(time: number): void {
    throw new Error("seek not implemented");
  }

  @WidgetAction({ eventType: 'video.mute' })
  mute(): void {
    throw new Error("mute not implemented");
  }

  @WidgetAction({ eventType: 'video.unmute' })
  unmute(): void {
    throw new Error("unmute not implemented");
  }

  @WidgetAction({ eventType: 'video.setVolume' })
  setVolume(volume: number): void {
    throw new Error("setVolume not implemented");
  }
}
