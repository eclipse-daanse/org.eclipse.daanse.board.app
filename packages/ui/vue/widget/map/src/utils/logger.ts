/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import debug from 'debug'

// Create namespaced loggers for different parts of the Maps widget
export const logMap = debug('daanse:maps:map')
export const logDatasource = debug('daanse:maps:datasource')
export const logObservations = debug('daanse:maps:observations')
export const logServices = debug('daanse:maps:services')
export const logTasks = debug('daanse:maps:tasks')

// Logger are disabled by default
// Enable via localStorage.debug = 'daanse:maps:*' in browser console