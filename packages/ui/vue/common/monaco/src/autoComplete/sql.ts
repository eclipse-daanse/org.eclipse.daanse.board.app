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

import * as monaco from 'monaco-editor';


export interface ColumnDefinition {
  name: string;
  type: string;
  description?: string;
}

export interface TableDefinition {
  name: string;
  columns: ColumnDefinition[];
  description?: string;
}

export type DatabaseSchema = Record<string, TableDefinition>;

type AliasMap = Record<string, string>; // { "u": "users" }


const SQL_KEYWORDS = [
  'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'LIMIT', 'ORDER BY', 'GROUP BY',
  'HAVING', 'AS', 'LEFT JOIN', 'INNER JOIN', 'RIGHT JOIN', 'ON',
  'DISTINCT', 'INSERT INTO', 'UPDATE', 'DELETE', 'VALUES', 'SET',
  'IS NULL', 'IS NOT NULL', 'IN', 'LIKE', 'BETWEEN'
];

const SQL_FUNCTIONS = [
  'COUNT', 'MAX', 'MIN', 'AVG', 'SUM', 'ROUND', 'CONCAT', 'NOW', 'DATE'
];

function parseAliases(code: string): AliasMap {
  const aliases: AliasMap = {};
  const regex = /\b(FROM|JOIN|UPDATE)\s+([a-zA-Z0-9_]+)(?:\s+(?:AS\s+)?([a-zA-Z0-9_]+))?/gim;

  let match;
  while ((match = regex.exec(code)) !== null) {
    const tableName = match[2];
    const alias = match[3];

    if (alias && !SQL_KEYWORDS.includes(alias.toUpperCase())) {
      aliases[alias] = tableName;
    }
  }
  return aliases;
}

function getQueryAnchor(textBeforeCursor: string): string {
  const tokens = textBeforeCursor.replace(/\s+/g, ' ').trim().split(' ');

  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i].toUpperCase();
    if (['SELECT', 'FROM', 'JOIN', 'UPDATE', 'SET', 'WHERE', 'GROUP', 'ORDER', 'HAVING'].includes(token)) {
      if (token === 'BY' && i > 0) {
        const prev = tokens[i - 1].toUpperCase();
        if (prev === 'ORDER' || prev === 'GROUP') return `${prev} BY`;
      }
      return token;
    }
  }
  return '';
}


export function setupSqlIntellisense(monacoInstance: typeof monaco, schema: DatabaseSchema) {


  const disposable = monacoInstance.languages.registerCompletionItemProvider('sql', {
    triggerCharacters: ['.', ' ', '\n'],

    provideCompletionItems: (model, position) => {
      const wordUntil = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: wordUntil.startColumn,
        endColumn: wordUntil.endColumn,
      };

      const textUntilPosition = model.getValueInRange({
        startLineNumber: 1, startColumn: 1,
        endLineNumber: position.lineNumber, endColumn: position.column
      });
      const fullText = model.getValue();
      const aliases = parseAliases(fullText);
      const anchor = getQueryAnchor(textUntilPosition);

      const suggestions: monaco.languages.CompletionItem[] = [];

      const lineContent = model.getLineContent(position.lineNumber);
      const isDot = lineContent.trimEnd().endsWith('.');

      if (textUntilPosition.endsWith('.')) {
        const match = textUntilPosition.match(/([a-zA-Z0-9_]+)\.$/);
        if (match) {
          const objName = match[1];
          const realTableName = aliases[objName] || objName;

          if (schema[realTableName]) {
            schema[realTableName].columns.forEach(col => {
              suggestions.push({
                label: col.name,
                kind: monacoInstance.languages.CompletionItemKind.Field,
                detail: col.type,
                documentation: col.description,
                insertText: col.name,
                range: range
              });
            });
          }
        }
        return { suggestions };
      }

      if (['FROM', 'JOIN', 'UPDATE', 'INTO'].some(kw => anchor.includes(kw))) {
        Object.keys(schema).forEach(tableName => {
          suggestions.push({
            label: tableName,
            kind: monacoInstance.languages.CompletionItemKind.Class,
            detail: 'Table',
            documentation: schema[tableName].description,
            insertText: tableName,
            range: range
          });
        });
        return { suggestions };
      }

      Object.keys(schema).forEach(tableName => {
        schema[tableName].columns.forEach(col => {
          suggestions.push({
            label: col.name,
            kind: monacoInstance.languages.CompletionItemKind.Field,
            detail: `${tableName} • ${col.type}`,
            documentation: col.description,
            insertText: col.name,
            sortText: 'a_' + col.name,
            range: range
          });
        });
      });

      Object.keys(aliases).forEach(alias => {
        suggestions.push({
          label: alias,
          kind: monacoInstance.languages.CompletionItemKind.Variable,
          detail: `Alias -> ${aliases[alias]}`,
          insertText: alias,
          sortText: '0_' + alias,
          range: range
        });
      });

      SQL_FUNCTIONS.forEach(func => {
        suggestions.push({
          label: func,
          kind: monacoInstance.languages.CompletionItemKind.Function,
          insertText: `${func}(\${1:*})`,
          insertTextRules: monacoInstance.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: 'Function',
          range: range
        });
      });

      if (anchor !== '') {
          SQL_KEYWORDS.forEach(kw => {
            suggestions.push({
              label: kw,
              kind: monacoInstance.languages.CompletionItemKind.Keyword,
              insertText: kw,
              range: range
            });
          });
      } else {
        suggestions.push({ label: 'SELECT', kind: monacoInstance.languages.CompletionItemKind.Keyword, insertText: 'SELECT', range });
      }

      if (anchor === 'WHERE' || anchor === 'AND' || anchor === 'OR') {
          suggestions.push(
              { label: 'IS NULL', kind: monacoInstance.languages.CompletionItemKind.Snippet, insertText: 'IS NULL', range },
              { label: 'IN (...)', kind: monacoInstance.languages.CompletionItemKind.Snippet, insertText: 'IN (${1:values})', insertTextRules: monacoInstance.languages.CompletionItemInsertTextRule.InsertAsSnippet, range },
              { label: 'LIKE', kind: monacoInstance.languages.CompletionItemKind.Snippet, insertText: "LIKE '${1:%pattern%}'", insertTextRules: monacoInstance.languages.CompletionItemInsertTextRule.InsertAsSnippet, range }
          );
      }

      return { suggestions };
    }
  });

  return { dispose: () => disposable.dispose() };
}
