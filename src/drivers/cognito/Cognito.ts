import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { SignupUserEntitie } from '../../domain/protocols/SignupUserEntitie';

export class CognitoHelper implements SignupUserEntitie {
  private _cognito: CognitoIdentityServiceProvider;
  constructor() {
    this._cognito = new CognitoIdentityServiceProvider();
  }

  public async signup(data: SignupUserEntitie.Params): Promise<any> {
    const params: CognitoIdentityServiceProvider.AdminCreateUserRequest = {
      UserPoolId: process.env.USER_POOL_ID as string,
      Username: data.identifier,
      UserAttributes: [
        {
          Name: 'email',
          Value: data.identifier,
        },
        {
          Name: 'email_verified',
          Value: 'true',
        },
      ],
      MessageAction: 'SUPPRESS',
    };
    const response = await this._cognito.adminCreateUser(params).promise();
    if (response.User) {
      const paramsForSetPass: CognitoIdentityServiceProvider.AdminSetUserPasswordRequest =
        {
          Password: data.password,
          UserPoolId: process.env.USER_POOL_ID as string,
          Username: data.identifier,
          Permanent: true,
        };
      await this._cognito.adminSetUserPassword(paramsForSetPass).promise();
    }
    return response;
  }
}
