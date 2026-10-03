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


/**
 * A form rendered from a model instead of written by hand.
 *
 * Carried on the registration like the icon, so whoever shows the settings
 * reads this rather than mounting a component, and needs no dependency on
 * the bundle it came from.
 *
 * The same shape appears on a widget provider - the two are one idea a level
 * apart, and neither api bundle depends on the other to say it.
 */
export interface SettingsFormI {
    /** The form itself, as XMI. */
    xmi: string;
    /** Names the loaded resource, and is its cache key. */
    uri?: string;
    /** The package the form's feature references point at. */
    ePackage: () => unknown;
    /** Makes an empty instance of the settings class. */
    create: () => unknown;
    /** Forms for the classes that appear inside this one. */
    entryForms?: Array<{ xmi: string; uri?: string }>;
    /** Sections of a hand-written form that the model does not cover. */
    unmodelledSections?: string[];
}

export interface LayoutI {
    id: string;
    name: string;
    description: string;
    icon?: string;
    component: Component;
    settings?: Component;
    settingsForm?: SettingsFormI;
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
