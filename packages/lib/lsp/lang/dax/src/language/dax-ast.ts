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
import type { AstTreeStrategy } from 'org.eclipse.daanse.board.app.lib.lsp.server'

/**
 * The default tree serves DAX as it is: unlike MDX, a DAX call cannot skip
 * an argument, so there are no empty slots to show.
 */
export const DAX_AST_STRATEGY: AstTreeStrategy = {}
