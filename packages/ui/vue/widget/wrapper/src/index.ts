/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import WidgetWrapper from './WidgetWrapper.vue'
import WidgetWrapperSettings from './WidgetWrapperSettings.vue'
import { WrapperSettingsImpl } from './gen/WrapperSettingsImpl'
import { WrapperSettingsPackage } from './gen/WrapperSettingsPackage'
/*
 * Touching eINSTANCE is what builds the EPackage: until then the class
 * literals are null and an instance cannot say what it is - eClass()
 * returns null and anything reading the model sees nothing. EMF expects
 * the package to register itself when its code is loaded, and for a bundle
 * that moment is here.
 */
WrapperSettingsPackage.eINSTANCE

/*
 * Generated in emf mode now: the plain properties are still there, so
 * `config.title.value` keeps working - what is added is eClass(), feature
 * literals and change notification, which is what a UI model needs to
 * render this from the model rather than from a hand-written form.
 */
const defaultConfig = new WrapperSettingsImpl();

export { WidgetWrapper, WidgetWrapperSettings, defaultConfig }
/* The generated class and its package: what a UI model needs to render
 * these settings from the model rather than from a hand-written form. */
export { WrapperSettingsImpl } from './gen/WrapperSettingsImpl'
export { WrapperSettingsPackage }
export type { WrapperSettings } from './gen/WrapperSettings'
