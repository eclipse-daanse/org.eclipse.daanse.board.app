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

import { inject, injectable } from 'inversify'
import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import {
  identifier,
  type IConnection,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'

export const SET_WAYPOINTS = 'SET_WAYPOINTS'
export const SET_COSTING = 'SET_COSTING'
export const OPTIMIZE_ROUTE = 'OPTIMIZE_ROUTE'

export type CostingModel =
  | 'auto'
  | 'bicycle'
  | 'pedestrian'
  | 'truck'
  | 'bus'
  | 'motor_scooter'
  | 'motorcycle'

export interface Waypoint {
  lat: number
  lon: number
  name?: string
}

export interface RouteManeuver {
  instruction: string
  length: number
  time: number
  type: number
  street_names?: string[]
  begin_shape_index: number
  end_shape_index: number
}

export interface RouteLeg {
  maneuvers: RouteManeuver[]
  length: number
  time: number
  shape: string
}

export interface RouteSummary {
  length: number
  time: number
}

export interface ValhallaRouteResult {
  geojson: GeoJSON.FeatureCollection
  summary: { distance_km: number; duration_min: number }
  legs: RouteLeg[]
  waypoints: Waypoint[]
  raw?: any
}

export interface IValhallaStoreConfiguration
  extends IBaseConnectionConfiguration {
  connection: string
  costing: CostingModel
  units?: 'kilometers' | 'miles'
  language?: string
}

function decodePolyline(encoded: string, precision = 6): [number, number][] {
  const factor = Math.pow(10, precision)
  const coords: [number, number][] = []
  let index = 0
  let lat = 0
  let lng = 0

  while (index < encoded.length) {
    let shift = 0
    let result = 0
    let byte: number

    do {
      byte = encoded.charCodeAt(index++) - 63
      result |= (byte & 0x1f) << shift
      shift += 5
    } while (byte >= 0x20)

    lat += result & 1 ? ~(result >> 1) : result >> 1

    shift = 0
    result = 0

    do {
      byte = encoded.charCodeAt(index++) - 63
      result |= (byte & 0x1f) << shift
      shift += 5
    } while (byte >= 0x20)

    lng += result & 1 ? ~(result >> 1) : result >> 1

    coords.push([lng / factor, lat / factor])
  }

  return coords
}

function shapeToGeoJSON(
  legs: RouteLeg[],
  waypoints: Waypoint[],
): GeoJSON.FeatureCollection {
  const features: GeoJSON.Feature[] = []

  for (let i = 0; i < legs.length; i++) {
    const coords = decodePolyline(legs[i].shape)

    features.push({
      type: 'Feature',
      properties: {
        legIndex: i,
        length: legs[i].length,
        time: legs[i].time,
      },
      geometry: {
        type: 'LineString',
        coordinates: coords,
      },
    })
  }

  waypoints.forEach((wp, i) => {
    let role = 'via'
    if (i === 0) role = 'start'
    else if (i === waypoints.length - 1) role = 'end'

    features.push({
      type: 'Feature',
      properties: {
        waypointIndex: i,
        role,
        name: wp.name || '',
      },
      geometry: {
        type: 'Point',
        coordinates: [wp.lon, wp.lat],
      },
    })
  })

  return {
    type: 'FeatureCollection',
    features,
  }
}

@injectable()
export class ValhallaStore extends BaseDatasource {
  private connection = ''
  private costing: CostingModel = 'auto'
  private units: 'kilometers' | 'miles' = 'kilometers'
  private language = 'de-DE'
  private waypoints: Waypoint[] = []
  private lastResult: ValhallaRouteResult | null = null

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  init(configuration: IValhallaStoreConfiguration) {
    super.init(configuration)
    this.connection = configuration.connection
    this.costing = configuration.costing || 'auto'
    this.units = configuration.units || 'kilometers'
    this.language = configuration.language || 'de-DE'
  }

  private toPlainObject(obj: any): any {
    return JSON.parse(JSON.stringify(obj))
  }

  async getData(type: string): Promise<any> {
    if (!this.lastResult) {
      return type === 'object' ? null : JSON.stringify(null)
    }

    const plain = this.toPlainObject({
      geojson: this.lastResult.geojson,
      summary: this.lastResult.summary,
      legs: this.lastResult.legs,
      waypoints: this.lastResult.waypoints,
    })

    if (type === 'object') {
      return plain
    } else if (type === 'string') {
      return JSON.stringify(plain)
    } else if (type === 'geojson') {
      return plain.geojson
    }

    return plain
  }

  async getOriginalData(): Promise<any> {
    if (!this.lastResult?.raw) return null
    return this.toPlainObject(this.lastResult.raw)
  }

  async callEvent(
    event: string,
    params: any,
    shouldUpdate = true,
  ): Promise<void> {
    if (event === SET_WAYPOINTS) {
      const { waypoints, costing } = params
      if (waypoints) this.waypoints = waypoints
      if (costing) this.costing = costing
      await this.calculateRoute()
      if (shouldUpdate) this.notify()
    } else if (event === SET_COSTING) {
      this.costing = params.costing
      if (this.waypoints.length >= 2) {
        await this.calculateRoute()
        if (shouldUpdate) this.notify()
      }
    } else if (event === OPTIMIZE_ROUTE) {
      const { waypoints, costing } = params
      if (waypoints) this.waypoints = waypoints
      if (costing) this.costing = costing
      await this.calculateRoute('/optimized_route', true)
      if (shouldUpdate) this.notify()
    }
  }

  private findWaypointName(lat: number, lon: number, originals: Waypoint[]): string {
    const threshold = 0.001
    const match = originals.find(
      wp => Math.abs(wp.lat - lat) < threshold && Math.abs(wp.lon - lon) < threshold,
    )
    return match?.name || `${lat.toFixed(4)}, ${lon.toFixed(4)}`
  }

  private async calculateRoute(endpoint = '/route', reorderWaypoints = false): Promise<void> {
    if (this.waypoints.length < 2) {
      this.lastResult = null
      return
    }

    if (!this.connectionRepository) {
      throw new Error(
        'ConnectionRepository is not provided to Store Classes',
      )
    }

    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as IConnection

    const originalWaypoints = [...this.waypoints]

    const jsonParam = JSON.stringify({
      locations: this.waypoints.map((wp) => ({
        lat: wp.lat,
        lon: wp.lon,
        radius: 500,
      })),
      costing: this.costing,
      units: this.units,
      language: this.language,
      directions_options: {
        units: this.units,
      },
    })

    const queryString = '?json=' + encodeURIComponent(jsonParam)
    const response = await connection.fetch(
      { url: endpoint + queryString },
    )

    const data = await response.json()

    if (data.trip) {
      const legs: RouteLeg[] = data.trip.legs.map((leg: any) => ({
        maneuvers: leg.maneuvers.map((m: any) => ({
          instruction: m.instruction,
          length: m.length,
          time: m.time,
          type: m.type,
          street_names: m.street_names,
          begin_shape_index: m.begin_shape_index,
          end_shape_index: m.end_shape_index,
        })),
        length: leg.summary.length,
        time: leg.summary.time,
        shape: leg.shape,
      }))

      const summary: RouteSummary = {
        length: data.trip.summary.length,
        time: data.trip.summary.time,
      }

      if (reorderWaypoints && data.trip.locations) {
        this.waypoints = data.trip.locations.map((loc: any) => ({
          lat: loc.lat,
          lon: loc.lon,
          name: this.findWaypointName(loc.lat, loc.lon, originalWaypoints),
        }))
      }

      this.lastResult = {
        geojson: shapeToGeoJSON(legs, this.waypoints),
        summary: {
          distance_km: summary.length,
          duration_min: Math.round(summary.time / 60),
        },
        legs,
        waypoints: [...this.waypoints],
        raw: data,
      }
    } else {
      console.warn('Valhalla route error:', data)
      this.lastResult = null
    }
  }

  destroy(): void {
    this.stopPolling()
    this.lastResult = null
    this.waypoints = []
  }

  static validateConfiguration(
    configuration: IValhallaStoreConfiguration,
  ): boolean {
    return true
  }
}