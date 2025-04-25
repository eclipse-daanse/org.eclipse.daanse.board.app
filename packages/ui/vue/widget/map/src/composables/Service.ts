/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { type Ref, ref } from 'vue'
import { OgcApiEndpoint, WfsEndpoint, WmsEndpoint } from '@camptocamp/ogc-client'
import { enableFallbackWithoutWorker } from '@camptocamp/ogc-client'

enableFallbackWithoutWorker()
import { v4 } from 'uuid'


const useOGCService = () => {

  const createServiceWMS = async (url: string) => {
    let service = undefined
    try {
      service = await new WmsEndpoint(url).isReady()
    } catch (e) {
      console.log('not a WFS Services. skipped')
    }
    return service
  }
  const createServiceWFS = async (url: string) => {
    let service = undefined
    try {
      service = await new WfsEndpoint(url).isReady()
    } catch (e) {
      console.log('not a WMS Services. skipped')
    }
    return service

  }

  return {
    createServiceWMS,
    createServiceWFS
  }
}

export {
  useOGCService
}
