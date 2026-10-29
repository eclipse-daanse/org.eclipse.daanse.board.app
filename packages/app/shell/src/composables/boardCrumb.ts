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
 * Where you are, as a path of places.
 *
 * Everything but the last step can be gone back to - a crumb that cannot
 * be clicked is a label, and labels do not belong in a path.
 */
export interface Crumb {
  label: string
  to?: string
}

export interface CrumbContext {
  /** The route's name, as the router knows it. */
  route?: string | symbol | null
  /** The open board's name, or nothing when none is open. */
  boardName?: string
  /** The open page's name, where a page is open. */
  pageName?: string
  /** Namespaced keys are passed through; see useTranslation. */
  t: (key: string) => string
}

/**
 * The path, rooted in the board that is open.
 *
 * One board is open at a time, and it is the context every other screen
 * sits in - connections, storage and configuration are areas of that
 * board, not siblings of it. The root used to be a plural, "Boards",
 * which suggested a list to choose from, named the one board nowhere, and
 * was dropped entirely on half the routes.
 *
 * A board with no pages is still a board: one explores its connections
 * from it. So what roots this is whether a board is open, never whether
 * it has pages.
 */
export function boardCrumb({ route, boardName, pageName, t }: CrumbContext): Crumb[] {
  const named = boardName?.trim()
  const root: Crumb = named
    ? { label: named, to: '/' }
    : { label: t('shell:Header.crumb.noBoard') }

  switch (route) {
    /* The board itself: a label, because this is where the link would go. */
    case 'home':
      return [{ label: root.label }]
    case 'page':
      return [root, { label: pageName || t('shell:Header.page.fallbackName') }]
    case 'edit':
    case 'pageEdit':
      return [root, { label: t('shell:Header.crumb.edit') }]
    case 'pages':
      return [root, { label: t('shell:Header.crumb.pages') }]
    case 'data':
      return [root, { label: t('shell:Header.crumb.data') }]
    case 'config':
      return [root, { label: t('shell:Header.crumb.config') }]
    case 'save':
      return [root, { label: t('shell:Header.crumb.storage') }]
    case 'test':
      return [root, { label: t('shell:Header.crumb.test') }]
    case 'appearance':
      return [root, { label: t('shell:Header.appearance') }]
    case 'events':
      return [root, { label: t('shell:Header.crumb.events') }]
    default:
      return [root, { label: route ? String(route) : t('shell:Header.crumb.board') }]
  }
}
