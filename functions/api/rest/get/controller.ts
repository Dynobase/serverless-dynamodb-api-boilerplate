import { APIGatewayProxyEvent } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
import { ThingModel } from "../../../../models/Thing";
import { Thing } from "./request_schema";

// Separated business logic with injectable documentClient for testing purposes
export const getController = async (
  event: APIGatewayProxyEvent,
  documentClient: DynamoDB.DocumentClient
) => {
  // Parse string to verified request schema model
  const input: Thing = JSON.parse(event.body);
  let item = {
    id: 123,
    status: 'active',
    date_added: '2019-11-28'
  }
  
  // Use the 'get' method of MyModel to generate parameters
  let params = ThingModel.get(item)
  
  // Pass the parameters to the DocumentClient's `get` method
  let response = await documentClient.get(params).promise()
  
  return ThingModel.parse(response);
};
