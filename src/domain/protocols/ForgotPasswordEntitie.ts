import { ForgotPasswordType } from '../types/ForgotPasswordType';

export interface ForgotPasswordEntitie {
  forgotPassword(identifier: ForgotPasswordEntitie.Params): any;
}

export namespace ForgotPasswordEntitie {
  export type Params = ForgotPasswordType;
}
