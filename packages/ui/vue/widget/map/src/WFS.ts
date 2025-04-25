/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
export default class WFS {
  public geoJson = {}
  private url

  constructor(url: string) {
    this.url = url
  }

  async fetch() {
    this.geoJson = await (await fetch(this.url)).json()
    return this.geoJson
  }
}
