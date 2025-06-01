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
import type { BaseRepository } from '../api/BaseRepository'
import { Container, inject, injectable, optional, ServiceIdentifier } from 'inversify'
import { identifier, SettingsManagerI } from 'org.eclipse.daanse.board.app.lib.settings.manager'


@injectable()
export class RepositoryRegistry implements RepositoryRegistryI {

  private availableRepos = new Map<string, Repository>()
  private availableRepoTypes = new Map<string, Symbol>()
  private availableRepoTypesViews = new Map<string, Component>()
  private init:boolean =  false;

  /*constructor(@inject(identifier) @optional()
              public readonly settingsManager:SettingsManagerI,
              @inject(Container) private readonly container: Container
              ) {
    if(!this.init){
      console.info('RepoRepository started');
      if(!settingsManager){
        console.info('SettingsManager not installed');
        this.init = true;
        return;
      }
      let persirepos = settingsManager.getSettings(['persistanceRepositories']);
      for (let [type,instances] of Object.entries(persirepos)){
        let baseclass = this.availableRepoTypes.get(type);
        const aclass = this.container.get(baseclass as ServiceIdentifier)
        if(aclass){
          for (let entitysetting of (instances as any[])){
            if(entitysetting.name && entitysetting.url){
              const instanceOfBaseRepo = new (aclass as any)(new URL(entitysetting.url),entitysetting.name,entitysetting) as Repository;
              this.register(instanceOfBaseRepo);
            }
          }
        }else {
          console.warn('found no RepositoryType for:',type)
        }
      }
      this.init = true;
    }
  }*/
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
  }

  registerRepoType(type:string,symbol:Symbol) {
    this.availableRepoTypes.set(type, symbol)
  }

  registerViewForRepoType(aclass: typeof BaseRepository, component: Component) {
    this.availableRepoTypesViews.set(aclass.type, component)
  }

  getViewForRepoType(aclass: Repository): Component | undefined {
    return this.availableRepoTypesViews.get(Object.getPrototypeOf(aclass).constructor.type)
  }

  isViewForRepoType(aclass: Repository) {
    return this.availableRepoTypesViews.has(Object.getPrototypeOf(aclass).constructor.type)
  }

  unregister(url: URL): void {
    this.availableRepos.delete(url.toString())
  }

  /*onMounted(() => {
      if(!init){
          console.info('RepoRepository started');
          let persirepos = useApplicationSettingsManager().getSettings(['persistanceRepositories']);
          for (let [type,instances] of Object.entries(persirepos)){
              let baseclass = this.availableRepoTypes.value.get(type);
              if(baseclass){
                  for (let entitysetting of (instances as any[])){
                      if(entitysetting.name && entitysetting.url){
                          const instanceOfBaseRepo = new (baseclass as any)(new URL(entitysetting.url),entitysetting.name,entitysetting) as Repository;
                          register(instanceOfBaseRepo);
                      }
                  }
              }else {
                  console.warn('found no RepositoryType for:',type)
              }
          }
          init = true;
      }

  })*/

}
