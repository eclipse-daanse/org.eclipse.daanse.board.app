import { expandToString } from 'langium/generate';
import { parseHelper } from 'langium/test';
import type { LangiumDocument } from 'langium';
import { createMdxServicesForTesting } from '../src/language/mdx-module.js';
import type { MdxScript } from '../src/language/generated/ast.js';

const services = createMdxServicesForTesting();

export const parse = parseHelper<MdxScript>(services.Mdx);

export interface ParseOptions {
    validation?: boolean;
}

export async function parseMdx(text: string, options: ParseOptions = {}): Promise<LangiumDocument<MdxScript>> {
    return parse(text, { validation: options.validation ?? false });
}

/** Formats lexer and parser errors for an assertion message. */
export function syntaxErrors(document: LangiumDocument<MdxScript>): string {
    const { lexerErrors, parserErrors } = document.parseResult;
    if (lexerErrors.length === 0 && parserErrors.length === 0) {
        return '';
    }
    return expandToString`
        Lexer errors:
          ${lexerErrors.map((error) => error.message).join('\n  ') || '(none)'}
        Parser errors:
          ${parserErrors.map((error) => error.message).join('\n  ') || '(none)'}
    `;
}

/** Diagnostics produced by the validator, formatted for assertion messages. */
export function diagnostics(document: LangiumDocument<MdxScript>): string[] {
    return (document.diagnostics ?? []).map((diagnostic) =>
        typeof diagnostic.message === 'string' ? diagnostic.message : diagnostic.message.value
    );
}

/** Diagnostics of a given severity. 1 = error, 2 = warning. */
export function diagnosticsOfSeverity(
    document: LangiumDocument<MdxScript>,
    severity: 1 | 2
): string[] {
    return (document.diagnostics ?? [])
        .filter((diagnostic) => diagnostic.severity === severity)
        .map((diagnostic) =>
            typeof diagnostic.message === 'string' ? diagnostic.message : diagnostic.message.value
        );
}

export { services };
