/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
import type { FileState } from '@/git_api/api/FileState'
import type ContentProviderI from '@/git_api/api/ContentProvider'

export interface FileI {
  name: string
  content: any
  path: string;
  contentProvider: ContentProviderI;
  file_state: FileState
  hash: string | null;

  fetchContent(): Promise<void>;

  getContent(): string | object;

  setContent(content: any): void

  delete(): void
}
