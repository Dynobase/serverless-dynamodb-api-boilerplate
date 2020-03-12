// Example: node scripts/provisionTable.js --table datastore-local --region local --endpoint http://localhost:8000

const fs = require("fs");
const path = require("path");
const YAML = require("js-yaml");
const AWS = require("aws-sdk");
const argv = require('minimist')(process.argv.slice(2));

if (!argv.table || !argv.region) {
  throw new Error('Invalid arguments!');
}

const ddb = new AWS.DynamoDB({
  apiVersion: "2012-08-10",
  region: argv.region,
  endpoint: argv.endpoint ? argv.endpoint : undefined
});

const tableParams = YAML.safeLoad(
  fs.readFileSync(
    path.join(__dirname, "..", "infra", "dynamodb", "single-table-data-store.yml"),
    "utf8"
  )
);

ddb
  .createTable(
    {
      ...tableParams.Resources.SingleTableDesignDynamoDBTable.Properties,
      TableName: argv.table
    })
  .promise()
  .then(console.log)
  .catch(console.error);
