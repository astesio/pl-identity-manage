'use strict';

import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { JoiHelper } from '../joi/Joi';
import { CognitoHelper } from '../cognito/Cognito';
import { SignUpController } from '../../presenters/controllers/SignupUserController';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const joi = new JoiHelper();
  const cognito = new CognitoHelper();
  const signUpController = new SignUpController(cognito, joi);
  return signUpController.handle(event);
};
