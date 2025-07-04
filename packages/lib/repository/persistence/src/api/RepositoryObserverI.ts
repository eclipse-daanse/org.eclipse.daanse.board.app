/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { Repository } from './persistance'

export interface RepositoryObserver {
  update(event: 'register' | 'unregister', repo: Repository): void
}
export interface RepositoryObserverPatternInterface {
  addObserver(observer: RepositoryObserver): void
  removeObserver(observer: RepositoryObserver): void
}
