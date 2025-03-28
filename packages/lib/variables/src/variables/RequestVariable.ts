import { Variable } from './Variable';
import { VariableStorage } from './VariableStorage';

export class RequestVariable extends Variable {
    private innerRequest: string = '';
    public type = 'request';
    public time = 0

    constructor(name: string, storage: VariableStorage, config: IRequestVaribleConfig) {
      super(name, storage, config);
      this.request = config.request;

      super.onInterval = () => {
        this.request = config.request;
      }
    }

    get request(): string {
      return this.innerRequest;
    }

    set request(request) {
      this.innerRequest = request;

      fetch(this.innerRequest).then(response => response.json()).then(data => {;
          super.value = data;
      });
    }

    get value(): any {
      return JSON.stringify(super.value);
    }

    set value(value) {}
}