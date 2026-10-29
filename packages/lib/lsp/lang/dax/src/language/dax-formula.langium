/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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
 * A DAX formula: one expression, as a measure, a calculated column or a
 * calculated table is written - the reference parser's ExpressionRoot entry
 * point (DaxParser#parseExpression). Files ending in `.daxe`.
 *
 * Everything is in dax-core.langium; a formula has no statement level.
 */
grammar DaxFormula

import './dax-core'

entry FormulaDocument:
    expression=Expression;
