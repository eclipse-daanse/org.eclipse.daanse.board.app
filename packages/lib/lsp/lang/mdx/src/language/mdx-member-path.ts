/**
 * Helpers for MDX member paths such as `[Date].[Calendar].&[2005].Children`.
 *
 * Paths appear in two forms: as a plain string on declarations
 * (`WITH MEMBER name=MemberPath`) and as a chain of `MemberAccess` nodes in
 * expressions. These helpers work on the string form.
 */

/**
 * Splits a member path on `.`, keeping delimited segments intact and dropping
 * the `&` key qualifier. `]]` inside brackets is an escaped `]`.
 */
export function splitMemberPath(path: string): string[] {
    const segments: string[] = [];
    let current = '';
    let depth = 0;
    for (let i = 0; i < path.length; i++) {
        const char = path[i];
        if (char === '[') {
            depth++;
        } else if (char === ']') {
            if (path[i + 1] === ']') {
                current += ']]';
                i++;
                continue;
            }
            depth--;
        } else if (char === '.' && depth === 0) {
            segments.push(current.trim());
            current = '';
            continue;
        }
        current += char;
    }
    if (current.trim().length > 0) {
        segments.push(current.trim());
    }
    return segments.map(stripKeyQualifier).filter((segment) => segment.length > 0);
}

function stripKeyQualifier(segment: string): string {
    return segment.startsWith('&') ? segment.slice(1).trim() : segment;
}

/**
 * Normalises a member path for comparison: MDX is case-insensitive, and
 * `[Measures].[Amount]` and `[Measures] . [Amount]` name the same member.
 */
export function normalizeMemberPath(path: string): string {
    return path.replace(/\s*\.\s*/g, '.').trim().toUpperCase();
}

/** The undelimited body of an identifier segment, unescaping `]]` to `]`. */
export function identifierBody(segment: string): string {
    return segment.startsWith('[') && segment.endsWith(']')
        ? segment.slice(1, -1).replace(/]]/g, ']')
        : segment;
}
