/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/


import type { Entity, WritableRepository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import { BaseRepository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'

export default class RestRepositoryImpl extends BaseRepository implements WritableRepository {

  public static readonly type = 'restRepositories'
  private createEndpointPath?: String
  private updateEndpointPath?: String
  private deleteEndpointPath?: String
  private findEndpointPath?: String
  private findAllEndpointPath?: String
  private syncEndpointPath?: String


  init(url: URL,
    name: string,
    settings = {
      updateEndpointPath: ':id',
      deleteEndpointPath: ':id',
      findAllEndpointPath: '',
      createEndpointPath: ':id',
      findEndpointPath: ':id',
      syncEndpointPath: ''
    }) {
    super.init(url, name)

    this.updateEndpointPath = settings.updateEndpointPath || ':id'
    this.deleteEndpointPath = settings.deleteEndpointPath || ':id'
    this.findAllEndpointPath = settings.findEndpointPath || ''
    this.createEndpointPath = settings.createEndpointPath || ':id'
    this.findEndpointPath = settings.findEndpointPath || ':id'
    this.syncEndpointPath = settings.syncEndpointPath || ''

  }

  async sync(): Promise<Entity[]> {
    try {
      const createURL = new URL(this.uri ?? '')
      createURL.pathname = createURL.pathname + '/' + this.findAllEndpointPath
      const res = await fetch(createURL, { method: 'HEAD' })
      if (res.ok) {
        const resArr: Entity[] = []
        const data = await res.json()
        for (const entity of data) {
          resArr.push({
            name: entity.name,
            uri: new URL(entity.url),
            data: null
          })
        }
        return resArr
      } else {
        throw new Error(res.statusText)
      }
    } catch (e) {
      console.log(e)
      throw new Error('Resource could not find entities')
    }
  }

  async create(e: Entity): Promise<any> {
    try {
      const createURL = new URL(this.uri ?? '')
      const entityPath = e.uri.pathname
      createURL.pathname = createURL.pathname + '/' + this.createEndpointPath?.replace(':id', entityPath)
      const res = await fetch(createURL, { method: 'GET', body: e.data })
      if (res.ok) {
        return true
      } else {
        throw new Error(res.statusText)
      }
    } catch (e) {
      console.log(e)
      return new Error('Resource could not created')
    }
  }

  async delete(e: Entity): Promise<any> {
    try {
      const createURL = new URL(this.uri ?? '')
      const entityPath = e.uri.pathname
      createURL.pathname = createURL.pathname + '/' + this.deleteEndpointPath?.replace(':id', entityPath)
      const res = await fetch(createURL, { method: 'DELETE' })
      if (res.ok) {
        return true
      } else {
        throw new Error(res.statusText)
      }
    } catch (e) {
      console.log(e)
      return new Error('Resource could not deleted')
    }
  }

  async findAll(): Promise<Entity[]> {
    try {
      const createURL = new URL(this.uri ?? '')
      createURL.pathname = createURL.pathname + '/' + this.findAllEndpointPath
      const res = await fetch(createURL, { method: 'GET' })
      if (res.ok) {
        const resArr: Entity[] = []
        const data = await res.json()
        for (const entity of data) {
          resArr.push({
            name: entity.name,
            uri: new URL(entity.url),
            data: null
          })
        }
        return resArr
      } else {
        throw new Error(res.statusText)
      }
    } catch (e) {
      console.log(e)
      throw new Error('Resource could not find entities')
    }
  }


  async getEntityByUri(uri: URL): Promise<Entity | null> {
    try {
      const getURL = new URL(this.uri ?? '')
      const entityPath = uri.pathname
      getURL.pathname = getURL.pathname + '/' + this.findEndpointPath?.replace(':id', entityPath)
      const res = await fetch(getURL, { method: 'GET' })
      if (res.ok) {
        const data = await res.json()
        const resArr: Entity = {
          name: entityPath,
          uri: getURL,
          data: data
        }
        return resArr
      } else {
        throw new Error(res.statusText)
      }
    } catch (e) {
      console.log(e)
      throw new Error('Resource could not find entities')
    }
  }

  async update(e: Entity): Promise<any> {
    try {
      const createURL = new URL(this.uri ?? '')
      const entityPath = e.uri.pathname
      createURL.pathname = createURL.pathname + '/' + this.updateEndpointPath?.replace(':id', entityPath)
      const res = await fetch(createURL, { method: 'DELETE' })
      if (res.ok) {
        return true
      } else {
        throw new Error(res.statusText)
      }
    } catch (e) {
      console.log(e)
      return new Error('Resource could not deleted')
    }
  }

}
