/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { IBaseConnectionConfiguration } from 'org.eclipse.daanse.board.app.lib.datasource.base'

export interface ISparqlStoreConfiguration extends IBaseConnectionConfiguration{
  query:string,
  connection: string
}
export type SparqlResponse = {
  head: { vars: string[] };
  results: { bindings: Record<string, SparqlBinding>[] };
};

export type SparqlBinding = {
  type: string;
  value: string;
  [key: string]: any;
};
