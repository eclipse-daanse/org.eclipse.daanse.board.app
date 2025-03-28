import { Variable } from './Variable';
import { VariableStorage } from './VariableStorage';

export class ConstantVariable extends Variable {
    public type = 'constant';
    
    constructor(name: string, storage: VariableStorage, config: IConstantVariableConfig) {
      super(name, storage, config);
      this.value = config.value;
    }

    get value(): string {
      return super.value;
    }

    set value(value) {
      super.value = value;
    }
}