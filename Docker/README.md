Certainly! Here is the updated `README.md` in English for your Docker image:

---

# Eclipse Daanse - Board

**Eclipse Daanse - Board** is a web client-only analysis, dashboarding, and reporting platform for analyzing data. This Docker image allows you to easily deploy the application in a containerized environment.

## Overview

This image is based on the official [`nginxinc/nginx-unprivileged:alpine-slim`](https://hub.docker.com/r/nginxinc/nginx-unprivileged) and is configured to expose port **8080**. Nginx runs as a non-root user to enhance security.

## Features

- **Application**: Eclipse Daanse - Board
- **Image Name**: `eclipsedaanse/board`
- **Base Image**: `nginxinc/nginx-unprivileged:alpine-slim`
- **Security**: Nginx runs as an unprivileged user
- **Lightweight**: Uses the slim version of Alpine Linux
- **Exposed Port**: Port **8080** is used for HTTP traffic
- **Supported OS/Architectures**:

  - `linux/386`
  - `linux/amd64`
  - `linux/arm/v7`
  - `linux/arm/v8`
  - `linux/arm64`

## How to Use This Image

### Pulling the Image

To pull the image from Docker Hub:

```bash
docker pull eclipsedaanse/board
```

### Running a Container

Run a container using this image with the following command:

```bash
docker run -d -p 8080:8080 eclipsedaanse/board
```

This maps port **8080** of the container to port **8080** on your host machine.

## Exposed Port

- **8080**: The default port where Nginx listens for HTTP connections.

## Supported OS/Architectures

This image supports multiple operating systems and architectures:

- `linux/386`
- `linux/amd64`
- `linux/arm/v7`
- `linux/arm/v8`
- `linux/arm64`

## Security Considerations

- **Unprivileged User**: Nginx runs as a non-root user (`nginx`), reducing security risks.
- **Read-Only Volumes**: It is recommended to mount volumes as read-only (`:ro`) to prevent changes from within the container.

## Additional Resources

- [Eclipse Daanse - Board Documentation](www.daanse.org)
- [Nginx Unprivileged GitHub Repository](https://github.com/nginxinc/docker-nginx-unprivileged)
