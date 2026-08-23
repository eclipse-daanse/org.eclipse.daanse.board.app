/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import { BranchI } from './Branch'
import { CommitI } from './Commit'
import { WritableRepository } from 'org.eclipse.daanse.board.app.lib.api.persistence'

export interface GitWritableRepository extends WritableRepository{
  getBranches():Promise<BranchI[]>;
  setBranch(branch:BranchI):void;
  getCurrentBranch():BranchI|undefined;
  getCommits():Promise<CommitI[]>;
  setCommit(commit:CommitI):void;
  getCurrentCommit():CommitI|undefined;
  auth(options: any): Promise<any>
}
