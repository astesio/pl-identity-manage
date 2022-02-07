import { LogoutUserType } from '../types/LogoutUserType';

export interface LogoutUserEntitie {
  logout(idToken: LogoutUserEntitie.Params): any;
}

export namespace LogoutUserEntitie {
  export type Params = LogoutUserType;
}
