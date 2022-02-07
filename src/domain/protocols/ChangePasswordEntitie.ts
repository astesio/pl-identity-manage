import { ChangePasswordType } from '../types/ChangePasswordType';

export interface ChangePasswordEntitie {
  changePassword(data: ChangePasswordEntitie.Params): any;
}

export namespace ChangePasswordEntitie {
  export type Params = ChangePasswordType;
}
