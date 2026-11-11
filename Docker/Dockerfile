#*******************************************************************************
# Copyright (c)  2024 Contributors to the Eclipse Foundation
#
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
#
# SPDX-License-Identifier: EPL-2.0
#
#   Contributors:
#     Markus Hochstein (Company) - initial setup
#     Stefan Bischof (Company) - initial setup
#*******************************************************************************

# use nginx base image
FROM nginxinc/nginx-unprivileged:alpine-slim

# add nginx config
COPY Docker/nginx.conf /etc/nginx/nginx.conf

# add application artifact
COPY packages/app/default/dist /usr/share/nginx/html

# The profiles a container can be started with (see Docker/README.md). The
# image serves prod unless told otherwise; config.json belongs to the nginx
# user so that the start script can write the chosen profile into it.
COPY Docker/profiles /etc/daanse/profiles
COPY --chown=101:101 Docker/profiles/prod.config.json /usr/share/nginx/html/config.json
COPY --chmod=755 Docker/40-daanse-config.sh /docker-entrypoint.d/40-daanse-config.sh

# export port 8080
EXPOSE 8080

# start nginx
CMD ["nginx", "-g", "daemon off;"]
