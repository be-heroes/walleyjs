import {IAuthenticationProvider} from "../IAuthenticationProvider";
import {IAuthenticationFactor} from "./IAuthenticationFactor";

export interface IAuthenticationFactorMediator extends IAuthenticationProvider
{
    factors: IAuthenticationFactor[];
}