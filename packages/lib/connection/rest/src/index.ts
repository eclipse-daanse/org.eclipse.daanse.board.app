import BaseConnection, { type BaseConnectionConfig } from "org.eclipse.daanse.board.app.lib.connection.base";

export interface IRestConnectionConfiguration extends BaseConnectionConfig {
  url: string;
}

export default class RestConnection extends BaseConnection {
  private url;

  constructor(configuration: IRestConnectionConfiguration) {
    super(configuration);

    // this.url = super.initVariable(configuration.url);
    this.url = configuration.url;
  }

  // fetch(config: IRequestParams): Promise<any> {
  fetch(config: any): Promise<any> {
    // return fetch(this.url.value + config.url);
    return fetch(this.url + config.url);
  }

  setConfig(): void {
    throw new Error("Method not implemented.");
  }

  static validateConfiguration(configuration: IRestConnectionConfiguration) {
    if (!configuration.url) {
      return false;
    }

    return true;
  }
}