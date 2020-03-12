import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { uuid } from 'uuidv4';

import { httpResponse } from '../../../../utils/responses';
import { documentClient } from '../../../../services/DynamoDB';
import { ThingModel } from '../../../../models/Thing';

export const handle: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event);
  
  const item = {
    id: uuid(),
  };

  const params = ThingModel.put(item);
  const result = await documentClient.put(params).promise()
  
  return httpResponse(result.Attributes);
}
