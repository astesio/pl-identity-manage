import Joi, { Schema, ValidationResult, ValidationError } from 'joi';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { Controller, Validation } from '../protocols';
import { ok, badRequest, serverError } from '../helpers';
import { SignupUserEntitie } from '../../domain/protocols/SignupUserEntitie';

export class SignUpController
implements
    Controller<
      APIGatewayProxyEvent,
      APIGatewayProxyHandler | APIGatewayProxyResult | ValidationError
    >
{
  constructor(
    private readonly signupUser: SignupUserEntitie,
    private readonly validation: Validation<Schema, ValidationResult>
  ) {}

  async handle(
    request: APIGatewayProxyEvent | any
  ): Promise<
    APIGatewayProxyResult | APIGatewayProxyHandler | ValidationError | any
  > {
    try {
      const SignupUserSchema = Joi.object({
        password: Joi.string().required(),
        document: Joi.string().required(),
        fullName: Joi.string().min(6).required(),
        identifier: Joi.string().email().required(),
      });
      const { error } = this.validation.validate(
        JSON.parse(request.body),
        SignupUserSchema
      );
      if (error) {
        return badRequest(error);
      }
      return ok(await this.signupUser.signup({ ...JSON.parse(request.body) }));
    } catch (error: any | unknown) {
      return serverError(error);
    }
  }
}

export namespace SignUpController {
  export type Request = {
    document: string;
    password: string;
    fullName: string;
    identifier: string;
  };
}
