/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { type Ref, ref } from 'vue'
import { v4 } from 'uuid'


const useOGCService = () => {

  // Helper to add timeout to fetch
  const fetchWithTimeout = async (url: string, timeoutMs: number): Promise<Response> => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

    try {
      const response = await fetch(url, { signal: controller.signal })
      clearTimeout(timeoutId)
      return response
    } catch (e: any) {
      clearTimeout(timeoutId)
      if (e.name === 'AbortError') {
        throw new Error(`Timeout after ${timeoutMs}ms`)
      }
      throw e
    }
  }

  // Parse WMS GetCapabilities XML
  const parseWMSCapabilities = (xml: Document, url: string) => {
    const service: any = {
      _capabilitiesUrl: url,
      _info: {},
      _layers: [],
      _operationUrls: {}
    }

    // Get service info
    const serviceEl = xml.querySelector('Service')
    if (serviceEl) {
      service._info.title = serviceEl.querySelector('Title')?.textContent || ''
      service._info.name = serviceEl.querySelector('Name')?.textContent || ''
      service._info.abstract = serviceEl.querySelector('Abstract')?.textContent || ''
    }

    // Get operation URLs from Capability/Request
    const requestEl = xml.querySelector('Capability > Request')
    if (requestEl) {
      const operations = ['GetMap', 'GetCapabilities', 'GetFeatureInfo', 'GetLegendGraphic']
      operations.forEach(opName => {
        const opEl = requestEl.querySelector(opName)
        if (opEl) {
          // Try different paths for the URL
          const onlineResource = opEl.querySelector('DCPType > HTTP > Get > OnlineResource')
          if (onlineResource) {
            const href = onlineResource.getAttribute('xlink:href') || onlineResource.getAttribute('href')
            if (href) {
              service._operationUrls[opName] = href
            }
          }
        }
      })
    }

    // Fallback: use base URL if no GetMap URL found
    if (!service._operationUrls['GetMap']) {
      // Extract base URL (remove query params)
      service._operationUrls['GetMap'] = url.split('?')[0]
    }

    // Get layers
    const parseLayers = (parentEl: Element, parentLayers: any[] = []) => {
      const layerEls = parentEl.querySelectorAll(':scope > Layer')
      layerEls.forEach((layerEl) => {
        const layer: any = {
          name: layerEl.querySelector(':scope > Name')?.textContent || '',
          title: layerEl.querySelector(':scope > Title')?.textContent || '',
          abstract: layerEl.querySelector(':scope > Abstract')?.textContent || '',
          children: []
        }

        // Get bounding box
        const bboxEl = layerEl.querySelector(':scope > BoundingBox, :scope > LatLonBoundingBox, :scope > EX_GeographicBoundingBox')
        if (bboxEl) {
          layer.boundingBox = {
            minx: parseFloat(bboxEl.getAttribute('minx') || bboxEl.querySelector('westBoundLongitude')?.textContent || '0'),
            miny: parseFloat(bboxEl.getAttribute('miny') || bboxEl.querySelector('southBoundLatitude')?.textContent || '0'),
            maxx: parseFloat(bboxEl.getAttribute('maxx') || bboxEl.querySelector('eastBoundLongitude')?.textContent || '0'),
            maxy: parseFloat(bboxEl.getAttribute('maxy') || bboxEl.querySelector('northBoundLatitude')?.textContent || '0')
          }
        }

        // Recursively parse child layers
        parseLayers(layerEl, layer.children)

        parentLayers.push(layer)
      })
    }

    const capabilityEl = xml.querySelector('Capability')
    if (capabilityEl) {
      parseLayers(capabilityEl, service._layers)
    }

    // Add getLayers method to match ogc-client interface
    service.getLayers = () => {
      const flattenLayers = (layers: any[]): any[] => {
        const result: any[] = []
        layers.forEach(layer => {
          result.push(layer)
          if (layer.children && layer.children.length > 0) {
            result.push(...flattenLayers(layer.children))
          }
        })
        return result
      }
      return flattenLayers(service._layers)
    }

    // Add getOperationUrl method to match ogc-client interface
    service.getOperationUrl = (operationName: string) => {
      return service._operationUrls[operationName] || service._operationUrls['GetMap'] || url.split('?')[0]
    }

    return service
  }

  // Parse WFS GetCapabilities XML
  const parseWFSCapabilities = (xml: Document, url: string) => {
    const service: any = {
      _capabilitiesUrl: url,
      _info: {},
      _featureTypes: []
    }

    // Get service info
    const serviceEl = xml.querySelector('ServiceIdentification, Service')
    if (serviceEl) {
      service._info.title = serviceEl.querySelector('Title')?.textContent || ''
      service._info.name = serviceEl.querySelector('Name, ServiceType')?.textContent || ''
      service._info.abstract = serviceEl.querySelector('Abstract')?.textContent || ''
    }

    // Get feature types
    const featureTypeEls = xml.querySelectorAll('FeatureType')
    featureTypeEls.forEach((ftEl) => {
      service._featureTypes.push({
        name: ftEl.querySelector('Name')?.textContent || '',
        title: ftEl.querySelector('Title')?.textContent || '',
        abstract: ftEl.querySelector('Abstract')?.textContent || ''
      })
    })

    // Add getFeatureTypes method to match ogc-client interface
    service.getFeatureTypes = () => service._featureTypes

    return service
  }

  const createServiceWMS = async (url: string) => {
    try {
      // Build GetCapabilities URL
      const capUrl = url.includes('?')
        ? `${url}&SERVICE=WMS&REQUEST=GetCapabilities`
        : `${url}?SERVICE=WMS&REQUEST=GetCapabilities`

      console.log('[Service.ts] Fetching WMS capabilities from:', capUrl)
      const response = await fetchWithTimeout(capUrl, 15000)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const text = await response.text()
      const parser = new DOMParser()
      const xml = parser.parseFromString(text, 'text/xml')

      // Check for parse errors
      const parseError = xml.querySelector('parsererror')
      if (parseError) {
        throw new Error('Invalid XML response')
      }

      // Check if it's a WMS capabilities document
      const root = xml.documentElement
      if (!root.tagName.includes('Capabilities') && root.tagName !== 'WMT_MS_Capabilities') {
        throw new Error('Not a valid WMS GetCapabilities response')
      }

      const service = parseWMSCapabilities(xml, url)
      console.log('[Service.ts] WMS service parsed:', service)
      console.log('[Service.ts] WMS _info:', service._info)
      console.log('[Service.ts] WMS _layers:', service._layers)
      console.log('[Service.ts] WMS getLayers:', typeof service.getLayers)
      console.log('[Service.ts] WMS getLayers():', service.getLayers())
      console.log('[Service.ts] WMS getOperationUrl:', typeof service.getOperationUrl)
      console.log('[Service.ts] WMS getOperationUrl(GetMap):', service.getOperationUrl('GetMap'))
      console.log('[Service.ts] WMS _operationUrls:', service._operationUrls)
      return service
    } catch (e) {
      console.log('not a WMS Service:', e)
      throw e
    }
  }

  const createServiceWFS = async (url: string) => {
    try {
      // Build GetCapabilities URL
      const capUrl = url.includes('?')
        ? `${url}&SERVICE=WFS&REQUEST=GetCapabilities`
        : `${url}?SERVICE=WFS&REQUEST=GetCapabilities`

      console.log('[Service.ts] Fetching WFS capabilities from:', capUrl)
      const response = await fetchWithTimeout(capUrl, 15000)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const text = await response.text()
      const parser = new DOMParser()
      const xml = parser.parseFromString(text, 'text/xml')

      // Check for parse errors
      const parseError = xml.querySelector('parsererror')
      if (parseError) {
        throw new Error('Invalid XML response')
      }

      // Check if it's a WFS capabilities document
      const root = xml.documentElement
      if (!root.tagName.includes('Capabilities')) {
        throw new Error('Not a valid WFS GetCapabilities response')
      }

      const service = parseWFSCapabilities(xml, url)
      console.log('[Service.ts] WFS service parsed:', service)
      return service
    } catch (e) {
      console.log('not a WFS Service:', e)
      throw e
    }
  }

  return {
    createServiceWMS,
    createServiceWFS
  }
}

export {
  useOGCService
}
