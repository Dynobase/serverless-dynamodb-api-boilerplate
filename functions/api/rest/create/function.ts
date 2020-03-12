import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { Model } from 'dynamodb-toolbox';
import { httpResponse } from '../../../../utils/responses';

export const handle: APIGatewayProxyHandler = async (event, _context) => {
  return httpResponse('Hello!');
}
