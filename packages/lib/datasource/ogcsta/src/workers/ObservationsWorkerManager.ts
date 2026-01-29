/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import type { Observation } from '../client'

interface ObservationRequest {
  baseUrl: string
  datastreamId: string
  historyParams?: {
    $filter?: string
    $orderby?: string
    $top?: number
  }
}

interface WorkerResponse {
  type: 'observationsResult'
  requestId: string
  results: Array<{
    datastreamId: string
    observations: any[]
    error?: string
  }>
}

export class ObservationsWorkerManager {
  private worker: Worker | null = null
  private pendingRequests: Map<string, {
    resolve: (results: Array<{ datastreamId: string; observations: Observation[] }>) => void
    reject: (error: Error) => void
  }> = new Map()
  private requestCounter = 0
  private isSupported = typeof Worker !== 'undefined'

  constructor() {
    if (this.isSupported) {
      this.initWorker()
    }
  }

  private initWorker(): void {
    try {
      // Create inline worker from blob
      const workerCode = `
        self.onmessage = async (event) => {
          const { type, requestId, requests } = event.data;

          if (type === 'fetchObservations') {
            const results = [];

            const promises = requests.map(async (req) => {
              try {
                const params = new URLSearchParams();

                if (req.historyParams && req.historyParams.$filter) {
                  params.set('$filter', req.historyParams.$filter);
                }
                if (req.historyParams && req.historyParams.$orderby) {
                  params.set('$orderby', req.historyParams.$orderby);
                } else {
                  params.set('$orderby', 'phenomenonTime desc');
                }
                // Only set $top if explicitly provided (don't default to 1 for history queries)
                if (req.historyParams && req.historyParams.$top) {
                  params.set('$top', req.historyParams.$top.toString());
                }

                const url = req.baseUrl + '/v1.1/Datastreams(' + req.datastreamId + ')/Observations?' + params.toString();

                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error('HTTP ' + response.status);
                }

                const data = await response.json();
                const observations = data.value || [];

                observations.forEach((obs) => {
                  obs['ds_source'] = req.datastreamId;
                });

                return {
                  datastreamId: req.datastreamId,
                  observations: observations
                };
              } catch (error) {
                return {
                  datastreamId: req.datastreamId,
                  observations: [],
                  error: error instanceof Error ? error.message : 'Unknown error'
                };
              }
            });

            const fetchResults = await Promise.all(promises);
            results.push(...fetchResults);

            self.postMessage({
              type: 'observationsResult',
              requestId: requestId,
              results: results
            });
          }
        };
      `

      const blob = new Blob([workerCode], { type: 'application/javascript' })
      const workerUrl = URL.createObjectURL(blob)
      this.worker = new Worker(workerUrl)

      this.worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
        const { requestId, results } = event.data
        const pending = this.pendingRequests.get(requestId)
        if (pending) {
          this.pendingRequests.delete(requestId)
          pending.resolve(results)
        }
      }

      this.worker.onerror = (error) => {
        console.error('ObservationsWorker error:', error)
        // Reject all pending requests
        for (const [requestId, pending] of this.pendingRequests) {
          pending.reject(new Error('Worker error'))
          this.pendingRequests.delete(requestId)
        }
      }
    } catch (e) {
      console.warn('Could not create ObservationsWorker:', e)
      this.isSupported = false
    }
  }

  async fetchObservations(
    baseUrl: string,
    datastreams: Array<{ iotId?: string; '@iot.id'?: string }>,
    historyParams?: {
      $filter?: string
      $orderby?: string
      $top?: number
    }
  ): Promise<Array<{ datastreamId: string; observations: Observation[] }>> {
    // Fallback to main thread if worker not supported
    if (!this.isSupported || !this.worker) {
      return this.fetchOnMainThread(baseUrl, datastreams, historyParams)
    }

    const requestId = `req_${++this.requestCounter}`

    const requests: ObservationRequest[] = datastreams.map(ds => ({
      baseUrl,
      datastreamId: (ds.iotId || ds['@iot.id'])!,
      historyParams
    }))

    return new Promise((resolve, reject) => {
      this.pendingRequests.set(requestId, { resolve, reject })

      this.worker!.postMessage({
        type: 'fetchObservations',
        requestId,
        requests
      })

      // Timeout after 30 seconds
      setTimeout(() => {
        if (this.pendingRequests.has(requestId)) {
          this.pendingRequests.delete(requestId)
          reject(new Error('Worker request timeout'))
        }
      }, 30000)
    })
  }

  private async fetchOnMainThread(
    baseUrl: string,
    datastreams: Array<{ iotId?: string; '@iot.id'?: string }>,
    historyParams?: {
      $filter?: string
      $orderby?: string
      $top?: number
    }
  ): Promise<Array<{ datastreamId: string; observations: Observation[] }>> {
    const results: Array<{ datastreamId: string; observations: Observation[] }> = []

    const promises = datastreams.map(async (ds) => {
      const datastreamId = (ds.iotId || ds['@iot.id'])!

      try {
        const params = new URLSearchParams()
        if (historyParams?.$filter) params.set('$filter', historyParams.$filter)
        if (historyParams?.$orderby) params.set('$orderby', historyParams.$orderby)
        else params.set('$orderby', 'phenomenonTime desc')
        // Only set $top if explicitly provided (don't default to 1 for history queries)
        if (historyParams?.$top) params.set('$top', historyParams.$top.toString())

        const url = `${baseUrl}/v1.1/Datastreams(${datastreamId})/Observations?${params.toString()}`
        const response = await fetch(url)
        const data = await response.json()
        const observations = data.value || []

        observations.forEach((obs: any) => {
          obs['ds_source'] = datastreamId
        })

        return { datastreamId, observations }
      } catch (error) {
        return { datastreamId, observations: [] }
      }
    })

    const fetchResults = await Promise.all(promises)
    results.push(...fetchResults)

    return results
  }

  terminate(): void {
    if (this.worker) {
      this.worker.terminate()
      this.worker = null
    }
    this.pendingRequests.clear()
  }
}

// Singleton instance
let workerManagerInstance: ObservationsWorkerManager | null = null

export function getObservationsWorkerManager(): ObservationsWorkerManager {
  if (!workerManagerInstance) {
    workerManagerInstance = new ObservationsWorkerManager()
  }
  return workerManagerInstance
}
