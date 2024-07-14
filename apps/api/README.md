# Project Build Instructions

[deploy-badge]: https://github.com/TrySquadDF/readme-github/actions/workflows/deploy.yml/badge.svg

[![deploy-badge]]()

This document provides a comprehensive guide on how to build the project. The project is structured using Node.js and TypeScript, and it utilizes various npm scripts for building and managing the project lifecycle.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version 20 or later)
- pnpm (version 9 or later)

You can check your Node.js and npm versions by running:
```bash
node -v
pnpm -v
```

### Installation

To install the project dependencies, run the following command in the project root directory:
```bash
pnpm install
```

### Configuration

The project may require specific configurations to run correctly. Ensure you have the necessary configuration files in the project root directory.

#### Environment Variables

The project use environment variables for configuration. Create a `.env` file in the project root directory and add the required environment variables.

Example `.env` file:
```ini
GH_PERSONAL_ACCESS_TOKEN=ghp_access_token
GH_GRAPHQL_API_URL=https://api.github.com/graphql
ROOT_APP_PORT=3001
```

The **system** must also contain environment variables:

```ini
GH_PERSONAL_ACCESS_TOKEN=ghp_access_token
```

If other environment variables can be defined in the `.env` file then this variable will be needed to be defined in the system.
Because it`s used in the code generation process.

### Building the Project

To build your project, you need to execute the following commands in the root directory of your project [(Be sure to read the instructions for use of CLI)](../cli/README.md):
```bash
pnpm codegen
```

Command generates TypeScript types from the GraphQL schema and generates the necessary files for the project.

```bash
# Use from global root directory
pnpm build:assets
```

Command copies the necessary assets to the build directory.

```bash
pnpm build
```

Use this command to build the project. The build artifacts will be stored in the `dist/` directory.

