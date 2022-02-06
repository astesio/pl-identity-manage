import {
  SignupUserType,
  passwordType,
  documentType,
  fullNameType,
  identifierType,
} from '../types/SignupUserType';

export interface SignupUserEntitie {
  signup(user: SignupUserEntitie.Params): any;
}

export namespace SignupUserEntitie {
  export type Params = SignupUserType;
  export type password = passwordType;
  export type document = documentType;
  export type fullName = fullNameType;
  export type identifier = identifierType;
}
