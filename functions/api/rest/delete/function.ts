import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

import { httpResponse } from "../../../../utils/responses";
import { documentClient } from "../../../../services/DynamoDB";
import { deleteController } from "./controller";

export const handle: APIGatewayProxyHandler = async (event, _context) => {
  try {
    const result = await deleteController(event, documentClient);
    return httpResponse(result);
  } catch (error) {
    console.error(error);

    return httpResponse("Bad Request", 400);
  }
};