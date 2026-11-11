# Eclipse Daanse - Board

**Eclipse Daanse - Board** is a web client-only analysis, dashboarding, and reporting platform for analyzing data. This Docker image allows you to
easily deploy the application in a containerized environment.

## Overview

This image is based on the official [`nginxinc/nginx-unprivileged:alpine-slim`](https://hub.docker.com/r/nginxinc/nginx-unprivileged) and is
configured to expose port **8080**. Nginx runs as a non-root user to enhance security.

## Features

- **Application**: Eclipse Daanse - Board
- **Image Name**: `eclipsedaanse/board`
- **Base Image**: `nginxinc/nginx-unprivileged:alpine-slim`
- **Security**: Nginx runs as an unprivileged user
- **Lightweight**: Uses the slim version of Alpine Linux
- **Exposed Port**: Port **8080** is used for HTTP traffic
- **Supported OS/Architectures**:

  - `linux/amd64`
  - `linux/arm64`

## How to Use This Image

### Pulling the Image

To pull the image from Docker Hub:

```bash
docker pull eclipsedaanse/board
```

### Tags

| Tag | What it is | Kept |
| --- | --- | --- |
| `latest` | The newest release | For good |
| `X.Y.Z` | A release | For good |
| `main` | The newest build of `main` | Moves with every merge |
| `sha-<commit>` | One build of `main` (ghcr.io only) | 30 days |

### Running a Container

Run a container using this image with the following command:

```bash
docker run -d -p 8080:8080 eclipsedaanse/board
```

This maps port **8080** of the container to port **8080** on your host machine.

## Board or Workbench

One Dockerfile builds two images, chosen by the build argument `APP`:

| `APP` | Serves | Bundles |
| --- | --- | --- |
| `board` (default) | The board at `/`, the MDX workbench at `/workbench` | All of them |
| `workbench` | The MDX workbench alone, at `/` | Only those the workbench needs |

Each one is built from its own browser build. In `packages/app/default`, `yarn build:prod` writes `dist-board/` and `yarn build:prod:workbench` writes `dist-workbench/`. Run `VITE_APP=workbench yarn bundles` first to build only the workbench's bundles. Then, from the repository root:

```bash
docker build -f Docker/Dockerfile -t board .
docker build -f Docker/Dockerfile --build-arg APP=workbench -t workbench .
```

Only the board image is published for now.

## Configuration Profiles

The image is built once and configured where it runs. The board reads `/config.json` when it starts, so deployments differ by that file alone.

The image carries three profiles under `/etc/daanse/profiles/`: `dev`, `staging` and `prod`. It serves `prod` unless told otherwise. They come from `Docker/profiles/<app>/`. The workbench reads `extraBundles` alone, so its profiles hold nothing else.

| Variable | Effect |
| --- | --- |
| `DAANSE_PROFILE` | Serve `/etc/daanse/profiles/<name>.config.json`, e.g. `staging`. |
| `DAANSE_CONFIG_FILE` | Serve this file instead, e.g. one mounted into the container. |
| `DAANSE_*` | Replaces `${DAANSE_...}` of the same name in the chosen file. |

```bash
docker run -d -p 8080:8080 -e DAANSE_PROFILE=staging eclipsedaanse/board
```

A template with placeholders, mounted and filled at start:

```bash
docker run -d -p 8080:8080 \
  -v ./my.config.json:/etc/daanse/my.config.json:ro \
  -e DAANSE_CONFIG_FILE=/etc/daanse/my.config.json \
  -e DAANSE_GIT_URL=https://example.org/boards.git \
  eclipsedaanse/board
```

Mounting a finished file straight over `/usr/share/nginx/html/config.json` works as well, as long as neither variable above is set.

## Software Bill of Materials

Every image carries an SPDX SBOM and its build provenance as registry attestations:

```bash
docker buildx imagetools inspect ghcr.io/eclipse-daanse/board:latest --format '{{ json .SBOM }}'
```

A release (tag `vX.Y.Z`) also gets two CycloneDX 1.6 SBOMs as assets of its GitHub Release: `sbom-source.cdx.json` (every package in `yarn.lock`) and `sbom-image.cdx.json` (the image's Alpine packages and served files). The image SBOM is attested on the image in ghcr.io:

```bash
gh attestation verify oci://ghcr.io/eclipse-daanse/board:X.Y.Z \
  --owner eclipse-daanse --predicate-type https://cyclonedx.org/bom
```

## Exposed Port

- **8080**: The default port where Nginx listens for HTTP connections.

## Supported OS/Architectures

This image supports multiple operating systems and architectures:

- `linux/amd64`
- `linux/arm64`

## Security Considerations

- **Unprivileged User**: Nginx runs as a non-root user (`nginx`), reducing security risks.
- **Read-Only Volumes**: It is recommended to mount volumes as read-only (`:ro`) to prevent changes from within the container.

## Additional Resources

- [Eclipse Daanse - Board Documentation](www.daanse.org)
- [Nginx Unprivileged GitHub Repository](https://github.com/nginxinc/docker-nginx-unprivileged)
