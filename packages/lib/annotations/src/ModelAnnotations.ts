/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import "reflect-metadata";

// Define a decorator
export function Attribute() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("Attribute", true, target, propertyKey);
  };
}

export function Reference(type: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("Reference", type, target, propertyKey);
  };
}

export function Enum(type: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("Enum", type, target, propertyKey);
  };
}

export function ModelClass(attr: {type: string}) {
  return function (target: any) {
    Reflect.defineMetadata("ModelClass", attr, target, "modelClass");
  };
}

export function Documentation(type: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("Documentation", type, target, propertyKey);
  };
}
