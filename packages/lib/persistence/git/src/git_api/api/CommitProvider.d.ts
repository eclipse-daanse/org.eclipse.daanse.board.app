/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import { CommitI } from './Commit'
import { FileProviderI } from '@/git_api/api/FileProvider'
import { FileI } from '@/git_api/api/File'
import { BranchI } from '@/git_api/api/Branch'
import { FolderI } from '@/git_api/api/Folder'

export default interface CommitProviderI {
  readonly fileProvider: FileProviderI;
  readonly owner: string;
  readonly name: string;

  getAllCommits(branch: string): Promise<CommitI[]>

  commitFiles(files: Array<FileI | FolderI>, branch: BranchI): Promise<void>

  setOptions?(options: any);
}
