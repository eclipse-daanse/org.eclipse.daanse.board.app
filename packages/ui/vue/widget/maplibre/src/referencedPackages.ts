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
 * The packages the maplibre model refers to, built before it: the transforms
 * of a symbol layer are the shared class of lib.datasource.base (#1296), and
 * the maplibre package cannot resolve it until that package is registered.
 */
import { BaseconnectionPackage } from 'org.eclipse.daanse.board.app.lib.datasource.base'

void BaseconnectionPackage.eINSTANCE
