
**Project Name**

The project is a practice demonstration of utilization & setup of a `GraphQL` service with `Node.js` & `Typescript`.

For database I have used `postgresql` & `pgadmin` with `docker` to set it up on local alongside `prisma ORM` for type support.

---

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Available Scripts](#available-scripts)
* [Docker Setup](#docker-setup)

  * [PostgreSQL Service](#postgresql-service)
  * [pgAdmin Service](#pgadmin-service)
* [Environment Variables](#environment-variables)
* [Usage](#usage)
* [License](#license)

---

## Prerequisites

* [Node.js](https://nodejs.org/en/) (v14+)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-org/your-repo.git
   cd your-repo
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

---

## Available Scripts

In the project directory, you can run:

| Script                     | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| `npm run compile`          | Transpile TypeScript to JavaScript using `tsc`.                                           |
| `npm run compile:build`    | Transpile with the `tsconfig.build.json` settings (e.g. for production builds).           |
| `npm run start`            | Run `compile` then execute the compiled output `./dist/index.js`.                         |
| `npm run serve`            | Start the application in development mode with `nodemon` (auto-restarts on file changes). |
| `npm run codegen:generate` | Generate GraphQL types and artifacts via GraphQL Code Generator.                          |
| `npm run prisma:generate`  | Generate Prisma Client from your schema.                                                  |
| `npm run prisma:migrate`   | Apply Prisma schema migrations to the database (`migrate dev`).                           |

---

## Docker Setup

We use Docker Compose to spin up a local PostgreSQL database and pgAdmin for database management. Yaml file can be found in the root folder.

### PostgreSQL Service

* **Image**: `postgres:15`
* **Ports**: Exposes container port `5432` on host `5432`.
* **Environment**:

  * `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` are injected from your `.env` file.
* **Volumes**: Persists data in a Docker volume `db-data` to maintain state across restarts.

### pgAdmin Service

* **Image**: `dpage/pgadmin4:latest`
* **Ports**: Exposes container port `80` on host `8080`.
* **Environment**:

  * `PGADMIN_DEFAULT_EMAIL`, `PGADMIN_DEFAULT_PASSWORD` are set via `.env` for initial login.
* **Volumes**: Stores pgAdmin configuration in `pgadmin-data`.
* **Depends On**: Waits for the `db` service to be healthy before starting.

---

## Environment Variables

Create a `.env` file in the project root with the following values:

```dotenv
# Database (PostgreSQL)
DB_USER=your_db_username
DB_PASS=your_db_password
DB_NAME=your_db_name

# pgAdmin
PG_ADMIN_EMAIL=admin@example.com
PG_ADMIN_PASSWORD=securepassword

DATABASE_URL=postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public
```

---

## Usage

1. Start Docker services:

   ```bash
   docker-compose up -d
   ```
2. Ensure your `.env` is loaded, then run migrations:

   ```bash
   npm run prisma:migrate
   ```
3. Generate clients and code:

   ```bash
   npm run prisma:generate // generates prisma based typescript support from tables
   npm run codegen:generate // generates typescript interfaces/types for all queries/mutations
   ```
4. Start the server:

   ```bash
   npm run serve
   ```
5. Access pgAdmin at [http://localhost:8080](http://localhost:8080) to manage your database.

---

