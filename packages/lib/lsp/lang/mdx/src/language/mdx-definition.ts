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

import type { CstNode, MaybePromise } from 'langium'
import { DefaultDefinitionProvider } from 'langium/lsp'
import type { DefinitionParams, Location, LocationLink } from 'vscode-languageserver'

/**
 * Where a name is declared, told in both of the protocol's shapes at once.
 *
 * A LocationLink is what Langium answers; a client that has not said it
 * reads links - @codemirror/lsp-client among them - reads `uri` and `range`
 * instead, found nothing on a link, and went nowhere without a word. Each
 * answer carries both, so either client lands on the declaration.
 */
export class MdxDefinitionProvider extends DefaultDefinitionProvider {
  protected override async collectLocationLinks(
    sourceCstNode: CstNode,
    params: DefinitionParams,
  ): Promise<Array<LocationLink & Location> | undefined> {
    const links = await super.collectLocationLinks(sourceCstNode, params)
    return links?.map(link => ({
      ...link,
      uri: link.targetUri,
      range: link.targetSelectionRange,
    }))
  }
}
