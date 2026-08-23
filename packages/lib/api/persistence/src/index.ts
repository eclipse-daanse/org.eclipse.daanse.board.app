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

/**
 * The persistence contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type {Component} from "vue";

export interface RepositoryRegistryI {
    register(repo:Repository):void;
    getAvailableReposetories():Promise<Repository[]>;
    findRepositoryByName(name:string):Promise<Repository|undefined>;
    findRepositoryByUri(uri:URL):Promise<Repository|undefined>;
    unregister(url:URL):void;
    registerRepoType(type:string,symbol:Symbol):void;
    registerViewForRepoType(type:string,component:Component):void;
    getViewForRepoType(type:string):Component|undefined;
    isViewForRepoType(type:string):boolean;
}
export interface Repository{
    readonly name:string;
    readonly uri:URL;
    init(uri: URL, name: string, options?: any): unknown
    getEntityByUri(uri: URL): Promise<Entity | null>;
    findAll(): Promise<Entity[]>;
    sync(): Promise<Entity[]>
}
export interface Entity{
    name?:string,
    uri:URL,
    data:any,
}

export interface WritableRepository extends Repository{
    create(e:Entity):Promise<any>
    update(e:Entity):Promise<any>
    delete(e:Entity):Promise<any>
    auth(options:any):Promise<any>
}

/** Notified when a repository is registered or unregistered. */
export interface RepositoryObserver {
  update(event: 'register' | 'unregister', repo: Repository): void
}

export interface RepositoryRegistry {
  addObserver(observer: RepositoryObserver): void;
  removeObserver(observer: RepositoryObserver): void;
  findRepositoryByName(name: string): Promise<Repository | undefined>;
  findRepositoryByUri(uri: URL): Promise<Repository | undefined>;
  getAvailableReposetories(): Promise<Repository[]>;
  register(repo: Repository): void;
  registerRepoType(type: string, symbol: Symbol): void;
  registerViewForRepoType(type: string, component: Component): void;
  getViewForRepoType(type: string): Component | undefined;
  isViewForRepoType(type: string): boolean;
  unregister(url: URL): void;
}

export const REPOSITORY_REGISTRY = serviceId<RepositoryRegistry>('RepositoryRegistry')
export const identifier = Symbol.for(REPOSITORY_REGISTRY)
