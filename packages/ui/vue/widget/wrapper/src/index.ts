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
import { Container } from 'inversify'
import {defaultConfig} from './default/wrapperConfig'


const init = (container: Container) => {
  console.log('WidgetWrapper initialized')

}

export { WidgetWrapper, WidgetWrapperSettings,defaultConfig ,init}
