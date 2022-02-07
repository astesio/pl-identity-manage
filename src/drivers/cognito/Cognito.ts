import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { SignupUserEntitie } from '../../domain/protocols/SignupUserEntitie';
import { SigninUserEntitie } from '../../domain/protocols/SigninUserEntitie';
import { SigninUserType } from 'src/domain/types/SigninUserType';

export class CognitoHelper implements SignupUserEntitie, SigninUserEntitie {
  private _cognito: CognitoIdentityServiceProvider;
  constructor() {
    this._cognito = new CognitoIdentityServiceProvider();
  }

  public async signin(signInData: SigninUserType) {
    const params = {
      AuthFlow: 'ADMIN_NO_SRP_AUTH',
      UserPoolId: process.env.USER_POOL_ID as string,
      ClientId: process.env.CLIENT_ID as string,
      AuthParameters: {
        USERNAME: signInData.identifier,
        PASSWORD: signInData.password,
      },
    };
    const response = await this._cognito.adminInitiateAuth(params).promise();
    return response.AuthenticationResult;
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
