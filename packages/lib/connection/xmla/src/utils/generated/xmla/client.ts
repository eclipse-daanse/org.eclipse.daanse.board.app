/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import type { Client as SoapClient } from "soap";
import { createClientAsync as soapCreateClientAsync } from "soap";
import type { Authenticate } from "./definitions/Authenticate";
import type { AuthenticateResponse } from "./definitions/AuthenticateResponse";
import type { Discover } from "./definitions/Discover";
import type { DiscoverResponse } from "./definitions/DiscoverResponse";
import type { Execute } from "./definitions/Execute";
import type { ExecuteResponse } from "./definitions/ExecuteResponse";
import type { MsXmlAnalysisService } from "./services/MsXmlAnalysisService";

export interface XmlaClient extends SoapClient {
  MsXmlAnalysisService: MsXmlAnalysisService;
  AuthenticateAsync(
    authenticate: Authenticate
  ): Promise<
    [
      result: AuthenticateResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  DiscoverAsync(
    discover: Discover
  ): Promise<
    [
      result: DiscoverResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  ExecuteAsync(
    execute: Execute
  ): Promise<
    [
      result: ExecuteResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
}

/** Create XmlaClient */
export function createClientAsync(
  ...args: Parameters<typeof soapCreateClientAsync>
): Promise<XmlaClient> {
  return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
