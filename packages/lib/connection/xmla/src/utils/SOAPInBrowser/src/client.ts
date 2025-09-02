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
import { request } from './http'
import type { WSDL } from './wsdl'

type Port = Record<string, unknown>
type Sevice = Record<string, unknown>

function findKey(obj: Record<string, any>, val: any): string | undefined {
  for (const n in obj) if (obj[n] === val) return n
}

export class Client {
  public readonly wsdl: WSDL;
  [key: string]: any
  endpoint: string
  security: any

  constructor(wsdl: WSDL, endpoint: string) {
    this.wsdl = wsdl
    this.endpoint = endpoint
    this._initializeServices(endpoint)
  }

  public setEndpoint(endpoint: string): void {
    this.endpoint = endpoint
    this._initializeServices(this.endpoint, true)
  }

  public describe(): any {
    return this.wsdl.describeServices()
  }

  public setSecurity(security: any): void {
    this.security = security
  }

  public setSOAPAction(SOAPAction: any): void {
    this.SOAPAction = SOAPAction
  }

  private _initializeServices(
    endpoint: string,
    forceReinit: boolean = false,
  ): void {
    const definitions = this.wsdl.definitions
    const services = definitions.services as Record<string, any>

    for (const name in services) {
      this[name] = this._defineService(services[name], endpoint, forceReinit)
    }
  }

  private _defineService(
    service: any,
    endpoint: string,
    forceReinit: boolean,
  ): Sevice {
    const ports = service.ports
    const def: any = {}

    for (const name in ports) {
      def[name] = this._definePort(
        ports[name],
        endpoint || ports[name].location,
        forceReinit,
      )
    }

    return def
  }

  private _definePort(port: any, endpoint: string, forceReinit: boolean): Port {
    const {
      binding: { methods },
    } = port
    const def: any = {}

    for (const name in methods) {
      const formatedName = `${name}Async`

      def[name] = this._defineMethod(methods[name], endpoint)
      def[formatedName] = this._defineMethodAsync(methods[name], endpoint)

      if (this[name] && !forceReinit) {
        throw new Error(`Method with name ${name} already exists`)
      }
      if (this[formatedName] && !forceReinit) {
        throw new Error(`Method with name ${formatedName} already exists`)
      }

      this[formatedName] = def[formatedName]
      this[name] = def[name]
    }

    return def
  }

  private _defineMethod(method: any, location: string) {
    return async (
      args: any,
      callback: (result: Record<string, any>) => void,
    ) => {
      await this._invoke(method, args, location).then(result => {
        callback(result)
      })
    }
  }

  private _defineMethodAsync(method: any, location: string) {
    return async (args: any): Promise<Record<string, any>> => {
      const result = await this._invoke(method, args, location)
      return result
    }
  }

  private async _invoke(
    method: any,
    args: any,
    location: string,
  ): Promise<Record<string, any>> {
    const {
      name,
      input,
      // output,
      // style
    } = method
    const defs = this.wsdl.definitions
    const ns = defs.$targetNamespace as string

    let message = ''
    let xml = null
    const headers = {
      SOAPAction: this.SOAPAction
        ? this.SOAPAction(ns, name)
        : `${ns.lastIndexOf('/') !== ns.length - 1 ? `${ns}/` : ns}${
            name as string
          }`,
      'Content-Type': 'text/xml; charset=utf-8'
    }
    const exHeaders = args.Headers
    const options = {}
    const alias = findKey(defs.xmlns as Record<string, any>, ns)

    delete args.Headers
    console.log('exHeaders', exHeaders)

    console.log('Invoking with security:', this.security)
    if (this.security?.addHeaders) {
      this.security.addHeaders(headers)
    }
    if (this.security?.addOptions) {
      this.security.addOptions(options)
    }

    const securityHeader: string = this.security
      ? this.wsdl.objectToXML(this.security, null, alias, undefined)
      : ''
    const customHeader: string = exHeaders
      ? this.wsdl.complexObjectToXML(exHeaders, null)
      : ''

    // Supports only objects for now
    message = this.wsdl.objectToDocumentXML(
      input.$name,
      args,
      input.targetNSAlias,
      input.targetNamespace,
    )

    // TODO: REMOVE WHEN KPI SERVER SUPPORTS PROPER SOAP
    console.log('Original SOAP message:', message)
    if (
      message.includes('Execute') &&
      message.includes('Command') &&
      message.includes('Statement') &&
      message.includes('Minimal_Cubes_With_KPI_all_Properties')
    ) {
      const statementMatch = message.match(
        /<[^:]*:?Statement>([\s\S]*?)<\/[^:]*:?Statement>/,
      )
      const catalogMatch = message.match(
        /<[^:]*:?Catalog>([\s\S]*?)<\/[^:]*:?Catalog>/,
      )
      const formatMatch = message.match(
        /<[^:]*:?Format>([\s\S]*?)<\/[^:]*:?Format>/,
      )

      const statement = statementMatch ? statementMatch[1].trim() : ''
      const catalog = catalogMatch ? catalogMatch[1].trim() : ''
      const format = formatMatch ? formatMatch[1].trim() : 'Tabular'

      message = `
  <Execute xmlns="urn:schemas-microsoft-com:xml-analysis">
    <Command>
      <Statement>
        ${statement}
      </Statement>
    </Command>
    <Properties>
      <PropertyList>
        <Format>${format}</Format>
        <Catalog>${catalog}</Catalog>
      </PropertyList>
    </Properties>
  </Execute>`.trim()
    }

    xml =
      // Encoding is not supported
      // `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ${encoding} ${this.wsdl.xmlnsInEnvelope}'>'` +
      `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ${this.wsdl.xmlnsInEnvelope}>` +
      '<soap:Header>' +
      `${securityHeader}${customHeader}` +
      '</soap:Header>' +
      '<soap:Body>' +
      message +
      '</soap:Body>' +
      '</soap:Envelope>'

    const responce = await request(location, xml, headers)
    const textContent = await responce.text()

    const parsedResult = this.wsdl.xmlToObject(textContent)
    return parsedResult
  }
}
