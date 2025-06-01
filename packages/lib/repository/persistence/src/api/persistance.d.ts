/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type {Component} from "vue";
import type {BaseRepository} from "@/persistence/api/BaseRepository";
import type {BranchI} from "@/git_api/api/Branch";
import type {CommitI} from "@/git_api/api/Commit";

export interface RepositoryRegistryI {
    register(repo:Repository):void;
    getAvailableReposetories():Promise<Repository[]>;
    findRepositoryByName(name:string):Promise<Repository|undefined>;
    findRepositoryByUri(uri:URL):Promise<Repository|undefined>;
    unregister(url:URL):void;
    registerRepoType(type:string,symbol:Symbol):void;
    registerViewForRepoType(aclass:typeof BaseRepository,component:Component):void;
    getViewForRepoType(aclass:Repository):Component|undefined;
    isViewForRepoType(aclass:Repository):boolean;
}
export interface Repository{
    readonly name:string;
    readonly uri:URL;
    init(uri:URL,name:string,options?:any)
    getEntityByUri(uri: URL): Promise<Entity | null>;
    findAll(): Promise<Entity[]>;
    sync():Promise<Entity[]>
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
export interface GitWritableRepository extends WritableRepository{
    getBranches():Promise<BranchI[]>;
    setBranch(branch:BranchI):void;
    getCurrentBranch():BranchI|undefined;
    getCommits():Promise<CommitI[]>;
    setCommit(commit:CommitI):void;
    getCurrentCommit():CommitI|undefined;

}
