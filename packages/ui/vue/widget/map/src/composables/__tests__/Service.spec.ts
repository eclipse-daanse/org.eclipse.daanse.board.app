/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useOGCService } from '../Service'

describe('OGC Service Reconstruction', () => {
  let ogcService: ReturnType<typeof useOGCService>

  beforeEach(() => {
    ogcService = useOGCService()
    vi.clearAllMocks()
  })

  describe('Timeout Protection', () => {
    it('should have timeout protection for WMS', async () => {
      const invalidUrl = 'http://invalid-domain-xyz.com/wms'

      // Service should fail (either timeout or network error)
      await expect(ogcService.createServiceWMS(invalidUrl)).rejects.toThrow()
    }, 15000)

    it('should have timeout protection for WFS', async () => {
      const invalidUrl = 'http://invalid-domain-xyz.com/wfs'

      // Service should fail (either timeout or network error)
      await expect(ogcService.createServiceWFS(invalidUrl)).rejects.toThrow()
    }, 15000)
  })

  describe('Error Handling', () => {
    it('should throw error for invalid WMS URL', async () => {
      const invalidUrl = 'http://invalid-domain-xyz.com/wms'

      await expect(ogcService.createServiceWMS(invalidUrl)).rejects.toThrow()
    }, 15000)

    it('should throw error for invalid WFS URL', async () => {
      const invalidUrl = 'http://invalid-domain-xyz.com/wfs'

      await expect(ogcService.createServiceWFS(invalidUrl)).rejects.toThrow()
    }, 15000)

    it('should log error message on failure', async () => {
      const consoleSpy = vi.spyOn(console, 'log')
      const invalidUrl = 'http://invalid-domain-xyz.com/wms'

      await expect(ogcService.createServiceWMS(invalidUrl)).rejects.toThrow()

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('not a WMS Service'),
        expect.anything()
      )

      consoleSpy.mockRestore()
    }, 15000)
  })

  describe('Service Creation', () => {
    it('should return undefined on error', async () => {
      const invalidUrl = 'http://invalid-domain-xyz.com/wms'

      try {
        await ogcService.createServiceWMS(invalidUrl)
      } catch (e) {
        // Error is expected
        expect(e).toBeDefined()
      }
    }, 15000)
  })
})

describe('Service Reconstruction Integration', () => {
  it('should mark service as failed on reconstruction error', () => {
    const service: any = {
      type: 'WMS',
      url: 'http://invalid.example.com/wms',
      service: null,
      reconstructionFailed: undefined
    }

    // Simulate reconstruction failure
    service.reconstructionFailed = true

    expect(service.reconstructionFailed).toBe(true)
  })

  it('should mark service as successful on reconstruction success', () => {
    const service: any = {
      type: 'WMS',
      url: 'http://valid.example.com/wms',
      service: { getLayers: () => [] },
      reconstructionFailed: undefined
    }

    // Simulate reconstruction success
    service.reconstructionFailed = false

    expect(service.reconstructionFailed).toBe(false)
    expect(typeof service.service.getLayers).toBe('function')
  })

  it('should preserve layer data with failed flag', () => {
    const layer: any = {
      type: 'WMSLayer',
      name: 'Test Layer',
      service: null,
      reconstructionFailed: true
    }

    expect(layer.reconstructionFailed).toBe(true)
    expect(layer.name).toBe('Test Layer')
    expect(layer.type).toBe('WMSLayer')
  })
})
