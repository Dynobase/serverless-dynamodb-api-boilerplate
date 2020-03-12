import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { Model } from 'dynamodb-toolbox';

export const handle: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}
