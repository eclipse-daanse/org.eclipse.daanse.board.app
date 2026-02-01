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
  BaseConnection,
  type BaseConnectionConfig,
} from 'org.eclipse.daanse.board.app.lib.connection.base'

export interface IRestConnectionConfig extends BaseConnectionConfig {
  url: string
  cacheEnabled?: boolean
  cacheTTL?: number // Time-to-live in milliseconds (default: 30000)
}

interface CacheEntry {
  response: Response
  body: any
  timestamp: number
}

export class RestConnection extends BaseConnection {
  private url = ''
  private cacheEnabled = false
  private cacheTTL = 30000 // 30 seconds default
  private cache: Map<string, CacheEntry> = new Map()
  private pendingRequests: Map<string, Promise<Response>> = new Map()

  constructor() {
    super()
  }

  init(configuration: IRestConnectionConfig): void {
    super.init(configuration)

    this.url = configuration.url
    this.cacheEnabled = configuration.cacheEnabled ?? false
    this.cacheTTL = configuration.cacheTTL ?? 30000
  }

  private getCacheKey(url: string, options?: RequestInit): string {
    const method = options?.method || 'GET'
    const body = options?.body ? JSON.stringify(options.body) : ''
    return `${method}:${url}:${body}`
  }

  private isValidCacheEntry(entry: CacheEntry): boolean {
    return Date.now() - entry.timestamp < this.cacheTTL
  }

  private cleanExpiredCache(): void {
    const now = Date.now()
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp >= this.cacheTTL) {
        this.cache.delete(key)
      }
    }
  }

  clearCache(): void {
    this.cache.clear()
  }

  fetch(config: any, options?: RequestInit): Promise<Response> {
    const fullUrl = this.url + config.url
    const cacheKey = this.getCacheKey(fullUrl, options)
    const method = options?.method || 'GET'

    // Only cache GET requests
    const shouldCache = this.cacheEnabled && method === 'GET'

    if (shouldCache) {
      // Check cache first
      const cachedEntry = this.cache.get(cacheKey)
      if (cachedEntry && this.isValidCacheEntry(cachedEntry)) {
        // Return cloned response from cache
        const clonedResponse = new Response(JSON.stringify(cachedEntry.body), {
          status: cachedEntry.response.status,
          statusText: cachedEntry.response.statusText,
          headers: cachedEntry.response.headers,
        })
        return Promise.resolve(clonedResponse)
      }

      // Request deduplication: check if same request is already in flight
      const pendingRequest = this.pendingRequests.get(cacheKey)
      if (pendingRequest) {
        return pendingRequest.then(response => response.clone())
      }
    }

    // Make the actual request
    const requestPromise = fetch(fullUrl, options)
      .then(async response => {
        if (shouldCache && response.ok) {
          // Clone response before reading body (response can only be read once)
          const clonedResponse = response.clone()
          try {
            const body = await clonedResponse.json()
            this.cache.set(cacheKey, {
              response: response.clone(),
              body,
              timestamp: Date.now(),
            })
          } catch {
            // Response is not JSON, don't cache
          }
        }
        return response
      })
      .finally(() => {
        this.pendingRequests.delete(cacheKey)
        // Periodically clean expired cache entries
        if (this.cache.size > 100) {
          this.cleanExpiredCache()
        }
      })

    if (shouldCache) {
      this.pendingRequests.set(cacheKey, requestPromise)
    }

    return requestPromise
  }

  setConfig(): void {
    throw new Error('Method not implemented.')
  }

  static validateConfiguration(configuration: IRestConnectionConfig) {
    if (!configuration.url) {
      return false
    }

    return true
  }
}
