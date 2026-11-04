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

import { WidgetActionInterfaceImpl } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'

export abstract class VideoWidgetInterface extends WidgetActionInterfaceImpl {

  @WidgetAction({ eventType: 'video.play', parameters: [] })
  play(): void {
    throw new Error("play not implemented");
  }

  @WidgetAction({ eventType: 'video.pause', parameters: [] })
  pause(): void {
    throw new Error("pause not implemented");
  }

  @WidgetAction({ eventType: 'video.stop', parameters: [] })
  stop(): void {
    throw new Error("stop not implemented");
  }

  @WidgetAction({
    eventType: 'video.seek',
    parameters: [
      { name: 'time', type: 'number', label: 'video:Action.time' },
    ],
  })
  seek(time: number): void {
    throw new Error("seek not implemented");
  }

  @WidgetAction({ eventType: 'video.mute', parameters: [] })
  mute(): void {
    throw new Error("mute not implemented");
  }

  @WidgetAction({ eventType: 'video.unmute', parameters: [] })
  unmute(): void {
    throw new Error("unmute not implemented");
  }

  @WidgetAction({
    eventType: 'video.setVolume',
    parameters: [
      { name: 'volume', type: 'number', label: 'video:Action.volume' },
    ],
  })
  setVolume(volume: number): void {
    throw new Error("setVolume not implemented");
  }
}
