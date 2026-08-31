import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';
import { parseMdx, syntaxErrors } from '../test-helper.js';

const EXAMPLES_DIR = join(__dirname, '..', '..', 'examples');
const files = readdirSync(EXAMPLES_DIR).filter((file) => file.endsWith('.mdxq') || file.endsWith('.mdxs'));

describe('examples', () => {
    test('the example directory is not empty', () => {
        expect(files.length).toBeGreaterThan(0);
    });

    test.each(files)('%s parses without syntax errors', async (file) => {
        const text = readFileSync(join(EXAMPLES_DIR, file), 'utf8');
        const document = await parseMdx(text);
        expect(syntaxErrors(document)).toBe('');
        expect(document.parseResult.value.statements.length).toBeGreaterThan(0);
    });
});
