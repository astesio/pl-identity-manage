import { Schema, ValidationResult } from 'joi';
import { Validation } from '../../presenters/protocols/validation';

export class JoiHelper implements Validation<Schema, ValidationResult> {
  validate<TProperties>(
    properties: TProperties,
    schema: Schema
  ): ValidationResult {
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };
    return schema.validate(properties, options);
  }
}
