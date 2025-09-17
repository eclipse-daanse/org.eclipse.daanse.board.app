/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

export class AccessError extends Error{
  name:string
  message:string = 'Access Error on Variable Scope'


    constructor(name:string) {
    super();
    this.name = name;
}
}
