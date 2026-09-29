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
