import { SigninUserType } from '../../domain/types/SigninUserType';
import { SigninUserEntitie } from '../../domain/protocols/SigninUserEntitie';

export class SigninUserUseCase implements SigninUserEntitie {
  constructor(private readonly _signinUser: SigninUserEntitie) {}
  public async signin(signinData: SigninUserType) {
    return this._signinUser.signin(signinData);
  }
}
