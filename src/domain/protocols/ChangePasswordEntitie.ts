import { ChangePasswordType } from '../types/ChangePasswordType';

export interface ChangePasswordEntitie<TResult> {
  changePassword(data: ChangePasswordEntitie.Params): TResult;
}

export namespace ChangePasswordEntitie {
  export type Params = ChangePasswordType;
}
