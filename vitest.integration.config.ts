/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

/*
 * The tests that need something this machine may not have.
 *
 * The git providers are exercised against live GitHub and Gitea, with tokens
 * out of github.config.json / gitea.config.json, neither of which is in the
 * tree. Run from the default suite they fail for everyone who has not put
 * those files there, which is how twelve failures became background noise
 * nobody read.
 *
 * Usage: yarn test:integration
 */
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import baseConfig from './vitest.config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      /* Only these - the base config excludes them for the same reason. */
      include: ['**/git_api/test/**/*.test.ts'],
      exclude: [...configDefaults.exclude],
    },
  }),
)
