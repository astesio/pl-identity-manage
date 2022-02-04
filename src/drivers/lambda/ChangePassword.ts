'use strict';

import { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<LambdaResponse> => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go ChangePassword! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

export type LambdaResponse = {
  headers: HeaderOption;
  statusCode: number;
  body: string;
};

interface HeaderOption {
  'Access-Control-Allow-Origin': string;
}
