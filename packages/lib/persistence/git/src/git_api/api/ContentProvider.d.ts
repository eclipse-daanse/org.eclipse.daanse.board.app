/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import { CommitI } from './Commit'

export default interface ContentProviderI {
  owner: string;
  repo: string;
  readonly options?: any;

  getContent(arg: FilehashType | FilehashPathType): Promise<string | null>
}

export interface FilehashType {
  filehash: string
}

export interface FilehashPathType {
  filehash: string,
  path: string
}
