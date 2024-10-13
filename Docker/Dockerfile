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
COPY dist /usr/share/nginx/html

# export port 8080
EXPOSE 8080

# start nginx
CMD ["nginx", "-g", "daemon off;"]

