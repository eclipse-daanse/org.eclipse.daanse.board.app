/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type { FileI } from './File'
import { FileProviderI } from '@/git_api/api/FileProvider'
import { FolderI } from '@/git_api/api/Folder'

export interface CommitI {
  name: string;
  hash: string;
  message: string;
  files: Array<FileI | FolderI>;
  creation_date: string;
  fileProvider: FileProviderI;

  fetchFiles(): Promise<Array<FileI | FolderI>>;

  getFiles(): Array<FileI | FolderI>;
}
