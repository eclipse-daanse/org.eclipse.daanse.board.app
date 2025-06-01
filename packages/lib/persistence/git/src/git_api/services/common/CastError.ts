/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
export class CastError extends Error {
  // . declare any additional properties or methods .
}

export class AuthentificationError extends Error {
  constructor(message: string, public code: number) {
    super(message)
    this.name = 'AuthentificationError'
  }
}
