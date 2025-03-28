interface IVariableConfig {
    description: string;
    refreshType: RefreshType;
    refreshInterval?: number;
    refreshTrigger?: string;
    type: string;
  }
  
  interface IQueryVariableConfig extends IVariableConfig {
    queryParam: string;
    description: string;
  }
  
  interface IComputedVariableConfig extends IVariableConfig {
    expression: string;
  }
  
  interface IConstantVariableConfig extends IVariableConfig {
    value: any;
  }
  
  interface IRequestVaribleConfig extends IVariableConfig {
    request: string;
  }
  
  type INewVariableConfig = IConstantVariableConfig | IComputedVariableConfig | IQueryVariableConfig | IRequestVaribleConfig | IVariableConfig;