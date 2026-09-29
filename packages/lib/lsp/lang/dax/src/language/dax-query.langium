/**
 * A DAX query: an optional DEFINE clause, then one or more EVALUATE
 * statements - the reference parser's DaxStatement entry point
 * (DaxParser#parseDaxStatement). Files ending in `.dax`.
 *
 * Everything below the statement level is in dax-core.langium.
 */
grammar DaxQuery

import './dax-core'

entry QueryDocument:
    ('DEFINE' definitions+=Definition (','? definitions+=Definition)*)?
    statements+=EvaluateStatement+;

/**
 * `EVALUATE <table> [ORDER BY <expr> [ASC|DESC], ... [START AT <value>, ...]]`
 *
 * START AT takes one value per ORDER BY expression; that count is checked by
 * the validator, as the reference parser checks it after parsing.
 *
 * DIVERGENCE: the reference parser takes START AT values either as a single
 * expression or as a parenthesized list. Microsoft documents a plain comma
 * list - `START AT {<value>|<parameter>} [, …]` (START AT) - which is
 * accepted here; the parenthesized form still is, as a row.
 *
 * DIVERGENCE: the reference parser takes any word as the direction (it is an
 * IDENTIFIER there). Microsoft documents ASC and DESC only.
 */
EvaluateStatement:
    'EVALUATE' expression=Expression
    ('ORDER' 'BY' orderBy+=OrderByItem (',' orderBy+=OrderByItem)*
        ('START' 'AT' startAt+=Expression (',' startAt+=Expression)*)?
    )?;

OrderByItem:
    expression=Expression (direction=('ASC' | 'DESC'))?;
