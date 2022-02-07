import { ForgotPasswordEntitie } from '../../domain/protocols';
import { ForgotPasswordType } from '../../domain/types';

export class ForgotPasswordUseCase implements ForgotPasswordEntitie {
  forgotPassword(identifier: ForgotPasswordType) {
    throw new Error('Method not implemented.');
  }
}
