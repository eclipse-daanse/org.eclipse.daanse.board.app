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

/**
 * The apps one launcher (packages/app/default) is built as, chosen by
 * VITE_APP. Each is a build of its own, in dist-<app>/, and an image of its
 * own (Docker/Dockerfile, ARG APP).
 *
 *   board      the board, with every bundle; the workbench at /workbench
 *   workbench  the MDX workbench alone, at /, with the bundles it needs
 *
 * `roots` names where an app's bundles start; bundleHull() in
 * bundle-graph.mjs adds what they need. No roots: every bundle.
 */
export const APPS = {
  board: {
    title: 'Daanse Floor',
    favicon: '/favicon_daanse.ico',
    frame: undefined,
    roots: undefined,
  },
  workbench: {
    title: 'Daanse MDX Workbench',
    favicon: '/LogoDaanse.svg',
    frame: 'app.workbench',
    roots: ['app.workbench'],
  },
}

/** The app VITE_APP names, board when it names none. */
export function appOf(env = process.env) {
  const id = env.VITE_APP || 'board'
  const app = APPS[id]
  if (!app) {
    throw new Error(`VITE_APP=${id} names no app - one of: ${Object.keys(APPS).join(', ')}`)
  }
  return { id, ...app, outDir: `dist-${id}` }
}
