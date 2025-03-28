interface IDataRetrieveable {
    getData<T extends keyof DataMap>(type: T): Promise<DataMap[T]>;
    getOriginalData(): any;
    callEvent: (event: string, params: any) => void;
    subscribe: (subscriber: () => any) => void;
    unsubscribe: (subscriber: () => any) => void;
    destroy: () => void;
    startPolling: (interval: number) => void;
    stopPolling: () => void;
  }
  
  interface IDatasourceRepository {
    getDatasource(datasourceName: string): IDataRetrieveable;
    registerDatasource(datasourceName: string, type: string, config: any): void;
  }
  
  interface DataSourcePlugin {
    Preview: any;
    Settings: any;
    Store: StoreConstructor;
    Identifiers: StoreIdentifiers;
    Name: string;
  }
  
  interface StoreIdentifiers {
    Store: symbol;
    Preview: symbol;
    Settings: symbol;
  }
  
  interface StoreConstructor<T> {
    new (config: IBaseConnectionConfiguration): T;
    validateConfiguration: (config: any) => boolean;
  }
  