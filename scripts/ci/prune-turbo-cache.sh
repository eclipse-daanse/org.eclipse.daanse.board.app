#!/usr/bin/env bash
#
# Copyright (c) 2026 Contributors to the Eclipse Foundation.
#
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
#
# SPDX-License-Identifier: EPL-2.0
#
# Contributors:
#   Smart City Jena
#
# Leaves in .turbo/cache only the entries the turbo runs of this job used,
# as named by their summaries (--summarize, in .turbo/runs). The CI keeps
# the cache from run to run; without this it would keep every output any
# run ever made.
set -euo pipefail

cache=.turbo/cache
[ -d "$cache" ] || exit 0
compgen -G '.turbo/runs/*.json' > /dev/null || { echo 'No turbo run summary - nothing pruned'; exit 0; }

keep=$(jq -r '.tasks[].hash' .turbo/runs/*.json | sort -u)
removed=0
for file in "$cache"/*; do
  [ -f "$file" ] || continue
  name=$(basename "$file")
  hash=${name%%[.-]*}
  if ! grep -qxF "$hash" <<< "$keep"; then
    rm -f "$file"
    removed=$((removed + 1))
  fi
done
echo "Pruned $removed file(s); kept $(find "$cache" -type f | wc -l), $(du -sh "$cache" | cut -f1)"
