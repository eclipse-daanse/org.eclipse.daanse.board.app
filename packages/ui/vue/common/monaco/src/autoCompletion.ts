/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import * as monaco from 'monaco-editor'

monaco.languages.setMonarchTokensProvider('sql', {
  tokenizer: {
    root: [
      [
        /\b(SELECT|FROM|WHERE|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|DROP|ALTER|TABLE|JOIN|ON|GROUP BY|ORDER BY)\b/,
        'keyword',
      ],
      [/'.*?'/, 'string'],
      [/\b\d+(\.\d+)?\b/, 'number'],
      [/\b[a-zA-Z_][\w$]*\b/, 'identifier'],
      [/--.*$/, 'comment'],
      [/\/\*/, { token: 'comment.block', next: 'comment' }],
    ],
    comment: [
      [/[^*/]+/, 'comment.block'],
      [/\/\*/, { token: 'comment.block', next: 'comment' }],
      [/\*\//, { token: 'comment.block', next: '@pop' }],
      [/./, 'comment.block'],
    ],
  },
})

monaco.languages.registerCompletionItemProvider('sql', {
  provideCompletionItems: (model, position) => {
    const word = model.getWordUntilPosition(position)
    const range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn,
    }

    const suggestions = [
      {
        label: 'SELECT',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'SELECT',
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        range: range,
      },
      {
        label: 'INSERT',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'INSERT',
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        range: range,
      },
      {
        label: 'UPDATE',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'UPDATE',
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        range: range,
      },
    ]

    return { suggestions: suggestions }
  },
})

monaco.languages.setMonarchTokensProvider('mdx', {
  // (1) Ignore case when matching tokens
  ignoreCase: true,

  // (2) Suffix for token CSS classes (optional)
  tokenPostfix: '.mdx',

  // (3) Keywords taken from your JavaCC grammar
  //     Feel free to remove or add more as needed
  keywords: [
    'ALL',
    'ALLMEMBERS',
    'ANCESTOR',
    'ANCESTORS',
    'AND',
    'AS',
    'ASC',
    'AXIS',
    'CASE',
    'CALCULATION',
    'CAST',
    'CELL',
    'CHAPTERS',
    'COLUMNS',
    'CUBE',
    'CURRENTCUBE',
    'DIMENSION',
    'DRILLTHROUGH',
    'ELSE',
    'EMPTY',
    'END',
    'EXISTING',
    'EXPLAIN',
    'FIRSTROWSET',
    'FOR',
    'FROM',
    'IN',
    'IS',
    'MATCHES',
    'MAXROWS',
    'MEASURE',
    'MEMBER',
    'NON',
    'NOT',
    'NULL',
    'ON',
    'OR',
    'PAGES',
    'PLAN',
    'PROPERTIES',
    'REFRESH',
    'UPDATE',
    'RETURN',
    'ROWS',
    'SECTIONS',
    'SELECT',
    'SET',
    'THEN',
    'WHEN',
    'WHERE',
    'XOR',
    'WITH',
    'USE_EQUAL_ALLOCATION',
    'USE_EQUAL_INCREMENT',
    'USE_WEIGHTED_ALLOCATION',
    'USE_WEIGHTED_INCREMENT',
    'BY',
    '$SYSTEM',
  ],

  // (4) Operators extracted from the grammar (including "<>", "||", etc.)
  operators: [
    '=',
    '<>',
    '<',
    '>',
    '<=',
    '>=',
    '+',
    '-',
    '*',
    '/',
    '||',
    ':',
    '!',
  ],

  // (5) Brackets
  brackets: [
    ['{', '}', 'delimiter.curly'],
    ['[', ']', 'delimiter.square'],
    ['(', ')', 'delimiter.parenthesis'],
  ],

  // (6) Symbols used to match operators
  symbols: /[=><!~?:&|+\-*/^%]+/,

  // (7) The main tokenizer definition
  tokenizer: {
    // --- root state ---
    root: [
      // (a) Comments
      //     Single-line: //..., --...
      //     Multi-line:  /* ... */
      //     We use additional states for multi-line.

      // Single-line comments:
      [/(\/\/|--).*$/, 'comment'],

      // Multi-line comment start: enter @commentBlock
      [/(\/\*)/, { token: 'comment', next: '@commentBlock' }],

      // (b) Whitespace
      { include: '@whitespace' },

      // (c) Numeric literals
      //     Covers integer, decimal, or exponent notation
      [/\d+(\.\d+)?([eE][+\-]?\d+)?/, 'number'],

      // (d) Strings
      //     Single-quoted and double-quoted, allowing escaped quotes
      [/'([^']|'')*'/, 'string'],
      [/\"([^"]|\"\")*\"/, 'string'],

      // (e) Bracketed (quoted) identifiers
      //     Including "[&something]" or "[something]"
      [/\[&[^\]]*\]/, 'identifier.amp-quoted'], // e.g., &[xyz]
      [/\[[^\]]*\]/, 'identifier.quoted'], // e.g., [xyz]

      // (f) Operators and special symbols
      [
        /@symbols/,
        {
          cases: {
            '@operators': 'operator',
            '@default': '',
          },
        },
      ],

      // (g) Brackets (parentheses, curly, square)
      [/[{}()\[\]]/, '@brackets'],

      // (h) Punctuation (comma, semicolon, period, etc.)
      [/[;,.:]/, 'delimiter'],

      // (i) Identifiers or Keywords
      //     This includes things like @ID, &ID, etc.
      [
        /[a-zA-Z_@$&][\w$]*/,
        {
          cases: {
            '@keywords': 'keyword',
            '@default': 'identifier',
          },
        },
      ],
    ],

    // --- commentBlock state for multi-line comments ---
    commentBlock: [
      // End of multi-line comment
      [/\*\//, { token: 'comment', next: '@pop' }],
      // Everything else remains in comment
      [/./, 'comment'],
    ],

    // --- Whitespace ---
    whitespace: [[/[ \t\r\n\f]+/, 'white']],
  },
})

export function initMDXCompletionProvider(
  cubes: MDSchemaCube[],
  metadataStore,
) {
  monaco.languages.registerCompletionItemProvider('mdx', {
    provideCompletionItems: async (model, position) => {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      })
      console.log(metadataStore)
      console.log(textUntilPosition)

      if (textUntilPosition.toUpperCase().includes('FROM')) {
        const cubeMatch = textUntilPosition.match(/FROM\s+\[(.*?)\]/i)

        if (!cubeMatch) {
          // Функция, возвращающая массив названий кубов
          console.log(cubes)
          // Формируем предложения для автодополнения
          const cubeSuggestions = cubes.map((cube: MDSchemaCube) => ({
            label: `[${cube.CUBE_NAME}]`,
            kind: monaco.languages.CompletionItemKind.Module, // или Class/Folder/etc.
            insertText: `${cube.CUBE_NAME}]`,
          }))

          console.log(cubeSuggestions)

          return { suggestions: cubeSuggestions }
        }
      }

      const dimensions = metadataStore.storage.dimensions
      const dimensionsSuggestions = dimensions.map(
        (dimension: MDSchemaDimension) => ({
          label: `[${dimension.DIMENSION_NAME}]`,
          kind: monaco.languages.CompletionItemKind.Module,
          insertText: `[${dimension.DIMENSION_NAME}]`,
        }),
      )

      const hierarchies = metadataStore.storage.hierarchies
      const hierarchySuggestions = hierarchies.map(
        (hierarchy: MDSchemaHierarchy) => ({
          label: `[${hierarchy.HIERARCHY_NAME}]`,
          kind: monaco.languages.CompletionItemKind.Folder,
          insertText: `${hierarchy.DEFAULT_MEMBER}`,
        }),
      )

      // console.log(textUntilPosition);
      // const hierarchyMatch = textUntilPosition.match(/.*\[(.*?)\]\.\[.*$/i)
      // console.log(hierarchyMatch);

      // if (hierarchyMatch) {
      //   const dimensionName = hierarchyMatch[1]

      //   const hierarchies = metadataStore.storage.hierarchies;

      //   if (hierarchies) {
      //     const hierarchySuggestions = hierarchies.filter((hierarchy: MDSchemaHierarchy) => {
      //       console.log(hierarchy);
      //       return hierarchy.DIMENSION_UNIQUE_NAME === `[${dimensionName}]`
      //     }).map((hierarchy: MDSchemaHierarchy) => ({
      //       label: `[${hierarchy.HIERARCHY_NAME}]`,
      //       kind: monaco.languages.CompletionItemKind.Folder, // Или другой тип, например, Interface
      //       insertText: `[${hierarchy.HIERARCHY_NAME}]ы`
      //     }))

      //     return { suggestions: hierarchySuggestions }
      //   }
      // }

      // TODO: Get suggestions for functions from SERVER

      const functionSuggestions = [
        {
          label: 'SUM',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SUM(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Возвращает сумму значений набора.',
        },
        {
          label: 'AVG',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'AVG(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Возвращает среднее значение набора.',
        },
        {
          label: 'COUNT',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'COUNT(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Возвращает количество элементов в наборе.',
        },
        {
          label: 'FILTER',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FILTER(${1:set}, ${2:condition})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Возвращает отфильтрованный набор.',
        },
        {
          label: 'MIN',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'MIN(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'MAX',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'MAX(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'AGGREGATE',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'AGGREGATE(${1:set}[, ${2:numeric expression}])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'MEDIAN',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'MEDIAN(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'IIF',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText:
            'IIF(${1:condition}, ${2:value_if_true}, ${3:value_if_false})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'ISEMPTY',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'ISEMPTY(${1:value})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'FORMAT',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FORMAT(${1:value}, ${2:format_string})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'STRTOSET',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'STRTOSET(${1:string_expression})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'STRTOTUPLE',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'STRTOTUPLE(${1:string_expression})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'STRTOVALUE',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'STRTOVALUE(${1:string_expression})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'STRTOMEMBER',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'STRTOMEMBER(${1:string_expression})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
      ]

      const timeFunctionSuggestions = [
        {
          label: 'YTD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'YTD(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'QTD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'QTD(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'MTD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'MTD(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'WTD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'WTD(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'PERIODSTODATE',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'PERIODSTODATE(${1:level}[, ${2:member}])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'PARALLELPERIOD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText:
            'PARALLELPERIOD(${1:level}[, ${2:numeric expression}[, ${3:member}]])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'LASTPERIODS',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'LASTPERIODS(${1:count}, ${2:level}[.members])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
      ]

      const suggestions = [
        {
          label: 'SELECT',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'SELECT',
        },
        {
          label: 'FROM',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'FROM',
        },
        {
          label: 'WHERE',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'WHERE',
        },
        {
          label: 'ON',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'ON',
        },
        {
          label: 'COLUMNS',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'COLUMNS',
        },
        {
          label: 'ROWS',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'ROWS',
        },
        {
          label: 'NON EMPTY',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'NON EMPTY',
        },
        {
          label: 'WITH',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'WITH',
        },
        {
          label: 'MEMBER',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'MEMBER',
        },
        {
          label: 'SET',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'SET',
        },
        {
          label: 'AS',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'AS',
        },
        {
          label: 'CASE',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'CASE',
        },
        {
          label: 'WHEN',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'WHEN',
        },
        {
          label: 'THEN',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'THEN',
        },
        {
          label: 'ELSE',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'ELSE',
        },
        {
          label: 'END',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'END',
        },
      ]

      const setsFunctionSuggestions = [
        {
          label: 'CROSSJOIN',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'CROSSJOIN(${1:set1}, ${2:set2})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'FILTER',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FILTER(${1:set}, ${2:condition})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'HEAD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'HEAD(${1:set}[, ${2:count}])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'TAIL',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'TAIL(${1:set}[, ${2:count}])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'ORDER',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText:
            'ORDER(${1:set}, ${2:value expression}[, ASC | DESC | BASC | BDESC])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'TOPCOUNT',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'TOPCOUNT(${1:set}, ${2:count}, ${3:value expression})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'BOTTOMCOUNT',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText:
            'BOTTOMCOUNT(${1:set}, ${2:count}, ${3:value expression})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'DISTINCT',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'DISTINCT(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'EXISTING',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'EXISTING(${1:set}[, ${2:set}])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'MEMBERS',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: '${1:level}.MEMBERS',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'Generate',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'Generate(${1:set1}, ${2:set2})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
      ]

      const memberFunctionSuggestions = [
        {
          label: 'PARENT',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'PARENT(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'CHILDREN',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'CHILDREN(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'FIRSTCHILD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FIRSTCHILD(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'LASTCHILD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'LASTCHILD(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'LEAD',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'LEAD(${1:member}[, ${2:count}])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'LAG',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'LAG(${1:member}[, ${2:count}])',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'CURRENTMEMBER',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'CURRENTMEMBER(${1:level})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'SIBLINGS',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SIBLINGS(${1:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'ANCESTORS',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'ANCESTORS(${1:member}, ${2:level or number})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'HIERARCHIZE',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'HIERARCHIZE(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'DRILLDOWNMEMBER',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'DRILLDOWNMEMBER(${1:set}, ${2:member})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'ADDcalculatedMEMBERS',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'AddCalculatedMembers(${1:set})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
      ]

      return {
        suggestions: [
          ...dimensionsSuggestions,
          ...hierarchySuggestions,
          ...functionSuggestions,
          ...timeFunctionSuggestions,
          ...suggestions,
          ...setsFunctionSuggestions,
          ...memberFunctionSuggestions,
        ],
      }
    },
  })
}
