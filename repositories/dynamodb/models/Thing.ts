import { Model } from "dynamodb-toolbox";
import getTableName from "../../../utils/consts";

export const ThingModel = new Model("Thing", {
  // Specify table name
  table: getTableName(),

  // Define partition and sort keys
  partitionKey: "pk",
  sortKey: "sk",

  // Define schema
  schema: {
    pk: { type: "string", alias: "id" },
    sk: { type: "string", hidden: true },
    data: { type: "string", alias: "name" },
    status: ["sk", 0], // composite key mapping
    date_added: ["sk", 1] // composite key mapping
  }
});
