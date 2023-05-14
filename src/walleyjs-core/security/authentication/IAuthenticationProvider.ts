import {ICredentials} from "../ICredentials";
import {IAuthenticationResult} from "./IAuthenticationResult";

export interface IAuthenticationProvider
{
    authenticate(credentials: ICredentials, ...params: any[]): Promise<IAuthenticationResult | WeakMap<IAuthenticationProvider, IAuthenticationResult>>;
}