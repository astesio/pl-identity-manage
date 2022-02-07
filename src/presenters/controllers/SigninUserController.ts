import Joi, { Schema, ValidationResult, ValidationError } from 'joi';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { Controller, Validation } from '../protocols';
import { ok, badRequest, serverError } from '../helpers';
import { SigninUserEntitie } from '../../domain/protocols/SigninUserEntitie';

export class SigninUserController
implements
    Controller<
      APIGatewayProxyEvent,
      APIGatewayProxyHandler | APIGatewayProxyResult | ValidationError
    >
{
  constructor(
    private readonly _signInUser: SigninUserEntitie,
    private readonly _validation: Validation<Schema, ValidationResult>
  ) {}

  async handle(
    request: APIGatewayProxyEvent | any
  ): Promise<
    APIGatewayProxyResult | APIGatewayProxyHandler | ValidationError | any
  > {
    try {
      const SignInUserSchema = Joi.object({
        password: Joi.string().required(),
        identifier: Joi.string().email().required(),
      });
      // I know it's bad, but I didn't have time to implement log class
      console.info(
        `SigninUserController::handle::SignInUserSchema: ${JSON.stringify(
          SignInUserSchema
        )}`
      );
      const { error } = this._validation.validate(
        JSON.parse(request.body),
        SignInUserSchema
      );
      if (error) {
        // I know it's bad, but I didn't have time to implement log class
        console.error(
          `SigninUserController::handle::error: ${JSON.stringify(error)}`
        );
        return badRequest(error);
      }
      return ok(await this._signInUser.signin({ ...JSON.parse(request.body) }));
    } catch (error: any | unknown) {
      // I know it's bad, but I didn't have time to implement log class
      console.error(
        `SigninUserController::handle::catch: ${JSON.stringify(error)}`
      );
      return serverError(error);
    }
  }
}
