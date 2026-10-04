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
 * What a model says about itself, for the forms built on top of it.
 *
 * The .ecore files carry GenModel `documentation` annotations on classes and
 * on every feature - the sentence that explains what a field is for. The
 * code generator drops them: neither the generated interface nor the
 * generated EPackage keeps a word of it. So the documentation is read here,
 * from the model file itself, which each type hands over when it registers.
 *
 * The XML is read rather than loaded as an EMF resource on purpose. Loading
 * would mean resolving every `href` to a package that may not be registered
 * yet, and failing over a supertype nobody asked about; reading the document
 * asks nothing of the runtime and cannot fail that way.
 */

/** A single field of a configuration, as the model describes it. */
export interface FeatureDoc {
  /** The feature's name - the key in the config object. */
  name: string
  /** The model's own sentence about it, if it carries one. */
  documentation?: string
  /** 'string' | 'number' | 'boolean', or the raw Ecore type name. */
  type: string
  /** Whether the model lets it stay empty (lowerBound 0). */
  optional: boolean
  /** Whether it holds a list rather than a single value. */
  many: boolean
  /** The class it was declared on - a supertype, for inherited fields. */
  declaredBy: string
}

/** A configuration class, as the model describes it. */
export interface ClassDoc {
  name: string
  documentation?: string
  /** Inherited fields first, then the class's own. */
  features: FeatureDoc[]
}

const GEN_MODEL = 'http://www.eclipse.org/emf/2002/GenModel'

/* Ecore's own datatypes, mapped to what a form control needs to know. */
const PRIMITIVES: Record<string, string> = {
  EString: 'string',
  EInt: 'number',
  EIntegerObject: 'number',
  ELong: 'number',
  EFloat: 'number',
  EDouble: 'number',
  EBoolean: 'boolean',
  EBooleanObject: 'boolean',
  EDate: 'string',
}

/** One parsed model file, kept by the nsURI it declares. */
interface ParsedModel {
  nsURI: string
  classes: Map<string, Element>
}

const models = new Map<string, ParsedModel>()

function documentationOf(element: Element): string | undefined {
  for (const annotation of Array.from(element.children)) {
    if (annotation.tagName !== 'eAnnotations') continue
    if (annotation.getAttribute('source') !== GEN_MODEL) continue
    for (const detail of Array.from(annotation.children)) {
      if (detail.getAttribute('key') !== 'documentation') continue
      const value = detail.getAttribute('value')
      /* The models wrap long sentences across lines and indent them to
         line up with the XML; that indentation is not part of the text. */
      if (value) return value.split(/\s+/).filter(Boolean).join(' ')
    }
  }
  return undefined
}

/** `ecore:EDataType http://...Ecore#//EString` -> `string`. */
function typeOf(feature: Element): string {
  const raw = feature.getAttribute('eType') ?? ''
  const name = raw.split('#//').pop() ?? raw
  return PRIMITIVES[name] ?? name
}

/** `http://some.ns.uri#//ClassName` -> both halves. */
function splitHref(href: string): { nsURI: string; name: string } | undefined {
  const at = href.indexOf('#//')
  if (at < 0) return undefined
  return { nsURI: href.slice(0, at), name: href.slice(at + 3) }
}

/**
 * Takes a model file into the registry, keyed by its nsURI.
 *
 * Registering the same nsURI twice keeps the first: a bundle reload hands
 * over the same file, and there is nothing to gain from parsing it again.
 */
export function registerModelDocs(ecore: string): string | undefined {
  let document: Document
  try {
    document = new DOMParser().parseFromString(ecore, 'application/xml')
  } catch {
    return undefined
  }
  const root = document.documentElement
  if (!root || root.getElementsByTagName('parsererror').length) return undefined

  const nsURI = root.getAttribute('nsURI')
  if (!nsURI) return undefined
  if (models.has(nsURI)) return nsURI

  const classes = new Map<string, Element>()
  for (const classifier of Array.from(root.children)) {
    if (classifier.tagName !== 'eClassifiers') continue
    const name = classifier.getAttribute('name')
    if (name) classes.set(name, classifier)
  }
  models.set(nsURI, { nsURI, classes })
  return nsURI
}

/** Whether a model with this nsURI has been registered. */
export function hasModelDocs(nsURI: string): boolean {
  return models.has(nsURI)
}

function featuresOf(element: Element, owner: string): FeatureDoc[] {
  const features: FeatureDoc[] = []
  for (const feature of Array.from(element.children)) {
    if (feature.tagName !== 'eStructuralFeatures') continue
    const name = feature.getAttribute('name')
    if (!name) continue
    const upper = feature.getAttribute('upperBound')
    features.push({
      name,
      documentation: documentationOf(feature),
      type: typeOf(feature),
      /* Ecore's default lowerBound is 0; a field is required only when the
         model says so. */
      optional: (feature.getAttribute('lowerBound') ?? '0') === '0',
      many: upper === '-1' || Number(upper ?? '1') > 1,
      declaredBy: owner,
    })
  }
  return features
}

/**
 * Everything the models say about one class, supertypes included.
 *
 * A supertype in another model is followed only if that model is
 * registered; an unknown one is skipped rather than guessed at, so a form
 * shows the fields it can explain and no placeholders for the rest.
 */
export function describeClass(nsURI: string, className: string): ClassDoc | undefined {
  const model = models.get(nsURI)
  const element = model?.classes.get(className)
  if (!model || !element) return undefined

  const inherited: FeatureDoc[] = []
  const seen = new Set<string>([`${nsURI}#//${className}`])

  const walk = (uri: string, name: string) => {
    const at = models.get(uri)?.classes.get(name)
    if (!at) return
    for (const superType of Array.from(at.children)) {
      if (superType.tagName !== 'eSuperTypes') continue
      const href = superType.getAttribute('href')
      const split = href ? splitHref(href) : undefined
      if (!split || seen.has(href!)) continue
      seen.add(href!)
      /* Depth first, so the most general fields come first in the form. */
      walk(split.nsURI, split.name)
      const parent = models.get(split.nsURI)?.classes.get(split.name)
      if (parent) inherited.push(...featuresOf(parent, split.name))
    }
  }
  walk(nsURI, className)

  const own = featuresOf(element, className)
  const byName = new Map<string, FeatureDoc>()
  /* A class may redeclare an inherited field to document its own role -
     rest's `url` does exactly that. The nearer declaration wins. */
  for (const feature of [...inherited, ...own]) byName.set(feature.name, feature)

  return {
    name: className,
    documentation: documentationOf(element),
    features: [...byName.values()],
  }
}

/**
 * The configuration class of a model, without having to name it.
 *
 * A model file holds one configuration class and sometimes a helper beside
 * it (xmla carries its request parameters). The configuration is the one
 * whose name says so; failing that, and only then, the single class there.
 */
export function describeConfiguration(nsURI: string): ClassDoc | undefined {
  const model = models.get(nsURI)
  if (!model) return undefined
  const names = [...model.classes.keys()]
  const named = names.filter((name) => /config(uration)?$/i.test(name))
  const pick = named.length === 1 ? named[0] : named.length > 1 ? named[0] : names.length === 1 ? names[0] : undefined
  return pick ? describeClass(nsURI, pick) : undefined
}

/**
 * A model file in, its configuration class out.
 *
 * The one call a form needs: registering is idempotent, so handing over the
 * same model on every render costs nothing after the first.
 */
export function describeModel(ecore: string | undefined): ClassDoc | undefined {
  if (!ecore) return undefined
  const nsURI = registerModelDocs(ecore)
  return nsURI ? describeConfiguration(nsURI) : undefined
}

/** Drops every registered model - for tests, which must not leak into each other. */
export function resetModelDocs(): void {
  models.clear()
}
