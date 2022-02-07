import { ChangePasswordEntitie } from '../../domain/protocols';
import { ChangePasswordType } from '../../domain/types';

export class ChangePasswordUseCase implements ChangePasswordEntitie {
  changePassword(data: ChangePasswordType) {
    throw new Error('Method not implemented.');
  }
}
