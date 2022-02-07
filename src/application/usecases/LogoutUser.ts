import { LogoutUserEntitie } from '../../domain/protocols';
import { LogoutUserType } from '../../domain/types';

export class LogoutUserUseCase implements LogoutUserEntitie {
  logout(idToken: LogoutUserType) {
    throw new Error('Method not implemented.');
  }
}
