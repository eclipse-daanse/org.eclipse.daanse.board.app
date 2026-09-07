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
import type { WidgetEventDefinition } from 'org.eclipse.daanse.board.app.lib.events'
import { PayloadImpl } from 'org.eclipse.daanse.board.app.lib.api.events'

export const VideoWidgetEvents: WidgetEventDefinition[] = [
  { name: 'Video Clicked', type: 'click', description: 'Triggered when the video widget is clicked', payloadType: PayloadImpl },
  { name: 'Video Right Clicked', type: 'right_click', description: 'Triggered when the video widget is right-clicked', payloadType: PayloadImpl },
  { name: 'Video Played', type: 'play', description: 'Triggered when the video starts or resumes playing', payloadType: PayloadImpl },
  { name: 'Video Paused', type: 'pause', description: 'Triggered when the video playback is paused', payloadType: PayloadImpl },
  { name: 'Video Time Updated', type: 'timeupdate', description: 'Triggered when the video playback position changes', payloadType: PayloadImpl },
  { name: 'Video Ended', type: 'ended', description: 'Triggered when the video reaches the end', payloadType: PayloadImpl },
  { name: 'Video Error', type: 'error', description: 'Triggered when the video encounters an error', payloadType: PayloadImpl }
];
