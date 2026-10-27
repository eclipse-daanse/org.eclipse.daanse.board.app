/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type { Entity, Repository, WritableRepository } from 'org.eclipse.daanse.board.app.lib.api.persistence'

import { BaseRepository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import { VALIDITY_CHECK, identifier, ValidityCheckI } from 'org.eclipse.daanse.board.app.lib.persistence.util'

import { injectable, inject } from '@eclipse-daanse/tsm'
import {parse} from 'flatted';

@injectable()
export default class LocalRepositoryImpl extends BaseRepository implements WritableRepository {

  public static readonly type = 'localRepositories'
  /* tsm fuehrt das optionale Nachschlagen als Option statt als zweiten Decorator. */
  @inject(VALIDITY_CHECK, { optional: true })
  private readonly ValidityCheck!: ValidityCheckI

  init(url: URL, name: string) {
    super.init(url, name)
  }

  sync(): Promise<Entity[]> {
    return Promise.resolve([])
  }

  async findAll(): Promise<Entity[]> {
    const ret: Entity[] = []
    for (const key of Object.keys(localStorage)) {
      const content = this.readWorkspace(key)
      if (content === undefined) continue
      const copyBaseUri = new URL(this.uri ?? '')
      copyBaseUri.pathname = key + '.json'
      ret.push({
        name: key,
        uri: copyBaseUri,
        data: content
      } as Entity)
    }
    return ret
  }

  /**
   * The workspace stored under `key`, or undefined when the key holds
   * something else.
   *
   * localStorage is shared with the rest of the origin - the theme and the
   * language sit there as plain strings like `auto` and `en`. Workspaces are
   * stored under bare keys, so there is no prefix to filter by; a value that
   * is not JSON, or JSON that is not a workspace, is simply not ours.
   */
  private readWorkspace(key: string): unknown {
    const raw = localStorage.getItem(key)
    if (raw === null) return undefined
    let content: unknown
    try {
      content = JSON.parse(raw)
      if (Array.isArray(content)) { // serialized by flatted
        content = parse(raw)
      }
    } catch {
      return undefined
    }
    return this.ValidityCheck?.checkContent(content) ? content : undefined
  }

  test() {
    this.ValidityCheck.checkContent({})
  }

  findByFragment(_pathname: string): Promise<Entity[]> {
    let pathname = (_pathname.charAt(0) == '/') ? _pathname.slice(1) : _pathname
    let ret: Entity[] = []
    if (this.readWorkspace(pathname) !== undefined) {
      const copyBaseUri = new URL(this.uri ?? '')
      copyBaseUri.pathname = pathname + '.json'
      ret.push({
        name: pathname,
        uri: copyBaseUri,
        data: localStorage.getItem(pathname)
      } as Entity)
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
