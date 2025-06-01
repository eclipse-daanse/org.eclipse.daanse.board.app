/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type { FileProviderI } from '@/git_api/api/FileProvider'
import type { FileI } from '@/git_api/api/File'

export interface FolderI {
  path: string,
  fileProvider: FileProviderI;
  commit: string | null;
  files: Array<FileI | FolderI>;

  fetchFiles(): Promise<Array<FileI | FolderI>>;

  getFiles(): Array<FileI | FolderI>;

  addFiles(listofFiles: Array<FileI | FolderI>);
}
