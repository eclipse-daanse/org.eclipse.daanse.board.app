/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import debug from 'debug'

// Force debug to use console.log instead of console.debug
debug.log = console.log.bind(console)

// Enable debug based on localStorage
const debugConfig = localStorage.getItem('debug')
console.log('[Maps Widget] Logger module loaded. localStorage.debug =', debugConfig)
console.log('[Maps Widget] debug.enable exists:', typeof debug.enable)

if (debugConfig) {
  debug.enable(debugConfig)
  console.log('[Maps Widget] Called debug.enable with:', debugConfig)
}

// Create namespaced loggers for different parts of the Maps widget
export const logMap = debug('daanse:maps:map')
export const logDatasource = debug('daanse:maps:datasource')
export const logObservations = debug('daanse:maps:observations')
export const logServices = debug('daanse:maps:services')
export const logTasks = debug('daanse:maps:tasks')
