import { Variable } from './Variable';
import { VariableStorage } from './VariableStorage';

export class TimeVariable extends Variable {
    public type = 'time';

    constructor(name: string, storage: VariableStorage, config: IVariableConfig) {
      super(name, storage, config);
      super.value = Date.now();

      super.onInterval = () => {
        super.value = Date.now();
      }
    }
    
    get value(): any {
      return super.value;
    }

    set value(value) {}
}