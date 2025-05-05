/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
/* eslint-disable @typescript-eslint/no-unused-vars */
import xmlParser from '../node-xml'
import { request } from './http'
import Cache from '../../defs'
import {
  BaseElement,
  splitNSName,
  DefinitionsElement,
  SchemaElement,
  type ServiceElement
} from './wsdl_classes'

interface WSDLOptions {
  strict?: boolean
}

function xmlEscape (obj: any): string | any {
  if (typeof obj === 'string') {
    return obj
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }

  return obj
}

const trimLeft = /^[\s\xA0]+/
const trimRight = /[\s\xA0]+$/

function trim (text: string): string {
  return text.replace(trimLeft, '').replace(trimRight, '')
}

export class WSDL {
  public uri: string | URL
  public options: WSDLOptions
  public xml: string = ''
  public definitions: Record<string, unknown> = {}
  public services: Record<string, unknown> = {}
  public xmlnsInEnvelope: string = ''
  private readonly readyPromise: Promise<any>
  private readonly readyPromiseResolveFn: (any: unknown) => void

  constructor (
    definition: string,
    uri: string | URL,
    options: WSDLOptions = {}
  ) {
    let resolveTmp = (value: any): void => {}
    this.uri = uri
    this.options = options
    this.readyPromise = new Promise((resolve) => {
      resolveTmp = resolve
    })
    this.readyPromiseResolveFn = resolveTmp

    if (typeof definition !== 'string') {
      throw new Error('WSDL constructor takes an XML string')
    }

    this._fromXML(definition)
    this.processIncludes()
      .then(() => {
        (this.definitions as any).deleteFixedAttrs()

        const services = (this.services = this.definitions.services as Record<
        string,
        unknown
        >)
        if (services) {
          for (const name in services) {
            (services[name] as any).postProcess(this.definitions)
          }
        }

        const complexTypes: Record<string, unknown> = this.definitions
          .complexTypes as Record<string, unknown>
        if (complexTypes) {
          for (const name in complexTypes) {
            (complexTypes[name] as any).deleteFixedAttrs()
          }
        }

        const bindings = this.definitions.bindings as Record<string, unknown>
        for (const bindingName in bindings) {
          const binding: any = bindings[bindingName]
          if (binding.style !== 'document') continue
          const methods = binding.methods

          binding.topElements = {}

          for (const methodName in methods) {
            const inputName = methods[methodName].input.$name
            const outputName = methods[methodName].output.$name
            binding.topElements[inputName] = {
              methodName,
              outputName
            }
          }
        }

        this.xmlnsInEnvelope = this.xmlnsMap()

        this.readyPromiseResolveFn(null)
      })
      .catch(() => {})
  }

  private _fromXML (xml: string): void {
    this.definitions = this._parse(xml)
    this.xml = xml
  }

  private _parse (xml: string): Record<string, unknown> {
    let pHandler: any
    const p = new xmlParser.SaxParser(function (cb: () => any) {
      pHandler = cb
    })
    const stack: any[] = []
    let root: any = null

    pHandler.onStartElementNS(
      (
        nsName: string,
        attrs: string[][],
        prefix: string,
        uri: string,
        namespaces: string[][]
      ) => {
        nsName = prefix ? prefix + ':' + nsName : nsName
        const parsedAttrs = attrs.reduce<Record<string, string>>(function (
          res,
          value
        ) {
          res[value[0]] = value[1]
          return res
        },
        {})

        namespaces.forEach(function (e) {
          const nsName = e[0]
          const nsUrl = e[1]
          parsedAttrs['xmlns' + (nsName ? ':' : '') + nsName] = nsUrl
        })

        const top = stack[stack.length - 1]
        if (top) {
          try {
            top.startElement(stack, nsName, parsedAttrs)
          } catch (e) {
            if (this.options.strict) {
              throw e
            } else {
              stack.push(new BaseElement(nsName, parsedAttrs))
            }
          }
        } else {
          const name = splitNSName(nsName).name
          if (name === 'definitions') {
            root = new DefinitionsElement(nsName, parsedAttrs)
          } else if (name === 'schema') {
            root = new SchemaElement(nsName, parsedAttrs)
          } else {
            throw new Error('Unexpected root element of WSDL or include')
          }
          stack.push(root)
        }
      }
    )

    pHandler.onEndElementNS(function (name: string, prefix: string) {
      name = prefix ? prefix + ':' + name : name
      const top = stack[stack.length - 1]

      top.endElement(stack, name)
    })

    p.parseString(xml)
    return root
  }

  private async processIncludes (): Promise<void> {
    const schemas: any = this.definitions.schemas
    let includes: any = []

    for (const ns in schemas) {
      const schema = schemas[ns]
      includes = includes.concat(schema.includes || [])
    }

    await this.processNextInclude(includes)
  }

  private async processNextInclude (includes: any[]): Promise<void> {
    const include = includes.shift()

    if (!include) return
    const rurl = include.location
    const wsdl = await openWSDL(rurl)

    const schemas: any = this.definitions.schemas
    schemas[include.namespace || wsdl.definitions.$targetNamespace] =
      wsdl.definitions

    await this.processNextInclude(includes)
  }

  private xmlnsMap (): string {
    const xmlns = this.definitions.xmlns as Record<string, any>
    let str = ''
    for (const alias in xmlns) {
      if (alias === '') continue
      const ns: string = xmlns[alias]
      const url = new URL(ns);
      const allowedHosts = [
        'www.w3.org',
        'schemas.xmlsoap.org',
        'xml.apache.org',
        'schemas.microsoft.com',
      ]
      switch (ns) {
        case 'http://xml.apache.org/xml-soap': // apachesoap
        case 'http://schemas.xmlsoap.org/wsdl/': // wsdl
        case 'http://schemas.xmlsoap.org/wsdl/soap/': // wsdlsoap
        case 'http://schemas.xmlsoap.org/soap/encoding/': // soapenc
        case 'http://www.w3.org/2001/XMLSchema': // xsd
          continue
      }
      if (allowedHosts.includes(url.host)) continue
      str += ` xmlns:${alias}="${ns}"`
    }
    return str
  }

  public async ready (): Promise<void> {
    await this.readyPromise
  }

  public objectToXML (
    obj: any,
    name: string | null,
    namespace?: string,
    xmlns?: string
  ): string {
    const parts = []
    const xmlnsAttrib = ''
    const ns = namespace ? namespace + ':' : ''

    if (Array.isArray(obj)) {
      for (let i = 0, item; (item = obj[i]); i++) {
        if (i > 0) {
          parts.push(['</', ns, name, '>'].join(''))
          parts.push(['<', ns, name, xmlnsAttrib, '>'].join(''))
        }
        parts.push(this.objectToXML(item, name))
      }
    } else if (typeof obj === 'object') {
      for (const name in obj) {
        const child = obj[name]
        if (child === null) {
          parts.push(['<', ns, name, xmlnsAttrib, '/>'].join(''))
        } else {
          parts.push(['<', ns, name, xmlnsAttrib, '>'].join(''))
          parts.push(this.objectToXML(child, name, namespace))
          parts.push(['</', ns, name, '>'].join(''))
        }
      }
    } else if (obj) {
      parts.push(xmlEscape(obj))
    }
    return parts.join('')
  }

  public complexObjectToXML (obj: any, name: string | null): string {
    const parts = []
    let attrsString = ''
    if (typeof obj !== 'object') {
      throw new Error('Wrong type of object')
    } else {
      const attrs = obj.__attrs
      delete obj.__attrs

      for (const a in attrs) {
        if (typeof attrs[a] !== 'string') {
          throw new Error(
            `Wrong type of attribute ${a} in element with name ${
              name ?? 'not specified'
            }. Attributes should be strings.`
          )
        } else {
          attrsString = attrsString.concat(` ${a}="${attrs[a] as string}"`)
        }
      }

      if (Object.keys(obj).length === 0) {
        if (name) {
          return `<${name}${attrsString}/>`
        }
        return ''
      }

      for (const childName in obj) {
        const child = obj[childName]

        if (typeof child === 'object') {
          parts.push(this.complexObjectToXML(child, childName))
        }
      }
    }
    return parts.join('')
  }

  public describeServices (): Record<string, unknown> {
    const services: Record<string, unknown> = {}
    for (const name in this.services) {
      const service: ServiceElement = this.services[name] as ServiceElement
      services[name] = service.description(this.definitions)
    }
    return services
  }

  public objectToDocumentXML (
    name: string,
    params: any,
    ns: string,
    xmlns: string
  ): string {
    const args: Record<string, any> = {}
    args[name] = params
    return this.objectToXML(args, null, ns, xmlns)
  }

  public xmlToObject (xml: string): Record<string, any> {
    // p = new expat.Parser('UTF-8'),
    let pHandler: any
    const p = new xmlParser.SaxParser((cb: any) => {
      pHandler = cb
    })
    let objectName: string | null = null
    const root: Record<string, any> = {}
    const schema = {
      Envelope: {
        Header: {
          Security: {
            UsernameToken: {
              Username: 'string',
              Password: 'string'
            }
          }
        },
        Body: {
          Fault: {
            faultcode: 'string',
            faultstring: 'string',
            detail: 'string'
          }
        }
      }
    }
    const stack: any[] = [{ name: null, object: root, schema }]

    const refs: Record<string, any> = {}
    let id

    // p.on('startElement', function(nsName, attrs) {
    pHandler.onStartElementNS(
      (
        nsName: string,
        attrs: any,
        prefix: string,
        uri: string,
        namespaces: string[][]
      ) => {
        nsName = prefix ? prefix + ':' + nsName : nsName
        attrs = attrs.reduce((res: Record<string, any>, value: any[]) => {
          res[value[0]] = value[1]
          return res
        }, {})
        namespaces.forEach((e: string[]) => {
          const nsName: string = e[0]
          const nsUrl = e[1]
          attrs[`xmlns${nsName ? ':' : ''}${nsName}`] = nsUrl
        })

        let name = splitNSName(nsName).name
        const top = stack[stack.length - 1]
        let topSchema: Record<string, any> = top.schema
        const obj = {}
        const originalName = name

        if (!objectName && top.name === 'Body' && name !== 'Fault') {
          const messages = this.definitions.messages as Record<string, any>
          let message = messages[name]
          // Support RPC/literal messages where response body contains one element named
          // after the operation + 'Response'. See http://www.w3.org/TR/wsdl#_names
          if (!message) {
            // Determine if this is request or response
            let isInput = false
            if (/Response$/.test(name)) {
              name = name.replace(/Response$/, '')
            } else if (/Request$/.test(name)) {
              isInput = true
              name = name.replace(/Request$/, '')
            } else if (/Solicit$/.test(name)) {
              isInput = true
              name = name.replace(/Solicit$/, '')
            }
            // Look up the appropriate message as given in the portType's operations
            const portTypes = this.definitions.portTypes as Record<string, any>
            const portTypeNames = Object.keys(portTypes)
            // Currently this supports only one portType definition.
            const portType = portTypes[portTypeNames[0]]
            if (isInput) name = portType.methods[name].input.$name
            else name = portType.methods[name].output.$name
            message = messages[name]
            // 'cache' this alias to speed future lookups
            messages[originalName] = messages[name]
          }

          topSchema = message.description(this.definitions)
          objectName = originalName
        }

        if (attrs.href) {
          id = attrs.href.substr(1)
          if (!refs[id]) refs[id] = { hrefs: [], obj: null }
          refs[id].hrefs.push({ par: top.object, key: name })
        }
        if ((id = attrs.id)) {
          if (!refs[id]) refs[id] = { hrefs: [], obj: null }
        }

        if (topSchema && topSchema[name + '[]']) name = name + '[]'
        stack.push({
          name: originalName,
          object: obj,
          schema: topSchema?.[name],
          id: attrs.id,
          __attrs: attrs
        })
      }
    )

    // p.on('endElement', function(nsName) {
    pHandler.onEndElementNS(function (nsName: string, prefix: string) {
      nsName = prefix ? prefix + ':' + nsName : nsName

      const cur = stack.pop()
      const obj = cur.object
      if (typeof obj === 'object') {
        obj.__attrs = cur.__attrs
      }
      const top = stack[stack.length - 1]
      const topObject = top.object
      const topSchema = top.schema
      const name = splitNSName(nsName).name

      if (
        topSchema &&
        topSchema[name + '[]'] &&
        typeof topSchema[name + '[]'] !== 'string'
      ) {
        if (!topObject[name]) topObject[name] = []
        topObject[name].push(obj)
      } else if (name in topObject) {
        if (!Array.isArray(topObject[name])) {
          topObject[name] = [topObject[name]]
        }
        topObject[name].push(obj)
      } else {
        topObject[name] = obj
      }

      if (cur.id) {
        refs[cur.id].obj = obj
      }
    })

    // p.on('text', function(text) {
    pHandler.onCharacters(function (text: string) {
      if (!trim(text).length) return;

      const top = stack[stack.length - 1]
      const name = splitNSName(top.schema).name
      let value
      if (name === 'int') {
        value = parseInt(text, 10)
      } else if (name === 'dateTime') {
        value = new Date(text)
      } else {
        // handle string or other types
        if (typeof top.object !== 'string') {
          value = text
        } else {
          value = (top.object as string) + text
        }
      }
      top.object = value
    })

    // if (!p.parse(xml, false)) {
    p.parseString(xml)

    for (const n in refs) {
      const ref = refs[n]
      const obj = ref.obj
      ref.hrefs.forEach(function (href: {
        par: Record<string, any>
        key: string | number
      }) {
        href.par[href.key] = obj
      })
    }

    return root.Envelope
  }
}

export async function openWSDL (
  uri: string,
  options?: any
): Promise<WSDL> {
  const wsdlDef = Cache[uri];
  const wsdl = new WSDL(wsdlDef, uri, options)
  await wsdl.ready()

  return wsdl
}
