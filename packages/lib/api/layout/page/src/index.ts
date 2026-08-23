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

/**
 * The page layout contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { Component } from 'vue'

export interface LayoutI {
    id: string;
    name: string;
    description: string;
    icon?: string;
    component: Component;
    settings?: Component;
    editor: Component;
}

export interface LayoutRepositoryI {
    addLayout(layout: LayoutI): void;
    removeLayout(layoutId: string): boolean;
    getLayout(layoutId: string): LayoutI | undefined;
    getAllLayouts(): LayoutI[];
    hasLayout(layoutId: string): boolean;
}

export const LAYOUT_REPOSITORY = serviceId<LayoutRepositoryI>('LayoutRepository')
export const identifier = Symbol.for(LAYOUT_REPOSITORY)
