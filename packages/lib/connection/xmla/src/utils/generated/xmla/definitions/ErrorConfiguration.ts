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
 * ErrorConfiguration
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface ErrorConfiguration {
  /** xsd:long */
  KeyErrorLimit?: string;
  /** xsd:string */
  KeyErrorLogFile?: string;
  /** xsd:string|ConvertToUnknown,DiscardRecord */
  KeyErrorAction?: string;
  /** xsd:string|StopProcessing,StopLogging */
  KeyErrorLimitAction?: string;
  /** xsd:string|IgnoreError,ReportAndContinue,ReportAndStop */
  KeyNotFound?: string;
  /** xsd:string|IgnoreError,ReportAndContinue,ReportAndStop */
  KeyDuplicate?: string;
  /** xsd:string|IgnoreError,ReportAndContinue,ReportAndStop */
  NullKeyConvertedToUnknown?: string;
  /** xsd:string|IgnoreError,ReportAndContinue,ReportAndStop */
  NullKeyNotAllowed?: string;
  /** xsd:string|IgnoreError,ReportAndStop */
  CalculationError?: string;
}
