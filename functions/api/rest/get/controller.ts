import { APIGatewayProxyEvent } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
import { ThingModel } from "../../../../models/Thing";

// Separated business logic with injectable documentClient for testing purposes
export const getController = async (
  event: APIGatewayProxyEvent,
  documentClient: DynamoDB.DocumentClient
) => {
  let item = {
    id: event.queryStringParameters.id,
    status: event.queryStringParameters.status,
    date_added: event.queryStringParameters.date_added,
  }
  
  const params = ThingModel.get(item)
  const response = await documentClient.get(params).promise()
  
  return ThingModel.parse(response);
};
