'use strict';

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { JoiHelper } from '../joi/Joi';
import { CognitoHelper } from '../cognito/Cognito';
import { SigninUserController } from '../../presenters/controllers/SigninUserController';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const joi = new JoiHelper();
  const cognito = new CognitoHelper();
  const signUpController = new SigninUserController(cognito, joi);
  return signUpController.handle(event);
};
