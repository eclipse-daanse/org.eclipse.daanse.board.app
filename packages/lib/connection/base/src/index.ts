// import type { VariableStorage } from "@/plugins/variables/VariableStorage";
// import type ConnectionRepository from "../ConnectionRepository";
// import type DatasourceRepository from "../DatasourceRepository";
// import UsesComputedVariable from "./UsesComputedVariable";

// export interface BaseConnectionConfig {
//   connectionRepository: ConnectionRepository;
//   datasourceRepository: DatasourceRepository;
//   variableStorage: VariableStorage;  
// }

// export default abstract class BaseConnection extends UsesComputedVariable implements IConnection {
export default abstract class BaseConnection  {
//   abstract fetch(config: IRequestParams): Promise<any>;
  abstract fetch(config: any): Promise<any>;
  abstract setConfig(config: any): void;

//   protected connectionRepository: ConnectionRepository;
//   protected datasourceRepository: DatasourceRepository;

// constructor(configuration: BaseConnectionConfig) {
  constructor(configuration: any) {
    // super(configuration);

    // super.setUpdateCb(() => {
    //   console.log('Update', this);
    //   this.notify();
    // });

    // this.connectionRepository = configuration.connectionRepository;
    // this.datasourceRepository = configuration.datasourceRepository;
  }

  private subscribers: any[] = [];

  subscribe(subscriber: () => any) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: () => any) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber();
    })
  }
}