/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
export interface IDataRetrieveable {
  getData(type: string, options?: any): Promise<any>
  getOriginalData(): any
  callEvent: (event: string, params: any, shouldUpdate?: boolean) => Promise<void> | void
  /**
   * Registers a subscriber and hands back the way to remove it again.
   *
   * The base implementation has always returned that function; the
   * declaration said void, so callers that kept it - a component that has
   * to unsubscribe when it goes away - did not type-check, and one that
   * believed the declaration would leak a subscriber per mount.
   */
  subscribe: (subscriber: () => any) => () => void
  unsubscribe: (subscriber: () => any) => void
  destroy: () => void
  startPolling: (interval: number) => void
  stopPolling: () => void
}
