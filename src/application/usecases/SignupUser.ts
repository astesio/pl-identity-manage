import { SignupUserEntitie } from '../../domain/protocols/SignupUserEntitie';

export class SignupUserUseCase implements SignupUserEntitie {
  constructor(private readonly _signupUser: SignupUserEntitie) {}

  public async signup(user: SignupUserEntitie.Params) {
    return this._signupUser.signup(user);
  }
}
