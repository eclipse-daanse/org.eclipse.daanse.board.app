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
import type { Events } from "./Events";
import type { XEvent } from "./XEvent";

/**
 * EventType
 * @targetNSAlias `eng300_300`
 * @targetNamespace `http://schemas.microsoft.com/analysisservices/2011/engine/300/300`
 */
export interface EventType {
  /** Events */
  Events?: Events;
  /** XEvent */
  XEvent?: XEvent;
}
