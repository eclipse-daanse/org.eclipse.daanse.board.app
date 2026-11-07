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
 * A small SensorThings server for tests, with the habits of the one the
 * Bodenfeuchte board talks to (udp-broker, sensiNact):
 *
 *   - `/Datastreams` lists only some datastreams (`hiddenFromCollection`);
 *     direct reads and navigation from a thing find all of them.
 *   - `/Observations` holds only the latest observation per datastream,
 *     and not of every datastream (`missingFromObservations`).
 *   - self and next links are written with http://.
 *
 * It answers through a connection, as the store sees one: `fetch({url})`
 * with a path relative to the connection URL. Every request is recorded.
 */

export interface StaDatastream {
  '@iot.id': string
  name: string
  unitOfMeasurement?: { symbol?: string; name?: string }
  observedArea?: unknown
  ObservedProperty?: { '@iot.id': string; name: string }
}

export interface StaThing {
  '@iot.id': string
  name: string
  description?: string
  Locations?: Array<{ '@iot.id': string; name?: string; location: unknown }>
  Datastreams?: StaDatastream[]
}

export interface StaFixture {
  things: StaThing[]
  /** Observations per datastream id, newest first. */
  observations?: Record<string, Array<{ phenomenonTime: string; result: unknown }>>
  /** Datastream ids that the `/Datastreams` collection does not list. */
  hiddenFromCollection?: string[]
  /** Page size of collections without $select or $expand (server default). */
  pageSize?: number
  /** `/Observations` answers with every observation, not only the latest. */
  observationsCollectionIsHistory?: boolean
  /** Page size of `Datastreams(id)/Observations`, with an http:// next link. */
  observationPageSize?: number
  /** Answers 400 to `$expand=Datastreams/ObservedProperty`. */
  refuseDeepExpand?: boolean
  /** Datastream ids whose observations `/Observations` leaves out; direct reads find them. */
  missingFromObservations?: string[]
  /** Milliseconds before an answer, so parallel requests overlap. */
  delay?: number
}

class BadRequest extends Error {}

export const STA_BASE = 'https://sta.example/udp/rest/'

const quote = (s: string) => s.replace(/^'(.*)'$/, '$1')

/** One term of a $filter: `startswith(name,'x')`, `name eq 'x'`, `Datastream/id eq 'x'` ... */
function term(text: string): (item: Record<string, any>) => boolean {
  let m: RegExpMatchArray | null
  if ((m = text.match(/^startswith\((\w+),'(.*)'\)$/))) return (i) => String(i[m![1]] ?? '').startsWith(m![2])
  if ((m = text.match(/^endswith\((\w+),'(.*)'\)$/))) return (i) => String(i[m![1]] ?? '').endsWith(m![2])
  if ((m = text.match(/^substringof\('(.*)',(\w+)\)$/))) return (i) => String(i[m![2]] ?? '').includes(m![1])
  if ((m = text.match(/^(\w+) eq '(.*)'$/))) {
    const key = m[1] === 'id' ? '@iot.id' : m[1]
    return (i) => String(i[key]) === m![2]
  }
  throw new Error(`staServer: filter term not understood: ${text}`)
}

function filterOf(expr: string | null): (item: Record<string, any>) => boolean {
  if (!expr) return () => true
  const terms = expr.split(' or ').map((t) => term(t.trim().replace(/^\((.*)\)$/, '$1')))
  return (item) => terms.some((t) => t(item))
}

function timeWindow(expr: string | null) {
  const after = expr?.match(/phenomenonTime gt (\S+)/)?.[1]
  const from = expr?.match(/phenomenonTime ge (\S+)/)?.[1]
  const before = expr?.match(/phenomenonTime lt (\S+)/)?.[1]
  return (o: { phenomenonTime: string }) =>
    (!after || o.phenomenonTime > after) && (!from || o.phenomenonTime >= from) && (!before || o.phenomenonTime < before)
}

export function staServer(fixture: StaFixture, base: string = STA_BASE) {
  const requests: string[] = []
  let inFlight = 0
  let maxInFlight = 0

  const datastreams = new Map<string, { ds: StaDatastream; thing: StaThing }>()
  for (const thing of fixture.things) {
    for (const ds of thing.Datastreams ?? []) datastreams.set(ds['@iot.id'], { ds, thing })
  }
  const hidden = new Set(fixture.hiddenFromCollection ?? [])
  const observationsOf = (id: string) => fixture.observations?.[id] ?? []

  const project = (item: Record<string, any>, select: string | null, expand: string[]) => {
    const out: Record<string, any> = {}
    const keys = select ? select.split(',').map((k) => k.trim()) : Object.keys(item)
    for (const key of keys) {
      if (key === 'Datastreams' || key === 'Locations' || key === 'ObservedProperty') continue
      if (key in item) out[key] = item[key]
    }
    for (const nav of expand) {
      if (nav === 'Datastreams') out.Datastreams = (item.Datastreams ?? []).map((d: StaDatastream) => withoutNav(d))
      else if (nav === 'Datastreams/ObservedProperty') {
        if (fixture.refuseDeepExpand) throw new BadRequest()
        out.Datastreams = item.Datastreams ?? []
      }
      else if (nav === 'Locations') out.Locations = item.Locations ?? []
      else if (nav === 'ObservedProperty') out.ObservedProperty = item.ObservedProperty
    }
    return out
  }
  const withoutNav = (d: StaDatastream) => {
    const { ObservedProperty: _op, ...rest } = d
    return rest
  }

  function answer(path: string, q: URLSearchParams): unknown {
    const expand = (q.get('$expand') ?? '').split(',').filter(Boolean)
    const select = q.get('$select')
    let m: RegExpMatchArray | null

    if ((m = path.match(/^Datastreams\((.+?)\)\/Observations$/))) {
      let rows = observationsOf(quote(decodeURIComponent(m[1]))).filter(timeWindow(q.get('$filter')))
      if (q.get('$orderby') === 'phenomenonTime asc') rows = [...rows].reverse()
      // Counted before $top, as the server does; it refuses $top=0
      const count = rows.length
      const top = q.get('$top')
      if (top === '0') throw new BadRequest()
      if (top) rows = rows.slice(0, Number(top))
      const size = top ? Infinity : fixture.observationPageSize ?? Infinity
      const skip = Number(q.get('$skip') ?? 0)
      const result: Record<string, unknown> = {
        value: rows.slice(skip, skip + size).map((r) => (select ? project(r, select, []) : r)),
      }
      if (q.get('$count') === 'true') result['@iot.count'] = count
      if (skip + size < rows.length) {
        const next = new URLSearchParams(q)
        next.set('$skip', String(skip + size))
        result['@iot.nextLink'] = `${base.replace('https://', 'http://')}v1.1/${path}?${next}`
      }
      return result
    }
    if ((m = path.match(/^Datastreams\((.+?)\)$/))) {
      const hit = datastreams.get(quote(decodeURIComponent(m[1])))
      if (!hit) return 404
      return project(hit.ds as any, select, expand)
    }
    if (path === 'Datastreams') {
      const rows = [...datastreams.values()]
        .filter(({ ds }) => !hidden.has(ds['@iot.id']))
        .map(({ ds }) => ds)
        .filter(filterOf(q.get('$filter')) as any)
      return { value: rows.map((d) => project(d as any, select, expand)) }
    }
    if ((m = path.match(/^Things\((.+?)\)\/Datastreams$/))) {
      const thing = fixture.things.find((t) => t['@iot.id'] === quote(decodeURIComponent(m![1])))
      if (!thing) return 404
      return { value: (thing.Datastreams ?? []).map((d) => project(d as any, select, expand)) }
    }
    if ((m = path.match(/^Things\((.+?)\)$/))) {
      const thing = fixture.things.find((t) => t['@iot.id'] === quote(decodeURIComponent(m![1])))
      if (!thing) return 404
      return project(thing as any, select, expand)
    }
    if (path === 'Things') {
      const rows = fixture.things.filter(filterOf(q.get('$filter')) as any)
      // Like the server: $select and $expand switch paging off.
      const pageSize = select || expand.length ? Infinity : fixture.pageSize ?? Infinity
      const skip = Number(q.get('$skip') ?? 0)
      const page = rows.slice(skip, skip + pageSize)
      const result: Record<string, unknown> = { value: page.map((t) => project(t as any, select, expand)) }
      if (skip + pageSize < rows.length) {
        const next = new URLSearchParams(q)
        next.set('$skip', String(skip + pageSize))
        result['@iot.nextLink'] = `${base.replace('https://', 'http://')}v1.1/Things?${next}`
      }
      return result
    }
    if (path === 'Observations') {
      const ids = [...(q.get('$filter') ?? '').matchAll(/Datastream\/id eq '([^']*)'/g)].map((x) => x[1])
      const missing = new Set(fixture.missingFromObservations ?? [])
      const rows = ids.filter((id) => !missing.has(id)).flatMap((id) => {
        const all = observationsOf(id).map((o) => ({ ...o, 'Datastream@iot.navigationLink': `http://sta.example/udp/rest/v1.1/Observations(x)/Datastream`, Datastream: undefined, '@iot.id': `${id}#${o.phenomenonTime}` , datastreamId: id }))
        return fixture.observationsCollectionIsHistory ? all : all.slice(0, 1)
      })
      return {
        value: rows.map((r) => {
          const { datastreamId, ...rest } = r
          /* The server answers with the datastream expanded when asked to. */
          return expand.includes('Datastream') ? { ...rest, Datastream: { '@iot.id': datastreamId } } : rest
        }),
      }
    }
    return 404
  }

  const connection = {
    url: base,
    async fetch(config: { url: string }, _init?: RequestInit): Promise<Response> {
      const full = new URL(config.url.replace(/^\/+/, ''), base)
      requests.push(decodeURIComponent(full.pathname + full.search).replace('/udp/rest/', ''))
      inFlight++
      maxInFlight = Math.max(maxInFlight, inFlight)
      try {
        await new Promise((r) => setTimeout(r, fixture.delay ?? 1))
        const path = full.pathname.replace(/^\/udp\/rest\/v1\.1\//, '')
        let body: unknown
        try {
          body = answer(path, full.searchParams)
        } catch (e) {
          if (e instanceof BadRequest) return new Response('{"message":"bad request"}', { status: 400 })
          throw e
        }
        if (body === 404) return new Response('{"message":"not found"}', { status: 404 })
        return new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } })
      } finally {
        inFlight--
      }
    },
  }

  return {
    connection,
    /** The requests, decoded, relative to the connection: `v1.1/Things?...`. */
    requests,
    get maxInFlight() {
      return maxInFlight
    },
    reset() {
      requests.length = 0
      maxInFlight = 0
    },
  }
}
