import { createController } from "./controller";
import { documentClient } from "../../../../services/DynamoDB";
import { APIGatewayProxyEventSample } from "../../../../consts/APIGatewayProxyEventSample";

describe("REST/Create", () => {
  test("returns created Thing", async done => {
    const response = await createController(
      {
        ...APIGatewayProxyEventSample,
        body: `{"name":"Testing"}`
      },
      documentClient // can be mocked to disable DB access
    );

    expect(response).toMatchSnapshot();
    done();
  });
});
