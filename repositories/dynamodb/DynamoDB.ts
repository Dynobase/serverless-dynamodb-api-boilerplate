import * as AWSXRay from "aws-xray-sdk";
import { DynamoDB } from "aws-sdk";
import { getEndpoint, getRegion } from "../../utils/consts";

export const documentClient = new DynamoDB.DocumentClient({
  service: new DynamoDB({
    endpoint: getEndpoint(),
    region: getRegion()
  })
});

// Capture X-Ray traces only on AWS Lambda
if (process.env.AWS_EXECUTION_ENV) {
  AWSXRay.captureAWSClient((documentClient as any).service);
}
