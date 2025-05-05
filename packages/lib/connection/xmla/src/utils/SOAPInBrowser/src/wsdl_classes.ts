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
const Primitives: Record<string, number> = {
  string: 1,
  boolean: 1,
  decimal: 1,
  float: 1,
  double: 1,
  anyType: 1,
  byte: 1,
  int: 1,
  long: 1,
  short: 1,
  unsignedByte: 1,
  unsignedInt: 1,
  unsignedLong: 1,
  unsignedShort: 1,
  duration: 0,
  dateTime: 0,
  time: 0,
  date: 0,
  gYearMonth: 0,
  gYear: 0,
  gMonthDay: 0,
  gDay: 0,
  gMonth: 0,
  hexBinary: 0,
  base64Binary: 0,
  anyURI: 0,
  QName: 0,
  NOTATION: 0
}

export function splitNSName (nsName: string): {
  namespace: string | null
  name: string
} {
  const index = nsName != null ? nsName.indexOf(':') : -1

  return index < 0
    ? { namespace: null, name: nsName }
    : {
        namespace: nsName.substring(0, index),
        name: nsName.substring(index + 1)
      }
}

export class BaseElement {
  protected nsName?: string
  protected namespace?: string
  protected name?: string
  protected children?: any[]
  protected xmlns: any;
  [key: string]: any;
  public allowedChildren: Record<string, unknown> = {}
  public allowedChildrenList = '_fault'

  constructor (nsName: string, attrs: any, childrenList?: string) {
    const parts = splitNSName(nsName)

    this.nsName = nsName
    this.namespace = parts.namespace ?? ''
    this.name = parts.name
    this.children = []
    this.xmlns = {}

    for (const key in attrs) {
      const match = /^xmlns:?(.*)$/.exec(key)
      if (match) {
        this.xmlns[match[1]] = attrs[key]
      } else {
        this['$' + key] = attrs[key]
      }
    }

    this.allowedChildrenList = childrenList ?? this.allowedChildrenList
    this._parseAllowedTypes()
  }

  protected _parseAllowedTypes (): void {
    const typesAllowed = this.allowedChildrenList.split(' ')
    typesAllowed.forEach((type) => {
      this.allowedChildren[type.replace(/^_/, '')] = (ElementTypeMap[type] || [
        BaseElement
      ])[0]
    })
  }

  public deleteFixedAttrs (): void {
    this.children && this.children.length === 0 && delete this.children
    this.xmlns && Object.keys(this.xmlns).length === 0 && delete this.xmlns
    delete this.nsName
    delete this.namespace
    delete this.name
  }

  public startElement (stack: BaseElement[], nsName: string, attrs: any): void {
    if (!this.allowedChildren) return

    const ChildClass: any = this.allowedChildren[splitNSName(nsName).name]
    if (ChildClass) {
      stack.push(new ChildClass(nsName, attrs) as BaseElement)
    } else {
      this.unexpected(nsName)
    }
  }

  public endElement (stack: BaseElement[], nsName: string): void {
    if (this.nsName === nsName) {
      if (stack.length < 2) return
      const parent = stack[stack.length - 2]
      if (this !== stack[0]) {
        stack[0].xmlns = {
          ...stack[0].xmlns,
          ...this.xmlns
        }
        parent.children?.push(this)
        parent.addChild(this)
      }
    }
    stack.pop()
  }

  public addChild (child: any): void {
    // if (!this.children) this.children = []
    // this.children.push(child)
  }

  public unexpected (name: string): void {
    throw new Error(
      `Found unexpected element (${name}) inside ${this.nsName ?? ''}`
    )
  }

  public description (definitions: any): string | Record<string, unknown> {
    return this.$name || this.name
  }
}

export class ElementElement extends BaseElement {
  [key: string]: any;

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.element[1]
    super(nsName, attrs, allowedChildrenList)
  }

  override description (definitions: any): string | Record<string, unknown> {
    const element: Record<string, unknown> = {}
    let name = this.$name as string
    if (this.$minOccurs !== this.$maxOccurs) {
      name += '[]'
    }

    if (this.$type) {
      const typeName = splitNSName(this.$type).name
      const ns = definitions.xmlns[splitNSName(this.$type).namespace ?? '']
      const schema = definitions.schemas[ns]
      const typeElement =
        schema && (schema.complexTypes[typeName] || schema.types[typeName])
      if (typeElement && !(typeName in Primitives)) {
        element[name] = typeElement.description(definitions)
      } else element[name] = this.$type
    } else {
      const children = this.children ?? []
      element[name] = {}
      for (let i = 0, child; (child = children[i]); i++) {
        if (child instanceof ComplexTypeElement) {
          element[name] = child.description(definitions)
        }
      }
    }
    return element
  }
}

export class ComplexTypeElement extends BaseElement {
  [key: string]: any;

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.complexType[1]
    super(nsName, attrs, allowedChildrenList)
  }

  override description (definitions: any): string | Record<string, unknown> {
    const children = this.children ?? []
    for (let i = 0, child; (child = children[i]); i++) {
      if (child instanceof SequenceElement || child instanceof AllElement) {
        return child.description(definitions)
      }
    }
    return {}
  }
}

export class AllElement extends BaseElement {
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.all[1]
    super(nsName, attrs, allowedChildrenList)
  }

  override description (definitions: any): string | Record<string, unknown> {
    const children = this.children ?? []
    const sequence: Record<string, unknown> = {}
    for (let i = 0, child; (child = children[i]); i++) {
      const description = child.description(definitions)
      for (const key in description) {
        sequence[key] = description[key]
      }
    }
    return sequence
  }
}

export class SequenceElement extends BaseElement {
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.sequence[1]
    super(nsName, attrs, allowedChildrenList)
  }

  override description (definitions: any): string | Record<string, unknown> {
    const children = this.children ?? []
    const sequence: Record<string, unknown> = {}
    for (let i = 0, child; (child = children[i]); i++) {
      const description = child.description(definitions)
      for (const key in description) {
        sequence[key] = description[key]
      }
    }
    return sequence
  }
}

export class TypesElement extends BaseElement {
  schemas: Record<string, unknown>
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.types[1]
    super(nsName, attrs, allowedChildrenList)
    this.schemas = {}
  }

  public override addChild (child: any): void {
    if (child.$targetNamespace) this.schemas[child.$targetNamespace] = child
    else this.schemas[child.includes[0].namespace] = child
  }
}

export class SchemaElement extends BaseElement {
  complexTypes: Record<string, unknown>
  types: Record<string, unknown>
  elements: Record<string, unknown>
  includes: unknown[]

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.schema[1]
    super(nsName, attrs, allowedChildrenList)

    this.complexTypes = {}
    this.types = {}
    this.elements = {}
    this.includes = []
  }

  public override addChild (child: any): void {
    if (child.$name in Primitives) return
    if (child.name === 'include' || child.name === 'import') {
      const location = child.$schemaLocation || child.$location
      if (location) {
        this.includes.push({
          namespace:
            child.$namespace || child.$targetNamespace || this.$targetNamespace,
          location
        })
      }
    } else if (child.name === 'complexType') {
      this.complexTypes[child.$name] = child
    } else if (child.name === 'element') {
      this.elements[child.$name] = child
    } else if (child.$name) {
      this.types[child.$name] = child
    }
    this.children?.pop()
  }
}

export class SimpleTypeElement extends BaseElement {
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.simpleType[1]
    super(nsName, attrs, allowedChildrenList)
  }

  override description (): string | Record<string, unknown> {
    const children = this.children ?? []
    for (let i = 0, child; (child = children[i]); i++) {
      if (child instanceof RestrictionElement) {
        return `${this.$name as string} | ${child.description() as string}`
      }
    }
    return {}
  }
}

export class RestrictionElement extends BaseElement {
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.restriction[1]
    super(nsName, attrs, allowedChildrenList)
  }

  override description (): string | Record<string, unknown> {
    const base = this.$base ? `${this.$base as string}|` : ''
    return (
      base +
      (this.children ?? [])
        .map(function (child) {
          return child.description()
        })
        .join(',')
    )
  }
}

export class EnumerationElement extends BaseElement {
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.enumeration[1]
    super(nsName, attrs, allowedChildrenList)
  }

  public override description (): string | Record<string, unknown> {
    return this.$value
  }
}

export class ServiceElement extends BaseElement {
  ports: Record<string, unknown>

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.service[1]
    super(nsName, attrs, allowedChildrenList)

    this.ports = {}
  }

  public override description (
    definitions: any
  ): string | Record<string, unknown> {
    const ports: Record<string, unknown> = {}
    for (const name in this.ports) {
      const port: any = this.ports[name]
      ports[name] = port.binding.description(definitions)
    }
    return ports
  }

  public postProcess (definitions: any): void {
    const children = this.children ?? []
    const bindings = definitions.bindings
    for (let i = 0, child; (child = children[i]); i++) {
      if (child.name !== 'port') continue
      const bindingName = splitNSName(child.$binding).name
      const binding = bindings[bindingName]
      if (binding) {
        binding.postProcess(definitions)
        this.ports[child.$name] = {
          location: child.location,
          binding
        }
        children.splice(i--, 1)
      }
    }
    delete this.$name
    this.deleteFixedAttrs()
  }
}

export class PortElement extends BaseElement {
  location: string | null

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.port[1]
    super(nsName, attrs, allowedChildrenList)

    this.location = null
  }

  public override addChild (child: any): void {
    if (child.name === 'address' && typeof child.$location !== 'undefined') {
      this.location = child.$location
    }
  }
}

export class BindingElement extends BaseElement {
  transport: string
  style: string
  methods: Record<string, unknown>

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.binding[1]
    super(nsName, attrs, allowedChildrenList)

    this.transport = ''
    this.style = ''
    this.methods = {}
  }

  public override addChild (child: any): void {
    if (child.name === 'binding') {
      this.transport = child.$transport
      this.style = child.$style
      this.children?.pop()
    }
  }

  public postProcess (definitions: any): any {
    const type = splitNSName(this.$type).name
    const portType = definitions.portTypes[type]
    const style = this.style
    const children = this.children ?? []

    portType.postProcess(definitions)
    this.methods = portType.methods
    // delete portType.methods; both binding and portType should keep the same set of operations

    for (let i = 0, child; (child = children[i]); i++) {
      if (child.name !== 'operation') continue
      child.postProcess(definitions, 'binding')
      children.splice(i--, 1)
      child.style || (child.style = style)
      const method: any = this.methods[child.$name]
      method.style = child.style
      method.soapAction = child.soapAction
      method.inputSoap = child.input || null
      method.outputSoap = child.output || null
      method.inputSoap?.deleteFixedAttrs()
      method.outputSoap?.deleteFixedAttrs()
      // delete method.$name; client will use it to make right request for top element name in body
      // method.deleteFixedAttrs(); why ???
    }

    delete this.$name
    delete this.$type
    this.deleteFixedAttrs()
  }

  public override description (
    definitions: any
  ): string | Record<string, unknown> {
    const methods: Record<string, unknown> = {}
    for (const name in this.methods) {
      const method: any = this.methods[name]
      methods[name] = method.description(definitions)
    }
    return methods
  }
}

export class PortTypeElement extends BaseElement {
  methods: Record<string, unknown>

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.portType[1]
    super(nsName, attrs, allowedChildrenList)

    this.methods = {}
  }

  public postProcess (definitions: any): any {
    const children = this.children
    if (typeof children === 'undefined') return
    for (let i = 0, child; (child = children[i]); i++) {
      if (child.name !== 'operation') continue
      child.postProcess(definitions, 'portType')
      this.methods[child.$name] = child
      children.splice(i--, 1)
    }
    delete this.$name
    this.deleteFixedAttrs()
  }

  public override description (
    definitions: any
  ): string | Record<string, unknown> {
    const methods: Record<string, unknown> = {}
    for (const name in this.methods) {
      const method: any = this.methods[name]
      methods[name] = method.description(definitions)
    }
    return methods
  }
}

export class MessageElement extends BaseElement {
  element: any
  parts: any

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.message[1]
    super(nsName, attrs, allowedChildrenList)

    this.element = null
    this.parts = null
  }

  public postProcess (definitions: any): any {
    let part = null
    let child
    const children = this.children ?? []

    for (let i = 0; i < children.length; i++) {
      if ((child = children[i]).name === 'part') {
        part = child
        break
      }
    }
    if (!part) return
    if (part.$element) {
      delete this.parts
      const nsName = splitNSName(part.$element)
      const ns = nsName.namespace ?? ''
      this.element =
        definitions.schemas[definitions.xmlns[ns]].elements[nsName.name]
      this.element.targetNSAlias = ns
      this.element.targetNamespace = definitions.xmlns[ns]
      this.children?.splice(0, 1)
    } else {
      // rpc encoding
      this.parts = {}
      delete this.element
      for (let i = 0, partI; (partI = children[i]); i++) {
        const nsName = splitNSName(part.$type)
        const ns = definitions.xmlns[nsName.namespace ?? '']
        const type = nsName.name
        const schemaDefinition = definitions.schemas[ns]
        if (typeof schemaDefinition !== 'undefined') {
          this.parts[partI.$name] =
            definitions.schemas[ns].types[type] ||
            definitions.schemas[ns].complexTypes[type]
        } else {
          this.parts[partI.$name] = partI.$type
        }
        this.parts[partI.$name].namespace = nsName.namespace
        this.parts[partI.$name].xmlns = ns
        this.children?.splice(i--, 1)
      }
    }
    this.deleteFixedAttrs()
  }

  public override description (
    definitions: any
  ): string | Record<string, unknown> {
    if (this.element) {
      return this.element?.description(definitions)
    }
    const desc: Record<string, unknown> = {}
    desc[this.$name as string] = this.parts
    return desc
  }
}

export class OperationElement extends BaseElement {
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.operation[1]
    super(nsName, attrs, allowedChildrenList)

    this.input = null
    this.output = null
    this.inputSoap = null
    this.outputSoap = null
    this.style = ''
    this.soapAction = ''
  }

  public postProcess (definitions: any, tag: string): any {
    const children = this.children ?? []
    for (let i = 0, child; (child = children[i]); i++) {
      if (child.name !== 'input' && child.name !== 'output') continue
      if (tag === 'binding') {
        this[child.name] = child
        children.splice(i--, 1)
        continue
      }
      const messageName = splitNSName(child.$message).name
      const message = definitions.messages[messageName]
      message.postProcess(definitions)
      if (message.element) {
        definitions.messages[message.element.$name] = message
        this[child.name] = message.element
      } else {
        this[child.name] = message
      }
      children.splice(i--, 1)
    }
    this.deleteFixedAttrs()
  }

  public override description (
    definitions: any
  ): string | Record<string, unknown> {
    const inputDesc = this.input.description(definitions)
    const outputDesc = this.output.description(definitions)
    return {
      input: inputDesc?.[Object.keys(inputDesc)[0]],
      output: outputDesc?.[Object.keys(outputDesc)[0]]
    }
  }

  public override addChild (child: any): void {
    if (child.name === 'operation') {
      this.soapAction = child.$soapAction || ''
      this.style = child.$style || ''
      this.children?.pop()
    }
  }
}

export class InputElement extends BaseElement {
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.input[1]
    super(nsName, attrs, allowedChildrenList)
  }

  public override addChild (child: any): void {
    if (child.name === 'body') {
      this.use = child.$use
      if (this.use === 'encoded') {
        this.encodingStyle = child.$encodingStyle
      }
      this.children?.pop()
    }
  }
}

export class OutputElement extends BaseElement {
  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.output[1]
    super(nsName, attrs, allowedChildrenList)
  }

  public override addChild (child: any): void {
    if (child.name === 'body') {
      this.use = child.$use
      if (this.use === 'encoded') {
        this.encodingStyle = child.$encodingStyle
      }
      this.children?.pop()
    }
  }
}

export class DefinitionsElement extends BaseElement {
  messages: Record<string, unknown>
  portTypes: Record<string, unknown>
  bindings: Record<string, unknown>
  services: Record<string, unknown>
  schemas: Record<string, unknown>

  constructor (nsName: string, attrs: any) {
    const allowedChildrenList = ElementTypeMap.definitions[1]
    super(nsName, attrs, allowedChildrenList)

    if (this.name !== 'definitions') this.unexpected(this.nsName ?? '')

    this.messages = {}
    this.portTypes = {}
    this.bindings = {}
    this.services = {}
    this.schemas = {}
  }

  public override addChild (child: any): void {
    if (child instanceof TypesElement) {
      this.schemas = child.schemas
    } else if (child instanceof MessageElement) {
      this.messages[child.$name] = child
    } else if (child instanceof PortTypeElement) {
      this.portTypes[child.$name] = child
    } else if (child instanceof BindingElement) {
      if (
        child.transport === 'http://schemas.xmlsoap.org/soap/http' ||
        child.transport === 'http://www.w3.org/2003/05/soap/bindings/HTTP/'
      ) {
        this.bindings[child.$name] = child
      }
    } else if (child instanceof ServiceElement) {
      this.services[child.$name] = child
    }
    this.children?.pop()
  }
}

const ElementTypeMap: Record<string, any[]> = {
  types: [TypesElement, 'schema'],
  schema: [SchemaElement, 'element complexType simpleType include import'],
  element: [ElementElement, 'annotation complexType'],
  simpleType: [SimpleTypeElement, 'restriction'],
  restriction: [RestrictionElement, 'enumeration'],
  enumeration: [EnumerationElement, ''],
  complexType: [ComplexTypeElement, 'annotation sequence all'],
  sequence: [SequenceElement, 'element'],
  all: [AllElement, 'element'],

  service: [ServiceElement, 'port documentation'],
  port: [PortElement, 'address'],
  binding: [BindingElement, '_binding SecuritySpec operation'],
  portType: [PortTypeElement, 'operation'],
  message: [MessageElement, 'part documentation'],
  operation: [OperationElement, 'documentation input output fault _operation'],
  input: [InputElement, 'body SecuritySpecRef documentation header'],
  output: [OutputElement, 'body SecuritySpecRef documentation header'],
  fault: [BaseElement, '_fault'],
  definitions: [DefinitionsElement, 'types message portType binding service']
}

export { ElementTypeMap }
