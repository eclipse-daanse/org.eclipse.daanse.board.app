/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { injectable, inject } from '@eclipse-daanse/tsm'
import { VariableWrapper, VARIABLEWRAPPER } from 'org.eclipse.daanse.board.app.lib.variables'
import { VARIABLE_REPOSITORY, identifier as IDVariableRepo,VariableRepository } from 'org.eclipse.daanse.board.app.lib.api.variable'
type SearchResult = {
  path: string;
  value: any;
};

/*
 * A wrapper has been stored two ways, and boards written either way still
 * have to open.
 *
 * Before it was an EObject, JSON.stringify wrote out its plain fields, so
 * the value arrived under the private name `_value` and the bound variable
 * as a whole nested object under `reference`. As an EObject it is written
 * by toJSON, which names the value `value` and keeps only the variable's
 * name - in `variable`, which is what the model says that field is for and
 * which the old shape carried alongside `reference` anyway.
 */

/** The stored value, under whichever name the state was written with. */
function storedValue(held: any): any {
  return held?._value !== undefined ? held._value : held?.value
}

/** The bound variable's name, however the state recorded it. */
function boundVariableName(held: any): string | undefined {
  return held?.variable ?? held?.reference?.name ?? undefined
}

/**
 * Beschreibt einen zusaetzlichen Wrapper-Typ, den die Factory beim Laden
 * eines Boards wiederherstellen kann.
 *
 * Ueber diese Registrierung bleiben Wrapper, die an ein UI-Framework
 * gebunden sind, ausserhalb von lib - die Factory kennt nur den Vertrag.
 */
export interface WrapperTypeI {
  /** Wert des 'type'-Feldes im serialisierten JSON */
  readonly type: string;
  /** Erzeugt die Laufzeitinstanz aus dem serialisierten Wert */
  create(value: any): any;
}

@injectable()
export class VariableWrapperFactory {
  private readonly wrapperTypes = new Map<string, WrapperTypeI>()

  constructor(@inject(VARIABLE_REPOSITORY) private variables: VariableRepository) {
  }

  /**
   * Registriert einen zusaetzlichen Wrapper-Typ. Eine erneute Registrierung
   * desselben Typs ersetzt die vorherige.
   */
  registerWrapperType(wrapperType: WrapperTypeI): void {
    this.wrapperTypes.set(wrapperType.type, wrapperType)
  }

  initilazeVariableWrappers(json:any) {
    const results = this.findPropertyWithValue(json,'type',VARIABLEWRAPPER)
    if (results) {
      for(const result of results) {
        const short = result.path.split('.');
        short.pop();
        const upperPath = short.join('.');
        const originalValue = this.getValueAtPath(json,short.join('.'))
        const held = storedValue(originalValue)
        if(held !== undefined && held !== null){
          const var1 = new VariableWrapper(held);
          const name = boundVariableName(originalValue)
          if(name){
            const ref = this.variables.getVariable(name)
            var1.setTo(ref);
          }
          this.setValueAtPath(json,upperPath,var1)
        }
      }
    }

    for (const wrapperType of this.wrapperTypes.values()) {
      const typeResults = this.findPropertyWithValue(json, 'type', wrapperType.type)
      if (!typeResults) continue

      for (const result of typeResults) {
        const short = result.path.split('.');
        short.pop();
        const upperPath = short.join('.');
        const originalValue = this.getValueAtPath(json, short.join('.'))
        const held = storedValue(originalValue)
        if (held !== undefined && held !== null) {
          this.setValueAtPath(json, upperPath, wrapperType.create(held))
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
