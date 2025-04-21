/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import IconWidget from "./IconWidget.vue";
import IconWidgetSettings from "./IconWidgetSettings.vue";
import { type WidgetRepository, identifier } from "org.eclipse.daanse.board.app.lib.repository.widget";
import Icon from "./assets/icon.svg";
import { Container } from 'inversify'

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

interface IIconSettings {
    currentIcon: string;
    iconColor: string;
    iconSize: number;
    isIconFilled: boolean;
    strokeWeight: number;
    opticSize: number;
    grade: number;
}

const register = (widgetRepository: WidgetRepository) => {
    widgetRepository.registerWidget("IconWidget", {
        component: IconWidget,
        settingsComponent: IconWidgetSettings,
        supportedDSTypes: [],
        icon: Icon,
    })
};

export default {
    IconWidget,
    IconWidgetSettings,
    init,
};

export type {
    IIconSettings
}
