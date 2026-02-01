/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { injectable, inject, Container } from 'inversify'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper, VARIABLEWRAPPER, VariableComplexStringWrapper, VARIABLECOMPLEXSTRINGWRAPPER } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {identifier as IDVariableRepo,VariableRepository} from 'org.eclipse.daanse.board.app.lib.repository.variable'
type SearchResult = {
  path: string;
  value: any;
};

@injectable()
export class VariableWrapperFactory {
  constructor(@inject(IDVariableRepo) private variables: VariableRepository) {
  }
  initilazeVariableWrappers(json:any) {
    const results = this.findPropertyWithValue(json,'type',VARIABLEWRAPPER)
    if (results) {
      for(const result of results) {
        const short = result.path.split('.');
        short.pop();
        const upperPath = short.join('.');
        const originalValue = this.getValueAtPath(json,short.join('.'))
        if(originalValue._value !== undefined && originalValue._value !== null){
          const var1 = new VariableWrapper(originalValue._value);
          if(originalValue.reference && originalValue.reference.name){
            const ref = this.variables.getVariable(originalValue.reference.name)
            var1.setTo(ref);
          }
          this.setValueAtPath(json,upperPath,var1)
        }
      }
    }

    const complexResults = this.findPropertyWithValue(json, 'type', VARIABLECOMPLEXSTRINGWRAPPER)
    if (complexResults) {
      for (const result of complexResults) {
        const short = result.path.split('.');
        short.pop();
        const upperPath = short.join('.');
        const originalValue = this.getValueAtPath(json, short.join('.'))
        if (originalValue._value !== undefined && originalValue._value !== null) {
          const var1 = new VariableComplexStringWrapper<string>(originalValue._value);
          this.setValueAtPath(json, upperPath, var1)
        }
      }
    }
    return json
  }

  private findPropertyWithValue(
    obj: any,
    keyToFind: string,
    valueToMatch: any
  ): SearchResult[] {
    const results: SearchResult[] = [];
    const visited = new WeakSet();

    function recurse(current: any, path: string) {
      if (Array.isArray(current)) {
        current.forEach((item, index) => recurse(item, `${path}[${index}]`));
      } else if (typeof current === "object" && current !== null) {
        // Check for circular references
        if (visited.has(current)) {
          return; // Skip already visited objects
        }
        visited.add(current);

        for (const key in current) {
          const newPath = path ? `${path}.${key}` : key;

          if (key === keyToFind && current[key] === valueToMatch) {
            results.push({ path: newPath, value: current[key] });
          }

          recurse(current[key], newPath);
        }
      }
    }

    recurse(obj, "");
    return results;
  }
  private setValueAtPath(obj: any, path: string, newValue: any): boolean {
    const pathParts = path
      .replace(/\[(\w+)\]/g, '.$1') // [0] → .0
      .replace(/^\./, '') // ggf. führenden Punkt entfernen
      .split('.');

    let current = obj;

    for (let i = 0; i < pathParts.length - 1; i++) {
      const part = pathParts[i];

      if (!(part in current)) {
        // Pfad nicht vollständig vorhanden → abbrechen
        return false;
      }

      current = current[part];
      if (typeof current !== 'object' || current === null) {
        return false;
      }
    }

    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart in current) {
      current[lastPart] = newValue;
      return true;
    }

    return false;
  }

  private getValueAtPath(obj: any, path: string): any {
    const pathParts = path
      .replace(/\[(\w+)\]/g, '.$1') // [0] → .0
      .replace(/^\./, '') // evtl. führenden Punkt entfernen
      .split('.');

    let current = obj;

    for (const part of pathParts) {
      if (current == null || !(part in current)) {
        return undefined;
      }
      current = current[part];
    }

    return current;
  }
}
