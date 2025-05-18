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

import {
  extractDataByPath,
  optionalArrayToArray,
  transposeArray,
  findMaxinArrayByField,
  extractValuesAndFullObject,
  getValueByPath
} from './classes/helpers'
import csv, { ParseOptions } from './classes/csv'

export default {
  extractDataByPath,
  optionalArrayToArray,
  transposeArray,
  findMaxinArrayByField,
  csv,
  widget: {
    extractValuesAndFullObject,
    getValueByPath,
  }
}

export type {
  ParseOptions
}
