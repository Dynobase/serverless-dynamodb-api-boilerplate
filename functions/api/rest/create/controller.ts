import { APIGatewayProxyEvent } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
import { uuid } from "uuidv4";
import { ThingModel } from "../../../../models/Thing";
import { Thing } from "./request_schema";

// Separated business logic with injectable documentClient for testing purposes
export const createController = async (
  event: APIGatewayProxyEvent,
  documentClient: DynamoDB.DocumentClient
) => {
  // Parse string to verified request schema model
  const input: Thing = JSON.parse(event.body);
  const item = {
    id: uuid(),
    status: 'OK',
    date_added: (+new Date()).toString(),
    name: input.name,
  };

  const params = ThingModel.put(item);

  console.log(params);

  const result = await documentClient.put(params).promise();

  return result.Attributes;
};
