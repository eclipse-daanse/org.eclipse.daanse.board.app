#!/bin/bash

# Copyright (c) 2023 Contributors to the  Eclipse Foundation.
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
# SPDX-License-Identifier: EPL-2.0
#
# Contributors: Smart City Jena
set -e

echo "Building dependencies for Maps Widget E2E tests..."

# Build lib/annotations
echo "Building lib/annotations..."
cd ../../lib/annotations
yarn build

# Build lib/datasource/ogcsta
echo "Building lib/datasource/ogcsta..."
cd ../datasource/ogcsta
yarn build

# Build ui/vue/composables
echo "Building ui/vue/composables..."
cd ../../../ui/vue/composables
yarn build

# Build ui/vue/widget/icon
echo "Building ui/vue/widget/icon..."
cd ../widget/icon
yarn build

# Back to map widget
cd ../map

echo "All dependencies built successfully!"
