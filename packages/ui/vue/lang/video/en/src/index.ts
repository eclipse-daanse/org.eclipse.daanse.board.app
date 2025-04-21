/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Container } from "inversify";
import {symbolForI18n} from "org.eclipse.daanse.board.app.lib.i18next";
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next";
import en from "./lang/en.json";

const init = (container: Container) => {
  const i18n = container.get<i18n>(symbolForI18n);
  i18n.addResourceBundle('en', 'video', en);
}

export {
  init
}
