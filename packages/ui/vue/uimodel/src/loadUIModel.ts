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
 * Loading a form that was written as a model.
 *
 * A UIModel arrives as XMI beside the Ecore it describes. Reading it needs
 * three things in place first: the Ecore package itself, the uimodel
 * metamodel with its factory, and the domain package the form points at -
 * its `feature="…#//Class/field"` references resolve against exactly that.
 *
 * The result is cached per source, because loading builds a fresh object
 * graph each time and the composer compares the metamodel objects in it by
 * identity.
 */
import {
  BasicResourceSet,
  EPackageRegistry,
  registerEcorePackage,
  URI,
  XMIResourceFactory,
  type EClass,
  type EPackage,
  type XMIResource,
} from '@emfts/core'
import {
  UimodelFactory,
  UimodelPackage,
  resolveCrossResourceProxies,
  type UIModel,
} from '@emfts/uimodel-composer'

const cache = new Map<string, UIModel>()

/*
 * Every loaded form, by the class it is written for.
 *
 * A form does not only get used where it was named: the entries of a list
 * are objects of their own class, and if someone wrote a form for that
 * class it should be used there too, rather than one derived from the
 * class as a stand-in. The models say which class they target, so nobody
 * has to wire that up by hand.
 */
const byTargetClass = new Map<EClass, UIModel>()

/** The written form for a class, if one has been loaded. */
export function formForClass(eClass: EClass): UIModel | undefined {
  return byTargetClass.get(eClass)
}

function indexByTarget(model: UIModel) {
  for (const target of model.targetClasses ?? []) {
    if (target) byTargetClass.set(target as EClass, model)
  }
}

let metamodelReady = false

/** The packages a UI model is read against; done once. */
function prepareMetamodel() {
  if (metamodelReady) return
  registerEcorePackage()

  const uimodel = UimodelPackage.eINSTANCE
  uimodel.setEFactoryInstance(UimodelFactory.eINSTANCE)
  EPackageRegistry.INSTANCE.set(uimodel.getNsURI()!, uimodel)

  metamodelReady = true
}

/**
 * Reads a UI model from XMI.
 *
 * @param xml the model as written
 * @param domainPackage the package whose classes the form points at - it
 *   has to be in the registry before the references in the form can be
 *   resolved, and a package that was only built is not yet registered
 * @param uri a name for the resource; also the cache key
 */
export function loadUIModel(xml: string, domainPackage: EPackage, uri = '/ui.xmi'): UIModel | undefined {
  const cached = cache.get(uri)
  if (cached) return cached

  try {
    prepareMetamodel()

    const nsURI = domainPackage.getNsURI()
    if (nsURI && !EPackageRegistry.INSTANCE.has(nsURI)) {
      EPackageRegistry.INSTANCE.set(nsURI, domainPackage)
    }

    const resources = new BasicResourceSet()
    resources.getResourceFactoryRegistry().getExtensionToFactoryMap().set('xmi', new XMIResourceFactory())

    const resource = resources.createResource(URI.createURI(uri)) as XMIResource
    resource.loadFromString(xml)
    if (resource.getContents().size() === 0) return undefined

    // Turns the href references in the file into the features they name
    resolveCrossResourceProxies(resource)

    const model = resource.getContents().get(0) as UIModel
    cache.set(uri, model)
    indexByTarget(model)
    return model
  } catch (error) {
    // A form that cannot be read is not a reason to take the settings down;
    // the caller falls back to deriving one from the class
    console.warn('[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:', error)
    return undefined
  }
}
