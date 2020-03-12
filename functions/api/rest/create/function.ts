import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { uuid } from 'uuidv4';
import { httpResponse } from '../../../../utils/responses';
import { ThingModel } from '../../../../repositories/dynamodb/models/Thing';
import { documentClient } from '../../../../repositories/dynamodb/DynamoDB';

export const handle: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event);
  
  const item = {
    id: uuid(),
  };

  const params = ThingModel.put(item);
  const result = await documentClient.put(params).promise()
  
  return httpResponse(result.Attributes);
}
