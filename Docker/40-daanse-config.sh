#!/bin/sh
#*******************************************************************************
# Copyright (c) 2026 Contributors to the Eclipse Foundation
#
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
#
# SPDX-License-Identifier: EPL-2.0
#*******************************************************************************

# Chooses the config.json this container serves.
#
# The image is built once and configured where it runs: the app reads
# /config.json at start, so a deployment differs by that file alone.
#
#   DAANSE_PROFILE=dev|staging|prod  serve /etc/daanse/profiles/<name>.config.json
#   DAANSE_CONFIG_FILE=/path         serve that file instead (e.g. a mounted one)
#
# Any ${DAANSE_...} in the chosen file is replaced by the variable of that
# name. Only DAANSE_ variables are replaced, so the file may contain other
# dollar signs untouched.
#
# With neither set, the file the image was built with (the prod profile)
# stays as it is - and so does a config.json mounted over it.

set -eu

target=/usr/share/nginx/html/config.json

if [ -n "${DAANSE_CONFIG_FILE:-}" ]; then
  source_file="$DAANSE_CONFIG_FILE"
elif [ -n "${DAANSE_PROFILE:-}" ]; then
  source_file="/etc/daanse/profiles/${DAANSE_PROFILE}.config.json"
else
  exit 0
fi

if [ ! -f "$source_file" ]; then
  echo "daanse: no configuration at $source_file" >&2
  exit 1
fi

variables=$(env | sed -n 's/^\(DAANSE_[A-Za-z0-9_]*\)=.*/${\1}/p' | tr '\n' ' ')
envsubst "$variables" < "$source_file" > "$target"
echo "daanse: serving config.json from $source_file"
