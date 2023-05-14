import {IAuthenticationProvider} from "../IAuthenticationProvider";

export interface IAuthenticationFactor extends IAuthenticationProvider
{
    label: Symbol;
}