import { Variable } from './Variable';
import { VariableStorage } from './VariableStorage';

export class QueryVariable extends Variable {
    private innerQueryParam: string = '';
    public type = 'query';

    constructor(name: string, storage: VariableStorage, config: IQueryVariableConfig) {
      console.log(config);
      super(name, storage, config);
      this.parameter = config.queryParam;
    }

    get parameter(): string {
      return this.innerQueryParam;
    }

    set parameter(parameter) {
      this.innerQueryParam = parameter;

      const paramValue = new URLSearchParams(window.location.search).get(this.innerQueryParam);
      super.value = paramValue;
    }

    get value(): any {
      return super.value;
    }
}