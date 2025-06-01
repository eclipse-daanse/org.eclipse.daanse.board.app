/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0
  Contributors: Smart City Jena
*/
declare module 'octokit-commit-multiple-files' {
  import { Octokit } from '@octokit/core'

  interface CommitFile {
    path: string;
    content: string;
  }

  interface CommitOptions {
    owner: string;
    repo: string;
    message: string;
    files: CommitFile[];
    branch?: string;
  }

  export function commitMultipleFiles(
    octokit: Octokit,
    options: CommitOptions
  ): Promise<any>;
}
