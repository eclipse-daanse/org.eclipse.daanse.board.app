/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type { Repository, RepositoryRegistryI } from '../api/persistance'
import { type Component } from 'vue'
import { RepositoryObserver, RepositoryObserverPatternInterface } from '../api/RepositoryObserverI'


export class RepositoryRegistry implements RepositoryRegistryI,RepositoryObserverPatternInterface {

  private availableRepos = new Map<string, Repository>()
  private availableRepoTypes = new Map<string, Symbol>()
  private availableRepoTypesViews = new Map<string, Component>()
  private init:boolean =  false;

  private observers: RepositoryObserver[] = []

  addObserver(observer: RepositoryObserver): void {
    this.observers.push(observer)
  }

  removeObserver(observer: RepositoryObserver): void {
    this.observers = this.observers.filter(o => o !== observer)
  }

  private notify(event: 'register' | 'unregister', repo: Repository): void {
    for (const observer of this.observers) {
      observer.update(event, repo)
    }
  }
  async findRepositoryByName(name: string): Promise<Repository | undefined> {
    return await Array.from(this.availableRepos.values()).find(repo => repo.name == name)
  }

  async findRepositoryByUri(uri: URL): Promise<Repository | undefined> {
    return await this.availableRepos.get(uri.toString())
  }

  async getAvailableReposetories(): Promise<Repository[]> {
    return await Array.from(this.availableRepos.values())
  }

  register(repo: Repository): void {
    this.availableRepos.set(repo.uri.toString(), repo)
    console.info('registered Repo from Type:' + Object.getPrototypeOf(repo).constructor.type + ' under ' + repo.uri.toString())
    this.notify('register', repo)
  }

  registerRepoType(type:string,symbol:Symbol) {
    this.availableRepoTypes.set(type, symbol)
  }

  registerViewForRepoType(type:string, component: Component) {
    this.availableRepoTypesViews.set(type, component)
  }

  getViewForRepoType(type:string): Component | undefined {
    return this.availableRepoTypesViews.get(type)
  }

  isViewForRepoType(type:string) {
    return this.availableRepoTypesViews.has(type)
  }

  unregister(url: URL): void {
    const repo = this.availableRepos.get(url.toString())
    if (repo) {
      this.availableRepos.delete(url.toString())
      this.notify('unregister', repo)
    }
  }


}
