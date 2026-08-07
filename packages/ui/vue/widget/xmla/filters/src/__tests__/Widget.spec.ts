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
 * ********************************************************************/

// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import FiltersWidget from '../FiltersWidget.vue';
import FiltersWidgetSettings from '../FiltersWidgetSettings.vue';

if (typeof global.ResizeObserver === 'undefined') {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
}
if (typeof global.IntersectionObserver === 'undefined') {
  global.IntersectionObserver = class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
}
if (typeof URL.createObjectURL === 'undefined') {
  URL.createObjectURL = () => 'mock-url';
}
if (typeof document !== 'undefined') {
  const originalCreateRange = document.createRange;
  document.createRange = function() {
    const r = originalCreateRange.call(document);
    r.getBoundingClientRect = function() {
      return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } as any;
    };
    r.getClientRects = function() {
      return [] as any;
    };
    return r;
  } as any;
}
vi.mock('vue-router', () => {
  return {
    useRoute: () => ({
      params: {
        pageid: 'mock-page-id'
      }
    }),
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn()
    })
  };
});
vi.mock('vuedraggable', () => {
  return {
    default: {
      template: '<div><slot /></div>',
      props: ['modelValue', 'list', 'itemKey']
    }
  };
});
vi.mock('vuedraggable/src/vuedraggable', () => {
  return {
    default: {
      template: '<div><slot /></div>',
      props: ['modelValue', 'list', 'itemKey']
    }
  };
});
vi.mock('org.eclipse.daanse.board.app.ui.vue.common.xmla', () => {
  return {
    FiltersModal: {
      template: '<div>FiltersModal</div>',
      props: ['modelValue', 'opened']
    },
    PivotTable: {
      template: '<div>PivotTable</div>',
      props: ['modelValue', 'options', 'data']
    }
  };
});
vi.mock('org.eclipse.daanse.board.app.ui.vue.common.monaco', () => {
  return {
    MonacoEditor: {
      template: '<div>MonacoEditor</div>',
      props: ['modelValue', 'language']
    }
  };
});
vi.mock('org.eclipse.daanse.board.app.lib.core', async (importOriginal) => {
  const actual = await importOriginal() as any;
  if (actual.container && typeof actual.container.isBound === 'function') {
    const emitterSymbol = actual.identifiers?.TINY_EMITTER || Symbol.for('TINY_EMITTER');
    if (!actual.container.isBound(emitterSymbol)) {
      actual.container.bind(emitterSymbol).toConstantValue({
        emit: vi.fn(),
        on: vi.fn(),
        off: vi.fn()
      });
    }

    const widgetRepoSymbol = Symbol.for('WidgetRepository');
    if (actual.container.isBound(widgetRepoSymbol)) {
      actual.container.unbind(widgetRepoSymbol);
    }
    actual.container.bind(widgetRepoSymbol).toConstantValue({
      getWidget: vi.fn().mockReturnValue({ component: 'div', settingsComponent: 'div' }),
      registerWidget: vi.fn(),
      getAllWidgets: vi.fn().mockReturnValue({
        SampleWidget: { component: 'div', settingsComponent: 'div' }
      })
    });

    const connRepoSymbol = Symbol.for('ConnectionRepository');
    if (actual.container.isBound(connRepoSymbol)) {
      actual.container.unbind(connRepoSymbol);
    }
    actual.container.bind(connRepoSymbol).toConstantValue({
      getConnection: vi.fn().mockReturnValue({}),
      registerConnection: vi.fn()
    });

    const dsRepoSymbol = Symbol.for('DatasourceRepository');
    if (actual.container.isBound(dsRepoSymbol)) {
      actual.container.unbind(dsRepoSymbol);
    }
    actual.container.bind(dsRepoSymbol).toConstantValue({
      getDatasource: vi.fn().mockReturnValue({
        getData: vi.fn().mockResolvedValue({}),
        callEvent: vi.fn()
      }),
      registerDatasource: vi.fn()
    });

    const varRepoSymbol = Symbol.for('VariableRepository');
    if (actual.container.isBound(varRepoSymbol)) {
      actual.container.unbind(varRepoSymbol);
    }
    actual.container.bind(varRepoSymbol).toConstantValue({
      getVariable: vi.fn().mockReturnValue({ value: 'val' }),
      registerVariable: vi.fn()
    });

    const registrySymbol = Symbol.for('EventActionsRegistry');
    if (actual.container.isBound(registrySymbol)) {
      actual.container.unbind(registrySymbol);
    }
    actual.container.bind(registrySymbol).toConstantValue({
      registerActions: vi.fn(),
      getActions: vi.fn().mockReturnValue([]),
      setEcoreMetadataService: vi.fn(),
      registerInstance: vi.fn(),
      unregisterInstance: vi.fn(),
      registerActionsFromEcoreString: vi.fn()
    });

    const eventRegistrySymbol = Symbol.for('EventRegistry');
    if (actual.container.isBound(eventRegistrySymbol)) {
      actual.container.unbind(eventRegistrySymbol);
    }
    actual.container.bind(eventRegistrySymbol).toConstantValue({
      setEcoreMetadataService: vi.fn(),
      registerEvent: vi.fn(),
      getEvents: vi.fn().mockReturnValue([])
    });
  }
  return actual;
});

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = await importOriginal() as any;
  return {
    ...actual,
    useDatasourceRepository: (datasourceId: any, type: string, data: any) => {
      if (type === 'string') {
        data.value = 'Mocked String Data';
      } else if (type === 'DataTable') {
        const arr = [{ index: 0, name: 'Item A', value: 100 }] as any;
        arr.headers = ['index', 'name', 'value'];
        arr.items = arr;
        arr.rows = [[0, 'Item A', 100]];
        data.value = arr;
      } else if (type === 'ChartData') {
        data.value = {
          labels: ['Label A', 'Label B', 'Label C'],
          datasets: [
            {
              label: 'Mock Series',
              data: [10, 20, 30],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2
            }
          ]
        };
      } else if (type === 'PivotTable') {
        data.value = {
          tableState: {
            rowsExpandedMembers: [],
            columnsExpandedMembers: []
          },
          propertiesRows: [],
          propertiesColumns: []
        };
      } else {
        data.value = { test: 'mocked-generic-data' };
      }
      return {
        data,
        update: vi.fn(),
        callEvent: vi.fn(),
        getDataWithOptions: vi.fn().mockResolvedValue({}),
        getDatasourceInstance: vi.fn().mockReturnValue({
          getConnection: vi.fn().mockReturnValue({
            getApi: vi.fn().mockResolvedValue({}),
            catalogName: 'Mock Catalog'
          }),
          requestParams: {
            rows: [],
            columns: [],
            filters: []
          }
        })
      };
    },
    useVariableRepository: () => {
      return {
        getVariable: vi.fn().mockReturnValue({ value: 'var-value' }),
        setVariable: vi.fn(),
        calculateValue: (val: any) => val,
        wrapParameters: (params: any) => params
      };
    },
    useGlobalLoading: () => {
      return {
        startLoading: vi.fn(),
        stopLoading: vi.fn()
      };
    }
  };
});

describe('Rendering tests for org.eclipse.daanse.board.app.ui.vue.widget.xmla.filters', () => {
  it('renders FiltersWidget component', () => {
    const wrapper = mount(FiltersWidget, {
      props: {
        datasourceId: 'ds-1',
        dataSourceId: 'ds-1',
        id: 'widget-1',
        widgetId: 'widget-1',
        data: {},
        parameter: 'temperature',
        color: '#ff0000',
        weatherData: {
          location: 'Mock City',
          temperature: 20,
          weatherText: 'Sunny',
          weatherIcon: 1,
          forecast: []
        },
        intensity: 0.5,
        widget: {
          type: 'SampleWidget',
          wrapperConfig: {},
          children: [],
          config: {
            datasourceId: 'ds-1'
          }
        },
        config: {
          datasourceId: 'ds-1',
          value: 'mocked-value',
          imagesSettings: { fit: 'none' },
          images: [],
          columns: [],
          rows: [],
          fields: [],
          conditions: [],
          style: {},
          videoFitSettings: { fit: 'Cover' },
          videoUrl: 'http://example.com/video.mp4',
          fontWeight: { value: 'normal' },
          fontStyle: { value: 'normal' },
          textDecoration: { value: 'none' },
          horizontalAlign: { value: 'left' },
          verticalAlign: { value: 'top' },
          text: 'mocked-text',
          fontSize: '14px',
          fontColor: '#000000',
          activeItemStyles: {
            fill: { value: '#ff0000' },
            stroke: { value: '#000000' }
          },
          defaultItemStyles: {
            fill: { value: '#cccccc' },
            stroke: { value: '#333333' }
          },
          settings: {
            showRows: true,
            showColumns: true,
            showFilters: true,
            imagesSettings: { fit: 'none' },
            images: [],
            columns: [],
            rows: [],
            fields: [],
            conditions: [],
            style: {}
          }
        },
        configv: {
          datasourceId: 'ds-1',
          value: 'mocked-value',
          imagesSettings: { fit: 'none' },
          images: [],
          columns: [],
          rows: [],
          fields: [],
          conditions: [],
          style: {},
          videoFitSettings: { fit: 'Cover' },
          videoUrl: 'http://example.com/video.mp4',
          fontWeight: { value: 'normal' },
          fontStyle: { value: 'normal' },
          textDecoration: { value: 'none' },
          horizontalAlign: { value: 'left' },
          verticalAlign: { value: 'top' },
          text: 'mocked-text',
          fontSize: '14px',
          fontColor: '#000000',
          activeItemStyles: {
            fill: { value: '#ff0000' },
            stroke: { value: '#000000' }
          },
          defaultItemStyles: {
            fill: { value: '#cccccc' },
            stroke: { value: '#333333' }
          },
          settings: {
            showRows: true,
            showColumns: true,
            showFilters: true,
            imagesSettings: { fit: 'none' },
            images: [],
            columns: [],
            rows: [],
            fields: [],
            conditions: [],
            style: {}
          }
        },
        settings: {
          showRows: true,
          showColumns: true,
          showFilters: true,
          imagesSettings: { fit: 'none' },
          images: [],
          columns: [],
          rows: [],
          fields: [],
          conditions: [],
          style: {},
          videoFitSettings: { fit: 'Cover' },
          videoUrl: 'http://example.com/video.mp4',
          fontWeight: { value: 'normal' },
          fontStyle: { value: 'normal' },
          textDecoration: { value: 'none' },
          horizontalAlign: { value: 'left' },
          verticalAlign: { value: 'top' },
          text: 'mocked-text',
          fontSize: '14px',
          fontColor: '#000000',
          activeItemStyles: {
            fill: { value: '#ff0000' },
            stroke: { value: '#000000' }
          },
          defaultItemStyles: {
            fill: { value: '#cccccc' },
            stroke: { value: '#333333' }
          }
        },
        connections: [],
        dataSources: [],
        modelValue: {
          datasourceId: 'ds-1',
          value: 'mocked-value',
          imagesSettings: { fit: 'none' },
          images: [],
          columns: [],
          rows: [],
          fields: [],
          conditions: [],
          style: {},
          videoFitSettings: { fit: 'Cover' },
          videoUrl: 'http://example.com/video.mp4',
          fontWeight: { value: 'normal' },
          fontStyle: { value: 'normal' },
          textDecoration: { value: 'none' },
          horizontalAlign: { value: 'left' },
          verticalAlign: { value: 'top' },
          text: 'mocked-text',
          fontSize: '14px',
          fontColor: '#000000',
          activeItemStyles: {
            fill: { value: '#ff0000' },
            stroke: { value: '#000000' }
          },
          defaultItemStyles: {
            fill: { value: '#cccccc' },
            stroke: { value: '#333333' }
          },
          settings: {
            showRows: true,
            showColumns: true,
            showFilters: true,
            imagesSettings: { fit: 'none' },
            images: [],
            columns: [],
            rows: [],
            fields: [],
            conditions: [],
            style: {}
          }
        },
        editEnabled: false
      } as any,
      global: {
        stubs: {
          VaCard: { template: '<div><slot /></div>' },
          VaButton: { template: '<button><slot /></button>' },
          VaInput: { template: '<input />' },
          VaSelect: { template: '<select><slot /></select>' },
          VaSwitch: { template: '<input type="checkbox" />' }
        }
      }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('renders FiltersWidgetSettings component', () => {
    const wrapper = mount(FiltersWidgetSettings, {
      props: {
        datasourceId: 'ds-1',
        dataSourceId: 'ds-1',
        id: 'widget-1',
        widgetId: 'widget-1',
        data: {},
        parameter: 'temperature',
        color: '#ff0000',
        weatherData: {
          location: 'Mock City',
          temperature: 20,
          weatherText: 'Sunny',
          weatherIcon: 1,
          forecast: []
        },
        intensity: 0.5,
        widget: {
          type: 'SampleWidget',
          wrapperConfig: {},
          children: [],
          config: {
            datasourceId: 'ds-1'
          }
        },
        config: {
          datasourceId: 'ds-1',
          value: 'mocked-value',
          imagesSettings: { fit: 'none' },
          images: [],
          columns: [],
          rows: [],
          fields: [],
          conditions: [],
          style: {},
          videoFitSettings: { fit: 'Cover' },
          videoUrl: 'http://example.com/video.mp4',
          fontWeight: { value: 'normal' },
          fontStyle: { value: 'normal' },
          textDecoration: { value: 'none' },
          horizontalAlign: { value: 'left' },
          verticalAlign: { value: 'top' },
          text: 'mocked-text',
          fontSize: '14px',
          fontColor: '#000000',
          activeItemStyles: {
            fill: { value: '#ff0000' },
            stroke: { value: '#000000' }
          },
          defaultItemStyles: {
            fill: { value: '#cccccc' },
            stroke: { value: '#333333' }
          },
          settings: {
            showRows: true,
            showColumns: true,
            showFilters: true,
            imagesSettings: { fit: 'none' },
            images: [],
            columns: [],
            rows: [],
            fields: [],
            conditions: [],
            style: {}
          }
        },
        configv: {
          datasourceId: 'ds-1',
          value: 'mocked-value',
          imagesSettings: { fit: 'none' },
          images: [],
          columns: [],
          rows: [],
          fields: [],
          conditions: [],
          style: {},
          videoFitSettings: { fit: 'Cover' },
          videoUrl: 'http://example.com/video.mp4',
          fontWeight: { value: 'normal' },
          fontStyle: { value: 'normal' },
          textDecoration: { value: 'none' },
          horizontalAlign: { value: 'left' },
          verticalAlign: { value: 'top' },
          text: 'mocked-text',
          fontSize: '14px',
          fontColor: '#000000',
          activeItemStyles: {
            fill: { value: '#ff0000' },
            stroke: { value: '#000000' }
          },
          defaultItemStyles: {
            fill: { value: '#cccccc' },
            stroke: { value: '#333333' }
          },
          settings: {
            showRows: true,
            showColumns: true,
            showFilters: true,
            imagesSettings: { fit: 'none' },
            images: [],
            columns: [],
            rows: [],
            fields: [],
            conditions: [],
            style: {}
          }
        },
        settings: {
          showRows: true,
          showColumns: true,
          showFilters: true,
          imagesSettings: { fit: 'none' },
          images: [],
          columns: [],
          rows: [],
          fields: [],
          conditions: [],
          style: {},
          videoFitSettings: { fit: 'Cover' },
          videoUrl: 'http://example.com/video.mp4',
          fontWeight: { value: 'normal' },
          fontStyle: { value: 'normal' },
          textDecoration: { value: 'none' },
          horizontalAlign: { value: 'left' },
          verticalAlign: { value: 'top' },
          text: 'mocked-text',
          fontSize: '14px',
          fontColor: '#000000',
          activeItemStyles: {
            fill: { value: '#ff0000' },
            stroke: { value: '#000000' }
          },
          defaultItemStyles: {
            fill: { value: '#cccccc' },
            stroke: { value: '#333333' }
          }
        },
        connections: [],
        dataSources: [],
        modelValue: {
          datasourceId: 'ds-1',
          value: 'mocked-value',
          imagesSettings: { fit: 'none' },
          images: [],
          columns: [],
          rows: [],
          fields: [],
          conditions: [],
          style: {},
          videoFitSettings: { fit: 'Cover' },
          videoUrl: 'http://example.com/video.mp4',
          fontWeight: { value: 'normal' },
          fontStyle: { value: 'normal' },
          textDecoration: { value: 'none' },
          horizontalAlign: { value: 'left' },
          verticalAlign: { value: 'top' },
          text: 'mocked-text',
          fontSize: '14px',
          fontColor: '#000000',
          activeItemStyles: {
            fill: { value: '#ff0000' },
            stroke: { value: '#000000' }
          },
          defaultItemStyles: {
            fill: { value: '#cccccc' },
            stroke: { value: '#333333' }
          },
          settings: {
            showRows: true,
            showColumns: true,
            showFilters: true,
            imagesSettings: { fit: 'none' },
            images: [],
            columns: [],
            rows: [],
            fields: [],
            conditions: [],
            style: {}
          }
        },
        editEnabled: false
      } as any,
      global: {
        stubs: {
          VaCard: { template: '<div><slot /></div>' },
          VaButton: { template: '<button><slot /></button>' },
          VaInput: { template: '<input />' },
          VaSelect: { template: '<select><slot /></select>' },
          VaSwitch: { template: '<input type="checkbox" />' }
        }
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
