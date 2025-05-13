/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/
export interface Filter {
}

export interface Format extends Filter {
  formats: Formats[],
}

export interface MapSection extends Filter {
  mapSection: {
    '_southWest': {
      'lat': number,
      'lng': number
    },
    '_northEast': {
      'lat': number,
      'lng': number
    }
  }
}

export enum Formats {
  XMLA = '<http://publications.europa.eu/resource/authority/file-type/XMLA>',
  CSV = '<http://publications.europa.eu/resource/authority/file-type/CSV>',
  XML = '<http://publications.europa.eu/resource/authority/file-type/XML>',
  WMS = '<http://publications.europa.eu/resource/authority/file-type/WMS_SRVC>',
  WFS = '<http://publications.europa.eu/resource/authority/file-type/WFS_SRVC>',
  GEOJSON = '<http://publications.europa.eu/resource/authority/file-type/GEOJSON>',
  JSON = '<http://publications.europa.eu/resource/authority/file-type/JSON>',
  REST = '<http://publications.europa.eu/resource/authority/file-type/REST>',
  OGCSTA = '???'
}
