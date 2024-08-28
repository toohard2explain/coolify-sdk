# TypeScript Coolify SDK (Unofficial)
> This SDK is currently in development and is not yet ready for use. 🚧

This is an unofficial SDK for the Coolify API. It is written in TypeScript and is intended to be used in Node.js applications.

It works with the RESTful API of Coolify, which is a platform for managing and monitoring your servers.
For more information about Coolify, visit their [website](https://coolify.io/).

And for more information about the Coolify API, visit their [API documentation](https://coolify.io/docs/api-reference).

## Installation

```bash
npm install coolify-typescript-sdk

# or

yarn add coolify-typescript-sdk

# or

pnpm add coolify-typescript-sdk  
```

## Usage

### Initialize the client

To initialize the client, you need to provide your API token and the options for the client.
To get your API token read the [official instructions](https://coolify.io/docs/api-reference/authorization).

```typescript
import { coolify } from 'coolify-typescript-sdk';

const token = process.env.COOLIFY_API_TOKEN; // set your token in the environment variables (recommended)

// or
// const token = "token123!";

const client = coolify(token, {
    host: "coolify.mydomain.co",
    secure: true // if https is used
});
```