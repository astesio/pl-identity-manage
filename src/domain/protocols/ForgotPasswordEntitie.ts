import { ForgotPasswordType } from '../types/ForgotPasswordType';

export interface ForgotPasswordEntitie<TResult> {
  forgotPassword(identifier: ForgotPasswordEntitie.Params): TResult;
}

export namespace ForgotPasswordEntitie {
  export type Params = ForgotPasswordType;
}
