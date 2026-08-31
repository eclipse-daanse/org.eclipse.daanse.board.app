/**
 * Primitives shared by the languages' CodeMirror tokenizers.
 *
 * Every OLAP-adjacent language here delimits identifiers and strings the same
 * way — a closing delimiter, doubled to escape itself — and comments them the
 * same way too. MDX had these as private functions; DMV inlined the identical
 * loops; a third language would have written them a third time.
 *
 * Deliberately structural rather than typed against CodeMirror's `StringStream`:
 * these take the four methods they use, so they are trivially testable with a
 * fake and this module stays free of a `@codemirror/language` dependency.
 *
 * All of them assume the opening delimiter has already been consumed.
 */

/** The part of CodeMirror's `StringStream` these helpers touch. */
export interface TokenStream {
    eol(): boolean;
    next(): string | void;
    peek(): string | undefined;
    match(pattern: string): unknown;
}

/**
 * Consumes up to and including `close`, treating a doubled `close` as an
 * escaped literal — `[Order ]] Quantity]`, `'it''s'`.
 *
 * @returns whether the delimiter closed on this line.
 *
 * Callers decide what an unterminated one means. In these languages neither
 * identifiers nor strings span lines, so the caller closes the state at
 * end-of-line rather than bleeding the colour into the rest of the document.
 */
export function consumeDelimited(stream: TokenStream, close: string): boolean {
    while (!stream.eol()) {
        if (stream.next() !== close) continue;
        if (stream.peek() === close) {
            stream.next(); // doubled: an escaped delimiter, keep going
            continue;
        }
        return true;
    }
    return false;
}

/**
 * Consumes up to and including `*` + `/`.
 *
 * @returns whether the comment closed on this line. Block comments *do* span
 * lines, so a `false` here means the caller should keep its in-comment state
 * set for the next line.
 */
export function consumeBlockComment(stream: TokenStream): boolean {
    while (!stream.eol()) {
        if (stream.match('*/')) return true;
        stream.next();
    }
    return false;
}
