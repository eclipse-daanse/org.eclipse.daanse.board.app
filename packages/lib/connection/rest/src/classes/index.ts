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

/*
 * An answer that has been read, and can therefore be handed out again.
 *
 * A `Response` cannot: its body is readable once, and `clone()` only works
 * before anyone has started reading. Both of the things this class does
 * with an answer - give it to a second caller waiting on the same request,
 * and keep it for the next one - mean handing out the same bytes more than
 * once, so the bytes are what is kept, not the object around them.
 */
interface ReadAnswer {
  bytes: ArrayBuffer
  status: number
  statusText: string
  headers: Headers
}

interface CacheEntry extends ReadAnswer {
  timestamp: number
}

/* A body is not allowed with these, and passing one makes the constructor throw. */
const WITHOUT_BODY = new Set([204, 205, 304])

/** A fresh Response over the same bytes, as often as it is asked for. */
function responseFrom(answer: ReadAnswer): Response {
  return new Response(WITHOUT_BODY.has(answer.status) ? null : answer.bytes, {
    status: answer.status,
    statusText: answer.statusText,
    headers: answer.headers,
  })
}

export class RestConnection extends BaseConnection {
  private url = ''
  private cacheEnabled = false
  private cacheTTL = 30000 // 30 seconds default
  private cache: Map<string, CacheEntry> = new Map()
  private pendingRequests: Map<string, Promise<ReadAnswer>> = new Map()

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
    const method = options?.method || 'GET'

    /*
     * Only a GET is read ahead of being handed over. Two POSTs of the same
     * shape are two different things being asked, so there is nothing to
     * share and nothing to keep - and reading the whole answer into memory
     * for a caller who may be streaming it would be a cost for nothing.
     */
    if (method !== 'GET') {
      return fetch(fullUrl, options)
    }

    const cacheKey = this.getCacheKey(fullUrl, options)
    const shouldCache = this.cacheEnabled

    if (shouldCache) {
      const cached = this.cache.get(cacheKey)
      if (cached && this.isValidCacheEntry(cached)) {
        return Promise.resolve(responseFrom(cached))
      }
    }

    /*
     * The same request, already on its way, is answered by the one in
     * flight - whether or not the cache is on.
     *
     * Sharing an answer with a request that has not come back yet says
     * nothing about how long an answer stays good, which is what the cache
     * is for and why it can be off. It used to sit inside that switch, so
     * with the cache off - which is the default - a preview asking for the
     * data and for the original asked the endpoint twice for the same
     * bytes, at the same moment.
     */
    const pending = this.pendingRequests.get(cacheKey)
    if (pending) {
      return pending.then(responseFrom)
    }

    const reading = fetch(fullUrl, options)
      .then(async (response) => {
        const answer: ReadAnswer = {
          bytes: await response.arrayBuffer(),
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        }

        /*
         * Whatever came back, not whatever parsed as JSON. The answer used
         * to be kept only if `response.json()` succeeded, which left CSV -
         * and XML, and plain text - fetched again every single time while
         * the setting said the connection was caching.
         */
        if (shouldCache && response.ok) {
          this.cache.set(cacheKey, { ...answer, timestamp: Date.now() })
        }

        return answer
      })
      .finally(() => {
        this.pendingRequests.delete(cacheKey)
        // Periodically clean expired cache entries
        if (this.cache.size > 100) {
          this.cleanExpiredCache()
        }
      })

    this.pendingRequests.set(cacheKey, reading)

    return reading.then(responseFrom)
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
