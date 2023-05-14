import {IAuthenticationProvider} from "./IAuthenticationProvider";
import {IAuthenticationResult} from "./IAuthenticationResult";
import {ICredentials} from "../ICredentials";

export abstract class AuthenticationProvider implements IAuthenticationProvider
{    
    abstract authenticate(credentials: ICredentials): Promise<IAuthenticationResult>
}