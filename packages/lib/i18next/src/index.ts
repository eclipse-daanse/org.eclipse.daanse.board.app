/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/
import i18next from "i18next";
import type {i18n} from "i18next";
import  { container } from 'org.eclipse.daanse.board.app.lib.core';
/** Dienst-ID im Namensraum der ServiceRegistry; `symbolForI18n` ist das dazu passende Symbol. */
const I18NEXT = 'I18next'

const symbolForI18n = Symbol.for(I18NEXT)


if (!container.isBound(symbolForI18n)) {
  i18next.init({fallbackLng: 'en', resources: {}});
  container.bind<i18n>(symbolForI18n).toConstantValue(i18next);
  console.log('initilaized i18n')
}
export {
  symbolForI18n,
  i18n, I18NEXT }
