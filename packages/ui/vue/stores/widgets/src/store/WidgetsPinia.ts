/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *———
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface IWidget {
  uid: string
  type: string
  wrapperConfig: any
  config: {
    datasourceId: string
    settings: {
      [key: string]: any
    }
  }
}

export const useWidgetsStore = (pageid: string = '') => {

    const storecall = defineStore(  `widget-${pageid}`, () => {
    const widgets = ref<IWidget[]>([] )

    const createWidget = (type: any, config: any = {}, wrapperConfig: any = {}) => {
      const uid = 'li_' + Math.random().toString(36).substring(7)
      const widgetName = 'widget_' + uid

      widgets.value.push({
        uid,
        type,
        wrapperConfig,
        config: {
          datasourceId: config.datasourceId,
          settings: { name: widgetName },
        },
      })
      return uid
    }

    const removeWidget = (widgetId: string) => {
      const index = widgets.value.findIndex((v) => v.uid === widgetId)

      if (index > -1) {
        widgets.value.splice(index, 1)
      }
    }

    const updateWidget = (widgetId: string, widgetProxy: IWidget) => {
      const widget = widgets.value.find((c) => c.uid === widgetId)

      if (!widget) return

      widget.uid = widgetProxy.uid
      widget.type = widgetProxy.type
      widget.wrapperConfig = widgetProxy.wrapperConfig
      widget.config = widgetProxy.config
    }

    const updateWidgets = (widgetsProxy: IWidget[]) => {
      widgets.value.splice(0)
      widgetsProxy.forEach((widgetProxy) => {
        widgets.value.push(widgetProxy)
      })
    }

    return { widgets, createWidget, removeWidget, updateWidget, updateWidgets }
  })
  return storecall();
}
