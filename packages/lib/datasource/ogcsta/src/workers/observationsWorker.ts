/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

// Web Worker for fetching OGC STA observations in background thread

interface ObservationRequest {
  baseUrl: string
  datastreamId: string
  historyParams?: {
    $filter?: string
    $orderby?: string
    $top?: number
  }
}

interface WorkerMessage {
  type: 'fetchObservations'
  requestId: string
  requests: ObservationRequest[]
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

// Handle messages from main thread
self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  const { type, requestId, requests } = event.data

  if (type === 'fetchObservations') {
    const results: WorkerResponse['results'] = []

    // Fetch all observations in parallel
    const promises = requests.map(async (req) => {
      try {
        const params = new URLSearchParams()

        if (req.historyParams?.$filter) {
          params.set('$filter', req.historyParams.$filter)
        }
        if (req.historyParams?.$orderby) {
          params.set('$orderby', req.historyParams.$orderby)
        } else {
          params.set('$orderby', 'phenomenonTime desc')
        }
        if (req.historyParams?.$top) {
          params.set('$top', req.historyParams.$top.toString())
        } else {
          params.set('$top', '1')
        }

        const url = `${req.baseUrl}/v1.1/Datastreams(${req.datastreamId})/Observations?${params.toString()}`

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const data = await response.json()
        const observations = data.value || []

        // Add datasource reference to each observation
        observations.forEach((obs: any) => {
          obs['ds_source'] = req.datastreamId
        })

        return {
          datastreamId: req.datastreamId,
          observations
        }
      } catch (error) {
        return {
          datastreamId: req.datastreamId,
          observations: [],
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      }
    })

    const fetchResults = await Promise.all(promises)
    results.push(...fetchResults)

    // Send results back to main thread
    const response: WorkerResponse = {
      type: 'observationsResult',
      requestId,
      results
    }

    self.postMessage(response)
  }
}

export {}
