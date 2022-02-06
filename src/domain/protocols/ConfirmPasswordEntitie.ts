import { ConfirmPasswordType } from '../types/ConfirmPasswordType';

export interface ConfirmPasswordEntitie<TResult> {
  confirmPassword(data: ConfirmPasswordEntitie.Params): TResult;
}

export namespace ConfirmPasswordEntitie {
  export type Params = ConfirmPasswordType;
}
