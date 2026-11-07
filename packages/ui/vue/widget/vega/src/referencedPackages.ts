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
 * The packages the vega model refers to, built before it: the column types
 * and transforms are classes of lib.datasource.base since #1295, the
 * payloads extend lib.events' Payload (#1289), and the vega package cannot
 * resolve them until those packages are registered.
 * Imported first by every module that reaches the vega package.
 */
import { BaseconnectionPackage } from 'org.eclipse.daanse.board.app.lib.datasource.base'
/* The payloads of the chart's events extend the events model's Payload (#1289). */
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'

void BaseconnectionPackage.eINSTANCE
void EventsPackage.eINSTANCE
