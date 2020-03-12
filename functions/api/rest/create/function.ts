import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

import { httpResponse } from "../../../../utils/responses";
import { documentClient } from "../../../../services/DynamoDB";
import { createController } from "./controller";

export const handle: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event);

  try {
    const result = await createController(event, documentClient);
    return httpResponse(result);
  } catch (error) {
    console.error(error);

    return httpResponse("Bad Request", 400);
  }
};
