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

import type { Authenticate } from "../definitions/Authenticate";
import type { AuthenticateResponse } from "../definitions/AuthenticateResponse";
import type { Discover } from "../definitions/Discover";
import type { DiscoverResponse } from "../definitions/DiscoverResponse";
import type { Execute } from "../definitions/Execute";
import type { ExecuteResponse } from "../definitions/ExecuteResponse";

export interface MsXmlAnalysisSoapPort {
  Authenticate(
    authenticate: Authenticate,
    callback: (
      err: any,
      result: AuthenticateResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ) => void
  ): void;
  Discover(
    discover: Discover,
    callback: (
      err: any,
      result: DiscoverResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ) => void
  ): void;
  Execute(
    execute: Execute,
    callback: (
      err: any,
      result: ExecuteResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ) => void
  ): void;
}
