interface ConnectionConstructor<T> {
    new (config: IConnectionConfig): T;
    validateConfiguration: (config: any) => boolean;
  }