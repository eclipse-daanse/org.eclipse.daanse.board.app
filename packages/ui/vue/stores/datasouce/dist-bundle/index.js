const { ref } = __tsm__.require("vue");
const { defineStore } = __tsm__.require("pinia");
let repository;
function provideRepository(instance) {
  repository = instance;
}
function requireRepository() {
  if (!repository) {
    throw new Error("DatasourceRepository not provided - is the ui.vue.stores.datasouce module active?");
  }
  return repository;
}
const useDataSourcesStore = defineStore("datasource", () => {
  const dataSources = ref([
    {
      uid: "test_ds",
      name: "Test DataSource 01",
      type: "rest",
      config: {
        resourceUrl: "posts",
        connection: "test"
      }
    }
  ]);
  const datasourceRepository = requireRepository();
  const createDataSource = (type, config = {}) => {
    const uid = Math.random().toString(36).substring(7);
    const name = "DataSource " + uid;
    config["name"] = name;
    config["type"] = type;
    config["uid"] = uid;
    datasourceRepository.registerDatasource(uid, type, config);
    dataSources.value.push({ uid, type, name, config });
    return uid;
  };
  const removeDataSource = (dataSourceId) => {
    const index = dataSources.value.findIndex((c) => c.uid === dataSourceId);
    datasourceRepository.removeDatasource(dataSourceId);
    if (index > -1) {
      dataSources.value.splice(index, 1);
    }
  };
  const updateDataSource = (dataSourceId, dataSourceProxy) => {
    const dataSource = dataSources.value.find((c) => c.uid === dataSourceId);
    if (!dataSource) return;
    datasourceRepository.removeDatasource(dataSourceId);
    dataSource.uid = dataSourceProxy.uid;
    dataSource.type = dataSourceProxy.type;
    dataSource.name = dataSourceProxy.name;
    dataSource.config = dataSourceProxy.config ?? {};
    dataSource.config["name"] = dataSourceProxy.name;
    dataSource.config["type"] = dataSourceProxy.type;
    dataSource.config["uid"] = dataSourceProxy.uid;
    datasourceRepository.registerDatasource(dataSourceId, dataSource.type, dataSource.config);
    console.log(datasourceRepository);
  };
  const updateDataSources = (dataSourceProxies) => {
    dataSources.value.splice(0);
    dataSourceProxies.forEach((dataSourceProxy) => {
      dataSources.value.push(dataSourceProxy);
      if (!dataSourceProxy.config) dataSourceProxy.config = {};
      dataSourceProxy.config["name"] = dataSourceProxy.name;
      dataSourceProxy.config["type"] = dataSourceProxy.type;
      dataSourceProxy.config["uid"] = dataSourceProxy.uid;
      datasourceRepository.registerDatasource(
        dataSourceProxy.uid,
        dataSourceProxy.type,
        dataSourceProxy.config
      );
    });
  };
  return { dataSources, createDataSource, removeDataSource, updateDataSource, updateDataSources };
});
function activate$1({ services }) {
  provideRepository(services.getRequired("DatasourceRepository"));
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  useDataSourcesStore
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.stores.datasouce";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.stores.datasouce");
  await activate$1?.(context);
}
async function deactivate(context) {
  await void 0;
}
export {
  activate,
  deactivate,
  useDataSourcesStore
};
