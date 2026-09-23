/*
Copyright (c) 2024 Contributors to the  Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

  SPDX-License-Identifier: EPL-2.0

Contributors:
  Markus Hochstein - inital setup
  Stefan Bischof - inital setup
*/

import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      'spaced-comment': 'off'
    },
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  /*
   * Words on screen go through a translation key (docs/i18n.md), so a
   * literal word in a template is most likely one that was missed. A
   * warning for now: symbols, units and names that are the same in every
   * language are allowed, and the test harnesses are left out.
   */
  {
    name: 'app/i18n',
    files: ['packages/**/*.vue'],
    ignores: ['packages/ui/vue/test/**'],
    rules: {
      'vue/no-bare-strings-in-template': [
        'warn',
        {
          allowlist: [
            '(', ')', ',', '.', '&', '+', '-', '=', '*', '/', '#', '%', '!', '?', ':', '[', ']', '{', '}', '<', '>',
            '•', '·', '–', '—', '→', '←', '↑', '↓', '↺', '×', '✕', '▾', '▸', '▼', '…', '°', '|',
            '{x}', 'px', 'ms', 's', 'km', 'min', 'h', 'URL', 'UID', 'ID', 'JSON', 'MDX', 'SQL', 'XMLA', 'OK',
            /* Numbers with a unit, the Material icon names and emoji used as pictures. */
            '/^[\\d.,]+\\s*(px|ms|s|x|×|%|°[NE]?)?$/',
            '/^[\\p{Extended_Pictographic}\\uFE0F\\s]+$/u',
            '/^(P|H[1-6])$/',
          ],
          attributes: {
            '/.+/': ['title', 'aria-label', 'aria-placeholder', 'aria-description', 'placeholder', 'alt'],
            '/^D[A-Z]/': ['label', 'hint', 'placeholder', 'title', 'error', 'empty'],
          },
          directives: ['v-text'],
        },
      ],
    },
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  skipFormatting
]
