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
/**
 * ImpersonationInfo
 * @targetNSAlias `eng`
 * @targetNamespace `http://schemas.microsoft.com/analysisservices/2003/engine`
 */
export interface ImpersonationInfo {
  /** xsd:string|Default,ImpersonateServiceAccount,ImpersonateAnonymous,ImpersonateCurrentUser,ImpersonateAccount */
  ImpersonationMode?: string;
  /** xsd:string */
  Account?: string;
  /** xsd:string */
  Password?: string;
  /** xsd:string|PasswordRemoved,Unchanged */
  ImpersonationInfoSecurity?: string;
}
