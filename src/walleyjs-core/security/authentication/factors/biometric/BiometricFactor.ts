import {AuthenticationProvider} from "../../AuthenticationProvider";
import {BiometricAuthenticationCredentials} from "./BiometricAuthenticationCredentials";
import {IAuthenticationFactor} from "../IAuthenticationFactor";
import {IAuthenticationResult} from "../../IAuthenticationResult";
import {IAuthenticationProvider} from "../../IAuthenticationProvider";

export abstract class BiometricFactor extends AuthenticationProvider implements IAuthenticationFactor
{
    label: Symbol;
    
    constructor(label:Symbol)
    {
        super()

        this.label = label;
    }

    abstract authenticate(credentials: BiometricAuthenticationCredentials): Promise<IAuthenticationResult | WeakMap<IAuthenticationProvider, IAuthenticationResult>>;
}