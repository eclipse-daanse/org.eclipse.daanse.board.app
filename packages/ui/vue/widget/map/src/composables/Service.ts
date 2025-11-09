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

  // Helper to add timeout to promises
  const withTimeout = <T>(promise: Promise<T>, timeoutMs: number): Promise<T> => {
    return Promise.race([
      promise,
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error(`Timeout after ${timeoutMs}ms`)), timeoutMs)
      )
    ])
  }

  const createServiceWMS = async (url: string) => {
    let service = undefined
    try {
      // 10 second timeout for service initialization
      service = await withTimeout(new WmsEndpoint(url).isReady(), 10000)
    } catch (e) {
      console.log('not a WMS Service:', e)
      throw e  // Re-throw error so caller can handle it
    }
    return service
  }
  const createServiceWFS = async (url: string) => {
    let service = undefined
    try {
      // 10 second timeout for service initialization
      service = await withTimeout(new WfsEndpoint(url).isReady(), 10000)
    } catch (e) {
      console.log('not a WFS Service:', e)
      throw e  // Re-throw error so caller can handle it
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
