/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/*
 * three 0.134 brings no types, and the workspace has none (the vanta
 * widget declares it the same way). Only what the model layer uses is
 * declared, loosely; the model layer keeps its use of three small.
 */
declare module 'three' {
  const three: any
  export = three
}
declare module 'three/examples/jsm/loaders/FBXLoader.js' {
  export const FBXLoader: any
}
declare module 'three/examples/jsm/loaders/GLTFLoader.js' {
  export const GLTFLoader: any
}
