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

/**
 * The app's standard controls, built on the design tokens.
 *
 * They exist so that a control belongs to whatever theme is active without
 * anyone having to override a third-party palette. Every colour, size and
 * radius comes from a token; none of them knows that themes exist.
 *
 * Conventions, kept the same across all of them so a form is a column of
 * identical rows:
 *
 *   - a field is `.field` > `.field__label` + `.field__control`, with the
 *     message below the control (the shape EMFTs' uimodel-composer uses,
 *     so a form rendered from a UI model and one written by hand look the
 *     same)
 *   - sizes are `sm` | `md` | `lg`, and the heights line up across
 *     controls: a button next to an input ends at the same pixel
 *   - state travels as `disabled`, `readonly`, `required`, `error`
 *   - keyboard focus is always visible, and every control can be reached
 *     and operated without a pointer
 *
 * Native elements are used wherever the browser already does the work -
 * select, date, colour. Rebuilding a listbox means rebuilding its keyboard
 * handling, its type-ahead and its behaviour on touch, and doing all three
 * worse.
 */

import DButton from './DButton.vue'
import DCard from './DCard.vue'
import DCheckbox from './DCheckbox.vue'
import DChip from './DChip.vue'
import DColorInput from './DColorInput.vue'
import DDateInput from './DDateInput.vue'
import DDivider from './DDivider.vue'
import DField from './DField.vue'
import DFloatingWindow from './DFloatingWindow.vue'
import DIcon from './DIcon.vue'
import DInput from './DInput.vue'
import DModal from './DModal.vue'
import DRadioGroup from './DRadioGroup.vue'
import DSelect from './DSelect.vue'
import DSlider from './DSlider.vue'
import DSwitch from './DSwitch.vue'
import DTabs from './DTabs.vue'

export {
  DButton,
  DCard,
  DCheckbox,
  DChip,
  DColorInput,
  DDateInput,
  DDivider,
  DField,
  DFloatingWindow,
  DIcon,
  DInput,
  DModal,
  DRadioGroup,
  DSelect,
  DSlider,
  DSwitch,
  DTabs,
}

/** Every control, for registering them all at once. */
export const CONTROLS = {
  DButton,
  DCard,
  DCheckbox,
  DChip,
  DColorInput,
  DDateInput,
  DDivider,
  DField,
  DFloatingWindow,
  DIcon,
  DInput,
  DModal,
  DRadioGroup,
  DSelect,
  DSlider,
  DSwitch,
  DTabs,
}
