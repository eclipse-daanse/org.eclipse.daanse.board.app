import { ConstantVariable } from "../variables/ConstantVariable";
import { ComputedVariable } from "../variables/ComputedVariable";
import { QueryVariable } from "../variables/QueryVariable";
import { RequestVariable } from "../variables/RequestVariable";
import { TimeVariable } from "../variables/TimeVariable";
import { SourceType }  from '../types/enums';
import { TinyEmitter } from "tiny-emitter";
import { VariableEvents } from '../events';
import { injectable, inject } from "inversify";
import { identifiers } from "org.eclipse.daanse.board.app.lib.core";


@injectable()
export class VariableStorage {
  private variables: { [key: string]: any } = {};

  
  constructor(@inject(identifiers.TINY_EMITTER) private eventBus: TinyEmitter) {
    this.eventBus = eventBus;
  }

  createVariable(name: string, config: INewVariableConfig) {

    switch (config.type) {
      case SourceType.Constant:
        this.variables[name] = new ConstantVariable(name, this, config as IConstantVariableConfig);
        break;
      case SourceType.Expression:
        this.variables[name] = new ComputedVariable(name, this, config as IComputedVariableConfig);
        break;
      case SourceType.QueryParameter:
        this.variables[name] = new QueryVariable(name, this, config as IQueryVariableConfig);
        break;
      case SourceType.AsyncParameters:
        this.variables[name] = new RequestVariable(name, this, config as IRequestVaribleConfig);
        break;
      case SourceType.Time:
        this.variables[name] = new TimeVariable(name, this, config as IConstantVariableConfig);
        break;
      default:
        throw new Error('variable type not implemented yet');
    }

    this.eventBus.emit(VariableEvents.VariableCreated)
    return this.variables[name];
  }

  removeVariable(name: string) {
    if (this.variables[name]) {
      this.variables[name].clearInterval();
      this.variables[name].clearTrigger();
    }
    delete this.variables[name];
    this.eventBus.emit(VariableEvents.VariableRemoved);
  }

  getVariable(name: string) {
    return this.variables[name];
  }

  clearStorage() {
    this.variables = {};
    this.eventBus.emit(VariableEvents.VariablesCleared);
  }
}