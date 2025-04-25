/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { Configuration } from '../client'
import { IOGCSTAData } from '../interfaces/OgcStaConfiguration'
import { Container } from 'inversify'

export interface OgcStaStoreI {
  connection: string
  requestFlag: { key: string, params: any }
  baseConfigration: Configuration | undefined
  resultMap: IOGCSTAData
  container: Container

  callEvent(event: string, params: any): void

  destroy(): void

  getData<T>(type: string): Promise<T>

  getOriginalData(): any

  getAllData(listOfPromesis: Promise<IOGCSTAData>[]): void

  fallBackSingleRequests(): Promise<IOGCSTAData>

  getPartitionalData(listOfPromesis: Promise<IOGCSTAData>[]): void

  getObservations(listOfPromesis: Promise<IOGCSTAData>[]): void

  getDataStreams(listOfPromesis: Promise<IOGCSTAData>[]): void

  getThings(listOfPromesis: Promise<IOGCSTAData>[]): void
}
