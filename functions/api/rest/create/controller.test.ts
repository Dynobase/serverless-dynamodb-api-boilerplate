import { createController } from "./controller";
import { documentClient } from "../../../../services/DynamoDB";
import { APIGatewayProxyEventSample } from "../../../../consts/APIGatewayProxyEventSample";

describe("REST/Create", () => {
  test("Create Audience", async done => {
    const response = await createController(
      {
        ...APIGatewayProxyEventSample,
        body: `{"name":"Testing"}`
      },
      documentClient
    );

    expect(response).toMatchSnapshot();
    done();
  });
});
