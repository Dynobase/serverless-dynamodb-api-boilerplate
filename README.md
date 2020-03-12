# Serverless DynamoDB API Boilerplate

Kickstart your Cloud-native and Serverless project in minutes. **This is work in progress**

***

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

## About

This repository is a result of many lessons from launching variety of Serverless powered applications to the production. It was created according to many best practices and aims to provide developers a rapid start while also being production-ready.

## Features

- **Written in Typescript**, compiled by Webpack using [Serverless Webpack](https://github.com/serverless-heaven/serverless-webpack) plugin. Optimized for huge projects where Out of Memory errors are frequent
- **Works fully offline** thanks to [Serverless Offline](https://github.com/dherault/serverless-offline) and DynamoDB Local ran using Docker Compose
- **Easibly Testable** using Jest
- **Interacts with DynamoDB** using [DocumentClient](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html) and [DynamoDB Toolbox](http://dynamodbtoolbox.com/)
- **Works with both REST and GraphQL**
- **Managable** - To avoid spaghetti code, `serverless.yml` is divided into logical parts. Functions' code is placed next to their definitions
- **CORS by default** - allows preflight requests to the resource using the OPTIONS method.

## Quick start

Prerequisites:
- [Serverless Framework](https://serverless.com/)
- Node.js
- Git

Start by pulling this repo using `git`:

```
git clone https://github.com/Dynobase/serverless-dynamodb-api-boilerplate
```

Or using Serverless Framework:

```
serverless create --template-url https://github.com/Dynobase/serverless-dynamodb-api-boilerplate --path myService
```

Once ready, install dependencies:

```sh
yarn
```

After that, start the project locally:
```sh
docker-compose up -d # To start DynamoDB local

yarn provision-local-table # To provision DynamoDB table locally

yarn dev

# Add item to the table
curl --location --request GET 'localhost:3000/' \
--header 'Content-Type: text/plain' \
--data-raw '{ "name":"John Doe" }'
```

## Deploying

...

## <a name="contributing"></a>Contributing

Contributions are more than welcome.

## <a name="licensing"></a>Licensing

This project is licensed under the [MIT License](./LICENSE.txt).

