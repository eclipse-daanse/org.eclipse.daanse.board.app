/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type { Entity, Repository, WritableRepository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'

import { BaseRepository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import { identifier, ValidityCheckI } from 'org.eclipse.daanse.board.app.lib.persistence.util'

import { injectable, optional, inject } from 'inversify'


@injectable()
export default class LocalRepositoryImpl extends BaseRepository implements WritableRepository {

  public static readonly type = 'localRepositories'
  @inject(identifier) @optional()
  private readonly ValidityCheck!: ValidityCheckI

  init(url: URL, name: string) {
    super.init(url, name)
  }

  sync(): Promise<Entity[]> {
    return Promise.resolve([])
  }

  async findAll(): Promise<Entity[]> {
    let ret: Entity[] = []
    Object.keys(localStorage).forEach((e, key) => {
      try {
        let content = JSON.parse(localStorage.getItem(e) ?? '')
        if (this.ValidityCheck.checkContent(content)) {
          let copyBaseUri = new URL(this.uri ?? '')
          copyBaseUri.pathname = e + '.json'
          ret.push({
            name: e,
            uri: copyBaseUri,
            data: content
          } as Entity)
        }

      } catch (e) {
        console.log(e)
      }
    })
    return Promise.resolve(ret)
  }

  test() {
    this.ValidityCheck.checkContent({})
  }

  findByFragment(_pathname: string): Promise<Entity[]> {
    let pathname = (_pathname.charAt(0) == '/') ? _pathname.slice(1) : _pathname
    let ret: Entity[] = []
    if (Object.keys(localStorage).includes(pathname)) {
      let content = JSON.parse(localStorage.getItem(pathname) ?? '')
      if (this.ValidityCheck.checkContent(content)) {
        let copyBaseUri = new URL(this.uri ?? '')
        copyBaseUri.pathname = pathname + '.json'
        ret.push({
          name: pathname,
          uri: copyBaseUri,
          data: content
        } as Entity)
      }
    }
    return Promise.resolve(ret)
  }

  findByName(name: string): Promise<Entity[]> {
    return this.findByFragment(name)
  }

  findByUri(uri: URL): Promise<Entity[]> {
    let path = uri.pathname.replace('.json', '')
    return this.findByFragment(path)
  }

  async getEntityByUri(uri: URL): Promise<Entity | null> {
    if (uri.protocol != this.uri?.protocol || uri.hostname != this.uri?.hostname) {
      return Promise.resolve(null)
    }
    let path = uri.pathname.replace('.json', '')
    let entity = await this.findByFragment(path)

    return Promise.resolve(entity[0])
  }

  create(e: Entity): Promise<any> {
    if (this.checkURI(e)) {
      return Promise.reject('Entity Uri not set or not in Repo')
    }
    const name = e.uri.pathname.replace('.json', '').replace('/', '')
    if (Object.keys(localStorage).includes(name)) {
      return Promise.reject('Entity allready exists! use update!')
    }
    if (e.name == undefined || e.name == '') {
      return Promise.reject('name not set in entity')
    }
    if (!e.uri.pathname.includes('.json')) {
      return Promise.reject('name not contains a .json file type')
    }
    localStorage.setItem(name, e.data)
    return Promise.resolve(true)
  }

  delete(e: Entity): Promise<any> {
    if (this.checkURI(e)) {
      return Promise.reject('Entity Uri not set or in Repo')
    }
    if (e.name == undefined || e.name == '') {
      return Promise.reject('name not set in entity')
    }
    if (!e.uri.pathname.includes('.json')) {
      return Promise.reject('name not contains a .json file type')
    }
    const name = e.uri.pathname.replace('.json', '').replace('/', '')

    localStorage.removeItem(name)
    return Promise.resolve(true)
  }

  update(e: Entity): Promise<any> {
    if (this.checkURI(e)) {
      return Promise.reject('Entity Uri not set or in Repo')
    }
    if (e.name == undefined || e.name == '') {
      return Promise.reject('name not set in entity')
    }
    if (!e.uri.pathname.includes('.json')) {
      return Promise.reject('name not contains a .json file type')
    }
    const name = e.uri.pathname.replace('.json', '').replace('/', '')
    if (!Object.keys(localStorage).includes(name)) {
      return Promise.reject('Entity not exists! use create!')
    }

    localStorage.setItem(name, e.data)
    return Promise.resolve(true)
  }

  private checkURI(e: Entity) {
    return !e.uri || e.uri.protocol != this.uri?.protocol || e.uri.hostname != this.uri?.hostname
  }


}
