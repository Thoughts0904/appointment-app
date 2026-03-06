Capstone Project: Dockerized 3-Tier Web App with GitHub CI/CD

Project Overview
This repository contains the configuration, source code, and deployment files for a complete three-tier web application. The project demonstrates containerization using Docker and automated deployment workflows.

Objective
To design and build a three-tier application (frontend + backend + database) using Docker, and to integrate the build and deployment process with GitHub.

Tasks Completed
According to the project requirements, the following tasks have been implemented:
Created `Dockerfiles` for both the frontend and backend services.
Containerized both application components using separate Dockerfiles.
Created a `docker-compose.yml` file to seamlessly run the three services (Frontend, Backend, and Database) together.
Pushed both built images to Docker Hub using explicitly tagged versions.
Provisioned a Linux VM to deploy the containers and exposed them for external consumption.

Deliverables Included
`Dockerfile` (Frontend)
`Dockerfile` (Backend)
`docker-compose.yml`
`README.md` (This document)
Screenshots/logs of the successful deployment (Stored in the `/docs` or `/images` folder)

Deployment Instructions

1. Running Locally (Docker Compose)
To spin up the entire 3-tier architecture on your local machine, ensure Docker is installed and run:
```bash
docker-compose up -d
