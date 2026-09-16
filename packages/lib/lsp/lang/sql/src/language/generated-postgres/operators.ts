/**
 * GENERATED from PostgreSQL 18.6 (Debian 18.6-1.pgdg13+2)'s `pg_operator`.
 * Run `npm run refresh-postgres-data`; never edit by hand.
 *
 * Names only. The grammar lexes any run of operator characters as one token,
 * which is what the server does, so the validator is what answers whether the
 * run names an operator that exists. Which overload applies needs types, and
 * this package has no catalogue.
 */

export const OPERATORS: ReadonlySet<string> = new Set([
    '!!', '!~', '!~*', '!~~', '!~~*', '#', '##', '#-', '#>', '#>>', '%', '&', '&&', '&<', '&<|',
    '&>', '*', '*<', '*<=', '*<>', '*=', '*>', '*>=', '+', '-', '->', '->>', '-|-', '/', '<',
    '<->', '<<', '<<=', '<<|', '<=', '<>', '<@', '<^', '=', '>', '>=', '>>', '>>=', '>^', '?',
    '?#', '?&', '?-', '?-|', '?|', '?||', '@', '@-@', '@>', '@?', '@@', '@@@', '^', '^@', '|',
    '|&>', '|/', '|>>', '||', '||/', '~', '~*', '~<=~', '~<~', '~=', '~>=~', '~>~', '~~', '~~*'
]);

export const POSTGRES_VERSION = "18.6 (Debian 18.6-1.pgdg13+2)";
