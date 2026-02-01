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

import type { FetchAPI } from './runtime'

interface CacheEntry {
  body: any
  status: number
  statusText: string
  headers: Headers
  timestamp: number
}

export interface CachingFetchOptions {
  ttl?: number // Time-to-live in milliseconds (default: 30000)
  maxEntries?: number // Maximum cache entries (default: 200)
}

class CachingFetchWrapper {
  private cache: Map<string, CacheEntry> = new Map()
  private pendingRequests: Map<string, Promise<Response>> = new Map()
  private ttl: number
  private maxEntries: number

  constructor(options: CachingFetchOptions = {}) {
    this.ttl = options.ttl ?? 30000
    this.maxEntries = options.maxEntries ?? 200
  }

  private getCacheKey(url: string, init?: RequestInit): string {
    const method = init?.method || 'GET'
    const body = init?.body ? String(init.body) : ''
    return `${method}:${url}:${body}`
  }

  private isValidCacheEntry(entry: CacheEntry): boolean {
    return Date.now() - entry.timestamp < this.ttl
  }

  private cleanExpiredCache(): void {
    const now = Date.now()
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp >= this.ttl) {
        this.cache.delete(key)
      }
    }
  }

  private createCachedResponse(entry: CacheEntry): Response {
    return new Response(JSON.stringify(entry.body), {
      status: entry.status,
      statusText: entry.statusText,
      headers: entry.headers,
    })
  }

  clearCache(): void {
    this.cache.clear()
    this.pendingRequests.clear()
  }

  createCachingFetch(baseFetch: FetchAPI): FetchAPI {
    return async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
      const url = typeof input === 'string' ? input : input.toString()
      const method = init?.method || 'GET'

      // Only cache GET requests
      if (method !== 'GET') {
        return baseFetch(input, init)
      }

      const cacheKey = this.getCacheKey(url, init)

      // Check cache first
      const cachedEntry = this.cache.get(cacheKey)
      if (cachedEntry && this.isValidCacheEntry(cachedEntry)) {
        console.log('[OGC STA Cache] Cache HIT:', url.substring(0, 80))
        return this.createCachedResponse(cachedEntry)
      }

      // Check for pending request (deduplication)
      const pendingRequest = this.pendingRequests.get(cacheKey)
      if (pendingRequest) {
        console.log('[OGC STA Cache] Dedup - waiting for pending request:', url.substring(0, 80))
        const response = await pendingRequest
        return response.clone()
      }

      // Make the actual request
      console.log('[OGC STA Cache] Cache MISS - fetching:', url.substring(0, 80))

      let resolvePromise: (response: Response) => void
      let rejectPromise: (error: any) => void

      const requestPromise = new Promise<Response>((resolve, reject) => {
        resolvePromise = resolve
        rejectPromise = reject
      })

      this.pendingRequests.set(cacheKey, requestPromise)

      try {
        const response = await baseFetch(input, init)

        if (response.ok) {
          // Clone and cache the response
          const clonedResponse = response.clone()
          try {
            const body = await clonedResponse.json()

            this.cache.set(cacheKey, {
              body,
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              timestamp: Date.now(),
            })

            // Clean expired entries if cache is too large
            if (this.cache.size > this.maxEntries) {
              this.cleanExpiredCache()
            }
          } catch {
            // Response is not JSON, don't cache
          }
        }

        // Resolve the pending promise so other waiters get the response
        resolvePromise!(response.clone())

        return response
      } catch (error) {
        rejectPromise!(error)
        throw error
      } finally {
        this.pendingRequests.delete(cacheKey)
      }
    }
  }
}

// Singleton instance for shared caching across all OGC STA API calls
let sharedCachingWrapper: CachingFetchWrapper | null = null

export function getSharedCachingFetch(baseFetch: FetchAPI, options?: CachingFetchOptions): FetchAPI {
  if (!sharedCachingWrapper) {
    sharedCachingWrapper = new CachingFetchWrapper(options)
  }
  return sharedCachingWrapper.createCachingFetch(baseFetch)
}

export function clearSharedCache(): void {
  sharedCachingWrapper?.clearCache()
}

// Legacy export for backwards compatibility
export function getSharedCachingMiddleware(options?: CachingFetchOptions): any {
  // Return empty middleware - caching is now done via fetchApi wrapper
  return {
    pre: async () => undefined,
    post: async () => undefined,
  }
}
