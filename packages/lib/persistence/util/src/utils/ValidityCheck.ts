/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { ValidityCheckI } from '../api/ValidityCheckI'

export default class ValidityCheck implements ValidityCheckI {
  /**
   * Whether stored content is a workspace.
   *
   * Two shapes are: a resource, which names the class it holds, and the
   * one written before the workspace was modelled, recognised by the keys
   * it always had - `conections` among them, misspelled since the first
   * board was ever saved.
   */
  checkContent(json: any): boolean {
    if (!json || typeof json !== 'object') return false

    if (typeof json.eClass === 'string' && json.eClass.includes('#//Workspace')) {
      return true
    }

    const keys = Object.keys(json)
    return keys.includes('datasources') && keys.includes('conections')
  }
}
