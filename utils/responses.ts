export const httpResponse = (
  body: any,
  statusCode = 200,
  disableCors = false,
  customHeaders?: any
) => {
  const stringifiedBody = typeof body === "string" ? body : JSON.stringify(body, null, 2);
  const headers = {
      ...(customHeaders  || {})
  };

  if (!disableCors) {
    headers['Access-Control-Allow-Origin'] = '*';
    headers['Access-Control-Allow-Credentials'] = true;
  }

  return {
    body: stringifiedBody,
    statusCode,
    headers
  };
};
