export enum SourceType {
  Constant = 'Constant',
  QueryParameter = 'Query parameter',
  SystemProperties = 'System properties',
  EnvironmentVariables = 'Environment variables',
  BrowserProperties = 'Browser properties',
  Time = 'Time',
  Expression = 'Expression',
  AsyncParameters = 'Async parameters',
  ComputedString = 'Computed String',
}

export enum RefreshType {
  None = 'None',
  Reactive = 'Reactive',
  Interval = 'Interval',
  Trigger = 'Trigger',
}
