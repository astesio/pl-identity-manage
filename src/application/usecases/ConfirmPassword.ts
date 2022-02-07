import { ConfirmPasswordEntitie } from '../../domain/protocols';
import { ConfirmPasswordType } from '../../domain/types';

export class ConfirmPasswordUseCase implements ConfirmPasswordEntitie {
  confirmPassword(data: ConfirmPasswordType) {
    throw new Error('Method not implemented.');
  }
}
