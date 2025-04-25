/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/


import { IDataPointDescription } from '../../composables/IDataPointDescription'
import ValueUnitDataLabelRenderer from './ValueUnitDataLabelRenderer.vue'
import ValueUnitDataLabelRendererSettings from './ValueUnitDataLabelRendererSettings.vue'

export default class ValueUnitDataLabelRendererDescription implements IDataPointDescription {
  public readonly component: any = ValueUnitDataLabelRenderer
  public readonly setupComponent: any = ValueUnitDataLabelRendererSettings
  public readonly description: string = 'Renders a value and unit'
  public readonly name: string = 'Value and Unit Data Point Renderer'
  public readonly namespace: string = 'general'
  public readonly qualifiedName: string = 'ValueUnitDataPointRenderer'
  public readonly example: any = ' 15'

}
