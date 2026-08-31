import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { EditorView } from '@codemirror/view';
import { tags } from '@lezer/highlight';
import type { Extension } from '@codemirror/state';

/**
 * A dark theme matching `src/styles.css` and, deliberately, the colours the
 * Monaco playground gets from VS Code's Default Dark Modern — so the two
 * editors are comparable at a glance rather than differing in ways that are
 * only cosmetic.
 */
const palette = {
    background: '#1f1f1f',
    surface: '#181818',
    foreground: '#cccccc',
    caret: '#aeafad',
    selection: '#264f78',
    lineHighlight: '#ffffff0a',
    gutterForeground: '#6e7681',
    border: '#2b2b2b',
    comment: '#6a9955',
    keyword: '#c586c0',
    member: '#9cdcfe',
    key: '#4fc1ff',
    string: '#ce9178',
    number: '#b5cea8',
    fn: '#dcdcaa',
    constant: '#569cd6',
    property: '#9cdcfe',
    operator: '#d4d4d4'
};

export const editorBaseTheme = EditorView.theme(
    {
        '&': {
            color: palette.foreground,
            backgroundColor: palette.background,
            height: '100%',
            fontSize: '13px'
        },
        '.cm-scroller': {
            fontFamily:
                "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
            lineHeight: '1.5'
        },
        '.cm-content': { caretColor: palette.caret },
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: palette.caret },
        '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
            backgroundColor: palette.selection
        },
        '.cm-activeLine': { backgroundColor: palette.lineHighlight },
        '.cm-gutters': {
            backgroundColor: palette.background,
            color: palette.gutterForeground,
            border: 'none'
        },
        '.cm-activeLineGutter': { backgroundColor: palette.lineHighlight },
        '.cm-foldPlaceholder': {
            backgroundColor: 'transparent',
            border: 'none',
            color: palette.gutterForeground
        },
        '.cm-tooltip': {
            backgroundColor: palette.surface,
            border: `1px solid ${palette.border}`,
            color: palette.foreground
        },
        '.cm-tooltip.cm-tooltip-autocomplete > ul': {
            fontFamily:
                "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
            maxHeight: '16rem'
        },
        '.cm-tooltip.cm-tooltip-autocomplete > ul > li[aria-selected]': {
            backgroundColor: palette.selection,
            color: palette.foreground
        },
        '.cm-completionIcon': { paddingRight: '0.6em', opacity: 0.7 },
        '.cm-completionDetail': {
            marginLeft: '1rem',
            color: palette.gutterForeground,
            fontStyle: 'normal'
        },
        // The panel @codemirror/lint renders at the bottom is redundant here —
        // the app has its own Problems panel fed from the same diagnostics.
        '.cm-panels': { display: 'none' }
    },
    { dark: true }
);

const tokenHighlightStyle = HighlightStyle.define([
    { tag: tags.comment, color: palette.comment, fontStyle: 'italic' },
    { tag: tags.keyword, color: palette.keyword },
    { tag: tags.operator, color: palette.operator },
    { tag: tags.string, color: palette.string },
    { tag: tags.number, color: palette.number },
    // Delimited identifiers — `[Measures]`, `[Order Quantity]`.
    { tag: tags.variableName, color: palette.member },
    // Key qualifiers — `&[Mountain-200]` — and the contextual `This`.
    { tag: tags.atom, color: palette.key },
    // Axis names and positional flags.
    { tag: tags.typeName, color: palette.constant },
    { tag: tags.function(tags.variableName), color: palette.fn },
    { tag: tags.propertyName, color: palette.property }
]);

export function editorTheme(): Extension {
    return [editorBaseTheme, syntaxHighlighting(tokenHighlightStyle)];
}
