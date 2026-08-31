// The playground samples are the same files the parser tests run against, so
// what you see in the editor is exactly what the test suites cover.
//
// They live in the language package rather than in an application because the
// language descriptor carries them: anything that mounts the editor gets the
// examples for free, and a new language brings its own.
import type { LanguageExample } from 'org.eclipse.daanse.board.app.lib.lsp.core';

import basic from '../examples/basic.mdxq?raw';
import autoexists from '../examples/autoexists.mdxq?raw';
import nonVisual from '../examples/non-visual.mdxq?raw';
import properties from '../examples/properties.mdxq?raw';
import operators from '../examples/operators.mdxq?raw';
import borrowed from '../examples/borrowed-syntax.mdxq?raw';
import script from '../examples/script.mdxs?raw';

export const MDX_EXAMPLES: LanguageExample[] = [
    {
        id: 'scratch',
        label: 'Scratch',
        description: 'A small query to edit freely.',
        fileName: 'scratch.mdxq',
        text: `SELECT
    {[Measures].[Unit Sales], [Measures].[Store Cost]} ON COLUMNS,
    [Product].[Product Family].Members ON ROWS
FROM [Sales]
`
    },
    {
        id: 'basic',
        label: 'Basic query',
        description: 'WITH MEMBER, two axes, a slicer.',
        fileName: 'basic.mdxq',
        text: basic
    },
    {
        id: 'autoexists',
        label: 'Named sets',
        description: 'Calculated member with properties and two named sets — try go-to-definition.',
        fileName: 'autoexists.mdxq',
        text: autoexists
    },
    {
        id: 'non-visual',
        label: 'NON VISUAL subselects',
        description: 'Nested subselects that keep true totals.',
        fileName: 'non-visual.mdxq',
        text: nonVisual
    },
    {
        id: 'properties',
        label: 'Dimension & cell properties',
        description: 'DIMENSION PROPERTIES on an axis, CELL PROPERTIES after the slicer.',
        fileName: 'properties.mdxq',
        text: properties
    },
    {
        id: 'borrowed-syntax',
        label: 'Parameters & casts',
        description:
            'Syntax borrowed from the Daanse port: @parameters, ||, CAST, composite &[…]&[…] keys, skipped argument slots.',
        fileName: 'borrowed-syntax.mdxq',
        text: borrowed
    },
    {
        id: 'operators',
        label: 'Operators & functions',
        description: 'Precedence torture test and a wide sweep of the function library.',
        fileName: 'operators.mdxq',
        text: operators
    },
    {
        id: 'script',
        label: 'Cube script',
        description: 'CALCULATE, CREATE MEMBER, nested SCOPE blocks, FREEZE.',
        fileName: 'script.mdxs',
        text: script
    }
];
