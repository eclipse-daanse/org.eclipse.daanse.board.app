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

import { beforeEach, describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describeClass, describeConfiguration, registerModelDocs, resetModelDocs } from './modelDocs'

/* The real model files: what this reads has to survive them changing. */
const ROOT = resolve(__dirname, '../../../../..')
const model = (path: string) => readFileSync(resolve(ROOT, path), 'utf8')

const REST_STORE = 'packages/lib/datasource/rest/model/RestDataSourceModel.ecore'
const DATASOURCE_BASE = 'packages/lib/datasource/base/model/baseDataSourceModel.ecore'
const REST_CONNECTION = 'packages/lib/connection/rest/model/model.ecore'
const CONNECTION_BASE = 'packages/lib/connection/base/model/model.ecore'

describe('modelDocs', () => {
  beforeEach(() => resetModelDocs())

  it('reads a class and its fields out of the model', () => {
    const nsURI = registerModelDocs(model(REST_STORE))
    expect(nsURI).toBe('http://org.eclipse.daanse.board.app.lib.datasource.rest')

    const doc = describeConfiguration(nsURI!)
    expect(doc?.name).toBe('IRestStoreConfiguration')
    expect(doc?.documentation).toBe(
      'Represents the configuration for a REST data store, extending the base connection configuration.',
    )

    const resourceUrl = doc?.features.find((f) => f.name === 'resourceUrl')
    expect(resourceUrl?.documentation).toBe(
      "The specific path or resource URL to fetch data from (e.g., '/api/data').",
    )
    expect(resourceUrl?.type).toBe('string')
  })

  it('folds a sentence the model wrapped across lines back into one', () => {
    const nsURI = registerModelDocs(model(REST_CONNECTION))!
    const url = describeConfiguration(nsURI)?.features.find((f) => f.name === 'url')
    expect(url?.documentation).toBe(
      "The base URL endpoint for the REST API. This attribute overrides the 'url' from BaseConnectionConfig to specify its role in REST connections.",
    )
  })

  it('carries inherited fields, most general first', () => {
    registerModelDocs(model(DATASOURCE_BASE))
    const nsURI = registerModelDocs(model(REST_STORE))!

    const names = describeConfiguration(nsURI)!.features.map((f) => f.name)
    expect(names).toContain('pollingInterval')
    /* from IBaseConnectionConfiguration */
    expect(names).toContain('type')
    expect(names.indexOf('type')).toBeLessThan(names.indexOf('resourceUrl'))
  })

  it('lets a class redeclare an inherited field with its own words', () => {
    registerModelDocs(model(CONNECTION_BASE))
    const nsURI = registerModelDocs(model(REST_CONNECTION))!

    const url = describeConfiguration(nsURI)!.features.find((f) => f.name === 'url')
    expect(url?.declaredBy).toBe('IRestConnectionConfig')
    expect(url?.documentation).toContain('REST API')
  })

  it('skips a supertype whose model is not registered instead of failing', () => {
    const nsURI = registerModelDocs(model(REST_STORE))!
    const doc = describeConfiguration(nsURI)
    expect(doc).toBeDefined()
    expect(doc!.features.map((f) => f.name)).not.toContain('type')
  })

  it('reads optional and required from lowerBound', () => {
    const nsURI = registerModelDocs(model(REST_STORE))!
    const doc = describeConfiguration(nsURI)!
    expect(doc.features.find((f) => f.name === 'pollingInterval')?.optional).toBe(true)
    expect(doc.features.find((f) => f.name === 'pollingInterval')?.type).toBe('number')
  })

  it('picks the configuration class when a model holds more than one', () => {
    const xmla = model('packages/lib/datasource/xmla/model/XmlaDataSourceModel.ecore')
    const nsURI = registerModelDocs(xmla)!
    expect(describeConfiguration(nsURI)?.name).toBe('IXmlaStoreConfiguration')
    expect(describeClass(nsURI, 'XMLARequestParams')).toBeDefined()
  })

  it('says nothing about a model it was never given', () => {
    expect(describeConfiguration('http://nobody.registered.this')).toBeUndefined()
  })
})
