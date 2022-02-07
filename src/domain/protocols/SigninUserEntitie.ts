import { SigninUserType } from '../types/SigninUserType';

export interface SigninUserEntitie {
  signin(idToken: SigninUserEntitie.Params): any;
}

export namespace SigninUserEntitie {
  export type Params = SigninUserType;
}
