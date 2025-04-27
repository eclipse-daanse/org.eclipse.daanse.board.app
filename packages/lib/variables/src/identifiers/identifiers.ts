const identifierVariableStorage = Symbol.for('VariableStorage')
const computedStoreParameterI = Symbol.for('ComputedStoreParameterI')
const factoryComputedStoreParameter = Symbol.for('FactoryComputedStoreParameter')
const usesComputedVariable = Symbol.for('usesComputedVariable');

export {
  usesComputedVariable,
  factoryComputedStoreParameter,
  computedStoreParameterI,
  identifierVariableStorage
}
