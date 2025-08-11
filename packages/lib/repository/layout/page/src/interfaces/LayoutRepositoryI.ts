/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { LayoutI } from './LayoutI'

export interface LayoutRepositoryI {
  addLayout(layout: LayoutI): void;
  removeLayout(layoutId: string): boolean;
  getLayout(layoutId: string): LayoutI | undefined;
  getAllLayouts(): LayoutI[];
  hasLayout(layoutId: string): boolean;
}
