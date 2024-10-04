# ReAQCT - Frontend

## Contacts

- Szabolcs Joczik (joczikszabi@gmail.com): Lead Developer.

## Prerequisites

Ensure the following tools are installed in your local environment, as they are essential for development:

- [Docker](https://docker.com) - For running the services in a containerized environment. If devcontainer is used for development (recommended), no other dependencies are needed to be installed locally (more about devcontainers in [Devcontainers](#devcontainers)).

**Local development without devcontainer**\
If devcontainer is not used for development, the following packages have to be installed locally:

- [Node.js](https://nodejs.org/en) - Required for development, along with npm for package management (recommended v20.10).
- [Astro](https://docs.astro.build/en/install-and-setup/) - Framework used for developing the website.

**Additional dependencies**\
The following dependencies are optional and not needed for development:

- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) - The Azure Command-Line Interface (CLI) is a cross-platform command-line tool to connect to Azure and execute administrative commands on Azure resources. It allows the execution of commands through a terminal using interactive command-line prompts or a script.

**CI/CD Secrets**\
In order for the CI/CD pipeline to work, configure the following secrets in `GitHub / Settings / Secrets and Variables / Actions`:

- **DOCKER_IMAGE_WITH_TAG**: Name of your docker image (e.g., [projectname]-core-service:latest, reaqct-frontend-service:latest)
- **AZURE_ACR_URL_PROD**: Azure container registry URL (production).
- **AZURE_ACR_USERNAME_PROD**: Azure ACR admin username (production).
- **AZURE_ACR_PASSWORD_PROD**: Azure ACR admin password (production).

## How to Use

All commands are run from the root of the project, from a terminal.
First, install the necessary dependencies by running:

```bash
npm install
```

To start the service, use the following command:

```bash
npm run start
```

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Development Workflow

### Devcontainers

Devcontainers are pre-configured development environments defined using Docker containers (see `.devcontainer/`). They ensure consistent tooling and dependencies across different development machines, enhancing collaboration and reproducibility. See [Developing inside a Container](https://code.visualstudio.com/docs/devcontainers/containers) for more information about devcontainers.

**To Start Devcontainers in VSCode:**

1. Install the [Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VSCode.
2. Open the project in VSCode.
3. Click on the green bottom-left corner of the VSCode window and select "Reopen in Container". This will build and start the devcontainer defined in `.devcontainer/devcontainer.json`.

**If new global dependencies are used, please track it by updating the Dockerfile (`.devcontainer/Dockerfile`).**

### Issue Tracking and Branch Management

For issue tracking and branch management, please use the following recommendations:

- For creating issues and tracking progress, use the project's [issue board](https://github.com/joczikszabi/reaqct-24-astro/issues).
- Direct pushes to the `develop` or `main` branches are restricted. Always use pull requests and assign at least on other reviewer.
- For simplicity and tracking, create branches directly from issues with the 'Create a branch' button.
- Prefix branch names according to their purpose with one of the following labels:
  - feat/[branch-name] for new features and functionalities
  - fix/[branch-name] for bugfixes
  - docs/[branch-name] for documentation
  - ci/[branch-name] for pipeline
  - test/[branch-name] for testing
  - task/[branch-name] for everything else

**Azure Key Vault is prioritized over .env.** Therefore, when using the same environment variable names in both .env and Azure Key Vault, the values from Azure Key Vault will override those in .env.

### CI/CD Pipelines

Three different pipelines are configured, triggered by the following actions:

- **Every Pull Request**: Triggers the pipeline stages: Lint, Test, and Build Docker Image.
- **Merging branch to `develop`**: Merging into the `develop` branch deploys the built image to Azure Container Registry (ACR) in the development environment.
- **Merging `develop` to `main`**: Merging `develop` into the `main` branch deploys the built image to Azure Container Registry (ACR) in the production environment.

### Docker Commands

To build and run Docker containers, use the following commands:

```bash
docker build -t reaqct/reaqct-website-frontend:latest -f ./docker/Dockerfile .
docker run -it -p 3000:8080 -d --restart=always reaqct/reaqct-website-frontend:latest
```

Other useful commands:

```bash
docker exec -it [CONTAINER ID] sh // Logging in a running docker container
docker logs [CONTAINER ID] // Checking the logs of a running docker container
```

### Push to Azure Container Registry

It can be useful sometimes to manually push an image to Azure ACR which can be done using the following commands. Make sure your account has the neccesary rights in Azure for pushing to ACR.

```bash
az acr login --name reaqctacrwep // login to Azure ACR (needs to be done once)
docker tag reaqct/reaqct-website-frontend:latest reaqctacrwep.azurecr.io/reaqct-website-frontend:latest // Assuming the docker image has been built previously (see [Docker Commands](#docker-commands))
docker push reaqctacrwep.azurecr.io/reaqct-website-frontend:latest
```

## Release Process

The release process is automated and triggered when merging the `develop` branch into the `main` branch. It pushes the Docker image to Azure ACR, built in the previous steps, with two separate tags:

- `:latest`: Triggers the linked webhooks and automatically deploys to the corresponding Web App.
- `:[version-number]`: For archiving purposes.\

In the second case, the version number is automatically fetched during the deployment stage from the `package.json` file. **Therefore, ensure the version number is up-to-date.**

## Best Practices

The following section outlines the best practices and conventions used in the project.

### Testing Locally First

Ensure all tests pass locally and run linting tools before pushing changes:

```bash
npm run lint  // Checks and fixes eslint and prettier issues
npm run test  // Runs tests and generates report under /coverage
```

### Naming Conventions

Follow these naming conventions in the project:

- **Packages, folders, and files**: Use kebab-case (e.g., `users-example.controller.ts`)
- **Constants and enums**: Use UPPER_SNAKE_CASE (e.g., `SERIAL_NUMBER_FOR_DEVICE`)
- **Functions, parameters, variables**: Use lowerCamelCase (e.g., `publishDeviceData(dataReceived: string)`)
- **Classes**: Use UpperCamelCase (e.g., `RawClientMqtt`)
- **Booleans**: Prefix with `is` or `has` (e.g., `hasLoggedIn`, `isAdmin`)
