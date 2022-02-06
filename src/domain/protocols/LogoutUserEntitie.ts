import { LogoutUserType } from '../types/LogoutUserType';

export interface LogoutUserEntitie<TResult> {
  logout(idToken: LogoutUserEntitie.Params): TResult;
}

export namespace LogoutUserEntitie {
  export type Params = LogoutUserType;
}
