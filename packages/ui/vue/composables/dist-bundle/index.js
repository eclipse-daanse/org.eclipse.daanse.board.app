import { identifier } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref, computed, inject, onMounted, onUnmounted, watch, onBeforeUnmount } from "vue";
import { identifier as identifier$1 } from "org.eclipse.daanse.board.app.lib.api.variable";
import { identifier as identifier$2 } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { VariableWrapper, VARIABLEWRAPPER } from "org.eclipse.daanse.board.app.lib.variables";
import { VARIABLEWRAPPER as VARIABLEWRAPPER2, VariableWrapper as VariableWrapper2 } from "org.eclipse.daanse.board.app.lib.variables";
const activeLoadingCount = ref(0);
function useGlobalLoading() {
  const isLoading = computed(() => activeLoadingCount.value > 0);
  const startLoading = () => {
    activeLoadingCount.value++;
  };
  const stopLoading = () => {
    if (activeLoadingCount.value > 0) {
      activeLoadingCount.value--;
    }
  };
  return {
    isLoading,
    activeLoadingCount,
    startLoading,
    stopLoading
  };
}
function useDatasourceRepository(dataSourceId, type, data, subscriptions = [], requestConfig) {
  const datasourceRepository = inject(identifier);
  if (!datasourceRepository) {
    throw new Error("DatasourceRepository not provided");
  }
  const { startLoading, stopLoading } = useGlobalLoading();
  const getData = async () => {
    if (!dataSourceId.value) {
      data.value = null;
      return;
    }
    console.log("getData", dataSourceId.value);
    console.log("type", type);
    startLoading();
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      const dataRaw = await dataSource.getData(type, requestConfig?.value || {});
      if (type === "PivotTable") {
        data.value = JSON.parse(JSON.stringify(dataRaw));
      } else {
        data.value = structuredClone(dataRaw);
      }
    } catch (e) {
      data.value = null;
      console.warn(e);
    } finally {
      stopLoading();
    }
  };
  const callEvent = async (event, params, shouldUpdate = true) => {
    if (dataSourceId.value) {
      try {
        const dataSource = datasourceRepository.getDatasource(
          dataSourceId.value
        );
        const result = dataSource.callEvent(event, params, shouldUpdate);
        if (!shouldUpdate && result instanceof Promise) {
          await result;
          const dataRaw = await dataSource.getData(type);
          data.value = structuredClone(dataRaw);
        }
      } catch (e) {
        console.warn(e);
      }
    }
  };
  const getDataWithOptions = async (options) => {
    if (!dataSourceId.value) {
      data.value = null;
      return;
    }
    console.log("getDataWithOptions", dataSourceId.value, options);
    console.log("type", type);
    startLoading();
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      const dataRaw = await dataSource.getData(type, options);
      data.value = structuredClone(dataRaw);
    } catch (e) {
      data.value = null;
      console.warn(e);
    } finally {
      stopLoading();
    }
  };
  const update = (newVal, oldVal) => {
    try {
      getData();
    } catch (e) {
      console.warn(e);
    }
    if (!newVal || !oldVal || newVal === oldVal) return;
    try {
      const oldDataSource = datasourceRepository.getDatasource(oldVal);
      oldDataSource.unsubscribe(getData);
      subscriptions.forEach((fn) => {
        oldDataSource.unsubscribe(fn);
      });
    } catch (e) {
      console.warn(e);
    }
    try {
      const dataSource = datasourceRepository.getDatasource(newVal);
      dataSource.subscribe(() => getData());
      subscriptions.forEach((fn) => {
        dataSource.subscribe(fn);
      });
    } catch (e) {
      console.warn(e);
    }
  };
  const getDatasourceInstance = () => {
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      return dataSource;
    } catch (e) {
      console.warn(e);
      return null;
    }
  };
  onMounted(() => {
    getData();
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      dataSource.subscribe(getData);
      subscriptions.forEach((fn) => {
        dataSource.subscribe(fn);
      });
    } catch (e) {
      console.warn(e);
    }
  });
  onUnmounted(() => {
    try {
      const dataSource = datasourceRepository.getDatasource(dataSourceId.value);
      dataSource.unsubscribe(getData);
      subscriptions.forEach((fn) => {
        dataSource.unsubscribe(fn);
      });
    } catch (e) {
      console.warn(e);
    }
  });
  return {
    data,
    callEvent,
    update,
    getDataWithOptions,
    getDatasourceInstance
  };
}
function useTemporaryStore(type, settings, tempStore) {
  const datasourceRepository = inject(identifier);
  if (!datasourceRepository) {
    throw new Error("DatasourceRepository not provided");
  }
  const identifiers = datasourceRepository.getDatasourceIdentifiers(type);
  console.log("Identifiers for datasource type", type, identifiers);
  onMounted(async () => {
    console.log(
      "Creating temporary store for type",
      type,
      "with settings",
      settings.value
    );
    const factory = datasourceRepository.resolveIdentifier(identifiers.Store);
    tempStore.value = factory({ ...settings.value.config, _isTemporaryPreview: true });
  });
  const update = async () => {
    tempStore.value?.destroy();
    tempStore.value = null;
    const factory = datasourceRepository.resolveIdentifier(identifiers.Store);
    const newStore = factory({ ...settings.value.config, _isTemporaryPreview: true });
    if (newStore.initPromise) {
      await newStore.initPromise;
      tempStore.value = newStore;
      return newStore;
    } else {
      tempStore.value = newStore;
      return newStore;
    }
  };
  watch(
    () => settings,
    async () => {
    },
    { deep: true }
  );
  onBeforeUnmount(() => {
    console.log("Destroying temporary store");
    tempStore.value?.destroy();
  });
  return {
    update
  };
}
function usePromisifiedModal(resetFn, opened = () => {
}) {
  const isOpened = ref(false);
  let resolveFunction = (_val) => {
  };
  let runPromise = new Promise((res) => {
    resolveFunction = res;
  });
  const run = (data) => {
    isOpened.value = true;
    opened(data);
    return runPromise;
  };
  const close = (data) => {
    resolveFunction(data);
    runPromise = new Promise((res) => {
      resolveFunction = res;
    });
    isOpened.value = false;
    resetFn();
  };
  return { isOpened, run, close };
}
function useVariableRepository() {
  const updateTimestamp = ref(Date.now());
  const connectedVariables = [];
  const variableRepository = inject(identifier$1);
  if (!variableRepository) {
    throw new Error("VariableRepository not provided");
  }
  let pageContextService = null;
  try {
    pageContextService = inject(identifier$2);
  } catch (e) {
    console.warn("PageContextService not available for variable resolution");
  }
  const subscriptionFn = () => {
    updateTimestamp.value = Date.now();
  };
  const calculateValue = (templateValue, subscription = () => {
  }) => {
    const regex = /\{\s*([a-zA-Z0-9_]+)\s*\}/g;
    for (const variable of connectedVariables) {
      variable.unsubscribe(subscriptionFn);
      variable.unsubscribe(subscription);
    }
    connectedVariables.length = 0;
    const matches = [...templateValue.matchAll(regex)];
    const listOfVariables = matches.map((match) => match[1]);
    let result = templateValue;
    for (const varName of listOfVariables) {
      try {
        let variable = void 0;
        try {
          const currentPageId = pageContextService?.getCurrentPageId();
          variable = variableRepository.getVariableWithContext ? variableRepository.getVariableWithContext(varName, currentPageId) : variableRepository.getVariable(varName);
        } catch (e) {
          console.error(e);
        }
        if (variable) {
          variable.subscribe(subscriptionFn);
          variable.subscribe(subscription);
          connectedVariables.push(variable);
          const value = variable.value;
          const variableRegex = new RegExp(
            `\\{\\s*${varName}\\s*\\}`,
            "g"
          );
          result = result.replace(variableRegex, String(value));
        }
      } catch (error) {
        console.warn(`Error resolving variable ${varName}:`, error);
      }
    }
    return result;
  };
  const wrapParameters = (parameters) => {
    const wrappedParameters = {};
    for (const [key, value] of Object.entries(parameters)) {
      try {
        const computedValue = computed(() => {
          updateTimestamp.value;
          if (value) {
            return calculateValue(value.value + "");
          } else {
            return value;
          }
        });
        wrappedParameters[key] = computedValue;
      } catch (r) {
        console.log(r);
      }
    }
    return wrappedParameters;
  };
  return {
    calculateValue,
    wrapParameters
  };
}
const TYPE = "VARIABLECOMPLEXSTRINGWRAPPER";
class VariableComplexStringWrapper {
  type = TYPE;
  _value = void 0;
  _computedValue = null;
  constructor(initValue = "") {
    this._value = initValue;
  }
  get original() {
    return this._value || "";
  }
  updateFn() {
    const { calculateValue } = useVariableRepository();
    this._computedValue = calculateValue(this._value || "");
  }
  get value() {
    const { calculateValue } = useVariableRepository();
    this._computedValue = calculateValue(this._value || "", this.updateFn.bind(this));
    return this._computedValue;
  }
  set value(newValue) {
    this._value = newValue;
  }
}
const WrapperTypes = {
  "VariableWrapper": VariableWrapper,
  "VariableComplexStringWrapper": VariableComplexStringWrapper
};
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLECOMPLEXSTRINGWRAPPER: TYPE,
  VARIABLEWRAPPER,
  VariableComplexStringWrapper,
  VariableWrapper,
  WrapperTypes,
  useDatasourceRepository,
  useGlobalLoading,
  usePromisifiedModal,
  useTemporaryStore,
  useVariableRepository
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.composables";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.composables");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  TYPE as VARIABLECOMPLEXSTRINGWRAPPER,
  VARIABLEWRAPPER2 as VARIABLEWRAPPER,
  VariableComplexStringWrapper,
  VariableWrapper2 as VariableWrapper,
  WrapperTypes,
  activate,
  deactivate,
  useDatasourceRepository,
  useGlobalLoading,
  usePromisifiedModal,
  useTemporaryStore,
  useVariableRepository
};
