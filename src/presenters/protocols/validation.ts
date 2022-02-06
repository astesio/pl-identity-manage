export interface Validation<TSchema, TResult> {
  validate<TProperties>(properties: TProperties, schema: TSchema): TResult;
}
