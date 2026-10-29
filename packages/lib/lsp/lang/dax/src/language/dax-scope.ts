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
 * What a name in a DAX document can resolve to, inside the document.
 *
 * DAX names are case-insensitive, and so is every lookup here. The rules are
 * the ones the reference parser applies while it parses (its variable and
 * table scopes) and the ones DAX itself states:
 *
 *   - A VAR of a VAR ... RETURN block is visible in the RETURN expression and
 *     in the VARs after it, not in its own value and not in the ones before.
 *   - A DEFINE VAR or DEFINE TABLE is visible in every EVALUATE, and in the
 *     definitions after it.
 *   - `[Name]` resolves to a DEFINE MEASURE or DEFINE COLUMN of that name, in
 *     any order - measures may refer to each other. `'T'[Name]` also has to
 *     match the table.
 *   - `@Name` resolves to a parameter the DEFINE clause gives a default.
 *
 * Inner declarations shadow outer ones. Everything else - the model's
 * tables, columns and measures - is unknown here and stays unresolved,
 * which DaxDocumentValidator does not report.
 */
import {
  AstUtils,
  DefaultScopeProvider,
  EMPTY_SCOPE,
  stream,
  type AstNode,
  type AstNodeDescription,
  type ReferenceInfo,
  type Scope,
  type Stream,
} from 'langium'
import {
  isColumnDefinition,
  isColumnReference,
  isMeasureDefinition,
  isNameExpression,
  isParameterDefinition,
  isParameterReference,
  isQueryDocument,
  isTableDefinition,
  isVarExpression,
  isVariableDefinition,
  type ColumnReference,
  type Definition,
  type QueryDocument,
} from './generated/ast.js'

/**
 * The key a name is looked up by: without its delimiters, upper-cased.
 * Declarations arrive converted (`Total`); a reference's text may still be
 * spelled as written (`[Total]`, `@Min`), so both go through this. A node
 * the parser recovered from a half-typed statement may have no name yet.
 */
export function nameKey(name: string | undefined): string {
  let key = (name ?? '').trim()
  if (key.startsWith('[') && key.endsWith(']'))
    key = key.slice(1, -1).replace(/\]\]/g, ']')
  else if (key.startsWith("'") && key.endsWith("'"))
    key = key.slice(1, -1).replace(/''/g, "'")
  else if (key.startsWith('@')) key = key.slice(1)
  return key.toUpperCase()
}

/** A scope keyed case-insensitively; the first declaration of a name wins. */
export class CaseInsensitiveScope implements Scope {
  private readonly elements = new Map<string, AstNodeDescription>()

  constructor(descriptions: Iterable<AstNodeDescription>) {
    for (const description of descriptions) {
      const key = nameKey(description.name)
      if (!this.elements.has(key)) this.elements.set(key, description)
    }
  }

  getElement(name: string): AstNodeDescription | undefined {
    return this.elements.get(nameKey(name))
  }

  getElements(name: string): Stream<AstNodeDescription> {
    const found = this.getElement(name)
    return stream(found ? [found] : [])
  }

  getAllElements(): Stream<AstNodeDescription> {
    return stream(this.elements.values())
  }
}

export class DaxScopeProvider extends DefaultScopeProvider {
  override getScope(context: ReferenceInfo): Scope {
    const node = context.container
    let declarations: AstNode[]
    if (isNameExpression(node)) declarations = visibleNames(node)
    else if (isColumnReference(node)) declarations = visibleColumns(node)
    else if (isParameterReference(node))
      declarations = definitions(node).filter(isParameterDefinition)
    else return EMPTY_SCOPE

    return new CaseInsensitiveScope(
      declarations.flatMap(declaration => {
        const name = this.nameProvider.getName(declaration)
        return name
          ? [this.descriptions.createDescription(declaration, name)]
          : []
      }),
    )
  }
}

/** Variables and defined tables a bare word can see, innermost first. */
export function visibleNames(node: AstNode): AstNode[] {
  const found: AstNode[] = []
  let child: AstNode = node
  let container = node.$container
  while (container) {
    if (isVarExpression(container)) {
      const at = container.variables.indexOf(child as never)
      // In the RETURN expression every variable of the block is visible;
      // in the value of one of them, only those declared before it.
      const visible =
        at < 0 ? container.variables : container.variables.slice(0, at)
      found.push(...[...visible].reverse())
    } else if (isQueryDocument(container)) {
      const at = container.definitions.indexOf(child as never)
      const visible =
        at < 0 ? container.definitions : container.definitions.slice(0, at)
      found.push(
        ...[...visible]
          .reverse()
          .filter(d => isVariableDefinition(d) || isTableDefinition(d)),
      )
    }
    child = container
    container = container.$container
  }
  return found
}

/** DEFINE MEASURE and DEFINE COLUMN a bracketed name can resolve to. */
function visibleColumns(reference: ColumnReference): AstNode[] {
  if (reference.tableParameter) return []
  const table =
    reference.table === undefined ? undefined : nameKey(reference.table)
  return definitions(reference).filter(
    definition =>
      (isMeasureDefinition(definition) || isColumnDefinition(definition)) &&
      (table === undefined || nameKey(definition.table) === table),
  )
}

/** The DEFINE clause of the query a node sits in; a formula has none. */
function definitions(node: AstNode): Definition[] {
  const document = AstUtils.getContainerOfType(node, isQueryDocument) as
    | QueryDocument
    | undefined
  return document ? [...document.definitions] : []
}
