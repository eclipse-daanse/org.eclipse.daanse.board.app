/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0
  Contributors: Smart City Jena
*/
import { type RestConnection } from 'org.eclipse.daanse.board.app.lib.connection.rest'
import { type Filter, type Format, type MapSection } from './FilterAPI'

export default class QueryBuilder {

  private dss: Record<string, RestConnection> = {}
  private filters: Filter[] = []
  private limit = 10

  setEndpoints(dss: Record<string, RestConnection>) {
    this.dss = dss
    return this
  }

  setFilter(filters: Filter[]) {
    this.filters = filters
    return this
  }

  setLimit(limit: number) {
    if (limit < 1) return this
    if (limit > 1000) return this
    this.limit = limit
    return this
  }

  async query(seachString: string) {

    const filterInQuery: string[] = []
    const sentences: string[] = []
    const ds_sentences: string[] = []
    const prefixes: string[] = []

    this.filters.forEach(filter => {
      if ((filter as MapSection)['mapSection']) {
        const map = filter as MapSection
        prefixes.push('PREFIX spatial: <http://geovocab.org/spatial#>')
        prefixes.push('PREFIX geo: <http://www.opengis.net/ont/geosparql#>')
        sentences.push('?dataService dct:spatial ?location .')
        sentences.push('?location geo:lat ?lat ;geo:long ?long .')
        filterInQuery.push(`FILTER (?lat >= ${map.mapSection._northEast.lat} && ?lat <= ${map.mapSection._southWest.lat})`)
        filterInQuery.push(`FILTER (?long >= ${map.mapSection._northEast.lng} && ?long <= ${map.mapSection._southWest.lng})`)
      }
      if ((filter as Format)['formats']) {
        const format = filter as Format

        //sentences.push("?dist dct:format ?format .");

        let filterSubstring = 'FILTER ('
          + format.formats.map(format => '?format =' + format).join('||')
          + ')'
        filterInQuery.push(filterSubstring)
      }
    })
    const query: string = `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX dc: <http://purl.org/dc/elements/1.1/>
            PREFIX dcat: <http://www.w3.org/ns/dcat#>
            PREFIX odp:  <http://data.europa.eu/euodp/ontologies/ec-odp#>
            PREFIX dct: <http://purl.org/dc/terms/>
            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            ${prefixes.join('\n')}

            SELECT DISTINCT * WHERE {
              ?d a dcat:Dataset .
              ?dist a dcat:Distribution .
              ?d dct:title ?title .
              ?d dct:description ?description.
              ?d dcat:distribution ?dist .
              ?dist dct:title ?disttTitle .
              ?dist dcat:accessURL ?accessUrl.
              ?dist dct:format ?format .
              #?dist dcat:accessService ?service.
              #?service dcat:endpointURL ?ServiceEndpountURI .
              #?format skos:prefLabel ?formatId .
              optional{
                    ?d dct:publisher ?creator
              }
              optional{
                    ?creator foaf:name ?creator_name;
              }
              optional{
                    ?d dct:modified ?date
              }
              ${sentences.join('\n')}

            FILTER (CONTAINS(LCASE(?title), "${seachString.toLowerCase()}"))
            ${filterInQuery.join('\n')}
            }
            LIMIT ${this.limit}
        `

    let result: Record<string, any> = {}
    for (const ds of Object.entries(this.dss)) {

      let encodedValue = 'query=' + encodeURIComponent(query)
      try {
        const newData = await ds[1].fetch({ url: '' }, {
          method: 'POST', body: encodedValue, headers:
            {
              'User-Agent': 'org.eclipse.daanse.datafinder.sparql/1.0',
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        result[ds[0]] = await newData.json()
      } catch (e) {
        console.log(e)
      }
    }
    return result
  }
}
