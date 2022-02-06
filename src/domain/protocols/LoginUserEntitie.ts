import { LoginUserType } from '../types/LoginUserType';

export interface LoginUserEntitie<TResult> {
  logout(idToken: LoginUserEntitie.Params): TResult;
}

export namespace LoginUserEntitie {
  export type Params = LoginUserType;
}
