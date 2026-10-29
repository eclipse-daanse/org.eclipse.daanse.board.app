/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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
/*
 * The XMLA servers the workbench knows: the ones the person added, and a
 * few public demo servers to start from. A saved connection becomes a live
 * one through the connection repository - the same XmlaConnection, the same
 * client and session handling every board uses.
 */

import { readStored, writeStored } from './storage'

export interface SavedConnection {
  uid: string
  name: string
  url: string
  /** The catalog an Execute runs against; Discover reaches all of them. */
  catalog: string
  cube: string
  security: 'None' | 'Basic'
  user?: string
  password?: string
  /** Seconds a request may take; 0 waits as long as the server does. */
  timeout?: number
  /** A preset is offered, not stored: it carries no credentials. */
  preset?: boolean
  /** Added for a shared link, under a name nobody chose; editing it clears this. */
  fromLink?: boolean
}

/*
 * Public endpoints answering XMLA in a browser. eMondrian's demo sends CORS
 * headers; the msmdpump.dll servers are SSAS demos that do as well.
 */
export const PRESETS: SavedConnection[] = [
  {
    uid: 'preset.emondrian.foodmart',
    name: 'demo.emondrian.com · FoodMart',
    url: 'https://demo.emondrian.com/xmla',
    catalog: 'FoodMart',
    cube: 'Sales',
    security: 'None',
    preset: true,
  },
  {
    uid: 'preset.emondrian.ontime',
    name: 'demo.emondrian.com · OnTime',
    url: 'https://demo.emondrian.com/xmla',
    catalog: 'OnTime',
    cube: 'Sales',
    security: 'None',
    preset: true,
  },
  {
    uid: 'preset.flexmonster',
    name: 'Flexmonster · Adventure Works (SSAS)',
    url: 'https://olap.flexmonster.com/olap/msmdpump.dll',
    catalog: 'Adventure Works DW Standard Edition',
    cube: 'Adventure Works',
    security: 'None',
    preset: true,
  },
  {
    uid: 'preset.syncfusion',
    name: 'Syncfusion · Adventure Works (SSAS)',
    url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
    catalog: 'Adventure Works DW 2008 SE',
    cube: 'Adventure Works',
    security: 'None',
    preset: true,
  },
  {
    uid: 'preset.telerik',
    name: 'Telerik · Adventure Works (SSAS)',
    url: 'https://demos.telerik.com/service/v2/olap/msmdpump.dll',
    catalog: 'Adventure Works DW 2008R2',
    cube: 'Adventure Works',
    security: 'None',
    preset: true,
  },
  {
    uid: 'preset.devexpress',
    name: 'DevExpress · Adventure Works (SSAS)',
    url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
    catalog: 'Adventure Works DW Standard Edition',
    cube: 'Adventure Works',
    security: 'None',
    preset: true,
  },
]

export function loadConnections(): SavedConnection[] {
  const stored = readStored<SavedConnection[]>('connections', [])
  return Array.isArray(stored) ? stored.filter(c => c && c.uid && c.url) : []
}

export function storeConnections(connections: SavedConnection[]): void {
  writeStored('connections', connections.filter(c => !c.preset))
}

/** What XmlaConnection.init reads, from a saved connection. */
export function connectionConfig(connection: SavedConnection) {
  return {
    uid: connection.uid,
    name: connection.name,
    type: 'xmla',
    url: connection.url,
    catalogName: connection.catalog,
    cubeName: connection.cube,
    security: connection.security,
    user: connection.user ?? '',
    password: connection.password ?? '',
    timeout: connection.timeout ?? 60,
  }
}

export function newConnectionId(): string {
  return `xmla.${crypto.randomUUID()}`
}
