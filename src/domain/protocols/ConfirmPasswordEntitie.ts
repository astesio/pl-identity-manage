import { ConfirmPasswordType } from '../types/ConfirmPasswordType';

export interface ConfirmPasswordEntitie {
  confirmPassword(data: ConfirmPasswordEntitie.Params): any;
}

export namespace ConfirmPasswordEntitie {
  export type Params = ConfirmPasswordType;
}
